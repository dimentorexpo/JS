let chosentheme;
let pureArray=[];
var win_Grabber =  // описание элементов окна Grabber
    `<div style="display: flex; width: 650px;">
        <span style="width: 650px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 550;" id="grabdata">
                                <button id="hideMeGrabber" style="width:50px; background: #228B22;">hide</button>
                        </div>
                        <div style="margin: 5px; width: 650px" id="grabbox">
								 <span style="color:bisque; float:center; margin-top:5px; margin-left:10px;">Начальная дата <input type="date" style="color:black; margin-left:20px;  width:125px;" name="FirstData" id="dateFromGrab"></span>
								 <span style="color:bisque; margin-top:2px; float:right; margin-right:10px; height:28px;">Конечная дата <input type="date" style="color:black; float:right; margin-left:20px; margin-right:10px; width:125px;" name="LastData" id="dateToGrab"</span>
                        </div>
						
						<div id="opscontainer" style="color: bisque; background: #ff7f507d; text-align: center; cursor: pointer;">Фильтр по операторам</div>
						
							<div id="activeoperatorsgroup" style="max-height:200px; overflow-y:auto; display: none; grid-template-columns: repeat(3, 1fr); margin-left:5px;">
														
							</div>
								<label id="hideselecall" style="display: none; color:bisque; margin-left:5px;"><input type="checkbox" id="checkthemall"> Select All</label>
						<div>
						
								<select id="ThemesToSearch" style="margin-left:150px; margin-top:10px;">
									<option style="background-color:DarkKhaki;" value="skmob">Skyeng👨‍🎓Mob</option>
									<option value="1804">-Авторизация</option>
									<option value="1805">-Домашка</option>
									<option value="1806">-Оплата</option>
									<option value="1807">-Профиль</option>
									<option value="1808">-Тренажер слов</option>
									<option value="1809">-Уроки</option>
									<option value="1810">-Чат</option>
									<option style="background-color:DarkKhaki;" value="tmob">Teachers👽Mob</option>
                                    <option value="1833">-Авторизация</option>
									<option value="1836">-Виджет расписания</option>
									<option value="1839">-Чат</option>
									<option value="1835">-Виджет финансов</option>
									<option value="1838">-Профиль</option>
									<option value="1840">-Сторис</option>
									<option value="1837">-Стр расписания</option>
									<option value="1834">-Стр финансов</option>
									<option style="background-color:DarkKhaki;" value="sksmpar">Skysmart👪родит</option>
                                    <option value="1884">-Другое</option>
									<option value="1883">-Материалы</option>
									<option value="1880">-Предметы и баланс</option>
									<option value="1881">-Профиль родителя</option>
									<option value="1879">-Расписание</option>
									<option value="1882">-Чат</option>
									<option style="background-color:DarkKhaki;" value="solanka">Different</option>
                                    <option value="2034">-Прочее</option>
									<option value="2030">-Slack-вход</option>
									<option value="2020">-Логи ур У</option>
									<option value="2019">-Логи ур П</option>
									<option value="2018">-БД ур оператор</option>
									<option value="2017">-БД ур система</option>
									<option style="background-color:DarkKhaki;" value="payf">Проблемы с оплатой</option>
                                    <option value="1077">-Вина школы</option>
									<option value="1658">-Консультация</option>
									<option value="1661">-Карта У</option>
									<option value="1662">-Сбой</option>
									<option value="1660">-Подписки</option>
									<option style="background-color:DarkKhaki;" value="hwtr">Проблемы с ДЗ</option>
                                    <option value="1744">-Контент</option>
									<option value="1745">-Оценка</option>
									<option value="1746">-Словарь</option>
									<option value="1747">-Упражнение</option>
									<option style="background-color:DarkKhaki;" value="svyaz">Проблемы связь</option>
                                    <option value="1581">-ОС/брауз ниж мин</option>
									<option value="1589">-Конс раб св</option>
									<option value="1582">-Корп с/ус</option>
									<option value="1583">-ОС/браузер</option>
                                    <option value="1586">-ПК</option>
									<option value="1584">-Гарнитура</option>
									<option value="1585">-Камера</option>
									<option value="1580">-Блок ПО</option>
									<option value="1594">-Не подерж брауз</option>
									<option value="1595">-Не под кам гарн пк</option>
                                    <option value="1593">-Сбой платф</option>
									<option value="1592">-Сб задерж кам</option>
									<option value="1587">-Инет ниж мин</option>
									<option value="1590">-Сб плат блк прер</option>
									<option value="1588">-Хар ниж мин</option>
									<option value="1591">-Сб задерж зв</option>
									<option style="background-color:DarkKhaki;" value="lkp">Проблемы ЛКП</option>
                                    <option value="1721">-Группа</option>
									<option value="1714">-Чат</option>
									<option value="1719">-Финансы</option>
									<option value="1717">-Упражнения</option>
                                    <option value="1712">-Карта роста</option>
									<option value="1716">-Настройки</option>
									<option value="1718">-Перерыв</option>
									<option value="1715">-Профиль</option>
									<option value="1720">-Раб на пров</option>
									<option value="1713">-Расписание</option>
									<option style="background-color:DarkKhaki;" value="lku">Проблемы ЛКУ</option>
                                    <option value="1708">-Чат</option>
									<option value="1710">-Профиль</option>
									<option value="1706">-Видж прогр</option>
									<option value="1707">-Ис зан/портф</option>
                                    <option value="1709">-Семья</option>
									<option value="1711">-Настройки</option>
									<option value="1705">-Навыки</option>
									<option value="1704">-Грамматика</option>
									<option style="background-color:DarkKhaki;" value="problvh">Проблемы вход</option>
                                    <option value="1632">-Не привяз почт/тел</option>
									<option value="1635">-Данные</option>
									<option value="1634">-Сброс пароля</option>
									<option value="1631">-Консультация</option>
                                    <option value="1633">-Сбой</option>
									<option style="background-color:DarkKhaki;" value="problpodk">Проблемы подкл</option>
                                    <option value="1624">-Истек подпис</option>
									<option value="1627">-Консультациия</option>
									<option value="1629">-Нет кн входа</option>
									<option value="1628">-У не в ГУ</option>
                                    <option value="1625">-Ур в др вр</option>
									<option value="1626">-У отпуск</option>
                                    <option value="1630">-Неакт кн вх</option>
									<option style="background-color:DarkKhaki;" value="lesfunc">Функционал урок</option>
                                    <option value="1772">-STT</option>
									<option value="1773">-TTT</option>
									<option value="1767">-Вложения</option>
									<option value="1771">-Демонстрация экр</option>
                                    <option value="1768">-Доска</option>
									<option value="2037">-Заметки</option>
                                    <option value="1775">-Отпр ДЗ на ур</option>
                                    <option value="1770">-Перекл материалов</option>
									<option value="1776">-Ауд/вид плеер</option>
                                    <option value="1769">-Словарь на ур</option>
                                    <option value="1774">-Упражн на ур</option>
									<option style="background-color:DarkKhaki;" value="feedbk">Отзывы и пожел</option>
                                    <option value="1970">-Vim-контент</option>
									<option value="1971">-Vim-оценка</option>
									<option value="1972">-Vim-словарь</option>
									<option value="1973">-Vim-упражнения</option>
                                    <option value="1966">-ЛК-ОС род</option>
									<option value="1965">-ЛК-пер,отм ур</option>
                                    <option value="1967">-ЛК-профиль</option>
                                    <option value="1968">-ЛК-семья</option>
									<option value="1969">-ЛК чат</option>
                                    <option value="1974">-App Skyeng</option>
                                    <option value="1975">-App Teachers</option>
                                    <option value="1979">-App Skypro</option>
                                    <option value="1976">-App класс</option>
									<option value="1977">-App решения</option>
                                    <option value="1978">-App Skysmart род</option>
                                    <option value="1980">-Прочее</option>
                                    </select>
                               <button style=" title="ищет чаты по тематике" id="stargrab">Find</button>
							   	<button id="webtoCSV">💾 Download CSV</button>
						</div>
						</span>

						<div id="grabbedchats">
							 <p id="themesgrabbeddata" style="width:650px; max-height:400px; color:bisque; margin-left:5px; overflow:auto"></p>

						</div>
        </span>
</div>`;

