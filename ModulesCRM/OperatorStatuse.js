    
var win_OperStatus =  // описание элементов окна оценок от пользователя
    `<div style="display: flex; width: 500px;">
        <span style="width: 500px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 500px;" id="OpSt_header">
                                <button title="скрывает меню" id="hideMeOpSt" style="width:50px; background: #228B22;">hide</button>
								<button id="clearopersinfo">🧹</button>
                        </div>

						<div>
							<button id="getopersinfo">🔎</button>
						</div>
			    </span>
                        <div style="margin: 5px; width: 500px" id="opers_box">
                                <p id="operstatustable" style="max-height:400px; margin-left:5px; font-size:16px; color:bisque; overflow:auto;"></p>
                        </div>
        </span>
</div>`;

if (localStorage.getItem('winTopOpStat') == null) { //начальное положение окна оценко
    localStorage.setItem('winTopOpStat', '120');
    localStorage.setItem('winTopOpStat', '295');
}
	
let wintOperStatus = document.createElement('div'); // создание окна поиска оценок от пользователя
document.body.append(wintOperStatus);
wintOperStatus.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopOpStat') + 'px; left: ' + localStorage.getItem('winTopOpStat') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintOperStatus.style.display = 'none';
wintOperStatus.setAttribute('id', 'CRM_OperStat');
wintOperStatus.innerHTML = win_OperStatus;

var listenerOpStatus = function (e, a) { // сохранение позиции окна поиска оценок от пользователя
    wintOperStatus.style.left = Number(e.clientX - myXOpSt) + "px";
    wintOperStatus.style.top = Number(e.clientY - myYOpSt) + "px";
    localStorage.setItem('winTopOpStat', String(Number(e.clientY - myYOpSt)));
    localStorage.setItem('winTopOpStat', String(Number(e.clientX - myXOpSt)));
};

wintOperStatus.onmousedown = function (a) { // изменение позиции окна поиска оценок от пользователя
    if (checkelementtype(a)) {
        window.myXOpSt = a.layerX;
        window.myYOpSt = a.layerY;
        document.addEventListener('mousemove', listenerOpStatus);
    }
}
wintOperStatus.onmouseup = function () { document.removeEventListener('mousemove', listenerOpStatus); } // прекращение изменения позиции окна поиска оценок от пользователя


	
	document.getElementById('CRM_OperStat').ondblclick = function (a) { // скрытие окна оценок от пользователя по двойному клику
		if (checkelementtype(a)) { document.getElementById('CRM_OperStat').style.display = 'none'; }
	}
	
	document.getElementById('hideMeOpSt').onclick = function () { // скрытие окна поиска оценок от пользователя
		if (document.getElementById('CRM_OperStat').style.display == '')
			document.getElementById('CRM_OperStat').style.display = 'none'
			socket.send('2')
	}
	
	
	document.getElementById('clearopersinfo').onclick = function () { // кнопка очистки поля
		document.getElementById('operstatustable').innerHTML = "";
	}

document.getElementById('btnOperStatus').onclick = function () {
	let dataoscont = [];
		if (document.getElementById('CRM_OperStat').style.display == 'none')
			document.getElementById('CRM_OperStat').style.display = ''
		else document.getElementById('CRM_OperStat').style.display = 'none'
		
	
	 var socket = new WebSocket("wss://telephony.skyeng.ru/phone-stats/?EIO=4&transport=websocket"); 
		var checksocket = setInterval(function() {
			if (socket.readyState == 1) {
				clearInterval(checksocket)
				socket.send('40/group-413,')
				socket.onmessage = function(event) {
				var message = event.data;
					console.log(message)
					socket.send('3')
					
					if (message.match(/(:")(\D+)(",)(?="lastStatus":"Ready")/gm) != null) {
						for (let i = 0; i < message.match(/(:")(\D+)(",)(?="lastStatus":"Ready")/gm).length; i++) {
							dataoscont += message.match(/(:")(\D+)(",)(?="lastStatus":"Ready")/gm)[i].replaceAll(":", '').replace(",",'').replaceAll('"','') + ' Ready' + '<br>'
						}
					}
					
					document.getElementById('operstatustable').innerHTML = dataoscont

				}		
			}
		}, 1000 )

		// setTimeout(function() {
			// socket.send('40/group-413,')
			// socket.onmessage = function(event) {
			// let message = event.data;
				// console.log(message)
				// socket.send('3')
			// }
		// }, 5000) 
	
}
