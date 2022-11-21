var win_GrList =  // описание элементов окна Списка группы
    `<div style="display: flex; width: 450px;">
        <span style="width: 450px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 400;" id="grlistdata">
                                <button id="hideMeGrList" style="width:50px; background: #228B22;">hide</button>
                        </div>
						<div>
                        <input id="idgrouptolist" placeholder="ID группы" title="Введите ID группы для получения списка учеников" autocomplete="off" type="text" style="text-align: center; width: 80px; color: black;margin-left:5px; position:relative; left:30%;">
							<button title="Запуск получения списка учеников группы" id="getidgrouptolist" style="position:relative; left:30%;">Get info</button>
						</div>
				</span>
						<div id="grlstdiv">
							 <br>
							 <p id="grlistinfo" style="margin-left: 5px; color:bisque;"></span>
							 <br>
						</div>
        </span>
</div>`;

if (localStorage.getItem('winTopGrList') == null) {  // начальное положение окна списка группы
    localStorage.setItem('winTopGrList', '120');
    localStorage.setItem('winLeftGrList', '295');
}

let wintGrList = document.createElement('div'); // создание окна Список группы
document.body.append(wintGrList);
wintGrList.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopGrList') + 'px; left: ' + localStorage.getItem('winLeftGrList') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintGrList.style.display = 'none';
wintGrList.setAttribute('id', 'AF_GrList');
wintGrList.innerHTML = win_GrList;

if (typeof modulesarray != 'undefined') { // добавляем в исходный массив модулей для проверки переменную wintGrList, чтобы потом проверять подключился этот модуль или нет
	modulesarray.push(wintGrList) 
}


var listenerGrList = function (e, a) { // сохранение позиции окна Список группы
    wintGrList.style.left = Number(e.clientX - myX13) + "px";
    wintGrList.style.top = Number(e.clientY - myY13) + "px";
    localStorage.setItem('winTopGrList', String(Number(e.clientY - myY13)));
    localStorage.setItem('winLeftGrList', String(Number(e.clientX - myX13)));
};

wintGrList.onmousedown = function (a) { // изменение позиции окна Список группы
    if (checkelementtype(a)) {
        window.myX13 = a.layerX;
        window.myY13 = a.layerY;
        document.addEventListener('mousemove', listenerGrList);
    }
}
wintGrList.onmouseup = function () { document.removeEventListener('mousemove', listenerGrList); } // прекращение изменения позиции окна Список группы

document.getElementById('AF_GrList').ondblclick = function (a) { // скрытие окна Список группы по двойному клику
    if (checkelementtype(a)) { document.getElementById('AF_GrList').style.display = 'none'; }
}

    document.getElementById('hideMeGrList').onclick = function () { // скрытие окна Список группы
        if (document.getElementById('AF_GrList').style.display == '') {
            document.getElementById('AF_GrList').style.display = 'none';
            document.getElementById('grlistinfo').innerText = "";
            document.getElementById('idgrouptolist').value = "";
        }
    }

    let grdata = [];
    let responsegrdata;
    document.getElementById('getidgrouptolist').onclick = async function () {
        let dataarr = [];
        document.getElementById('grlistinfo').innerHTML = "Загрузка...";
        let tempgrid = document.getElementById('idgrouptolist').value;
        tempgrid = tempgrid.trim();

        document.getElementById('responseTextarea1').value = '{}'
        document.getElementById('responseTextarea2').value = "https://learning-groups-storage-api.skyeng.ru/api/v1/groupParticipants/getParticipants/" + tempgrid;
        document.getElementById('responseTextarea3').value = 'heredata'
        document.getElementById('sendResponse').click()


        document.getElementById("responseTextarea1").addEventListener("DOMSubtreeModified", function () {
            responsegrdata = document.getElementById('responseTextarea1').getAttribute('heredata')
            // grdata = responsegrdata;
            if (responsegrdata != null) {
                grdata = JSON.parse(responsegrdata)
                document.getElementById('responseTextarea1').removeAttribute('heredata');
                console.log(grdata)
                for (let i = 0; i < grdata.data.students.length; i++) {
                    dataarr += [i + 1] + "." + '<span class="grstdcrm" style="cursor:pointer" title="открывает профиль в CRM">ℹID У:</span>' + grdata.data.students[i].userId + " ID услуги: " + grdata.data.students[i].educationServiceId + " " + '<span class="getstname" style="cursor:pointer" title="Узнать имя и фамилию ученика, если раз нажали не появилось нажмите через секунду второй раз, быстро на все глаза не нажимайте, иначе получите некорректную информацию">👁‍🗨</span>' + '<span class="stname"></span>' + '<br>';
                }

                if (grdata.data.teachers == null || grdata.data.teachers == undefined)
                    document.getElementById('grlistinfo').innerHTML = dataarr;
                else document.getElementById('grlistinfo').innerHTML = dataarr + '<br>' + " ID П " + grdata.data.teachers[0].userId;

                let arstname = document.querySelectorAll('.stname');
                let getstnamearr = document.querySelectorAll('.getstname');
                for (let f = 0; f < getstnamearr.length; f++) {
                    getstnamearr[f].onclick = function () {

                        document.getElementById('responseTextarea1').value = `{}`
                        document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + grdata.data.students[f].userId + "?crm2=true&debugParam=person-page";
                        document.getElementById('responseTextarea3').value = 'dataname'
                        document.getElementById('sendResponse').click()

                        setTimeout(async function () {
                            namedata = document.getElementById('responseTextarea1').getAttribute('dataname');
                            namedata = await namedata;
                            namedata = JSON.parse(namedata);
                            arstname[f].innerHTML = namedata.data.name + " " + namedata.data.surname;
                            namedata = document.getElementById('responseTextarea1').removeAttribute('dataname');
                        }, 500)
                    }
                }

                let grstdcrmarr = document.querySelectorAll('.grstdcrm');
                for (let f = 0; f < grstdcrmarr.length; f++) {
                    grstdcrmarr[f].onclick = function () {
                        window.open("https://crm2.skyeng.ru/persons/" + grdata.data.students[f].userId)
                    }
                }
            }
            dataarr = ''
        })

    } // end of func getidgrouptolist