if (localStorage.getItem('winTopGrabber') == null) { // началоное положение окна статистики (если не задано ранее)
    localStorage.setItem('winTopGrabber', '120');
    localStorage.setItem('winLeftGrabber', '295');
}

let wintGrabber = document.createElement('div'); // создание окна работы со Grabber
document.body.append(wintGrabber);
wintGrabber.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopGrabber') + 'px; left: ' + localStorage.getItem('winLeftGrabber') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintGrabber.style.display = 'none';
wintGrabber.setAttribute('id', 'AF_Grabber');
wintGrabber.innerHTML = win_Grabber;

var listenerGrabber = function (e, a) { // сохранение позиции окна работы со Grabber
    wintGrabber.style.left = Number(e.clientX - myXGrabber) + "px";
    wintGrabber.style.top = Number(e.clientY - myYGrabber) + "px";
    localStorage.setItem('winTopGrabber', String(Number(e.clientY - myYGrabber)));
    localStorage.setItem('winLeftGrabber', String(Number(e.clientX - myXGrabber)));
};

wintGrabber.onmousedown = function (a) { // изменение позиции окна работы со Grabber
    if (checkelementtype(a)) {
        window.myXGrabber = a.layerX;
        window.myYGrabber = a.layerY;
        document.addEventListener('mousemove', listenerGrabber);
    }
}
wintGrabber.onmouseup = function () { document.removeEventListener('mousemove', listenerGrabber); } // прекращение изменения позиции окна работы с Grabber

// document.getElementById('AF_Grabber').ondblclick = function (a) { // скрытие окна работы со Grabber
    // if (checkelementtype(a)) { document.getElementById('AF_Grabber').style.display = 'none'; }
// }

    document.getElementById('hideMeGrabber').onclick = function () { // скрытие окна работы со Grabber
        if (document.getElementById('AF_Grabber').style.display == '')
            document.getElementById('AF_Grabber').style.display = 'none'
    }
	
	//Функция очищения выведенной информации после поиска
document.getElementById('clearall').onclick = function () {

}

async function getlistofopers() {
	await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState").then(r=>r.json()).then(r=>testo=r)

let tpopers = testo.onOperator
  .map(el => el.groupId === "c7bbb211-a217-4ed3-8112-98728dc382d8" ? ({ id: el.operator.id, name: el.operator.fullName }) : null)
  .filter(el => el !== null)
  .filter(el => /ТП[^0-9](?!.*\(CRM2\))/.test(el.name));
  
  activeoperatorsgroup.innerHTML = ''
  for (let i=0; i < tpopers.length; i++) {
      if (tpopers[i].name != 'ТП/ОКК-Березкин Александр' && tpopers[i].name != 'ТП-Борисов Евгений(СRM2)' && tpopers[i].name != 'ТП-Нагиев Эльдар' && tpopers[i].name != 'ТП-Стажер обучения' && tpopers[i].name != 'ТП-Пащенко Андрей') {
          activeoperatorsgroup.innerHTML += `<span><label><input type="checkbox" name="chekforsearch"><span style="color:bisque;"  name="listofops" value='${tpopers[i].id}'>${tpopers[i].name}</span></label></span>` 
      }
  }
  
    let listofchkbx = document.getElementsByName('chekforsearch')
	for (let i=0; i<listofchkbx.length; i++) {
		if (!listofchkbx[i].checked) {
			listofchkbx[i].checked = true;
		}
	}
  document.getElementById('checkthemall').checked = true
    
}

document.getElementById('openGrabber').onclick = function() {
	    if (document.getElementById('AF_Grabber').style.display == '')
            document.getElementById('AF_Grabber').style.display = 'none'
		else document.getElementById('AF_Grabber').style.display = ''
		
		let getcurdate = new Date();
		let year = getcurdate.getFullYear();
		let month = String(getcurdate.getMonth() + 1).padStart(2, "0");
		let day = String(getcurdate.getDate()).padStart(2, "0");

		let lastDayOfPrevMonth = new Date(year, getcurdate.getMonth(), 0).getDate();
		let fromDate = new Date(year, getcurdate.getMonth(), day - 1);
		let toDate = new Date(year, getcurdate.getMonth(), day);

		if (day === "01") {
		  // set date range to previous month
		  dateFromGrab = new Date(year, getcurdate.getMonth() - 1, lastDayOfPrevMonth);
		  dateToGrab = new Date(year, getcurdate.getMonth(), 1);
		}

		document.getElementById("dateFromGrab").value = `${fromDate.getFullYear()}-${String(fromDate.getMonth() + 1).padStart(2, "0")}-${String(fromDate.getDate()).padStart(2, "0")}`;
		document.getElementById("dateToGrab").value = `${toDate.getFullYear()}-${String(toDate.getMonth() + 1).padStart(2, "0")}-${String(toDate.getDate()).padStart(2, "0")}`;
		
		getlistofopers() 
		
}

document.getElementById('checkthemall').onclick = function() {
      let listofchkbx = document.getElementsByName('chekforsearch')
	for (let i=0; i<listofchkbx.length; i++) {
		if (listofchkbx[i].checked == true) {
			listofchkbx[i].checked = false;
			document.getElementById('checkthemall').checked = false
		} else {
			listofchkbx[i].checked = true;
			document.getElementById('checkthemall').checked = true
		} 
	}
}

let chekopersarr=[];
let newarray = [];
let payloadarray = [];
let chatswithmarksarray = [];
let modifiedPureArray = [];
document.getElementById('stargrab').onclick = async function() {
	
	const timeOptions = {
	  timeZone: 'Europe/Moscow',
	  year: 'numeric',
	  month: 'numeric',
	  day: 'numeric'
	  // hour: 'numeric',
	  // minute: 'numeric',
	  // second: 'numeric'
};


	
	document.getElementById('themesgrabbeddata').innerHTML = '';
	
	//time and date block
		const padStart = (string, targetLength, padString) => {
		  return String(string).padStart(targetLength, padString);
		}

		const getFormattedDate = (date) => {
		  const year = date.getFullYear();
		  const month = padStart(date.getMonth() + 1, 2, '0');
		  const day = padStart(date.getDate(), 2, '0');
		  return `${year}-${month}-${day}T21:00:00.000z`;
		}

		const dateFromGrabInput = document.getElementById("dateFromGrab");
		const selectedDate = new Date(dateFromGrabInput.value);
		const leftDateFromGrab = getFormattedDate(selectedDate);

		const dateToGrabInput = document.getElementById("dateToGrab");
		const selectedEndDate = new Date(dateToGrabInput.value);
		const rightDateToGrab = `${selectedEndDate.getFullYear()}-${padStart(selectedEndDate.getMonth() + 1, 2, '0')}-${padStart(selectedEndDate.getDate(), 2, '0')}T20:59:59.059z`;

		const now = new Date();

// end of time and date


	
	chosentheme ='';
   let selTheme = document.getElementById('ThemesToSearch').options
  for (let i=0;i<selTheme.length;i++) {
    if (selTheme[i].selected == true) {
        console.log(selTheme[i].value)
		chosentheme = selTheme[i].value
    }
}

let spisochek = document.getElementsByName('listofops')
let namespisochek=[];
let cheklist = document.getElementsByName('chekforsearch')
let opgrdata;

chekopersarr = [];
for (let i=0; i<cheklist.length;i++) {
    if (cheklist[i].checked == true) {
        chekopersarr.push(spisochek[i].getAttribute('value'))    
        namespisochek.push(spisochek[i].textContent)    
    }
}

 payloadarray = [];  
 chatswithmarksarray = [];  
for (let i = 0; i < chekopersarr.length; i++) {
            page = 1;
            do {
                await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
                    headers: {
                        "content-type": "application/json",
                    },
                    body: `{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"participatingOperatorsIds\":[\"${chekopersarr[i]}\"],\"tsFrom\":\"${leftDateFromGrab}\",\"tsTo\":\"${rightDateToGrab}\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":${page},\"limit\":100}`,
                    method: "POST",
                    mode: "cors",
                    credentials: "include"
                })
				.then(r=>r.json()).
				then(r=>opgrdata=r)

					newarray = [];
					newarray = [...opgrdata.items].map(el => el.conversationId)
					// chatswithmarksarray.push([...opgrdata.items].filter(el => el.conversationId + " " + el.stats.rate.rate))
						const items = opgrdata.items;
						for (let i = 0; i < items.length; i++) {
						  const el = items[i];
						  if (el.stats.rate !== null && el.stats.rate !== undefined && el.stats.rate.rate !== undefined) {
							const obj = {
							  ConvId: el.conversationId,
							  Rate: el.stats.rate.rate
							};
							chatswithmarksarray.push(obj);
						  }
						}


					for (let j = 0; j < newarray.length; j++) {
						await fetch("https://skyeng.autofaq.ai/api/conversations/" + newarray[j])
							.then(r => r.json())
							.then(r => {
								if (r.payload.topicId.value === chosentheme) {
									payloadarray.push({ChatId: r.id, OperatorName: namespisochek[i], timeStamp: new Date(r.tsCreate).toLocaleString('ru-RU', timeOptions)});
									console.log(payloadarray)
									console.log(namespisochek[i])
								}
							});
					}
				
                page++;
                maxpage = opgrdata.total / 100;
            } while (page-1 < maxpage);
										
        }
		
			// const themesgrabbeddata = document.getElementById('themesgrabbeddata');
			// themesgrabbeddata.innerHTML = '';
			// pureArray = [];
			// const uniqueArray = [...new Set(payloadarray)];
			// pureArray = uniqueArray;

			// uniqueArray.forEach((element, index) => {
			  // const row = document.createElement('div');
			  // row.className = 'srvhhelpnomove';
			  // const chatId = element.ChatId;
			  // const matchedItem = chatswithmarksarray.find(item => item.ConvId === chatId);

			  // if (matchedItem) {
				// const rate = matchedItem.Rate !== undefined ? matchedItem.Rate : 'нет оценки';
				// row.textContent = `[${index + 1}] ${element.timeStamp} ${element.OperatorName} ${element.ChatId} (Rate: ${rate})`;
			  // } else {
				// row.textContent = `[${index + 1}] ${element.timeStamp} ${element.OperatorName} ${element.ChatId} (Rate: none)`;
			  // }

			  // themesgrabbeddata.appendChild(row);
			// });

			// themesgrabbeddata.innerHTML += '<span style="background: #166945; padding: 5px; color: floralwhite; font-weight: 700; border-radius: 10px;">' + "Всего найдено: " + uniqueArray.length + " обращений" + '</span>';
			
			
			const themesgrabbeddata = document.getElementById('themesgrabbeddata');
			themesgrabbeddata.innerHTML = '';

			// Create the table element
			const table = document.createElement('table');
			table.className = 'srvhhelpnomove';

			// Create the table header row
			const headerRow = document.createElement('tr');
			const columnNames = ['№', 'Date', 'Operator', 'ChatId', 'CSAT'];

			// Add column names to the header row
			columnNames.forEach(columnName => {
			  const th = document.createElement('th');
			  th.textContent = columnName;
			  th.style = 'text-align:center;'
			  headerRow.appendChild(th);
			});

			// Append the header row to the table
			table.appendChild(headerRow);
			
			 const uniqueArray = [...new Set(payloadarray)];
			 pureArray = uniqueArray;
			 
				modifiedPureArray = pureArray.map(pureElement => {
				  const matchedItem = chatswithmarksarray.find(item => item.ConvId === pureElement.ChatId);
				  if (matchedItem && matchedItem.Rate !== null && matchedItem.Rate !== undefined) {
					return { ...pureElement, Rate: matchedItem.Rate };
				  } else {
					return { ...pureElement, Rate: " " };
				  }
				});


			// Iterate through the data array and create table rows
			uniqueArray.forEach((element, index) => {
			  const row = document.createElement('tr');

			  // Add the index column
			  const indexCell = document.createElement('td');
			  indexCell.textContent = index + 1;
			  row.appendChild(indexCell);

			  // Add the date column
			  const dateCell = document.createElement('td');
			  dateCell.textContent = element.timeStamp;
			  row.appendChild(dateCell);

			  // Add the operator column
			  const operatorCell = document.createElement('td');
			  operatorCell.textContent = element.OperatorName;
			  operatorCell.style = 'text-align:center;'
			  row.appendChild(operatorCell);

			  // Add the chatId column
			  const chatIdCell = document.createElement('td');
			  chatIdCell.textContent = element.ChatId;
			  row.appendChild(chatIdCell);

			  // Find the matched item in chatswithmarksarray
			  const matchedItem = chatswithmarksarray.find(item => item.ConvId === element.ChatId);

			  // Add the CSAT column
			  const csatCell = document.createElement('td');
			  csatCell.textContent = matchedItem ? (matchedItem.Rate !== undefined ? matchedItem.Rate : '-') : '-';
			  csatCell.style = 'text-align:center;'
			  row.appendChild(csatCell);

			  // Append the row to the table
			  table.appendChild(row);
			});

			// Append the table to the themesgrabbeddata element
			themesgrabbeddata.appendChild(table);

			themesgrabbeddata.innerHTML += '<span style="background: #166945; padding: 5px; color: floralwhite; font-weight: 700; border-radius: 10px;">' + "Всего найдено: " + uniqueArray.length + " обращений" + '</span>';

			
			

			
}

document.getElementById('opscontainer').onclick = function() {
	if (document.getElementById('activeoperatorsgroup').style.display == "none") {
		document.getElementById('activeoperatorsgroup').style.display = "grid"
		document.getElementById('hideselecall').style.display = ""
	} else { 
	document.getElementById('activeoperatorsgroup').style.display = "none"
	document.getElementById('hideselecall').style.display = "none"
	
	}
	
}


function downloadCSV(data, filename) {
  const csvContent = "\uFEFF" + convertArrayToCSV(data);
  const encodedUri = "data:text/csv;charset=utf-8," + encodeURIComponent(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function convertArrayToCSV(data) {
  const csvRows = [];
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(","));
  for (const row of data) {
    const values = headers.map(header => {
      const escaped = String(row[header]).replace(/"/g, '\\"');
      return `"${escaped}"`;
    });
    csvRows.push(values.join(","));
  }
  return csvRows.join("\n");
}

document.getElementById('webtoCSV').onclick = function() {
	  const filename = "data.csv";

  // downloadCSV(pureArray, filename);
  downloadCSV(modifiedPureArray, filename);
}
