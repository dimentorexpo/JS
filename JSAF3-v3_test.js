﻿let pldata;
let drevo;
let afopername;
let foundarr;
let flagsearch;
let operchatsdata;
let werechats = false;
let chatisopen = "";
let isChatOnOperator = false;
document.getElementById('testUsers').style.display = 'none'; // скрываю плавающее окно при загрузке страницы

function mystyles() {
    let mstl = document.createElement('style');
    document.body.append(mstl);
    var style = `.win_btn {
		background-color: #768d87;
		border-radius: 10px;
		border: 1px solid #566963;
		color: #ffffff;
		font-size: 12px;
		padding: 3px 2px;
		margin: -2px 1px;
	}
	button {
		background-color:#768d87;
		border-radius:5px;
		border:1px solid #566963;
		color:#ffffff;
		padding:2px 2px;
	}
	button:hover {
		background: #6A5ACD;
	}
	.activebtn {
		background-color: #1e90ff;
	}
	.activebtnsd {
		background-color: #ff6347;
	}
    .usinfoops{
        margin-left: 5px;
        width: 25.23px;
    }
    .uplinksbar {
        width:50px;
    }
    .sdcustfieldformlines {
        margin-top:5px;
        width: 420px;
    }
    .sdexpecactual {
        width: 420px;
    }
	.selchatact {
		border-left: 6px solid DeepSkyBlue;
	}
		.checkbox-audio {
			display: inline-block;
			height: 28px;
			line-height: 28px;
			margin-right: 10px;
			position: relative;
			vertical-align: middle;
			font-size: 14px;
			user-select: none;
		}
		.checkbox-audio .checkbox-audio-switch {
			position: relative;
			display: inline-block;
			box-sizing: border-box;
			width: 56px;
			height: 28px;
			border: 1px solid rgba(0, 0, 0, .1);
			border-radius: 25%/50%;
			vertical-align: top;
			background: #eee;
			transition: .2s;
		}
		.checkbox-audio .checkbox-audio-switch:before {
			content: '🔈';
			position: absolute;
			top: 1px;
			left: 1px;
			display: inline-block;
			width: 24px;
			height: 24px;
			border-radius: 50%;
			background: white;
			box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
			transition: .15s;
		}
		.checkbox-audio input[type=checkbox] {
			display: block;
			width: 0;
			height: 0;
			position: absolute;
			z-index: -1;
			opacity: 0;
		}
		.checkbox-audio input[type=checkbox]:not(:disabled):active + .checkbox-audio-switch:before {
			box-shadow: inset 0 0 2px rgba(0, 0, 0, .3);
		}
		.checkbox-audio input[type=checkbox]:checked + .checkbox-audio-switch {
			background: limegreen;
		}
		.checkbox-audio input[type=checkbox]:checked + .checkbox-audio-switch:before {
			content: '🔊';
			transform:translateX(28px);
		}
		#buttonOpenForm {
			height:50px;
		}
		.question-event {
			background:#1890FF26;
			min-width:280px;
			max-width:290px;
			margin-left: 10px;
			margin-bottom: 5px;
			padding: 5px 5px;
			float:left;
		}
		.question-event-name {
			color:#00BFFF;
			font-weight:700;
			font-size:12px;
			float:left;
			margin-right:5px;
			padding-left:5px;
		}
		.question-event-date {
			color: #C0C0C0;
			float: right;
			max-width: 333px;
			font-size: 12px;
		}
		.question-event-text {
			color:white;
			word-wrap: break-word;
			padding-left:5px;
		}
		.event-container  {
			float: left;
			color: white;
			text-align: center;
			width: 380px;
			font-size: 12px;
		}
		.event-name {
			float: left;
			color: white;
			text-align: center;
			width: 380px;
			font-size: 12px;
		}
		.event-date {
			float:right;
		}
		.event-other-date {
			float:right;
			font-size:12px;
		}
		.answer-bot-container {
			background: #52C41A26;
			min-width: 280px;
			max-width: 300px;
			float: right;
			margin-bottom: 5px;
			margin-right: 15px;
			padding: 5px 5px;
		}
		.answer-bot-name {
			color:#9ACD32;
			float:left;
			font-size:12px;
			font-weight:700;
			margin-right:5px;
			padding-left:5px;
		}
		.answer-bot-date {
			font-size:12px;
			color:#C0C0C0;
			float:right;
			max-width:400px;
		}
		.answer-oper-container {
			background: #FADA5E26;
			min-width: 280px;
			max-width: 320px;
			float: right;
			margin-bottom: 5px;
			margin-right: 15px;
			padding: 5px 5px;
		}
		.answer-oper-name {
			color:bisque;
			float:left;
			font-size:12px;
			padding-left:5px;
		}
		.oper-comment-container {
			background:#80808054;
			width:355px;
			float:left;
			margin-bottom:5px;
			margin-left: 10px;
			padding: 5px 5px;
		}
		.oper-comment-name {
			color:#C0C0C0;
			float:left;
			font-size:12px;"
		}
		.oper-comment-operator {
			color:#66CDAA;
			float:left;
			font-size:12px;
		}
		.event-name.light {
			color: #999999 !important;
		}
		.question-event-text.light {
			color: #000 !important;
		}
		.question-event-name.light {
			color: #23609E !important;
		}
		.event-container.light {
			color: #999999 !important;
		}
		.oper-comment-container.light {
			background: #80808026 !important;
		}
		.oper-comment-name.light {
			color: #808080 !important;
		}
		.oper-comment-operator.light {
			color: #2a8ed9 !important;
		}
		.question-event-date.light {
			color: #999999 !important;
		}
		.answer-bot-date.light {
			color: #999999 !important;
		}
		.answer-oper-name.light {
			color: #b8860b  !important;
		}
		.answer-bot-name.light {
			color: #388C11 !important;
		}
		.chatlist.light {
			color:#000 !important;
		}
		.copyserviceid {
			margin-left: 5px;
			cursor: pointer;
		}
		.underline-service {
			width:260px; border: 1px dotted #ff0000;
			border-style: none none dotted;
			color: #fff;
			background-color: #fff;
		}
		.img-chat-history {
			width:160px;
			transition: all 0.5s ease-out;
		}
		.img-chat-history:hover {
			transform: scale(1.5);
			width: 300px;
			margin-left: 50px;
			z-index: 9999;
		}
		.cursor-userinfobtns {
			cursor:pointer;
			font-weight:700;
		}
		#servDsk:hover {
			background:DeepSkyBlue;
			color:white;
			font-weight:700;
		}
		#buttonOpenForm:hover {
			background:DeepSkyBlue;
			color:white;
			font-weight:700;
		}
		#butServ:hover {
			background:DeepSkyBlue;
			color:white;
			font-weight:700;
		}
		#butMarks:hover {
			background:DeepSkyBlue;
			color:white;
			font-weight:700;
		}
		#suggestform:hover {
			background:DeepSkyBlue;
			color:white;
			font-weight:700;
		}
		#otkaz:hover {
			background:DeepSkyBlue;
			color:white;
			font-weight:700;
		}
		#butChatHistory:hover {
			background:DeepSkyBlue;
			color:white;
			font-weight:700;
		}

		#JiraOpenForm:hover {
			background:DeepSkyBlue;
			color:white;
			font-weight:700;
		}


		.hyperlnk {
			height:0px;
			opacity:0;
			visibility: hidden;
			transition: 1s;
		}

		.hyper-active {
			opacity:1;
			height: 32px;
			visibility: visible;
			transition: 1s;
		}
		.sugops {
		margin-left:5px;
		color:bisque;
		font-size: 16px;
		transition: all 0.5s ease;
		}
		.sugops:hover {
			font-size:18px;
			color: SteelBlue;
			font-weight: 600;
		}
		.otherfieldoff {
			text-align: center;
			width: 400px;
			color: black;
			margin-top: 5px;
			background:lightgrey;
			cursor:wait;
		}
		.otherfieldon{
			text-align: center;
			width: 400px;
			color: black;
			margin-top: 5px;
			background:white;
			cursor:text;
		}
	.radio {
		width:15px;
		height:15px;
		transition: all 0.5s ease;
	}
	.radio:hover {
		transform: scale(1.5);
		font-weight: 600;
	}
	.switch-btn {
		display: inline-block;
		width: 62px; /* ширина переключателя */
		height: 24px; /* высота переключателя */
		border-radius: 12px; /* радиус скругления */
		background: #bfbfbf; /* цвет фона */
		z-index: 0;
		margin: 0;
		padding: 0;
		border: none;
		cursor: pointer;
		position: relative;
		transition-duration: 300ms; /* анимация */
	}
	.switch-btn::after {
		content: "";
		height: 36px; /* высота кнопки */
		width: 36px; /* ширина кнопки */
		border-radius: 18px; /* радиус кнопки */
		background: #fff; /* цвет кнопки */
		top: -6px; /* положение кнопки по вертикали относительно основы */
		left: -6px; /* положение кнопки по горизонтали относительно основы */
		transition-duration: 300ms; /* анимация */
		box-shadow: 0 0 10px 0 #999999; /* тень */
		position: absolute;
		z-index: 1;
	}
	.switch-on {
		background: #fff;
		box-shadow: inset 0 0 10px 0 #999999; /* тень */
	}
	.switch-on::after {
		left: 30px;
		background: #118c4e;
	}`
    mstl.innerHTML = style;
}

var win_AFhelper =  // описание элементов главного окна
    `<div style="display: flex; width: 351px;">
        <span style="width: 351px">
			<span style="cursor: -webkit-grab;">
				<div style="margin: 5px;" id="1str">
					<button id="languageAF" title="Переключает язык Русский/Английский" style="width:100px">Русский</button>
					<button id="hideMenu" title="Скрывает расширение и др открытых окон" style="margin-left:25px;">hide</button>
					<button id="setting" title="Открывает настройки расширения и включения/отключения будильника" style="width:23px; float: right; margin-right: 5px">⚙</button>
					<button id="links" title="Открывает доп.меню со ссылками и функциями" style="width:16px; float: right; margin-right: 5px">L</button>
					<button id="addsrc" title="Открывает доп меню для работы с сервисами школы, требующими запрос на выдачу доступа" style="width:16px; float: right; margin-right: 5px">*</button>
					<button id="reminderstatus" title="Статус будильника 🔔 - вкл, 🔕 - выкл" style="width:25px; float: right; margin-right: 5px"></button>
					<input id ="phone_tr" placeholder="Телефон" autocomplete="off" type="text" style = "text-align: center; width: 150px; color: black; margin-left: 15px; margin-top: 5px;"></input>
                    <input id ="email_tr" placeholder="Почта" autocomplete="off" type="text" style = "text-align: center; width: 150px; color: black; margin-left: 12px; margin-top: 5px;"></input>
				</div>
				<div style="margin-left: 5px; margin-right: 5px; margin-bottom:5px;" id="pages">
				</div>
			</span>
			<div style="margin: 5px;" id="6str">
			</div>

			<div style="margin: 5px;" id="7str">
				<textarea style="width: 341px; height: 56px;" id="inp"></textarea>
			<div id="hyperlnk" class="hyperlnk">
				<input type="text" placeholder="Enter your link 🔗 here" style="margin-bottom:5px;width:270px;text-align:center;" id="bindlinktotext" title="Вводите в это поле ссылку, после чего в общем поле выделяете слово или фразу и кнопкой Insert встраиваете ссылку в текст шаблона"></input>
				<button id="insertlinktotext" title="Добавляет ссылку из поля слева в выделеное слово или фразу в тексте шаблона">Insert ✅</button>
			</div>
				<button title="Переключение для выбора отправить или доработать сообщение" id="msg1" style="width:100px;">Доработать</button>
				<button id="opandclsbarhyper" style="width:  30px; margin: 0; padding: 2px; text-align: center;" title="Открывает форму для прикрепления ссылки в текст">🔗</button>
                <button title="Отправить текст от имени бота" id="sndbot" style="width: 30px; margin-left: 5px">🤖</button>
				<button title="Отправить текст" id="snd" style="width:50px; margin-left: 5px">send</button>
				<button title="Переключает между отправкой текста в заметки или в чат пользователю" id="msg" style="width: 80px; margin-left: 20px;">Чат</button>
			</div>

		<div style="border: 2px double black; display: none; background-color: #464451" id="addTmp">
			<div style="margin: 5px; width: 350px">
			</div>
		</div>
			<div style="border: 2px double black; display: none; background-color: #464451" id="reminder_bar">
				<div style="margin: 5px; width: 350px">
					<label style="color:bisque">__Будильник №1</label> <label style="color:bisque">........................... Будильник №2__</label>
				<br>
					<input title="Ввод часа от 0 до 23 для будильника" "="" id="setchas" placeholder="HH" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="23" style="text-align: center; margin-top: 5px; width: 50px; color: black;"> <span style="color: white; margin-top: 5px;">:</span>
					<input title="Ввод минут от 0 до 59 для будильника" id="setminuta" placeholder="MM" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="59" style="text-align: center; margin-top: 5px;  width: 50px; color: black;">
					<button title="Запуск будильника при устаноовленном времени" id="setreminder" style="margin-top: 5px">SET🔔</button>
					<input title="Ввод часа от 0 до 23 для будильника" "="" id="setchas1" placeholder="HH" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="23" style="text-align: center; margin-top: 5px; width: 50px; color: black;"> <span style="color: white; margin-top: 5px;">:</span>
					<input title="Ввод минут от 0 до 59 для будильника" id="setminuta1" placeholder="MM" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="0" max="59" style="text-align: center; margin-top: 5px;  width: 50px; color: black;">
					<button title="Запуск будильника при устаноовленном времени" id="setreminder1" style="margin-top: 5px">SET🔔</button>
				<br>
					<button title="Отображение текущего времени" id="clock_js" style="color: white; margin-top: 5px"></button>
					<button id="clock_remin" title="Двойной клик = удаление таймера. Кнопка отображения оставшегося времени" style="color: lightgreen; margin-top: 5px">00 : 00 : 00</button>
					<button id="clock_remin1" title="Двойной клик = удаление таймера. Кнопка отображения оставшегося времени" style="color: MediumSpringGreen; margin-left:28px; margin-top: 5px">00 : 00 : 00</button>
				</div>
			</div>
	<div style="border: 2px double black; display: none; background-color: #464451" id="set_bar">
		<div style="margin: 5px; width: 350px">
				<input id="sound_adr" placeholder="Адрес звука" autocomplete="off" type="text" style="text-align: center; width: 100px; color: black;">
				<button title="Сохраняет ссылки на новый источник звука для входящего запроса в АФ" id="sound_save">💾</button>
				<button title="Проверка звука при добавленной ссылке" id="sound_test">▶</button>
				<label title="Включение и отключение звука в АФ входящих запросов" class="checkbox-audio">
					<input id="audioswitcher" type="checkbox" checked="">
						<span class="checkbox-audio-switch"></span>
				</label>
				<br>
				<span style="color:bisque">Громкость звука в АФ</span>
				<input id="range" min="0" max="1" value="1.0" step="0.1" type="range">
					<br>
				<span style="color:bisque">Таймер автозакрытия:</span>
				<input title="Ввод числа для автозакрытия, при этом от этого числа будет отнято 2 минуты чтобы чат закрасился в фиолетовый цвет, то есть при значении по-умолчанию 12 на 10 минуте чат зальется фиолетовым цветом оповещая, что скоро будет закрыт" id="autoclosetime" placeholder="N" autocomplete="off" oninput="maxLengthCheck(this)" type="number" maxlength="2" min="2" max="59" style="text-align: center; margin-top: 5px; width: 50px; color: black;">
				<button title="Внести изменения в таймер автозакрытия" id="setautoclosetime" style="margin-top: 5px">SET⌚</button>
					<br>
					<label style="color:bisque"><input type="checkbox" id="hidelpmwindow">Скрыть окно с У П ПМ</label>
					<br>
                    <label style="color:bisque"><input type="checkbox" id="hidelngselector">Скрыть выбор языка АФ</label>
					<br>
					<select style="height:28px; width:260px; text-align:center" id="soundlistaddr" onchange="changesoundaddr()">
					<option selected="" disabled="">Звук нового сообщения</option></select>
					<br>
				<input id="test_std" placeholder="ID тест У" autocomplete="off" title = "ID личного тестового ученика" type="text" style="text-align: center; width: 100px; color: black;">
				<button id="setteststd" title="Добавить в localstorage ID тестового У" style="color: lightgreen; margin-top: 5px">💾</button>
				<input id="test_teach" placeholder="ID тест П" autocomplete="off" title = "ID личного тестового преподавателя" type="text" style="text-align: center; width: 100px; color: black;">
				<button id="settestteach" title="Добавить в localstorage ID тестового П" style="color: lightgreen; margin-top: 5px">💾</button>
			</div>
		</div>
	</span>
</div>`;

var win_linksd =  // описание элементов окна доступов
    `<div style="display: flex; width: 414px;">
        <span style="width: 414px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 409px;" id="linksd_1str">
                            <button title="скрывает меню" id="hideMeLinksd" style="width:50px; background: #228B22;">hide</button>
                        </div>
                        <div style="margin: 5px; margin-top: 0px; width: 409px" id="linksd_kib_box">
                            <p style="margin-left: 42%; margin-bottom: 0px; margin-top: 0px; color: #F6358A; font-size: 16px">Kibana</p>
                            <input id="kibsvid" placeholder="ID Summary" title="Вводим id пользователя для открытия Video | Tech Summary" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kibsvidbut">🔎</button>
                            <input id="kibsvhesh" placeholder="Хэш Summary" title="Вводим Хэш комнаты для открытия Video | Tech Summary" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kibsvheshbut">🔎</button>
                            <input id="kibservhesh" placeholder="Хэш = сервер" title="Вводим Хэш комнаты для определения сервера" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kibservheshbut">🔎</button>
                            <input id="kibslow" placeholder="Хэш слоу" title="Вводим Хэш комнаты для проверки слоулинков" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kibslowbut">🔎</button>
                            <input id="kibheshvid" placeholder="Хэш видео" title="Вводим Хэш комнаты для проверки состояния видео" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kibheshvidbut">🔎</button>
                            <input id="kibstihesh" placeholder="Хэш стрим" title="Вводим Хэш комнаты для проверки срстояния стрима" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="kibstiheshbut">🔎</button>
                            <p style="margin-left: 42%; margin-bottom: 0px; margin-top: 0px; color: #F6358A; font-size: 16px">Redash</p>
                            <input id="mobappid" placeholder="ID mob.app" title="Вводим id пользователя для открытия действий в приложении" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="mobappidbut">🔎</button>
                            <input id="rpayid" placeholder="ID платежи" title="Вводим id пользователя для открытия лога платежей" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="rpayidbut">🔎</button>
							<input id="FeedbackStatus" placeholder="ID У ОС статус" title="Вводим id пользователя для открытия логов по статусу ОС с У. full / отчет+встреча+звонок ; call / только звонок ; report / только отчет; disabled / полностью отключено" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="GetFeedbackStatus">🔎</button>
							<input id="TeacherReport" placeholder="ID У Отчет" title="Вводим id пользователя для открытия полной информации что П вносила в отчет и когда и по какой комнате" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="GetTeacherReport">🔎</button>
 							<input id="UserActions" placeholder="ID У/П действ" title="Вводим id пользователя для открытия информации о действиях в личном кабинете" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
                            <button id="GetUserActions">🔎</button>
                            <p style="margin-left: 42%; margin-bottom: 0px; margin-top: 0px; color: #F6358A; font-size: 16px">Grafana</p>
                            <button title="Открывает Графану с состоянием видеосерверов, при наплыве обращений проверяйте его" id="grafanalnk" style="width:105px">Вид.сервера</button>
							<p style="margin-left: 42%; margin-bottom: 0px; margin-top: 0px; color: #F6358A; font-size: 16px">KPI Teachers</p>
							<button title="Открывает Tableaue для просмотра информации по KPI teachers" id="kpiteachersdashboard" style="width:150px">Tableaue Dashboard</button>
                        </div>
                </span>
        </span>
</div>`;

// форма для отправки предложений

var win_suggest =  // описание элементов окна предложений
    `<div style="display: flex; width: 414px;">
        <span style="width: 414px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 409px;" id="sug_form_main">
                            <button title="скрывает меню" id="hideMeSugForm" style="width:50px; background: #228B22;">hide</button>
                            <button title="По нажатию обновляет хеш чата в соответствующем поле, на случай, если при открытии формы вы открыли не тот чат, в котором обратился пользователь" id="refreshchathash" style="width:24px;">♻</button>
							<button title="По нажатию открывает общий док с переданными предложениями" id="getdocsuggestions" style="width:24px;">🗑</button>
                        </div>
                        <div style="margin: 5px; margin-top: 0px; width: 409px" id="sug_form_box">
                            <input id="operatornamesuggest" placeholder="Представься, пожалуйста" title="Вводим свою фамилию и имя" autocomplete="off" type="text" style="text-align: center; width: 400px; color: black; margin-top: 5px">
							<br>
                            <input id="linktochatsuggest" placeholder="Ссылка на предложение (чат)" title="Копируем ссылку на чат" autocomplete="off" type="text" style="text-align: center; width: 400px; color: black; margin-top: 5px">
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="ЛКУ" resolved=""> ЛКУ</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="ЛКП" resolved=""> ЛКП</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Функционал урока" resolved=""> Функционал урока</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="ТТ (Расписание)" resolved=""> ТТ (Расписание)</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="РК" resolved=""> РК</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Виджеты (прогресс/часы и т.п.)" resolved=""> Виджеты (прогресс/часы и т.п.)</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Словарь" resolved=""> Словарь</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Чатик" resolved=""> Чатик</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Оплата" resolved=""> Оплата</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Мобильное приложение Skyeng" resolved=""> Мобильное приложение Skyeng</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Мобильное приложение Skyeng Teachers" resolved=""> Мобильное приложение Skyeng Teachers</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Мобильное приложение Skysmart Интерактивная тетрадь" resolved=""> Мобильное приложение Skysmart Интерактивная тетрадь</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Мобильное приложение Skysmart.Родителям" resolved=""> Мобильное приложение Skysmart.Родителям</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Мобильное приложение Skysmart Students" resolved=""> Мобильное приложение Skysmart Students</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Мобильное приложение Skypro" resolved=""> Мобильное приложение Skypro</label>
							<br>
							<label class="sugops"><input class="radio" type="radio" name="topicofsuggest" value="Другое" resolved=""> Другое</label>
							<br>
							<input id="otheroptionchecked" class="otherfieldoff" disabled="true" placeholder="Если выбрали 'другое' иначе оставляете пустым" title="Описываем функнционал, если выбрали опцию Другое" autocomplete="off" type="text" style="text-align: center; width: 400px; color: black; margin-top: 5px">
							<br>
						</div>
		</span>
						<div>
                            <textarea id="textsuggest" placeholder="Текст предложения" title="Вводим текст предложения" autocomplete="off" type="text" style="text-align: center; width: 405px; color: black; margin-top: 5px"></textarea>
							<br>
							<button title="Отправляет заполненные поля формы в док" id="sendtosuggestdoc" style="width:105px; position: relative; left: 50%; transform: translate(-50%, 0);">Отправить</button>
                        </div>
        </span>
</div>`;

var win_refusefrom =  // описание элементов окна отказа от помощи
    `<div style="display: flex; width: 414px;">
        <span style="width: 414px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 410px;" id="refuse_form_header">
                            <button title="скрывает меню" id="hideMeRefuseFormv2" style="width:50px; background: #228B22;">hide</button>
                            <button title="По нажатию обновляет хеш чата в соответствующем поле, на случай, если при открытии формы вы открыли не тот чат, в котором обратился пользователь" id="refreshhashrefuseform" style="width:24px;">♻</button>
                            <button title="По нажатию обновляет перечень опций в разделе Проблема и Как решилось" id="refreshoptions" style="width:24px;">🔄</button>
                        </div>
                        <div style="margin: 5px; margin-top: 0px; width: 410px" id="refuse_form_menu">
                            <input id="chatlnk" placeholder="Ссылка на чат" title="Вставьте сюда ссылку на чат" autocomplete="off" type="text" style="text-align: center; width: 410px; color: black; margin-top: 5px">
							<br>
							<select id="userissue" style="height: 25px; width:410px; margin-top:5px;">
									<option selected disabled="" style="background-color:orange; color:white;" value="problclient">Проблема клиента</option>
							</select>
							<br>

							<textarea id="otherproblem" class="otherfieldoff" disabled="true" placeholder="Другое, не подошли варианты 'Проблема'" title="Вводим свой вариант какая у пользователя проблема" autocomplete="off" type="text" style="text-align: center; width: 405px; color: black; margin-top: 5px" data-gramm="false" wt-ignore-input="true"></textarea>

							<br>

							<select id="howissuesolverd" style="width:410px; height: 25px;">
									<option selected disabled="" style="background-color:orange; color:white;" value="howsolved">Как решилась</option>
                            </select>

							<br>

							<textarea id="othersolved" class="otherfieldoff" disabled="true" placeholder="Другое, не подошли варианты 'Решилось'" title="Вводим свой вариант как решилась проблема" autocomplete="off" type="text" style="text-align: center; width: 405px; color: black; margin-top: 5px" data-gramm="false" wt-ignore-input="true"></textarea>

							<br>
							<button title="Отправляет заполненные поля формы в док" id="send2doc" style="width:105px; position: relative; left: 50%; margin-top: 5px; transform: translate(-50%, 0);">Отправить</button>
						</div>
		</span>
        </span>
</div>`;

var win_taskform  = //описание формы создания задач в СРМ2
    `<div style="display: flex; width: 414px;">
        <span style="width: 414px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 410px;" id="create_form_header">
                            <button title="скрывает меню" id="hideMeCreateForm" style="width:50px; background: #228B22;">hide</button>
                            <button title="По нажатию обновляет хеш чата в соответствующем поле, на случай, если при открытии формы вы открыли не тот чат, в котором обратился пользователь" id="refreshhashcreateform" style="width:24px;">♻</button> 
							<button title="По нажатию очищает поля и сбрасывает в дефолтное состояние формы" id="clearcreateform" style="width:24px;">🧹</button>
							<span style="color:bisque">Статус урока: </span>
							<span id="statusuroka"></span>
                        </div>

						<div id="addcreateformbtns">
							<button id="critteachertostudent" style="height:25px; width: 130px; margin-left:10px;">Крит 👽П -> У👨‍🎓</button>
							<button id="critstudenttoteacher" style="height:25px; width: 130px;">Крит 👨‍🎓У -> П👽</button>
							<button id="critstudent" style="height:25px; width: 130px;">Крит У👨‍🎓</button>
							<br>
							<button id="highsecondline" style="height:25px; width: 130px; margin-left:10px; margin-top:3px;">🗓Калик У/П</button>
							<button id="highteachersc" style="height:25px; width: 130px;">👽П Student Care</button>
							<button id="highteachertc" style="height:25px; width: 130px;">👽П Teacher Care</button>
						</div>
						
                        <div style="margin: 5px; margin-top: 0px; width: 410px" id="create_form_menu">
                            <input disabled="" required id="chathashlnk" placeholder="Хэш чата" title="Хеш чата, из которого будет создано обращение в СРМ" autocomplete="off" type="text" style="text-align: center; width: 410px; color: black; margin-top: 5px; text-align:center;background:#cac1b1; width:100%">
							<br>
							<select required id="priority" style="width: 100%; text-align: center; height: 25px;">
								<option disabled="" selected="">Приоритет</option>
								<option value="low" style="color:green; font-weight:600">🟢 Низкий</option>
								<option value="high" style="color:orange; font-weight:600">🟡 Высокий</option>
								<option value="highest" style="color:red; font-weight:600">🔴 Критический</option>
							</select>

							<select required id="customerservice" style="width: 100%; text-align: center; height: 25px;">
								<option disabled="" selected="">Отдел</option>
								<option value="tech_support_outgoing_crm2">Техподдержка 1Л CRM (исход)</option>
								<option value="teachers_care_crm">Teachers Care</option>
								<option value="content_management_dictionary">Словарь</option>
								<option value="content_management">Контент</option>
								<option value="teachers_support">Teachers Support</option>
								<option value="tech_support_second_line_crm2">Техподдержка 2Л CRM</option>
							</select>
							
							<input id="taskserviceid" placeholder="🆔 ID услуги" style="width: 100%; height: 25px;">
							<br>
							<input required id="taskuserid" placeholder="🆔 ID пользователя" style="width: 100%; height: 25px;">
							<br>

							<textarea required id="taskcomment" placeholder="Комментарий" title="Укажите комментарий к задаче, что было сделано, что требуется сделать" autocomplete="off" type="text" style="text-align: center; width: 100%; color: black; margin-top: 5px" data-gramm="false" wt-ignore-input="true"></textarea>

							<br>
							<button title="Создает задачу на СРМ2 на выранный отдел и приоритет" id="createtask" style="width:105px; position: relative; left: 50%; margin-top: 5px; transform: translate(-50%, 0);">Отправить</button>
						</div>
		</span>
        </span>
</div>`;

var win_Links =  // описание элементов окна ссылок
    `<div style="display: flex; width: 550px;">
        <span style="width: 550px">
			<span style="cursor: -webkit-grab;">
				<div style="margin: 5px; width: 550;" id="links_1str">
					<button title="Скрытие меню" id="hideMe" style="width:50px; background: #228B22;">hide</button>
					<button title="Отображает актуальные креды к BrowserStack" id="creds" class="uplinksbar">ℹ</button>
					<button title="Открывает раздел для формирования заявки на удаленине персональных данных" id="deleteaclnk" class="uplinksbar">🗑</button>
					<button title="Открывает Базу знаний в Confluence" id="knoweledgebase" class="uplinksbar">📚</button>
					<button title="Открывает календарь для планирования проверки со 2ЛТП" id="datsyurl" class="uplinksbar">📆</button>
					<button title="Открывает меню для работы со статистикой, поиска чатов без тематики, с низкими оценками, по комментарию" id="getStats" class="uplinksbar">📋</button>
					<button title="Открывает сайт со списком пробников по экзаменам ОГЭ/ЕГЭ" id="probniki" class="uplinksbar">💼</button>
					<button title="Открывает инструкцию по пробникам" id="probnikinstr" class="uplinksbar">🗃</button>
					<button title="Открывает менюшку для просмотра списка ГУ" id="grouplist" class="uplinksbar">👩‍👧‍👧</button>
                    <button title="Открывает известные баги на платформе" id="confbugs" style="width: 50px; float: right; margin-right: 5px">🐞</button>
				</div>
				<div style="margin: 5px; width: 550px;" id="links_but">
					<button title="Открывает Timetable" id="timetable" style="width:105px">TimeTable</button>
					<button title="Открывает админку Talks для поиска по ID П ID У , с которым идет урок" id="talksadm" style="width:105px">Talks</button>
					<button title="Открывает начислятор билинга для просмотра реального баланса у ученика и зависшщих уроков не на той STK" id="billingadm" style="width:105px">Начислятор</button>
					<button title="Открывает раздел для создания операции компенсации ученику" id="compens" style="width:105px">Компенсация</button>
					<button title="Открывает CMS хранилище материалов уроков" id="CMS" style="width:105px">CMS</button>
					<button title="Открывает админку пользователей" id="useradm" style="width:105px; margin-top: 3px">Админка</button>
					<button title="Открывает поиск платежа по данным карте, сумме, дате платежа" id="transactions" style="width:105px; margin-top: 3px">Поиск $</button>
					<button title="Открывает форму передачи предложений от пользователей" id="suggestions" style="width:105px; margin-top: 3px">Предложения</button>
					<button title="Открывает раздел с проверкой фичей(кругов), подключенных пользователю и добавление/удаление их" id="userfeatures" style="width:105px; margin-top: 3px">User Фичи</button>
					<button title="Открывает сайт для просмотра ошибок и логов в комнате" id="trshoothing" style="width:105px; margin-top: 3px">Troubleshooting</button>
					<button title="Открывает раздел в Confluence по созданию тестовых комнат" id="testroom" style="width:105px; margin-top: 3px">TestRooms</button>
					<button title="Открывает билинг для просмотра и редактирования подписок" id="subscribebilling" style="width:105px; margin-top: 3px">$Подписки</button>
					<button title="Открывает форму по аппеляциям аудита" id="apelation" style="width:105px; margin-top: 3px">Апелляции</button>
					<button title="открывает фичи групп для активации связи на ГУ" id="groupfeatures" style="width:105px; margin-top: 3px">Фичи Групп</button>
					<button title="Открывает сайт BrowserStack" id="browserstack" style="width:105px; margin-top: 3px">BrowserStaсk</button>
					<button title="Открывает раздел для проверки сертификата" id="certificates" style="width:105px; margin-top: 3px">Сертификаты</button>
					<button title="Открывает раздел для проверки промокодов" id="promocodes" style="width:105px; margin-top: 3px">Промокоды</button>
					<button title="CMS словаря" id="cmswordssearch" style="width:105px; margin-top: 3px">CMS словаря</button>
					<button title="Открывает форму по добавлению новых вопросов для консультации преподавателей" id="TCQnew" style="width:105px; margin-top: 3px">TC нов. вопр.</button>
					<button title="Открывает документ, где собраны вопросы и ответы для консультации преподавателей" id="TCQtable" style="width:105px; margin-top: 3px">TC таблица</button>
				</div>
				<div style="margin: 5px; width: 550px" id="links_box">
					<input id="cpuname" placeholder="CPU name" title="вводим название процессора, чтобы сразу перейти на сайт с проверкой рейтинга CPU" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="benchmark">🔎</button>
					<input id="studguid" placeholder="ID У ГУ" title="вводим ID У, чтобы зайти в профиль ученика из групповых  уроков (увидеть историю занятий, баланс, препода)" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="sguid">🔎</button>
					<input id="creditstatus" placeholder="ID У рассрочка" title="вводим ID У, чтобы получить прямую ссылку для проверки рассрочек ученика" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="credits">🔎</button>
					<input id="iplookup" placeholder="IP У/П/Vimbox" title="вводим IP У/П/Платформы, чтобы получить информацию о месторасположении географического адреса и получения информации о хостинге" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="gotolookip">🔎</button>
					<input id="lgssearch" placeholder="ID Группы" title="Введите ID LGS или обычной группы KGL для просмотра информации" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="getlgsinfo">🔎</button>
					<input id="cmsstepid" placeholder="CMS stepUUID" title="вводим stepUUID, чтобы сразу попасть в ЦМС на нужный урок и найти на нем наш слайд и проверить" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="cmsid">🔎</button>
					<input id="idforservicelocaleru" placeholder="ID У обсл RU" title="вводим ID У и по нажатию изменяем сразу ему язык обслуживания на русский" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="setservicelocaleru">🚀</button>
					<input id="setidformobpass" placeholder="ID У/П МП" title="введите ID У/П для генерации разового пароля он будет отображен в поле ввода ID и скопирован в  буфер обмена" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="getmobpasscode" style="width: 25.23px;">🚀</button>
					<input id="HWstudID" placeholder="ID У для HW" title="вводим ID У, чтобы получить прямую ссылку при открытии с П сразу увидим список ДЗ У" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="showcaseHW" style="width: 25.23px;">💾</button>
					<input id="lookhash" placeholder="roomhash" title="вставляем хэш, копируем в буфер код, со стороны П в консоли выполняем, и в Network смотрим roomhash для какого ученика была создана комната" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="gethash" style="width: 25.23px;">💾</button>
					<input id="enablerAP" placeholder="ID услуги(АП)" title="копируем услуги, где нужно активировать АП и сохраняем в буфер, в ЛКУ переходим по ссылке для активации" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="getenablerAP" style="width: 25.23px;">💾</button>
					<input id="skipAP" placeholder="ID ус(skipАП)" title="копируем услуги, где нужно пропустить АП и сохраняем в буфер, в ЛКУ переходим по ссылке для деактивации" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="getskipAP" style="width: 25.23px;">💾</button>
					<input id="skiponboarding" placeholder="ID ус(skip Onbo)" title="копируем услуги, где нужно отключить онбоардинг в ЛКУ" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="doskiponboard" style="width: 25.23px;">💾</button>
					<input id="idteacheradult" placeholder="ID П add 💬 ->" title="введите айди П и во второе поле справа ID У для копирования команды в буфер обмена и выполнения ее после авторизации в профиль П для добавления чата с учениками как adults так и kids (авторизовались - ввели айди и скопировали и выполнили в консоле)" autocomplete="off" type="text" style="text-align: center; width: 118px; color: black; margin-top: 5px">
					<input id="idstudentadult" placeholder="<- ID У add 💬" title="введите айди У и во второе поле слева ID П для копирования команды в буфер обмена и выполнения ее после авторизации в профиль П для добавления чата с учениками как adults так и kids (авторизовались - ввели айди и скопировали и выполнили в консоле)" autocomplete="off" type="text" style="text-align: center; width: 118px; color: black; margin-top: 5px">
					<button id="setchatsadults" style="width: 25.23px;">💾</button>
					<input id="reportmvu" placeholder="У отчет МВУ" title="Введите ID ученика, чтобы в буфер обмена скопировать ссылку на отчет МВУ и открывать ее под преподавателем" autocomplete="off" type="text" style="text-align: center; width: 103px; color: black; margin-top: 5px">
					<button id="getmvureport" style="width: 25.23px;">💾</button>
				</div>
				<div style="margin: 5px; width: 550px" id="links_butd">
					<button title="копирует в буфер обмена команду setstatus('classwork') для перезапуска уроков" id="restartlesson" style="width:100px">Redo MAT💾</button>
					<button title="копирует в буфер обмена команду для разовой актиивации кнопки New Student на платформе Adult английского языка" id="enableNS" style="width:100px">Enable NS💾</button>
					<button title="отображает актуальную версию iOS приложения" id="curVeriOS" style="float: right; margin-right: 10px;"></button>
			  	    <button title="Отображает актуальную версию Android приложения" id="curVerAndroid" style="float: right; margin-right: 5px;"></button>
			  	    <button title="Открывает Confluence с инструкцией по расширению" id="faqext" style="float: right; margin-right: 5px;">ChMAF</button>
				</div>
			</span>
	</span>
</div>`;

var win_Chathis =  // описание элементов окна Истории чатов
    `<div style="display: flex; width: 410px;">
        <span style="width: 410px">
			<span style="cursor: default;">
				<div style="margin: 5px; width: 410px;" id="chathisheader">
					<button title="Скрытие меню" id="hideMeChHis" style="width:50px; background: #228B22;">hide</button>
					<button title="Очистка всех полей" id="clearallinfo" style="width:25px;">🧹</button>
					<select style="height:28px; width:260px; text-align:center" id="operatorstp" onchange="findchatsoper()">
							<option selected="" disabled="">Операторы на линии</option>
					</select>
					<button title="Обновляет список активных операторов, их статус, и количества чатов" id="RefrehOperators" style="width:25px;">♻</button>
					<button title="Показывает инеформацию по пользователю из чата, его айди, почту, телефон, характеристики устройства и тп" id="getdatafrchat" style="width:25px;">ℹ</button>
				</div>
				<div style="margin: 5px; width: 410px; display:flex; justify-content:space-evenly;" id="chathismenu">
					<button title="Возвращает на экран просмотра списка чатов" id="back_to_chat_his" style="width:50px; font-size:22px; padding:0;">🔙</button>
					 <input id="chatuserhis" placeholder="ID пользователя" oninput="onlyNumbers(this)" autocomplete="off" type="text" style="text-align: center; width: 130px; color: black; margin-top: 5px">
					 <input id="hashchathis" placeholder="Хеш чата" title="" autocomplete="off" type="text" style="text-align: center; width: 130px; color: black; margin-top: 5px">
					<button title="Находит историю чатов или открывает по хешу чата диалог" id="btn_search_history" style="width:50px;font-size:22px;padding:0;">🔎</button>
				</div>
				<div style="margin-top: 5px; width: 410px;display:flex; justify-content:center;margin-bottom:5px;" id="databoxchathis">
					<button id="refreshchat" style="width:50px; font-size:16px;" title="Обновляет содержимое окна с чатом, если он активный, чтобы увидеть новые записи">🔄</button>
					<span style="color:bisque; float:center; margin-top:5px; margin-left:10px;">От </span>
					<input type="date" style="color:black; margin-left:5px;  width:115px; text-align:center; " name="StartDataChHis" id="dateFromChHis">
					<span style="color:bisque; margin-top:5px; margin-left:10px; float:right; height:28px;">До </span>
					<input type="date" style="color:black; float:right; margin-left:5px; margin-right:10px; width:115px; text-align:center; " name="EndDataChHis" id="dateToChHis">
					<button style="width:30px;" id="chagetheme" title="Переключается светлую тему ☀ и темную🌛 вывода чата с пользователем">🌛</button>
				</div>
			</span>

				<div style="width: 410px;display:none" id="somechatinfo">
					<span id="usidchat" style="color:bisque; margin-left:10px; margin-top:5px; user-select:none; cursor:pointer" title="При клике копирует сам айдишник">User ID: </span> <span id="placeusid" style="color:bisque; margin-left:5px; margin-top:5px;"></span>
					<button id="startchat" style="margin-left:10px;" title="Начать новый чат с пользователем">💬</button>
					<button id="opencmtbar" style="margin-left:5px;" title="Открыть инструмент добавления комментария к чату (для тех у кого внизу в самом модуле не отображается это поле)">🚧</button>
					<button id="takechat" style="margin-left: 117px; margin-top:5px;" title="Забирает чат и назначает на вас,но некоторые чаты или у других коллег забраться не получится">Забрать</button>
					<br>
					<span id="chid" style="color:bisque; margin-left:10px; margin-top:5px; user-select:none; cursor:pointer" title="При клике копирует ссылку с добавлением HDI">Chat ID: </span> <span id="placechatid" style="color:bisque; margin-left:5px; margin-top:5px;"></span>
					<button id="reassign" title="По нажатию на кнопку переведет чат на сотрудника. Порядок такой: выбираете из списка операторы на линии того, кому желаете перевести, после чего открываете чат по хешу в поле хеш чата вводите его и нажимаете найти, и затем уже после этого жмете на кнопку и скрипт отработает" style="width:45px; margin-left:5px; font-size:16px; margin-top:2px;user-select:none;">🔀</button>
				</div>

			<div id="comentsbar" style="width: 410px; height:55px; position:fixed; top:50vh; right:40vh; background: rgb(70, 68, 81); display:none">
						<textarea id="msgftochatornotes1" style="margin-left: 10px; margin-top: 5px; width: 210px; height: 29px; background: lightgrey;position: absolute; bottom: 12px;"></textarea>
						<button id="sendmsgtochatornotes1" title="В зависимости от опции отправляет текст в чат или заметки" style="margin-left: 5px; margin-top:5px; position:absolute; top 10px; left:220px;">Send</button>
						<input class="radio" type="radio" name="chatornotes1" style="float:right; margin-top:10px;margin-right:5px;" value="Notes" checked="" resolved=""><label style="color:bisque; font-size: 16px;float:right; margin-right:5px;margin-top:10px;">Заметки</label>
						<input class="radio" type="radio" name="chatornotes1" style="float:right;margin-top:10px; margin-right:5px;" value="Chat" resolved=""><label style="color:bisque; font-size: 16px; float:right; margin-top:10px; margin-right:5px;">Чат</label>
						<button id="hidecmtfield" title="скрывает эту менюшку небольшую" style="position:fixed;right:40vh; top:53vh; height:24px; width:25px; padding:0;">&gt;</button>
			</div>

			<div id="infofield" style="color:bisque; margin-left:10px;margin-top:5px width:410px; height:77vh; overflow-x:hidden;">
			</div>

			<div id="bottommenuchhis" style="width: 410px; position:absolute; display:none;">
				<textarea id="msgftochatornotes" style="margin-left: 10px; margin-top: 5px; width: 210px; height: 29px; background: lightgrey;position: absolute; bottom: 2px;"></textarea>
				<button id="sendmsgtochatornotes" title="В зависимости от опции отправляет текст в чат или заметки" style="margin-left: 5px; margin-top:5px; position:absolute; top 10px; left:220px;">Send</button>
				<input class="radio" type="radio" name="chatornotes" style="float:right; margin-top:10px;margin-right:5px;" value="Notes" checked="" resolved=""><label style="color:bisque; font-size: 16px;float:right; margin-right:5px;margin-top:10px;">Заметки</label>
				<input class="radio" type="radio" name="chatornotes" style="float:right;margin-top:10px; margin-right:5px;" value="Chat" resolved=""><label style="color:bisque; font-size: 16px; float:right; margin-top:10px; margin-right:5px;">Чат</label>
			</div>

			<div id="userchatdata" style="display:none; position: fixed; top: 0px; right: 420px; background: rgb(70, 68, 81); color: bisque; width: 365px; height: 400px; max-height: 600px; max-width: 500px; overflow: auto; border: 1px solid; padding: 10px; word-break: break-all;"">

						<div id="datainfoheader">
							<button id="hideuserdatainfo" style="width:50px; background: #228B22;">hide</button>
							<button id="gotocrmhis" style="width:50px;">CRM</button>
						</div>

					<div id="datafield" style="margin-top:5px;text-align:center; font-size:16px;">
					</div>

			</div>
	</span>
</div>`;

var win_Jira =  // описание элементов окна Поиска по Jira
    `<div style="display: flex; width: 550px;">
        <span style="width: 550px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 550;" id="jira_1str">
                                <button title="скрывает меню" id="hideMej" style="width:50px; background: #228B22;">hide</button>
								<button id="RefreshJiraStatus" title="Обновляет статус Токена Jira, чтобы проверить авторизованы вы или нет">🔄</button>
								<button id="ClearJiraData" title="Очищает поля с результатами и полем для ввода">🧹</button>
								<span style="color:bisque">Token Status: </span>
								<span id="searchjiratknstatus"></span>
                        </div>
						
						<div id="control_jira_search">
							<input id="testJira" placeholder="Jira Tasks Bar" title="введите слово или фразу для поиска по Jira при одном клике будет искать по багам, если ввести в поле номер задачи например VIM-7288 и дабл кликнуть на рокету будет поиск по номеру" autocomplete="off" type="text" style="text-align: center; width: 300px; color: black; margin-top: 5px; margin-left: 20%;">
							<button id="getJiraTasks" style="width: 25.23px;">🚀</button>
						</div>
						
                        <div style="margin: 5px; width: 550px" id="jira_tasks_box">
                                <p id="issuetable" style="max-height:400px; margin-left:5px; overflow:auto"></p>
                        </div>
                </span>
        </span>
</div>`;

var win_Marks =  // описание элементов окна оценок от пользователя
    `<div style="display: flex; width: 300px;">
        <span style="width: 300px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 300px;" id="marks_header">
                                <button title="скрывает меню" id="hideMeMarks" style="width:50px; background: #228B22;">hide</button>
                        </div>
						<div>
							<input id="useridsearch" placeholder="ID У/П для 🔎статистики оценок" title="Ввведите ID ученика или учителя для получения информации с начала года по выставляемым оценкам" autocomplete="off" type="text" style="text-align: center; width: 230px; color: black;margin-left:5px">
							<button id="findmarksstat">🔎</button>
							<button id="clearmarksstat">🧹</button>
						</div>
			    </span>
                        <div style="margin: 5px; width: 550px" id="marks_box">
                                <p id="markstable" style="max-height:400px; margin-left:5px; font-size:16px; color:bisque; overflow:auto;"></p>
                        </div>
        </span>
</div>`;

var win_Stat =  // описание элементов окна Статистики
    `<div style="display: flex; width: 550px;">
        <span style="width: 550px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 550;" id="statdata">
                                <button id="hideMeStat" style="width:50px; background: #228B22;">hide</button>
                        </div>
                        <div style="margin: 5px; width: 550px" id="statbox">
								 <span style="color:bisque; float:center; margin-top:5px; margin-left:10px;">Начальная дата <input type="date" style="color:black; margin-left:20px;  width:125px;" name="StartData" id="dateFrom"></span>
								 <span style="color:bisque; margin-top:2px; float:right; margin-right:10px; height:28px;">Конечная дата <input type="date" style="color:black; float:right; margin-left:20px; margin-right:10px; width:125px;" name="EndData" id="dateTo"</span>
                        </div>
						<div>
							<input id="commenttosearch" placeholder="Слово или фраза для поиска среди закрытых чатов по заметкам" title="введите слово или фразу для поиска по заметкам в закрытом чате" autocomplete="off" type="text" style="text-align: center; width: 540px; color: black;margin-left:5px">
								<select id="thematics" style="margin-left:150px; margin-top:10px;">
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
                               <button style=" title="ищет чаты по тематике" id="gofindit">Find</button>
                               <button style=" title="меняет тематику в хеше чата указанном выше в поле ввода и выбранной тематикой из выпадающего списка" id="changetheme">Change</button>
						</div>
						</span>
						<div style="display:flex; justify-content:space-evenly; margin-top:5px;">
							 <button title="Получает статистику, считает среднюю оценку всех чатов за период, и отображает чаты без тематики" id="getstatfromperiod">Получить статистику</button>
							 <button title="Получает чаты с ксат <4 и выводит их в поле для просмотра и аппеляции" id="getlowcsat">Чаты с КСАТ<4</button>
							 <button title="Запускает поиск по комментарию в заметке, поиск точный и чувствительный к регистру и языку заметки" id="parsechat">Найти по комменту</button>
							 <button title="очищает значения поля" id="clearall">Очистить</button>
							 <button title="загружает полученные результаты как для Чаты с ксат <4 так и для чатов с комментариями в виде HTML файла" id="getfile">🔰</button>
							 <br>
					    </div>
						<div id="chatcoutnsinfo">
							 <span id="sumchatcounttouched" style="margin-left: 5px; color:bisque;"></span>
							 <br>
							 <span id="sumchatcountclosed" style="margin-left: 5px; color:bisque;"></span>
							 <p id="chatsinfoout" style="width:550px; color:bisque; margin-left:5px"></p>
							 <p id="lowCSATcount" style="width:550px; max-height:400px; color:bisque; margin-left:5px; overflow:auto"></p>
							 <p id="themesdata" style="width:550px; max-height:400px; color:bisque; margin-left:5px; overflow:auto"></p>
							 <p id="chatcommentsdata" style="width:550px;color:bisque; max-height:400px; margin-left:5px; overflow:auto"></p>
						</div>
        </span>
</div>`;

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

var win_serviceinfo =  // описание элементов окна информации об услугах и пользователе
    `<div style="display: flex; width: 320px;">
        <span style="width: 320px">
                <span style="cursor: -webkit-grab;">
                        <div style="width: 320px;  border-bottom:1px solid #556B2F;" id="servicehead">
                                <button title="скрывает меню" id="hideMeservice" style="width:50px; background: #228B22; margin:5px;">hide</button>
                                <button title="открывает СРМ пользователя при введенном айди в поле" id="GotoCRM" style="width:50px;">CRM</button>
                                <button title="Начинает чат с пользователем" id="startnewchat" style="width: 25.23px;">💬</button>
                                <button title="отображает статус, 📧 - есть возможность создать исходящий чат, плюс по клику открыть самое последнее обращение через кота, 🚫 - нельзя открыть исходящее сообщение" id="ChatStatus" style="width:30px; display:none;"></button>
                                <button title="Левый клик обновить статус. Легенда: 💥 - задача на исход уже создана или есть также задача на тп1л , 📵 - нет задачи на исход и на тп, 🛠 - нет задачи на исход, но есть задача на тп" id="CrmStatus" style="width:30px; display:none;"></button>
								<span style="padding:7px; margin-left: 5px;height:28px; color:#ffff;  font-weight:700; border: 1px solid bisque;width: 82px; background-color:#1E90FF;display:none;" id="getcurrentstatus"></span>
                        </div>
						<div style="width: 320px; margin:5px; display:flex; justify-content:left;" id="input_field">
						<input id="idstudent" placeholder="ID У/П" title="Введите ID ученика для получения информации по услугам" oninput="onlyNumber(this)" autocomplete="off" type="text" style="text-align: center; width: 100px; color: black;">
				       	<button title="запускает поиск по услугам" id="getidstudent" class="usinfoops">🚀</button>
						<button title="Открывает список со всеми задачами пользователя" id="crmactivetasks" class="usinfoops">📋</button>
						<button title="TRM 2.0 для информации по П" id="newtrm" style="margin-left: 5px; display: none; width: 25.23px;">🗿</button>
						<button title="Личная страница П, как видят ученики" id="personalteacherpage" style="margin-left: 5px; display: none; width: 25.23px;">🎭</button>
						<button title="Изменяет Язык обслуживания для профиля на Русский" id="changelocalelng" class="usinfoops">🌍</button>
						<button title="Открывает начислятор для проверки реального баланса ученика" id="checkbalance" class="usinfoops">💰</button>
						<button title="Просмотр прошедших и предстоящих уроков" id="getpastandfuturelessons" class="usinfoops">📆</button>
				       	<button title="очищает все поля" id="clearservinfo" class="usinfoops">🧹</button>
				       	</div>
						<div style="width: 320px; margin:5px; display:flex; justify-content:left;" id="input_field2">
						<input readonly id="onetimepassout"  placeholder="One time pass" title="Вывод разового пароля после выполнения команды" autocomplete="off" type="text" style="float:left; text-align: center; width: 100px; color: black;" class="">
						<button title="Генерирует одноразовый код для входа в мобильное приложение и выводит его в спец поле" id="getonetimepass" class="usinfoops">📱</button>
						<button title="Открывает админку групповых уроков по айди ученика для просмотра информации по ученику" id="getkglinfokid" class="usinfoops">👩‍👧‍👦</button>
						<button title="Открывает админку редактирования пользователя/просмотра ролей" id="editadmbtn" class="usinfoops">✏</button>
						<button title="Открывает кота для просмотра истории чатов" id="catchathistory" class="usinfoops">🗄</button>
						<button title="Открывает меню для просмотра рассрочки" id="partialpaymentinfo" class="usinfoops">💸</button>
						<button title="Открывает меню для просмотра статусов уроков(удален,отменен,пропущен) и кем" id="getlessonstatus" class="usinfoops">🎓</button>
						<button title="Открывает окно с techsummary из автофака по пользователю" id="gettechsummary" class="usinfoops">💻</button>
						</div>
					   </span>
                        <div style="width: 320px;" id="servicebody">
						<img id="useravatar" style="position: absolute; left: 1px; top: 120px; width: 55px; height: 60px; border-radius: 30px; display:none;">
                                <p id="servicetable" style="max-height:400px; overflow:auto; color:bisque; text-align:center"></p>
                        </div>
        </span>
</div>`;

var win_LessonStatus =  // описание элементов окна статуса уроков
    `<div style="display: flex; width: 550px;">
        <span style="width: 550px">
                <span style="cursor: -webkit-grab;">
                        <div style="margin: 5px; width: 550;" id="lessomstatdata">
                                <button id="hideMeLessonStatus" style="width:50px; background: #228B22;">hide</button>
                        </div>
						 <div style="margin: 5px; width: 550px" id="databox">
								 <span style="color:bisque; float:center; margin-top:5px; margin-left:10px;">Начальная дата <input type="date" style="color:black; margin-left:20px;  width:125px;" name="StartDataLS" id="dateFromLS"></span>
								 <span style="color:bisque; margin-top:2px; float:right; margin-right:10px; height:28px;">Конечная дата <input type="date" style="color:black; float:right; margin-left:20px; margin-right:10px; width:125px;" name="EndDataLS" id="dateToLS"</span>
                        </div>
						<div>
							<input id="idteacherforsearch" placeholder="Teacher ID" title="Введите ID учителя, чтобы проверить информацию по урокам" autocomplete="off" type="text" style="position:relative; left:33%; text-align: center; width: 100px; color: black;margin-left:5px"">
							<input id="idstudentforsearch" placeholder="Student ID" title="Введите ID ученика, чтобы отфильтровать поиск" autocomplete="off" type="text" style="position:relative; left:32%; text-align: center; width: 100px; color: black;margin-left:5px"">
						</div>
						<div style="position:relative; left:30%; margin-top:5px; margin-bottom:5px;">
							 <button title="Запускает процесс поиска информации по статусам урока (отменен, перенесен, удален)" id="startlookstatus">Получить инфо об уроках</button>
							 <button title="Очищает поле от полученной инфы" id="clearlessonstatus">Очистить</button>
					    </div>
				</span>
						<div>
							<p id="statustable" style="margin-top:5px; max-height:400px; overflow:auto; display:none; color:bisque; text-align:center"></p>
						</div>
        </span>
</div>`;

var win_Timetable = // описание элементов окна предстоящих и прошедших занятиях
    `<div style="display: flex; width: 450px;">
<span style="width: 450px">
        <span style="cursor: -webkit-grab;">
                <div style="margin: 5px; width: 450;" id="HeadTimetable">
                        <button id="hideMeTT" style="width:50px; background: #228B22;">hide</button>
                </div>
                <div style="display:flex; justify-content:space-evenly; margin-top:5px;">
                     <button title="Выводит инфо о прошедших уроках" id="getlessonpast">Прошедшие уроки</button>
                     <button title="Выводит инфо о предстоящих уроках" id="getlessonfuture">Предстоящие уроки</button>
                 </div>
                 </span>
                <div id="timetableinfo">
                     <p id="timetabledata" style="width:450px;color:bisque; max-height:400px; margin-left:5px; margin-top:5px; overflow:auto;text-align:center;"></p>
                </div>
</span>
</div>`;


var win_Techsummary = // описание элементов окна вывода технической информации обратившегося последний раз в чат пользователя
    `<div style="display: flex; width: 400px;">
<span style="width: 400px">
        <span style="cursor: -webkit-grab;">
                <div style="margin: 5px; width: 400;" id="HeadTechSummary">
                        <button id="hideMeTechSum" style="width:50px; background: #228B22;">hide</button>
                </div>
                 </span>
                <div id="techsummaryinfo">
                     <p id="techsumdata" style="width:400px;color:bisque; max-height:400px; margin-left:5px; font-size: 18px; margin-top:5px; overflow:auto;text-align:center;"></p>
                </div>
</span>
</div>`;

var win_servicedesk = // описание элементов окна Service Desk
    `<div style="display: flex; width: 465px;">
		<span style="width: 465px">
        <span style="cursor: -webkit-grab;">
                <div style="margin: 5px; width: 465;" id="SrvDskSummary">
                        <button id="hideMeSrvDsk" style="width:50px; background: #228B22;">hide</button>
						<span style="color:bisque">Token Status:</span>
						<span id="jiratknstatus">🟢</span>
						<span style="color:yellow">Prev.task</span>
						<button id="prevtask" style="width: 80px" title="Предыдущая задача"></button>
						<span style="color:cyan">Last task</span>
						<button id="newtask" style="width: 80px" title="Последняя задача"></button>
                </div>
                <div id="servicedeskinfo" style="margin-left:20px;">
                    <button class="sdbtn" id="optionTeacher" style="margin-left:2px; width:80px;">👽Teacher</button>
                    <button class="sdbtn" id="optionCRM2" style="margin-left:2px; width:80px;">🧮CRM2</button>
                    <button class="sdbtn" id="optionAuth" style="margin-left:2px; width:80px;">🔐Auth</button>
                    <button class="sdbtn" id="optionSchedule" style="margin-left:2px; width:80px;">📆Schedul</button>
                    <button class="sdbtn" id="optionBillingQA" style="margin-left:2px; width:80px;">💲Billing-QA</button>
                    <button class="sdbtn" id="optionOnboarding" style="margin-left:2px; margin-top:2px; width:80px;">♻Onboard</button>
                    <button class="sdbtn" id="optionTelephony" style="margin-left:2px; margin-top:2px; width:80px;">📞Telephn</button>
                    <button class="sdbtn" id="optionBilling" style="margin-left:2px; margin-top:2px; width:80px;">💰Billing</button>
                    <button class="sdbtn" id="optionSkysmart" style="margin-left:2px; margin-top:2px; width:80px;">🎠Skysmar</button>
                    <button class="sdbtn" id="optionMrkt" style="margin-left:2px; margin-top:2px; width:80px;">🎪MRKT</button>
                    <button class="sdbtn" id="optionVimbugs" style="margin-left:2px; margin-top:2px; width:80px;">🐞Vim-bug</button>
                    <button class="sdbtn" id="optionVimvideocall" style="margin-left:2px; margin-top:2px; width:80px;">📸Vid-call</button>
                    <button class="sdbtn" id="optionStudcab" style="margin-left:2px; margin-top:2px; width:80px;">👨‍🎓Studcab</button>
                    <button class="sdbtn" id="optionChat" style="margin-left:2px; margin-top:2px; width:80px;">💬Chat</button>
                    <button class="sdbtn" id="optionTripwire" style="margin-left:2px; margin-top:2px; width:80px;">🗣Tripwire</button>
                    <button class="sdbtn" id="optionAnalyst" style="margin-left:2px; margin-top:2px; width:80px;">📊KPI T</button>
                    <button class="sdbtn" id="optionCorp" style="margin-left:2px; margin-top:2px; width:80px;">💼Corp</button>
                    <button class="sdbtn" id="optionMarketing" style="margin-left:2px; margin-top:2px; width:80px;">📟Landing</button>
                    <button class="sdbtn" id="optionEdModel" style="margin-left:2px; margin-top:2px; width:80px;">🎓EM-QA</button>
					<button class="sdbtn" id="optionMrktprojbugs" style="margin-left:2px; margin-top:2px; width:80px;">👨‍💻mproject</button>
                    <button class="sdbtn" id="optionStudcabmobbugs" style="margin-left:2px; margin-top:2px; width:80px;">👨‍🎓📱Bugs</button>
					<button class="sdbtn" id="optionMobbugs" style="margin-left:2px; margin-top:2px; width:80px;">📱Mobil bug</button>
                    <button class="sdbtn" id="optionAcademymobbugs" style="margin-left:2px; margin-top:2px; width:80px;">🅰📱🐞</button>
                    <button class="sdbtn" id="optionInfra" style="margin-left:2px; margin-top:2px; width:80px; display:none">🛠Infra</button>
                </div>
				<div id="studcabmobbugskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#student-cabinet-mobile-bugs; Cообщаем о проблемах в МП Skysmart Parents и в МП Skyeng главные страницы продуктов</p>
					<button class="stcabmbsbtn" id="mpskyengmainsrv">МП Skyeng: главная(кроме лайф и толкс) и стр подключ услуг</button>
					<button class="stcabmbsbtn" id="mpskyengschedule">МП Skyeng: расписание и переносы</button>
					<button class="stcabmbsbtn" id="mpskyengpodbor">МП Skyeng: подбор П</button>
					<button class="stcabmbsbtn" id="mpskyengprofile">МП Skyeng: профиль У и настройки профиля, таймзоны</button>
					<button class="stcabmbsbtn" id="mpskyengbalance">МП Skyeng: стр оплаты и трансферы</button>
					<button class="stcabmbsbtn" id="mpskyengreferal">МП Skyeng: рефералка</button>
					<button class="stcabmbsbtn" id="mpskyengstories">Skyeng: Stories</button>
					<button class="stcabmbsbtn" id="mpskysmartparents">МП Skysmart Parents</button>
					<button class="stcabmbsbtn" id="mpunderground">Подземный стук</button>
				</div>
				<div id="infraoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">Здесь можно получить помощь от команды Инфраструктуры</p>
					<button class="infrabtn" id="askfordelacc">Запрос на удаление перс. данных</button>
				</div>
				<div id="teacherssrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#teachers-qa-support; канал по вопросам ЛКП, ТРМ</p>
					<button class="teacbtn" id="teacherstatistic">Статистика</button>
					<button class="teacbtn" id="teacherstudy">Моё обучение</button>
					<button class="teacbtn" id="teacherbreak">Перерыв</button>
					<button class="teacbtn" id="teachermoney">Финансы</button>
					<button class="teacbtn" id="teachermap">Карта роста</button>
					<button class="teacbtn" id="teachertimetable">Расписание</button>
					<button class="teacbtn" id="teacherperenos">Запрос на перенос</button>
					<button class="teacbtn" id="teacherwidgetbalance">Виджет баланса</button>
					<button class="teacbtn" id="teacherwidgetlessonmark">Виджет отметки уроков</button>
					<button class="teacbtn" id="teacherwidgetplanfact">Виджеты плана/факта уроков</button>
					<button class="teacbtn" id="teacherwidgettimetableweek">Виджет расписания на неделю</button>
					<button class="teacbtn" id="teacherwidgetKPI">Виджет KPI</button>
					<button class="teacbtn" id="teacherwidgetmystudents">Виджет "Мои ученики"</button>
					<button class="teacbtn" id="teacherTRMquestions">Вопросы по ТРМ</button>
					<button class="teacbtn" id="teacherunderground">Подземный стук</button>
				</div>
				<div id="crm2srvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:160px;">#crm2-support</p>
					<button class="crm2sbtn" id="crm2taskssoprovod">Вопросы по задачам "Сопровождения"</button>
					<button class="crm2sbtn" id="crm2taskssales">Вопросы по задачам "Продаж"</button>
					<button class="crm2sbtn" id="crm2lessonhistory">Вопросы по "Истории уроков"</button>
					<button class="crm2sbtn" id="crm2paymenthistory">Вопросы про виджет "История платежей"</button>
					<button class="crm2sbtn" id="crm2convertsrc">Вопросы по "Визардам конвертации услуги"</button>
					<button class="crm2sbtn" id="crm2actionshistory">Вопросы о "История действий"</button>
					<button class="crm2sbtn" id="crm2familycard">Вопросы о карточке "Семья"</button>
					<button class="crm2sbtn" id="crm2profile">Вопросы о "Профиле" заявки</button>
					<button class="crm2sbtn" id="crm2communications">Вопросы по разделу "Коммуникации"</button>
					<button class="crm2sbtn" id="crm2taskpoolsoporovd">Проблемы с ф-лом пула задач "список задач" сопровождение</button>
					<button class="crm2sbtn" id="crm2taskpoolsales">Проблемы с функционалом пула задач "список задач" продажи</button>
					<button class="crm2sbtn" id="crm2migrationcrm">Миграция компании из CRM1 в CRM2</button>
					<button class="crm2sbtn" id="crm2changestk">Смена STK услуги</button>
				</div>
				<div id="authsrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#auth; Обсуждение общих вопросов по проектам Auth/ID (авторизация, роли и доступы, данные пользователей и т. д.)</p>
					<button class="authbtn" id="authdevq">Вопросы к разработке</button>
					<button class="authbtn" id="auth2google">Проблемы с 2FA : проблема с google authenticator</button>
					<button class="authbtn" id="auth2faemail">Проблемы с 2FA: не приходит письмо о восстановлении пароля</button>
					<button class="authbtn" id="auth2fasms">Проблемы с 2FA: не приходит смс</button>
					<button class="authbtn" id="authdeladdrolesteach">Удаление / добавление ролей Преподавателям</button>
					<button class="authbtn" id="authdeladdrolesstud">Удаление / добавление ролей Ученикам</button>
					<button class="authbtn" id="authlogcheck">Проверка логов в ID</button>
					<button class="authbtn" id="authunderground">Подземный стук</button>
				</div>
				<div id="schedulesrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#schedule-qa-support; Канал по вопросам расписания ученика, ТТ, автоподбора и ручного подбора</p>
					<button class="schdbtn" id="ttenableAP">Подключение АП</button>
					<button class="schdbtn" id="ttdisableAP">Отключить АП в ЛКУ</button>
					<button class="schdbtn" id="ttquestions">Вопросы по ТТ</button>
					<button class="schdbtn" id="ttnottaskpodbor">Почему нет задачи подбора ?</button>
					<button class="schdbtn" id="ttunderground">Подземный стук</button>
				</div>
				<div id="billingqasrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#billing-qa-support; Канал для рассмотрения причины расхождений баланса учеников</p>
					<button class="bilqabtn" id="billqarassroch">Вопросы по рассрочке ученика</button>
					<button class="bilqabtn" id="billqabalancecorrect">Проверка баланса У на расхождения</button>
				</div>
				<div id="c1srvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#c1-support; Поддержка витрины оплаты (Не виджет оплаты в pcs), Onboarding (Kids&Adult), Scoring, AutoIntroLesson (АвтоВУ)</p>
					<button class="c1sbtn" id="c1verstka">Проблемы с версткой</button>
					<button class="c1sbtn" id="c1payonboarding">Не завершился онбординг после оплаты</button>
					<button class="c1sbtn" id="c1redirects">Циклические редиректы</button>
					<button class="c1sbtn" id="c1underground">Подземный стук</button>
				</div>
				<div id="telephonysrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#telephony-support; Канал для поддержки внутренней телефонии</p>
					<button class="telepbtn" id="telnoaccess">Отсутствие доступа к странице телефонии</button>
					<button class="telepbtn" id="teloutgoing">Проблема с исходящим вызовом</button>
					<button class="telepbtn" id="telincoming">Проблема с входящим вызовом</button>
					<button class="telepbtn" id="telspeaking">Проблема во время разговора</button>
					<button class="telepbtn" id="telrtstat">Проблема с реал-тайм статистикой</button>
					<button class="telepbtn" id="telcallinfo">Запрос информации по звонку</button>
					<button class="telepbtn" id="telredicall">Проблема при переводе вызова</button>
					<button class="telepbtn" id="telunderground">Подземный стук</button>
				</div>
				<div id="billingsrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:180px;">#billing</p>
					<button class="billbtn" id="billcheques">Чеки/Инвойсы</button>
					<button class="billbtn" id="billdataanal">Data analytics</button>
					<button class="billbtn" id="billtaskfordev">Задача для разработки</button>
					<button class="billbtn" id="billadmreturn">Админка возвратов</button>
					<button class="billbtn" id="billtroublcodecard">Проблема с кодом для привязки карты</button>
					<button class="billbtn" id="billpaymentbot">Вilling Payment Bot</button>
					<button class="billbtn" id="billschemes">Схемы вознаграждения </button>
					<button class="billbtn" id="billselfemployee">Самозанятые </button>
					<button class="billbtn" id="billrequisites">Реквизиты</button>
					<button class="billbtn" id="billpayments">Выплаты</button>
					<button class="billbtn" id="billspisanie">Списание средств</button>
					<button class="billbtn" id="billreturns">Возвраты</button>
					<button class="billbtn" id="billpaymentmesystems">Платежные системы</button>
					<button class="billbtn" id="billwidgetpayment">Виджет оплаты</button>
					<button class="billbtn" id="billpay">Оплата</button>
					<button class="billbtn" id="billcredit">Рассрочка</button>
					<button class="billbtn" id="billoferta">Оферты</button>
					<button class="billbtn" id="billlendings">Лендинги</button>
					<button class="billbtn" id="billterms">Terms</button>
					<button class="billbtn" id="billsubscribtions">Подписки</button>
					<button class="billbtn" id="billbundles">Бандлы</button>
					<button class="billbtn" id="billtehproblemsprod">Технические проблемы на production</button>
					<button class="billbtn" id="billroles">Роли и доступы</button>
					<button class="billbtn" id="billbusanalys">Бизнес-анализ</button>
					<button class="billbtn" id="billtechconv">Техническое обсуждение</button>
				</div>
				<div id="skysmartsrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#skysmart-qa-support: канал поддержки платформы Skysmart</p>
					<button class="kidsbtn" id="skysmarthomework">Страница ДЗ и тестов</button>
					<button class="kidsbtn" id="skysmartgroup">Групп и параллельные уроки</button>
					<button class="kidsbtn" id="skysmartonetoone">Уроки 1:1</button>
				</div>
				<div id="edumodeloptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#em-qa-support: Канал для обращений по функционалу Educational Model</p>
					<button class="edumodbtn" id="edumgoal">Анкета целей</button>
					<button class="edumodbtn" id="skysmartcertificate">Сертификаты</button>
					<button class="edumodbtn" id="skysmartpersotrackprogress">Персотреки и виджет прогресса</button>
					<button class="edumodbtn" id="skysmartprogress">Страница прогресса</button>
					<button class="edumodbtn" id="skysmartfeedback">Обратная связь</button>
				</div>
				<div id="mrktsrvdskoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#mrkt-bill-questions; Канал для вопросов по промокодам, сертификатам, реферальной программе</p>
					<button class="mrktbtn" id="mrktsubscribptions">Подписки</button>
					<button class="mrktbtn" id="mrktcertificates">Заказ сертификатов</button>
					<button class="mrktbtn" id="mrktpromocodes">Заказ промокодов</button>
					<button class="mrktbtn" id="mrktdisablends">Отключение НДС</button>
					<button class="mrktbtn" id="mrktnachisl">Начисления (срочные, журналисты, PR)</button>
					<button class="mrktbtn" id="mrktdoublelessons">Удвоение уроков (сотрудники)</button>
					<button class="mrktbtn" id="mrktpriceq">Вопросы по прайсам</button>
					<button class="mrktbtn" id="mrktreferal">Реферальная программа</button>
					<button class="mrktbtn" id="mrktcertconsult">Сертификаты консультация / тех. проблема</button>
					<button class="mrktbtn" id="mrktpromocodesconsult">Промокоды консультация / тех.проблема</button>
					<button class="mrktbtn" id="mrktunderground">Подземный стук</button>
				</div>
				<div id="vimbugsoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#vim-bugs; Проблемы со взрослой платформой vimbox</p>
					<button class="vimbugsbtn" id="adultselfstudy">Adults Self-Study</button>
					<button class="vimbugsbtn" id="premiumflip">Premium и Flip</button>
					<button class="vimbugsbtn" id="lessonbutwidg">Виджет входа у взрослых У и П</button>
					<button class="vimbugsbtn" id="automark">Автоотметка по урокам взрослых У</button>
					<button class="vimbugsbtn" id="cmscontentadult">Взрослый англиский: CMS и контент на взрослой платформе</button>
					<button class="vimbugsbtn" id="adulthwlestest">Взрослый английский: Домашки, уроки, тесты</button>
					<button class="vimbugsbtn" id="showcaseadult">Шоукейс взрослого П/взрослого У</button>
					<button class="vimbugsbtn" id="vimboxpages" style="width:420px;">Любые страницы содержащие vimbox, но при этом не содержащие kids в URL</button>
				</div>
				<div id="vimvidoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#vim-video-call; Разработка модуля видеосвязи</p>
					<button class="vimvidsbtn" id="vimvidqa">Обращение для QA</button>
				</div>
                <div id="chatqaoptions" style="display: none; margin-left:20px;">
                <p style="color:bisque; font-size:18px; position:relative; top:7px; left:10px;">#chat-qa-support; Решают проблемы с чатами в ЛКП и ЛКУ</p>
                <button class="chatqabtn" id="chatqa">Обращение для QA</button>
                </div>
				<div id="tripwireoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#exp-tripwire-bugs; Life, Talks, расширение переводчик для браузера</p>
					<button class="tripwbtn" id="tripwqa">Обращение для QA</button>
				</div>
				<div id="analystoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#analysts-gm-tl; канал аналитиков teachers продукта</p>
					<button class="analystbtn" id="analystsqa">Обращение для QA</button>
				</div>
				<div id="corpoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#corp-support; Канал поддержки по вопросам корпоративных клиентов: ЛККК (не ЛКУ), начислялка, self-study, карточка компании.</p>
					<button class="corpbtn" id="corpqa">Обращение для QA</button>
				</div>
				<div id="marketingptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#marketing-qa; (регистрации, детские главные, взрослые главные, лендосы на лпг/тильде)</p>
					<button class="marketingbtn" id="marketingqa">Обращение для QA</button>
				</div>
				<div id="marketprojbugsptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#marketing-projects-bugs; Канал для обращений от ТП, связанных с багами на лендингах Тильды и проектами маркетинга</p>
					<button class="marketprojbugsbtn" id="marketprojbugsqa">Обращение для QA</button>
				</div>
				<div id="mobbugsoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#mobile-bugs; Канал обработки обращений по мобильному приложению Skyeng и Teachers.</p>
					<button class="mobbugsbtn" id="skymobauthorize">Skyeng МП: авторизация</button>
					<button class="mobbugsbtn" id="skymobregister">Skyeng МП: регистрация</button>
					<button class="mobbugsbtn" id="skymobregsocnetw">Skyeng МП: регистрация через соц. сети</button>
					<button class="mobbugsbtn" id="skymobpayment">Skyeng МП: оплата</button>
					<button class="mobbugsbtn" id="skymobauthsocnetw">Skyeng МП: аторизация через соц. сети</button>
					<button class="mobbugsbtn" id="skymobchats">Skyeng МП: чаты</button>
					<button class="mobbugsbtn" id="skymobpush">Skyeng МП: пуши</button>
					<button class="mobbugsbtn" id="skymobforcupd">Skyeng МП: force update</button>
					<button class="mobbugsbtn" id="skymobasettings">Skyeng МП: настройки</button>
					<button class="mobbugsbtn" id="skymoblanguage">Skyeng МП: локализация(язык приложения, контента)</button>
					<button class="mobbugsbtn" id="skymovideocall">Skyeng МП: видеосвязь(необразовательная часть)</button>
					<button class="mobbugsbtn" id="skyteachmob">Teachers МП</button>
				</div>

				<div id="academymobbugsoptions" style="display: none; margin-left:20px;">
					<p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#academic-mobile-bugs; Канал обработки обращений по МП Skyeng связанных с обучением.</p>
					<button class="academymobbugsbtn" id="academmobaudiobookslifetalks">МП Skyeng: Аудиокниги и Life + Talks</button>
					<button class="academymobbugsbtn" id="academmobsituations">МП Skyeng: Ситуации</button>
					<button class="academymobbugsbtn" id="academmobvideopractice">МП Skyeng: Видеопрактика</button>
					<button class="academymobbugsbtn" id="academmobselfstudy">МП Skyeng: Self Study</button>
					<button class="academymobbugsbtn" id="academmobvocabulartrainer">МП Skyeng: тренажер слов</button>
					<button class="academymobbugsbtn" id="academmobvocabular">МП Skyeng: Словарь</button>
					<button class="academymobbugsbtn" id="academmoblessons">МП Skyeng: уроки - образовательная часть</button>
					<button class="academymobbugsbtn" id="academmobhomeworks">МП Skyeng: Домашки</button>
				</div>

                <div id="studcaboptions" style="display: none; margin-left:20px;">
                <p style="color:bisque;font-size:18px;position:relative; top:7px; left:10px;">#student-cabinet-bugs; Сообщаем о проблемах во взрослом и детском ЛКУ (страницы на домене student.skyeng.ru)</p>
                <button class="studcabbtn" id="studadultcab">Взрослый ЛКУ Главная страница</button>
                <button class="studcabbtn" id="studkidcab">Детский ЛКУ Главная страница</button>
			    <button class="studcabbtn" id="studcabfamandcourse">Страница семьи и курсов</button>
                <button class="studcabbtn" id="studstories">Stories </button>
                <button class="studcabbtn" id="studcabrefpage">Реферальная страница</button>
                <button class="studcabbtn" id="studcabtransfpayhist">Страница оплаты, трансфера и истории баланса</button>
                <button class="studcabbtn" id="studcabttmovelesson">Страница расписания и переноса урока</button>
                <button class="studcabbtn" id="studcabteacherpage">Страница преподавателя</button>
                <button class="studcabbtn" id="studcabprofilesettings">Страница профиля У настройки</button>
				<button class="studcabbtn" id="studcabmenunav">Меню навигации (лейаут) </button>
                <button class="studcabbtn" id="studcabshowcase">Страница шоукейса (подключение услуг)</button>
                <button class="studcabbtn" id="studcabunderground">Подземный стук</button>
                </div>
	        </span>
				<div id="kidsform" style="display: none; margin-left:20px;">
					<input id="customfield_1" placeholder="ID Пользователей (Id П, Id У)" class="sdcustfieldformlines removefield"></input>
					<br>
					<textarea id="customfield_2" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_3" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_4" placeholder="Ожидаемое поведение" class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_5" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_1" style="margin-top:5px; width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="teachersform" style="display: none; margin-left:20px;">
					<input id="customfield_6" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<br>
					<textarea id="customfield_7" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_8" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_9" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_10" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_2" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="onboardingform" style="display: none; margin-left:20px;">
					<input id="customfield_11" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<br>
					<textarea id="customfield_12" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_13" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_14" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_15" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_3" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="billqaform" style="display: none; margin-left:20px;">
					<input id="customfield_16" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<br>
					<textarea id="customfield_17" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_18" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_19" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_20" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_4" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="scheduleform" style="display: none; margin-left:20px;">
					<input id="customfield_21" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<br>
					<textarea id="customfield_22" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_23" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_24" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_25" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_5" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="authform" style="display: none; margin-left:20px;">
					<input id="customfield_26" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<br>
					<textarea id="customfield_27" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_28" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_29" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_30" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_8" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="billingform" style="display: none; margin-left:20px;">
					<input id="customfield_32" placeholder="ID Ученика" oninput="onlyNumber(this)" class="sdcustfieldformlines removefield"></input>
					<br>
					<input id="customfield_33" placeholder="ID Услуги" oninput="onlyNumber(this)" class="sdcustfieldformlines removefield"></input>
					<br>
					<textarea id="customfield_34" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_35" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_36" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_6" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="telephonyform" style="display: none; margin-left:20px;">
					<textarea id="customfield_37" placeholder="Краткое и структурированное описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_38" placeholder="Ожидаемое поведение"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_39" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_7" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="crm2form" style="display: none; margin-left:20px;">
					<input id="customfield_40" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<br>
					<textarea id="customfield_41" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_42" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_43" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_44" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_9" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="mrktform" style="display: none; margin-left:20px;">
					<input id="customfield_47" placeholder="ID Ученика" oninput="onlyNumber(this)" class="sdcustfieldformlines removefield"></input>
					<input id="customfield_48" placeholder="ID Услуги" oninput="onlyNumber(this)" class="sdcustfieldformlines removefield"></input>
					<br>
					<textarea id="customfield_49" placeholder="Краткое и структурированное описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<button id="create_10" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="vimbugsform" style="display: none; margin-left:20px;">
					<input id="customfield_50" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<br>
					<textarea id="customfield_52" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_53" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_54" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_55" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_11" style="width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="vimvideocallform" style="display: none; margin-left:20px;">
					<input id="customfield_56" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<br>
					<textarea id="customfield_57" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_58" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_59" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_60" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_12" style="margin-top:5px; width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="studcabform" style="display: none; margin-left:20px;">
					<input id="customfield_61" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<br>
					<textarea id="customfield_62" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_63" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_64" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_65" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_13" style="margin-top:5px; width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="chatform" style="display: none; margin-left:20px;">
					<input id="customfield_66" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<br>
					<textarea id="customfield_67" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_68" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_69" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_70" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_14" style="margin-top:5px; width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="tripwireform" style="display: none; margin-left:20px;">
					<input id="customfield_71" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<br>
					<textarea id="customfield_72" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_73" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_74" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_75" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_15" style="margin-top:5px; width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="analystform" style="display: none; margin-left:20px;">
					<input id="customfield_76" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<br>
					<textarea id="customfield_77" placeholder="Описание проблемы" class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_78" placeholder="Как воспроизвести ошибку?" class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_79" placeholder="Ожидаемое поведение" class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_80" placeholder="Фактическое поведение" class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_16" style="margin-top:5px; width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="corpform" style="display: none; margin-left:20px;">
					<input id="customfield_81" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<br>
					<textarea id="customfield_82" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_83" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_84" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_85" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_17" style="margin-top:5px; width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="marketingform" style="display: none; margin-left:20px;">
					<input id="customfield_86" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<br>
					<textarea id="customfield_87" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_88" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_89" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_90" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_18" style="margin-top:5px; width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="mobileform" style="display: none; margin-left:20px;">
						<select style="height:28px;" id="prioritymbugs">
							<option selected disabled="">Приоритет</option>
							<option value="1">Blocker</option>
							<option value="2">Critical</option>
							<option value="10100">High</option>
							<option value="3">Major</option>
							<option value="4">Minor</option>
							<option value="5">Trivial</option>
					   </select>
					   <br>
					<input id="customfield_91" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<br>
                    <textarea id="customfield_911" placeholder="Приложение / Версия / Платформа"  class="sdcustfieldformlines removefield"></textarea>
					<br>
                    <textarea id="customfield_912" placeholder="Девайс / ОС"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_92" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_94" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_95" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_96" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_19" style="margin-top:5px; width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="edumodelform" style="display: none; margin-left:20px;">
					<input id="customfield_97" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<br>
					<textarea id="customfield_98" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_99" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_100" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_101" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_20" style="margin-top:5px; width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="stcabmbbugsform" style="display: none; margin-left:20px;">
					<input id="customfield_102" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<br>
                    <textarea id="customfield_103" placeholder="Приложение / Версия / Платформа"  class="sdcustfieldformlines removefield"></textarea>
					<br>
                    <textarea id="customfield_104" placeholder="Девайс / ОС"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_105" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_106" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_107" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_108" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_21" style="margin-top:5px; width: 150px; position:relative; left:30%;">Создать</button>
				</div>
				<div id="marketprojbugsform" style="display: none; margin-left:20px;">
					<input id="customfield_109" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines  removefield"></input>
					<br>
					<textarea id="customfield_110" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_111" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines  removefield"></textarea>
					<br>
					<textarea id="customfield_112" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_113" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_22" style="margin-top:5px; width: 150px; position:relative; left:30%;">Создать</button>
				</div>

				<div id="academymobileform" style="display: none; margin-left:20px;">
						<select style="height:28px;" id="academyprioritymbugs">
							<option selected disabled="">Приоритет</option>
							<option value="1">Blocker</option>
							<option value="2">Critical</option>
							<option value="10100">High</option>
							<option value="3">Major</option>
							<option value="4">Minor</option>
							<option value="5">Trivial</option>
					   </select>
					   <br>
					<input id="customfield_118" placeholder="ID Пользователей (Id П, Id У)"  class="sdcustfieldformlines removefield"></input>
					<br>
                    <textarea id="customfield_119" placeholder="Приложение / Версия / Платформа"  class="sdcustfieldformlines removefield"></textarea>
					<br>
                    <textarea id="customfield_120" placeholder="Девайс / ОС"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_121" placeholder="Описание проблемы"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_122" placeholder="Как воспроизвести ошибку?"  class="sdcustfieldformlines removefield"></textarea>
					<br>
					<textarea id="customfield_123" placeholder="Ожидаемое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<textarea id="customfield_124" placeholder="Фактическое поведение"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_24" style="margin-top:5px; width: 150px; position:relative; left:30%;">Создать</button>
				</div>

				<div id="infraform" style="display: none; margin-left:20px;">
					<input id="customfield_114" placeholder="ID в системе Auth"  class="sdcustfieldformlines removefield"></input>
					<br>
					<textarea id="customfield_115" placeholder="Ссылка на запрос (об удалении данных)"  class="sdcustfieldformlines  removefield"></textarea>
					<br>
					<legend style="color:bisque" id="customfield_116-label">Нужен ли официальный ответ на запрос?</legend>
					<input class="radio" type="radio" name="customfield_116" value="15820" resolved=""><label style="color:bisque; font-size: 16px;">Да</label>
					<input class="radio" type="radio" name="customfield_116" value="15821" resolved=""><label style="color:bisque; font-size: 16px;">Нет</label>
					<br>
					<textarea id="customfield_117" placeholder="Комментарий"  class="sdexpecactual removefield"></textarea>
					<br>
					<button id="create_23" style="margin-top:5px; width: 150px; position:relative; left:30%;">Создать</button>
				</div>
		</span>
</div>`;

let audio

function maxLengthCheck(object) // функция ограничения кол-ва символов в полях
{
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
}

function onlyNumber(object) { // функция для разрешения ввода только цифр и знака -
    object.value = object.value.replace(/[^0-9-]/g, '');
}

function onlyNumbers(object) { // функция для разрешения ввода только цифр
    object.value = object.value.replace(/[^0-9]/g, '');
}

function noDoubts(object) { // функция для разрешения ввода только английских и русских букв без запрещенных символов
    object.value = object.value.replace(/["'\\]/gi, '');
}

if (localStorage.getItem('winTopAF') == null) { // началоное положение главного окна (если не задано ранее)
    localStorage.setItem('winTopAF', '120');
    localStorage.setItem('winLeftAF', '295');
}

if (localStorage.getItem('winTopLinks') == null) { // началоное положение окна ссылок (если не задано ранее)
    localStorage.setItem('winTopLinks', '120');
    localStorage.setItem('winLeftLinks', '295');
}

if (localStorage.getItem('winTopLinksd') == null) { // началоное положение окна ссылок с доступами (если не задано ранее)
    localStorage.setItem('winTopLinksd', '120');
    localStorage.setItem('winLeftLinksd', '295');
}

if (localStorage.getItem('winTopJira') == null) { // началоное положение окна поиска по Jira (если не задано ранее)
    localStorage.setItem('winTopJira', '120');
    localStorage.setItem('winLeftJira', '295');
}

if (localStorage.getItem('winTopStat') == null) { // началоное положение окна статистики (если не задано ранее)
    localStorage.setItem('winTopStat', '120');
    localStorage.setItem('winLeftStat', '295');
}

if (localStorage.getItem('winTopService') == null) { // началоное положение окна информации об  услугах
    localStorage.setItem('winTopService', '120');
    localStorage.setItem('winLeftService', '295');
}

if (localStorage.getItem('winTopLessonStatus') == null) { // начальное положение окна проверки статуса урока удален перенесен и кем
    localStorage.setItem('winTopLessonStatus', '120');
    localStorage.setItem('winLeftLessonStatus', '295');
}

if (localStorage.getItem('winTopTimetable') == null) { // начальное положение окна проверки прошедшего расписания и предстоящих уроков
    localStorage.setItem('winTopTimetable', '120');
    localStorage.setItem('winLeftTimetable', '295');
}

if (localStorage.getItem('winTopTechSum') == null) { // начальное положение окна проверки тех информации об устройстве пользователя обратившегося в чат АФ
    localStorage.setItem('winTopTechSum', '120');
    localStorage.setItem('winLeftTechSum', '295');
}

if (localStorage.getItem('winTopServDsk') == null) { // начальное положение окна Service Desk
    localStorage.setItem('winTopServDsk', '120');
    localStorage.setItem('winLeftServDsk', '295');
}

if (localStorage.getItem('winTopGrList') == null) {  // начальное положение окна списка группы
    localStorage.setItem('winTopGrList', '120');
    localStorage.setItem('winLeftGrList', '295');
}

if (localStorage.getItem('winTopMarks') == null) { //начальное положение окна оценко
    localStorage.setItem('winTopMarks', '120');
    localStorage.setItem('winLeftMarks', '295');
}

if (localStorage.getItem('winTopSugest') == null) { //начальное положение окна пожеланий и предложений
    localStorage.setItem('winTopSugest', '120');
    localStorage.setItem('winLeftSugest', '295');
}

if (localStorage.getItem('winTopRefuseNew') == null) { //начальное положение окна Отказ от помощи
    localStorage.setItem('winTopRefuseNew', '295');
    localStorage.setItem('winLeftRefuseNew', '295');
}

if (localStorage.getItem('winTopChatHis') == null) { //начальное положение окна истории чатов
    localStorage.setItem('winTopChatHis', '0');
    localStorage.setItem('winLeftChatHis', '80.6');
}

if (localStorage.getItem('winTopTaskCreate') == null) { //начальное положение окна Создания задач на СРМ
    localStorage.setItem('winTopTaskCreate', '295');
    localStorage.setItem('winLeftTaskCreate', '295');
}

//заносим переменную для переключения окна
if (localStorage.getItem('theme') == null) {
    localStorage.setItem('theme', 'dark');
}

//Для таймера автозакрытия
if (localStorage.getItem('aclstime') == null) {
    localStorage.setItem('aclstime', 12);
}

//Подключаем скрипт App Script с гугл таблиц, где содержаться шщаблоны, которыми пользуемся
if (localStorage.getItem('scriptAdr') == null) {
    localStorage.setItem('scriptAdr', 'https://script.google.com/macros/s/AKfycbzsf72GllYQdCGg-L4Jw1qx9iv9Vz3eyiQ9QO81HEnlr0K2DKqy6zvi7IYu77GB6EMU/exec');
}

let infouserbut = document.createElement('p');
infouserbut.id = 'userIdScript';
infouserbut.innerHTML = '<a style="color: black; width:40px; cursor: pointer;"> Info </a>';

let nextstuduserbut = document.createElement('p');
nextstuduserbut.id = 'nextStudentIdScript';
nextstuduserbut.innerHTML = '<a style="color: black; width:40px; cursor: pointer;"> Info </a>';

let nextteachuserbut = document.createElement('p');
nextteachuserbut.id = 'nextTeacherIdScript';
nextteachuserbut.innerHTML = '<a style="color: black; cursor: pointer;"> Info </a>';

let buttonhistory = document.createElement('span');
buttonhistory.id = 'lookForHistory';
buttonhistory.innerHTML = '<a style="color: black; cursor: pointer;"> Chat History </a>';

let buttonserv = document.createElement('span');
buttonserv.id = 'nextStudentServiceInfo';
buttonserv.innerHTML = " ⚜ ";
buttonserv.style.width = "20px";
buttonserv.style.cursor = "pointer";

let buttonservstud = document.createElement('span');
buttonservstud.id = 'nextStudentServiceInfo1';
buttonservstud.innerHTML = " ⚜ ";
buttonservstud.style.width = "20px";
buttonservstud.style.cursor = "pointer";

let buttonservteach = document.createElement('span');
buttonservteach.id = 'nextTeacherServiceInfo1';
buttonservteach.innerHTML = " ⚜ ";
buttonservteach.style.width = "20px";
buttonservteach.style.cursor = "pointer";

let buttonnextstudentid = document.createElement('span');
buttonnextstudentid.id = 'nextStudentIdChatHistory';
buttonnextstudentid.innerHTML = '<a style="color: black; cursor: pointer;"> Chat History</a>';

let buttonnextteacherid = document.createElement('span');
buttonnextteacherid.id = 'nextTeacherIdChatHistory';
buttonnextteacherid.innerHTML = '<a style="color: black; cursor: pointer;"> Chat History</a>';

let butteachid = document.createElement('button');
butteachid.id = 'teacheridtofield';
butteachid.innerHTML = "👽 (ID П) П обратился ";
butteachid.style.width = "160px";
butteachid.style.cursor = "pointer";
butteachid.style.border = "1px solid black";
butteachid.style.borderRadius = "10px";

let butstdid = document.createElement('button');
butstdid.id = 'studentidtofield';
butstdid.innerHTML = "👨‍🎓 (ID У) П обратился";
butstdid.style.width = "150px";
butstdid.style.cursor = "pointer";
butstdid.style.marginLeft = "2px";
butstdid.style.border = "1px solid black";
butstdid.style.borderRadius = "10px";

let butteachidfstd = document.createElement('button');
butteachidfstd.id = 'teacheridfromstudent';
butteachidfstd.innerHTML = "👽 (ID П) У обратился";
butteachidfstd.style.width = "150px";
butteachidfstd.style.cursor = "pointer";
butteachidfstd.style.marginLeft = "2px";
butteachidfstd.style.border = "1px solid black";
butteachidfstd.style.borderRadius = "10px";

let buttonservid = document.createElement('button');
buttonservid.id = 'servidstudento';
buttonservid.innerHTML = "ID услуги У (крит)";
buttonservid.style.width = "150px";
buttonservid.style.cursor = "pointer";
buttonservid.style.marginLeft = "2px";
buttonservid.style.border = "1px solid black";
buttonservid.style.borderRadius = "10px";
buttonservid.style.marginTop = "5px";

let marksstata = document.createElement('span');
marksstata.id = 'marksstata';
marksstata.innerHTML = '<a style="color: black; cursor: pointer;">📊</a>';

function changesoundaddr() {
    let objSoundList = document.getElementById('soundlistaddr')

    if (objSoundList.length > 1) {
        for (let i = 1; i < objSoundList.length; i++) {
            if (objSoundList[i].selected == true) {
                console.log(objSoundList[i].innerText + ' ' + objSoundList[i].value)
                localStorage.setItem('sound_str', objSoundList[i].value)
                audio = new Audio(localStorage.getItem('sound_str'))

            }
        }
    }
}

let template_flag = 0
let template_flag2 = 0
let word_text = ""
let template_text = ""
let flagggg = 0


buttonhistory.onclick = function () { //функция приска пр истории чатов в коте
    document.getElementById('butChatHistory').click();

    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
            document.getElementById('chatuserhis').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0]
            btn_search_history.click()
        }
    }
}

marksstata.onclick = async function () { //проверка статистики оценок от пользователя

    if (document.getElementById('AF_Marks').style.display == 'none') {
        document.getElementById('AF_Marks').style.display = ''

        var date = new Date()

        day = month = ""
        if (date.getMonth() < 9)
            month = "0" + (date.getMonth() + 1)
        else
            month = (date.getMonth() + 1)
        if (date.getDate() < 10)
            day = "0" + date.getDate()
        else
            day = date.getDate()
        if (date.getHours() < 10)
            hours = '0' + date.getHours()
        else
            hours = date.getHours()
        if (date.getMinutes() < 10)
            minutes = '0' + date.getMinutes()
        else
            minutes = date.getMinutes()
        if (date.getSeconds() < 10)
            seconds = '0' + date.getSeconds()
        else
            seconds = date.getSeconds()

        secondDate = date.getFullYear() + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + ".000z"

        for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
                document.getElementById('useridsearch').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
        }
        let tempval = document.getElementById('useridsearch').value;
        findmarksstat.click();
        document.getElementById('markstable').innerText = "Загрузка..."

        await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
            "headers": {
                "content-type": "application/json",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://skyeng.autofaq.ai/tickets/archive",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"channelUserFullTextLike\":\"" + tempval + "\",\"tsFrom\":\"2022-01-01T00:00:00.000Z\",\"tsTo\":\"" + secondDate + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Desc\",\"page\":1,\"limit\":100}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(r => r.json()).then(r => datamarks = r)

        let count = {};
        let clswoutmark = 0;
        let markscount = 0;
        let flagok = [];
        for (let i = 0; i < datamarks.items.length; i++) {
            if (datamarks.items[i].stats.rate != undefined && datamarks.items[i].stats.rate.rate == undefined)
                clswoutmark++;
            if (datamarks.items[i].stats.rate != undefined && datamarks.items[i].stats.rate.rate != undefined)
                flagok.push(datamarks.items[i].stats.rate.rate)
        }
        flagok.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
        console.log(count);
        if (count[1] == undefined)
            count[1] = 0;
        if (count[2] == undefined)
            count[2] = 0;
        if (count[3] == undefined)
            count[3] = 0;
        if (count[4] == undefined)
            count[4] = 0;
        if (count[5] == undefined)
            count[5] = 0;
        markscount = (count[1] + count[2] + count[3] + count[4] + count[5]);
        document.getElementById('markstable').innerHTML = 'Пользователь 🕵️‍♀️: ' + tempval + '<br>' +
            'Name: ' + datamarks.items[0].channelUser.fullName + '<br>' +
            'Оценка 1 🤬: ' + count[1] + ' ................... ' + ((count[1] / markscount) * 100).toFixed(1) + '%' + '<br>' +
            'Оценка 2 🤢: ' + count[2] + ' ................... ' + ((count[2] / markscount) * 100).toFixed(1) + "%" + '<br>' +
            'Оценка 3 😐: ' + count[3] + ' ................... ' + ((count[3] / markscount) * 100).toFixed(1) + "%" + '<br>' +
            'Оценка 4 🥴: ' + count[4] + ' ................... ' + ((count[4] / markscount) * 100).toFixed(1) + "%" + '<br>' +
            'Оценка 5 😊: ' + count[5] + ' ................... ' + ((count[5] / markscount) * 100).toFixed(1) + '%' + '<br>' +
            'Всего оценок: ' + markscount + '<br>' + 'Обращений с начала года: ' + datamarks.total + '<br>' +
            'Оценки/кол-во обращений: ' + ((markscount / datamarks.total) * 100).toFixed(1) + '%' + '<br>' +
            'Закрыто без оценок: ' + clswoutmark + ' ............. ' + (clswoutmark / datamarks.total * 100).toFixed(1) + '%' + '<br>' +
            'Автозакрытие: ' + (datamarks.total - clswoutmark - markscount) + ' ....................... ' + ((datamarks.total - clswoutmark - markscount) / datamarks.total * 100).toFixed(1) + '%';
        document.getElementById('useridsearch').value = "";

    } else {
        document.getElementById('findmarksstat').onclick = async function () {
            let tempval = document.getElementById('useridsearch').value.trim();
            document.getElementById('markstable').innerText = "Загрузка..."

            var date = new Date()

            day = month = ""
            if (date.getMonth() < 9)
                month = "0" + (date.getMonth() + 1)
            else
                month = (date.getMonth() + 1)
            if (date.getDate() < 10)
                day = "0" + date.getDate()
            else
                day = date.getDate()
            if (date.getHours() < 10)
                hours = '0' + date.getHours()
            else
                hours = date.getHours()
            if (date.getMinutes() < 10)
                minutes = '0' + date.getMinutes()
            else
                minutes = date.getMinutes()
            if (date.getSeconds() < 10)
                seconds = '0' + date.getSeconds()
            else
                seconds = date.getSeconds()

            secondDate = date.getFullYear() + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + ".000z"

            await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                    "content-type": "application/json",
                    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin"
                },
                "referrer": "https://skyeng.autofaq.ai/tickets/archive",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"channelUserFullTextLike\":\"" + tempval + "\",\"tsFrom\":\"2022-01-01T00:00:00.000Z\",\"tsTo\":\"" + secondDate + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Desc\",\"page\":1,\"limit\":100}",
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            }).then(r => r.json()).then(r => datamarks = r)

            let count = {};
            let clswoutmark = 0;
            let markscount = 0;
            let flagok = [];
            for (let i = 0; i < datamarks.items.length; i++) {
                if (datamarks.items[i].stats.rate != undefined && datamarks.items[i].stats.rate.rate == undefined)
                    clswoutmark++;
                if (datamarks.items[i].stats.rate != undefined && datamarks.items[i].stats.rate.rate != undefined)
                    flagok.push(datamarks.items[i].stats.rate.rate)
            }
            flagok.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
            console.log(count);
            if (count[1] == undefined)
                count[1] = 0;
            if (count[2] == undefined)
                count[2] = 0;
            if (count[3] == undefined)
                count[3] = 0;
            if (count[4] == undefined)
                count[4] = 0;
            if (count[5] == undefined)
                count[5] = 0;
            markscount = (count[1] + count[2] + count[3] + count[4] + count[5]);
            document.getElementById('markstable').innerHTML = 'Пользователь 🕵️‍♀️: ' + tempval + '<br>' +
                'Name: ' + datamarks.items[0].channelUser.fullName + '<br>' +
                'Оценка 1 🤬: ' + count[1] + ' ................... ' + ((count[1] / markscount) * 100).toFixed(1) + '%' + '<br>' +
                'Оценка 2 🤢: ' + count[2] + ' ................... ' + ((count[2] / markscount) * 100).toFixed(1) + "%" + '<br>' +
                'Оценка 3 😐: ' + count[3] + ' ................... ' + ((count[3] / markscount) * 100).toFixed(1) + "%" + '<br>' +
                'Оценка 4 🥴: ' + count[4] + ' ................... ' + ((count[4] / markscount) * 100).toFixed(1) + "%" + '<br>' +
                'Оценка 5 😊: ' + count[5] + ' ................... ' + ((count[5] / markscount) * 100).toFixed(1) + '%' + '<br>' +
                'Всего оценок: ' + markscount + '<br>' + 'Обращений с начала года: ' + datamarks.total + '<br>' +
                'Оценки/кол-во обращений: ' + ((markscount / datamarks.total) * 100).toFixed(1) + '%' + '<br>' +
                'Закрыто без оценок: ' + clswoutmark + ' ............. ' + (clswoutmark / datamarks.total * 100).toFixed(1) + '%' + '<br>' +
                'Автозакрытие: ' + (datamarks.total - clswoutmark - markscount) + ' ....................... ' + ((datamarks.total - clswoutmark - markscount) / datamarks.total * 100).toFixed(1) + '%';
            document.getElementById('useridsearch').value = "";
        }
    }

    document.getElementById('clearmarksstat').onclick = function () {
        document.getElementById('markstable').innerHTML = "";
    }
}

buttonnextstudentid.onclick = function () { //искать историю чатов по ученику с которым след урок при обращении П
    document.getElementById('butChatHistory').click();

    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId") {
            document.getElementById('chatuserhis').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0]
            btn_search_history.click()
        }
    }
}

buttonnextteacherid.onclick = function () { //искать историю чатов по преподавателю с которым след урок при обращении У
    document.getElementById('butChatHistory').click();

    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId") {
            document.getElementById('chatuserhis').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0]
            btn_search_history.click()
        }
    }
}

infouserbut.onclick = function () { //функция Info по нажатию на которую ID переносится в расширение омельченко и нажимает Info кнопку автоматически
    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
            const editorExtensionId = localStorage.getItem('ext_id');
            chrome.runtime.sendMessage(
                editorExtensionId,
                {
                    name: "chm_message", question: 'send_event', messageValue: {
                        message: 'open-user-info',
                        userId: `${document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0]}`,
                    }
                }
            )
        }
    }
}

buttonserv.onclick = function () { //открывает окно вензель user info
    if (document.getElementById('AF_Service').style.display == 'none')
        document.getElementById('AF_Service').style.display = '';

    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId") {
            document.getElementById('idstudent').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText;
            getidstudent.click();
        }
    }
}

buttonservteach.onclick = function () { //открывает окно вензель user info
    if (document.getElementById('AF_Service').style.display == 'none')
        document.getElementById('AF_Service').style.display = '';

    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId") {
            document.getElementById('idstudent').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText;
            getidstudent.click();
        }
    }
}

buttonservstud.onclick = function () { //открывает окно вензель user info
    if (document.getElementById('AF_Service').style.display == 'none')
        document.getElementById('AF_Service').style.display = '';

    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
            document.getElementById('idstudent').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0]
            getidstudent.click();
        }
    }
}

nextstuduserbut.onclick = function () { // открывает просмотр инфо о пользователе взаимодействуя со скриптом Script Package
    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId") {
            const editorExtensionId = localStorage.getItem('ext_id');
            chrome.runtime.sendMessage(
                editorExtensionId,
                {
                    name: "chm_message", question: 'send_event', messageValue: {
                        message: 'open-user-info',
                        userId: `${document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText}`,
                    }
                }
            )
        }
    }
}

nextteachuserbut.onclick = function () { // открывает просмотр инфо о пользователе преподе при обращении У  взаимодействуя
    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId") {
            const editorExtensionId = localStorage.getItem('ext_id');
            chrome.runtime.sendMessage(
                editorExtensionId,
                {
                    name: "chm_message", question: 'send_event', messageValue: {
                        message: 'open-user-info',
                        userId: `${document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText}`,
                    }
                }
            )
        }
    }
}

let addInfoUser = document.createElement('div')

let hashBut = document.createElement('div')
hashBut.id = "hashBut"
hashBut.innerHTML = "Хэш"
hashBut.style.marginRight = "15px";

let taskBut = document.createElement('div')
taskBut.id = "taskBut"
taskBut.innerHTML = "🛠 Task"
taskBut.style = "margin-right:15px; cursor:pointer; margin-top:15px;";
taskBut.classList.add('ant-btn')

let butServ = document.createElement('div')
butServ.id = "butServ"
butServ.innerHTML = "⚜UserInfo"
butServ.style = 'margin-right:15px; height:50px; cursor:pointer;';

let butMarks = document.createElement('div')
butMarks.id = "butMarks"
butMarks.innerHTML = "📊Оценки"
butMarks.style = 'margin-right:15px; height:50px; cursor:pointer;';

let butChatHistory = document.createElement('div')
butChatHistory.id = "butChatHistory"
butChatHistory.innerHTML = "💬Chat History"
butChatHistory.style = 'margin-right:15px; height:50px; cursor:pointer;';

let servDsk = document.createElement('div')
servDsk.id = "servDsk"
servDsk.innerHTML = "🛠ServiceDesk"
servDsk.style = 'margin-right:15px; height:50px; cursor:pointer;';

let butopensugestform = document.createElement('div')
butopensugestform.id = "suggestform"
butopensugestform.innerHTML = "📝Предложения"
butopensugestform.style = 'margin-right:15px; height:50px; cursor:pointer;';

let butrefuse = document.createElement('div')
butrefuse.id = "otkaz"
butrefuse.innerHTML = "❌Отказ от помощи"
butrefuse.style = 'margin-right:15px; height:50px; cursor:pointer;';

let butJiraOpenForm = document.createElement('div')
butJiraOpenForm.id = "JiraOpenForm"
butJiraOpenForm.innerHTML = "🔎Jira Search"
butJiraOpenForm.style = 'margin-right:15px; height:50px; cursor:pointer;';

let butmenu = document.createElement('button')
butmenu.innerText = 'Меню'
butmenu.id = 'headmymenu'
butmenu.style = 'height:32px;'
butmenu.classList.add('ant-btn')

let menubar = document.createElement('div')
menubar.style = `background: white; position:absolute; left: 0; top: 50px; border: 0px solid #000000; display:none; min-height: 60px; min-width:110px; box-shadow: -1px 4px 16px 7px rgba(34, 60, 80, 0.09)`
menubar.id = 'idmymenu'

butmenu.onclick = () => { // кнопка открытия Меню
    if (menubar.style.display == 'none') {
        menubar.style.display = ''
		let xvarmenu = parseInt(document.getElementById('headmymenu').getBoundingClientRect().x - 231)
		menubar.style.left = xvarmenu + 'px';
        if (document.querySelector('.ant-layout-content .expert-chat_content') != null) {
            document.querySelector('.ant-layout-content .expert-chat_content').addEventListener('click', function (event) {
                var e = document.getElementById('idmymenu');
                if (!e.contains(event.target)) e.style.display = 'none';
            });
        } else if (document.querySelector('.ant-layout-content .app-body-content-inner-right') != null) {
            document.querySelector('.ant-layout-content .app-body-content-inner-right').addEventListener('click', function (event) {
                var e = document.getElementById('idmymenu');
                if (!e.contains(event.target)) e.style.display = 'none';
            });
        }
    } else menubar.style.display = 'none'
}

let maskBack = document.createElement('div')
maskBack.id = "maskBack"
maskBack.innerHTML = "Вернуть"
maskBack.style.marginRight = "15px";
maskBack.style.display = "none";

maskBack.onclick = function () { // кнопка свернуть
    name = document.getElementById('maskBack').getAttribute('name')
    email = document.getElementById('maskBack').getAttribute('email')
    phone = document.getElementById('maskBack').getAttribute('phone')
    mask = document.getElementById('maskBack').getAttribute('mask')
    if (document.getElementsByClassName('expert-user_info_panel')[0].firstChild.firstChild.innerText == name &&
        document.getElementsByClassName('expert-user_details-list')[0].childNodes[0].childNodes[1].innerText == email &&
        document.getElementsByClassName('expert-user_details-list')[0].childNodes[1].childNodes[1].innerText == phone) {
        document.getElementsByClassName('ant-modal-wrap')[mask].style.display = ''
        document.getElementsByClassName('ant-modal-mask')[mask].style.display = ''
        document.getElementsByClassName('expert-chat-header-actions-inner')[0].style.display = '' // кнопки сверху
        document.getElementsByClassName('expert-chat-footer')[0].firstChild.firstChild.style.display = '' // кнопка заметок
        document.getElementById('maskBack').style.display = 'none'
    } else {
        document.getElementById('maskBack').innerHTML = "Открыт неверный чат"
        setTimeout(function () { document.getElementById('maskBack').innerHTML = "Вернуть" }, 3000)
    }
}

let maskBackHide = document.createElement('span')
maskBackHide.id = "maskBackHide"
maskBackHide.innerHTML = "Скрыть"
maskBackHide.style.marginRight = "15px";
maskBackHide.style.marginLeft = "15px";
maskBackHide.style.display = "";

maskBackHide.onclick = function () { // кнопка скрыть
    if (document.getElementsByClassName('ant-modal-content')[0].childNodes[1].firstChild.innerText == "Добавить комментарий к диалогу") {
        document.getElementsByClassName('ant-modal-wrap')[0].style.display = 'none'
        document.getElementsByClassName('ant-modal-mask')[0].style.display = 'none'
        document.getElementsByClassName('expert-chat-header-actions-inner')[0].style.display = 'none' // кнопки сверху
        document.getElementsByClassName('expert-chat-footer')[0].firstChild.firstChild.style.display = 'none' // кнопка заметок
        document.getElementById('maskBack').style.display = ''

        document.getElementById('maskBack').setAttribute('name', document.getElementsByClassName('expert-user_info_panel')[0].firstChild.firstChild.innerText)
        document.getElementById('maskBack').setAttribute('email', document.getElementsByClassName('expert-user_details-list')[0].childNodes[0].childNodes[1].innerText)
        document.getElementById('maskBack').setAttribute('phone', document.getElementsByClassName('expert-user_details-list')[0].childNodes[1].childNodes[1].innerText)
        document.getElementById('maskBack').setAttribute('mask', 0)
    } else
        for (i = 0; ; i++) {
            if (document.getElementsByClassName('ant-modal-wrap')[i] == undefined) {
                document.getElementsByClassName('ant-modal-wrap')[i - 1].style.display = 'none'
                document.getElementsByClassName('ant-modal-mask')[i - 1].style.display = 'none'
                document.getElementsByClassName('expert-chat-header-actions-inner')[0].style.display = 'none' // кнопки сверху
                document.getElementsByClassName('expert-chat-footer')[0].firstChild.firstChild.style.display = 'none' // кнопка заметок
                document.getElementById('maskBack').style.display = ''


                document.getElementById('maskBack').setAttribute('name', document.getElementsByClassName('expert-user_info_panel')[0].firstChild.firstChild.innerText)
                document.getElementById('maskBack').setAttribute('email', document.getElementsByClassName('expert-user_details-list')[0].childNodes[0].childNodes[1].innerText)
                document.getElementById('maskBack').setAttribute('phone', document.getElementsByClassName('expert-user_details-list')[0].childNodes[1].childNodes[1].innerText)
                document.getElementById('maskBack').setAttribute('mask', i - 1)
                break;
            }
        }
}

taskBut.onclick = function() { // функция открытия окна для работы с созданием задач на СРМ
	let conversid;
	if (document.getElementById('AF_Createtask').style.display == 'none') {
		document.getElementById('AF_Createtask').style.display = ''
		
			if (document.getElementsByClassName('expert-user_details-list').length >0) {
		for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
			if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-statusHTML") {
						if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт урок" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идет урок" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идет ВУ" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт ВУ" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт вводный урок") {
							document.getElementById('statusuroka').innerHTML = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerHTML
							document.getElementById('statusuroka').style = "background:rgb(70, 68, 81); padding:0px;"
						} else {
							document.getElementById('statusuroka').innerHTML = "Урок не идет"
							document.getElementById('statusuroka').style = "background:#69a4c7; padding:5px; color:#fff;  font-weight:600; border:1px solid black;"
						}
			}
		}
	}
	
	if (location.pathname.length > 17) {
		document.getElementById('chathashlnk').value = location.pathname.split('/')[3]
		conversid = document.getElementById('chathashlnk').value;
		
		fetch("https://skyeng.autofaq.ai/api/reason8/operator/customButtons/click", {
		  "headers": {
			"content-type": "application/json",
		  },
		  "body": `{\"buttonId\":\"b49609f3-9ff7-4ba5-a8a8-f2cef770bf19\",\"conversationId\":\"${conversid}\"}`,
		  "method": "POST",
		  "mode": "cors",
		  "credentials": "include"
		});

	}
	
	document.getElementById('refreshhashcreateform').onclick = function() {
			if (location.pathname.length > 17) {
		document.getElementById('chathashlnk').value = location.pathname.split('/')[3]
		}
				
		if (document.getElementsByClassName('expert-user_details-list').length >0) {
		for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
			if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-statusHTML") {
						if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт урок" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идет урок" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идет ВУ" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт ВУ" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт вводный урок") {
							document.getElementById('statusuroka').innerHTML = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerHTML
							document.getElementById('statusuroka').style = "background:rgb(70, 68, 81); padding:0px;"
						} else {
							document.getElementById('statusuroka').innerHTML = "Урок не идет"
							document.getElementById('statusuroka').style = "background:#69a4c7; padding:5px; color:#fff;  font-weight:600; border:1px solid black;"
						}
			}
		}
		}
	}
	
	document.getElementById('hideMeCreateForm').onclick = function() {
		document.getElementById('AF_Createtask').style.display = 'none'
		
				fetch("https://skyeng.autofaq.ai/api/reason8/operator/customButtons/form", {
				  "headers": {
					"content-type": "application/json",
				  },
				  "body": `{\"conversationId\":\"${conversid}\"}`,
				  "method": "POST",
				  "mode": "cors",
				  "credentials": "include"
				});
	}
	
	function changeprioritycolor() {
		if (document.getElementById('priority').children[1].selected == true)
			document.getElementById('priority').style ="color:green;font-weight:600; width: 100%; height: 25px; text-align: center;"
		else if (document.getElementById('priority').children[2].selected == true)
			document.getElementById('priority').style ="color:orange;font-weight:600; width: 100%; height: 25px; text-align: center;"
		else if (document.getElementById('priority').children[3].selected == true)
			document.getElementById('priority').style ="color:red;font-weight:600;width: 100%;  height: 25px; text-align: center;"
		else document.getElementById('priority').style ="color:#000;font-weight:400;width: 100%; height: 25px; text-align: center;"
	}
	
	document.getElementById('priority').onchange = changeprioritycolor;
	
	document.getElementById('clearcreateform').onclick = function() {
		document.getElementById('taskcomment').value = '';
		document.getElementById('taskserviceid').value = '';
		document.getElementById('taskuserid').value = '';
		document.getElementById('priority').children[0].selected = true
		document.getElementById('customerservice').children[0].selected = true
		document.getElementById('taskserviceid').style = 'color:#000; font-weight:400;width:100%'
		document.getElementById('priority').style ="color:#000;font-weight:400;width: 100%; height: 25px; text-align: center;"
	}
	
	document.getElementById('critteachertostudent').onclick = function() {
		document.getElementById('priority').children[3].selected = true;
		document.getElementById('priority').style ="color:red;font-weight:600;width: 100%;  height: 25px; text-align: center;"
		document.getElementById('customerservice').children[1].selected = true;
		
				for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
					if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId") {
						document.getElementById('taskuserid').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
					} else if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-educationServiceId") {
						document.getElementById('taskserviceid').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
				}
			}
			
			document.getElementById('taskcomment').value = document.getElementById('taskcomment').value + "\nПроверил связь с П, все ок, свяжитесь с У!"
		}

		document.getElementById('critstudenttoteacher').onclick = function() {
		document.getElementById('priority').children[3].selected = true;
		document.getElementById('priority').style ="color:red;font-weight:600;width: 100%;  height: 25px; text-align: center;"
		document.getElementById('customerservice').children[1].selected = true;
		
		let services;
		
		for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
                document.getElementById('taskuserid').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
        }
		
		for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
		if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "services") {
            services = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.match(/service-\d+/gm)
        }
		}

		if (services.length == 1) {
			document.getElementById('taskserviceid').value = services[0].replace('service-','')
		} else {
			document.getElementById('taskserviceid').value =  'У ученика несколько услуг, выберите подходящую!'
			document.getElementById('taskserviceid').style = 'color:red; font-weight:600;width:100%'
		}
			
			document.getElementById('taskcomment').value = document.getElementById('taskcomment').value + "\nПроверил связь с У, все ок, свяжитесь с П!"
		}
	
	
	document.getElementById('critstudent').onclick = function() {
		document.getElementById('priority').children[3].selected = true;
		document.getElementById('priority').style ="color:red;font-weight:600;width: 100%;  height: 25px; text-align: center;"
		document.getElementById('customerservice').children[1].selected = true;
		let services;
		
		for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
                document.getElementById('taskuserid').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
        }
		
		for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
		if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "services") {
            services = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.match(/service-\d+/gm)
        }
		}

		if (services.length == 1) {
			document.getElementById('taskserviceid').value = services[0].replace('service-','')
		} else {
			document.getElementById('taskserviceid').value =  'У ученика несколько услуг, выберите подходящую!'
			document.getElementById('taskserviceid').style = 'color:red; font-weight:600;width:100%'
		}
		
	}
	

	document.getElementById('highsecondline').onclick = function() {
		document.getElementById('priority').children[2].selected = true;
		document.getElementById('priority').style ="color:orange;font-weight:600; width: 100%; height: 25px; text-align: center;"
		document.getElementById('customerservice').children[6].selected = true;
		
		for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
                document.getElementById('taskuserid').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
        }
		
		document.getElementById('taskserviceid').value = '';
	}
	
	
	document.getElementById('highteachersc').onclick = function() {
		document.getElementById('priority').children[2].selected = true;
		document.getElementById('customerservice').children[5].selected = true;
		
		for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
                document.getElementById('taskuserid').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
        }
	}
	
	document.getElementById('highteachertc').onclick = function() {
		document.getElementById('priority').children[2].selected = true;
		document.getElementById('priority').style ="color:orange;font-weight:600; width: 100%; height: 25px; text-align: center;"
		document.getElementById('customerservice').children[2].selected = true;
		
		for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
                document.getElementById('taskuserid').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
        }
	}

	document.getElementById('createtask').onclick = function() {
		let prioritystate;
		let csstate;
		let usluga;
		for (let i=0; i<document.getElementById('priority').children.length;i++) {
			if (document.getElementById('priority').children[i].selected == true)
				prioritystate = document.getElementById('priority').children[i].value
		}

		for (let i=0; i<document.getElementById('customerservice').children.length;i++) {
			if (document.getElementById('customerservice').children[i].selected == true)
				csstate = document.getElementById('customerservice').children[i].value
		}
		
		if (document.getElementById('taskserviceid').value == '')
			usluga = document.getElementById('taskserviceid').value = null;
		else usluga = document.getElementById('taskserviceid').value
		
		if (document.getElementById('chathashlnk').value != '' && prioritystate !='Приоритет' && csstate != 'Отдел' && document.getElementById('taskuserid').value !='' && document.getElementById('taskcomment').value !='') {
			fetch("https://skyeng.autofaq.ai/api/reason8/operator/customButtons/form", {
			  "headers": {
				"content-type": "application/json",
			  },
			  "body": `{\"conversationId\":\"${conversid}",\"elements\":[{\"name\":\"priority\",\"value\":\"${prioritystate}\"},{\"name\":\"category\",\"value\":\"${csstate}\"},{\"name\":\"educationServiceIdInput\",\"value\":${usluga}},{\"name\":\"userId\",\"value\":${document.getElementById('taskuserid').value.trim()}},{\"name\":\"comment\",\"value\":\"${document.getElementById('taskcomment').value.replaceAll("\n",  "\\n")}\"}]}`,
			  "method": "POST",
			  "mode": "cors",
			  "credentials": "include"
			});
			
		
			document.getElementById('taskcomment').value = '';
			document.getElementById('taskserviceid').value = '';
			document.getElementById('taskuserid').value = '';
			document.getElementById('priority').children[0].selected = true
			document.getElementById('customerservice').children[0].selected = true
			document.getElementById('AF_Createtask').style.display = 'none'
			
		} else alert("Задача не была создана, проверьте, пожалуйста, поля: хеш чата, приоритет, отдел, ID пользователя, комментарий")
	}
		
	
	} else {
		document.getElementById('AF_Createtask').style.display = 'none'
				conversid = document.getElementById('chathashlnk').value;
				fetch("https://skyeng.autofaq.ai/api/reason8/operator/customButtons/form", {
				  "headers": {
					"content-type": "application/json",
				  },
				  "body": `{\"conversationId\":\"${conversid}\"}`,
				  "method": "POST",
				  "mode": "cors",
				  "credentials": "include"
				});
		}
	
}

hashBut.onclick = function () { // кнопка копирующая хеш чата
    adr = document.location.href
    adr1 = document.location.pathname
    adr1 = adr1.split('/')
    adr1 = adr1[3]
    if ((adr1 == undefined || adr1 == "") || window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') === -1) {
        if (window.location.href.indexOf('skyeng.autofaq.ai/logs') === -1) {
            document.getElementById('hashBut').innerHTML = "Ошибка"
            setTimeout(function () { document.getElementById('hashBut').innerHTML = "Хэш" }, 3000)
        } else {
            adr1 = document.getElementsByClassName('ant-spin-nested-loading')[1].firstChild.firstChild.firstChild.childNodes[1].textContent
            copyToClipboard1('https://hdi.skyeng.ru/autofaq/conversation/-11/' + adr1)
            document.getElementById('hashBut').innerHTML = "Скопировано"
            setTimeout(function () { document.getElementById('hashBut').innerHTML = "Хэш" }, 3000)
        }
    } else {
        if (localStorage.getItem('scriptAdr') == TS_addr)
            copyToClipboard1('https://hdi.skyeng.ru/autofaq/conversation/-18/' + adr1)
        else
            copyToClipboard1('https://hdi.skyeng.ru/autofaq/conversation/-11/' + adr1)
        document.getElementById('hashBut').innerHTML = "Скопировано"
        setTimeout(function () { document.getElementById('hashBut').innerHTML = "Хэш" }, 3000)
    }

}
let wintLinks = document.createElement('div'); // создание окна ссылок
document.body.append(wintLinks);
wintLinks.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopLinks') + 'px; left: ' + localStorage.getItem('winLeftLinks') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintLinks.style.display = 'none';
wintLinks.setAttribute('id', 'AF_Links');
wintLinks.innerHTML = win_Links;

let wintLinksd = document.createElement('div'); // создание окна доступов
document.body.append(wintLinksd);
wintLinksd.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopLinksd') + 'px; left: ' + localStorage.getItem('winLeftLinksd') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintLinksd.style.display = 'none';
wintLinksd.setAttribute('id', 'AF_Linksd');
wintLinksd.innerHTML = win_linksd;

let wintJira = document.createElement('div'); // создание окна поиска по Jira
document.body.append(wintJira);
wintJira.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopJira') + 'px; left: ' + localStorage.getItem('winLeftJira') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintJira.style.display = 'none';
wintJira.setAttribute('id', 'AF_Jira');
wintJira.innerHTML = win_Jira;

let wintStat = document.createElement('div'); // создание окна работы со статистикой
document.body.append(wintStat);
wintStat.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopStat') + 'px; left: ' + localStorage.getItem('winLeftStat') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintStat.style.display = 'none';
wintStat.setAttribute('id', 'AF_Stat');
wintStat.innerHTML = win_Stat;

let wintServices = document.createElement('div'); // создание окна вензель user info
document.body.append(wintServices);
wintServices.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopService') + 'px; left: ' + localStorage.getItem('winLeftService') + 'px; font-size: 14px; z-index: 21; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintServices.style.display = 'none';
wintServices.setAttribute('id', 'AF_Service');
wintServices.innerHTML = win_serviceinfo;

let wintLessonStatus = document.createElement('div'); // создание окна статус урока
document.body.append(wintLessonStatus);
wintLessonStatus.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopLessonStatus') + 'px; left: ' + localStorage.getItem('winLeftLessonStatus') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintLessonStatus.style.display = 'none';
wintLessonStatus.setAttribute('id', 'AF_LessonStatus');
wintLessonStatus.innerHTML = win_LessonStatus;

let wintTimetable = document.createElement('div'); // создание окна предстоящих и прошедших занятиях
document.body.append(wintTimetable);
wintTimetable.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopTimetable') + 'px; left: ' + localStorage.getItem('winLeftTimetable') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintTimetable.style.display = 'none';
wintTimetable.setAttribute('id', 'AF_Timetable');
wintTimetable.innerHTML = win_Timetable;

let wintTechSummary = document.createElement('div'); // создание окна инфо об устройстве пользователя
document.body.append(wintTechSummary);
wintTechSummary.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopTechSum') + 'px; left: ' + localStorage.getItem('winLeftTechSum') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintTechSummary.style.display = 'none';
wintTechSummary.setAttribute('id', 'AF_TechSummary');
wintTechSummary.innerHTML = win_Techsummary;

let wintServDsk = document.createElement('div'); // создание окна ServiceDesk
document.body.append(wintServDsk);
wintServDsk.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopServDsk') + 'px; left: ' + localStorage.getItem('winLeftServDsk') + 'px; font-size: 14px; z-index: 21; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintServDsk.style.display = 'none';
wintServDsk.setAttribute('id', 'AF_ServDsk');
wintServDsk.innerHTML = win_servicedesk;

let wintGrList = document.createElement('div'); // создание окна Список группы
document.body.append(wintGrList);
wintGrList.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopGrList') + 'px; left: ' + localStorage.getItem('winLeftGrList') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintGrList.style.display = 'none';
wintGrList.setAttribute('id', 'AF_GrList');
wintGrList.innerHTML = win_GrList;

let wintMarks = document.createElement('div'); // создание окна поиска оценок от пользователя
document.body.append(wintMarks);
wintMarks.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopMarks') + 'px; left: ' + localStorage.getItem('winLeftMarks') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintMarks.style.display = 'none';
wintMarks.setAttribute('id', 'AF_Marks');
wintMarks.innerHTML = win_Marks;

let wintSugform = document.createElement('div'); // создание окна предложения
document.body.append(wintSugform);
wintSugform.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopSugest') + 'px; left: ' + localStorage.getItem('winLeftSugest') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintSugform.style.display = 'none';
wintSugform.setAttribute('id', 'AF_Sugform');
wintSugform.innerHTML = win_suggest;

let wintRefuseFormNew = document.createElement('div'); // создание окна отказов
document.body.append(wintRefuseFormNew);
wintRefuseFormNew.style = 'min-height: 25px; width: 420px; background: #464451; top: ' + localStorage.getItem('winTopRefuseNew') + 'px; left: ' + localStorage.getItem('winLeftRefuseNew') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintRefuseFormNew.style.display = 'none';
wintRefuseFormNew.setAttribute('id', 'AF_Refuseformnew');
wintRefuseFormNew.innerHTML = win_refusefrom;

let wintChatHis = document.createElement('div'); // создание окна работы с историей чата
document.body.append(wintChatHis);
wintChatHis.style = 'min-height: 25px; min-width: 65px; height:100vh; background: rgb(70, 68, 81); top: 0px; right:0px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black; overflow:hidden';
wintChatHis.style.display = 'none';
wintChatHis.setAttribute('id', 'AF_ChatHis');
wintChatHis.innerHTML = win_Chathis;

let wintCreateTask = document.createElement('div'); // создание окна ссылок
document.body.append(wintCreateTask);
wintCreateTask.style = 'min-height: 25px; width: 420px; background: #464451; top: ' + localStorage.getItem('winTopTaskCreate') + 'px; left: ' + localStorage.getItem('winLeftTaskCreate') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintCreateTask.style.display = 'none';
wintCreateTask.setAttribute('id', 'AF_Createtask');
wintCreateTask.innerHTML = win_taskform;

var listenerLinks = function (e, a) { // сохранение позиции окна ссылок
    wintLinks.style.left = Number(e.clientX - myX4) + "px";
    wintLinks.style.top = Number(e.clientY - myY4) + "px";
    localStorage.setItem('winTopLinks', String(Number(e.clientY - myY4)));
    localStorage.setItem('winLeftLinks', String(Number(e.clientX - myX4)));
};

wintLinks.onmousedown = function (a) { // изменение позиции окна ссылок
    if (checkelementtype(a)){
        window.myX4 = a.layerX;
        window.myY4 = a.layerY;
        document.addEventListener('mousemove', listenerLinks);
    }
}
wintLinks.onmouseup = function () { document.removeEventListener('mousemove', listenerLinks); } // прекращение изменения позиции окна ссылок

var listenerJira = function (e, a) { // сохранение позиции окна поиска по Jira
    wintJira.style.left = Number(e.clientX - myX5) + "px";
    wintJira.style.top = Number(e.clientY - myY5) + "px";
    localStorage.setItem('winTopJira', String(Number(e.clientY - myY5)));
    localStorage.setItem('winLeftJira', String(Number(e.clientX - myX5)));
};

wintJira.onmousedown = function (a) { // изменение позиции окна поиска по Jira
    if (checkelementtype(a)){
        window.myX5 = a.layerX;
        window.myY5 = a.layerY;
        document.addEventListener('mousemove', listenerJira);
    }
}
wintJira.onmouseup = function () { document.removeEventListener('mousemove', listenerJira); } // прекращение изменения позиции окна поиска по Jira

var listenerStat = function (e, a) { // сохранение позиции окна работы со статистикой
    wintStat.style.left = Number(e.clientX - myX6) + "px";
    wintStat.style.top = Number(e.clientY - myY6) + "px";
    localStorage.setItem('winTopStat', String(Number(e.clientY - myY6)));
    localStorage.setItem('winLeftStat', String(Number(e.clientX - myX6)));
};

wintStat.onmousedown = function (a) { // изменение позиции окна работы со статистикой
    if (checkelementtype(a)){
        window.myX6 = a.layerX;
        window.myY6 = a.layerY;
        document.addEventListener('mousemove', listenerStat);
    }
}
wintStat.onmouseup = function () { document.removeEventListener('mousemove', listenerStat); } // прекращение изменения позиции окна работы со статистикой

var listenerServices = function (e, a) { // сохранение позиции окна вензель user info
    wintServices.style.left = Number(e.clientX - myX7) + "px";
    wintServices.style.top = Number(e.clientY - myY7) + "px";
    localStorage.setItem('winTopService', String(Number(e.clientY - myY7)));
    localStorage.setItem('winLeftService', String(Number(e.clientX - myX7)));
};

wintServices.onmousedown = function (a) {
    if (checkelementtype(a)){
        window.myX7 = a.layerX;
        window.myY7 = a.layerY;
        document.addEventListener('mousemove', listenerServices); // изменение позиции вензель user info
    }
}
wintServices.onmouseup = function () { document.removeEventListener('mousemove', listenerServices); } // прекращение изменения позиции вензель user info

var listenerLessonStatus = function (e, a) { // сохранение позиции окна статус урока
    wintLessonStatus.style.left = Number(e.clientX - myX8) + "px";
    wintLessonStatus.style.top = Number(e.clientY - myY8) + "px";
    localStorage.setItem('winTopLessonStatus', String(Number(e.clientY - myY8)));
    localStorage.setItem('winLeftLessonStatus', String(Number(e.clientX - myX8)));
};

wintLessonStatus.onmousedown = function (a) { // изменение позиции окна статус урока
    if (checkelementtype(a)){
        window.myX8 = a.layerX;
        window.myY8 = a.layerY;
        document.addEventListener('mousemove', listenerLessonStatus);
    }
}
wintLessonStatus.onmouseup = function () { document.removeEventListener('mousemove', listenerLessonStatus); } // прекращение изменения позиции окна

var listenerLinksd = function (e, a) { // сохранение позиции окна доступов
    wintLinksd.style.left = Number(e.clientX - myX9) + "px";
    wintLinksd.style.top = Number(e.clientY - myY9) + "px";
    localStorage.setItem('winTopLinksd', String(Number(e.clientY - myY9)));
    localStorage.setItem('winLeftLinksd', String(Number(e.clientX - myX9)));
};

wintLinksd.onmousedown = function (a) { // изменение позиции окна доступов
    if (checkelementtype(a)){
        window.myX9 = a.layerX;
        window.myY9 = a.layerY;
        document.addEventListener('mousemove', listenerLinksd);
    }
}
wintLinksd.onmouseup = function () { document.removeEventListener('mousemove', listenerLinksd); } // прекращение изменения позиции окна доступов

var listenerTimetable = function (e, a) { // сохранение позиции окна предстоящих и прошедших занятиях
    wintTimetable.style.left = Number(e.clientX - myX10) + "px";
    wintTimetable.style.top = Number(e.clientY - myY10) + "px";
    localStorage.setItem('winTopTimetable', String(Number(e.clientY - myY10)));
    localStorage.setItem('winLeftTimetable', String(Number(e.clientX - myX10)));
};

wintTimetable.onmousedown = function (a) { // изменение позиции окна предстоящих и прошедших занятиях
    if (checkelementtype(a)){
        window.myX10 = a.layerX;
        window.myY10 = a.layerY;
        document.addEventListener('mousemove', listenerTimetable);
    }
}
wintTimetable.onmouseup = function () { document.removeEventListener('mousemove', listenerTimetable); } // прекращение изменения позиции окна предстоящих и прошедших занятиях

var listenerTechSummary = function (e, a) { // сохранение позиции окна инфо об устройстве пользователя
    wintTechSummary.style.left = Number(e.clientX - myX11) + "px";
    wintTechSummary.style.top = Number(e.clientY - myY11) + "px";
    localStorage.setItem('winTopTechSum', String(Number(e.clientY - myY11)));
    localStorage.setItem('winLeftTechSum', String(Number(e.clientX - myX11)));
};

wintTechSummary.onmousedown = function (a) { // изменение позиции окна инфо об устройстве пользователя
    if (checkelementtype(a)){
        window.myX11 = a.layerX;
        window.myY11 = a.layerY;
        document.addEventListener('mousemove', listenerTechSummary);
    }
}
wintTechSummary.onmouseup = function () { document.removeEventListener('mousemove', listenerTechSummary); } // прекращение изменения позиции окна инфо об устройстве пользователя

var listenerServDsk = function (e, a) { // сохранение позиции окна ServiceDesk
    wintServDsk.style.left = Number(e.clientX - myX12) + "px";
    wintServDsk.style.top = Number(e.clientY - myY12) + "px";
    localStorage.setItem('winTopServDsk', String(Number(e.clientY - myY12)));
    localStorage.setItem('winLeftServDsk', String(Number(e.clientX - myX12)));
};

wintServDsk.onmousedown = function (a) { // изменение позиции окна ServiceDesk
    if (checkelementtype(a)){
        window.myX12 = a.layerX;
        window.myY12 = a.layerY;
        document.addEventListener('mousemove', listenerServDsk);
    }
}
wintServDsk.onmouseup = function () { document.removeEventListener('mousemove', listenerServDsk); } // прекращение изменения позиции окна ServiceDesk

var listenerGrList = function (e, a) { // сохранение позиции окна Список группы
    wintGrList.style.left = Number(e.clientX - myX13) + "px";
    wintGrList.style.top = Number(e.clientY - myY13) + "px";
    localStorage.setItem('winTopGrList', String(Number(e.clientY - myY13)));
    localStorage.setItem('winLeftGrList', String(Number(e.clientX - myX13)));
};

wintGrList.onmousedown = function (a) { // изменение позиции окна Список группы
    if (checkelementtype(a)){
        window.myX13 = a.layerX;
        window.myY13 = a.layerY;
        document.addEventListener('mousemove', listenerGrList);
    }
}
wintGrList.onmouseup = function () { document.removeEventListener('mousemove', listenerGrList); } // прекращение изменения позиции окна Список группы

var listenerMarks = function (e, a) { // сохранение позиции окна поиска оценок от пользователя
    wintMarks.style.left = Number(e.clientX - myX14) + "px";
    wintMarks.style.top = Number(e.clientY - myY14) + "px";
    localStorage.setItem('winTopMarks', String(Number(e.clientY - myY14)));
    localStorage.setItem('winLeftMarks', String(Number(e.clientX - myX14)));
};

wintMarks.onmousedown = function (a) { // изменение позиции окна поиска оценок от пользователя
    if (checkelementtype(a)){
        window.myX14 = a.layerX;
        window.myY14 = a.layerY;
        document.addEventListener('mousemove', listenerMarks);
    }
}
wintMarks.onmouseup = function () { document.removeEventListener('mousemove', listenerMarks); } // прекращение изменения позиции окна поиска оценок от пользователя

var listenerSugform = function (e, a) { // сохранение позиции окна предложения
    wintSugform.style.left = Number(e.clientX - myX15) + "px";
    wintSugform.style.top = Number(e.clientY - myY15) + "px";
    localStorage.setItem('winTopSugest', String(Number(e.clientY - myY15)));
    localStorage.setItem('winLeftSugest', String(Number(e.clientX - myX15)));
};

wintSugform.onmousedown = function (a) { // изменение позиции окна предложения
    if (checkelementtype(a)){
        window.myX15 = a.layerX;
        window.myY15 = a.layerY;
        document.addEventListener('mousemove', listenerSugform);
    }
}
wintSugform.onmouseup = function () { document.removeEventListener('mousemove', listenerSugform); } // прекращение изменения позиции окна предложения

var listenerRefuseForm = function (e, a) { // сохранение позиции окна отказов
    wintRefuseFormNew.style.left = Number(e.clientX - myX16) + "px";
    wintRefuseFormNew.style.top = Number(e.clientY - myY16) + "px";
    localStorage.setItem('winTopRefuseNew', String(Number(e.clientY - myY16)));
    localStorage.setItem('winLeftRefuseNew', String(Number(e.clientX - myX16)));
};

wintRefuseFormNew.onmousedown = function (a) { // изменение позиции окна отказов
    if (checkelementtype(a)){
        window.myX16 = a.layerX;
        window.myY16 = a.layerY;
        document.addEventListener('mousemove', listenerRefuseForm);
    }
}

wintRefuseFormNew.onmouseup = function () { document.removeEventListener('mousemove', listenerRefuseForm); } // прекращение изменения позиции окна отказов


var listenerTaskCreate = function (e, a) { // сохранение позиции окна доступов
    wintCreateTask.style.left = Number(e.clientX - myX17) + "px";
    wintCreateTask.style.top = Number(e.clientY - myY17) + "px";
    localStorage.setItem('winTopTaskCreate', String(Number(e.clientY - myY17)));
    localStorage.setItem('winLeftTaskCreate', String(Number(e.clientX - myX17)));
};

wintCreateTask.onmousedown = function (a) {
    if (checkelementtype(a)){
        window.myX17 = a.layerX;
        window.myY17 = a.layerY;
        document.addEventListener('mousemove', listenerTaskCreate);
    }
}
wintCreateTask.onmouseup = function () { document.removeEventListener('mousemove', listenerTaskCreate); }



function checkelementtype (a){ // проверка на какой элемент нажали
    let elem = document.elementFromPoint(a.clientX,a.clientY)
    
    if (elem.nodeName != 'BUTTON' && elem.nodeName != 'INPUT' && elem.nodeName != 'TEXTAREA' && elem.nodeName != 'SELECT'){
        return true;
    }
    return false;
}

// Модуль скрытия окон по двойному клику
document.getElementById('AF_Links').ondblclick = function (a) { // скрытие окна ссылок по двойному клику
    if (checkelementtype(a)){document.getElementById('AF_Links').style.display = 'none';}
}
document.getElementById('AF_Linksd').ondblclick = function (a) { // скрытие окна доступов по двойному клику
    if (checkelementtype(a)){document.getElementById('AF_Linksd').style.display = 'none';}
}
document.getElementById('AF_Jira').ondblclick = function (a) { // скрытие окна Jira по двойному клику
    if (checkelementtype(a)){document.getElementById('AF_Jira').style.display = 'none';}
}
document.getElementById('AF_GrList').ondblclick = function (a) { // скрытие окна Список группы по двойному клику
    if (checkelementtype(a)){document.getElementById('AF_GrList').style.display = 'none';}
}
document.getElementById('AF_Timetable').ondblclick = function (a) { // скрытие окна предстоящих и прошедших занятиях по двойному клику
    if (checkelementtype(a)){
        document.getElementById('AF_Timetable').style.display = 'none';
        document.getElementById('timetabledata').innerHTML = "";
    }
}
document.getElementById('AF_TechSummary').ondblclick = function (a) { // скрытие окна инфо об устройстве пользователя по двойному клику
    if (checkelementtype(a)){
        document.getElementById('AF_TechSummary').style.display = 'none';
        document.getElementById('techsumdata').innerHTML = "";
    }
}
document.getElementById('AF_Stat').ondblclick = function (a) { // скрытие окна работы со статистикой
    if (checkelementtype(a)){document.getElementById('AF_Stat').style.display = 'none';}
}
document.getElementById('AF_Sugform').ondblclick = function (a) { // скрытие окна окна предложений по двойному клику
    if (checkelementtype(a)){document.getElementById('AF_Sugform').style.display = 'none';}
}
document.getElementById('AF_Refuseformnew').ondblclick = function (a) { // скрытие окна отказа от помощи по двойному клику
    if (checkelementtype(a)){document.getElementById('AF_Refuseformnew').style.display = 'none';}
}
document.getElementById('AF_Marks').ondblclick = function (a) { // скрытие окна оценок от пользователя по двойному клику
    if (checkelementtype(a)){document.getElementById('AF_Marks').style.display = 'none';}
}
document.getElementById('AF_Service').ondblclick = function (a) { // скрытие окна вензель user info по двойному клику
    if (checkelementtype(a)){document.getElementById('AF_Service').style.display = 'none';}
}
document.getElementById('AF_LessonStatus').ondblclick = function (a) { // скрытие окна статус урока по двойному клику
    if (checkelementtype(a)){document.getElementById('AF_LessonStatus').style.display = 'none';}
}
document.getElementById('AF_Createtask').ondblclick = function (a) { // скрытие окна создания задачи в CRM2 по двойному клику
    if (checkelementtype(a)){document.getElementById('hideMeCreateForm').click();}
}
document.getElementById('AF_ServDsk').ondblclick = function (a) { // скрытие окна ServiceDesk по двойному клику
    if (checkelementtype(a)){document.getElementById('hideMeSrvDsk').click();}
}
// Конец модуля скрытия окон по двойному клику

document.getElementById('testUsers').ondblclick = function (a) { // скрытие поля ввода и кнопки логинера в окне testUsers
    if (checkelementtype(a)){
        if (document.getElementById('testid').style.display == '' && document.getElementById('idlogin').style.display == ''){
            document.getElementById('testid').style.display = 'none';
            document.getElementById('idlogin').style.display = 'none';
            localStorage.setItem('Hidetestid', '0');
        }
        else {
            document.getElementById('testid').style.display = '';
            document.getElementById('idlogin').style.display = '';
            localStorage.setItem('Hidetestid', '1');
        }
    }
}

let wintAF = document.createElement('div'); // создание главного окна
document.body.append(wintAF);
wintAF.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopAF') + 'px; left: ' + localStorage.getItem('winLeftAF') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintAF.setAttribute('id', 'AF_helper');
wintAF.innerHTML = win_AFhelper;
var chatsArray = []
var TS_addr = 'https://script.google.com/macros/s/AKfycbyuK-HoVzF2v66klEcqNyAKFFqtvVheEe4vLhRz/exec'
var KC_addr = 'https://script.google.com/macros/s/AKfycbzNJgvbbgMIRzEuIMv2yR2VRE5lT7xrhouGVod0/exec'
var TP_addr = 'https://script.google.com/macros/s/AKfycbzsf72GllYQdCGg-L4Jw1qx9iv9Vz3eyiQ9QO81HEnlr0K2DKqy6zvi7IYu77GB6EMU/exec'

var flagLangBut = 0
function move_again_AF() { //с АФ шняга там стили шмили скрипта отображение отправку сообщений

    const copyToClipboard = str => {           // инициализация функции копирования в буфер обмена
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    if (window.location.href.indexOf('autofaq') === -1) {
        document.getElementById('AF_helper').style.display = 'none';
    }

    var listenerAF = function (e, a) { // сохранение позиции главного окна 
        wintAF.style.left = Number(e.clientX - myX2) + "px";
        wintAF.style.top = Number(e.clientY - myY2) + "px";
        localStorage.setItem('winTopAF', String(Number(e.clientY - myY2)));
        localStorage.setItem('winLeftAF', String(Number(e.clientX - myX2)));
    };

    wintAF.onmousedown = function (a) { // изменение позиции главного окна
        if (checkelementtype(a)){
            window.myX2 = a.layerX;
            window.myY2 = a.layerY;
            document.addEventListener('mousemove', listenerAF);
        }
    }
    wintAF.onmouseup = function () { document.removeEventListener('mousemove', listenerAF); } // прекращение изменения позиции главного окна

    document.getElementById('sound_test').onclick = function () { // кнопка тест звука
        audio.play()
    }

    document.getElementById('setteststd').onclick = function () {
        if (document.getElementById('test_std').value != '') {
            localStorage.setItem('test_stud', document.getElementById('test_std').value);
        } else console.log("Ведите ID тестового ученика")
    }
    document.getElementById('settestteach').onclick = function () {
        if (document.getElementById('test_teach').value != '') {
            localStorage.setItem('test_teach', document.getElementById('test_teach').value);
        } else console.log("Ведите ID тестового преподавателя")
    }

    setInterval(clock_on_javascript_1, 1000);
    setInterval(clock_on_javascript_2, 1000);
    setInterval(clock_on_javascript_3, 1000);

    function clock_on_javascript_1() { //таймер обычного отсчета текущего времени
        var data = new Date();
        hours = data.getHours();
        if (hours < 10) { hours = "0" + hours; }
        minutes = data.getMinutes();
        if (minutes < 10) { minutes = "0" + minutes; }
        seconds = data.getSeconds();
        if (seconds < 10) { seconds = "0" + seconds; }
        time = hours + " : " + minutes + " : " + seconds;
        document.getElementById("clock_js").innerHTML = time;
    }

    function clock_on_javascript_2() { //таймер отсчета до срабатывания будильника #1
        var data = new Date();
        hours = data.getHours();
        if (hours < 10) { hours = "0" + hours; }
        minutes = data.getMinutes();
        if (minutes < 10) { minutes = "0" + minutes; }
        seconds = data.getSeconds();
        if (seconds < 10) { seconds = "0" + seconds; }
        var summin = JSON.parse(localStorage.getItem('setminuta')) + 60;
        if (localStorage.getItem('chronostamp') === null) {
            time = "00" + " : " + "00" + " : " + "00";
            document.getElementById("clock_remin").innerHTML = time;
        } else if (((localStorage.getItem('setchas') - hours) == 0) && ((localStorage.getItem('setminuta') > minutes))) {
            time = "00" + " : " + (localStorage.getItem('setminuta') - minutes - 1) + " : " + (60 - seconds);
            document.getElementById("clock_remin").innerHTML = time;
        } else if (((localStorage.getItem('setchas') - hours) > 1) && ((localStorage.getItem('setminuta') - minutes) == 0)) {
            time = (localStorage.getItem('setchas') - hours) + " : " + "00" + " : " + (60 - seconds);
            document.getElementById("clock_remin").innerHTML = time;
        } else if (((localStorage.getItem('setchas') - hours) >= 1) && localStorage.getItem('setminuta') < minutes) {
            time = ((localStorage.getItem('setchas') - hours) - 1) + " : " + (summin - minutes) + " : " + (60 - seconds);
            document.getElementById("clock_remin").innerHTML = time;
        } else if (((localStorage.getItem('setchas') - hours) > 0) && localStorage.getItem('setminuta') > minutes) {
            time = localStorage.getItem('setchas') - hours + " : " + (localStorage.getItem('setminuta') - minutes - 1) + " : " + (60 - seconds);
            document.getElementById("clock_remin").innerHTML = time;
        } else if (((localStorage.getItem('setchas') - hours) == 1) && (localStorage.getItem('setminuta') - minutes) == 0) {
            time = localStorage.getItem('setchas') - hours + " : " + "00" + " : " + (60 - seconds);
            document.getElementById("clock_remin").innerHTML = time;
        } else {
            time = "00" + " : " + "00" + " : " + "00";
            document.getElementById("clock_remin").innerHTML = time;
        }
    }

    function clock_on_javascript_3() { //таймер отсчета до срабатывания будильника #2
        var data1 = new Date();
        hours1 = data1.getHours();
        if (hours1 < 10) { hours1 = "0" + hours1; }
        minutes1 = data1.getMinutes();
        if (minutes1 < 10) { minutes1 = "0" + minutes1; }
        seconds1 = data1.getSeconds();
        if (seconds1 < 10) { seconds1 = "0" + seconds1; }
        var summin1 = JSON.parse(localStorage.getItem('setminuta1')) + 60;
        if (localStorage.getItem('chronostamp1') === null) {
            time1 = "00" + " : " + "00" + " : " + "00";
            document.getElementById("clock_remin1").innerHTML = time1;
        } else if (((localStorage.getItem('setchas1') - hours1) == 0) && ((localStorage.getItem('setminuta1') > minutes1))) {
            time1 = "00" + " : " + (localStorage.getItem('setminuta1') - minutes1 - 1) + " : " + (60 - seconds1);
            document.getElementById("clock_remin1").innerHTML = time1;
        } else if (((localStorage.getItem('setchas1') - hours1) > 1) && ((localStorage.getItem('setminuta1') - minutes1) == 0)) {
            time1 = (localStorage.getItem('setchas1') - hours1) + " : " + "00" + " : " + (60 - seconds1);
            document.getElementById("clock_remin1").innerHTML = time1;
        } else if (((localStorage.getItem('setchas1') - hours1) >= 1) && localStorage.getItem('setminuta1') < minutes1) {
            time1 = ((localStorage.getItem('setchas1') - hours1) - 1) + " : " + (summin1 - minutes1) + " : " + (60 - seconds1);
            document.getElementById("clock_remin1").innerHTML = time1;
        } else if (((localStorage.getItem('setchas1') - hours1) > 0) && localStorage.getItem('setminuta1') > minutes1) {
            time1 = localStorage.getItem('setchas1') - hours1 + " : " + (localStorage.getItem('setminuta1') - minutes1 - 1) + " : " + (60 - seconds1);
            document.getElementById("clock_remin1").innerHTML = time1;
        } else if (((localStorage.getItem('setchas1') - hours1) == 1) && (localStorage.getItem('setminuta1') - minutes1) == 0) {
            time1 = localStorage.getItem('setchas1') - hours1 + " : " + "00" + " : " + (60 - seconds1);
            document.getElementById("clock_remin1").innerHTML = time1;
        } else {
            time1 = "00" + " : " + "00" + " : " + "00";
            document.getElementById("clock_remin1").innerHTML = time1;
        }
    }

    // обработка нажатий на странице доступов
    document.getElementById('kibsvidbut').onclick = function () { // kibana Tech Summary - ID
        if (kibsvid.value == "") {
            console.log('Введите id в поле')
        } else {
            window.open("https://kibana-logs.skyeng.link/app/kibana#/discover/da6a6090-731a-11ea-9172-7db0f10793b8?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-1w,to:now))&_a=(columns:!(userId,event,appSessionId,details.summary.userAgent,details.summary.iceDisconnectedCount,details.summary.mediaStates.video.down.count,details.summary.mediaStates.audio.down.count,details.summary.publishedSuccessfully,details.summary.localStreamReady,details.summary.remoteStreamReady,details.summary.video.muteCount,details.summary.slowLinkCount.publisher.toServer.count,details.summary.slowLinkCount.subscriber.fromServer.count),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'6e2a3760-704b-11ea-9172-7db0f10793b8',key:event,negate:!f,params:(query:tech-summary),type:phrase,value:tech-summary),query:(match:(event:(query:tech-summary,type:phrase))))),index:'6e2a3760-704b-11ea-9172-7db0f10793b8',interval:auto,query:(language:kuery,query:'userId:" + kibsvid.value + "'),sort:!(!('@timestamp',desc)))");
        };
        kibsvid.value = "";
    }

    document.getElementById('kibsvheshbut').onclick = function () { // kibana Tech Summary - хэш
        if (kibsvhesh.value == "") {
            console.log('Введите ХЭШ в поле')
        } else {
            window.open("https://kibana-logs.skyeng.link/app/kibana#/discover/da6a6090-731a-11ea-9172-7db0f10793b8?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-2w,to:now))&_a=(columns:!(userId,event,roomId,appSessionId,detailsJson,details.summary.mediaStates.video.down.count,details.summary.publishedSuccessfully,details.summary.mediaStates.audio.down.count,details.summary.iceDisconnectedCount,details.summary.localStreamReady,details.summary.remoteStreamReady),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'6e2a3760-704b-11ea-9172-7db0f10793b8',key:event,negate:!f,params:(query:tech-summary),type:phrase,value:tech-summary),query:(match:(event:(query:tech-summary,type:phrase))))),index:'6e2a3760-704b-11ea-9172-7db0f10793b8',interval:auto,query:(language:kuery,query:'appSessionId " + kibsvhesh.value + "'),sort:!(!('@timestamp',desc)))");
        };
        kibsvhesh.value = "";
    }

    document.getElementById('kibservheshbut').onclick = function () { // kibana найти по хешу комнаты сервер
        if (kibservhesh.value == "") {
            console.log('Введите ХЭШ в поле')
        } else {
            window.open("https://kibana-logs.skyeng.link/app/kibana#/discover/2d464cf0-af5e-11ea-b33d-d1adb43c9089?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-1w,to:now))&_a=(columns:!(appSessionId,userId,event),filters:!(),index:'6e2a3760-704b-11ea-9172-7db0f10793b8',interval:auto,query:(language:kuery,query:'webRTCStateUp%20and%20appSessionId%20" + kibservhesh.value + "'),sort:!(!('@timestamp',desc)))");
        };
        kibservhesh.value = "";
    }

    document.getElementById('kibslowbut').onclick = function () { // kibana Слоулинки, дисконнекты, отвалы
        if (kibslow.value == "") {
            console.log('Введите ХЭШ в поле')
        } else {
            window.open("https://kibana-logs.skyeng.link/app/kibana#/discover/da6a6090-731a-11ea-9172-7db0f10793b8?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-30d,to:now))&_a=(columns:!(userId,appSessionId,details.summary.slowLinkCount.publisher.toServer.count,details.summary.slowLinkCount.publisher.toServer.lostSum,details.summary.slowLinkCount.subscriber.fromServer.lostSum,details.summary.slowLinkCount.subscriber.fromServer.count,details.summary.iceDisconnectedCount,details.summary.mediaStates.audio.down.count,details.summary.mediaStates.video.down.count),filters:!(),index:'6e2a3760-704b-11ea-9172-7db0f10793b8',interval:auto,query:(language:kuery,query:'appSessionId: " + kibslow.value + " and (details.summary.slowLinkCount.subscriber.fromServer.count > 0 or details.summary.slowLinkCount.publisher.toServer.count > 0  or details.summary.slowLinkCount.publisher.toServer.lostSum > 0 or details.summary.slowLinkCount.subscriber.fromServer.lostSum > 0 or details.summary.iceDisconnectedCount > 0 or details.summary.mediaStates.audio.down.count > 0 or details.summary.mediaStates.video.down.count > 0)'),sort:!(!('@timestamp',asc)))");
        };
        kibslow.value = "";
    }

    document.getElementById('kibheshvidbut').onclick = function () { // kibana видео-аудио не передавалось
        if (kibheshvid.value == "") {
            console.log('Введите ХЭШ в поле')
        } else {
            window.open("https://kibana-logs.skyeng.link/app/kibana#/discover/243e0230-a0c0-11ea-b33d-d1adb43c9089?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-30d,to:now))&_a=(columns:!(userId,appSessionId,event,details.source,description,details.pluginEvent.type,details.pluginEvent.name,contextId,janusClientId,details.pluginEvent.message),filters:!(),index:'6e2a3760-704b-11ea-9172-7db0f10793b8',interval:auto,query:(language:kuery,query:'appSessionId: " + kibheshvid.value + " and (description : \"mediaState video down\" or description : \"mediaState audio down\")\'),sort:!(!(\'@timestamp\',asc)))");
        };
        kibheshvid.value = "";
    }

    document.getElementById('kibstiheshbut').onclick = function () { // kibana Стрим локально и до платформы
        if (kibstihesh.value == "") {
            console.log('Введите ХЭШ в поле')
        } else {
            window.open("https://kibana-logs.skyeng.link/app/kibana#/discover/da6a6090-731a-11ea-9172-7db0f10793b8?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-30d,to:now))&_a=(columns:!(userId,appSessionId,details.summary.localStreamReady,details.summary.publishedSuccessfully),filters:!(),index:'6e2a3760-704b-11ea-9172-7db0f10793b8',interval:auto,query:(language:kuery,query:'appSessionId: " + kibstihesh.value + " and (details.summary.publishedSuccessfully : false or  details.summary.localStreamReady: false)'),sort:!(!('@timestamp',asc)))");
        };
        kibstihesh.value = "";
    }

    // действия конопок редаш в окне доступов
    document.getElementById('mobappidbut').onclick = function () { // Редаш логи действий мобилки
        if (mobappid.value == "") {
            console.log('Введите id в поле')
        } else {
            window.open("https://redash.skyeng.ru/queries/13000?p_end_at=d_now&p_id=" + mobappid.value + "&p_start_at=d_yesterday");
        };
        mobappid.value = "";
    }

    document.getElementById('rpayidbut').onclick = function () { // Редаш логи платежей
        if (rpayid.value == "") {
            console.log('Введите id в поле')
        } else {
            window.open("https://redash.skyeng.ru/queries/22630?p_ID%20%D0%A1%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82%D0%B0=" + rpayid.value);
        };
        rpayid.value = "";
    }

    document.getElementById('GetFeedbackStatus').onclick = function () { // Редаш логи платежей
        if (FeedbackStatus.value == "") {
            console.log('Введите id в поле')
        } else {
            window.open("https://redash.skyeng.ru/queries/27681?p_Student_id=" + FeedbackStatus.value);
        };
        FeedbackStatus.value = "";
    }

    document.getElementById('GetTeacherReport').onclick = function () { // Редаш логи платежей
        if (TeacherReport.value == "") {
            console.log('Введите id в поле')
        } else {
            window.open("https://redash.skyeng.ru/queries/27679?p_Id=" + TeacherReport.value + "&p_Student%2FTeacher=student_id");
        };
        TeacherReport.value = "";
    }

    document.getElementById('GetUserActions').onclick = function () { // Редаш логи платежей
        if (UserActions.value == "") {
            console.log('Введите id в поле')
        } else {
            window.open("https://redash.skyeng.ru/queries/30681?p_end_at=d_now&p_id=" + UserActions.value + "&p_start_at=d_yesterday");
        };
        UserActions.value = "";
    }

    document.getElementById('chid').onclick = () => { // копирует в буфер айди чата
        copyToClipboard1('https://hdi.skyeng.ru/autofaq/conversation/-11/' + document.getElementById('placechatid').innerText)
    }

    document.getElementById('usidchat').onclick = () => { //копирует в буфер айди пользователя
        copyToClipboard1(document.getElementById('placeusid').innerText)
    }

    document.getElementById('grafanalnk').addEventListener('click', function () {
        window.open("https://grafana.skyeng.link/d/NZkMHsVMk/video-servers-health-check?orgId=1&refresh=1m")    // открываем Grafana
    })

    document.getElementById('kpiteachersdashboard').addEventListener('click', function () {
        window.open("https://tableau.skyeng.ru/#/views/-_16291119357240/sheet18?:iid=1")    // копируем открываем дашборд КПИ тичерсов
    })

    document.getElementById('timetable').addEventListener('click', function () {
        window.open("https://timetable.skyeng.ru/")    // копируем в буфер ссылку на Timetable
    })

    document.getElementById('faqext').addEventListener('click', function () {
        window.open("https://confluence.skyeng.tech/pages/viewpage.action?pageId=140564971")    // открываем инструкцию по расширению
    })

    document.getElementById('curVeriOS').addEventListener('click', function () {
        window.open("https://apps.apple.com/ru/app/skyeng-%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D1%8F%D0%B7%D1%8B%D0%BA-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD/id1065290732")    // открываем инструкцию по расширению
    })

    document.getElementById('curVerAndroid').addEventListener('click', function () {
        window.open("https://play.google.com/store/apps/details?id=skyeng.words.prod")    // открываем инструкцию по расширению
    })

    document.getElementById('talksadm').addEventListener('click', function () {
        window.open("https://vimbox.skyeng.ru/talks/admin/statistics")    // открываем ссылку в новой вкладке на  Talks админку
    })

    document.getElementById('billingadm').addEventListener('click', function () {
        window.open("https://billing-api.skyeng.ru/operations")    // открываем ссылку в новой вкладке на  Начислятор
    })

    document.getElementById('compens').addEventListener('click', function () {
        window.open("https://billing-marketing.skyeng.ru/accrual-operations/create")    // открываем ссылку в новой вкладке на  Компенсации
    })

    document.getElementById('useradm').addEventListener('click', function () {
        window.open("https://id.skyeng.ru/admin/users")    // открываем ссылку в новой вкладке на  Пользовательская админка
    })

    document.getElementById('GotoCRM').onclick = function () {
        window.open("https://crm2.skyeng.ru/persons/" + document.getElementById('idstudent').value)    // открываем ссылку в новой вкладке на  Пользовательская админка
    }

    document.getElementById('suggestions').addEventListener('click', function () {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSdfxamf3lm7vsWj4VKbh6DUu4d2Q39vnQ1RfFglQ4Zy34R6_g/viewform?fbzx=4442277476040311569")    // открываем ссылку в новой вкладке на  Предложения/пожелания
    })
    document.getElementById('transactions').addEventListener('click', function () {
        window.open("https://accounting.skyeng.ru/userpayment/search/transaction")    // открываем ссылку в новой вкладке на  Поиск транзакций
    })
    document.getElementById('CMS').addEventListener('click', function () {
        window.open("https://cms-vimbox.skyeng.ru/vim")    // открываем ссылку в новой вкладке на CMS
    })
    document.getElementById('subscribebilling').addEventListener('click', function () {
        window.open("https://billing-api.skyeng.ru/subscriptions")    // открываем ссылку в новой вкладке на Необоснованные оценки ТП АФ
    })
    document.getElementById('apelation').addEventListener('click', function () {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSdgsb6pte1H1dz15Eb5NjDe0gj3kEnh0hTe6Cgy8d81mT7NUA/viewform")    // открываем ссылку в новой вкладке на Форма для апелляций чатов ТП АФ
    })
    document.getElementById('groupfeatures').addEventListener('click', function () {
        window.open("https://vimbox.skyeng.ru/circles/group/editor ")    // открываем редактор фич группя для активации видеосвязи на ГУ
    })

    document.getElementById('confbugs').addEventListener('click', function () {
        window.open("https://confluence.skyeng.tech/pages/viewpage.action?pageId=96042583")    // открываем ссылку список багов в confluence
    })

    document.getElementById('restartlesson').addEventListener('click', function () {
        copyToClipboard("setStatus('classwork')")   // копируем ссылку в буфер для перезапуска урока математики
        document.getElementById('restartlesson').innerHTML = "Copied!";
        setTimeout(function () { document.getElementById('restartlesson').innerHTML = "Redo MAT💾" }, 2000);
    })

    document.getElementById('enableNS').addEventListener('click', function () {
        copyToClipboard("https://vimbox.skyeng.ru/start?enableNewStudent")   // копируем ссылку в буфер для перезапуска урока математики
        document.getElementById('enableNS').innerHTML = "Copied!";
        setTimeout(function () { document.getElementById('enableNS').innerHTML = "Enable NS💾" }, 2000);
    })
    document.getElementById('browserstack').addEventListener('click', function () {
        window.open("https://www.browserstack.com/users/sign_in")    // открываем ссылку в новой вкладке на Browserstak
    })
    document.getElementById('trshoothing').addEventListener('click', function () {
        window.open("https://video-trouble-shooter.skyeng.ru/")    // открываем ссылку в новой вкладке на TRM 2.0
    })
    document.getElementById('testroom').addEventListener('click', function () {
        window.open("https://confluence.skyeng.tech/pages/viewpage.action?pageId=82244638")    // открываем ссылку в админку тестовых комнат
    })

    document.getElementById('certificates').addEventListener('click', function () {
        window.open("https://billing-marketing.skyeng.ru/certificate/certSearch")    // открываем ссылку в новой вкладке на Подарочные сертификаты
    })

    document.getElementById('promocodes').addEventListener('click', function () {
        window.open("https://billing-marketing.skyeng.ru/promocode/list")    // открываем ссылку в новой вкладке на Промокоды
    })

    document.getElementById('cmswordssearch').addEventListener('click', function () {
        window.open("https://dictionary.skyeng.ru/cms/word/333")    // открываем ссылку для просмотра CMSки слова мининг переводы и тп
    })

    document.getElementById('TCQnew').addEventListener('click', function () {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSfZbw1GkZzerHWQGGbYslV6AsGTGxEKhNZFC1LV-TySHca9Fw/viewform")    // открываем ссылку в новой вкладке на форму для внесения вопросов от П TC
    })

    document.getElementById('TCQtable').addEventListener('click', function () {
        window.open("https://docs.google.com/spreadsheets/d/1PVE_GnLoWESTzzMxb2Klwntesqxv1l3Ir8kaLezfiEM/edit#gid=0")    // открываем ссылку в новой вкладке на таблицу вопросов-вопросов от П TC
    })

    document.getElementById('userfeatures').addEventListener('click', function () {
        window.open("https://vimbox.skyeng.ru/circles/editor")    // открываем ссылку в новой вкладке на проверку фичей пользователя
    })
    document.getElementById('benchmark').onclick = function () {                  //поиск по имени процессора на сайте cpubenchmark
        let lnkgr = 'https://www.cpubenchmark.net/cpu_lookup.php?cpu=';
        if (cpuname.value == "")
            console.log('Введите CPU в поле')
        else {
            window.open(lnkgr + cpuname.value);
        };
        cpuname.value = "";
    }

    document.getElementById('getmvureport').onclick = function () {                  //поиск по имени процессора на сайте cpubenchmark
        if (reportmvu.value == "")
            console.log('Введите ID в поле')
        else {
            copyToClipboard('https://marketing-core.skyeng.ru/report/html/report?student_id=' + reportmvu.value);
        };
        document.getElementById('getmvureport').innerHTML = "✅";
        setTimeout(function () { document.getElementById('getmvureport').innerHTML = "💾" }, 2000);
        reportmvu.value = "";
    }

    var abortTimeOut = ''								// перменная для отмены будильника
    var abortTimeOut1 = ''								// перменная для отмены будильника
    if (localStorage.getItem('chronostamp') == null) {
        document.getElementById('reminderstatus').textContent = "🔕";
    }

    document.getElementById('setreminder').onclick = function () {  // выставляем будильник
        document.getElementById('reminderstatus').textContent = "🔔";
        localStorage.setItem('setchas', setchas.value);
        if (setminuta.value == "00") {
            setminuta.value = 0;
        }
        localStorage.setItem('setminuta', setminuta.value);
        var timearr = new Date()
        var chronostamp = (((localStorage.getItem('setchas') - timearr.getHours()) * 60 * 60) + ((localStorage.getItem('setminuta') - timearr.getMinutes()) * 60) + (0 - timearr.getSeconds())) * 1000;
        localStorage.setItem('chronostamp', chronostamp);
        //		setchas.value = "";
        //		setminuta.value = "";
        alert("Будильник установлен на " + setchas.value + ":" + setminuta.value + ":" + "00");
        abortTimeOut = setTimeout(setRemindAf, localStorage.getItem('chronostamp'));
    }

    document.getElementById('setreminder1').onclick = function () {  // выставляем будильник
        document.getElementById('reminderstatus').textContent = "🔔";
        localStorage.setItem('setchas1', setchas1.value);
        if (setminuta1.value == "00") {
            setminuta1.value = 0;
        }
        localStorage.setItem('setminuta1', setminuta1.value);
        var timearr1 = new Date()
        var chronostamp1 = (((localStorage.getItem('setchas1') - timearr1.getHours()) * 60 * 60) + ((localStorage.getItem('setminuta1') - timearr1.getMinutes()) * 60) + (0 - timearr1.getSeconds())) * 1000;
        localStorage.setItem('chronostamp1', chronostamp1);
        //		setchas.value = "";
        //		setminuta.value = "";
        alert("Будильник установлен на " + setchas1.value + ":" + setminuta1.value + ":" + "00");
        abortTimeOut1 = setTimeout(setRemindAf1, localStorage.getItem('chronostamp1'));
    }

    function refreshTimerReminder() { // обновляет оставшееся время будильника №1
        if (localStorage.getItem('chronostamp') !== null && localStorage.getItem('chronostamp') > 0) {
            document.getElementById('reminderstatus').textContent = "🔔";
            setchas.value = localStorage.getItem('setchas');
            setminuta.value = localStorage.getItem('setminuta');
            var timearr = new Date()
            var chronostamp2 = (((localStorage.getItem('setchas') - timearr.getHours()) * 60 * 60) + ((localStorage.getItem('setminuta') - timearr.getMinutes()) * 60) + (0 - timearr.getSeconds())) * 1000;
            localStorage.setItem('chronostamp2', chronostamp2);
            abortTimeOut = setTimeout(setRemindAf, localStorage.getItem('chronostamp2'));
        } else if (localStorage.getItem('chronostamp') == null && localStorage.getItem('chronostamp') == null) {
            clearTimeout(abortTimeOut);
            document.getElementById('reminderstatus').textContent = "🔕";
        } else if (localStorage.getItem('chronostamp1') !== null) {
            document.getElementById('reminderstatus').textContent = "🔔";
        }
    }

    function refreshTimerReminder1() { // обновляет оставшееся время будильника №2
        if (localStorage.getItem('chronostamp1') !== null && localStorage.getItem('chronostamp1') > 0) {
            document.getElementById('reminderstatus').textContent = "🔔";
            setchas1.value = localStorage.getItem('setchas1');
            setminuta1.value = localStorage.getItem('setminuta1');
            var timearr1 = new Date()
            var chronostamp22 = (((localStorage.getItem('setchas1') - timearr1.getHours()) * 60 * 60) + ((localStorage.getItem('setminuta1') - timearr1.getMinutes()) * 60) + (0 - timearr1.getSeconds())) * 1000;
            localStorage.setItem('chronostamp22', chronostamp22);
            abortTimeOut1 = setTimeout(setRemindAf1, localStorage.getItem('chronostamp22'));
        } else if (localStorage.getItem('chronostamp') == null && localStorage.getItem('chronostamp') == null) {
            clearTimeout(abortTimeOut1);
            document.getElementById('reminderstatus').textContent = "🔕";
        } else if (localStorage.getItem('chronostamp') !== null) {
            document.getElementById('reminderstatus').textContent = "🔔";
        }
    }

    document.getElementById('clock_remin').ondblclick = function () {		// Удаление будильника
        if (localStorage.getItem('chronostamp') !== null && localStorage.getItem('chronostamp') > 0) {
            clearTimeout(abortTimeOut)
            localStorage.removeItem('chronostamp')
            localStorage.removeItem('chronostamp2')
            setchas.value = ""
            setminuta.value = ""
            alert("Будильник удален")
            document.getElementById('reminderstatus').textContent = "🔕";
        }
    }

    document.getElementById('clock_remin1').ondblclick = function () {		// Удаление будильника
        if (localStorage.getItem('chronostamp1') !== null && localStorage.getItem('chronostamp1') > 0) {
            clearTimeout(abortTimeOut1)
            localStorage.removeItem('chronostamp1')
            localStorage.removeItem('chronostamp22')
            setchas1.value = ""
            setminuta1.value = ""
            alert("Будильник удален")
            // document.getElementById('reminderstatus').textContent = "🔕";  //тут еще подумать логику если первый будильник тоже не выставлен и удален второй тогда да изменять иконку
        }
    }

    refreshTimerReminder(); //обновляет оставшееся время до будильника №1
    refreshTimerReminder1(); //обновляет оставшееся время до будильника №2

    function setRemindAf() { //функция  при наступлении времени перевода в статус занят Будильник №1
        fetch("https://skyeng.autofaq.ai/api/reason8/operator/status", {
            "headers": {
                "accept": "*/*",
                "cache-control": "max-age=0",
                "content-type": "application/json",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://skyeng.autofaq.ai/tickets/archive",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"command\":\"DO_SET_OPERATOR_STATUS\",\"status\":\"Busy\",\"source\":\"Operator\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        alert("Время ставить занят! :D");
        localStorage.removeItem('chronostamp');

        if (localStorage.getItem('chronostamp') === null && localStorage.getItem('chronostamp1') === null)
            document.getElementById('reminderstatus').textContent = "🔕";
        else if (localStorage.getItem('chronostamp') !== null && localStorage.getItem('chronostamp1') !== null)
            document.getElementById('reminderstatus').textContent = "🔔";
        else if (localStorage.getItem('chronostamp') === null && localStorage.getItem('chronostamp1') !== null)
            document.getElementById('reminderstatus').textContent = "🔔";
        else if (localStorage.getItem('chronostamp') !== null && localStorage.getItem('chronostamp1') === null)
            document.getElementById('reminderstatus').textContent = "🔔";

        setchas.value = "";
        setminuta.value = "";
    }

    function setRemindAf1() { //функция  при наступлении времени перевода в статус занят Будильник №2
        fetch("https://skyeng.autofaq.ai/api/reason8/operator/status", {
            "headers": {
                "accept": "*/*",
                "cache-control": "max-age=0",
                "content-type": "application/json",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://skyeng.autofaq.ai/tickets/archive",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"command\":\"DO_SET_OPERATOR_STATUS\",\"status\":\"Busy\",\"source\":\"Operator\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        alert("Время ставить занят! :D");
        localStorage.removeItem('chronostamp1');

        if (localStorage.getItem('chronostamp') === null && localStorage.getItem('chronostamp1') === null)
            document.getElementById('reminderstatus').textContent = "🔕";
        else if (localStorage.getItem('chronostamp') !== null && localStorage.getItem('chronostamp1') !== null)
            document.getElementById('reminderstatus').textContent = "🔔";
        else if (localStorage.getItem('chronostamp') === null && localStorage.getItem('chronostamp1') !== null)
            document.getElementById('reminderstatus').textContent = "🔔";
        else if (localStorage.getItem('chronostamp') !== null && localStorage.getItem('chronostamp1') === null)
            document.getElementById('reminderstatus').textContent = "🔔";

        setchas1.value = "";
        setminuta1.value = "";
    }

    document.getElementById('cmsid').onclick = function () {                     // переход на степID в CMSке
        let lnkstep = 'https://content.vimbox.skyeng.ru/cms/stepStore/update/stepId/';
        if (cmsstepid.value == "")
            console.log('Введите STEPUUID в поле')
        else {
            window.open(lnkstep + cmsstepid.value);
        };
        cmsstepid.value = "";
    }

    document.getElementById('checkbalance').onclick = function () {
        window.open("https://billing-api.skyeng.ru/operations/user/" + document.getElementById('idstudent').value + "/info")
    }

    document.getElementById('getkglinfokid').onclick = function () {
        window.open("https://grouplessons-api.skyeng.ru/admin/student/view/" + document.getElementById('idstudent').value)
    }

    document.getElementById('partialpaymentinfo').onclick = function () {
        window.open("https://accounting.skyeng.ru/credit/list?studentId=" + document.getElementById('idstudent').value)
    }

    document.getElementById('editadmbtn').onclick = function () {
        let stuid = document.getElementById('idstudent').value;
        stuid = stuid.trim();
        window.open("https://id.skyeng.ru/admin/users/" + stuid + "/update-contacts")
    }

    document.getElementById('getonetimepass').onclick = function () {
        if (document.getElementById('idstudent').value == "")
            console.log('Введите id в поле')
        else {
            document.getElementById('getonetimepass').innerHTML = "✅";
            setTimeout(function () { document.getElementById('getonetimepass').innerHTML = "📱" }, 2000);

            document.getElementById('responseTextarea1').value = `{
			"headers": {
				"content-type": "application/x-www-form-urlencoded",
					"sec-fetch-dest": "document",
					"sec-fetch-mode": "navigate",
					"sec-fetch-site": "same-origin",
					"sec-fetch-user": "?1",
					"upgrade-insecure-requests": "1"
			},
			"body": "user_id_or_identity_for_one_time_password_form%5BuserIdOrIdentity%5D= + ${document.getElementById('idstudent').value} + &user_id_or_identity_for_one_time_password_form%5Bgenerate%5D=&user_id_or_identity_for_one_time_password_form%5B_token%5D=null",
				"method": "POST",
				"mode": "cors",
				"credentials": "include"
			}`
            document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/auth/one-time-password"
            document.getElementById('responseTextarea3').value = 'getmobpwdnew'
            document.getElementById('sendResponse').click()

            function getPassInfo1() {
                document.getElementById('responseTextarea1').value = '{}'
                document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/auth/one-time-password"
                document.getElementById('responseTextarea3').value = ''

                var resprez11 = document.getElementById('responseTextarea1').getAttribute('getmobpwdnew')
                document.getElementById('responseTextarea1').removeAttribute('getmobpwdnew');
                var convertres11 = resprez11.match(/div class="alert alert-success" role="alert".*?([0-9]{5}).*/);
                onetimepassout.value = convertres11[1];
            }
            setTimeout(getPassInfo1, 1000);
        };
        setTimeout(function () { document.getElementById('onetimepassout').value = "" }, 15000);
    }

    let commonidentity;
    let emailidentity;
    let phoneidentity;

    async function checkemailandphoneidentity() { // проверяет подключены почта и номер телефона как айдентити
        document.getElementById('responseTextarea1').value = `{
			  "headers": {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
				"cache-control": "max-age=0",
				"sec-fetch-dest": "document",
				"sec-fetch-mode": "navigate",
				"sec-fetch-site": "none",
				"sec-fetch-user": "?1",
				"upgrade-insecure-requests": "1"
			  },
			  "referrerPolicy": "strict-origin-when-cross-origin",
			  "body": null,
			  "method": "GET",
			  "mode": "cors",
			  "credentials": "include"
	 }`
        document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/users/" + document.getElementById('idstudent').value + "/update-contacts"
        document.getElementById('responseTextarea3').value = 'responseupdate'
        document.getElementById('sendResponse').click()

        setTimeout(async function () {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/users/" + document.getElementById('idstudent').value + "/update-contacts"
            document.getElementById('responseTextarea3').value = 'responseupdate'
            document.getElementById('sendResponse').click()

            commonidentity = document.getElementById('responseTextarea1').getAttribute('responseupdate');
            commonidentity = await commonidentity;

            if (commonidentity.match(/"identityEmail" disabled data-value=""/) != null && commonidentity.match(/"identityPhone" disabled data-value=""/) != null) {
                emailidentity = "📧✖";
                phoneidentity = "☎✖";
            } else if (commonidentity.match(/"identityPhone" disabled data-value=""/) != null && commonidentity.match(/"identityEmail" disabled data-value=""/) == null) {
                emailidentity = "📧✔";
                phoneidentity = "☎✖";
            } else if (commonidentity.match(/"identityPhone" disabled data-value=""/) == null && commonidentity.match(/"identityEmail" disabled data-value=""/) != null) {
                emailidentity = "📧✖";
                phoneidentity = "☎✔";
            } else if (commonidentity.match(/"identityPhone" disabled data-value=""/) == null && commonidentity.match(/"identityEmail" disabled data-value=""/) == null) {
                emailidentity = "📧✔";
                phoneidentity = "☎✔";
            }

            document.getElementById('responseTextarea1').removeAttribute('responseupdate')

        }, 550)
    }

    let unhidephone;

    async function getunhidephone() { // открывает номер телефона

        document.getElementById('responseTextarea1').value = `{
		  "headers": {
			"accept": "application/json, text/plain, */*",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-site"
		  },
		  "referrer": "https://crm2.skyeng.ru/",
		  "referrerPolicy": "strict-origin-when-cross-origin",
		  "body": null,
		  "method": "GET",
		  "mode": "cors",
		  "credentials": "include"
	 }`
        document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + document.getElementById('idstudent').value + "/personal-data/?pdType=phone&source=persons.profile"
        document.getElementById('responseTextarea3').value = 'phoneishere'
        document.getElementById('sendResponse').click()

        setTimeout(async function () {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + document.getElementById('idstudent').value + "/personal-data/?pdType=phone&source=persons.profile"
            document.getElementById('responseTextarea3').value = 'phoneishere'
            document.getElementById('sendResponse').click()

            unhidephone = document.getElementById('responseTextarea1').getAttribute('phoneishere');
            unhidephone = await unhidephone;
            unhidephone = JSON.parse(unhidephone);
            unhidephone = unhidephone.data.value;
            document.getElementById('responseTextarea1').removeAttribute('phoneishere')

        }, 600)
    }

    let unhidenemail;
    async function getunhideemail() { //открывает почту пользователя
        document.getElementById('responseTextarea1').value = `{
		  "headers": {
			"accept": "application/json, text/plain, */*",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-site"
		  },
		  "referrer": "https://crm2.skyeng.ru/",
		  "referrerPolicy": "strict-origin-when-cross-origin",
		  "body": null,
		  "method": "GET",
		  "mode": "cors",
		  "credentials": "include"
	 }`
        document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + document.getElementById('idstudent').value + "/personal-data/?pdType=email&source=persons.profile"
        document.getElementById('responseTextarea3').value = 'emailishere'
        document.getElementById('sendResponse').click()

        setTimeout(async function () {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + document.getElementById('idstudent').value + "/personal-data/?pdType=email&source=persons.profile"
            document.getElementById('responseTextarea3').value = 'emailishere'
            document.getElementById('sendResponse').click()

            unhidenemail = document.getElementById('responseTextarea1').getAttribute('emailishere');
            unhidenemail = await unhidenemail;
            unhidenemail = JSON.parse(unhidenemail);
            unhidenemail = unhidenemail.data.value;
            document.getElementById('responseTextarea1').removeAttribute('emailishere')

        }, 600)
    }

    let servicearray = "";
    async function getservicearr() { // получает массив услуг с СРМки

        document.getElementById('responseTextarea1').value = `{
            "headers": {
                "accept": "application/json, text/plain, */*",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
              },
              "referrer": "https://crm2.skyeng.ru/",
              "referrerPolicy": "strict-origin-when-cross-origin",
              "body": null,
              "method": "GET",
              "mode": "cors",
              "credentials": "include"
       }`
        document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/products/configurations/"
        document.getElementById('responseTextarea3').value = 'arrayofservices'
        document.getElementById('sendResponse').click()

        setTimeout(async function () {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/products/configurations/"
            document.getElementById('responseTextarea3').value = 'arrayofservices'
            document.getElementById('sendResponse').click()

            servicearray = document.getElementById('responseTextarea1').getAttribute('arrayofservices');
            servicearray = await servicearray;
            servicearray = JSON.parse(servicearray);
            document.getElementById('responseTextarea1').removeAttribute('arrayofservices')

        }, 1000)
    }

    document.getElementById('getlessonpast').onclick = function () { // показывает прошедшие уроки
        document.getElementById('timetabledata').innerHTML = "";
        let stid = document.getElementById('idstudent').value;
        stid = stid.trim();
        let pastlessondata = "";
        let pastlessoninfo = "";
        document.getElementById('responseTextarea1').value = `{
            "headers": {
                "accept": "application/json, text/plain, */*",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
              },
              "referrer": "https://crm2.skyeng.ru/",
              "referrerPolicy": "strict-origin-when-cross-origin",
              "body": null,
              "method": "GET",
              "mode": "cors",
              "credentials": "include"
       }`
        document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/students/" + stid + "/timetable/lessons-history/?page=0";
        document.getElementById('responseTextarea3').value = 'pastlessoninfodata'
        document.getElementById('sendResponse').click()

        setTimeout(function () {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/students/" + stid + "/timetable/lessons-history/?page=0";
            document.getElementById('responseTextarea3').value = 'pastlessoninfodata'
            document.getElementById('sendResponse').click()

            pastlessoninfo = document.getElementById('responseTextarea1').getAttribute('pastlessoninfodata');
            pastlessoninfo = JSON.parse(pastlessoninfo);
            document.getElementById('responseTextarea1').removeAttribute('pastlessoninfodata')
            if (pastlessoninfo.data == "") {
                document.getElementById('timetabledata').innerHTML = "Еще не было уроков";
            } else {
                for (let i = 0; i < pastlessoninfo.data.length; i++) {
                    let d = new Date(pastlessoninfo.data[i].startedAt)
                    let minutka;
                    let denek;
                    let mesacok;
                    let chasok;
                    if (d.getHours() < 10) {
                        chasok = "0" + (d.getUTCHours() + 3);
                    } else {
                        chasok = (d.getUTCHours() + 3);
                    }
                    if (d.getMinutes() < 10) {
                        minutka = "0" + d.getMinutes();
                    } else {
                        minutka = d.getMinutes();
                    }
                    if (d.getDate() < 10) {
                        denek = "0" + d.getDate();
                    } else {
                        denek = d.getDate();
                    }
                    if (d.getMonth() + 1 < 10) {
                        mesacok = "0" + (d.getMonth() + 1);
                    } else {
                        mesacok = d.getMonth() + 1;
                    }
                    if (pastlessoninfo.data[i].status == "missed_by_student") {
                        pastlessoninfo.data[i].status = "Пропущен учеником";
                    } else if (pastlessoninfo.data[i].status == "canceled_by_student") {
                        pastlessoninfo.data[i].status = "Отменен учеником";
                    } else if (pastlessoninfo.data[i].status == "success") {
                        pastlessoninfo.data[i].status = "Прошел";
                    } else if (pastlessoninfo.data[i].status == "moved_by_student") {
                        pastlessoninfo.data[i].status = "Перенесен учеником";
                    } else if (pastlessoninfo.data[i].status == "canceled_by_teacher") {
                        pastlessoninfo.data[i].status = "Отменен учителем";
                    } else if (pastlessoninfo.data[i].status == "student_refused_to_study") {
                        pastlessoninfo.data[i].status = "Отказался от обучения"
                    } else if (pastlessoninfo.data[i].status == "interrupted") {
                        pastlessoninfo.data[i].status = "Прерван"
                    } else if (pastlessoninfo.data[i].status == "did_not_get_through_student") {
                        pastlessoninfo.data[i].status = "Не смогли связаться с У"
                    } else if (pastlessoninfo.data[i].status == "canceled_not_marked") {
                        pastlessoninfo.data[i].status = "Не отмечен учителем вовремя"
                    }

                    if (pastlessoninfo.data[i].lessonType == "regular") {
                        pastlessoninfo.data[i].lessonType = "Регулярный";
                    } else if (pastlessoninfo.data[i].lessonType == "single") {
                        pastlessoninfo.data[i].lessonType = "Одиночный";
                    } else if (pastlessoninfo.data[i].lessonType == "trial") {
                        pastlessoninfo.data[i].lessonType = "Пробный";
                    }

                    for (let j = 0; j < servicearray.data.length; j++) {
                        if (servicearray.data[j].serviceTypeKey == pastlessoninfo.data[i].educationService.serviceTypeKey)
                            pastlessoninfo.data[i].educationService.serviceTypeKey = servicearray.data[j].title;
                    }

                    if (pastlessoninfo.data[i].educationService.serviceTypeKey == null) {
                        pastlessoninfo.data[i].educationService.serviceTypeKey = "Услуга была в CRM1, см позднее обозначение!"
                    }

                    if (pastlessoninfo.data[i].teacher != null) {
                        pastlessondata += '<span style="color: #00FA9A">&#5129;</span>' + '<span style="color:#FF7F50; font-weight:900;">Дата: </span>' + denek + "-" + mesacok + "-" + d.getFullYear() + " " + chasok + ":" + minutka +
                            '<span style="color:#00FF7F; font-weight:900;"> Статус: </span>' + pastlessoninfo.data[i].status + '<span style="color:#FFD700; font-weight:900;"> Урок: </span>' + pastlessoninfo.data[i].lessonType + '<br>'
                            + '<span style="color:#00BFFF; font-weight:900;">Услуга: </span>' + pastlessoninfo.data[i].educationService.id + " " + pastlessoninfo.data[i].educationService.serviceTypeKey + '<br>'
                            + '<span style="color:#32CD32; font-weight:900;">Преподаватель: </span>' + " " + pastlessoninfo.data[i].teacher.general.id + " " + pastlessoninfo.data[i].teacher.general.name + " " + pastlessoninfo.data[i].teacher.general.surname + '<br>'
                            + '<hr style="width:420px; border: 1px dotted #ff0000;  border-style: none none dotted; color: #fff; background-color: #fff;"></hr>';
                    } else {
                        pastlessondata += '<span style="color: #00FA9A">&#5129;</span>' + '<span style="color:#FF7F50; font-weight:900;">Дата: </span>' + denek + "-" + mesacok + "-" + d.getFullYear() + " " + chasok + ":" + minutka +
                            '<span style="color:#00FF7F; font-weight:900;"> Статус: </span>' + pastlessoninfo.data[i].status + '<span style="color:#FFD700; font-weight:900;"> Урок: </span>' + pastlessoninfo.data[i].lessonType + '<br>'
                            + '<span style="color:#00BFFF; font-weight:900;">Услуга: </span>' + pastlessoninfo.data[i].educationService.id + " " + pastlessoninfo.data[i].educationService.serviceTypeKey + '<br>'
                            + '<hr style="width:420px; border: 1px dotted #ff0000;  border-style: none none dotted; color: #fff; background-color: #fff;"></hr>';
                    }
                }

                document.getElementById('timetabledata').innerHTML = pastlessondata;
                pastlessondata = "";
            }
        }, 1000)
    }

    document.getElementById('getlessonfuture').onclick = function () { // показывает предстоящие уроки

        document.getElementById('timetabledata').innerHTML = "";
        let stid = document.getElementById('idstudent').value;
        stid = stid.trim();
        let futurelessondata = "";
        let futurelessoninfo = "";
        document.getElementById('responseTextarea1').value = `{
            "headers": {
                "accept": "application/json, text/plain, */*",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
              },
              "referrer": "https://crm2.skyeng.ru/",
              "referrerPolicy": "strict-origin-when-cross-origin",
              "body": null,
              "method": "GET",
              "mode": "cors",
              "credentials": "include"
       }`
        document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/students/" + stid + "/timetable/future-lessons/"
        document.getElementById('responseTextarea3').value = 'futurelessoninfodata'
        document.getElementById('sendResponse').click()

        setTimeout(function () {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/students/" + stid + "/timetable/future-lessons/"
            document.getElementById('responseTextarea3').value = 'futurelessoninfodata'
            document.getElementById('sendResponse').click()

            futurelessoninfo = document.getElementById('responseTextarea1').getAttribute('futurelessoninfodata');
            futurelessoninfo = JSON.parse(futurelessoninfo);
            document.getElementById('responseTextarea1').removeAttribute('futurelessoninfodata')
            if (futurelessoninfo.data == "") {
                document.getElementById('timetabledata').innerHTML = "Уроки не запланированы";
            } else {
                for (let i = 0; i < futurelessoninfo.data.length; i++) {
                    let d = new Date(futurelessoninfo.data[i].startedAt)
                    let minutka;
                    let denek;
                    let mesacok;
                    let chasok;
                    if (d.getHours() < 10) {
                        chasok = "0" + (d.getUTCHours() + 3);
                    } else {
                        chasok = (d.getUTCHours() + 3);
                    }
                    if (d.getMinutes() < 10) {
                        minutka = "0" + d.getMinutes();
                    } else {
                        minutka = d.getMinutes();
                    }
                    if (d.getDate() < 10) {
                        denek = "0" + d.getDate();
                    } else {
                        denek = d.getDate();
                    }
                    if (d.getMonth() + 1 < 10) {
                        mesacok = "0" + (d.getMonth() + 1);
                    } else {
                        mesacok = d.getMonth() + 1;
                    }

                    if (futurelessoninfo.data[i].lessonType == "regular") {
                        futurelessoninfo.data[i].lessonType = "Регулярный";
                    } else if (futurelessoninfo.data[i].lessonType == "single") {
                        futurelessoninfo.data[i].lessonType = "Одиночный";
                    } else if (futurelessoninfo.data[i].lessonType == "trial") {
                        futurelessoninfo.data[i].lessonType = "Пробный";
                    }

                    for (let j = 0; j < servicearray.data.length; j++) {
                        if (servicearray.data[j].serviceTypeKey == futurelessoninfo.data[i].educationService.serviceTypeKey)
                            futurelessoninfo.data[i].educationService.serviceTypeKey = servicearray.data[j].title;
                    }

                    if (futurelessoninfo.data[i].teacher != null) {
                        futurelessondata += '<span style="color: #00FA9A">&#5129;</span>' + '<span style="color:#FF7F50; font-weight:900;">Дата: </span>' + denek + "-" + mesacok + "-" + d.getFullYear() + " " + chasok + ":" + minutka
                            + '<span style="color:#FFD700; font-weight:900;"> Урок: </span>' + futurelessoninfo.data[i].lessonType + '<br>'
                            + '<span style="color:#00BFFF; font-weight:900;">Услуга: </span>' + futurelessoninfo.data[i].educationService.id + " " + futurelessoninfo.data[i].educationService.serviceTypeKey + '<br>'
                            + '<span style="color:#32CD32; font-weight:900;">Преподаватель: </span>' + " " + futurelessoninfo.data[i].teacher.general.id + " " + futurelessoninfo.data[i].teacher.general.name + " " + futurelessoninfo.data[i].teacher.general.surname + '<br>'
                            + '<hr style="width:420px; border: 1px dotted #ff0000;  border-style: none none dotted; color: #fff; background-color: #fff;"></hr>';
                    } else {
                        futurelessondata += '<span style="color: #00FA9A">&#5129;</span>' + '<span style="color:#FF7F50; font-weight:900;">Дата: </span>' + denek + "-" + mesacok + "-" + d.getFullYear() + " " + chasok + ":" + minutka
                            + '<span style="color:#FFD700; font-weight:900;"> Урок: </span>' + futurelessoninfo.data[i].lessonType + '<br>'
                            + '<span style="color:#00BFFF; font-weight:900;">Услуга: </span>' + futurelessoninfo.data[i].educationService.id + " " + futurelessoninfo.data[i].educationService.serviceTypeKey + '<br>'
                            + '<hr style="width:420px; border: 1px dotted #ff0000;  border-style: none none dotted; color: #fff; background-color: #fff;"></hr>';
                    }

                }
                document.getElementById('timetabledata').innerHTML = futurelessondata;
                futurelessondata = "";
            }
        }, 1000)

    }

    document.getElementById('changelocalelng').onclick = function () { // меняет язык обслуживания выбранного пользователя в вензеле на русский

        document.getElementById('responseTextarea1').value = `{
		   "headers": {
			"content-type": "application/json",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-site"
		  },
		  "referrer": "https://crm2.skyeng.ru/",
		  "referrerPolicy": "strict-origin-when-cross-origin",
		  "body": "{\\"serviceLocale\\":\\"ru\\"}",
		  "method": "PUT",
		  "mode": "cors",
		  "credentials": "include"
	 }`
        document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/general/" + document.getElementById('idstudent').value
        document.getElementById('responseTextarea3').value = ''
        document.getElementById('sendResponse').click()
        document.getElementById('changelocalelng').innerHTML = "✅"
        setTimeout(function () { document.getElementById('changelocalelng').innerHTML = "🌍" }, 2000);
    }


    document.getElementById('setservicelocaleru').onclick = function () { // меняет язык обслуживания выбранного пользователя в вензеле на русский но через кнопку в "L"
        document.getElementById('responseTextarea1').value = `{
		   "headers": {
			"content-type": "application/json",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-site"
		  },
		  "referrer": "https://crm2.skyeng.ru/",
		  "referrerPolicy": "strict-origin-when-cross-origin",
		  "body": "{\\"serviceLocale\\":\\"ru\\"}",
		  "method": "PUT",
		  "mode": "cors",
		  "credentials": "include"
	 }`
        document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/general/" + idforservicelocaleru.value
        document.getElementById('responseTextarea3').value = ''
        document.getElementById('sendResponse').click()
        document.getElementById('setservicelocaleru').innerHTML = "✅"
        idforservicelocaleru.value = "";
        setTimeout(function () { document.getElementById('setservicelocaleru').innerHTML = "🚀" }, 2000);
    }

    document.getElementById('catchathistory').onclick = function () { // открывает в вензеле историю чатов введеного айди пользователя

        if (document.getElementById('AF_ChatHis').style.display == 'none') {
            document.getElementById('butChatHistory').click();
            document.getElementById('chatuserhis').value = document.getElementById('idstudent').value.trim();
            btn_search_history.click()
        } else {
            document.getElementById('chatuserhis').value = document.getElementById('idstudent').value.trim();
            btn_search_history.click()
        }
    }

    document.getElementById('sguid').onclick = function () {                      //переход в инфо-кабинет по ученику из группового урока
        let lnksgu = 'https://grouplessons-api.skyeng.ru/admin/student/view/';
        if (studguid.value == "")
            console.log('Введите id  ученика в поле')
        else {
            window.open(lnksgu + studguid.value);
        };
        studguid.value = "";
    }

    document.getElementById('credits').onclick = function () {                  // проверка рассрочки у ученика она же поэтапная оплата (ПО)
        let lnkscredits = 'https://accounting.skyeng.ru/credit/list?studentId=';
        if (creditstatus.value == "")
            console.log('Введите id  ученика в поле')
        else {
            window.open(lnkscredits + creditstatus.value);
        };
        creditstatus.value = "";
    }

    document.getElementById('showcaseHW').onclick = function () {               // сохранение в буфере айди ученика для просмотра всего списка ДЗ по нему
        let hwstidlnk = 'https://vimbox.skyeng.ru/student/';
        if (HWstudID.value == "")
            console.log('Введите id  ученика в поле')
        else {
            copyToClipboard(hwstidlnk + HWstudID.value + "/homework");
        };
        document.getElementById('showcaseHW').innerHTML = "✅";
        setTimeout(function () { document.getElementById('showcaseHW').innerHTML = "💾" }, 2000);
        HWstudID.value = "";
    }

    document.getElementById('gethash').onclick = function () {                  // добавляем хеш комнаты, и со стороны П в консоле выполняем, чтобы проверить для какого ученика она была создана
        let hashlnk = 'fetch("https://rooms.vimbox.skyeng.ru/rooms/api/v1/workbooks/last?roomHash=';
        if (lookhash.value == "")
            console.log('Введите hash комнаты в поле')
        else {
            copyToClipboard(hashlnk + lookhash.value + "\", \{ \"method\":\"GET\",   \"credentials\":\"include\" \} ) \;");
        };
        document.getElementById('gethash').innerHTML = "✅";
        setTimeout(function () { document.getElementById('gethash').innerHTML = "💾" }, 2000);
        lookhash.value = "";
    }

    document.getElementById('setchatsadults').onclick = function () {                  // добавляем чаты с учениками adults
        let hashlnk = 'fetch("https://rooms-vimbox.skyeng.ru/users/api/v1/teachers/' + document.getElementById('idteacheradult').value.trim() + '/students"';
        if (idteacheradult.value == "")
            console.log('Введите hash комнаты в поле')
        else {
            copyToClipboard("fetch('https://notify-vimbox.skyeng.ru/api/v1/chat/contact', { method: 'POST', headers: {'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify({userId1:" + document.getElementById('idteacheradult').value + "," + "userId2:" + document.getElementById('idstudentadult').value + "," + "})})")
        }
        document.getElementById('setchatsadults').innerHTML = "✅";
        setTimeout(function () { document.getElementById('setchatsadults').innerHTML = "💾" }, 2000);
        idteacheradult.value = "";
        idstudentadult.value = "";
    }

    document.getElementById('getenablerAP').onclick = function () {               // сохранение в буфере ссылки для активации АП
        let enableAPlnk = 'https://pcs.skyeng.ru/cabinet/teacher-selection?educationServiceId=';
        if (enablerAP.value == "")
            console.log('Введите hash комнаты в поле')
        else {
            copyToClipboard(enableAPlnk + enablerAP.value);
        };
        document.getElementById('getenablerAP').innerHTML = "✅";
        setTimeout(function () { document.getElementById('getenablerAP').innerHTML = "💾" }, 2000);
        enablerAP.value = "";
    }

    document.getElementById('getskipAP').onclick = function () {               // сохранение в буфере ссылки для активации АП
        let skipAPlnk = 'https://student.skyeng.ru/product-stage?stage=auto-schedule&educationServiceId=';
        if (skipAP.value == "")
            console.log('Введите hash комнаты в поле')
        else {
            copyToClipboard(skipAPlnk + skipAP.value);
        };
        document.getElementById('getskipAP').innerHTML = "✅";
        setTimeout(function () { document.getElementById('getskipAP').innerHTML = "💾" }, 2000);
        skipAP.value = "";
    }


    document.getElementById('doskiponboard').onclick = function () {               // сохранение в буфере ссылки для активации АП
        let skiponblnk = 'https://student.skyeng.ru/product-stage?stage=onboarding&educationServiceId=';
        if (skiponboarding.value == "")
            console.log('Введите ID услуги в поле')
        else {
            copyToClipboard(skiponblnk + skiponboarding.value);
        };
        document.getElementById('doskiponboard').innerHTML = "✅";
        setTimeout(function () { document.getElementById('doskiponboard').innerHTML = "💾" }, 2000);
        skiponboarding.value = "";
    }

    let nameofuser;
    let teachername;
    let studentname;
    let utczone;
    let localtime;
    let servlocalestatus;
    let avatarofuser;
    let countryofuser;
    let ageofuser;

    async function getusernamecrm() { //получить имя пользователя из СРМ
        let curdate = new Date();
        let curhours = (curdate.getUTCHours() + 3);
        let curminutes = curdate.getMinutes();
        if (curminutes < 10) {
            curminutes = "0" + curminutes;
        }
        let filteredid = document.getElementById('idstudent').value;
        filteredid = filteredid.trim();
        document.getElementById('responseTextarea1').value = `{
			  "headers": {
				"accept": "application/json, text/plain, */*",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-site"
			  },
			  "referrer": "https://crm2.skyeng.ru/",
			  "referrerPolicy": "strict-origin-when-cross-origin",
			  "body": null,
			  "method": "GET",
			  "mode": "cors",
			  "credentials": "include"
	}`
        document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + filteredid + "?crm2=true&debugParam=profile-page"
        document.getElementById('responseTextarea3').value = 'getusernameinfo'
        document.getElementById('sendResponse').click()

        setTimeout(async function () {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + filteredid + "?crm2=true&debugParam=profile-page"
            document.getElementById('responseTextarea3').value = 'getusernameinfo'
            document.getElementById('sendResponse').click()

            studentname = document.getElementById('responseTextarea1').getAttribute('getusernameinfo');
            studentname = await studentname;
            studentname = JSON.parse(studentname);
            nameofuser = "";
            teachername = "";


            if (studentname.data.name != null && studentname.data.surname != null && studentname.data.type == "student") {
                nameofuser = studentname.data.name + " " + studentname.data.surname;
            } else if (studentname.data.name != null && studentname.data.surname == null && studentname.data.type == "student") {
                nameofuser = studentname.data.name;
            } else if (studentname.data.name != null && studentname.data.surname != null && studentname.data.type == "teacher") {
                teachername = studentname.data.name + " " + studentname.data.surname;
            } else if (studentname.data.name != null && studentname.data.surname == null && studentname.data.type == "teacher") {
                teachername = studentname.data.name;
            }

            utczone = studentname.data.utcOffset;
            if ((curhours + (utczone - 3)) < 24 && (curhours + (utczone - 3)) >= 10) {
                localtime = (curhours + (utczone - 3)) + ":" + curminutes;
            } else if ((curhours + (utczone - 3)) >= 24) {
                localtime = "0" + ((curhours + (utczone - 3)) - 24) + ":" + curminutes;
            } else if ((curhours + (utczone - 3)) < 10 && (curhours + (utczone - 3)) >= 0) {
                localtime = "0" + (curhours + (utczone - 3)) + ":" + curminutes;
            } else if ((curhours + (utczone - 3)) < 0) {
                localtime = ((curhours + (utczone - 3)) + 24) + ":" + curminutes;
            }

            if (studentname.data.serviceLocale == null) {
                servlocalestatus = "⭕"
            } else {
                servlocalestatus = studentname.data.serviceLocale;
            }

            if (studentname.data.avatarUrl != null) {
                avatarofuser = studentname.data.avatarUrl.match(/(https:\/\/auth-avatars-skyeng.imgix.net.*?\d+.\S+).auto/)[1];
            } else {
                avatarofuser = null;
            }

            if (studentname.data.country != null) {
                countryofuser = studentname.data.country;
            } else {
                countryofuser = null;
            }

            let goddata = new Date()
            goddata = goddata.getFullYear();
            if (studentname.data.birthday != null) {
                studentname = studentname.data.birthday.split('-')
                if (goddata - studentname[0] < 18)
                    ageofuser = "🔞"
                else if (goddata - studentname[0] >= 18 && goddata - studentname[0] < 99)
                    ageofuser = "🅰";
            } else if (studentname.data.birthday == null)
                ageofuser = "❓";

            document.getElementById('responseTextarea1').removeAttribute('getusernameinfo')

        }, 600)

    }

    let tokenlogginer;
    let logginerinfo;

    async function postuderdatatologin() { // логгинер для У П ПМ
        logginerinfo = '';
        let useriddata = document.getElementById('idstudent').value;
        useriddata = useriddata.trim();
        document.getElementById('responseTextarea1').value = `{
			  "headers": {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"content-type": "application/x-www-form-urlencoded",
				"sec-fetch-dest": "document",
				"sec-fetch-mode": "navigate",
				"sec-fetch-site": "same-origin",
				"sec-fetch-user": "?1",
				"upgrade-insecure-requests": "1"
			  },
			  "referrer": "https://id.skyeng.ru/admin/auth/login-links",
			  "referrerPolicy": "strict-origin-when-cross-origin",
			  "body": "login_link_form%5Bidentity%5D=&login_link_form%5Bid%5D=${useriddata}&login_link_form%5Btarget%5D=https%3A%2F%2Fskyeng.ru&login_link_form%5Bpromocode%5D=&login_link_form%5Blifetime%5D=3600&login_link_form%5Bcreate%5D=&login_link_form%5B_token%5D=${tokenlogginer}",
			  "method": "POST",
			  "mode": "cors",
			  "credentials": "include"
			}`
        document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/auth/login-links";
        document.getElementById('responseTextarea3').value = 'postdata'
        document.getElementById('sendResponse').click()

        setTimeout(async function () {

            document.getElementById('responseTextarea1').value = `{
				   "headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-fetch-dest": "document",
					"sec-fetch-mode": "navigate",
					"sec-fetch-site": "same-origin",
					"sec-fetch-user": "?1",
					"upgrade-insecure-requests": "1"
				  },
				  "referrer": "https://id.skyeng.ru/admin/auth/login-links",
				  "referrerPolicy": "strict-origin-when-cross-origin",
				  "body": null,
				  "method": "GET",
				  "mode": "cors",
				  "credentials": "include"
			}`
            document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/auth/login-links"
            document.getElementById('responseTextarea3').value = 'postdata'
            document.getElementById('sendResponse').click()

            logginerinfo = document.getElementById('responseTextarea1').getAttribute('postdata');
            logginerinfo = await logginerinfo;

            logginerinfo = logginerinfo.match(/("https:\/\/id.skyeng.ru\/auth\/login-link\/\w+.*?")/gm);
            logginerinfo = logginerinfo[logginerinfo.length - 1].split("\"");
            //console.log("WATCH OUT ITS LOGGINER:" + logginerinfo[1])
            copyToClipboard1(logginerinfo[1])
            document.getElementById('responseTextarea1').removeAttribute('postdata')


        }, 800)
    }

    let getcrmstatusinfo;

    async function crmstatus() { // получить статус задача в СРМ в решении или в ожидании
        let tempvarcrm = document.getElementById('idstudent').value;
        tempvarcrm = tempvarcrm.trim();

        document.getElementById('CrmStatus').style.display = "none";

        document.getElementById('responseTextarea1').value = `{
				  "headers": {
					"accept": "application/json, text/plain, */*",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "same-site"
				  },
				  "method": "GET",
				  "mode": "cors",
				  "credentials": "include"
	}`
        document.getElementById('responseTextarea2').value = "https://customer-support.skyeng.ru/task/user/" + tempvarcrm;
        document.getElementById('responseTextarea3').value = 'getcrmtaskinfo'
        document.getElementById('sendResponse').click()



        setTimeout(async function () {
            document.getElementById('responseTextarea1').value = `{}`
            document.getElementById('responseTextarea2').value = "https://customer-support.skyeng.ru/task/user/" + tempvarcrm;
            document.getElementById('responseTextarea3').value = 'getcrmtaskinfo'
            document.getElementById('sendResponse').click()

            getcrmstatusinfo = document.getElementById('responseTextarea1').getAttribute('getcrmtaskinfo');
            getcrmstatusinfo = await getcrmstatusinfo;
            getcrmstatusinfo = JSON.parse(getcrmstatusinfo);
            let flagtpout = 0;
            let flagtp = 0;
            let flagnottp = 0;
            let flagstatuswait;
            let flagstatusprocessing;
            let opername = "";
            if (getcrmstatusinfo.data.length > 0) {
                for (let i = 0; i < getcrmstatusinfo.data.length; i++) {
                    if (getcrmstatusinfo.data[i].operatorGroup.name == "technical_support_outgoing") {
                        flagtpout = 1;
                    } else if (getcrmstatusinfo.data[i].operatorGroup.name == "technical_support_first_line") {
                        flagtp = 1;
                    } else if (getcrmstatusinfo.data[i].operatorGroup.name != "technical_support_outgoing" && getcrmstatusinfo.data[i].operatorGroup.name != "technical_support_first_line") {
                        flagnottp = 1;
                    }
                }

                for (let i = 0; i < getcrmstatusinfo.data.length; i++) {
                    if (getcrmstatusinfo.data[i].operatorGroup.name == "technical_support_outgoing" && getcrmstatusinfo.data[i].status == "waiting") {
                        flagstatuswait = 1;
                    } else if (getcrmstatusinfo.data[i].operatorGroup.name == "technical_support_outgoing" && getcrmstatusinfo.data[i].status == "processing") {
                        flagstatusprocessing = 1;
                        opername = getcrmstatusinfo.data[i].operator.name;
                    }
                }

                if (flagstatuswait == 1) {
                    document.getElementById('getcurrentstatus').style.display = "";
                    document.getElementById('getcurrentstatus').innerText = "В ожидании";
                    document.getElementById('getcurrentstatus').style.backgroundColor = "#1E90FF";
                } else if (flagstatusprocessing == 1) {
                    document.getElementById('getcurrentstatus').style.display = "";
                    document.getElementById('getcurrentstatus').innerText = "Решается";
                    document.getElementById('getcurrentstatus').title = opername;
                    document.getElementById('getcurrentstatus').style.backgroundColor = "#DC143C";
                }

                if (flagtpout == 1 && flagtp == 0 && flagnottp == 0) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "💥";
                    console.log("Есть активные задачи");
                } else if (flagtpout == 0 && flagtp == 1 && flagnottp == 0) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "🛠";
                    console.log("Входящий звонок или с др отдела на ТП была создана задача");
                } else if (flagtpout == 0 && flagtp == 0 && flagnottp == 1) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "📵";
                    console.log("Нет активных задач по ТП линии");
                } else if (flagtpout == 1 && flagtp == 1 && flagnottp == 0) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "💥";
                    console.log("Есть активные задачи на исход и на ТП 1 линии");
                } else if (flagtpout == 1 && flagtp == 1 && flagnottp == 1) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "💥";
                    console.log("Есть активные задачи на исход и на ТП 1 линии и на др отделы");
                } else if (flagtpout == 0 && flagtp == 1 && flagnottp == 1) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "🛠";
                    console.log("Входящий звонок или с др отдела на ТП была создана задача. И есть задача на др отдел");
                }

            } else {
                document.getElementById('CrmStatus').style.display = "";
                document.getElementById('CrmStatus').innerText = "📵";
                console.log("No DATA");
            }
            document.getElementById('responseTextarea1').removeAttribute('getcrmtaskinfo')

        }, 800)
    }

    document.getElementById('startnewchat').onclick = async function () { // нажатие на начать новый чат
        let polzid = document.getElementById('idstudent').value.trim();
        startnewchat(polzid)
    }

    let convid;

    document.getElementById('getidstudent').onclick = function () { // нажатие на ракету
        convid = "";
        // document.getElementById('servicetable').innerHTML = "";
        document.getElementById('servicetable').innerHTML = "Загрузка информации о пользователе";
        document.querySelector('#useravatar').src = "";
        if (document.querySelector('#useravatar').style.display != "none")
            document.querySelector('#useravatar').style.display = "none";
        let servicearr = "";
        document.getElementById('getcurrentstatus').title = "";
        let stid = document.getElementById('idstudent').value;
        stid = stid.trim();

        getservicearr();
        setTimeout(getunhideemail, 600);
        setTimeout(getunhidephone, 620);
        setTimeout(getusernamecrm, 640);
        setTimeout(checkemailandphoneidentity, 660);
        setTimeout(crmstatus, 680);

        //  getservicearr();
        setTimeout(chatstatus, 800)
        setTimeout(function () {
            if (werechats) {
                document.getElementById('ChatStatus').style.display = "";
                document.getElementById('ChatStatus').textContent = "📧";
            } else if (!werechats) {
                document.getElementById('ChatStatus').style.display = "";
                document.getElementById('ChatStatus').textContent = "🚫";
            }
        }, 1000)

        //   await getusernamecrm();
        //   await getuseragecrm();
        // await getunhideemail();
        // await getunhidephone();
        // await checkemailandphoneidentity();
        // await getlogginer();
        // await crmstatus();

        setTimeout(function () {
            document.getElementById('responseTextarea1').value = `{
		  "headers": {
			"accept": "application/json, text/plain, */*",
			"accept-language": "ru",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-site"
		  },
		  "body": null,
		  "method": "GET",
		  "mode": "cors",
		  "credentials": "include"
	}`
            document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + stid + "/education-services/"
            document.getElementById('responseTextarea3').value = 'getserviceinfo'
            document.getElementById('sendResponse').click()

            async function getServInfo() {
                document.getElementById('responseTextarea1').value = '{}'
                document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + stid + "/education-services/"
                document.getElementById('responseTextarea3').value = 'getserviceinfo'
                document.getElementById('sendResponse').click()

                servicearr = await document.getElementById('responseTextarea1').getAttribute('getserviceinfo');
                servicearr = JSON.parse(servicearr);
                //console.log(servicearr);
                document.getElementById('responseTextarea1').removeAttribute('getserviceinfo')


                let tinfo = ""; // инфо о постоянном П
                let temtinfo = ""; // инфо о временном П
                let servinfo = ""; //инфо об услуге
                let noservinfo = ""; //нет инфо об услугах, обычно если профиль П или оператора
                let arrservice = []; // пустой массив, куда будет передавать ID отобранных услуг по условию
                if (servicearr.data.length === 0 || servicearr.data[0].incorrectnessReason == "attempt_to_find_job") {
                    noservinfo = 1;
                    arrservice = null;
                } else {
                    for (let i = 0; i < servicearr.data.length; i++) {
                        for (let d = 0; d < servicearray.data.length; d++) {
                            if (servicearray.data[d].serviceTypeKey == servicearr.data[i].serviceTypeKey)
                                servicearr.data[i].serviceTypeKey = servicearray.data[d].shortTitle;
                        }

                        if (servicearr.data[i].student.general.id == stid && servicearr.data[i].incorrectnessReason == null && servicearr.data[i].stage != "lost" && servicearr.data[i].teacher != null && servicearr.data[i].temporaryTeacher == null) {

                            tinfo += [i + 1] + ") " + servicearr.data[i].teacher.general.id + "," + " " + servicearr.data[i].teacher.general.name + " " + servicearr.data[i].teacher.general.surname + "<br>";
                            servinfo += [i + 1] + ") " + '<span class = "iduslugitxt">ID Услуги: </span>' + servicearr.data[i].id + '<span class = "copyserviceid">💾</span>' + '<br> Баланс: ' + servicearr.data[i].balance + '<br>' + servicearr.data[i].serviceTypeKey + '<hr class="underline-service">';
                            arrservice += servicearr.data[i].id + ", "
                        } else if (servicearr.data[i].student.general.id == stid && servicearr.data[i].teacher == null && servicearr.data[i].temporaryTeacher != null && servicearr.data[i].incorrectnessReason == null && servicearr.data[i].stage != "lost") {

                            temtinfo += [i + 1] + ") " + servicearr.data[i].temporaryTeacher.general.id + "," + " " + servicearr.data[i].temporaryTeacher.general.name + " " + servicearr.data[i].temporaryTeacher.general.surname + "<br>";
                            servinfo += [i + 1] + ") " + '<span class = "iduslugitxt">ID Услуги: </span>' + servicearr.data[i].id + '<span class = "copyserviceid">💾</span>' + '<br> Баланс: ' + servicearr.data[i].balance + '<br>' + servicearr.data[i].serviceTypeKey + '<hr class="underline-service">';
                            arrservice += servicearr.data[i].id + ", "
                        } else if (servicearr.data[i].student.general.id == stid && servicearr.data[i].teacher == null && servicearr.data[i].serviceTypeKey == "Групп англ дети РЯ" && servicearr.data[i].incorrectnessReason == null && servicearr.data[i].stage != "lost") {

                            tinfo = "KGL student" + "<br>";
                            servinfo += [i + 1] + ") " + '<span class = "iduslugitxt">ID Услуги: </span>' + servicearr.data[i].id + '<span class = "copyserviceid">💾</span>' + '<br> Баланс: ' + servicearr.data[i].balance + '<br>' + servicearr.data[i].serviceTypeKey + '<hr class="underline-service">';
                            arrservice += servicearr.data[i].id + ", "
                        } else if (servicearr.data[i].student.general.id == stid && servicearr.data[i].teacher != null && servicearr.data[i].temporaryTeacher != null && servicearr.data[i].incorrectnessReason == null && servicearr.data[i].stage != "lost") {
                            tinfo += [i + 1] + ") " + servicearr.data[i].teacher.general.id + "," + " " + servicearr.data[i].teacher.general.name + " " + servicearr.data[i].teacher.general.surname + "<br>";
                            temtinfo += [i + 1] + ") " + servicearr.data[i].temporaryTeacher.general.id + "," + " " + servicearr.data[i].temporaryTeacher.general.name + " " + servicearr.data[i].temporaryTeacher.general.surname + "<br>";
                            servinfo += [i + 1] + ") " + '<span class = "iduslugitxt">ID Услуги: </span>' + servicearr.data[i].id + '<span class = "copyserviceid">💾</span>' + '<br> Баланс: ' + servicearr.data[i].balance + '<br>' + servicearr.data[i].serviceTypeKey + '<hr class="underline-service">';
                            arrservice += servicearr.data[i].id + ", "
                        } else if (servicearr.data[i].student.general.id == stid && (servicearr.data[i].stage == "after_trial" || servicearr.data[i].stage == "before_call") && servicearr.data[i].incorrectnessReason == null) {
                            tinfo += [i + 1] + ") " + '<span style="color:#FF7F50; font-weight:900;">Этап ВУ</span><br>';
                            servinfo += [i + 1] + ") " + '<span>ID Услуги: </span>' + servicearr.data[i].id + '<span class = "copyserviceid" >💾</span>' + '<br> Баланс: ' + servicearr.data[i].balance + '<br>' + servicearr.data[i].serviceTypeKey + '<hr class="underline-service">';
                            arrservice += servicearr.data[i].id + ", "
                        } else if (servicearr.data[i].student.general.id == stid && servicearr.data[i].stage == "lost" && servicearr.data[i].incorrectnessReason == null) {
                            //	tinfo += [i+1] + ") " + "Нет П, услуга(и) потеряна(ы)"+ "<br>";
                            console.log("Услуга потеряна");
                        } else if (servicearr.data[i].student.general.id == stid && servicearr.data[i].stage != "lost" && servicearr.data[i].incorrectnessReason != null) {
                            //	tinfo += [i+1] + ") " + "Нет П, услуга(и) некорректна(ы)"+ "<br>";
                            console.log("Услуга некорректна");
                        } else if (servicearr.data[i].student.general.id == stid && servicearr.data[i].stage == "lost" && servicearr.data[i].incorrectnessReason == null) {
                            //	tinfo = "Нет П, услуга(и) потеряна(ы) и некорректна(ы)"+ "<br>";
                            console.log("Услуга потеряна и некорректна");
                        }
                    }
                }

                if (temtinfo == "" && tinfo != "") {
                    if (avatarofuser != null) {
                        document.querySelector('#useravatar').style.display = "";
                        document.querySelector('#useravatar').src = avatarofuser;
                    }
                    document.getElementById('servicetable').innerHTML = '<span id="getshowcase" title="При клике на кнопку копирует в буфер шоукейс ученика" style="cursor:pointer;">ℹ</span>' + ageofuser + '<span id="getloginer" title="При клике делает ссылку-логгинер и копирует в буфер обмена для авторизации" class="cursor-userinfobtns"> Имя: </span>' + nameofuser + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена почту пользователя" id="getusremail">Email: </span>' + unhidenemail + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена телефон пользователя" id="getusrphone">Phone: </span>' + unhidephone + " • 🌍: " + countryofuser + "<br>" + "Identity: " + emailidentity + " " + phoneidentity + "• Язык осблуж.: " + servlocalestatus + "<br>" + "UTC:" + utczone + " /  MSK(+/-): " + (utczone - 3) + " Время(местное): " + localtime + "<br>" + '<span style="color:#32CD32; font-weight:900;">Основные преподаватели</span><br>' + tinfo + "<br>" + '<span style="color:#00BFFF; font-weight:900;">Информация об услугах:</span><br>' + servinfo;
                    if (servlocalestatus == "ru") {
                        document.getElementById('changelocalelng').style.display = "none"
                    } else if (servlocalestatus != "ru" || servlocalestatus == "⭕") {
                        document.getElementById('changelocalelng').style.display = ""
                    }
                    document.getElementById('checkbalance').style.display = "";
                    document.getElementById('getkglinfokid').style.display = "";
                    document.getElementById('partialpaymentinfo').style.display = "";
                    document.getElementById('getpastandfuturelessons').style.display = "";
                    document.getElementById('newtrm').style.display = "none";
                    document.getElementById('personalteacherpage').style.display = "none";

                } else if (temtinfo != "" && tinfo != "") {
                    if (avatarofuser != null) {
                        document.querySelector('#useravatar').style.display = "";
                        document.querySelector('#useravatar').src = avatarofuser;
                    }
                    document.getElementById('servicetable').innerHTML = '<span id="getshowcase" title="При клике на кнопку копирует в буфер шоукейс ученика" style="cursor:pointer;">ℹ</span>' + ageofuser + '<span id="getloginer" title="При клике делает ссылку-логгинер и копирует в буфер обмена для авторизации"  class="cursor-userinfobtns"> Имя: </span>' + nameofuser + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена почту пользователя" id="getusremail">Email: </span>' + unhidenemail + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена телефон пользователя" id="getusrphone">Phone: </span>' + unhidephone + " • 🌍: " + countryofuser + "<br>" + "Identity: " + emailidentity + " " + phoneidentity + "• Язык осблуж.: " + servlocalestatus + "<br>" + "UTC:" + utczone + " / MSK(+/-): " + (utczone - 3) + " Время(местное): " + localtime + "<br>" + '<span style="color:#32CD32; font-weight:900;">Основные преподаватели</span><br>' + tinfo + "<br>" + '<span style="color:#FF8C00; font-weight:900;">Временные преподаватели</span><br>' + temtinfo + "<br>" + '<span style="color:#00BFFF; font-weight:900;">Информация об услугах:</span><br>' + servinfo;
                    if (servlocalestatus == "ru") {
                        document.getElementById('changelocalelng').style.display = "none"
                    } else if (servlocalestatus != "ru" || servlocalestatus == "⭕") {
                        document.getElementById('changelocalelng').style.display = ""
                    }
                    document.getElementById('checkbalance').style.display = "";
                    document.getElementById('getkglinfokid').style.display = "";
                    document.getElementById('partialpaymentinfo').style.display = "";
                    document.getElementById('getpastandfuturelessons').style.display = "";
                    document.getElementById('newtrm').style.display = "none";
                    document.getElementById('personalteacherpage').style.display = "none";

                } else if (temtinfo != "" && tinfo == "") {
                    if (avatarofuser != null) {
                        document.querySelector('#useravatar').style.display = "";
                        document.querySelector('#useravatar').src = avatarofuser;
                    }
                    document.getElementById('servicetable').innerHTML = '<span id="getshowcase" title="При клике на кнопку копирует в буфер шоукейс ученика" style="cursor:pointer;">ℹ</span>' + ageofuser + '<span id="getloginer" title="При клике делает ссылку-логгинер и копирует в буфер обмена для авторизации"  class="cursor-userinfobtns"> Имя: </span>' + nameofuser + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена почту пользователя" id="getusremail">Email: </span>' + unhidenemail + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена телефон пользователя" id="getusrphone">Phone: </span>' + unhidephone + " • 🌍: " + countryofuser + "<br>" + "Identity: " + emailidentity + " " + phoneidentity + "• Язык осблуж.: " + servlocalestatus + "<br>" + "UTC:" + utczone + " / MSK(+/-): " + (utczone - 3) + " Время(местное): " + localtime + "<br>" + '<span style="color:#FF8C00; font-weight:900;">Временные преподаватели</span><br>' + temtinfo + "<br>" + '<span style="color:#00BFFF; font-weight:900;">Информация об услугах:</span><br>' + servinfo;
                    if (servlocalestatus == "ru") {
                        document.getElementById('changelocalelng').style.display = "none"
                    } else if (servlocalestatus != "ru" || servlocalestatus == "⭕") {
                        document.getElementById('changelocalelng').style.display = ""
                    }
                    document.getElementById('checkbalance').style.display = "";
                    document.getElementById('getkglinfokid').style.display = "";
                    document.getElementById('partialpaymentinfo').style.display = "";
                    document.getElementById('getpastandfuturelessons').style.display = "";
                    document.getElementById('newtrm').style.display = "none";
                    document.getElementById('personalteacherpage').style.display = "none";

                } else if (noservinfo == 1 && teachername != "") {
                    if (avatarofuser != null) {
                        document.querySelector('#useravatar').style.display = "";
                        document.querySelector('#useravatar').src = avatarofuser;
                    }
                    document.getElementById('servicetable').innerHTML = '<span style="color:#00BFFF; font-weight:900;">Преподаватель </span>' + "<br>" + '<span id="getloginer" title="При клике делает ссылку-логгинер и копирует в буфер обмена для авторизации"  class="cursor-userinfobtns">Имя: </span>' + teachername + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена почту пользователя" id="getusremail">Email: </span>' + unhidenemail + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена телефон пользователя" id="getusrphone">Phone: </span>' + unhidephone + "<br>" + "🌍: " + countryofuser + "<br>";
                    document.getElementById('changelocalelng').style.display = "none";
                    document.getElementById('checkbalance').style.display = "none";
                    document.getElementById('getkglinfokid').style.display = "none";
                    document.getElementById('partialpaymentinfo').style.display = "none";
                    document.getElementById('getpastandfuturelessons').style.display = "none";
                    document.getElementById('newtrm').style.display = "";
                    document.getElementById('personalteacherpage').style.display = "";

                } else if (noservinfo == 1 && nameofuser != "" && teachername == "" && unhidenemail.endsWith('@skyeng.ru') == true) {
                    document.getElementById('servicetable').innerHTML = '<span style="color:#FF69B4; font-weight:900;">Оператор </span>' + "<br>" + '<span id="getloginer" title="При клике делает ссылку-логгинер и копирует в буфер обмена для авторизации"  class="cursor-userinfobtns">Имя: </span>' + nameofuser + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена почту пользователя" id="getusremail1">Email: </span>' + unhidenemail + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена телефон пользователя" id="getusrphone1">Phone: </span>' + unhidephone + "<br>";
                    document.getElementById('checkbalance').style.display = "none";
                    document.getElementById('getkglinfokid').style.display = "none";
                    document.getElementById('partialpaymentinfo').style.display = "none";
                    document.getElementById('newtrm').style.display = "none";
                    document.getElementById('personalteacherpage').style.display = "none";

                } else {
                    if (avatarofuser != null) {
                        document.querySelector('#useravatar').style.display = "";
                        document.querySelector('#useravatar').src = avatarofuser;
                    }
                    document.getElementById('servicetable').innerHTML = '<span id="getshowcase1" title="При клике на кнопку копирует в буфер шоукейс ученика" style="cursor:pointer;">ℹ</span>' + ageofuser + '<span id="getloginer1" title="При клике делает ссылку-логгинер и копирует в буфер обмена для авторизации"  class="cursor-userinfobtns"> Имя: </span>' + nameofuser + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена почту пользователя" id="getusremail1">Email: </span>' + unhidenemail + "<br>" + '<span class="cursor-userinfobtns" title="При клике копирует в буфер обмена телефон пользователя" id="getusrphone1">Phone: </span>' + unhidephone + " • 🌍: " + countryofuser + "<br>" + "Identity: " + emailidentity + " " + phoneidentity + "• Язык осблуж.: " + servlocalestatus + "<br>" + "UTC:" + utczone + " / MSK(+/-): " + (utczone - 3) + " Время(местное): " + localtime + "<br>" + "Нет активных услуг (П отсутствует). Услуги потеряны или некорректны";

                    if (document.getElementById('getusremail1') != null) {
                        document.getElementById('getusremail1').onclick = function () {
                            copyToClipboard1(unhidenemail);
                        };
                    }

                    if (document.getElementById('getusrphone1') != null) {
                        document.getElementById('getusrphone1').onclick = function () {
                            copyToClipboard1(unhidephone);
                        };
                    }

                    if (document.getElementById('getshowcase1') != null) {
                        document.getElementById('getshowcase1').onclick = function () {
                            copyToClipboard1("https://profile.skyeng.ru/profile/" + stid + "/showcase");
                        };
                    }

                    if (document.getElementById('getloginer1') != null) {
                        document.getElementById('getloginer1').onclick = function () {
                            postuderdatatologin();
                        }
                    }
                }

                if (arrservice != null && arrservice != undefined) {
                    arrservice = arrservice.split(', ')
                }

                let tmparr = document.querySelectorAll('.copyserviceid');
                for (let j = 0; j < tmparr.length; j++) {
                    tmparr[j].onclick = function () {
                        copyToClipboard1(arrservice[j])
                    }
                }

                if (document.getElementById('getusremail') != null) {
                    document.getElementById('getusremail').onclick = function () {
                        copyToClipboard1(unhidenemail);
                    };
                }

                if (document.getElementById('getusrphone') != null) {
                    document.getElementById('getusrphone').onclick = function () {
                        copyToClipboard1(unhidephone);
                    };
                }

                if (document.getElementById('getloginer') != null) {
                    document.getElementById('getloginer').onclick = function () {
                        postuderdatatologin();
                    }
                }

                if (document.getElementById('getshowcase') != null) {
                    document.getElementById('getshowcase').onclick = function () {
                        copyToClipboard1("https://profile.skyeng.ru/profile/" + stid + "/showcase");
                    };
                }


                if (document.getElementsByClassName('expert-user_details-list')[1] != undefined) {
                    let testids = document.querySelector('#servicetable').textContent.match(/(\d+,)/gm);
                    if (testids != null) {
                        let infoiduslugi = document.getElementsByClassName('iduslugitxt');
                        for (let j = 1; document.getElementsByClassName('expert-user_details-list')[1].childNodes[j] != undefined; j++) {
                            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[j].childNodes[1].innerText == "teacher") {
                                for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                                    if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id") {
                                        let getidusr = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
                                        if (infoiduslugi != undefined || infoiduslugi != null || infoiduslugi != "") {
                                            // for (let d = 0; d < infoiduslugi.length; d++) {
                                            for (let v = 0; v < testids.length; v++) {
                                                if (testids[v] == getidusr + ",")
                                                    infoiduslugi[v].innerText = "ID Услуги 🔥";
                                                else
                                                    console.log("Not found") //если услуги не совпали с П обратившимся
                                            } // for v
                                            //    } // for d
                                        } //проверка на наличие услуг, чтобы не были андейфайнед, нулл или пустыми
                                    } else
                                        console.log("No such field"); // если обратился У в консоли получим сообщение или обратился П, который указал У который не является его учеником
                                } // for let i
                            } // if type == teacher
                        }
                    }
                } // for let j
            }

            setTimeout(getServInfo, 1200)

        }, 720)
    }

    document.getElementById('ChatStatus').onclick = function () { //обновить статус чата ДОРАБОТАТЬ НА НОВОГО КОТА, чтобы по клику чат открывался
        if (document.getElementById('ChatStatus').textContent == "📧") {

            if (document.querySelector('#hide_or_display').textContent != "свернуть") {
                hide_or_display.click()
                document.getElementById('chat_id').value = convid;

                search.click()
            } else if (document.querySelector('#hide_or_display').textContent == "свернуть") {
                document.getElementById('chat_id').value = convid;
                search.click()
            }
        } else { console.log("No chat with user!!!") }
    }

    document.getElementById('CrmStatus').onclick = function () { //обновить статус СРМ

        let tempvarcrm = document.getElementById('idstudent').value;
        let getcrmstatusinfo;
        document.getElementById('CrmStatus').style.display = "none";
        document.getElementById('getcurrentstatus').style.display = "none";
        document.getElementById('getcurrentstatus').title = "";

        document.getElementById('responseTextarea1').value = `{
				  "headers": {
					"accept": "application/json, text/plain, */*",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "same-site"
				  },
				  "method": "GET",
				  "mode": "cors",
				  "credentials": "include"
	}`
        document.getElementById('responseTextarea2').value = "https://customer-support.skyeng.ru/task/user/" + tempvarcrm;
        document.getElementById('responseTextarea3').value = 'getcrmtaskinfo'
        document.getElementById('sendResponse').click()

        setTimeout(function () {
            document.getElementById('responseTextarea1').value = `{}`
            document.getElementById('responseTextarea2').value = "https://customer-support.skyeng.ru/task/user/" + tempvarcrm;
            document.getElementById('responseTextarea3').value = 'getcrmtaskinfo'
            document.getElementById('sendResponse').click()

            getcrmstatusinfo = document.getElementById('responseTextarea1').getAttribute('getcrmtaskinfo');
            getcrmstatusinfo = JSON.parse(getcrmstatusinfo);
            let flagtpout = 0;
            let flagtp = 0;
            let flagnottp = 0;
            let flagstatuswait;
            let flagstatusprocessing;
            let opername = "";
            if (getcrmstatusinfo.data.length > 0) {
                for (let i = 0; i < getcrmstatusinfo.data.length; i++) {
                    if (getcrmstatusinfo.data[i].operatorGroup.name == "technical_support_outgoing") {
                        flagtpout = 1;
                    } else if (getcrmstatusinfo.data[i].operatorGroup.name == "technical_support_first_line") {
                        flagtp = 1;
                    } else if (getcrmstatusinfo.data[i].operatorGroup.name != "technical_support_outgoing" && getcrmstatusinfo.data[i].operatorGroup.name != "technical_support_first_line") {
                        flagnottp = 1;
                    }
                }

                for (let i = 0; i < getcrmstatusinfo.data.length; i++) {
                    if (getcrmstatusinfo.data[i].operatorGroup.name == "technical_support_outgoing" && getcrmstatusinfo.data[i].status == "waiting") {
                        flagstatuswait = 1;
                        document.getElementById('getcurrentstatus').title = "";
                    } else if (getcrmstatusinfo.data[i].operatorGroup.name == "technical_support_outgoing" && getcrmstatusinfo.data[i].status == "processing") {
                        flagstatusprocessing = 1;
                        opername = getcrmstatusinfo.data[i].operator.name;
                    }
                }

                if (flagstatuswait == 1) {
                    document.getElementById('getcurrentstatus').style.display = "";
                    document.getElementById('getcurrentstatus').innerText = "В ожидании";
                } else if (flagstatusprocessing == 1) {
                    document.getElementById('getcurrentstatus').style.display = "";
                    document.getElementById('getcurrentstatus').innerText = "Решается";
                    document.getElementById('getcurrentstatus').title = opername;
                    document.getElementById('getcurrentstatus').style.backgroundColor = "#DC143C";
                }

                if (flagtpout == 1 && flagtp == 0 && flagnottp == 0) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "💥";
                    console.log("Есть активные задачи");
                } else if (flagtpout == 0 && flagtp == 1 && flagnottp == 0) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "🛠";
                    console.log("Входящий звонок или с др отдела на ТП была создана задача");
                } else if (flagtpout == 0 && flagtp == 0 && flagnottp == 1) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "📵";
                    console.log("Нет активных задач по ТП линии");
                } else if (flagtpout == 1 && flagtp == 1 && flagnottp == 0) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "💥";
                    console.log("Есть активные задачи на исход и на ТП 1 линии");
                } else if (flagtpout == 1 && flagtp == 1 && flagnottp == 1) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "💥";
                    console.log("Есть активные задачи на исход и на ТП 1 линии и на др отделы");
                } else if (flagtpout == 0 && flagtp == 1 && flagnottp == 1) {
                    document.getElementById('CrmStatus').style.display = "";
                    document.getElementById('CrmStatus').innerText = "🛠";
                    console.log("Входящий звонок или с др отдела на ТП была создана задача. И есть задача на др отдел");
                }

            } else {
                document.getElementById('CrmStatus').style.display = "";
                document.getElementById('CrmStatus').innerText = "📵";
                console.log("No DATA");
            }
            document.getElementById('responseTextarea1').removeAttribute('getcrmtaskinfo')

        }, 1200)

    }

    document.getElementById('crmactivetasks').onclick = function () { //открыват СРМ с активными задачами
        window.open("https://crm2.skyeng.ru/persons/" + document.getElementById('idstudent').value + "/customer-support/list")
    }

    document.getElementById('newtrm').onclick = function () { //открывает новый TRM 2.0 п
        window.open("https://trm.skyeng.ru/teacher/" + document.getElementById('idstudent').value)
    }

    document.getElementById('personalteacherpage').onclick = function () { //открывает личную страницу П
        window.open("https://skyeng.ru/teachers/id/" + document.getElementById('idstudent').value)
    }

    document.getElementById('clearservinfo').onclick = function () { //очищает все в вензеле
        document.getElementById('idstudent').value = "";
        document.getElementById('servicetable').innerHTML = "";
        document.getElementById('ChatStatus').style.display = "none";
        document.getElementById('CrmStatus').style.display = "none";
        document.getElementById('getcurrentstatus').style.display = "none";
        document.getElementById('changelocalelng').style.display = "";
        document.getElementById('getpastandfuturelessons').style.display = "";
        document.querySelector('#useravatar').src = "";
        document.querySelector('#useravatar').style.display = "none";
        document.getElementById('AF_TechSummary').style.display = "none";
        document.getElementById('AF_Timetable').style.display = "none";
        document.getElementById('techsumdata').innerText = "";
        document.getElementById('timetabledata').innerText = "";
        werechats = false;
        convid = "";

    }

    document.getElementById('useravatar').onmouseover = function () { // взаимодействие с аватаром пользователя увеличивает
        document.getElementById('useravatar').style.width = "200px";
        document.getElementById('useravatar').style.height = "230px";
    }

    document.getElementById('useravatar').onmouseout = function () { // взаимодействие с аватаром пользователя уменьшает
        document.getElementById('useravatar').style.width = "55px";
        document.getElementById('useravatar').style.height = "60px";
    }

    let searchCommentsByEnter = document.querySelector('#commenttosearch'); //по Enter запускает поиск по комментариям
    searchCommentsByEnter.addEventListener('keydown', event => {
        if (event.key === "Enter") {
            document.querySelector('#parsechat').click()
        }
    })
    document.getElementById('getpastandfuturelessons').onclick = function () { //открывает меню прошедших и предстоящих уроков
        if (document.getElementById('AF_Timetable').style.display == '')
            document.getElementById('AF_Timetable').style.display = 'none'
        else
            document.getElementById('AF_Timetable').style.display = ''
        getlessonfuture.click();
    }

    document.getElementById('gotolookip').onclick = function () { // проверка информации по айпишнику ученика/препода/ хостинга
        let iplink = 'https://check-host.net/ip-info?host=';
        if (iplookup.value == "")
            console.log('Введите ip в поле')
        else {
            window.open(iplink + iplookup.value);
        };
        iplookup.value = "";
    }

    document.getElementById('getlgsinfo').onclick = function () { // открытие админки LGS по ID группы
        let lgslink = 'https://learning-groups-storage.skyeng.ru/group/';
        if (lgssearch.value == "")
            console.log('Введите текст в поле')
        else {
            window.open(lgslink + lgssearch.value + '?cp=(section:participants)');
        };
        lgssearch.value = "";
    }

    document.getElementById('msg').onclick = function () { //  переключатель отправить сообщение в чат или заметки
        if (this.innerHTML == "Чат") {
            this.innerHTML = "Заметки";
            localStorage.setItem('msg', 'Заметки')
        } else {
            this.innerHTML = "Чат";
            localStorage.setItem('msg', 'Чат')
        }
    }

    if (localStorage.getItem('scriptAdr') != TP_addr) {
        document.getElementById('msg1').style.display = 'none'
        document.getElementById('snd').style.marginLeft = '120px'
        document.getElementById('msg1').innerHTML = 'Доработать'
        document.getElementById('testUsers').style.display = 'none'
    } else {
        prepTp()
    }

    document.getElementById('hideMeSugForm').onclick = () => { //форма hide
        if (document.getElementById('AF_Sugform').style.display == '')
            document.getElementById('AF_Sugform').style.display = 'none'
    }

    document.getElementById('hideMeRefuseFormv2').onclick = () => { //форма hide
        if (document.getElementById('AF_Refuseformnew').style.display == '')
            document.getElementById('AF_Refuseformnew').style.display = 'none'
    }

    document.getElementById('hideMeChHis').onclick = () => { //форма hide
        if (document.getElementById('AF_ChatHis').style.display == '') {
            document.getElementById('AF_ChatHis').style.display = 'none'

            document.getElementById('infofield').innerText = ''
            document.getElementById('placeusid').innerText = ''
            document.getElementById('placechatid').innerText = ''
            document.getElementById('somechatinfo').style.display = 'none';
            document.getElementById('bottommenuchhis').style.display = 'none';
            document.getElementById('comentsbar').style.display = 'none';
            document.getElementById('chatuserhis').value = ''
            document.getElementById('hashchathis').value = ''
        }
    }

    document.getElementById('clearallinfo').onclick = () => { //кнопка очистки
        document.getElementById('infofield').innerText = ''
        document.getElementById('placeusid').innerText = ''
        document.getElementById('placechatid').innerText = ''
        document.getElementById('somechatinfo').style.display = 'none';
        document.getElementById('bottommenuchhis').style.display = 'none';
        document.getElementById('comentsbar').style.display = 'none';
        document.getElementById('chatuserhis').value = ''
        document.getElementById('hashchathis').value = ''
    }

    document.getElementById('hideMenu').onclick = function () { //форма hide
        document.getElementById('AF_helper').style.display = 'none'
        document.getElementById('scriptBut').style.display = ''
        if (document.getElementById('cstmTmplates').style.display == '')
            document.getElementById('cstmTmplates').style.display = 'none'
        if (document.getElementById('AF_Links').style.display == '')
            document.getElementById('AF_Links').style.display = 'none'
        if (document.getElementById('reminder_bar').style.display == '')
            document.getElementById('reminder_bar').style.display = 'none'
        if (document.getElementById('AF_Stat').style.display == '')
            document.getElementById('AF_Stat').style.display = 'none'
        if (document.getElementById('AF_LessonStatus').style.display == '')
            document.getElementById('AF_LessonStatus').style.display = 'none'
        if (document.getElementById('AF_Linksd').style.display == '')
            document.getElementById('AF_Linksd').style.display = 'none'
    }

    document.getElementById('hideMeSrvDsk').onclick = function () { //форма hide
        if (document.getElementById('AF_ServDsk').style.display == '') {
            $('.sdbtn').click(function () {
                $('.sdbtn').not(this).removeClass('activebtnsd');
                $(this).toggleClass('activebtnsd');
            });
			
			function remres(a) {
				$('.kidsbtn').not(a).removeClass('activebtn');
                $('.edumodbtn').not(a).removeClass('activebtn');
                $('.bilqabtn').not(a).removeClass('activebtn');
                $('.teacbtn').not(a).removeClass('activebtn');
                $('.c1sbtn').not(a).removeClass('activebtn');
                $('.schdbtn').not(a).removeClass('activebtn');
                $('.telepbtn').not(a).removeClass('activebtn');
                $('.authbtn').not(a).removeClass('activebtn');
                $('.crm2sbtn').not(a).removeClass('activebtn');
                $('.mrktbtn').not(a).removeClass('activebtn');
                $('.billbtn').not(a).removeClass('activebtn');
                $('.vimbugsbtn').not(a).removeClass('activebtn');
                $('.vimvidsbtn').not(a).removeClass('activebtn');
                $('.studcabbtn').not(a).removeClass('activebtn');
                $('.chatqabtn').not(a).removeClass('activebtn');
                $('.tripwbtn').not(a).removeClass('activebtn');
                $('.analystbtn').not(a).removeClass('activebtn');
                $('.corpbtn').not(a).removeClass('activebtn');
                $('.marketingbtn').not(a).removeClass('activebtn');
                $('.mobbugsbtn').not(a).removeClass('activebtn');
                $('.academymobbugsbtn').not(a).removeClass('activebtn');
                $('.stcabmbsbtn').not(a).removeClass('activebtn');
                $('.marketprojbugsbtn').not(a).removeClass('activebtn');
                $('.infrabtn').not(a).removeClass('activebtn');
                $(a).toggleClass('activebtn');
			}
			
            $('.teacbtn').click(function () {
				remres(this)
            });

            $('.kidsbtn').click(function () {
				remres(this)
            });

            $('.edumodbtn').click(function () {
				remres(this)
            });

            $('.bilqabtn').click(function () {
				remres(this)
            });

            $('.c1sbtn').click(function () {
				remres(this)
            });

            $('.schdbtn').click(function () {
				remres(this)
            });

            $('.telepbtn').click(function () {
				remres(this)
            });

            $('.authbtn').click(function () {
				remres(this)
            });

            $('.crm2sbtn').click(function () {
				remres(this)
            });

            $('.mrktbtn').click(function () {
				remres(this)
            });

            $('.billbtn').click(function () {
				remres(this)
            });

            $('.vimbugsbtn').click(function () {  //поправить
				remres(this)
            });

            $('.vimvidsbtn').click(function () {  //поправить
				remres(this)
            });

            $('.studcabbtn').click(function () {  //поправить
				remres(this)
            });

            $('.chatqabtn').click(function () {  //поправить
				remres(this)
            });

            $('.tripwbtn').click(function () {  //поправить
				remres(this)
            });

            $('.analystbtn').click(function () {  //поправить
				remres(this)
            });

            $('.corpbtn').click(function () {  //поправить
				remres(this)
            });

            $('.marketingbtn').click(function () {  //поправить
				remres(this)
            });

            $('.mobbugsbtn').click(function () {  //поправить
				remres(this)
            });

            $('.academymobbugsbtn').click(function () {  //поправить
				remres(this)
            });

            $('.stcabmbsbtn').click(function () {  //поправить
				remres(this)
            });

            $('.marketprojbugsbtn').click(function () {  //поправить
				remres(this)

            });

            $('.infrabtn').click(function () {  //поправить
				remres(this)

            });


            document.getElementById('AF_ServDsk').style.display = 'none'
        }
    }

    if (localStorage.getItem('audiovol') != null) {
        audio.volume = localStorage.getItem('audiovol');
    } else localStorage.setItem('audiovol', 1);

    document.getElementById('setting').onclick = function () { // открывает параметры
        if (document.getElementById('set_bar').style.display == '')
            document.getElementById('set_bar').style.display = 'none'
        else {
            document.getElementById('set_bar').style.display = ''
            document.getElementById('reminder_bar').style.display = 'none'
            document.getElementById('addTmp').style.display = 'none'

            let objSoundList = document.getElementById('soundlistaddr')
            let flagsound;
            function addOption(oListbox, text, value)  //функция добавления опции в список
            {
                var oOption = document.createElement("option");
                oOption.appendChild(document.createTextNode(text));
                oOption.setAttribute("value", value);

                oListbox.appendChild(oOption);
            }
            for (let i = 0; i < table.length; i++) {
                if (table[i][2] == "Название звука" && table[i][3] == "Ссылка")
                    flagsound = [i + 1]
            }

            for (j = flagsound[0]; j < table.length; j++) {
                if (table[j][2] != '') {
                    addOption(objSoundList, `${table[j][2]}`, `${table[j][3]}`)
                }
            }

            for (let i = 0; i < objSoundList.length; i++) {
                if (objSoundList.children[i].value == localStorage.getItem('sound_str')) {
                    objSoundList.children[i].selected = true;
                }
            }

            if (localStorage.getItem('test_stud') != "" || localStorage.getItem('test_stud') != null) {
                document.getElementById('test_std').value = localStorage.getItem('test_stud');
            } else document.getElementById('test_std').value = "";

            if (localStorage.getItem('test_teach') != "" || localStorage.getItem('test_teach') != null) {
                document.getElementById('test_teach').value = localStorage.getItem('test_teach');
            } else document.getElementById('test_teach').value = "";

            //Для таймера автозакрытия
            if (localStorage.getItem('aclstime') != null || localStorage.getItem('aclstime') != "") {
                document.getElementById('autoclosetime').value = localStorage.getItem('aclstime');
            } else {
                localStorage.setItem('aclstime', 12);
                document.getElementById('autoclosetime').value = localStorage.getItem('aclstime');
            }

            //для таймера autoclose

            document.getElementById('setautoclosetime').onclick = function () {
                if (document.getElementById('autoclosetime').value != '') {
                    localStorage.setItem('aclstime', document.getElementById('autoclosetime').value);
                } else console.log("Базовое значение равно 12 минут")
            }

            //

            let range = document.getElementById('range');
            range.value = localStorage.getItem('audiovol');


            range.onchange = function () {
                if (localStorage.getItem('audiovol') != null) {
                    audio.volume = this.value;
                    localStorage.setItem('audiovol', audio.volume);
                } else localStorage.setItem('audiovol', this.value);
            }

            //Скрыть окно Л П МВУ
            let flaglpm = 0;   // функция чекбокса вкл и откл  информационного окна
            var lpmboxstatus = document.getElementById('hidelpmwindow');
            lpmboxstatus.onclick = function () {

                if (!lpmboxstatus.checked) {
                    document.getElementById('testUsers').style.display = "";
                    flaglpm = 0;
                    localStorage.setItem('disablelpmwindow', flaglpm)
                } else {   // поставить checked, если он не установлен
                    document.getElementById('testUsers').style.display = "none";
                    flaglpm = 1;
                    localStorage.setItem('disablelpmwindow', flaglpm)
                }
            }

            if (localStorage.getItem('disablelpmwindow') == 1) {
                document.getElementById('testUsers').style.display = "none";
                lpmboxstatus.checked = true;
            } else {
                lpmboxstatus.checked = false;
            }

            //Скрыть окно выбора языка
            let flaglng = 0;   // функция чекбокса вкл и откл  информационного окна
            var lngbtnonoff = document.getElementById('hidelngselector');
            lngbtnonoff.onclick = function () {

                if (!lngbtnonoff.checked) {
					document.getElementsByClassName('user_menu-language_switcher')[0].style.display = ''
                    flaglng = 0;
                    localStorage.setItem('disablelngpmwindow', flaglng)
                } else {   // поставить checked, если он не установлен
					document.getElementsByClassName('user_menu-language_switcher')[0].style.display = 'none'
                    flaglng = 1;
                    localStorage.setItem('disablelngpmwindow', flaglng)
                }
            }

            if (localStorage.getItem('disablelngpmwindow') == 1) {
				document.getElementsByClassName('user_menu-language_switcher')[0].style.display = 'none'
                lngbtnonoff.checked = true;
            } else {
                lngbtnonoff.checked = false;
            }

            if (localStorage.getItem('audio') == '0')
                document.getElementById('audioswitcher').checked = false;
            else
                document.getElementById('audioswitcher').checked = true;

            document.getElementsByClassName('checkbox-audio-switch')[0].onclick = function () {  // функция переключатели звука ВКЛ и ВЫКЛ

                if (localStorage.getItem('audio') != null) {
                    if (localStorage.getItem('audio') == '0') {
                        document.getElementById('audioswitcher').checked = false;
                        localStorage.setItem('audio', '1');
                    } else if (localStorage.getItem('audio') == '1') {
                        document.getElementById('audioswitcher').checked = true;
                        localStorage.setItem('audio', '0');
                    }
                }
            }
        }
    }

    document.getElementById('links').onclick = function () { //открывает окно ссылок
        if (document.getElementById('AF_Links').style.display == '')
            document.getElementById('AF_Links').style.display = 'none'
        else {
            document.getElementById('AF_Links').style.display = ''

            for (let i = 0; i < table.length; i++) {
                if (table[i][3] == "iOS Version")
                    document.getElementById('curVeriOS').innerText = "iOS: " + table[i][4];

                if (table[i][3] == "Android Version")
                    document.getElementById('curVerAndroid').innerText = "Android: " + table[i][4]
            }
        }
    }

    document.getElementById('reminderstatus').onclick = function () { // открывает настройки будильника
        if (document.getElementById('reminder_bar').style.display == '')
            document.getElementById('reminder_bar').style.display = 'none'
        else {
            document.getElementById('reminder_bar').style.display = ''
            document.getElementById('set_bar').style.display = 'none'
            document.getElementById('addTmp').style.display = 'none'
        }
    }

    document.getElementById('addsrc').onclick = function () { //открывает окно доступов
        if (document.getElementById('AF_Linksd').style.display == '')
            document.getElementById('AF_Linksd').style.display = 'none'
        else
            document.getElementById('AF_Linksd').style.display = ''
    }

    document.getElementById('butServ').onclick = function () { //открывает вензель user info
        if (document.getElementById('AF_Service').style.display == '')
            document.getElementById('AF_Service').style.display = 'none'
        else
            document.getElementById('AF_Service').style.display = ''
    }

    document.getElementById('butChatHistory').onclick = () => { // открывает меню для работы с историей чата по типу кота Омельченко

        if (document.getElementById('AF_ChatHis').style.display == '')
            document.getElementById('AF_ChatHis').style.display = 'none'
        else
            document.getElementById('AF_ChatHis').style.display = ''
			document.getElementById('idmymenu').style.display = 'none'

        changeviewtheme()

        flagsearch = ''
        let getdateset = new Date()
        let getyearLS = getdateset.getFullYear();
        let getcurmonthLS = (getdateset.getMonth() + 1)
        let todayLS = getdateset.getDate();
        if (getcurmonthLS < 10) {
            getcurmonthLS = "0" + (getdateset.getMonth() + 1)
        } else {
            getcurmonthLS = (getdateset.getMonth() + 1);
        }
        if (getdateset.getDate() < 10) {
            todayLS = "0" + getdateset.getDate();
            document.getElementById('dateFromChHis').value = getyearLS + "-" + '0' + JSON.stringify(getcurmonthLS - 1) + "-" + "0" + Number(todayLS);
            document.getElementById('dateToChHis').value = getyearLS + "-" + getcurmonthLS + "-" + todayLS;
        } else {
            todayLS = getdateset.getDate();
            document.getElementById('dateFromChHis').value = getyearLS + "-" + '0' + (getcurmonthLS - 1) + "-" + (todayLS - 1);
            document.getElementById('dateToChHis').value = getyearLS + "-" + getcurmonthLS + "-" + todayLS;
        }

        let radiobtnsarray = document.getElementsByName('chatornotes')
        let radiobtnsarray1 = document.getElementsByName('chatornotes1')
        let activetechopers = [];
        document.getElementById('RefrehOperators').onclick = currstate;
        let objSel = document.getElementById("operatorstp");

        function addOption(oListbox, text, value)  //функция добавления опции в список
        {
            var oOption = document.createElement("option");
            oOption.appendChild(document.createTextNode(text));
            oOption.setAttribute("value", value);

            oListbox.appendChild(oOption);
        }

        async function currstate() { // функция получает массив операторов ТП, которые не в офлайне
            activetechopers = []
            objSel.length = 1
            objSel[0].selected = true;
            await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
                "credentials": "include"
            }).then(r => r.json()).then(result => {

                for (let i = 0; i < result.rows.length; i++) {
                    if (result.rows[i].operator != null && result.rows[i].operator.status != "Offline" && result.rows[i].operator.fullName.match(/ТП\D/)) {
                        activetechopers.push(result.rows[i])
                    } // end of if state
                } // end of for
            })

            if (activetechopers.length != 0) {
                for (let i = 0; i < activetechopers.length; i++) {
                    if (activetechopers[i].aCnt == null)
                        activetechopers[i].aCnt = 0;

                    if (activetechopers[i].operator.status == "Online") {
                        addOption(objSel, `🟢 ${activetechopers[i].operator.fullName} (${activetechopers[i].aCnt})`, `${activetechopers[i].operator.id}`)
                    } else if (activetechopers[i].operator.status == "Busy") {
                        addOption(objSel, `🟡 ${activetechopers[i].operator.fullName} (${activetechopers[i].aCnt})`, `${activetechopers[i].operator.id}`)
                    } else if (activetechopers[i].operator.status == "Pause") {
                        addOption(objSel, `🔴 ${activetechopers[i].operator.fullName} (${activetechopers[i].aCnt})`, `${activetechopers[i].operator.id}`)
                    }
                }
            }
        }

        document.getElementById('getdatafrchat').onclick = () => { //открывает окно с информацией об обратившемся пользователе


            if (typeof (convdata) !== 'undefined') {

                if (document.getElementById('userchatdata').style.display == 'none')
                    document.getElementById('userchatdata').style.display = ''
                else document.getElementById('userchatdata').style.display = 'none'

                if (convdata.channelUser.payload.techScreeningData == undefined)
                    convdata.channelUser.payload.techScreeningData = convdata.channelUser.payload["Тех.инфа об устройствах"]

                if (convdata.channelUser.payload.userFullName != undefined)
                    document.getElementById('datafield').innerHTML = '<span style="color:#00BFFF; font-weight:700;">' + convdata.channelUser.payload.userFullName + '</span>' + '<br>' + '<span style="color: #00FA9A;">' + '(' + convdata.channelUser.payload.userType + ')' + '</span>' + ' ID: ' + convdata.channelUser.payload.id + '<br>' + '<span style="user-select: none;">' + '📧: ' + '</span>' + convdata.channelUser.payload.email + '<br>' + '<span style="user-select: none;">' + '📞:' + '</span>' + convdata.channelUser.payload.phone + '<br>' + "Tech Screening Data: " + '<br>' + convdata.channelUser.payload.techScreeningData;
                else
                    document.getElementById('datafield').innerHTML = '<span style="color:#00BFFF; font-weight:700;">' + convdata.channelUser.fullName + '</span>' + '<br>' + '<span style="color: #00FA9A;">' + '(' + convdata.channelUser.payload.userType + ')' + '</span>' + ' ID: ' + convdata.channelUser.payload.id + '<br>' + '<span style="user-select: none;">' + '📧: ' + '</span>' + convdata.channelUser.payload.email + '<br>' + '<span style="user-select: none;">' + '📞:' + '</span>' + convdata.channelUser.payload.phone + '<br>' + "Tech Screening Data: " + '<br>' + convdata.channelUser.payload.techScreeningData;
            } else alert("Не выбран активный чат")
        }

        currstate();
        console.log(activetechopers);


        for (let i = 0; i < radiobtnsarray.length; i++) {
            if (radiobtnsarray[i].value == 'Notes' && radiobtnsarray[i].checked == true) {
                document.getElementById('msgftochatornotes').style.background = 'LightGrey';
            } else if (radiobtnsarray[i].value == 'Chat' && radiobtnsarray[i].checked == true) {
                document.getElementById('msgftochatornotes').style.background = 'white';
            }

            radiobtnsarray[i].onclick = () => {
                if (radiobtnsarray[i].value == 'Notes' && radiobtnsarray[i].checked == true) {
                    document.getElementById('msgftochatornotes').style.background = 'LightGrey';
                } else if (radiobtnsarray[i].value == 'Chat' && radiobtnsarray[i].checked == true) {
                    document.getElementById('msgftochatornotes').style.background = 'white';
                }
            }
        }

        document.getElementById('btn_search_history').onclick = async () => { //функця обработки нажатия "Найти"

            if (document.getElementById('chatuserhis').value != '' && document.getElementById('hashchathis').value == '') { // если айди пользователя введен, а хеш чата не введен
                flagsearch = 'searchbyuser'
                let lusid = document.getElementById('chatuserhis').value.trim();
                let from = document.getElementById('dateFromChHis').value
                let to = document.getElementById('dateToChHis').value
                document.getElementById('chatuserhis').value = ''

                if (foundarr != '')
                    foundarr = ''

                if (document.getElementById('placeusid').innerText != '')
                    document.getElementById('placeusid').innerText = ''

                if (document.getElementById('placechatid').innerText != '')
                    document.getElementById('placechatid').innerText = ''

                if (document.getElementById('somechatinfo').style.display == '')
                    document.getElementById('somechatinfo').style.display = 'none';

                if (document.getElementById('bottommenuchhis').style.display == '')
                    document.getElementById('bottommenuchhis').style.display = 'none';

                if (document.getElementById('comentsbar').style.display == '')
                    document.getElementById('comentsbar').style.display = 'none';

                document.getElementById('infofield').innerHTML = 'Загрузка'

                await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
                    "headers": {
                        "content-type": "application/json",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin"
                    },
                    "body": `{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"channelUserFullTextLike\":\"${lusid}\",\"tsFrom\":\"${from}T00:00:00.000Z\",\"tsTo\":\"${to}T23:59:59.059Z\",\"orderBy\":\"ts\",\"orderDirection\":\"Desc\",\"page\":1,\"limit\":10}`,
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                }).then(r => r.json()).then(r => data = r)
                console.log(data)

                if (data.total == 0)
                    alert("В выбранном диапазоне чатов от пользователя не найдено. Попробуйте, пожалуйста, выбрать другой, либо пользователь не обращался вовсе.")

                for (let i = 0; i < data.items.length; i++) {

                    let tmestmp = new Date((data.items[i].ts.split('[GMT]'))[0])
                    let tshrs;
                    let tsmin
                    let day;
                    let month;
                    let actstatus = '';
                    let marksarr;
                    if (tmestmp.getMonth() < 9)
                        month = "0" + (tmestmp.getMonth() + 1)
                    else
                        month = (tmestmp.getMonth() + 1)
                    if (tmestmp.getDate() < 10)
                        day = "0" + tmestmp.getDate()
                    else
                        day = tmestmp.getDate()
                    let year = tmestmp.getFullYear();
                    if ((tmestmp.getUTCHours() + 3) < 10)
                        tshrs = "0" + (tmestmp.getUTCHours() + 3);
                    else if ((tmestmp.getUTCHours() + 3) >= 24)
                        tshrs = '0' + ((tmestmp.getUTCHours() + 3 - 24))
                    else tshrs = (tmestmp.getUTCHours() + 3);

                    if (tmestmp.getMinutes() < 10)
                        tsmin = "0" + tmestmp.getMinutes();
                    else tsmin = tmestmp.getMinutes();

                    if (data.items[i].stats.rate == undefined || data.items[i].stats.rate.rate == undefined)
                        marksarr = '⭕'
                    else
                        marksarr = data.items[i].stats.rate.rate

                    if (data.items[i].stats.usedStatuses == "AssignedToOperator")
                        actstatus = "🛠"
                    else actstatus = '';

                    //сюда также допилить классы и  менять их в зависимости от темы

                    if (data.items[i].channelUser.payload.userFullName == undefined)
                        foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700;">' + data.items[i].channelUser.payload.userType + '</span>' + ' ' + data.items[i].channelUser.fullName + '<span style="color: MediumSeaGreen; font-weight:700;">' + ' Оценка: ' + '</span>' + marksarr + actstatus + '</span>' + '<br>'
                    else
                        foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700;">' + data.items[i].channelUser.payload.userType + '</span>' + ' ' + data.items[i].channelUser.payload.userFullName + '<span style="color: MediumSeaGreen; font-weight:700;">' + ' Оценка: ' + '</span>' + marksarr + actstatus + '</span>' + '<br>'


                }

                document.getElementById('infofield').innerHTML = foundarr;
                checkandchangestyle()

                for (let i = 0; i < document.getElementsByClassName('chatlist').length; i++) {
                    document.getElementsByClassName('chatlist')[i].title = data.items[i].conversationId

                    document.getElementsByClassName('chatlist')[i].onclick = async () => {

                        await fetch("https://skyeng.autofaq.ai/api/conversations/" + document.getElementsByClassName('chatlist')[i].title).then(r => r.json()).then(r => convdata = r)
                        console.log(convdata)

                        if (convdata.status != null && convdata.status == 'AssignedToOperator')
                            isChatOnOperator = true
                        else isChatOnOperator = false;

                        fillchatbox();
                        checkandchangestyle();
                    } // конец функции клика по списку в найденном чате
                }

            } else if (document.getElementById('chatuserhis').value == '' && document.getElementById('hashchathis').value != '') { //если пользователь не введен, но введн хеш чата
                flagsearch = 'searchbyhash'
                await fetch("https://skyeng.autofaq.ai/api/conversations/" + document.getElementById('hashchathis').value.trim()).then(r => r.json()).then(r => convdata = r)
                console.log(convdata)

                if (convdata.status != null && convdata.status == 'AssignedToOperator')
                    isChatOnOperator = true
                else isChatOnOperator = false;

                fillchatbox();
                checkandchangestyle();

            } else alert("Введено и ID пользователя и хеш чата, или оба поля пустые. Пожалуйста, выберите что-то одно и повторите попытку.")
        } // конец функции клика найти

        document.getElementById('back_to_chat_his').onclick = () => { // функция обработки нажатия кнопки "Вернуться"
            document.getElementById('infofield').innerHTML = '';
            document.getElementById('placeusid').innerText = '';
            document.getElementById('placechatid').innerText = '';
            document.getElementById('somechatinfo').style.display = 'none';
            document.getElementById('bottommenuchhis').style.display = 'none';
            document.getElementById('comentsbar').style.display = 'none';

            if (foundarr != '' && foundarr != null && foundarr != undefined) {
                document.getElementById('infofield').innerHTML = foundarr;
                checkandchangestyle();

                for (let i = 0; i < document.getElementsByClassName('chatlist').length; i++) {
                    if (flagsearch == 'searchbyuser')
                        document.getElementsByClassName('chatlist')[i].title = data.items[i].conversationId
                    else if (flagsearch == 'searchbyoperator')
                        document.getElementsByClassName('chatlist')[i].title = operchatsdata.items[i].conversationId
                    else if (flagsearch == 'searchbyhash') {
                        if (typeof (operchatsdata) !== 'undefined' && typeof (data) === 'undefined')
                            document.getElementsByClassName('chatlist')[i].title = operchatsdata.items[i].conversationId
                        else if (typeof (data) !== 'undefined' && typeof (operchatsdata) === 'undefined')
                            document.getElementsByClassName('chatlist')[i].title = data.items[i].conversationId
                        else if (typeof (data) !== 'undefined' && typeof (operchatsdata) !== 'undefined')
                            document.getElementsByClassName('chatlist')[i].title = data.items[i].conversationId
                    }

                    document.getElementsByClassName('chatlist')[i].onclick = async () => {

                        await fetch("https://skyeng.autofaq.ai/api/conversations/" + document.getElementsByClassName('chatlist')[i].title).then(r => r.json()).then(r => convdata = r)
                        console.log(convdata)

                        if (convdata.status != null && convdata.status == 'AssignedToOperator')
                            isChatOnOperator = true
                        else isChatOnOperator = false;

                        fillchatbox();
                        checkandchangestyle();
                    } // конец функции клика по списку в найденном чате
                }
            }
        } // конец обработки функции нажатия "Вернуться"

        document.getElementById('refreshchat').onclick = async () => { // функция обработки нажатия кнопки "обновить"
            if (document.getElementById('placechatid').innerText != '') {
                document.getElementById('infofield').innerHTML = '';

                await fetch("https://skyeng.autofaq.ai/api/conversations/" + document.getElementById('placechatid').innerText).then(r => r.json()).then(r => convdata = r)
                console.log(convdata)

                if (convdata.status != null && convdata.status == 'AssignedToOperator')
                    isChatOnOperator = true
                else isChatOnOperator = false;

                fillchatbox();
                checkandchangestyle();
            }
        } // конец обработчика кнопки "Обновить"

        document.getElementById('takechat').onclick = function () { //обработчик функции взятия чата
            var result = confirm("Вы действительно желаете забрать чат?");
            if (result) {
                let chat_id = document.getElementById('placechatid').innerText;
                let operator_id = operatorId;

                fetch("https://skyeng.autofaq.ai/api/conversation/assign", {
                    "headers": {
                        "content-type": "application/json"
                    },
                    "credentials": "include",
                    "body": `{\"command\":\"DO_ASSIGN_CONVERSATION\",\"conversationId\":\"${chat_id}\",\"assignToOperatorId\":\"${operator_id}\"}`,
                    "method": "POST"
                });
            }
        } // конец обработчика нажатия кнопки "Забрать"

        document.getElementById('startchat').onclick = () => { //обработчик функции начала чата с пользователем
            let answer = confirm("Вы действительно желаете начать чат с пользователем?");
            if (answer) {
                if (isChatOnOperator == false) {
                    let polzid = document.getElementById('placeusid').innerText.trim();
                    document.getElementById('startchat').style.background = 'green';
                    startnewchatfast(polzid)
                    setTimeout(() => {
                        document.getElementById('startchat').style.background = '';
                    }, 3000)
                } else alert('Чат не открыт, так как есть активный чат на операторе!')
            }
        } // конец обработчика нажатия кнопки Начать чат с пользователем

        document.getElementById('opencmtbar').onclick = function () { //обработчик функции начала чата с пользователем
            if (document.getElementById('comentsbar').style.display == '')
                document.getElementById('comentsbar').style.display = 'none';
            else
                document.getElementById('comentsbar').style.display = '';

            for (let i = 0; i < radiobtnsarray1.length; i++) {
                if (radiobtnsarray1[i].value == 'Notes' && radiobtnsarray1[i].checked == true) {
                    document.getElementById('msgftochatornotes1').style.background = 'LightGrey';
                } else if (radiobtnsarray1[i].value == 'Chat' && radiobtnsarray1[i].checked == true) {
                    document.getElementById('msgftochatornotes1').style.background = 'white';
                }

                radiobtnsarray1[i].onclick = () => {
                    if (radiobtnsarray1[i].value == 'Notes' && radiobtnsarray1[i].checked == true) {
                        document.getElementById('msgftochatornotes1').style.background = 'LightGrey';
                    } else if (radiobtnsarray1[i].value == 'Chat' && radiobtnsarray1[i].checked == true) {
                        document.getElementById('msgftochatornotes1').style.background = 'white';
                    }
                }
            }

            document.getElementById('hidecmtfield').onclick = function () {
                document.getElementById('comentsbar').style.display = 'none';
            }
        } // конец обработчика нажатия кнопки Начать чат с пользователем

        document.getElementById('reassign').onclick = () => { //кнопка перевода чата на выбранного из верхнего списка операторы на линии и открытом чате, который желаем переветси

            let arops = document.getElementById('operatorstp')
            let hashid = document.getElementById('placechatid').innerText;
            if (arops.children[0].selected != true && hashid != '') {
                for (let i = 1; i < arops.children.length; i++) {
                    if (arops.children[i].selected == true)
                        fetch("https://skyeng.autofaq.ai/api/conversation/assign", {
                            "headers": {
                                "content-type": "application/json",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin"
                            },
                            "body": `{\"command\":\"DO_ASSIGN_CONVERSATION\",\"conversationId\":\"${hashid}\",\"assignToOperatorId\":\"${arops.children[i].value}\"}`,
                            "method": "POST",
                            "mode": "cors",
                            "credentials": "include"
                        })
                }
            } else alert("Условия передачи чата не выполнены: не выбран оператор, не открыт чат, который требуется переводить")
        }



        document.getElementById('sendmsgtochatornotes').onclick = async () => { // обработчик кнопки Отправить в зависимости от радиокнопки в заметки или в чат

            let radiobtnsarray = document.getElementsByName('chatornotes')

            for (let i = 0; i < radiobtnsarray.length; i++) {
                if (radiobtnsarray[i].value == 'Notes' && radiobtnsarray[i].checked == true) {

                    let chathashfromdiv = document.getElementById('placechatid').innerText
                    let sesid;

                    await fetch("https://skyeng.autofaq.ai/api/conversations/" + chathashfromdiv)
                        .then(r => r.json()).then(r => rdata = r)
                    sesid = rdata.sessionId;

                    let notemsg = '<p>' + document.getElementById('msgftochatornotes').value + '</p>';

                    fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
                        "headers": {
                            "accept": "*/*",
                            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                            "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryH2CK1t5M3Dc3ziNW",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin"
                        },
                        "body": "------WebKitFormBoundaryH2CK1t5M3Dc3ziNW\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + sesid + "\",\"conversationId\":\"" + chathashfromdiv + "\",\"text\":\"" + notemsg + "\",\"isComment\":true}\r\n------WebKitFormBoundaryH2CK1t5M3Dc3ziNW--\r\n",
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    });

                    document.getElementById('msgftochatornotes').value = ''

                    setTimeout(
                        async function () {
                            if (document.getElementById('placechatid').innerText != '') {
                                document.getElementById('infofield').innerHTML = '';

                                await fetch("https://skyeng.autofaq.ai/api/conversations/" + document.getElementById('placechatid').innerText).then(r => r.json()).then(r => convdata = r)
                                console.log(convdata)

                                fillchatbox();
                                checkandchangestyle();
                            }
                        }, 1000);

                } else if (radiobtnsarray[i].value == 'Chat' && radiobtnsarray[i].checked == true) {

                    let chathashfromdiv = document.getElementById('placechatid').innerText
                    let sesid;

                    await fetch("https://skyeng.autofaq.ai/api/conversations/" + chathashfromdiv)
                        .then(r => r.json()).then(r => rdata = r)
                    sesid = rdata.sessionId;

                    let notemsg = '<p>' + document.getElementById('msgftochatornotes').value + '</p>';

                    fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
                        "headers": {
                            "accept": "*/*",
                            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                            "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryFeIiMdHaxAteNUHd",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin"
                        },
                        "body": "------WebKitFormBoundaryFeIiMdHaxAteNUHd\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + sesid + "\",\"conversationId\":\"" + chathashfromdiv + "\",\"text\":\"" + notemsg + "\"}\r\n------WebKitFormBoundaryFeIiMdHaxAteNUHd--\r\n",
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    });

                    document.getElementById('msgftochatornotes').value = ''

                    setTimeout(
                        async function () {
                            if (document.getElementById('placechatid').innerText != '') {
                                document.getElementById('infofield').innerHTML = '';

                                await fetch("https://skyeng.autofaq.ai/api/conversations/" + document.getElementById('placechatid').innerText).then(r => r.json()).then(r => convdata = r)
                                console.log(convdata)

                                if (convdata.status != null && convdata.status == 'AssignedToOperator')
                                    isChatOnOperator = true
                                else isChatOnOperator = false;

                                fillchatbox();
                                checkandchangestyle();
                            }
                        }, 1000);
                }
            }
        }

        document.getElementById('sendmsgtochatornotes1').onclick = async () => { // обработчик кнопки Отправить в зависимости от радиокнопки в заметки или в чат

            let radiobtnsarray1 = document.getElementsByName('chatornotes1')

            for (let i = 0; i < radiobtnsarray1.length; i++) {
                if (radiobtnsarray1[i].value == 'Notes' && radiobtnsarray1[i].checked == true) {

                    let chathashfromdiv = document.getElementById('placechatid').innerText
                    let sesid;

                    await fetch("https://skyeng.autofaq.ai/api/conversations/" + chathashfromdiv)
                        .then(r => r.json()).then(r => rdata = r)
                    sesid = rdata.sessionId;

                    let notemsg = '<p>' + document.getElementById('msgftochatornotes1').value + '</p>';

                    fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
                        "headers": {
                            "accept": "*/*",
                            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                            "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryH2CK1t5M3Dc3ziNW",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin"
                        },
                        "body": "------WebKitFormBoundaryH2CK1t5M3Dc3ziNW\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + sesid + "\",\"conversationId\":\"" + chathashfromdiv + "\",\"text\":\"" + notemsg + "\",\"isComment\":true}\r\n------WebKitFormBoundaryH2CK1t5M3Dc3ziNW--\r\n",
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    });

                    document.getElementById('msgftochatornotes1').value = ''

                    setTimeout(
                        async function () {
                            if (document.getElementById('placechatid').innerText != '') {
                                document.getElementById('infofield').innerHTML = '';

                                await fetch("https://skyeng.autofaq.ai/api/conversations/" + document.getElementById('placechatid').innerText).then(r => r.json()).then(r => convdata = r)
                                console.log(convdata)

                                fillchatbox();
                                checkandchangestyle();
                            }
                        }, 1000);

                } else if (radiobtnsarray1[i].value == 'Chat' && radiobtnsarray1[i].checked == true) {

                    let chathashfromdiv = document.getElementById('placechatid').innerText
                    let sesid;

                    await fetch("https://skyeng.autofaq.ai/api/conversations/" + chathashfromdiv)
                        .then(r => r.json()).then(r => rdata = r)
                    sesid = rdata.sessionId;

                    let notemsg = '<p>' + document.getElementById('msgftochatornotes1').value + '</p>';

                    fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
                        "headers": {
                            "accept": "*/*",
                            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                            "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryFeIiMdHaxAteNUHd",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin"
                        },
                        "body": "------WebKitFormBoundaryFeIiMdHaxAteNUHd\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + sesid + "\",\"conversationId\":\"" + chathashfromdiv + "\",\"text\":\"" + notemsg + "\"}\r\n------WebKitFormBoundaryFeIiMdHaxAteNUHd--\r\n",
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    });

                    document.getElementById('msgftochatornotes1').value = ''

                    setTimeout(
                        async function () {
                            if (document.getElementById('placechatid').innerText != '') {
                                document.getElementById('infofield').innerHTML = '';

                                await fetch("https://skyeng.autofaq.ai/api/conversations/" + document.getElementById('placechatid').innerText).then(r => r.json()).then(r => convdata = r)
                                console.log(convdata)

                                if (convdata.status != null && convdata.status == 'AssignedToOperator')
                                    isChatOnOperator = true
                                else isChatOnOperator = false;

                                fillchatbox();
                                checkandchangestyle();
                            }
                        }, 1000);
                }
            }
        }


    }

    document.getElementById('suggestform').onclick = () => { // открыть форму для предложения и пожеланий
        if (document.getElementById('AF_Sugform').style.display == '')
            document.getElementById('AF_Sugform').style.display = 'none'
        else {
            document.getElementById('AF_Sugform').style.display = ''
			document.getElementById('idmymenu').style.display = 'none'

            let topiclisttgcls = document.getElementsByName('topicofsuggest')

            for (let i = 0; i < topiclisttgcls.length; i++) {
                topiclisttgcls[i].onclick = () => {
                    if (topiclisttgcls[i].checked && topiclisttgcls[i].value == 'Другое') {

                        document.getElementById('otheroptionchecked').classList.remove('otherfieldoff')
                        document.getElementById('otheroptionchecked').classList.add('otherfieldon')
                        document.getElementById('otheroptionchecked').removeAttribute('disabled')

                    } else {
                        document.getElementById('otheroptionchecked').classList.add('otherfieldoff')
                        document.getElementById('otheroptionchecked').classList.remove('otherfieldon')
                        document.getElementById('otheroptionchecked').setAttribute('disabled', 'disabled')
                    }
                }
            }


            document.getElementById('operatornamesuggest').value = afopername.split('-')[1];

            if (document.URL.split('/')[5] != '' && document.URL.split('/')[5] != undefined)
                document.getElementById('linktochatsuggest').value = "https://hdi.skyeng.ru/autofaq/conversation/-11/" + document.URL.split('/')[5]

            document.getElementById('refreshchathash').onclick = () => {
                if (document.URL.split('/')[5] != '' && document.URL.split('/')[5] != undefined)
                    document.getElementById('linktochatsuggest').value = "https://hdi.skyeng.ru/autofaq/conversation/-11/" + document.URL.split('/')[5]
            }

            document.getElementById('getdocsuggestions').onclick = () => {
                window.open("https://docs.google.com/spreadsheets/d/1bTR1BBwo57H1IOblb4Xkg9irf6jw0QNGzQOgrm_wr-c/edit#gid=706470682")
            }

            document.getElementById('sendtosuggestdoc').onclick = () => {

                let opnamevar = encodeURIComponent(document.getElementById('operatornamesuggest').value)
                let chatlink = document.getElementById('linktochatsuggest').value
                let topiclist = document.getElementsByName('topicofsuggest')
                let checkedtopic;
                let textsuggest = encodeURIComponent(document.getElementById('textsuggest').value)

                for (let i = 0; i < topiclist.length; i++) {
                    if (topiclist[i].checked && topiclist[i].value != 'Другое') {
                        checkedtopic = encodeURIComponent(topiclist[i].value);
                        let body1 = 'entry.1869164503=' + opnamevar + '&entry.1173970301=' + chatlink + '&entry.1369141134=' + checkedtopic + '&entry.2046808006=' + textsuggest

                        let options1 = {
                            "headers": {
                                "content-type": "application/x-www-form-urlencoded",
                            },
                            "body": body1,
                            "method": "POST",
                        }

                        document.getElementById('responseTextarea1').value = JSON.stringify(options1)
                        document.getElementById('responseTextarea2').value = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSdfxamf3lm7vsWj4VKbh6DUu4d2Q39vnQ1RfFglQ4Zy34R6_g/formResponse'
                        if (document.getElementById('responseTextarea3') != null)
                            document.getElementById('responseTextarea3').value = ''
                        document.getElementById('sendResponse').click()

                        console.log('Выбрана тема из предложенных')
                        sendComment('https://skr.sh/sEHecwURANZ')
                        document.getElementById('sendtosuggestdoc').innerText = "Отправлено✅"
                        setTimeout(() => {
                            document.getElementById('sendtosuggestdoc').innerText = "Отправить"
                            document.getElementById('AF_Sugform').style.display = 'none'
                        }, 3000)
                    } else if (topiclist[i].checked && topiclist[i].value == 'Другое') {
                        checkedtopic = encodeURIComponent(document.getElementById('otheroptionchecked').value)

                        let body2 = 'entry.1173970301=' + chatlink + '&entry.1369141134.other_option_response=' + checkedtopic + '&entry.1369141134=__other_option__' + '&entry.1869164503=' + opnamevar + '&entry.2046808006=' + textsuggest

                        let options2 = {
                            "headers": {
                                "content-type": "application/x-www-form-urlencoded",
                            },
                            "body": body2,
                            "method": "POST",
                        }

                        document.getElementById('responseTextarea1').value = JSON.stringify(options2)
                        document.getElementById('responseTextarea2').value = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSdfxamf3lm7vsWj4VKbh6DUu4d2Q39vnQ1RfFglQ4Zy34R6_g/formResponse'
                        if (document.getElementById('responseTextarea3') != null)
                            document.getElementById('responseTextarea3').value = ''
                        document.getElementById('sendResponse').click()

                        console.log('Выбрана опция Другое')
                        sendComment('https://skr.sh/sEHecwURANZ')
                        document.getElementById('sendtosuggestdoc').innerText = "Отправлено✅"
                        setTimeout(() => {
                            document.getElementById('sendtosuggestdoc').innerText = "Отправить"
                            document.getElementById('AF_Sugform').style.display = 'none'
                        }, 3000)
                    }

                }

                document.getElementById('linktochatsuggest').value = ''
                document.getElementById('otheroptionchecked').value = ''
                document.getElementById('textsuggest').value = ''

            }
        }
    }
	
document.getElementById('JiraOpenForm').onclick = function() { // открывает поле для работой с JIRA поиском
	    if (document.getElementById('AF_Jira').style.display == 'none') {
            document.getElementById('AF_Jira').style.display = ''
			
			let jiratkn;
			
			async function checkJiraToken() {
				document.getElementById('responseTextarea1').value = '{}'
				document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/"
				document.getElementById('responseTextarea3').value = 'getjiratoken'
				document.getElementById('sendResponse').click()

				setTimeout(async function () {

					document.getElementById('responseTextarea1').value = '{}'
					document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/"
					document.getElementById('responseTextarea3').value = 'getjiratoken'
					document.getElementById('sendResponse').click()

					jiratkn = await document.getElementById('responseTextarea1').getAttribute('getjiratoken');
					if (jiratkn.match(/name="atlassian-token" content="(.*lin)/) != null) {
						jiratkn = jiratkn.match(/name="atlassian-token" content="(.*lin)/)[1];
						document.getElementById('searchjiratknstatus').innerText = "🟢"
					} else {
						alert("Авторизуйтесь в системе Jira, чтобы при поиске запрос был отправлен");
						document.getElementById('searchjiratknstatus').innerText = "🔴"
					}
					document.getElementById('responseTextarea1').removeAttribute('getjiratoken');
					console.log("TOKEN: " + jiratkn);
				}, 5000)
			}
			
			checkJiraToken()
			
	document.getElementById('ClearJiraData').onclick = function() {
		document.getElementById('testJira').value = '';
		document.getElementById('issuetable').innerText = ''
	}
				 
	document.getElementById('RefreshJiraStatus').onclick = checkJiraToken
			
	document.getElementById('getJiraTasks').onclick = function () {
			  let rezissuetable;

        document.getElementById('responseTextarea1').value = `{
                     "headers": {
                        "__amdmodulename": "jira/issue/utils/xsrf-token-header",
                       "accept": "*/*",
                        "sec-fetch-mode": "cors",
                       "sec-fetch-site": "same-origin",
                       "x-atlassian-token": "no-check",
                       "x-requested-with": "XMLHttpRequest"
                     },
                     "body": "startIndex=0&filterId=21266&jql=project+in+(VIM%2C+MP%2C+MV%2C+KIDS%2C+TS%2C+ADULT%2C+ESM%2C+AUTH%2C+BILL%2C+COMM%2C+KG%2C+KIDSMOB%2C+MATH%2C+MOBACK%2C+MOBT%2C+SS%2C+ST%2C+SMMOB%2C+STUDCAB)+AND+issuetype+in+(Bug%2C+Task)+AND+status+!%3D+closed+AND+Reports+%3E+0+AND+resolution+in+(Unresolved%2C+Incomplete%2C+%22Cannot+Reproduce%22)+AND+text+~%22+${testJira.value}+%22+ORDER+BY+updated&layoutKey=list-view",
                     "method": "POST",
                     "mode": "cors",
                     "credentials": "include"
               }`
        document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/rest/issueNav/1/issueTable"
        document.getElementById('responseTextarea3').value = 'getissuetable'
        document.getElementById('sendResponse').click()

        async function getJiraTask() {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/rest/issueNav/1/issueTable"
            document.getElementById('responseTextarea3').value = ''
            document.getElementById('sendResponse').click()

            rezissuetable = JSON.parse(document.getElementById('responseTextarea1').getAttribute('getissuetable'))
            rezissuetable = await rezissuetable;
            if (rezissuetable == null)
                setTimeout(getJiraTask, 1000)
            else {
                //   rezissuetable = JSON.parse(rezissuetable)
                document.getElementById('responseTextarea1').removeAttribute('getissuetable')

                let issues = [];
				let temporarka;
                if (rezissuetable.issueTable.issueKeys.length > 50)
                    rezissuetable.issueTable.issueKeys.length = 50;
                for (let i = 0; i < rezissuetable.issueTable.issueKeys.length; i++) {

                    if (rezissuetable.issueTable.issueKeys[i] != undefined) {
						
						if (rezissuetable.issueTable.table.match(/(\w+-\d+">.*?).<\/a>/gmi).filter(function (item, index, array) { if (index % 2 != 0) return item; })[i].replace('">',' – ').toLowerCase().indexOf(document.getElementById('testJira').value.toLowerCase()) !=-1) {
							temporarka = rezissuetable.issueTable.table.match(/(\w+-\d+">.*?).<\/a>/gmi).filter(function (item, index, array) { if (index % 2 != 0) return item; })[i].replace('">',' – ').replace(new RegExp(document.getElementById('testJira').value,'i'), `<span style="color:MediumSpringGreen; font-weight:700; text-shadow:1px 2px 5px rgb(0 0 0 / 55%);">${document.getElementById('testJira').value.toUpperCase()}</span>`)
						} else {
							temporarka = rezissuetable.issueTable.table.match(/(\w+-\d+">.*?).<\/a>/gmi).filter(function (item, index, array) { if (index % 2 != 0) return item; })[i].replace('">',' – ')
						}
								

                        issues += '<span style="color: #00FA9A">&#5129;</span>' + `<img src="${rezissuetable.issueTable.table.match(/https:\/\/jira.skyeng.tech\/images\/icons\/priorities\/.*svg/gm)[i]}" style="width:20px; height:25px;" title="Приоритеты: ⛔ - Blocker, полностью залитая красная стрелка вверх - Critical, три красные стрелки вверх - Major, три синие вниз - Minor, ⭕ - Trivial">` + ' ' +'<a href="https://jira.skyeng.tech/browse/' + rezissuetable.issueTable.issueKeys[i] + '" onclick="" target="_blank" style="color: #ffe4c4">' + temporarka + '</a>' + '<span class = "jiraissues" style="margin-left: 10px; cursor: pointer">💬</span>' + '<span class="newcount" style="width:20px; margin-left: 5px; background:#3CB371">' + rezissuetable.issueTable.table.match(/(">.)*?([0-9]+)\n/gm)[i] + '</span>' + '<span class = "refreshissues" style="color:#ADFF2F; margin-left: 5px; cursor: pointer">&#69717;&#120783;</span>' + '</br>'

                    }

                }

                document.getElementById('issuetable').innerHTML = issues;

                let barray = document.querySelectorAll('.jiraissues');
                for (let j = 0; j < barray.length; j++) {
                    barray[j].onclick = function () {
                        sendComment("https://jira.skyeng.tech/browse/" + rezissuetable.issueTable.issueKeys[j]);
                        let b = document.URL.split('/')
                        fetch("https://skyeng.autofaq.ai/api/conversation/" + b[5] + "/payload", {
                            "headers": {
                                "accept": "*/*",
                                "content-type": "application/json",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin"
                            },
                            "body": "{\"conversationId\":\"${b[5]}\",\"elements\":[{\"name\":\"taskUrl\",\"value\":\"https://jira.skyeng.tech/browse/" + rezissuetable.issueTable.issueKeys[j] + "\"}]}",
                            "method": "POST",
                            "mode": "cors",
                            "credentials": "include"
                        })
                    }
                }

                let refreshissuesarr = document.querySelectorAll('.refreshissues');
                for (let f = 0; f < refreshissuesarr.length; f++) {
                    refreshissuesarr[f].onclick = function () {

                        document.getElementById('responseTextarea1').value = '{}'
                        document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/secure/AjaxIssueEditAction!default.jspa?decorator=none&issueId=" + rezissuetable.issueTable.issueIds[f]
                        document.getElementById('responseTextarea3').value = 'reportscount'
                        document.getElementById('sendResponse').click()

                        let count;
                        let jira_token;
                        let increasedcount;
                        setTimeout(async function () {
                            document.getElementById('responseTextarea1').value = '{}'
                            document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/secure/AjaxIssueEditAction!default.jspa?decorator=none&issueId=" + rezissuetable.issueTable.issueIds[f]
                            document.getElementById('responseTextarea3').value = 'reportscount'
                            document.getElementById('sendResponse').click()

                            let repcount = document.getElementById('responseTextarea1').getAttribute('reportscount')
                            repcount = await repcount;
                            jira_token = repcount.match(/"atl_token":"(.*lin)/)[1]
                            document.getElementById('responseTextarea1').removeAttribute('reportscount')

                            count = repcount.match(/customfield_15410.*?value=.*?(\d+)/)[1];
                            count = parseInt(count);
                            increasedcount = count + 1;
                            increasedcount = increasedcount.toString();
                            console.log("count=" + count + " increasedcount " + increasedcount);

                            setTimeout(function () {

                                document.getElementById('responseTextarea1').value = `{
						"headers": {
							"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
						    "sec-fetch-mode": "cors",
							"sec-fetch-site": "same-origin",
							"x-requested-with": "XMLHttpRequest",
							"x-sitemesh-off": "true"
									},
						"body": "customfield_15410=${increasedcount}&issueId=${rezissuetable.issueTable.issueIds[f]}&atl_token=${jira_token}&singleFieldEdit=true&fieldsToForcePresent=customfield_15410",
						  "method": "POST",
						  "mode": "cors",
						  "credentials": "include"
							}`
                                document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/secure/AjaxIssueAction.jspa?decorator=none"
                                document.getElementById('responseTextarea3').value = ''
                                document.getElementById('sendResponse').click()
                                let newinfocount = document.querySelectorAll('.newcount');
                                newinfocount[f].innerHTML = increasedcount;
                                increasedcount = "";
                            }, 1000);
                        }, 1000)
                    }
                }

                console.log(rezissuetable.issueTable.issueKeys);
                setTimeout(function () { issues = []; }, 5000)
            }

        }

        setTimeout(getJiraTask, 1000)
		
		}
		    // Просмотр таски по джира по ее коду и номеру
    document.getElementById('getJiraTasks').ondblclick = function () {
        if (document.getElementById('AF_Jira').style.display == 'none') {
            document.getElementById('AF_Jira').style.display = ''
        }


        let rezissuetable;

        document.getElementById('responseTextarea1').value = `{
				  "headers": {
					"accept": "*/*",
					"sec-fetch-dest": "empty",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "same-origin",
					"x-requested-with": "XMLHttpRequest"
				  },
				  "referrerPolicy": "strict-origin-when-cross-origin",
				  "method": "GET",
				  "mode": "cors",
				  "credentials": "include"
               }`
        document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/rest/quicksearch/1.0/productsearch/search?q=" + document.getElementById('testJira').value;
        document.getElementById('responseTextarea3').value = 'getissuetable1'
        document.getElementById('sendResponse').click()

        async function getJiraTask1() {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/rest/quicksearch/1.0/productsearch/search?q=" + document.getElementById('testJira').value;
            document.getElementById('responseTextarea3').value = 'getissuetable1'
            document.getElementById('sendResponse').click()


            rezissuetable = JSON.parse(document.getElementById('responseTextarea1').getAttribute('getissuetable1'))
            rezissuetable = await rezissuetable;
            document.getElementById('responseTextarea1').removeAttribute('getissuetable1')
            if (rezissuetable != null) {
                let issues = [];
                issues = '<span style="color: #00FA9A">&#5129;</span>' + '<a href="' + rezissuetable[0].items[0].url + '" onclick="" target="_blank" style="color: #ffe4c4">' + rezissuetable[0].items[0].subtitle + " - " + rezissuetable[0].items[0].title + '</a>' + " " + '<span class = "jiraissues" style="margin-left: 10px; cursor: pointer">💬</span>';

                document.getElementById('issuetable').innerHTML = issues;

                let barray = document.querySelector('.jiraissues');
                barray.onclick = function () {
                    sendComment(rezissuetable[0].items[0].url)
                    let b = document.URL.split('/')
                    fetch("https://skyeng.autofaq.ai/api/conversation/" + b[5] + "/payload", {
                        "headers": {
                            "accept": "*/*",
                            "content-type": "application/json",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin"
                        },
                        "body": "{\"conversationId\":\"${b[5]}\",\"elements\":[{\"name\":\"taskUrl\",\"value\":\"" + rezissuetable[0].items[0].url + "\"}]}",
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    })
                }

                setTimeout(function () { issues = []; testJira.value = ""; }, 5000)
            }
        }

        setTimeout(getJiraTask1, 1000)
    }

    let searchJiraByEnter = document.querySelector('#testJira'); //по Enter запускает поиск по Jira
    searchJiraByEnter.addEventListener('keydown', event => {
        if (event.key === "Enter") {
            document.querySelector('#getJiraTasks').click()
        }
    })
			
			
        } else if (document.getElementById('AF_Jira').style.display == '') {
			document.getElementById('AF_Jira').style.display = 'none'
		}
}

    document.getElementById('otkaz').onclick = () => { // открыть форму Отказ от помощи
        if (document.getElementById('AF_Refuseformnew').style.display == '')
            document.getElementById('AF_Refuseformnew').style.display = 'none'
        else {
            document.getElementById('AF_Refuseformnew').style.display = ''
			document.getElementById('idmymenu').style.display = 'none'

            let objSelIssue = document.getElementById("userissue");
            let objSelSolution = document.getElementById("howissuesolverd");

            function addOption(oListbox, text, value)  //функция добавления опции в список
            {
                var oOption = document.createElement("option");
                oOption.appendChild(document.createTextNode(text));
                oOption.setAttribute("value", value);
                oListbox.appendChild(oOption);
            }

            let issuefromdoc;
            let issuecontainer;
            let solutionfromdoc;
            let solutioncontainer;

            async function getissueandsolution() {
                if (objSelIssue.children.length == 1 && objSelSolution.children.length == 1) {
                    document.getElementById('send2doc').innerText = 'Загрузка'

                    issuefromdoc = 'https://script.google.com/macros/s/AKfycbyBl2CvdFSi2IXYDTkCroJJjlP63NMBfSsp6TwXYYGfwct0YT1_gnTumsdFbcTpR7KksA/exec'
                    await fetch(issuefromdoc).then(r => r.json()).then(r => issuedata = r)
                    issuecontainer = issuedata.result;
                    console.log(issuedata.result) //получим список проблем

                    for (let i = 0; i < issuecontainer.length; i++) {
                        addOption(objSelIssue, `${issuecontainer[i][0]}`, `${issuecontainer[i][0]}`)
                    }

                    solutionfromdoc = 'https://script.google.com/macros/s/AKfycbxut3AuCkPNsK_sR7zxxF8B7xFelbTPnR_iEywL1qo0BXbKbLiBRilGuKFm2XnPcCNdHQ/exec'
                    await fetch(solutionfromdoc).then(r => r.json()).then(r => solutiondata = r)
                    solutioncontainer = solutiondata.result;
                    console.log(solutiondata.result) //получим список как решилось

                    for (let i = 0; i < solutioncontainer.length; i++) {
                        addOption(objSelSolution, `${solutioncontainer[i][0]}`, `${solutioncontainer[i][0]}`)
                    }

                    document.getElementById('send2doc').innerText = 'Отправить'
                } else {
                    document.getElementById('send2doc').innerText = 'Отправить'
                }

            }

            getissueandsolution();

            //unhide fields when choose 'other'
            let flagotherproblem = 0;
            let problemlist = document.getElementById('userissue')

            problemlist.onchange = () => {

                for (let i = 0; i < problemlist.children.length; i++) {

                    if (problemlist.children[i].selected == true && problemlist.children[i].value == 'Другое') {

                        document.getElementById('otherproblem').classList.remove('otherfieldoff')
                        document.getElementById('otherproblem').classList.add('otherfieldon')
                        document.getElementById('otherproblem').removeAttribute('disabled')
                        flagotherproblem = 1;

                    } else {
                        document.getElementById('otherproblem').classList.add('otherfieldoff')
                        document.getElementById('otherproblem').classList.remove('otherfieldon')
                        document.getElementById('otherproblem').setAttribute('disabled', 'disabled')
                        flagotherproblem = 0;
                    }
                }
            }

            let flagothersolved = 0;
            let solvedlist = document.getElementById('howissuesolverd')

            solvedlist.onchange = () => {

                for (let i = 0; i < solvedlist.children.length; i++) {

                    if (solvedlist.children[i].selected == true && solvedlist.children[i].value == 'Другое') {

                        document.getElementById('othersolved').classList.remove('otherfieldoff')
                        document.getElementById('othersolved').classList.add('otherfieldon')
                        document.getElementById('othersolved').removeAttribute('disabled')
                        flagothersolved = 1;

                    } else {
                        document.getElementById('othersolved').classList.add('otherfieldoff')
                        document.getElementById('othersolved').classList.remove('otherfieldon')
                        document.getElementById('othersolved').setAttribute('disabled', 'disabled')
                        flagothersolved = 0;
                    }
                }
            }

            document.getElementById('refreshoptions').onclick = async function () {
                objSelIssue.length = 1;
                objSelSolution.length = 1;

                document.getElementById('send2doc').innerText = 'Загрузка'

                issuefromdoc = 'https://script.google.com/macros/s/AKfycbyBl2CvdFSi2IXYDTkCroJJjlP63NMBfSsp6TwXYYGfwct0YT1_gnTumsdFbcTpR7KksA/exec'
                await fetch(issuefromdoc).then(r => r.json()).then(r => issuedata = r)
                issuecontainer = issuedata.result;
                console.log(issuedata.result) //получим список проблем

                for (let i = 0; i < issuecontainer.length; i++) {
                    addOption(objSelIssue, `${issuecontainer[i][0]}`, `${issuecontainer[i][0]}`)
                }

                solutionfromdoc = 'https://script.google.com/macros/s/AKfycbxut3AuCkPNsK_sR7zxxF8B7xFelbTPnR_iEywL1qo0BXbKbLiBRilGuKFm2XnPcCNdHQ/exec'
                await fetch(solutionfromdoc).then(r => r.json()).then(r => solutiondata = r)
                solutioncontainer = solutiondata.result;
                console.log(solutiondata.result) //получим список как решилось

                for (let i = 0; i < solutioncontainer.length; i++) {
                    addOption(objSelSolution, `${solutioncontainer[i][0]}`, `${solutioncontainer[i][0]}`)
                }

                document.getElementById('send2doc').innerText = 'Отправить'

            }

            // end of it


            if (document.URL.split('/')[5] != '' && document.URL.split('/')[5] != undefined)
                document.getElementById('chatlnk').value = "https://skyeng.autofaq.ai/logs/" + document.URL.split('/')[5]

            document.getElementById('refreshhashrefuseform').onclick = () => {
                if (document.URL.split('/')[5] != '' && document.URL.split('/')[5] != undefined)
                    document.getElementById('chatlnk').value = "https://skyeng.autofaq.ai/logs/" + document.URL.split('/')[5]
                else document.getElementById('chatlnk').value = ''
            }

            let sendrefuseformbyenter = document.querySelector('#userissue'); //по Enter отправляет в форму отказа но еще тестится
            sendrefuseformbyenter.addEventListener('keydown', event => {
                if (event.key === "Enter") {
                    document.querySelector('#send2doc').click()
                }
            })

            let textrefuseformsolutionbyenter = document.querySelector('#howissuesolverd'); //по Enter отправляет в форму отказа но еще тестится
            textrefuseformsolutionbyenter.addEventListener('keydown', event => {
                if (event.key === "Enter") {
                    document.querySelector('#send2doc').click()
                }
            })

            document.getElementById('send2doc').onclick = () => {

                let textclientsolution;
                let textaskclient;
                let otherproblemtext;
                let othersolvedtext;
                let body2;

                let flagempty = 0;

                if (document.getElementById('chatlnk').value.length < 3){
                    document.getElementById('chatlnk').style.backgroundColor = 'red';
                    flagempty = 1;    
                    } else {
                    document.getElementById('chatlnk').style.backgroundColor = '';
                    }
                
                if (document.getElementById('userissue').children[0].selected == true){
                    document.getElementById('userissue').style.backgroundColor = 'red';
                    flagempty = 1;    
                    } else {
                        document.getElementById('userissue').style.backgroundColor = '';
                    }

                if (document.getElementById('otherproblem').disabled != true && document.getElementById('otherproblem').value.length < 3){
                    document.getElementById('otherproblem').style.backgroundColor = 'red';
                    flagempty = 1;
                    } else {
                        document.getElementById('otherproblem').style.backgroundColor = '';    
                    }

                if (document.getElementById('howissuesolverd').children[0].selected == true){
                    document.getElementById('howissuesolverd').style.backgroundColor = 'red';
                    flagempty = 1;    
                    } else {
                        document.getElementById('howissuesolverd').style.backgroundColor = '';
                    }
                
                if (document.getElementById('othersolved').disabled != true && document.getElementById('othersolved').value.length < 3){
                    document.getElementById('othersolved').style.backgroundColor = 'red';
                    flagempty = 1;    
                } else {
                    document.getElementById('othersolved').style.backgroundColor = '';
                }

                if (flagempty == 0){
                    let chatlink = document.getElementById('chatlnk').value

                    for (let i = 0; i < document.getElementById('userissue').children.length; i++) {
                        if (document.getElementById('userissue').children[i].selected == true)
                            textaskclient = encodeURIComponent(document.getElementById('userissue').children[i].value)
                    }

                    for (let i = 0; i < document.getElementById('howissuesolverd').children.length; i++) {
                        if (document.getElementById('howissuesolverd').children[i].selected == true)
                            textclientsolution = encodeURIComponent(document.getElementById('howissuesolverd').children[i].value)
                    }

                    if (flagotherproblem == 0 && flagothersolved == 0) {

                        body2 = 'entry.1040202788=' + chatlink + '&entry.763930179=' + textaskclient + '&entry.870072493=' + textclientsolution


                    } else if (flagotherproblem == 1 && flagothersolved == 0) {

                        otherproblemtext = encodeURIComponent(document.getElementById('otherproblem').value)

                        body2 = 'entry.1040202788=' + chatlink + '&entry.763930179=' + textaskclient + '&entry.870072493=' + textclientsolution + '&entry.8206738=' + otherproblemtext
                        console.log(body2)

                        console.log('other problem =1  othersolve = 0')

                    } else if (flagotherproblem == 0 && flagothersolved == 1) {

                        othersolvedtext = encodeURIComponent(document.getElementById('othersolved').value)

                        body2 = 'entry.1040202788=' + chatlink + '&entry.763930179=' + textaskclient + '&entry.870072493=' + textclientsolution + '&entry.917004094=' + othersolvedtext
                        console.log(body2)

                        console.log('other problem =0  othersolve = 1')

                    } else if (flagotherproblem == 1 && flagothersolved == 1) {

                        otherproblemtext = encodeURIComponent(document.getElementById('otherproblem').value)
                        othersolvedtext = encodeURIComponent(document.getElementById('othersolved').value)

                        body2 = 'entry.1040202788=' + chatlink + '&entry.763930179=' + textaskclient + '&entry.870072493=' + textclientsolution + '&entry.917004094=' + othersolvedtext + '&entry.8206738=' + otherproblemtext
                        console.log(body2)

                    }

                    let options2 = {
                        "headers": {
                            "content-type": "application/x-www-form-urlencoded",
                        },
                        "body": body2,
                        "method": "POST",
                    }

                    document.getElementById('responseTextarea1').value = JSON.stringify(options2)
                    document.getElementById('responseTextarea2').value = 'https://docs.google.com/forms/d/e/1FAIpQLScXLf0uRuESjzpu0gR-kE7T5LcCblOQtqzadtcwnTUb4_vpnQ/formResponse'
                    if (document.getElementById('responseTextarea3') != null)
                        document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    sendComment('Отправка в документ "Отказ от помощи" прошла успешно')
                    document.getElementById('send2doc').innerText = "Отправлено✅"

                    setTimeout(() => {
                        document.getElementById('send2doc').innerText = "Отправить"
                        document.getElementById('AF_Refuseformnew').style.display = 'none'
                    }, 3000)

                    document.getElementById('chatlnk').value = ''
                    document.getElementById('userissue').children[0].selected = true
                    document.getElementById('howissuesolverd').children[0].selected = true
                    document.getElementById('othersolved').classList.add('otherfieldoff')
                    document.getElementById('othersolved').classList.remove('otherfieldon')
                    document.getElementById('othersolved').setAttribute('disabled', 'disabled')
                    document.getElementById('otherproblem').classList.add('otherfieldoff')
                    document.getElementById('otherproblem').classList.remove('otherfieldon')
                    document.getElementById('otherproblem').setAttribute('disabled', 'disabled')
                    document.getElementById('otherproblem').value = ''
                    document.getElementById('othersolved').value = ''
                }                
            }
        }
    }

    document.getElementById('butMarks').onclick = function () { //открыть форму для поиска оценок от пользователя
        if (document.getElementById('AF_Marks').style.display == '')
            document.getElementById('AF_Marks').style.display = 'none'
        else {
            document.getElementById('AF_Marks').style.display = ''
			document.getElementById('idmymenu').style.display = 'none'
					
            document.getElementById('findmarksstat').onclick = async function () {
                let tempval = document.getElementById('useridsearch').value.trim();
                document.getElementById('markstable').innerText = "Загрузка..."

                var date = new Date()

                day = month = ""
                if (date.getMonth() < 9)
                    month = "0" + (date.getMonth() + 1)
                else
                    month = (date.getMonth() + 1)
                if (date.getDate() < 10)
                    day = "0" + date.getDate()
                else
                    day = date.getDate()
                if (date.getHours() < 10)
                    hours = '0' + date.getHours()
                else
                    hours = date.getHours()
                if (date.getMinutes() < 10)
                    minutes = '0' + date.getMinutes()
                else
                    minutes = date.getMinutes()
                if (date.getSeconds() < 10)
                    seconds = '0' + date.getSeconds()
                else
                    seconds = date.getSeconds()

                secondDate = date.getFullYear() + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + ".000z"

                await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
                    "headers": {
                        "accept": "*/*",
                        "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                        "content-type": "application/json",
                        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin"
                    },
                    "referrer": "https://skyeng.autofaq.ai/tickets/archive",
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"channelUserFullTextLike\":\"" + tempval + "\",\"tsFrom\":\"2022-01-01T00:00:00.000Z\",\"tsTo\":\"" + secondDate + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Desc\",\"page\":1,\"limit\":100}",
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                }).then(r => r.json()).then(r => datamarks = r)

                let count = {};
                let clswoutmark = 0;
                let markscount = 0;
                let flagok = [];
                for (let i = 0; i < datamarks.items.length; i++) {
                    if (datamarks.items[i].stats.rate != undefined && datamarks.items[i].stats.rate.rate == undefined)
                        clswoutmark++;
                    if (datamarks.items[i].stats.rate != undefined && datamarks.items[i].stats.rate.rate != undefined)
                        flagok.push(datamarks.items[i].stats.rate.rate)
                }
                flagok.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
                console.log(count);
                if (count[1] == undefined)
                    count[1] = 0;
                if (count[2] == undefined)
                    count[2] = 0;
                if (count[3] == undefined)
                    count[3] = 0;
                if (count[4] == undefined)
                    count[4] = 0;
                if (count[5] == undefined)
                    count[5] = 0;
                markscount = (count[1] + count[2] + count[3] + count[4] + count[5]);
                document.getElementById('markstable').innerHTML = 'Пользователь 🕵️‍♀️: ' + tempval + '<br>' +
                    'Name: ' + datamarks.items[0].channelUser.fullName + '<br>' +
                    'Оценка 1 🤬: ' + count[1] + ' ................... ' + ((count[1] / markscount) * 100).toFixed(1) + '%' + '<br>' +
                    'Оценка 2 🤢: ' + count[2] + ' ................... ' + ((count[2] / markscount) * 100).toFixed(1) + "%" + '<br>' +
                    'Оценка 3 😐: ' + count[3] + ' ................... ' + ((count[3] / markscount) * 100).toFixed(1) + "%" + '<br>' +
                    'Оценка 4 🥴: ' + count[4] + ' ................... ' + ((count[4] / markscount) * 100).toFixed(1) + "%" + '<br>' +
                    'Оценка 5 😊: ' + count[5] + ' ................... ' + ((count[5] / markscount) * 100).toFixed(1) + '%' + '<br>' +
                    'Всего оценок: ' + markscount + '<br>' + 'Обращений с начала года: ' + datamarks.total + '<br>' +
                    'Оценки/кол-во обращений: ' + ((markscount / datamarks.total) * 100).toFixed(1) + '%' + '<br>' +
                    'Закрыто без оценок: ' + clswoutmark + ' ............. ' + (clswoutmark / datamarks.total * 100).toFixed(1) + '%' + '<br>' +
                    'Автозакрытие: ' + (datamarks.total - clswoutmark - markscount) + ' ....................... ' + ((datamarks.total - clswoutmark - markscount) / datamarks.total * 100).toFixed(1) + '%';
                document.getElementById('useridsearch').value = "";
            }

            document.getElementById('clearmarksstat').onclick = function () {
                document.getElementById('markstable').innerHTML = "";
            }
        }
    }

    document.getElementById('hideMe').onclick = function () { // скрытие окна ссылок
        if (document.getElementById('AF_Links').style.display == '')
            document.getElementById('AF_Links').style.display = 'none'
    }

    document.getElementById('hideMeLinksd').onclick = function () { // скрытие окна доступов
        if (document.getElementById('AF_Linksd').style.display == '')
            document.getElementById('AF_Linksd').style.display = 'none'
    }

    document.getElementById('hideMej').onclick = function () { // скрытие окна поиска по Jira
        if (document.getElementById('AF_Jira').style.display == '')
            document.getElementById('AF_Jira').style.display = 'none'
    }

    document.getElementById('hideMeMarks').onclick = function () { // скрытие окна поиска оценок от пользователя
        if (document.getElementById('AF_Marks').style.display == '')
            document.getElementById('AF_Marks').style.display = 'none'
    }

    document.getElementById('hideMeTT').onclick = function () { // скрытие окна предстоящих и прошедших занятиях
        if (document.getElementById('AF_Timetable').style.display == '')
            document.getElementById('AF_Timetable').style.display = 'none'

        document.getElementById('timetabledata').innerHTML = "";
    }

    document.getElementById('hideMeTechSum').onclick = function () { // скрытие окна инфо об устройстве пользователя
        if (document.getElementById('AF_TechSummary').style.display == '')
            document.getElementById('AF_TechSummary').style.display = 'none'

        document.getElementById('techsumdata').innerHTML = "";
    }

    document.getElementById('hideMeservice').onclick = function () { // скрытие окна вензель user info
        if (document.getElementById('AF_Service').style.display == '')
            document.getElementById('AF_Service').style.display = 'none'
    }

    document.getElementById('hideuserdatainfo').onclick = () => { // форма hide
        if (document.getElementById('userchatdata').style.display == '')
            document.getElementById('userchatdata').style.display = 'none'
    }

    document.getElementById('gotocrmhis').onclick = () => { //открывает СРМ пользователя паари в меню с историей чатов
        let fdata = document.getElementById('datafield').innerHTML
        fdata = fdata.match(/ID:.?\d+/)[0].split(' ')[1]
        window.open(`https://crm2.skyeng.ru/persons/${fdata}`)
    }

    document.getElementById('hideMeLessonStatus').onclick = function () { // скрытие окна статус урока
        if (document.getElementById('AF_LessonStatus').style.display == '') {
            document.getElementById('AF_LessonStatus').style.display = 'none'
            document.getElementById('statustable').innerText = "";
        }
    }

    document.getElementById('hideMeStat').onclick = function () { // скрытие окна работы со статистикой
        if (document.getElementById('AF_Stat').style.display == '')
            document.getElementById('AF_Stat').style.display = 'none'

    }

    document.getElementById('hideMeGrList').onclick = function () { // скрытие окна Список группы
        if (document.getElementById('AF_GrList').style.display == '') {
            document.getElementById('AF_GrList').style.display = 'none';
            document.getElementById('grlistinfo').innerText = "";
            document.getElementById('idgrouptolist').value = "";
        }
    }

    document.getElementById('creds').onclick = function () { // разная полезная актуальная информация
        alert("Актуальные креды для BrowserStack:                                                     login: skyeng.infra@gmail.com , pwd: QGe6^lY]xW=kvXY9tdqG@iIpfJl8bgmEv_L5");
    }

    document.getElementById('knoweledgebase').onclick = function () { // открытие Confluence БЗ 2.0
        window.open("https://confluence.skyeng.tech/pages/viewpage.action?pageId=25407293")
    }

    document.getElementById('datsyurl').onclick = function () { // открытие Календаря
        window.open("https://datsy.ru/")
    }

    document.getElementById('gettechsummary').onclick = async function () { //получает инфо об устройстве пользователя
        if (document.getElementById('AF_TechSummary').style.display == '')
            document.getElementById('AF_TechSummary').style.display = 'none'
        else
            document.getElementById('AF_TechSummary').style.display = ''
        let stid = document.getElementById('idstudent').value;
        stid = stid.trim();
        document.getElementById('techsumdata').innerText = "Загрузка информации";
        await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
            "headers": {
                "accept": "*/*",
                "content-type": "application/json",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://skyeng.autofaq.ai/tickets/archive",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"channelUserFullTextLike\":\"" + stid + "\",\"tsFrom\":\"2021-06-01T19:00:00.000Z\",\"tsTo\":\"2022-03-01T18:59:59.059Z\",\"orderBy\":\"ts\",\"orderDirection\":\"Desc\",\"page\":1,\"limit\":10}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(r => r.json()).then(data => infoarr = data);
        if (infoarr.items != "" || infoarr.total != 0) {
            document.getElementById('techsumdata').innerHTML = infoarr.items[0].channelUser.payload.techScreeningData;
        } else {
            document.getElementById('techsumdata').innerText = "Пользователь не обращался в чат, информация отсутствует";
        }
    }

    document.getElementById('getlessonstatus').onclick = function () { // получение инфы о статусе урока кто удалил кем
        let getdateset = new Date()
        let getyearLS = getdateset.getFullYear();
        let getcurmonthLS = (getdateset.getMonth() + 1)
        let todayLS = getdateset.getDate();
        if (getcurmonthLS < 10) {
            getcurmonthLS = "0" + (getdateset.getMonth() + 1)
        } else {
            getcurmonthLS = (getdateset.getMonth() + 1);
        }
        if (getdateset.getDate() < 10) {
            todayLS = "0" + getdateset.getDate();
            document.getElementById('dateFromLS').value = getyearLS + "-" + getcurmonthLS + "-" + "0" + (Number(todayLS) - 1);
            document.getElementById('dateToLS').value = getyearLS + "-" + getcurmonthLS + "-" + todayLS;
        } else {
            todayLS = getdateset.getDate();
            document.getElementById('dateFromLS').value = getyearLS + "-" + getcurmonthLS + "-" + (todayLS - 1);
            document.getElementById('dateToLS').value = getyearLS + "-" + getcurmonthLS + "-" + todayLS;
        }

        if (document.getElementById('AF_LessonStatus').style.display == '')
            document.getElementById('AF_LessonStatus').style.display = 'none'
        else
            document.getElementById('AF_LessonStatus').style.display = ''
    }

    let grdata = [];
    document.getElementById('getidgrouptolist').onclick = async function () {
        let dataarr = [];
        document.getElementById('grlistinfo').innerHTML = "";
        let tempgrid = document.getElementById('idgrouptolist').value;
        tempgrid = tempgrid.trim();

        document.getElementById('responseTextarea1').value = '{}'
        document.getElementById('responseTextarea2').value = "https://learning-groups-storage-api.skyeng.ru/api/v1/groupParticipants/getParticipants/" + tempgrid;
        document.getElementById('responseTextarea3').value = 'heredata'
        document.getElementById('sendResponse').click()

        setTimeout(async function () {
            document.getElementById('responseTextarea1').value = '{}'
            document.getElementById('responseTextarea2').value = "https://learning-groups-storage-api.skyeng.ru/api/v1/groupParticipants/getParticipants/" + tempgrid;
            document.getElementById('responseTextarea3').value = 'heredata'
            document.getElementById('sendResponse').click()
            grdata = await document.getElementById('responseTextarea1').getAttribute('heredata');
            //grdata = await grdata;
            grdata = JSON.parse(grdata);
            document.getElementById('responseTextarea1').removeAttribute('heredata');

            if (grdata != null || grdata != undefined) {
                for (let i = 0; i < grdata.data.students.length; i++) {
                    dataarr += [i + 1] + "." + '<span class="grstdcrm" style="cursor:pointer" title="открывает профиль в CRM">ℹID У:</span>' + grdata.data.students[i].userId + " ID услуги: " + grdata.data.students[i].educationServiceId + " " + '<span class="getstname" style="cursor:pointer" title="Узнать имя и фамилию ученика, если раз нажали не появилось нажмите через секунду второй раз, быстро на все глаза не нажимайте, иначе получите некорректную информацию">👁‍🗨</span>' + '<span class="stname"></span>' + '<br>';
                }
                if (grdata.data.teachers == null || grdata.data.teachers == undefined)
                    document.getElementById('grlistinfo').innerHTML = dataarr;
                else document.getElementById('grlistinfo').innerHTML = dataarr + '<br>' + " ID П " + grdata.data.teachers[0].userId;
            }

        }, 500)

        setTimeout(() => {
            let arstname = document.querySelectorAll('.stname');
            let getstnamearr = document.querySelectorAll('.getstname');
            for (let f = 0; f < getstnamearr.length; f++) {
                getstnamearr[f].onclick = function () {

                    document.getElementById('responseTextarea1').value = `{
                                               "headers": {
                                                "accept": "application/json, text/plain, */*",
                                                "sec-fetch-dest": "empty",
                                                "sec-fetch-mode": "cors",
                                                "sec-fetch-site": "same-site"
                                              },
                                              "referrer": "https://crm2.skyeng.ru/",
                                              "referrerPolicy": "strict-origin-when-cross-origin",
                                              "body": null,
                                              "method": "GET",
                                              "mode": "cors",
                                              "credentials": "include"
                                            }`
                    document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + grdata.data.students[f].userId + "?crm2=true&debugParam=person-page";
                    document.getElementById('responseTextarea3').value = 'dataname'
                    document.getElementById('sendResponse').click()

                    setTimeout(async function () {
                        document.getElementById('responseTextarea1').value = `{
                                               "headers": {
                                                "accept": "application/json, text/plain, */*",
                                                "sec-fetch-dest": "empty",
                                                "sec-fetch-mode": "cors",
                                                "sec-fetch-site": "same-site"
                                              },
                                              "referrer": "https://crm2.skyeng.ru/",
                                              "referrerPolicy": "strict-origin-when-cross-origin",
                                              "body": null,
                                              "method": "GET",
                                              "mode": "cors",
                                              "credentials": "include"
                                            }`
                        document.getElementById('responseTextarea2').value = "https://backend.skyeng.ru/api/persons/" + grdata.data.students[f].userId + "?crm2=true&debugParam=person-page";
                        document.getElementById('responseTextarea3').value = 'dataname'
                        document.getElementById('sendResponse').click()
                        namedata = document.getElementById('responseTextarea1').getAttribute('dataname');
                        namedata = await namedata;
                        namedata = JSON.parse(namedata);
                        arstname[f].innerHTML = namedata.data.name + " " + namedata.data.surname;
                        namedata = document.getElementById('responseTextarea1').removeAttribute('dataname');
                    }, 500)
                }
            }
        }, 1000);

        setTimeout(() => {
            let grstdcrmarr = document.querySelectorAll('.grstdcrm');
            for (let f = 0; f < grstdcrmarr.length; f++) {
                grstdcrmarr[f].onclick = function () {
                    window.open("https://crm2.skyeng.ru/persons/" + grdata.data.students[f].userId)
                }
            }
        }, 1000);



    } // end of func getidgrouptolist

    document.getElementById('getStats').onclick = function () { // открытие Статистики
        let getcurdate = new Date()
        let getyear = getcurdate.getFullYear();
        let getcurmonth = (getcurdate.getMonth() + 1)
        let today = getcurdate.getDate();

        if (getcurmonth < 10) {
            getcurmonth = "0" + (getcurdate.getMonth() + 1);
        } else {
            getcurmonth = (getcurdate.getMonth() + 1);
        }

        if (getcurdate.getDate() < 10) {
            today = "0" + getcurdate.getDate();
            document.getElementById('dateFrom').value = getyear + "-" + getcurmonth + "-" + "0" + (Number(today) - 1);
            document.getElementById('dateTo').value = getyear + "-" + getcurmonth + "-" + today;
        } else {
            today = getcurdate.getDate();
            document.getElementById('dateFrom').value = getyear + "-" + getcurmonth + "-" + (today - 1);
            document.getElementById('dateTo').value = getyear + "-" + getcurmonth + "-" + today;
        }
        document.querySelector('#chatcommentsdata').style.display = "none"
        document.querySelector('#lowCSATcount').style.display = "none"
        if (document.getElementById('AF_Stat').style.display == '')
            document.getElementById('AF_Stat').style.display = 'none'
        else
            document.getElementById('AF_Stat').style.display = ''
    }

    document.getElementById('deleteaclnk').addEventListener('click', function () {
        window.open("https://infra.skyeng.ru/request/create/166")    // открываем ссылку в новой вкладке для создания задачи на удаление аккаунта
    })

    document.getElementById('probniki').addEventListener('click', function () {
        window.open("https://docs.google.com/spreadsheets/d/1Lj1CKSavSWTx_-z3TwxJBUb1fFoVI0Lt7j-BA3OU96s/edit?pli=1#gid=0")    // открывает график пробников и там же ссылки на них будут
    })

    document.getElementById('grouplist').addEventListener('click', function () {
        if (document.getElementById('AF_GrList').style.display == '')
            document.getElementById('AF_GrList').style.display = 'none'
        else
            document.getElementById('AF_GrList').style.display = ''
    })

    document.getElementById('probnikinstr').addEventListener('click', function () {
        window.open("https://confluence.skyeng.tech/pages/viewpage.action?pageId=82215113")    // открывает график пробников и там же ссылки на них будут
    })

    document.getElementById('sound_save').onclick = function () { //функция сохранения адреса звукового уведомления о входящем чате в АФ
        localStorage.setItem('sound_str', document.getElementById('sound_adr').value);
        if (document.getElementById('sound_adr').value == "")
            audio = new Audio("https://drive.google.com/u/0/uc?id=1832JE2IuK7AnfgkljLYytEeFL99Mt2Gv&export=download");
        else {
            audio = new Audio(document.getElementById('sound_adr').value);
            document.getElementById('sound_save').innerText = "✅";
            document.getElementById('sound_adr').value = "";
            setTimeout(function () {
                document.getElementById('sound_save').innerText = "💾";
            }, 3000);
        }
    }

    if (flagLangBut == 0) {
        document.getElementById('languageAF').onclick = function () {
            if (this.innerHTML == "Русский") {
                this.innerHTML = "Английский";
                document.getElementById('AF_helper').style.background = "#EBC7DF"
            } else {
                this.innerHTML = "Русский";
                document.getElementById('AF_helper').style.background = "#464451"
            }
        }
    }

    document.getElementById('msg1').onclick = function () {
        if (this.innerHTML == "Отправить") {
            this.innerHTML = "Доработать";
            localStorage.setItem('msg1', 'Доработать')
        } else {
            this.innerHTML = "Отправить";
            localStorage.setItem('msg1', 'Отправить')
        }
    }

    document.getElementById('opandclsbarhyper').onclick = function () {
        if (document.getElementById('hyperlnk').classList.contains('hyper-active') == false) {
            document.getElementById('hyperlnk').classList.add('hyper-active')
            document.getElementById('hyperlnk').classList.remove('hyperlnk')
        } else {
            document.getElementById('hyperlnk').classList.remove('hyper-active')
            document.getElementById('hyperlnk').classList.add('hyperlnk')
        }
        // if (document.getElementById('hyperlnk').style.display == 'none')
        // document.getElementById('hyperlnk').style.display = ''
        // else document.getElementById('hyperlnk').style.display = 'none'
    }

    function replaceSelectedText(elem, str) {
        elem.focus();

        if (document.selection) {
            var s = document.selection.createRange();
            if (s.text) {
                eval("s.text=" + str + "(s.text);");
                s.select();
                return true;
            }
        }
        else if (typeof (elem.selectionStart) == "number") {
            if (elem.selectionStart != elem.selectionEnd) {
                var start = elem.selectionStart;
                var end = elem.selectionEnd;

                eval("var rs = " + str + "(elem.value.substr(start,end-start));");
                elem.value = elem.value.substr(0, start) + rs + elem.value.substr(end);
                elem.setSelectionRange(end, end);
            }
            return true;
        }
        return false;
    }

    function change_str(s) { return `<a href="${document.getElementById('bindlinktotext').value}" target="_blank" rel="noopener">` + s + "</a>" }

    document.getElementById('insertlinktotext').onclick = function () {
        replaceSelectedText(document.getElementById('inp'), 'change_str');
        document.getElementById('bindlinktotext').value = ''
        document.getElementById('hyperlnk').classList.remove('hyper-active')
        document.getElementById('hyperlnk').classList.add('hyperlnk')
    }

    document.getElementById('sndbot').onclick = async function () { //отправить сообщение от автофак бота
        let txt = document.getElementById('inp').value;
        var values = await getInfo(flag)
        var adr = values[0]; var adr1 = values[1]; var uid = values[2]
        var txt2 = txt.split('\n')
        var txt3 = ""
        txt2.forEach(el => txt3 += "<p>" + el + "</p>\\n")
        txt3 = txt3.split("\"").join("\\\"")
        txt3 = txt3.split('<p></p>').join("<p><br></p>")
        txt3 = txt3.substr(0, txt3.length - 2)

        if (document.getElementById('msg').innerHTML == "Чат")
            fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
                "headers": {
                    "content-type": "multipart/form-data; boundary=----WebKitFormBoundarymasjvc4O46a190zh",
                },
                "body": "------WebKitFormBoundarymasjvc4O46a190zh\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + txt3 + "\",\"suggestedAnswerDocId\":0}\r\n------WebKitFormBoundarymasjvc4O46a190zh--\r\n",
                "method": "POST",
                "credentials": "include"
            });
        document.getElementById('inp').value = "";
        refCurTimer(time)
    }

    document.getElementById('snd').onclick = function () { //функция отправки сообщений в чат или заметки
        document.getElementById('snd').setAttribute('disabled', 'disabled')
        setTimeout(function () { document.getElementById('snd').removeAttribute('disabled') }, 500)
        if (document.getElementById('msg').innerHTML == "Чат") {
            if (template_flag == 1) {
                if (template_flag2 == 1)
                    sendAnswerTemplate2(document.getElementById('inp').value, 1)
                else
                    sendAnswerTemplate("", "", 1, document.getElementById('inp').value, 1)
            } else {
                sendAnswer(document.getElementById('inp').value, 0)
            }
        }
        else
            sendComment(document.getElementById('inp').value)
        document.getElementById('inp').value = ""

        if (document.getElementById('phone_tr') != undefined)
            document.getElementById('phone_tr').value = ""
        if (document.getElementById('email_tr') != undefined)
            document.getElementById('email_tr').value = ""
    }

    window.onkeydown = function (e) {
        if (e.key == 'Control') {
            bool = 1;
        }
        if (e.key == 'Enter' && bool == 1) {
            refCurTimer(localStorage.getItem('aclstime') + ":00")
        }
    }
    window.onkeyup = function (e) {
        if (e.key == 'Control') {
            bool = 0;
        }
    }

    let button1 = document.createElement('div');
    button1.id = 'scriptBut';
    button1.innerHTML = "Скрипт";
    button1.style.marginRight = "15px";
    button1.style.display = 'none'
    button1.onclick = function () {
        document.getElementById('AF_helper').style.display = 'flex'
        this.style.display = 'none'
        //скрывает окна при выбранно опции скрытия КОД
        if (localStorage.getItem('disablelpmwindow') == 1)
            document.getElementById('testUsers').style.display = "none";
        
		if (localStorage.getItem('disablelngpmwindow') == 1)
        document.getElementsByClassName('user_menu-language_switcher')[0].style.display = 'none'
    
        if (localStorage.getItem('disableomelchenkowindow') == 1)
            document.getElementById('main_easy_win').style.display = "none";

    }

    var btnAdd = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]
    btnAdd.insertBefore(button1, btnAdd.children[0])

    function screenshots() { //просмотр и трансформация скриншотов в активном чате
        if (document.getElementsByClassName('expert-chat-display-inner')[0] != undefined) {
            for (i = 0; document.getElementsByClassName('expert-chat-display-inner')[0].children[i] != undefined; i++) {
                if (document.getElementsByClassName('expert-chat-display-inner')[0].children[i].textContent.indexOf('vimbox-resource') != -1) {
                    var div = document.getElementsByClassName('expert-chat-display-inner')[0].children[i]
                    for (let j = 0; j < div.querySelectorAll('a').length; j++) {
                        if (div.querySelectorAll('a')[j].hasAttribute('data-lightbox') == false) {
                            var img = document.createElement('img')
                            img.style.width = '100px'
                            var alink = document.createElement('a')
                            alink.setAttribute('data-lightbox', 'imgs');
                            alink.append(img)
                            img.src = div.querySelectorAll('a')[j].href
                            img.alt = 'Изображение'
                            alink.href = img.src;
                            div.querySelectorAll('a')[j].replaceWith(alink)
                        }
                    }
                }
            }
        }
    }

    screenshots()
    setInterval(screenshots, 5000)

    function screenshots2() { //просмотр и трансформация скриншотов в архиве
        if (document.getElementsByClassName('chat-messages')[0] != undefined) {
            for (i = 0; document.getElementsByClassName('chat-messages')[0].children[i] != undefined; i++) {
                if (document.getElementsByClassName('chat-messages')[0].children[i].textContent.indexOf('vimbox-resource') != -1) {
                    var div = document.getElementsByClassName('chat-messages')[0].children[i]
                    for (let j = 0; j < div.querySelectorAll('a').length; j++) {
                        if (div.querySelectorAll('a')[j].hasAttribute('data-lightbox') == false) {
                            var img = document.createElement('img')
                            img.style.width = '100px'
                            var alink = document.createElement('a')
                            alink.setAttribute('data-lightbox', 'imgs');
                            alink.append(img)
                            img.src = div.querySelectorAll('a')[j].href
                            img.alt = 'Изображение'
                            alink.href = img.src;
                            div.querySelectorAll('a')[j].replaceWith(alink)
                        }
                    }
                }
            }
        }
    }

    screenshots2()
    setInterval(screenshots2, 5000)

    addInfoUser.style.textAlign = "center"
    addInfoUser.style.color = "white"
    addInfoUser.style = "color: white; text-align: center; cursor: -webkit-grab;"
    loginer = document.getElementById('testUsers')
    loginer.appendChild(addInfoUser)

    var listenerloginer = function (e, a) {
        loginer.style.left = Number(e.clientX - myX3) + "px";
        loginer.style.top = Number(e.clientY - myY3) + "px";
        localStorage.setItem('winTop3', String(Number(e.clientY - myY3)));
        localStorage.setItem('winLeft3', String(Number(e.clientX - myX3)));
    };
    loginer.onmousedown = function (a) {
        if (checkelementtype(a)){
            window.myX3 = a.layerX;
            window.myY3 = a.layerY;
            document.addEventListener('mousemove', listenerloginer);
        }
    }
    loginer.onmouseup = function () { document.removeEventListener('mousemove', listenerloginer); }

    user = "student"

    if (localStorage.getItem('msg') != null) {
        document.getElementById('msg').innerHTML = localStorage.getItem('msg')
    }
    if (localStorage.getItem('msg1') != null) {
        document.getElementById('msg1').innerHTML = localStorage.getItem('msg1')
    }

    getText()
}

function pageClick(pageId) { // по клику переключает страницы с шаблонами
    b = document.getElementById('AF_helper').childNodes[0].childNodes[1].childNodes[1]
    for (i = 0; i < b.childElementCount; i++) {
        try {
            b.children[1].children[i].style.backgroundColor = '#768d87'
            b.children[1].children[i].style.borderTop = "0px";
            document.getElementById(i + "page").style.display = 'none'
        } catch (e) { }
    }
    document.getElementById(pageId).style.backgroundColor = 'green'
    document.getElementById(pageId).style.borderTop = "4px solid orange";
    document.getElementById(pageId[0] + "page").style.display = ''
}

function bagPageButtons(butId) {  //с шаблонами тоже фукнкция связана
    txt = document.getElementById(butId).parentElement.childNodes[0].textContent
    for (l = 0; l < table.length; l++)
        if (table[l][0] == txt) {
            resetFlags()
            document.getElementById('inp').value = table[l][Number(butId[4]) + 1]
            break
        }
}

function transfPageButtons(textFromTable) { //подстановка телефона и почты юзера при использовании шаблона
    //resetFlags()
    phone = ""
    textFromTable = textFromTable.split('(phone)')
    if (textFromTable.length > 1) {
        if (document.getElementById('phone_tr').value == "")
            phone = document.getElementById('phone_tr').placeholder
        else
            phone = document.getElementById('phone_tr').value
        if (phone == "Телефон") {
            document.getElementById('inp').value = "Введите номер телефона"
            return
        }
    }
    textFromTable = textFromTable.join(phone)

    email = ""
    textFromTable = textFromTable.split('(email)')
    if (textFromTable.length > 1) {
        if (document.getElementById('email_tr').value == "")
            email = document.getElementById('email_tr').placeholder
        else
            email = document.getElementById('email_tr').value
        if (email == "Почта") {
            document.getElementById('inp').value = "Введите почту"
            return
        }
    }
    textFromTable = textFromTable.join(email)

    name = ""
    textFromTable = textFromTable.split('(name)')
    if (document.getElementsByClassName('expert-user_details-name').length != 0) {
        a = document.getElementsByClassName('expert-user_details-name')[0].innerText
        a = a.split(' ')
        const cyrillicPattern = /^[\u0400-\u04FF]+$/;
        if (textFromTable.length > 1 && cyrillicPattern.test(a[0])) {
            name = a[0]
        }
        else
            name = a[0]
    }
    else
        name = a[0]
    textFromTable = textFromTable.join(name)

    return textFromTable
}

async function buttonsFromDoc(butName) { // функция отправки шаблона в зависимости от нажатой кнопки и также взаимодействут с другими функциями
    if (butName == "ус+брауз")
        if (user == 'student')
            butName = "ус+брауз (У)"
        else
            butName = "ус+брауз (П)"

    if (butName == 'Привет') {
        a = document.getElementsByClassName('expert-user_info_panel')[0].firstChild.firstChild.innerText
        a = a.split(' ')
        const cyrillicPattern = /^[\u0400-\u04FF]+$/;

        if (document.getElementById('languageAF').innerHTML == "Русский") {
            if (drevo != null && drevo != undefined && drevo[0] == 'Здравствуйте! Я виртуальный помощник Skyeng' && document.getElementById('msg1').innerHTML == "Доработать") {
                console.log("Проверка, что бот писал Здравствуйте пройдена!", drevo[0])
                txt = "Просматриваю информацию по вашему запросу. Вернусь с ответом или за уточнениями через несколько минут."
            } else if (cyrillicPattern.test(a[0]) && a[0] != "Неизвестный" && document.getElementById('msg1').innerHTML == "Доработать")
                txt = "Здравствуйте, " + a[0] + "!" + '\r\n' + "Просматриваю информацию по вашему запросу. Вернусь с ответом или за уточнениями через несколько минут."
            else
                txt = "Здравствуйте!" + '\r\n' + "Просматриваю информацию по вашему запросу. Вернусь с ответом или за уточнениями через несколько минут."
        } else
            txt = "Hello, " + a[0] + "!" + '\r\n' + "Please wait a few minutes."

        if (txt == "Hello, " + a[0] + "!" + '\r\n' + "Please wait a few minutes.")
            sendAnswerTemplate2(txt)
        else
            sendAnswerTemplate2(txt)
        return
    }

    if (butName == '🖕Отказ')
        document.getElementById('otkaz').click();

    msgFromTable(butName)

    // start of counter of pressed key script то есть при нажатии на кнопку с шаблоном передает в гугл таблицу ин6формацию какая кнопка была нажата и там уже др скрипты считают сколько  раз и сортируют
    let nameusedbut = encodeURIComponent(butName)
    let counter = '1'

    let body = 'entry.362470677=' + nameusedbut + '&entry.613447261=' + counter

    let options = {
        "headers": {
            "content-type": "application/x-www-form-urlencoded;",
        },
        "body": body,
        "method": "POST",
    }

    document.getElementById('responseTextarea1').value = JSON.stringify(options)
    document.getElementById('responseTextarea2').value = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSehbskocVj0Wh1ubRwUbD6rwiG7EDAjNu9ahYWMmgcdswp4zw/formResponse'
    if (document.getElementById('responseTextarea3') != null)
        document.getElementById('responseTextarea3').value = ''
    document.getElementById('sendResponse').click()
    // end of counter of pressed key script
}

function servFromDoc(butName) { // отправка комента и сообщение со стораницы серверные
    but = butName
    msgFromTable(but) // вызов функции отправки сообщения
    if (document.getElementById('avariyalink').value !== null) // проверка есть ли значение в поле ссылки
        sendComment(document.getElementById('avariyalink').value); // вызов функции отправки комента
}

var bool = 0;
var table

function getText() { //получить текст
    var app = localStorage.getItem('scriptAdr'),
        xhr = new XMLHttpRequest();
    xhr.open('GET', app);
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;

        if (xhr.status == 200) {
            try {
                var r = JSON.parse(xhr.responseText),
                    result = r["result"];

                table = result;
                console.log('Обновили шаблоны')
                refreshTemplates()

            } catch (e) { console.log(e) }
        }
    }
    xhr.send()
}

function refreshTemplates() { // функция обновляет шаблоны которые загружены были с гугл таблицы и сформированы их в table
    setInterval(function () {
        if (document.getElementsByClassName('expert-user_details-list')[0] != undefined) {
            if (document.getElementById('phone_tr') != undefined) {
                phone = document.getElementsByClassName('expert-user_details-list')[0].childNodes[1].childNodes[1].innerText
                if (phone == "-") {
                    phone = ""
                    document.getElementById('phone_tr').placeholder = "Телефон"
                } else
                    document.getElementById('phone_tr').placeholder = phone
            }
            if (document.getElementById('email_tr') != undefined) {
                email = document.getElementsByClassName('expert-user_details-list')[0].childNodes[0].childNodes[1].innerText
                if (email == "-") {
                    email = ""
                    document.getElementById('email_tr').placeholder = "Почта"
                }
                document.getElementById('email_tr').placeholder = email
            }
        } else {
            if (document.getElementById('email_tr') != undefined)
                document.getElementById('email_tr').placeholder = "Почта"
            if (document.getElementById('phone_tr') != undefined)
                document.getElementById('phone_tr').placeholder = "Телефон"
        }
    }, 1000)
    templatesAF = []
    while (document.getElementById('pages').children[0] != undefined)
        document.getElementById('pages').children[0].remove()
    for (i = 0; document.getElementById(i + 'page') != undefined; i++)
        document.getElementById(i + 'page').remove()
    while (document.getElementById('addTmp').children[0].children[0] != undefined)
        document.getElementById('addTmp').children[0].children[0].remove()
    countOfStr = 0
    countOfPages = 0
    pageName = ""
    addTmpFlag = 0
    b = document.getElementById('AF_helper').childNodes[0].childNodes[1].childNodes[1]
    console.log(table)
    for (i = 0; i < table.length; i++) {
        c = table[i]
        switch (c[0]) {
            case '':
                addTmpFlag = 0
                countOfStr++
                var newStr = document.createElement('div')
                newStr.style.margin = "5px"
                newStr.id = countOfPages + "page_" + countOfStr + "str"
                b.lastElementChild.appendChild(newStr)
                break

            case 'Additional templates':
                addTmpFlag = 1
                break
            case 'Страница':
                var newPageBut = document.createElement('button')
                newPageBut.innerText = c[1]
                pageType = c[2]
                newPageBut.style.marginRight = '4px'
                newPageBut.setAttribute('onclick', 'pageClick(this.id)')
                newPageBut.id = countOfPages + 'page_button'
                b.childNodes[3].appendChild(newPageBut)

                var newPage = document.createElement('div')
                newPage.id = countOfPages + 'page'
                b.appendChild(newPage)

                countOfPages++

                countOfStr = 1

                if (pageType == "Серверные") { // дорисоква инпута для ссылки на серверные
                    var newDiv = document.createElement('div')
                    newDiv.id = countOfPages + "page_" + countOfStr + "str"
                    newDiv.style.margin = "5px"

                    var newInputAlink = document.createElement('input')
                    newInputAlink.id = 'avariyalink'
                    newInputAlink.placeholder = 'Ссылка на трэд или Jira северных'
                    newInputAlink.autocomplete = 'off'
                    newInputAlink.type = 'text'
                    newInputAlink.style = 'text-align: center; width: 300px; color: black; margin-left: 20px'

                    newDiv.appendChild(newInputAlink)

                    b.lastElementChild.appendChild(newDiv)
                    countOfStr++
                }

                if (pageType == "ТемыМоб") { // дорисовка инпута для ссылки на Jira
                    var newDivInMob = document.createElement('span')
                    newDivInMob.id = "9page_1str";
                    newDivInMob.style.margin = "5px"

                    var newInputJiraCmtMob = document.createElement('input')
                    newInputJiraCmtMob.id = 'jirafieldlinkmob'
                    newInputJiraCmtMob.placeholder = 'Ссылка на Jira задачу'
                    newInputJiraCmtMob.autocomplete = 'off'
                    newInputJiraCmtMob.type = 'text'
                    newInputJiraCmtMob.style = 'text-align: center; width: 200px; color: black; margin-left: 60px'

                    newDivInMob.appendChild(newInputJiraCmtMob)

                    b.lastElementChild.appendChild(newDivInMob)

                    var newSpanBtnMob = document.createElement('button');
                    newSpanBtnMob.id = "sendjiramob";
                    newSpanBtnMob.style.cursor = "pointer";
                    newSpanBtnMob.style.marginLeft = "20px";
                    newSpanBtnMob.innerText = "🚀";

                    newDivInMob.appendChild(newSpanBtnMob);

                    b.lastElementChild.appendChild(newSpanBtnMob)

                    document.getElementById('sendjiramob').onclick = function () {
                        let getval1 = document.getElementById('9page_1str').children[0].value
                        sendComment(getval1);
                        let splitter1 = document.URL.split('/')
                        console.log("Getval = " + getval1)
                        fetch("https://skyeng.autofaq.ai/api/conversation/" + splitter1[5] + "/payload", {
                            "headers": {
                                "accept": "*/*",
                                "content-type": "application/json",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin"
                            },
                            "body": "{\"conversationId\":\"${splitter[5]}\",\"elements\":[{\"name\":\"taskUrl\",\"value\":\"" + getval1 + "\"}]}",
                            "method": "POST",
                            "mode": "cors",
                            "credentials": "include"
                        })
                        document.getElementById('9page_1str').children[0].value = "";
                    }
                }
                if (pageType == "Темы") { // дорисовка инпута для ссылки на Jira
                    var newDivIn = document.createElement('span')
                    newDivIn.id = "10page_1str";
                    newDivIn.style.margin = "5px"

                    var newInputJiraCmt = document.createElement('input')
                    newInputJiraCmt.id = 'jirafieldlink'
                    newInputJiraCmt.placeholder = 'Ссылка на Jira задачу'
                    newInputJiraCmt.autocomplete = 'off'
                    newInputJiraCmt.type = 'text'
                    newInputJiraCmt.style = 'text-align: center; width: 200px; color: black; margin-left: 60px'

                    newDivIn.appendChild(newInputJiraCmt)

                    b.lastElementChild.appendChild(newDivIn)

                    var newSpanBtn = document.createElement('button');
                    newSpanBtn.id = "sendjira";
                    newSpanBtn.style.cursor = "pointer";
                    newSpanBtn.style.marginLeft = "20px";
                    newSpanBtn.innerText = "🚀";

                    newDivIn.appendChild(newSpanBtn);

                    b.lastElementChild.appendChild(newSpanBtn)

                    document.getElementById('sendjira').onclick = function () {
                        let getval = document.getElementById('10page_1str').children[0].value
                        sendComment(getval);
                        let splitter = document.URL.split('/')
                        console.log("Getval = " + getval)
                        fetch("https://skyeng.autofaq.ai/api/conversation/" + splitter[5] + "/payload", {
                            "headers": {
                                "accept": "*/*",
                                "content-type": "application/json",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin"
                            },
                            "body": "{\"conversationId\":\"${splitter[5]}\",\"elements\":[{\"name\":\"taskUrl\",\"value\":\"" + getval + "\"}]}",
                            "method": "POST",
                            "mode": "cors",
                            "credentials": "include"
                        })
                        document.getElementById('10page_1str').children[0].value = "";
                    }
                }

                var newStr = document.createElement('div')
                newStr.style.margin = "5px"
                newStr.id = countOfPages + "page_" + countOfStr + "str"
                b.lastElementChild.appendChild(newStr)
                break
            default:
                switch (pageType) {
                    case 'Баги':
                        var newString = document.createElement('p')
                        newString.style.color = 'white'
                        newString.style.margin = '0 0 5px 0'
                        newString.innerText = c[0]
                        for (j = 0; j < c[1]; j++) {
                            var newBut = document.createElement('button')
                            newBut.style.width = '20px'
                            newBut.style.marginRight = '4px'
                            newBut.id = countOfStr + 'str' + (j + 1)
                            newBut.innerText = (j + 1)
                            newBut.setAttribute('onclick', 'bagPageButtons(this.id)')
                            newString.appendChild(newBut)
                        }
                        countOfStr++
                        b.lastElementChild.lastElementChild.appendChild(newString)
                        break
                    case 'Шаблоны':
                        var newBut = document.createElement('button')
                        newBut.innerText = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'buttonsFromDoc(this.innerText)')
                        if (newBut.innerText == 'Урок NS')
                            newBut.id = "NS"
                        if (newBut.innerText == 'ус+брауз (У)')
                            newBut.innerText = "ус+брауз"
                        if (newBut.innerText == 'ус+брауз (П)')
                            continue
                        if (addTmpFlag == 0)
                            b.lastElementChild.lastElementChild.appendChild(newBut)
                        else {
                            newBut.style.marginTop = '4px'
                            document.getElementById('addTmp').children[0].appendChild(newBut)
                        }
                        break
                    case 'Переводы':
                        var newBut = document.createElement('button')
                        newBut.innerText = c[0]
                        newBut.style.marginRight = '4px'
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    case 'Серверные': // обработка нажатия на кнопку на странице серверные
                        var newBut = document.createElement('button')
                        newBut.innerText = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'servFromDoc(this.innerText)')
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    case 'ТемыМоб':
                        var newBut = document.createElement('button')
                        newBut.innerText = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'tagToChat(this.innerText)')
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    case 'Темыadd':
                        var newBut = document.createElement('button')
                        newBut.innerText = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'tagToChat(this.innerText)')
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    case 'Темы':
                        var newBut = document.createElement('button')
                        newBut.innerText = c[0]
                        newBut.style.marginRight = '4px'
                        newBut.setAttribute('onclick', 'tagToChat(this.innerText)')
                        b.lastElementChild.lastElementChild.appendChild(newBut)
                        break
                    default:
                        break
                }
                break
        }
    } document.getElementById('0page').ondblclick = function () {
        if (document.getElementById('addTmp').style.display == 'none') {
            document.getElementById('addTmp').style.display = '';
            document.getElementById('set_bar').style.display = 'none'
            document.getElementById('reminder_bar').style.display = 'none'
        }
        else
            document.getElementById('addTmp').style.display = 'none';
    }
    document.getElementById('0page_button').click()
}

function tagToChat(btnName) { // функция отправляет тематику в чат, список тематик хранится в спец доке где шаблоны
    for (var l = 0; l < table.length; l++) {
        if (btnName == table[l][0]) {
            newTag(table[l][1])
            return
        }
    }
}

function newTag(valueId) { // функция выставления тега чата
    let chatId = ''
    if (window.location.href.indexOf('skyeng.autofaq.ai/logs') !== -1)
        chatId = document.location.pathname.split('/')[2]
    else if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') === -1)
        chatId = document.location.pathname.split('/')[3]
    else
        chatId = document.getElementsByClassName('ant-tabs-tabpane expert-sider-tabs-panel_scrollable')[0].children[0].children[0].children[0].textContent.split(' ')[1]
    fetch("https://skyeng.autofaq.ai/api/conversation/" + chatId + "/payload", {
        "headers": {
            "content-type": "application/json",
        },
        "body": "{\"conversationId\":\"" + chatId + "\",\"elements\":[{\"name\":\"topicId\",\"value\":\"" + valueId + "\"}]}",
        "method": "POST",
        "credentials": "include"
    });
}

function msgFromTable(btnName) { //шаблоны, тематики. теги с таблицы получает и выставляет
    for (var l = 0; l < table.length; l++) {
        if (btnName == table[l][0]) {
			tempindex = [l];
            if (table[l][8] == undefined || table[l][8] == null || table[l][8] == " " || table[l][8] == "") {
                console.log("Не значения тематики")
            } else {
                newTag(table[l][8])
            }

            setTimeout(() => {
                if (table[tempindex][9] == undefined || table[tempindex][9] == null || table[tempindex][9] == " " || table[tempindex][9] == "") {
                    console.log("Нет значения тегов")
                } else {
                    newTags(table[tempindex][9])
                }
            }, 1000)


            if (document.getElementById('languageAF').innerHTML == "Русский") {
                if (table[l][1] == "Быстрый шаблон") {
                    sendAnswerTemplate2(table[l][2])
                }
                if (table[l][1] == "Текст") {
                    sendAnswer(transfPageButtons(table[l][2]))
                }
                if (table[l][1] == "Шаблон") {
                    sendAnswerTemplate(table[l][2], table[l][3])
                }
                if (table[l][1].indexOf("Рандом") != -1) {
                    var counttmpl = table[l][1][7]
                    var newL = Math.floor(Math.random() * (counttmpl))
                    let splittedarr = table[l][2 + newL].split('$')
                    console.log(splittedarr)
                    if (splittedarr[0] == "Текст")
                        sendAnswer(splittedarr[1])
                    else if (splittedarr[0] == "Шаблон") {
                        sendAnswerTemplate(splittedarr[1], splittedarr[1])
                    } else {
                        document.getElementById('inp').value = "Шаблон  указан не верно, повторите попытку еще раз!"
                    }

                }

                break
            } else if (table[l][1].indexOf("Рандом") != -1) {
                var counttmpleng = table[l][1][9]
                if (counttmpleng > 0) {
                    var newLeng = Math.floor(Math.random() * (counttmpleng))
                    let splittedarreng = table[l][5 + newLeng].split('$')
                    console.log(splittedarreng)
                    if (splittedarreng[0] == "Текст") {
                        sendAnswer(splittedarreng[1])
                    } else if (splittedarreng[0] == "Шаблон") {
                        sendAnswerTemplate(splittedarreng[1], splittedarreng[1])
                    } else {
                        document.getElementById('inp').value = "Шаблон  указан не верно, повторите попытку еще раз!"
                    }
                } else {
                    document.getElementById('inp').value = "Нет английского варианта шаблонов"
                }
            } else if (table[l][4] == "") {
                document.getElementById('inp').value = "Нет английского варианта шаблона"
            } else {
                if (table[l][5] == "Быстрый шаблон") {
                    sendAnswerTemplate2(table[l][6])
                }
                if (table[l][5] == "Текст") {
                    sendAnswer(transfPageButtons(table[l][6]))
                }
                if (table[l][5] == "Шаблон") {
                    sendAnswerTemplate(table[l][6], table[l][7])
                }
                break
            }
        }
    }
}

var templatesAF = []


async function loadTemplates(template, word) { //загрузка шаблонов с дока
    return await fetch("https://skyeng.autofaq.ai/api/reason8/autofaq/top/batch", {
        "headers": {
            "content-type": "application/json",
        },
        "body": "{\"query\":\"" + word + "\",\"answersLimit\":10,\"autoFaqServiceIds\":[121286, 119638, 121385, 121300, 119843, 118980, 121692, 121386, 119636, 119649, 121381, 119841, 120181, 119646, 121388, 121384, 121387]}",
        "method": "POST",
    })
        .then(response => response.json())
        .then(result => {
            var documentId = ""
            var serviceId = ""
            var queryId = ""
            var AFsessionId = ""
            var tmpText = ""
            var title = ""
            var accuracy = ""
            for (let i = 0; i < result.length; i++) {
                if (result[i].title == template) {
                    var b = result[i]
                    documentId = b.documentId
                    serviceId = b.serviceId
                    queryId = b.queryId
                    AFsessionId = b.sessionId
                    tmpText = b.text
                    tmpText = tmpText.split("<br>↵").join('\n')
                    tmpText = tmpText.split("&nbsp;").join(' ')
                    tmpText = tmpText.split("<br />").join('\n')
                    tmpText = tmpText.split('<a').join('TMPaTMP').split('</a').join('TMPENDaTMEPEND')
                    tmpText = tmpText.replace(/<\/?[^>]+>/g, '')
                    tmpText = tmpText.split('TMPaTMP').join('<a').split('TMPENDaTMEPEND').join('</a')
                    title = b.title
                    title = title.split("\"").join("\\\"")
                    accuracy = b.accuracy

                    templatesAF.push([template, documentId, serviceId, queryId, AFsessionId, tmpText, title, accuracy])
                    return ([template, documentId, serviceId, queryId, AFsessionId, tmpText, title, accuracy])
                }
            }
        })
}

async function sendAnswerTemplate(template, word, flag = 0, newText = "", flag2 = 0) { // функция отправки шаблона
    var curTemplate
    if (flag == 1) {
        template = template_text
        word = word_text
    }
    for (let i = 0; i < templatesAF.length; i++) {
        if (template == templatesAF[i][0]) {
            curTemplate = templatesAF[i]
            break
        }
    }
    if (curTemplate == undefined)
        curTemplate = await loadTemplates(template, word)
    //addTimer()
    time = localStorage.getItem('aclstime') + ":00"
    var documentId = curTemplate[1]
    var serviceId = curTemplate[2]
    var queryId = curTemplate[3]
    var AFsessionId = curTemplate[4]
    var tmpText = transfPageButtons(curTemplate[5])
    var title = curTemplate[6]
    var accuracy = curTemplate[7]
    var values = await getInfo(0)
    var adr = values[0]; var adr1 = values[1]; var uid = values[2]
    if (document.getElementById('msg1').innerHTML == "Доработать" && flag2 == 0) {
        document.getElementById('inp').value = tmpText
        template_text = template
        word_text = word
        template_flag = 1
    }
    else if (tmpText == "")
        console.log('Шаблон не найден')
    else {
        if (flag == 1) {
            tmpText = newText
        }
        tmpText = tmpText.split("\"").join("\\\"")
        txt2 = tmpText.split('\n')
        txt3 = ""
        txt2.forEach(el => txt3 += "<p>" + el + "</p>\\n")
        tmpText = txt3
        tmpText = tmpText.split('<p></p>').join("<p><br></p>")
        tmpText = tmpText.substr(0, tmpText.length - 2)

        resetFlags()
        refCurTimer(time)
        fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
            "headers": {
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryZ3ivsA3aU80QEBST",
            },
            "body": "------WebKitFormBoundaryZ3ivsA3aU80QEBST\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + tmpText + "\",\"ext\":null,\"files\":[],\"suggestedAnswerDocId\":" + documentId + ",\"autoFaqServiceId\":" + serviceId + ",\"autoFaqSessionId\":\"" + AFsessionId + "\",\"autoFaqQueryId\":\"" + queryId + "\",\"autoFaqTitle\":\"" + title + "\",\"autoFaqQuery\":\"" + word + "\",\"autoFaqAccuracy\":" + accuracy + "}\r\n------WebKitFormBoundaryZ3ivsA3aU80QEBST--\r\n",
            "method": "POST",
            "credentials": "include"
        });
    }
}

async function sendAnswer(txt, flag = 1, time = localStorage.getItem('aclstime') + ":00") { //функция отправки ответа
    //addTimer()
    var values = await getInfo(flag)
    var adr = values[0]; var adr1 = values[1]; var uid = values[2]
    var txt2 = txt.split('\n')
    var txt3 = ""
    txt2.forEach(el => txt3 += "<p>" + el + "</p>\\n")
    txt3 = txt3.split("\"").join("\\\"")
    txt3 = txt3.split('<p></p>').join("<p><br></p>")
    txt3 = txt3.substr(0, txt3.length - 2)
    if (document.getElementById('msg1').innerHTML == "Доработать" && flag) {
        resetFlags()
        document.getElementById('inp').value = txt
    }
    else {
        refCurTimer(time)
        fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
            "headers": {
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryFeIiMdHaxAteNUHd",
            },
            "body": "------WebKitFormBoundaryFeIiMdHaxAteNUHd\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + txt3 + "\"}\r\n------WebKitFormBoundaryFeIiMdHaxAteNUHd--\r\n",
            "method": "POST",
            "credentials": "include"
        });
        resetFlags()
    }
}

async function getInfo(flag1 = 1) { //функция получения инфо о чате и сервис айди
    var adr = document.location.href
    var adr1 = document.location.pathname
    adr1 = adr1.split('/')
    adr1 = adr1[3]
    var sessionId = ""
    for (let i = 0; i < chatsArray.length; i++) {
        if (chatsArray[i].id == adr1) {
            sessionId = chatsArray[i].sessionId
            return [adr, adr1, sessionId]
        }
    }
    if (adr1 == undefined)
        adr1 = ""
    if (document.getElementById('msg1').innerHTML != "Доработать" || flag1 == 0) {
        await fetch("https://skyeng.autofaq.ai/api/conversations/" + adr1)
            .then(response => response.json())
            .then(result => { sessionId = result.sessionId; chatsArray.push(result); localStorage.setItem('serviceIdGlob', result.serviceId) });
    }
    return [adr, adr1, sessionId]
}

async function sendComment(txt) { // функция отправки комментария
    var values = await getInfo(0)
    adr = values[0]; adr1 = values[1]; uid = values[2]
    var txt2 = txt.split('\n').join('\\n')
    var txt2 = txt2.split("\"").join("\\\"")
    resetFlags()
    fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
        "headers": {
            "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryH2CK1t5M3Dc3ziNW",
        },
        "body": "------WebKitFormBoundaryH2CK1t5M3Dc3ziNW\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + txt2 + "\",\"isComment\":true}\r\n------WebKitFormBoundaryH2CK1t5M3Dc3ziNW--\r\n",
        "method": "POST",
        "credentials": "include"
    });
}

idk = 0
var tmrs = []
function addTimer() { //функция добавления таймера при ответе оператора
    tm = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
    if (tm.childNodes[0].childNodes[2] === undefined) {
        let serv = document.createElement('div')
        let serv2 = document.createElement('div')
        tm.childNodes[0].appendChild(serv)
        tm.childNodes[1].appendChild(serv2)
        tm.childNodes[0].childNodes[2].innerHTML = localStorage.getItem('aclstime') + ":00"
        let d = new Date()
        tmrs[idk] = [localStorage.getItem('aclstime') + ":00", tm.childNodes[1].childNodes[0].innerText, 1, number(d), ""]
        idk++
    }
}

function addTimers() { // еще функция тоже добавления таймеров
    k = 0
    btns = document.getElementsByClassName('ant-list expert-sidebar-list ant-list-split')[0]
    let d = new Date()
    while (true) {
        if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k] == undefined)
            break;
        btns.childNodes[k]
        nm = btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
        flag = 0
        for (i = 0; i < idk; i++) {
            name = tmrs[i][1]
            if (nm == name) {
                flag = 1
                break
            }
        }
        if (flag == 0)
            tmrs[idk++] = [localStorage.getItem('aclstime') + ":00", nm, 1, Number(d), ""]

        k++
    }

    k = 0
    btns = document.getElementsByClassName('ant-list expert-sidebar-list ant-list-split')[0]
    while (true) {
        if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k] == undefined)
            break;
        if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[0].childNodes[2] == undefined) {
            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[0].appendChild(document.createElement('div'))
            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].appendChild(document.createElement('div'))
            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.backgroundColor = 'red'
            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.color = 'white'
            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.textAlign = 'center'
            btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.fontWeight = 'bold'
        }
        k++
    }
}

function refreshTimer() { //функция обновления таймера
    btns = document.getElementsByClassName('ant-list expert-sidebar-list ant-list-split')[0]
    j = 0
    while (true) {
        if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j] === undefined)
            break
        if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].className === "ant-empty ant-empty-normal")
            break;
        if (btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[0].childNodes[2] == undefined)
            addTimers()
        name = btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
        for (i = 0; i < idk; i++) {
            if (tmrs[i][1] == name) {
                btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[0].childNodes[2].innerHTML = tmrs[i][0]
                if (tmrs[i][0] == "00:00")
                    if (tmrs[i][2] == 1)
                        btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "#ECEBBD"
                    else
                        btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "#FBCEB1"
                else
                    btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "white"
                btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[1].childNodes[3].innerText = tmrs[i][4]
                var cT = new Date();
                var curT1 = tmrs[i][3]
                var curT2 = Number(cT);
                var curT3 = ((localStorage.getItem('aclstime') - 2) * 60) - Math.floor((curT2 - curT1) / 1000); // таймер за 2 минуты окрашивания автозакрытия
                if (curT3 < 0)
                    btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "#FF47CA" // цвет окрашивания автозакрытия  сейчас сиреневый
            }
        }
        j++
    }
}

function refCurTimer(time) { //функция обновления текущего таймера на чате
    btns = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0]

    name = btns.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
    for (i = 0; i < idk; i++) {
        if (tmrs[i][1] == name) {
            tmrs[i][0] = time
            if (time == "1:00")
                tmrs[i][2] = 0
            else
                tmrs[i][2] = 1
            tmrs[i][3] = Number(new Date())
        }
    }
}

flag = 0
str = localStorage.getItem('sound_str');
if (str !== null && str !== "")
    audio = new Audio(str);
else
    audio = new Audio("https://drive.google.com/u/0/uc?id=1832JE2IuK7AnfgkljLYytEeFL99Mt2Gv&export=download");

var timeStart = new Date()
var studentIdSearch2 = 0
var studentIdSearch = 0
function startTimer() {
    var timeNow = new Date()
    if (timeNow - timeStart > 60 * 60 * 1000) {
        getText()
        timeStart = timeNow
    }
    for (i = 0; i < idk; i++) {
        var cT = new Date();
        var curTime1 = tmrs[i][3]
        var curTime2 = Number(cT);
        t = 0
        if (tmrs[i][2] == 0)
            t = 1
        else
            t = localStorage.getItem('aclstime') // таймер отсчета автозакрытия
        var curTime3 = (t * 60) - Math.floor((curTime2 - curTime1) / 1000);
        if (curTime3 < 0)
            continue
        var m = Math.floor(curTime3 / 60);
        var s = Math.floor(curTime3 % 60);
        var curTime4 = "";
        if (Number(m) < 10) {
            curTime4 = "0";
        }
        curTime4 = curTime4 + String(m) + ":";
        if (Number(s) < 10) {
            curTime4 = curTime4 + "0";
        }
        curTime4 = curTime4 + String(s);
        tmrs[i][0] = curTime4
    }
    if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1 && flag == 0) {
        requestsRed()
        flag = 1
    }
    if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') === -1 && flag == 1)
        flag = 0

    if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1) {
        if (document.getElementsByClassName('ant-btn ant-btn-primary')[0] !== undefined)
            document.getElementsByClassName('ant-btn ant-btn-primary')[0].onclick = function () {
                refCurTimer(localStorage.getItem('aclstime') + ":00")
            }
        refreshTimer()

    }

    if (document.getElementById('audioswitcher').checked == true)
        if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1) {
            txt = document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].childNodes[0].innerHTML
            if (txt[14] > 0)
                audio.play()
        }


    if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1 && document.getElementsByClassName('expert-user_details-list')[1] !== undefined) {
        vertical = user = ""
        nextClassMode = nextClassstudentId = ""
        nextClassModeId = ""
        for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "supportVertical" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "teacherVertical")
                vertical = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "userType")
                user = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText

            btns = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0]

            name = btns.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-statusHTML")
                for (k = 0; k < idk; k++) {
                    if (tmrs[k][1] == name) {
                        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт урок" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идет урок" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идет ВУ" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт ВУ" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идёт вводный урок")
                            tmrs[k][4] = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
                        else
                            tmrs[k][4] = ""
                    }
                }
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-mode") {
                nextClassMode = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent
                nextClassModeId = i
            }
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId")
                nextClassstudentId = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent
        }
        if (localStorage.getItem('scriptAdr') == TP_addr) { // поиск группы, с которой  сейчас идет занятие
            if (nextClassMode == 'group') {
                nextClassstudentId = nextClassstudentId.split(',')[0]
                document.getElementsByClassName('expert-user_details-list')[1].childNodes[nextClassModeId].childNodes[1].textContent = 'group '
                function checkForLink() {
                    if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[nextClassModeId].childNodes[1].textContent == 'group ')
                        document.getElementsByClassName('expert-user_details-list')[1].childNodes[nextClassModeId].childNodes[1].textContent = 'group'
                }
                setTimeout(checkForLink, 5000)
                document.getElementById('responseTextarea1').value = '{}'
                document.getElementById('responseTextarea2').value = "https://grouplessons-api.skyeng.ru/admin/student?studentListFilter%5Bid%5D=" + nextClassstudentId
                document.getElementById('responseTextarea3').value = 'groupLessons1'
                document.getElementById('sendResponse').click()
                studentIdSearch2 = 0
                setTimeout(generateGroupLink, 1000)

                function generateGroupLink() {
                    let res = document.getElementById('responseTextarea1').getAttribute('groupLessons1')
                    if (res.split('/admin/student/view/')[1].split('<td>')[3].split('</td')[0] == 'Нет') {
                        studentIdSearch2++
                        document.getElementById('responseTextarea1').removeAttribute('groupLessons1')
                        for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId") {
                                document.getElementById('responseTextarea1').value = '{}'
                                document.getElementById('responseTextarea2').value = "https://grouplessons-api.skyeng.ru/admin/student?studentListFilter%5Bid%5D=" + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(',')[studentIdSearch2]
                                document.getElementById('responseTextarea3').value = 'groupLessons1'
                                document.getElementById('sendResponse').click()
                                setTimeout(generateGroupLink, 1000)
                                return
                            }
                        }
                    }
                    groupId = res.split('/admin/student/view/')[1].split('<td>')[3].split('</td')[0]
                    let button = document.createElement('a')
                    button.href = 'https://learning-groups-storage.skyeng.ru/group/' + groupId + '?cp=(section:participants)'
                    button.target = '_blank'
                    button.textContent = groupId
                    button.style.marginRight = '15px'

                    document.getElementsByClassName('expert-user_details-list')[1].children[0].children[0].replaceWith(button)
                    document.getElementsByClassName('expert-user_details-list')[1].children[0].children[1].remove()
                }
            }
        }

        addInfoUser.innerHTML = vertical + " + " + user
        if (document.getElementById('NS') != undefined) {
            if (vertical == "Math" || "math_flow") {
                //document.getElementById('math').style.backgroundColor = "green"
                document.getElementById('NS').style.backgroundColor = "#768d87"
            } else {
                document.getElementById('NS').style.backgroundColor = "green"
                //document.getElementById('math').style.backgroundColor = "#768d87"
            }
        }

        if (document.getElementById('NS') != undefined) {
            if (user == "student") {
                //document.getElementById('math').style.display =
                document.getElementById('NS').style.display = "none"
            } else {
                //document.getElementById('math').style.display =
                document.getElementById('NS').style.display = ""
            }
        }
        if (user == "teacher") {
            for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
                    if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.indexOf("%") === -1) {
                        id = Number.parseInt(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText)
                        document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText += " % 11 = " + (id % 11)
                    }
                    break;
                }
            }
        }

        for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
                btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                btn.appendChild(infouserbut)
                btn.appendChild(buttonservstud)
            }

            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
                btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                btn.appendChild(buttonhistory)
            }

            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
                btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                btn.appendChild(marksstata)
            }

            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
                btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
				if (typeof buttonmobpas == 'object')
                btn.appendChild(buttonmobpas)
            }

            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId") {
                btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                btn.appendChild(nextstuduserbut)
                btn.appendChild(buttonserv)
            }

            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId") {
                btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                btn.appendChild(buttonnextstudentid)
            }

            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId") {
                btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                btn.appendChild(nextteachuserbut)
                btn.appendChild(buttonservteach)
            }

            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId") {
                btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
                btn.appendChild(buttonnextteacherid)
            }
        }
    }

    if (localStorage.getItem('scriptAdr') == TP_addr) {
        if (document.getElementsByClassName('expert-user_details-list')[1] != undefined) {
            if (document.getElementsByClassName('expert-user_details-list')[1].children[0] != undefined) {
                if (document.getElementsByClassName('expert-user_details-list')[1].children[0].classList != "") {
                    let c = document.createElement('div')
                    let a = document.createElement('span')
                    a.textContent = 'Найти группу'
                    a.style.marginRight = '10px'
                    function generateGroupLink() {
                        let res = document.getElementById('responseTextarea1').getAttribute('groupLessons')
                        if (res.split('/admin/student/view/')[1].split('<td>')[3].split('</td')[0] == 'Нет') {
                            studentIdSearch++
                            for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId") {
                                    document.getElementById('responseTextarea1').value = '{}'
                                    document.getElementById('responseTextarea2').value = "https://grouplessons-api.skyeng.ru/admin/student?studentListFilter%5Bid%5D=" + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(',')[studentIdSearch]
                                    document.getElementById('responseTextarea3').value = 'groupLessons'
                                    document.getElementById('sendResponse').click()
                                    setTimeout(generateGroupLink, 1000)
                                    return
                                }
                            }
                        }
                        groupId = res.split('/admin/student/view/')[1].split('<td>')[3].split('</td')[0]
                        let button = document.createElement('a')
                        button.href = 'https://cabinet.skyeng.ru/admin/group/edit?id=' + groupId
                        button.target = '_blank'
                        button.textContent = groupId
                        button.style.marginRight = '15px'

                        document.getElementsByClassName('expert-user_details-list')[1].children[0].children[0].replaceWith(button)
                        document.getElementsByClassName('expert-user_details-list')[1].children[0].children[1].remove()
                    }
                    a.onclick = function () {
                        this.textContent = ''
                        this.parentElement.children[1].textContent = ''
                        for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "userType") {
                                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == 'student') {
                                    for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                                        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id") {
                                            studentIdSearch = 0
                                            document.getElementById('responseTextarea1').value = '{}'
                                            document.getElementById('responseTextarea2').value = "https://grouplessons-api.skyeng.ru/admin/student?studentListFilter%5Bid%5D=" + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
                                            document.getElementById('responseTextarea3').value = 'groupLessons'
                                            document.getElementById('sendResponse').click()
                                            setTimeout(generateGroupLink, 1000)
                                        }
                                    }
                                } else {
                                    for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                                        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "nextClass-studentId") {
                                            document.getElementById('responseTextarea1').value = '{}'
                                            document.getElementById('responseTextarea2').value = "https://grouplessons-api.skyeng.ru/admin/student?studentListFilter%5Bid%5D=" + document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent.split(',')[0]
                                            document.getElementById('responseTextarea3').value = 'groupLessons'
                                            document.getElementById('sendResponse').click()
                                            setTimeout(generateGroupLink, 1000)
                                        }
                                    }
                                }
                            }
                        }
                    }

                    let copyCrmFromName = document.createElement('span')
                    copyCrmFromName.textContent = ' 💾'
                    copyCrmFromName.style.cursor = "pointer"
                    document.getElementsByClassName('expert-user_details-name')[0].append(copyCrmFromName)
                    copyCrmFromName.onclick = function () {
                        for (let i = 0; i < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; i++) {
                            if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.textContent == "id") {
                                let getidafuser = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0];
                                copyToClipboard1("https://crm2.skyeng.ru/persons/" + getidafuser)
                            }
                        }
                    }

                    let userTypeName = document.createElement('span')
                    userTypeName.id = "userTypeId"
                    document.getElementsByClassName('expert-user_details-name')[0].appendChild(userTypeName)
                    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
                        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "teacher") {
                            document.getElementById('userTypeId').innerText = "(П)"
                            document.getElementById('userTypeId').style.color = "#1E90FF"
                        } else if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "student") {
                            document.getElementById('userTypeId').innerText = "(У)"
                            document.getElementById('userTypeId').style.color = "#DC143C"
                        } else if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].textContent == "parent") {
                            document.getElementById('userTypeId').innerText = "(РУ)"
                            document.getElementById('userTypeId').style.color = "#DC143C"
                        }
                    }

                    //добавил окраску бренда skyeng
                    for (let i = 0; i < document.getElementsByClassName('expert-user_details-dt').length; i++) {
                        if (document.getElementsByClassName('expert-user_details-dt')[i].innerText == "brand") {
                            for (let i = 0; i < document.getElementsByTagName('p').length; i++) {
                                if (document.getElementsByTagName('p')[i].innerText == "skyeng")
                                    document.getElementsByTagName('p')[i].style.background = "#00AEFA";
                                else if (document.getElementsByTagName('p')[i].innerText == "skysmart")
                                    document.getElementsByTagName('p')[i].style.background = "#2E8B57";
                                else if (document.getElementsByTagName('p')[i].innerText == 'идёт урок')
                                    document.getElementsByTagName('p')[i].style.background = "#FF0000";
                            }
                        }

                    }

                    c.append(a)

                    document.getElementsByClassName('expert-user_details-list')[1].prepend(c)
                }
            }
        }
    }

    if ((localStorage.getItem('scriptAdr') == TP_addr) && document.getElementById('continue_chat_button') == null && document.getElementsByClassName('expert-user_info_panel-footer-inner')[0] != undefined) {
        let btn1 = document.createElement('span');
        btn1.id = 'continue_chat_button'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn1)
        btn1.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Нецелевой</a>';
        btn1.setAttribute('onClick', 'newTaggg("untargeted");')

        let btn2 = document.createElement('span');
        btn2.id = 'operatormistake'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn2)
        btn2.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">ОшибкаКЦ</a>';
        btn2.setAttribute('onClick', 'newTaggg("oo");')

        let btn3 = document.createElement('span');
        btn3.id = 'queue'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn3)
        btn3.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Очередь</a>';
        btn3.setAttribute('onClick', 'newTaggg("queue");')

        let btn4 = document.createElement('span');
        btn4.id = 'nothelp'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn4)
        btn4.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Не помогли</a>';
        btn4.setAttribute('onClick', 'newTaggg("didnt_help");')

        let btn5 = document.createElement('span');
        btn5.id = 'recgiv'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn5)
        btn5.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Даны реком</a>';
        btn5.setAttribute('onClick', 'newTaggg("recommendations_given ");')

        let btn6 = document.createElement('span');
        btn6.id = 'noactreq'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn6)
        btn6.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Действ не треб</a>';
        btn6.setAttribute('onClick', 'newTaggg("no_action_required");')

        let btn7 = document.createElement('span');
        btn7.id = 'TCsend'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn7)
        btn7.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">TC</a>';
        btn7.setAttribute('onClick', 'newTaggg("request_forwarded_to_tc");')

        let btn8 = document.createElement('span');
        btn8.id = 'SCsend'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn8)
        btn8.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">SC</a>';
        btn8.setAttribute('onClick', 'newTaggg("request_forwarded_to_sc");')

        let btn9 = document.createElement('span');
        btn9.id = 'QAsend'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn9)
        btn9.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">QA</a>';
        btn9.setAttribute('onClick', 'newTaggg("request_forwarded_to_channel_qa");')

        let btn10 = document.createElement('span');
        btn10.id = 'TPcallsend'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn10)
        btn10.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Исход</a>';
        btn10.setAttribute('onClick', 'newTaggg("request_forwarded_to_outgoing_tp_crm2");')

        let btn11 = document.createElement('span');
        btn11.id = 'contentsend'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn11)
        btn11.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Контент</a>';
        btn11.setAttribute('onClick', 'newTaggg("request_forwarded_to_content");')

        let btn12 = document.createElement('span');
        btn12.id = 'doublechat'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn12)
        btn12.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Дубль</a>';
        btn12.setAttribute('onClick', 'newTaggg("double");')

        let btn13 = document.createElement('span');
        btn13.id = 'servis'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn13)
        btn13.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Серверные</a>';
        btn13.setAttribute('onClick', 'newTaggg("server_issues");')

        let btn14 = document.createElement('span');
        btn14.id = 'controln'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn14)
        btn14.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Контроль</a>';
        btn14.setAttribute('onClick', 'newTaggg("request_control");')

        let btn15 = document.createElement('span');
        btn15.id = 'refuse'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn15)
        btn15.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Отказ</a>';
        btn15.setAttribute('onClick', 'newTaggg("refusal_of_help");')
        btn15.addEventListener('click', function () {
            document.getElementById('otkaz').click();
        })


        let btn16 = document.createElement('span');
        btn16.id = 'solvd'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn16)
        btn16.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Решен</a>';
        btn16.setAttribute('onClick', 'newTaggg("request_solved");')

        let btn17 = document.createElement('span');
        btn17.id = '2lsend'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn17)
        btn17.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">2Л</a>';
        btn17.setAttribute('onClick', 'newTaggg("request_forwarded_to_2l_tp");')

        let btn18 = document.createElement('span');
        btn18.id = 'devsend'
        document.getElementsByClassName('expert-user_info_panel-footer-inner')[0].append(btn18)
        btn18.innerHTML = '<a style="float: left; margin-right: 5px; margin-top: 10px; color: black; cursor: pointer;">Jira</a>';
        btn18.setAttribute('onClick', 'newTaggg("request_forwarded_to_development");')
    }
}

function newTaggg(tagName) { //функция добавления тега в чат, но надо потом искать где используется
    let chatId = ''
    if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') === -1)
        chatId = document.location.pathname.split('/')[3]
    else
        chatId = document.getElementsByClassName('ant-tabs-tabpane expert-sider-tabs-panel_scrollable')[0].children[0].children[0].children[0].textContent.split(' ')[1]
    fetch("https://skyeng.autofaq.ai/api/conversation/" + chatId + "/payload", {
        "headers": {
            "content-type": "application/json",
        },
        "body": "{\"conversationId\":\"" + chatId + "\",\"elements\":[{\"name\":\"tags\",\"value\":[\"" + tagName + "\"]}]}",
        "method": "POST",
        "credentials": "include"
    });
}

function newTags(tagName) { //функция добавления нескольких тегов в чат, которые тянутся из дока в комплекте так сказать
    let chatId = ''
    if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') === -1)
        chatId = document.location.pathname.split('/')[3]
    else
        chatId = document.getElementsByClassName('ant-tabs-tabpane expert-sider-tabs-panel_scrollable')[0].children[0].children[0].children[0].textContent.split(' ')[1]
    if (tagName.split(',').length < 2)
        fetch("https://skyeng.autofaq.ai/api/conversation/" + chatId + "/payload", {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"conversationId\":\"" + chatId + "\",\"elements\":[{\"name\":\"tags\",\"value\":[\"" + tagName + "\"]}]}",
            "method": "POST",
            "credentials": "include"
        });
    else if (tagName.split(',').length == 2)
        fetch("https://skyeng.autofaq.ai/api/conversation/" + chatId + "/payload", {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"conversationId\":\"" + chatId + "\",\"elements\":[{\"name\":\"tags\",\"value\":[\"" + tagName.split(',')[0] + "\" ,\"" + tagName.split(',')[1] + "\"]}]}",
            "method": "POST",
            "credentials": "include"
        });
}

function changeviewtheme() { //функция переключения темы в истории чатов на светлую(классическуб в стиле АФ) и темную в зависимости от значения переменной полученной в локалсторедж

    if (localStorage.getItem('theme') == 'light') {
        document.getElementById('chagetheme').innerHTML = '☀'
        document.getElementById('infofield').style.background = "#f5f5f5";

    } else if (localStorage.getItem('theme') == 'dark') {
        document.getElementById('chagetheme').innerHTML = '🌛'
        document.getElementById('infofield').style.background = "#464451";
    }
}

function checkandchangestyle() { //функция проверки и переклоючения стиля при открытии  самого окна с историей чата

    if (localStorage.getItem('theme') == 'light') {

        for (let i = 0; i < document.getElementsByClassName('chatlist').length; i++) {
            document.getElementsByClassName('chatlist')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('answer-bot-date').length; i++) {
            document.getElementsByClassName('answer-bot-date')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('event-name').length; i++) {
            document.getElementsByClassName('event-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('question-event-text').length; i++) {
            document.getElementsByClassName('question-event-text')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('question-event-name').length; i++) {
            document.getElementsByClassName('question-event-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('event-container').length; i++) {
            document.getElementsByClassName('event-container')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('oper-comment-name').length; i++) {
            document.getElementsByClassName('oper-comment-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('oper-comment-container').length; i++) {
            document.getElementsByClassName('oper-comment-container')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('question-event-date').length; i++) {
            document.getElementsByClassName('question-event-date')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('answer-oper-name').length; i++) {
            document.getElementsByClassName('answer-oper-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('answer-bot-name').length; i++) {
            document.getElementsByClassName('answer-bot-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('oper-comment-operator').length; i++) {
            document.getElementsByClassName('oper-comment-operator')[i].classList.toggle('light')
        }

    } else if (localStorage.getItem('theme') == 'dark') {

        for (let i = 0; i < document.getElementsByClassName('chatlist').length; i++) {
            if (document.getElementsByClassName('chatlist')[i].classList.contains('light'))
                document.getElementsByClassName('chatlist')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('answer-bot-date').length; i++) {
            if (document.getElementsByClassName('answer-bot-date')[i].classList.contains('light'))
                document.getElementsByClassName('answer-bot-date')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('event-name').length; i++) {
            if (document.getElementsByClassName('event-name')[i].classList.contains('light'))
                document.getElementsByClassName('event-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('question-event-text').length; i++) {
            if (document.getElementsByClassName('question-event-text')[i].classList.contains('light'))
                document.getElementsByClassName('question-event-text')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('question-event-name').length; i++) {
            if (document.getElementsByClassName('question-event-name')[i].classList.contains('light'))
                document.getElementsByClassName('question-event-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('event-container').length; i++) {
            if (document.getElementsByClassName('event-container')[i].classList.contains('light'))
                document.getElementsByClassName('event-container')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('oper-comment-name').length; i++) {
            if (document.getElementsByClassName('oper-comment-name')[i].classList.contains('light'))
                document.getElementsByClassName('oper-comment-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('oper-comment-container').length; i++) {
            if (document.getElementsByClassName('oper-comment-container')[i].classList.contains('light'))
                document.getElementsByClassName('oper-comment-container')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('question-event-date').length; i++) {
            if (document.getElementsByClassName('question-event-date')[i].classList.contains('light'))
                document.getElementsByClassName('question-event-date')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('answer-oper-name').length; i++) {
            if (document.getElementsByClassName('answer-oper-name')[i].classList.contains('light'))
                document.getElementsByClassName('answer-oper-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('answer-bot-name').length; i++) {
            if (document.getElementsByClassName('answer-bot-name')[i].classList.contains('light'))
                document.getElementsByClassName('answer-bot-name')[i].classList.toggle('light')
        }

        for (let i = 0; i < document.getElementsByClassName('oper-comment-operator').length; i++) {
            if (document.getElementsByClassName('oper-comment-operator')[i].classList.contains('light'))
                document.getElementsByClassName('oper-comment-operator')[i].classList.toggle('light')
        }
    }
}

document.getElementById('chagetheme').onclick = () => { //функция переключения  по кнопке темы в истории чатов на светлую(классическуб в стиле АФ) и темную
    if (localStorage.getItem('theme') == 'light') {
        localStorage.setItem('theme', 'dark')
        document.getElementById('chagetheme').innerHTML = '🌛'
        document.getElementById('infofield').style.background = "#464451";
        checkandchangestyle();
    } else if (localStorage.getItem('theme') == 'dark') {
        localStorage.setItem('theme', 'light')
        document.getElementById('chagetheme').innerHTML = '☀'
        document.getElementById('infofield').style.background = "#f5f5f5";
        checkandchangestyle();
    }
};

async function chatstatus() { //получение инфы обращался ли пользователль до этого или нет
    let tempvariable = document.getElementById('idstudent').value.trim();
    document.getElementById('ChatStatus').style.display = "none";
    document.getElementById('getcurrentstatus').style.display = "none";
    await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
        "headers": {
            "content-type": "application/json",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://skyeng.autofaq.ai/tickets/archive",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"channelUserFullTextLike\":\"" + tempvariable + "\",\"tsFrom\":\"2021-11-01T19:00:00.000Z\",\"tsTo\":\"2022-12-01T18:59:59.059Z\",\"orderBy\":\"ts\",\"orderDirection\":\"Desc\",\"page\":1,\"limit\":10}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(r => r.json()).then(data => infres = data)
    if (infres.total > 0) {
        document.getElementById('ChatStatus').style.display = "";
        document.getElementById('ChatStatus').textContent = "📧";
        convid = infres.items[0].conversationId;
        werechats = true;
        if (infres.items[0].stats.usedStatuses[0] == "AssignedToOperator" || infres.items[0].stats.usedStatuses[0] == "OnOperator")
            chatisopen = true;
        else
            chatisopen = false;
    } else if (infres.total == 0) {
        document.getElementById('ChatStatus').style.display = "";
        document.getElementById('ChatStatus').textContent = "🚫";
        werechats = false;
    }
}

async function startnewchat(polzid) { //открывает чат с пользователем проверяя обращался ли он ранее и есть ли активный на операторе
    if (operatorId == "") {
        await whoAmI()
    }

    if (polzid) {
        console.log(polzid);
        await fetch(`https://skyeng.autofaq.ai/api/conversation/start?channelId=eca64021-d5e9-4c25-b6e9-03c24s638d4d&userId=${polzid}&operatorId=${operatorId}&groupId=b6f7f34d-2f08-fc19-3661-29ac00842898`, {
            headers: {
            },
            referrer: "https://skyeng.autofaq.ai/tickets/assigned/",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: null,
            method: "POST",
            mode: "cors",
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                chatId = data.conversationId
                console.log(data, chatId)
            })
        alert(`Чат начат c пользователем ${polzid}`);
        chatisopen = '';
        werechats = false;

    } else alert('Не введен id пользователя');
}

async function startnewchatfast(polzid) { //открывает быстро чат с пользователем
    if (operatorId == "") {
        await whoAmI()
    }

    if (polzid) {
        await fetch(`https://skyeng.autofaq.ai/api/conversation/start?channelId=eca64021-d5e9-4c25-b6e9-03c24s638d4d&userId=${polzid}&operatorId=${operatorId}&groupId=b6f7f34d-2f08-fc19-3661-29ac00842898`, {
            headers: {
            },
            referrer: "https://skyeng.autofaq.ai/tickets/assigned/",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: null,
            method: "POST",
            mode: "cors",
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                chatId = data.conversationId
                console.log(data, chatId)
            })
    } else alert('Не введен id пользователя');
}

function setactivechatstyle() { // функция добавляющая активному чату класс selchatact который слева рисует синюю границу толще чтобы было заметнее
    if (document.URL.split('/')[2] == 'skyeng.autofaq.ai' && document.URL.length > 43 && document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0] !=undefined && !document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].classList.contains("selchatact"))
        document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].classList.toggle('selchatact')
}

setInterval(setactivechatstyle, 1000)

function fillchatbox() { //функция наполнения элемента, где выводится история чатов

    document.getElementById('infofield').innerHTML = ''

    let timearr = [];
    let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    let timearr2 = [];
    let options2 = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    let temppics = [];
    let testarray = [];
    let brarray = [];
    let restul;

    // след 2 строки - скрипт заполняет значения уже при открытии самого чата по его хешу или при клике на чат из списка в истории
    if (Object.entries(convdata.channelUser.payload) == '' && convdata.channelUser.channelTpe == 'Telegram')
        document.getElementById('placeusid').innerText = "Telegram";
    else if (Object.entries(convdata.channelUser.payload) != '' && convdata.channelUser.channelTpe != 'Telegram' && convdata.channelUser.channelTpe != 'Widget')
        document.getElementById('placeusid').innerText = convdata.channelUser.id;
    else if (Object.entries(convdata.channelUser.payload) == '' && convdata.channelUser.channelTpe != 'Telegram' && convdata.channelUser.channelTpe == 'Widget')
        document.getElementById('placeusid').innerText = "Widget";
    else if (Object.entries(convdata.channelUser.payload) != '' && convdata.channelUser.channelTpe != 'Telegram' && convdata.channelUser.channelTpe == 'Widget')
        document.getElementById('placeusid').innerText = convdata.channelUser.payload.id;

    document.getElementById('placechatid').innerText = convdata.id;
    document.getElementById('somechatinfo').style.display = '';
    document.getElementById('bottommenuchhis').style.display = '';
    for (let i = 0; i < convdata.messages.length; i++) {
        timearr.push(new Date(convdata.messages[i].ts).toLocaleDateString('ru-RU', options))
        timearr2.push(new Date(convdata.messages[i].ts).toLocaleTimeString('ru-RU', options2))
        switch (convdata.messages[i].tpe) {
            case "Question":
                if (convdata.messages[i].click == undefined) {

                    testarray = convdata.messages[i].txt.match(/<p>(.*?)<\/p>/gm);

                    if (testarray == null) {
                        brarray = [];
                        if (convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm) != null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm) == null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm) == null)
                            brarray.push(convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm))
                        else if (convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm) == null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm) != null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm) == null)
                            brarray.push(convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm))
                        else if (convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm) == null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm) == null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm) != null)
                            brarray.push(convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm))
                        else if (convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm) == null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm) != null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm) != null)
                            brarray.push(convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm), convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm))
                        else if (convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm) != null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm) == null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm) != null)
                            brarray.push(convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm), convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm))
                        else if (convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm) != null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm) != null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm) == null)
                            brarray.push(convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm), convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm))
                        else if (convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm) != null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm) != null && convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm) != null)
                            brarray.push(convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpeg/gm), convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*jpg/gm), convdata.messages[i].txt.match(/https:\/\/vimbox-resource.*png/gm))
                        else brarray = null;
                    }

                    if (testarray != null) {
                        temppics = [];

                        for (let i = 0; i < testarray.length; i++) {
                            if (testarray[i].match(/https:\/\/vimbox-resource.*jpg/gm) != null)
                                temppics.push(testarray[i].match(/https:\/\/vimbox-resource.*jpg/gm)[0])
                            else if (testarray[i].match(/https:\/\/vimbox-resource.*png/gm) != null)
                                temppics.push(testarray[i].match(/https:\/\/vimbox-resource.*png/gm)[0])
                            else if (testarray[i].match(/https:\/\/vimbox-resource.*jpeg/gm) != null)
                                temppics.push(testarray[i].match(/https:\/\/vimbox-resource.*jpeg/gm)[0])
                        }

                        if (temppics.length == 1) {
                            document.getElementById('infofield').innerHTML += '<br>' + '<div class="question-event">' + '<span class="question-event-name">' + convdata.channelUser.fullName + '</span>' + '<span class="question-event-date">' + timearr[i] + '</span>' + '<div  class="question-event-text">' + '<br>' + convdata.messages[i].txt.replace(convdata.messages[i].txt.match(/<p>(.*?)<\/p>/gm)[0], `<a href="${temppics[0]}" data-lightbox="pictures"><img src="${temppics[0]}" class="img-chat-history" alt="Изображение"></img></a>`) + '</a>' + '</div>' + '</div>'

                        } else if (temppics.length > 1) {

                            restul = convdata.messages[i].txt;
                            for (let j = 0; j < temppics.length; j++) {
                                restul = restul.replace(convdata.messages[i].txt.match(/<p>(.*?)<\/p>/gm)[j], `<a href="${temppics[j]}" data-lightbox="pictures"><img src="${temppics[j]}" class="img-chat-history" alt="Изображение"></img></a>`)

                            }

                            document.getElementById('infofield').innerHTML += '<br>' + '<div class="question-event">' + '<span class="question-event-name">' + convdata.channelUser.fullName + '</span>' + '<span class="question-event-date">' + timearr[i] + '</span>' + '<div  class="question-event-text">' + '<br>' + restul + '</div>' + '</div>'
                        } else if (temppics.length == 0) {
                            document.getElementById('infofield').innerHTML += '<br>' + '<div class="question-event">' + '<span class="question-event-name">' + convdata.channelUser.fullName + '</span>' + '<span class="question-event-date">' + timearr[i] + '</span>' + '<div  class="question-event-text">' + '<br>' + convdata.messages[i].txt + '</div>' + '</div>'
                        }
                    } else if (brarray != null) {

                        if (brarray.length == 1)
                            document.getElementById('infofield').innerHTML += '<br>' + '<div class="question-event">' + '<span class="question-event-name">' + convdata.channelUser.fullName + '</span>' + '<span class="question-event-date">' + timearr[i] + '</span>' + '<div  class="question-event-text">' + '<br>' + convdata.messages[i].txt.replace(convdata.messages[i].txt, `<img src="${brarray[0]}" class="img-chat-history"></img>`) + '</div>' + '</div>'

                    } else {
                        document.getElementById('infofield').innerHTML += '<br>' + '<div class="question-event">' + '<span class="question-event-name">' + convdata.channelUser.fullName + '</span>' + '<span class="question-event-date">' + timearr[i] + '</span>' + '<div  class="question-event-text">' + '<br>' + convdata.messages[i].txt + '</div>' + '</div>'
                    }

                } else {
                    document.getElementById('infofield').innerHTML += '<br>' + '<div class="question-event">' + '<span class="question-event-name">' + convdata.channelUser.fullName + '</span>' + '<span class="question-event-date">' + timearr[i] + '</span>' + '<div  class="question-event-text">' + '<br>' + convdata.messages[i].click.clickLabel + '</div>' + '</div>'
                }
                break;

            case "Event":
                let eventmsg;

                if (convdata.messages[i].eventTpe == 'NewConversation')
                    eventmsg = 'Начат новый диалог'
                else if (convdata.messages[i].eventTpe == 'RunScenario')
                    eventmsg = 'Сценарий запущен'
                else if (convdata.messages[i].eventTpe == 'FirstTimeInQueue')
                    eventmsg = 'Диалог отправлен в очередь'
                else if (convdata.messages[i].eventTpe == 'RunIntegration')
                    eventmsg = 'Запущена интеграция ' + convdata.messages[i].payload.name
                else if (convdata.messages[i].eventTpe == 'FinishIntegration')
                    eventmsg = 'Интеграция успешно отработала'

                if (convdata.messages[i].eventTpe != 'AssignToOperator' && convdata.messages[i].eventTpe != 'ReturnToQueue' && convdata.messages[i].eventTpe != 'CloseConversation' && convdata.messages[i].eventTpe != 'CreatedByOperator') {
                    document.getElementById('infofield').innerHTML += '<div class="event-container">' + eventmsg + '<span class="event-date">' + timearr2[i] + '</span>' + '</div>'
                } else if (convdata.messages[i].eventTpe == 'AssignToOperator' && convdata.messages[i].payload.status == 'OnOperator' && convdata.messages[i].payload.oid != undefined) {
                    let operid = convdata.messages[i].payload.oid;
                    let opername;
                    opername = operatorsarray.filter(i => (i.operator != null && i.operator.id == operid))
                    document.getElementById('infofield').innerHTML += '<div class="event-container">' + 'Диалог назначен на ' + opername[0].operator.fullName + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                } else if (convdata.messages[i].eventTpe == 'AssignToOperator' && convdata.messages[i].payload.status == 'AssignedToOperator' && convdata.messages[i].payload.oid != undefined) {
                    let operid = convdata.messages[i].payload.oid;
                    let opername;
                    opername = operatorsarray.filter(i => (i.operator != null && i.operator.id == operid))
                    document.getElementById('infofield').innerHTML += '<div class="event-container">' + opername[0].operator.fullName + ' взял(а) диалог в работу' + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                } else if (convdata.messages[i].eventTpe == 'ReturnToQueue' && convdata.messages[i].payload.sender != undefined && convdata.messages[i].payload.sender != 'timer') {
                    let operid = convdata.messages[i].payload.sender;
                    let opername;
                    opername = operatorsarray.filter(i => (i.operator != null && i.operator.id == operid))
                    document.getElementById('infofield').innerHTML += '<div class="event-name">' + opername[0].operator.fullName + ' вернул(а) диалог в очередь с тематикой ' + '<br>' + convdata.messages[i].payload.afsName + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                } else if (convdata.messages[i].eventTpe == 'ReturnToQueue' && convdata.messages[i].payload.sender == undefined) {
                    let operid = convdata.messages[i].payload.prevOid;
                    let opername;
                    opername = operatorsarray.filter(i => (i.operator != null && i.operator.id == operid))
                    document.getElementById('infofield').innerHTML += '<div class="event-name">' + 'Диалог вернулся в общую очередь от ' + opername[0].operator.fullName + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                } else if (convdata.messages[i].eventTpe == 'ReturnToQueue' && convdata.messages[i].payload.sender != undefined && convdata.messages[i].payload.sender == 'timer') {
                    document.getElementById('infofield').innerHTML += '<div class="event-name">' + 'Диалог автоматически возвращен в очередь по отсутствию активности оператора' + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                } else if (convdata.messages[i].eventTpe == 'CloseConversation' && convdata.messages[i].payload.status != 'ClosedByBot' && convdata.messages[i].payload.sender == 'userAnswerTimer') {
                    document.getElementById('infofield').innerHTML += '<div class="event-name">' + 'Диалог автоматически закрыт по отсутствию активности пользователя' + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                } else if (convdata.messages[i].eventTpe == 'CloseConversation' && Object.values(convdata.messages[i].payload) != '' && convdata.messages[i].payload.status != 'ClosedByBot' && convdata.messages[i].payload.sender != 'userAnswerTimer') {
                    let operidcls = convdata.messages[i].payload.sender;
                    let opernamecls;
                    opernamecls = operatorsarray.filter(i => (i.operator != null && i.operator.id == operidcls))
                    document.getElementById('infofield').innerHTML += '<div class="event-name">' + opernamecls[0].operator.fullName + ' закрыл чат с тематикой:  ' + '<br>' + convdata.messages[i].payload.afsName + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                } else if (convdata.messages[i].eventTpe == 'CloseConversation' && Object.values(convdata.messages[i].payload) == '') {
                    document.getElementById('infofield').innerHTML += '<div class="event-name">' + convdata.messages[i].eventTpe + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                } else if (convdata.messages[i].eventTpe == 'CreatedByOperator') {
                    let operid = convdata.messages[i].payload.oid;
                    let opername;
                    opername = operatorsarray.filter(i => (i.operator != null && i.operator.id == operid))
                    document.getElementById('infofield').innerHTML += '<div class="event-name">' + opername[0].operator.fullName + ' открыл(а) новый диалог' + '<span class="event-other-date">' + timearr2[i] + '</span>' + '</div>'
                }
                break;

            case "AnswerOperatorWithBot":
                document.getElementById('infofield').innerHTML += '<br>' + '<div class="answer-bot-container">' + '<span class="answer-bot-name">' + 'AutoFAQ bot' + '</span>' + '<span class="answer-bot-date">' + timearr[i] + '</span>' + '<div  class="question-event-text">' + '<br>' + convdata.messages[i].txt + '</div>' + '</div>'
                break;

            case "AnswerBot":
                document.getElementById('infofield').innerHTML += '<br>' + '<div class="answer-bot-container">' + '<span class="answer-bot-name">' + 'AutoFAQ bot' + '</span>' + '<span class="answer-bot-date">' + timearr[i] + '</span>' + '<div  class="question-event-text">' + '<br>' + convdata.messages[i].txt + '</div>' + '</div>'
                break;

            case "AnswerOperator":
                let operidansw = convdata.messages[i].operatorId
                let opernameansw;
                opernameansw = operatorsarray.filter(i => (i.operator != null && i.operator.id == operidansw))
                document.getElementById('infofield').innerHTML += '<br>' + '<div class="answer-oper-container">' + '<span class="answer-oper-name">' + opernameansw[0].operator.fullName + '</span>' + '<span class="question-event-date">' + timearr[i] + '</span>' + '<div  class="question-event-text">' + '<br>' + convdata.messages[i].txt + '</div>' + '</div>'
                break;

            case "OperatorComment":
                if (convdata.messages[i].operatorId != 'autoFAQ') {
                    let operidanswcom = convdata.messages[i].operatorId
                    let opernameanswcom;
                    opernameanswcom = operatorsarray.filter(i => (i.operator != null && i.operator.id == operidanswcom))
                    document.getElementById('infofield').innerHTML += '<br>' + '<div class="oper-comment-container">' + '<span class="oper-comment-name">' + opernameanswcom[0].operator.fullName + '</span>' + '<span class="question-event-date">' + timearr[i] + '</span>' + '<div class="question-event-text">' + '<br>' + convdata.messages[i].txt + '</div>' + '</div>'
                } else {
                    document.getElementById('infofield').innerHTML += '<br>' + '<div class="oper-comment-container">' + '<span class="oper-comment-operator">' + convdata.messages[i].operatorId + '</span>' + '<span class="question-event-date">' + timearr[i] + '</span>' + '<div class="question-event-text">' + '<br>' + convdata.messages[i].txt + '</div>' + '</div>'
                }
                break;
        }
    }
}

async function findchatsoper() { // ищет активные чаты на выбранном операторе
    let objSel = document.getElementById("operatorstp");
    let getdateset = new Date()
    let hrs;
    let mins;
    let secs;
    let difhrs;
    if (getdateset.getUTCHours() < 10)
        hrs = "0" + (getdateset.getUTCHours());
    else if (getdateset.getUTCHours() >= 24)
        hrs = '0' + ((getdateset.getUTCHours() - 24))
    else
        hrs = (getdateset.getUTCHours());


    if (hrs - 1 < 10)
        difhrs = '0' + (hrs - 1)
    else difhrs = hrs;

    if (getdateset.getMinutes() < 10)
        mins = "0" + getdateset.getMinutes();
    else mins = getdateset.getMinutes();

    if (getdateset.getUTCSeconds() < 10)
        secs = "0" + getdateset.getUTCSeconds();
    else secs = getdateset.getUTCSeconds()

    flagsearch = 'searchbyoperator'

    if (foundarr != '')
        foundarr = '';

    if (document.getElementById('placeusid').innerText != '')
        document.getElementById('placeusid').innerText = ''

    if (document.getElementById('placechatid').innerText != '')
        document.getElementById('placechatid').innerText = ''

    if (document.getElementById('somechatinfo').style.display == '')
        document.getElementById('somechatinfo').style.display = 'none';

    if (document.getElementById('bottommenuchhis').style.display == '')
        document.getElementById('bottommenuchhis').style.display = 'none';

    if (document.getElementById('comentsbar').style.display == '')
        document.getElementById('comentsbar').style.display = 'none';


    document.getElementById('infofield').innerHTML = 'Загрузка'

    if (objSel.length > 1) {
        for (let i = 1; i < objSel.length; i++) {
            if (objSel[i].selected == true) {
                await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
                    "headers": {
                        "content-type": "application/json",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin"
                    },
                    "body": `{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"participatingOperatorsIds\":[\"${objSel[i].value}\"],\"tsFrom\":\"${document.getElementById('dateFromChHis').value}T${difhrs}:${mins}:${secs}.000Z\",\"tsTo\":\"${document.getElementById('dateToChHis').value}T${hrs}:${mins}:${secs}.000Z\",\"usedStatuses\":[\"OnOperator\",\"AssignedToOperator\",\"Active\"],\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":10}`,
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                }).then(r => r.json()).then(r => operchatsdata = r)
                console.log(operchatsdata)

                if (operchatsdata.total == 0)
                    alert(`У выбранного пользователя ${objSel[i].innerText} нет активных чатов`)

                for (let i = 0; i < operchatsdata.items.length; i++) {

                    let tmestmp = new Date((operchatsdata.items[i].ts.split('[GMT]'))[0])
                    let tshrs;
                    let tsmin
                    let day;
                    let month;

                    if (tmestmp.getMonth() < 9)
                        month = "0" + (tmestmp.getMonth() + 1)
                    else
                        month = (tmestmp.getMonth() + 1)
                    if (tmestmp.getDate() < 10)
                        day = "0" + tmestmp.getDate()
                    else
                        day = tmestmp.getDate()
                    let year = tmestmp.getFullYear();
                    if ((tmestmp.getUTCHours() + 3) < 10)
                        tshrs = "0" + (tmestmp.getUTCHours() + 3);
                    else if ((tmestmp.getUTCHours() + 3) >= 24)
                        tshrs = '0' + ((tmestmp.getUTCHours() + 3 - 24))
                    else tshrs = (tmestmp.getUTCHours() + 3);

                    if (tmestmp.getMinutes() < 10)
                        tsmin = "0" + tmestmp.getMinutes();
                    else tsmin = tmestmp.getMinutes();

                    if (operchatsdata.items[i].channelUser.channelTpe != 'Telegram' && operchatsdata.items[i].channelUser.channelTpe != 'Widget' && operchatsdata.items[i].channelUser.payload.userFullName == undefined)
                        foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700">' + operchatsdata.items[i].channelUser.payload.userType + '</span>' + ' ' + operchatsdata.items[i].channelUser.fullName + '</span>' + '<br>'
                    else if (operchatsdata.items[i].channelUser.channelTpe != 'Telegram' && operchatsdata.items[i].channelUser.channelTpe != 'Widget' && operchatsdata.items[i].channelUser.payload.userFullName != undefined)
                        foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700">' + operchatsdata.items[i].channelUser.payload.userType + '</span>' + ' ' + operchatsdata.items[i].channelUser.payload.userFullName + '</span>' + '<br>'
                    else if (operchatsdata.items[i].channelUser.channelTpe == 'Telegram' && operchatsdata.items[i].channelUser.payload == undefined)
                        foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700">' + operchatsdata.items[i].channelUser.channelTpe + '</span>' + ' ' + operchatsdata.items[i].channelUser.fullName + '</span>' + '<br>'
                    else if (operchatsdata.items[i].channelUser.channelTpe == 'Widget' && operchatsdata.items[i].channelUser.payload == undefined)
                        foundarr += '<span class="chatlist" style="cursor:pointer;">' + day + '.' + month + '.' + year + ' ' + tshrs + ':' + tsmin + ' ' + '<span style ="color:#00BFFF; font-weight:700">' + operchatsdata.items[i].channelUser.channelTpe + '</span>' + ' ' + operchatsdata.items[i].channelUser.fullName + '</span>' + '<br>'
                }

                document.getElementById('infofield').innerHTML = foundarr;
                checkandchangestyle()

                for (let i = 0; i < document.getElementsByClassName('chatlist').length; i++) {
                    document.getElementsByClassName('chatlist')[i].title = operchatsdata.items[i].conversationId

                    document.getElementsByClassName('chatlist')[i].onclick = async () => {

                        await fetch("https://skyeng.autofaq.ai/api/conversations/" + document.getElementsByClassName('chatlist')[i].title).then(r => r.json()).then(r => convdata = r)
                        console.log(convdata)

                        if (convdata.status != null && convdata.status == 'AssignedToOperator')
                            isChatOnOperator = true
                        else isChatOnOperator = false;

                        fillchatbox();
                        checkandchangestyle();
                    } // конец функции клика по списку в найденном чате
                }
            }
        }
    }
}

function addbuttonsintegration() { // добавляет подсветку при создании задачи зеленым цветом 2лтп, красным тп исхода 1 линии
    if (document.getElementsByClassName('ant-modal-content')[0] !== undefined) {
        if (document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Создать задачу') {
            let categorylist = document.querySelectorAll('.ant-form-item-control-input-content')
            //let categorylist = document.querySelectorAll('.ant-form-item-control-input-content')[4].children[0].childNodes[1];
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(butteachid)
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(butstdid)
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(butteachidfstd)
            document.getElementsByClassName('ant-modal-content')[0].childNodes[2].appendChild(buttonservid)
            for (let i = 0; i < categorylist.length; i++) {
                if (categorylist[i].innerText == "Техподдержка исход crm2") {
                    categorylist[i].style.color = "red";
                    categorylist[i].style.fontWeight = 600;
                    categorylist[i].style.textShadow = "1px 1px 1px black, 0 0 1em red";
                } else if (categorylist[i].innerText == "Техподдержка 2-я линия crm2") {
                    categorylist[i].style.color = "green";
                    categorylist[i].style.fontWeight = 600;
                    categorylist[i].style.textShadow = "1px 1px 1px black, 0 0 1em green";
                } else {
                    categorylist[i].style.color = "black";
                    categorylist[i].style.fontWeight = 400;
                    categorylist[i].style.textShadow = "0px 0px 0px black, 0 0 1em grey";
                }
            }
        }
    }
}

setInterval(addbuttonsintegration, 1000)

async function remandressl() { // функция удаления и сброса слайдов но с добавлением также функций просмотра ID методиста которому была отправлена работае, информации об уроке в контенте
    if (document.URL.split('/').length > 4 && location.host != 'ttc.skyeng.ru' && document.URL.split('/')[3] != 'portfolio' && document.URL.split('/')[2] != 'skyeng.autofaq.ai' && document.URL.split('/')[3] != 'circles' && document.URL.split('/')[3] != 'profile' && document.URL.split('/')[3] != 'adults' && document.URL.split('/')[3] != 'kids' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] != 'vimbox.skyeng.ru/lesson' && document.URL.split('/')[3] != 'inspector-showcase') {
        if (document.URL.split('/')[2] + "/" + document.URL.split('/')[3] == "vimbox.skyeng.ru/workbook" || document.URL.split('/')[6].match(/materials\?studentId=/)[0] == 'materials?studentId=') {
            let remove = document.createElement('span')
            remove.id = "removebtn"
            remove.title = "По нажатию удалит все заданные упражнения на дом из категорий Lesson и Homework. После чего сообщит об этом и по закрытию диалогового окна обновит страницу, чтобы увидели результат."
            remove.textContent = "❌"
            remove.style = 'cursor:pointer; position:absolute; top: 12px; left: 635px;'
            remove.onclick = removeslide;

            let lessoninfo = document.createElement('span')
            lessoninfo.id = "lessoninfo"
            lessoninfo.title = "По нажатию копирует в буфер информацию об уроке"
            lessoninfo.textContent = "❓"
            lessoninfo.style = 'cursor:pointer; position:absolute; top: 12px; left: 685px;'
            lessoninfo.onclick = getlessoninfo;

            let methodist = document.createElement('span')
            methodist.id = 'methodid';
            methodist.innerText = "🆔"
            methodist.title = "По нажатию получите информацию о том, какому методисту была отправлена работа эссе или рекординг"
            methodist.style = 'cursor:pointer; position:absolute; top: 12px; left: 635px;'
            methodist.onclick = getmethodistid;

            let reset = document.createElement('span')
            reset.id = "resetbtn"
            reset.textContent = "🔄"
            reset.title = "По нажатию сбросит прогресс выполнениях все слайдов из категории Homework. После чего сообщит об этом и по закрытию диалогового окна обновит страницу, чтобы увидели результат."
            reset.style = 'cursor:pointer; position:absolute; top: 12px; left: 660px;'
            reset.onclick = resetslide;

            if (document.getElementById('lessoninfo') == null && document.getElementById('removebtn') == null && document.getElementById('resetbtn') == null) {
                if (document.getElementsByClassName('-type-primary')[1].innerText == "Send as Homework" && document.getElementsByClassName('-type-primary')[2].innerText == "Send Homework") {
                    document.getElementsByClassName('-type-primary')[4].appendChild(remove)
                    document.getElementsByClassName('-type-primary')[4].appendChild(reset)
                    document.getElementsByClassName('-type-primary')[4].appendChild(lessoninfo)

                    if (document.URL.split('/')[6].match(/materials/)[0] == 'materials' || document.URL.split('/')[6].match(/materials\?studentId=/)[0] == 'materials?studentId=' || document.URL.split('/')[6] != 'materials?tool=homework')
                        document.getElementsByClassName('-type-primary')[4].appendChild(methodist)
                    document.getElementById('methodid').style.left = '615px';
                } else if (document.getElementsByClassName('-type-primary')[1].innerText == "Send as Homework" && document.getElementsByClassName('-type-primary')[2].innerText != "Send Homework") {
                    document.getElementsByClassName('-type-primary')[3].appendChild(remove)
                    document.getElementsByClassName('-type-primary')[3].appendChild(reset)
                    document.getElementsByClassName('-type-primary')[3].appendChild(lessoninfo)

                    if (document.URL.split('/')[6].match(/materials/)[0] == 'materials' || document.URL.split('/')[6].match(/materials\?studentId=/)[0] == 'materials?studentId=' || document.URL.split('/')[6] != 'materials?tool=homework')
                        document.getElementsByClassName('-type-primary')[3].appendChild(methodist)
                    document.getElementById('methodid').style.left = '615px';

                } else if (document.getElementsByClassName('-type-primary')[1].innerText == "Send Homework" && document.getElementsByClassName('-type-primary')[2].innerText != "Send Homework") {
                    document.getElementsByClassName('-type-primary')[3].appendChild(remove)
                    document.getElementsByClassName('-type-primary')[3].appendChild(reset)
                    document.getElementsByClassName('-type-primary')[3].appendChild(lessoninfo)

                    if (document.URL.split('/')[6].match(/materials/)[0] == 'materials' || document.URL.split('/')[6].match(/materials\?studentId=/)[0] == 'materials?studentId=' || document.URL.split('/')[6] != 'materials?tool=homework')
                        document.getElementsByClassName('-type-primary')[3].appendChild(methodist)
                    document.getElementById('methodid').style.left = '615px';

                } else if (document.getElementsByClassName('-type-primary')[2].children[1].innerText == "Grammar") {
                    document.getElementsByClassName('-type-primary')[2].appendChild(remove)
                    document.getElementsByClassName('-type-primary')[2].appendChild(reset)
                    document.getElementsByClassName('-type-primary')[2].appendChild(lessoninfo)

                    if (document.URL.split('/')[6].match(/materials/)[0] == 'materials' || document.URL.split('/')[6].match(/materials\?studentId=/)[0] == 'materials?studentId=' || document.URL.split('/')[6] != 'materials?tool=homework')
                        document.getElementsByClassName('-type-primary')[2].appendChild(methodist)
                    document.getElementById('methodid').style.left = '615px';
                }
            }
            if (document.getElementById('lessoninfo') == null && document.getElementById('methodid') == null && document.getElementById('resetbtn') == null) {
                if (document.getElementsByClassName('-type-primary')[1].innerText != "Send Homework" && document.getElementsByClassName('-type-primary')[2].innerText != "Send Homework") {
                    document.getElementsByClassName('-type-primary')[1].appendChild(reset)
                    document.getElementsByClassName('-type-primary')[1].appendChild(methodist)
                    document.getElementsByClassName('-type-primary')[1].appendChild(lessoninfo)
                }
            }

            async function removeslide() {
                let d = document.cookie;
                d = d.match(/token_global=(.*)/);

                await fetch("https://rooms-vimbox-ams3.skyeng.ru/rooms/api/v1/rooms/" + document.URL.split('/')[4] + "/join", {
                    "headers": {
                        "accept": "application/json, text/plain, */*",
                        "authorization": "Bearer" + d[1],
                    },
                    "method": "PATCH",
                    "mode": "cors",
                    "credentials": "include"
                }).then(r => r.json()).then(data => joinresult = data)

                for (let i = 0; i < joinresult.lessonPlan.Homework.length; i++) {

                    await fetch("https://rooms-vimbox-ams3.skyeng.ru/rooms/api/v1/homeworks/workbook/" + joinresult.workbooks[0].id + "/step/" + joinresult.lessonPlan.Homework[i].stepUUID, {
                        "headers": {
                            "authorization": "Bearer" + d[1],
                        },
                        "method": "DELETE",
                        "mode": "cors",
                        "credentials": "include"
                    });
                }

                for (let i = 0; i < joinresult.lessonPlan.Lesson.length; i++) {

                    await fetch("https://rooms-vimbox-ams3.skyeng.ru/rooms/api/v1/homeworks/workbook/" + joinresult.workbooks[0].id + "/step/" + joinresult.lessonPlan.Lesson[i].stepUUID, {
                        "headers": {
                            "authorization": "Bearer" + d[1],
                        },
                        "method": "DELETE",
                        "mode": "cors",
                        "credentials": "include"
                    });
                }

                alert("Слайды успешно отозваны с домашнего задания с категорий Lesson и Homework! Страница будет обновлена.")
                window.location.reload();
            }

            // Кнопка для получения информации об методисте, которому ушло эссе/рекординг

            async function getmethodistid() {
                let d = document.cookie;
                d = d.match(/token_global=(.*)/);


                if (document.URL.split('/')[6] != 'materials?tool=homework') {
                    await fetch("https://rooms-vimbox.skyeng.ru/rooms/api/v1/rooms/" + document.URL.split('/')[4] + "/join", {
                        "headers": {
                            "accept": "application/json, text/plain, */*",
                            "authorization": "Bearer" + d[1],
                        },
                        "method": "PATCH",
                        "mode": "cors",
                        "credentials": "include"
                    }).then(r => r.json()).then(r => joinresult = r)
                    await fetch(`https://essay-vimbox.skyeng.ru/api/v1/essay/${joinresult.currentStepRevId}/ensure/0`, {
                        "headers": {
                            "accept": "application/json, text/plain, */*",
                            "accept-language": "ru",
                            "authorization": "Bearer" + d[1],
                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        },
                        "body": `studentId=${joinresult.students[0].id}&projectName=vimbox`,
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    }).then(r => r.json()).then(r => result = r)

                    if (result.record == undefined && result.text != null) {
                        alert("Эссе отправлено методисту ID: " + result.methodistId)

                    } else {
                        await fetch(`https://record-vimbox.skyeng.ru/api/v1/record/${joinresult.currentStepRevId}/ensure/0`, {
                            "headers": {
                                "accept": "application/json, text/plain, */*",
                                "accept-language": "ru",
                                "authorization": "Bearer" + d[1],
                                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                            },
                            "body": `studentId=${joinresult.students[0].id}&projectName=vimbox&sourceId=0`,
                            "method": "POST",
                            "mode": "cors",
                            "credentials": "include"
                        }).then(r => r.json()).then(r => result = r)

                        if (result.record != undefined)
                            alert("Record отправлен методисту ID: " + result.record.methodistId)
                    }
                } else {

                    await fetch("https://rooms-vimbox.skyeng.ru/rooms/api/v1/rooms/" + document.URL.split('/')[4] + "/join", {
                        "headers": {
                            "accept": "application/json, text/plain, */*",
                            "authorization": "Bearer" + d[1],
                        },
                        "method": "PATCH",
                        "mode": "cors",
                        "credentials": "include"
                    }).then(r => r.json()).then(r => joinresult = r)
                    await fetch(`https://essay-vimbox.skyeng.ru/api/v1/essay/${joinresult.currentStepRevId}/ensure/0`, {
                        "headers": {
                            "accept": "application/json, text/plain, */*",
                            "accept-language": "ru",
                            "authorization": "Bearer" + d[1],
                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        },
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    }).then(r => r.json()).then(r => result = r)

                    if (result.record == undefined && result.text != null) {
                        alert("Эссе отправлено методисту ID: " + result.methodistId)

                    } else {
                        await fetch(`https://record-vimbox.skyeng.ru/api/v1/record/${joinresult.currentStepRevId}/ensure/0`, {
                            "headers": {
                                "accept": "application/json, text/plain, */*",
                                "accept-language": "ru",
                                "authorization": "Bearer" + d[1],
                                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                            },
                            "method": "POST",
                            "mode": "cors",
                            "credentials": "include"
                        }).then(r => r.json()).then(r => result = r)

                        if (result.record != undefined)
                            alert("Record отправлен методисту ID: " + result.record.methodistId)
                    }
                }
            }

            // аналогично для сброса прогресса слайдов

            async function resetslide() {

                let d = document.cookie;
                d = d.match(/token_global=(.*)/);

                await fetch("https://rooms-vimbox-ams3.skyeng.ru/rooms/api/v1/rooms/" + document.URL.split('/')[4] + "/join", {
                    "headers": {
                        "accept": "application/json, text/plain, */*",
                        "authorization": "Bearer" + d[1],
                    },
                    "method": "PATCH",
                    "mode": "cors",
                    "credentials": "include"
                }).then(r => r.json()).then(data => joinresult = data)

                for (let i = 0; i < joinresult.lessonPlan.Homework.length; i++) {
                    await fetch("https://rooms-vimbox.skyeng.ru/rooms/api/v1/workbooks/steps/" + joinresult.lessonPlan.Homework[i].id + "/reset", {
                        "headers": {
                            "accept": "application/json, text/plain, */*",
                            "authorization": "Bearer" + d[1],
                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        },
                        "body": "workbookIds[]=" + joinresult.workbooks[0].id,
                        "method": "DELETE",
                        "mode": "cors",
                        "credentials": "include"
                    });
                }
                alert("Слайды из категории Homework сброшены успешно! Страница будет обновлена.")
                window.location.reload();
            }

            async function getlessoninfo() {
                let d = document.cookie;
                d = d.match(/token_global=(.*)/);

                await fetch("https://rooms-vimbox-ams3.skyeng.ru/rooms/api/v1/rooms/" + document.URL.split('/')[4] + "/join", {
                    "headers": {
                        "accept": "application/json, text/plain, */*",
                        "authorization": "Bearer" + d[1],
                    },
                    "method": "PATCH",
                    "mode": "cors",
                    "credentials": "include"
                }).then(r => r.json()).then(data => joinresult = data)

                if (joinresult.lessonPlan.Homework != undefined) {

                    for (let i = 0; i < joinresult.lessonPlan.Homework.length; i++) {
                        if (joinresult.currentStepRevId == joinresult.lessonPlan.Homework[i].id) {
                            console.log('Курс: ' + joinresult.lessonInfo.info.program + ' Уровень: ' + joinresult.lessonInfo.info.levelText + ' Урок: ' + joinresult.lessonInfo.info.sortOrder + '. ' + joinresult.lessonInfo.info.title + ' Слайд: ' + joinresult.lessonPlan.Homework[i].title + '\n' + 'CMS ссылка на урок: https://content.vimbox.skyeng.ru/cms/lesson/update/id/' + joinresult.lessonId + '\nCMS ссылка на активный слайд: https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/' + joinresult.lessonPlan.Homework[i].stepUUID)
                            copyToClipboard1('Курс: ' + joinresult.lessonInfo.info.program + ' Уровень: ' + joinresult.lessonInfo.info.levelText + ' Урок: ' + joinresult.lessonInfo.info.sortOrder + '. ' + joinresult.lessonInfo.info.title + ' Слайд: ' + joinresult.lessonPlan.Homework[i].title + '\n' + 'CMS ссылка на урок: https://content.vimbox.skyeng.ru/cms/lesson/update/id/' + joinresult.lessonId + '\nCMS ссылка на активный слайд: https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/' + joinresult.lessonPlan.Homework[i].stepUUID)
                            alert('Информация успешно скопирована в буфер обмена!\n' + 'Курс: ' + joinresult.lessonInfo.info.program + ' Уровень: ' + joinresult.lessonInfo.info.levelText + ' Урок: ' + joinresult.lessonInfo.info.sortOrder + '. ' + joinresult.lessonInfo.info.title + ' Слайд: ' + joinresult.lessonPlan.Homework[i].title + '\n' + 'CMS ссылка на урок: https://content.vimbox.skyeng.ru/cms/lesson/update/id/' + joinresult.lessonId + '\nCMS ссылка на активный слайд: https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/' + joinresult.lessonPlan.Homework[i].stepUUID)
                        }
                    }

                    for (let i = 0; i < joinresult.lessonPlan.Lesson.length; i++) {
                        if (joinresult.currentStepRevId == joinresult.lessonPlan.Lesson[i].id) {
                            console.log('Курс: ' + joinresult.lessonInfo.info.program + ' Уровень: ' + joinresult.lessonInfo.info.levelText + ' Урок: ' + joinresult.lessonInfo.info.sortOrder + '. ' + joinresult.lessonInfo.info.title + ' Слайд: ' + joinresult.lessonPlan.Lesson[i].title + '\n' + 'CMS ссылка на урок: https://content.vimbox.skyeng.ru/cms/lesson/update/id/' + joinresult.lessonId + '\nCMS ссылка на активный слайд: https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/' + joinresult.lessonPlan.Lesson[i].stepUUID)
                            copyToClipboard1('Курс: ' + joinresult.lessonInfo.info.program + ' Уровень: ' + joinresult.lessonInfo.info.levelText + ' Урок: ' + joinresult.lessonInfo.info.sortOrder + '. ' + joinresult.lessonInfo.info.title + ' Слайд: ' + joinresult.lessonPlan.Lesson[i].title + '\n' + 'CMS ссылка на урок: https://content.vimbox.skyeng.ru/cms/lesson/update/id/' + joinresult.lessonId + '\nCMS ссылка на активный слайд: https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/' + joinresult.lessonPlan.Lesson[i].stepUUID)
                            alert('Информация успешно скопирована в буфер обмена!\n' + 'Курс: ' + joinresult.lessonInfo.info.program + ' Уровень: ' + joinresult.lessonInfo.info.levelText + ' Урок: ' + joinresult.lessonInfo.info.sortOrder + '. ' + joinresult.lessonInfo.info.title + ' Слайд: ' + joinresult.lessonPlan.Lesson[i].title + '\n' + 'CMS ссылка на урок: https://content.vimbox.skyeng.ru/cms/lesson/update/id/' + joinresult.lessonId + '\nCMS ссылка на активный слайд: https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/' + joinresult.lessonPlan.Lesson[i].stepUUID)
                        }
                    }

                } else {
                    for (let i = 0; i < joinresult.lessonPlan.Test.length; i++) {
                        if (joinresult.currentStepRevId == joinresult.lessonPlan.Test[i].id) {
                            console.log('Курс: ' + joinresult.lessonInfo.info.program + ' Уровень: ' + joinresult.lessonInfo.info.levelText + ' Урок: ' + joinresult.lessonInfo.info.sortOrder + '. ' + joinresult.lessonInfo.info.title + ' Слайд: ' + joinresult.lessonPlan.Test[i].title + '\n' + 'CMS ссылка на урок: https://content.vimbox.skyeng.ru/cms/lesson/update/id/' + joinresult.lessonId + '\nCMS ссылка на активный слайд: https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/' + joinresult.lessonPlan.Test[i].stepUUID)
                            copyToClipboard1('Курс: ' + joinresult.lessonInfo.info.program + ' Уровень: ' + joinresult.lessonInfo.info.levelText + ' Урок: ' + joinresult.lessonInfo.info.sortOrder + '. ' + joinresult.lessonInfo.info.title + ' Слайд: ' + joinresult.lessonPlan.Test[i].title + '\n' + 'CMS ссылка на урок: https://content.vimbox.skyeng.ru/cms/lesson/update/id/' + joinresult.lessonId + '\nCMS ссылка на активный слайд: https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/' + joinresult.lessonPlan.Test[i].stepUUID)
                            alert('Информация успешно скопирована в буфер обмена!\n' + 'Курс: ' + joinresult.lessonInfo.info.program + ' Уровень: ' + joinresult.lessonInfo.info.levelText + ' Урок: ' + joinresult.lessonInfo.info.sortOrder + '. ' + joinresult.lessonInfo.info.title + ' Слайд: ' + joinresult.lessonPlan.Test[i].title + '\n' + 'CMS ссылка на урок: https://content.vimbox.skyeng.ru/cms/lesson/update/id/' + joinresult.lessonId + '\nCMS ссылка на активный слайд: https://content-vimbox.skyeng.ru/cms/stepStore/update/stepId/' + joinresult.lessonPlan.Test[i].stepUUID)
                        }
                    }
                }
            }
        }
    }

    // Добавляем кнопку для Skysmart добавлять чаты со всеми У в один клик
    let achatb = document.createElement('span')
    achatb.id = "achatbtn"
    achatb.textContent = "💬"
    achatb.style = 'cursor:pointer;'


    if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/english/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-english.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=english_junior_native_speaker,english_junior_not_native_speaker,english_kids_exam,english_klp_native_speaker,english_klp_native_speaker_short,english_klp_not_native_speaker,english_klp_not_native_speaker_short_lesson,english_klp_not_native_speaker_premium,english_junior_not_native_speaker_premium,english_kids_exam_premium");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Английскому языку"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/computer-science/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-computer-science.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=digital_literacy_kids_f2f,python_kids_f2f,programming_kids_f2f,web_dev_kids_f2f,making_games_kids_f2f,computer_courses_app_inventor_kids_f2f,computer_courses_thunkable_kids_f2f,computer_courses_scratch_kids_f2f,computer_courses_unreal_kids_f2f,computer_courses_roblox_kids_f2f,computer_courses_unity_kids_f2f,computer_courses_construct_kids_f2f,computer_courses_minecraft_kids_f2f,computer_courses_app_inventor_kids_f2g,computer_courses_scratch_kids_f2g,computer_courses_thunkable_kids_f2g,computer_courses_web_dev_kids_f2g,computer_courses_digital_literacy_mac_kids_f2f,computer_courses_digital_literacy_windows_kids_f2f");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Компьютерным курсам"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/chess/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-chess.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=chess_kids_f2f,chess_kids_f2f_short_lessons");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Шахматам"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/math/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-math.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=mathematics_kids,math_kids_exam,math_kids_premium,math_kids_exam_premium");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Математике"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/russian/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-russian.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=russian_kids,russian_kids_exam_f2f,russian_kids_premium,russian_kids_exam_premium");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Русскому языку"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/preschool/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-preschool.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=preschool_kids_f2f");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Дошколке"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/physics/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-physics.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=physics_kids_f2f,physics_kids_exam_f2f");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Физике"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/social-science/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-social-science.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=social_science_kids_f2f,social_science_kids_exam_f2f");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Обществознанию"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/literature/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-literature.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=large_classes_literature_7_grade_folklore,large_classes_literature_7_grade_folklore_recorded");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Литературе"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/history/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-history.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=large_classes_history_7_grade_new_time,large_classes_history_7_grade_new_time_recorded");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Истории"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/geography/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-geography.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=geography_kids_f2f,large_classes_geography_7_grade_human_on_earth,large_classes_geography_7_grade_human_on_earth_recorded");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Географии"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/chemistry/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-chemistry.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=chemistry_kids_exam_f2f");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Химии"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] != 'teacher/multi-classroom' && document.URL.split('/')[2] + "/" + document.URL.split('/')[3] + "/" + document.URL.split('/')[4] + "/" + document.URL.split('/')[5] == 'vimbox.skyeng.ru/kids/biology/teacher' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = function () {
            addChat("https://api-biology.skyeng.ru/api/teacher-cabinet/v1/active-students?serviceTypeKeys=biology_kids_f2f,large_classes_biology_7_grade_bacteria_viruses,large_classes_biology_7_grade_bacteria_viruses_recorded");
        }
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по Биологии"
    } else if (document.URL.split('/')[5] + '/' + document.URL.split('/')[6] == 'teacher/multi-classroom' && document.getElementById('achatbtn') == null) {
        document.querySelector('.navigation').appendChild(achatb)
        achatb.onclick = addMulticlassrom;
        achatb.title = "По нажатию добавляет все чаты с учениками, которые активны и не уснули по всем возможнным предметам сразу!"
    }

    async function addMulticlassrom() { // общая функция добавления чатов в мультиклассруме, но надо еще подфункцию сделать чтобы код сократить!
        await fetch("https://rooms-vimbox.skyeng.ru/users/api/v2/auth/config", {
            "credentials": "include",
            "method": "POST",
        }).then(r => r.json()).then(r => artid = r)

        let sidarr = [];
        await fetch("https://academic-gateway.skyeng.ru/academic/api/teacher-classroom/get-data/personal", {
            "method": "POST",
            "credentials": "include"
        }).then(r => r.json()).then(data => studarr = data)

        for (let i = 0; i < Object.keys(studarr).length; i++) {
            let arrayofsubjects = Object.keys(studarr)[i]
            switch (arrayofsubjects) {
                case 'math': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cМатематика', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }
                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками в разделе Математика - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'russian': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cРусский язык', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }
                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела Русский язык - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'social-science': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cОбществознание', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела Обществознание - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'preschool': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cДошколка', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела Дошкольная подготовка - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'chess': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cШахматы', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела Шахматы -  Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'computer-science': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cКомпьютерные курсы', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела Компьютерные курсы - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'chemistry': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cХимия', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела Химия -  Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'physics': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cФизика', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела Физика - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'english': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cАнглийский язык', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела Английский язык -  Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'history': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cИстория', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела История -  Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'biology': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cБиология', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","

                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела Биология - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
                case 'geography': console.log(Object.values(studarr)[i])
                    sidarr = [];
                    console.log('%cГеография', 'color:lightgreen; font-weight:700')
                    for (let j = 0; j < Object.values(studarr)[i].length; j++) {

                        if (Object.values(studarr)[i][j].status != "sleep")
                            sidarr += Object.values(studarr)[i][j].id + ","


                        console.log(Object.values(studarr)[i][j].id + " Status: " + Object.values(studarr)[i][j].status)
                    }

                    if (typeof (sidarr) != 'object') {
                        sidarr = sidarr.split(',');

                        for (let j = 0; j < sidarr.length - 1; j++) {
                            fetchaddchat(sidarr[j], artid.user.id)
                        }
                        alert("Чаты с учениками раздела География - Multi-classroom добавлены в количестве: " + (sidarr.length - 1))
                    }
                    break;
            }
        }
    }

    function fetchaddchat(userid1, userid2) { //вспомогательная функция просто добавления чата мекжду пользователям
        fetch("https://notify-vimbox.skyeng.ru/api/v1/chat/contact", {
            "headers": {
                "content-type": "application/json",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
            "referrer": "https://vimbox.skyeng.ru/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `{\"userId1\":${userid1},\"userId2\":${userid2}}`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
    }

    async function addChat(subject) { // функция для массового добавления чатов не в мультиклассруме для каждого отдельного предмета
        let d = document.cookie;
        d = d.match(/token_global=(.*)/);
        let sidarr = [];
        await fetch("https://rooms-vimbox.skyeng.ru/users/api/v2/auth/config", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "authorization": "Bearer" + d[1]
            },
            "credentials": "include",
            "method": "POST",
        }).then(r => r.json()).then(r => artid = r)

        await fetch(subject, { "headers": { "authorization": "Bearer" + d[1], }, "method": "GET", "credentials": "include" })
            .then(r => r.json()).then(data => studarr = data)
        if (studarr.results != '') {
            for (let i = 0; i < studarr.results.length; i++) {
                if (studarr.results[i].status != "sleep")
                    sidarr += studarr.results[i].userId + ","
            }
            sidarr = sidarr.split(',');
            for (let j = 0; j < sidarr.length - 1; j++) {
                fetchaddchat(sidarr[j], artid.user.id)
            }
            alert("Чаты с учениками в разделе 'Английский язык' успешно добавлены!")
        } else alert("Выбран не верный предмет или нет учеников в разделе 'Английский язык'")
    }

    // Добавляем в комнату кнопку Classwork для перезапуска урока

    function dosetclasswork(subject) {
        fetch(subject + document.URL.split('/')[6], {
            "headers": {
				"accept": "application/json",
                "content-type": "application/json",
            },
            "body": "{\"status\":\"classwork\",\"name\":\"\"}",
            "method": "PATCH",
            "mode": "cors",
            "credentials": "include"
        });

        document.getElementById('clwbtn').innerText = "Done!"

        setTimeout(() => { document.getElementById('clwbtn').innerText = "Classwork" }, 3000)
    }

    let classworkbtn = document.createElement('div')
    classworkbtn.id = "clwbtn"
    classworkbtn.innerText = "Classwork"
    classworkbtn.style = "position:absolute; top:14px; left:65%; cursor: pointer;"
    let subject = document.URL.split('/')[4] + "/" + document.URL.split('/')[5]

    switch (subject) {
        case "chess/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Шахматы"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-chess.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "math/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Математика"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-math.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "geography/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Географии"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-geography.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "preschool/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Дошколка"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-preschool.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "social-science/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)
            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Обществознания"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-social-science.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "history/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Истории"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-history.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "biology/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Биологии"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-biology.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "english/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Английского языка"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-english.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "computer-science/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Компьютерных курсов"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-computer-science.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "physics/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Физики"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-physics.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "literature/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Литературы"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-literature.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "chemistry/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Химии"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-chemistry.skyeng.ru/api/v1/rooms/")
            }

            break;
        case "russian/room":
            if (document.getElementById('clwbtn') == null)
                document.getElementsByClassName('root')[0].appendChild(classworkbtn)

            classworkbtn.title = "Перезапускает комнату выставляя статус Classwork для Русского языка"

            classworkbtn.onclick = function () {
                dosetclasswork("https://api-russian.skyeng.ru/api/v1/rooms/")
            }

            break;
    }

}

setInterval(remandressl, 3000);

let getidusrteachreq;

butteachid.addEventListener('click', function () { // копирует в буфер что-то но надо понять ЧТО?
    for (let i = 1; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "teacher") {
            for (let j = 0; j < document.getElementsByClassName('expert-user_details-list')[1].childElementCount; j++) {
                if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[j].firstChild.textContent == "id") {
                    getidusrteachreq = document.getElementsByClassName('expert-user_details-list')[1].childNodes[j].childNodes[1].innerText.split(' ')[0];
                    copyToClipboard1(getidusrteachreq)
                }
            }
        }
    }
})

let getidusrstud;

butstdid.addEventListener('click', function () { //копирует в буфер nextClass-studentId
    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId")
            getidusrstud = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
        copyToClipboard1(getidusrstud)
    }
})

let getidusrsteach;

butteachidfstd.addEventListener('click', function () { //копирует в буфер nextClass-teacherId
    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId")
            getidusrsteach = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
        copyToClipboard1(getidusrsteach)
    }
})

let getservidst;

buttonservid.addEventListener('click', function () { //копирует в буфер nextClass-educationServiceId
    for (i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
        if (document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-educationServiceId")
            getservidst = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
        copyToClipboard1(getservidst)
    }
})

//Функция добавления коммента в чат при добавлении ссылки на джиру, но требуется повторное открытие окна чтобы система получила информацию о ссылке введеной в ячейку

function checJiraF() { //Функция добавления коммента в чат при добавлении ссылки на джиру, но требуется повторное открытие окна чтобы система получила информацию о ссылке введеной в ячейку
    try {
        if (document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fznJRM") != null && document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fznJRM").innerText == "Ссылка на Jira:") {
            document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").onclick = function () {
                if (document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").innerText != "Пусто") {
                    sendComment(document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").innerText);
                    console.log("DONE!")
                }
            }

            document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").onclick = function () {
                if (document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").innerText != "Пусто") {
                    sendComment(document.querySelector("#DateFilter > div:nth-child(3) > div > div > div > div > span > span.sc-fzqNqU").innerText);
                    console.log("DONE!")
                }
            }
        } else if (document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fznJRM") != null && document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fznJRM").innerText == "Ссылка на Jira:") {
            document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").onclick = function () {
                if (document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").innerText != "Пусто") {
                    sendComment(document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").innerText);
                    console.log("DONE!")
                }
            }

            document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").onclick = function () {
                if (document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").innerText != "Пусто") {
                    sendComment(document.querySelector("#DateFilter > div:nth-child(2) > div > div > div > div > span > span.sc-fzqNqU").innerText);
                    console.log("DONE!")
                }
            }
        }
    } catch (e) { }
}

setInterval(checJiraF, 1000);

async function checkthemestatus() { //функция проверки выставления темы и услуги в активном чате
    try {
        if (document.location.pathname.split('/').length >= 4 && location.href.split('/')[2] == 'skyeng.autofaq.ai') {
            drevo = '';
            let temparr = document.location.pathname.split('/')[3];
            await fetch("https://skyeng.autofaq.ai/api/conversations/" + temparr, {
            }).then(r => r.json()).then(r => pldata = r)

            if (pldata.messages[0].txt != undefined && pldata.messages[0].txt != null)
                drevo = pldata.messages[0].txt.match(/Здравствуйте! Я виртуальный помощник Skyeng/)


            if (pldata.payload.topicId.value == "" && document.getElementsByClassName('sc-fznJRM bTIjTR')[2].innerText == "Выбор темы/подтемы:") { // блок и ниже условия для вывода в список активных чатов выставлена ли тема и услуга

                if (document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0] != undefined) {
                    let txtbar = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
                    let theme = document.createElement('div')
                    theme.innerText = "Тема: ❌"
                    theme.style = 'color:red; font-weight:700'
                    if (txtbar.childNodes[1].childNodes[4] == undefined)
                        txtbar.childNodes[1].appendChild(theme)
                    if (txtbar.childNodes[1].childNodes[4].innerText == 'Тема: ✔') {
                        txtbar.childNodes[1].childNodes[4].innerText = "Тема: ❌";
                        txtbar.childNodes[1].childNodes[4].style.color = 'red';
                    }
                }

            } else if (pldata.payload.topicId.value == "" && document.getElementsByClassName('sc-fznJRM bTIjTR')[3].innerText == "Выбор темы/подтемы:") {


                if (document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0] != undefined) {
                    let txtbar = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
                    let theme = document.createElement('div')
                    theme.innerText = "Тема: ❌"
                    theme.style = 'color:red; font-weight:700'
                    if (txtbar.childNodes[1].childNodes[4] == undefined)
                        txtbar.childNodes[1].appendChild(theme)
                    if (txtbar.childNodes[1].childNodes[4].innerText == 'Тема: ✔') {
                        txtbar.childNodes[1].childNodes[4].innerText = "Тема: ❌";
                        txtbar.childNodes[1].childNodes[4].style.color = 'red';
                    }
                }

            } else if (pldata.payload.topicId.value != "" && document.getElementsByClassName('sc-fznJRM bTIjTR')[2].innerText == "Выбор темы/подтемы:") {


                if (document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0] != undefined) {
                    let txtbar = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
                    let theme = document.createElement('div')
                    theme.innerText = "Тема: ✔"
                    theme.style = 'color:green; font-weight:700'
                    if (txtbar.childNodes[1].childNodes[4] == undefined)
                        txtbar.childNodes[1].appendChild(theme)

                    if (txtbar.childNodes[1].childNodes[4].innerText == 'Тема: ❌') {
                        txtbar.childNodes[1].childNodes[4].innerText = "Тема: ✔";
                        txtbar.childNodes[1].childNodes[4].style.color = 'green';
                    }

                }

            } else if (pldata.payload.topicId.value != "" && document.getElementsByClassName('sc-fznJRM bTIjTR')[3].innerText == "Выбор темы/подтемы:") {

                if (document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0] != undefined) {
                    let txtbar = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
                    let theme = document.createElement('div')
                    theme.innerText = "Тема: ✔"
                    theme.style = 'color:green; font-weight:700'
                    if (txtbar.childNodes[1].childNodes[4] == undefined)
                        txtbar.childNodes[1].appendChild(theme)

                    if (txtbar.childNodes[1].childNodes[4].innerText == 'Тема: ❌') {
                        txtbar.childNodes[1].childNodes[4].innerText = "Тема: ✔";
                        txtbar.childNodes[1].childNodes[4].style.color = 'green';

                    }
                }

            }

            if (document.getElementsByClassName('sc-fznJRM bTIjTR')[0].innerText != 'Выбор услуги:' && pldata.payload.educationServiceId == undefined && document.getElementsByClassName('sc-fznJRM bTIjTR')[0].innerText == 'Выбор тегов ТП:') {
                let txtbar = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
                txtbar.childNodes[1].childNodes[5].innerText = "";
            }


            if (document.getElementsByClassName('sc-fznJRM bTIjTR')[0].innerText != 'Выбор тегов ТП:' && pldata.payload.educationServiceId != undefined && pldata.payload.educationServiceId.value == '' && document.getElementsByClassName('sc-fznJRM bTIjTR')[0].innerText == 'Выбор услуги:') {
                if (document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0] != undefined) {
                    let txtbar = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
                    let theme = document.createElement('div')
                    theme.innerText = "Услуга: ❌"
                    theme.style = 'color:red; font-weight:700'
                    if (txtbar.childNodes[1].childNodes[5] == undefined)
                        txtbar.childNodes[1].appendChild(theme)

                    if (txtbar.childNodes[1].childNodes[5].innerText == 'Услуга: ✔') {
                        txtbar.childNodes[1].childNodes[5].innerText = "Услуга: ❌";
                        txtbar.childNodes[1].childNodes[5].style.color = 'red';
                    }
                }
            } else if (document.getElementsByClassName('sc-fznJRM bTIjTR')[0].innerText != 'Выбор тегов ТП:' && pldata.payload.educationServiceId != undefined && pldata.payload.educationServiceId.value != '' && document.getElementsByClassName('sc-fznJRM bTIjTR')[0].innerText == 'Выбор услуги:') {
                if (document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0] != undefined) {
                    let txtbar = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
                    let theme = document.createElement('div')
                    theme.innerText = "Услуга: ✔"
                    theme.style = 'color:green; font-weight:700'
                    if (txtbar.childNodes[1].childNodes[5] == undefined)
                        txtbar.childNodes[1].appendChild(theme)

                    if (txtbar.childNodes[1].childNodes[5].innerText == 'Услуга: ❌') {
                        txtbar.childNodes[1].childNodes[5].innerText = "Услуга: ✔";
                        txtbar.childNodes[1].childNodes[5].style.color = 'green';
                    }
                }
            }
        }
    } catch (e) { }
}

setInterval(checkthemestatus, 3000);

function paintstatus() { //функция перекрашивания статуса оператора онлайн зеленый, занят желтый, офлайн и перерыв красные
    if (document.URL != "https://skyeng.autofaq.ai/tickets/archive" && document.querySelectorAll('.user_menu-status-name')[1] != undefined && document.querySelectorAll('.user_menu-status-name')[1] != null) {
        if (document.querySelectorAll('.user_menu-status-name')[1].innerText == "Офлайн" || document.querySelectorAll('.user_menu-status-name')[1].innerText == "Перерыв") {
            document.querySelectorAll('.user_menu-status-name')[1].style = " background: red; color: white; font-weight: 700";
            if (document.querySelectorAll('.ant-btn')[3].innerText == 'Офлайн' || document.querySelectorAll('.ant-btn')[3].innerText == 'Перерыв')
                document.querySelectorAll('.ant-btn')[3].style.background = "red";
        } else if (document.querySelectorAll('.user_menu-status-name')[1].innerText == "Онлайн") {
            document.querySelectorAll('.user_menu-status-name')[1].style = " background: green; color: white; font-weight: 700";
            if (document.querySelectorAll('.ant-btn')[3].innerText == 'Онлайн')
                document.querySelectorAll('.ant-btn')[3].style.background = "green";
        } else if (document.querySelectorAll('.user_menu-status-name')[1].innerText == "Занят") {
            document.querySelectorAll('.user_menu-status-name')[1].style = " background: yellow; color: black; font-weight: 700";
            if (document.querySelectorAll('.ant-btn')[3].innerText == 'Занят')
                document.querySelectorAll('.ant-btn')[3].style.background = "yellow";
        }
    } else if (document.URL == "https://skyeng.autofaq.ai/tickets/archive" && document.querySelectorAll('.user_menu-status-name')[1] != undefined && document.querySelectorAll('.user_menu-status-name')[1] != null) {
        if (document.querySelectorAll('.user_menu-status-name')[1].innerText == "Офлайн" || document.querySelectorAll('.user_menu-status-name')[1].innerText == "Перерыв") {
            document.querySelectorAll('.user_menu-status-name')[1].style = " background: red; color: white; font-weight: 700";
            if (document.querySelectorAll('.ant-btn')[4].innerText == 'Офлайн' || document.querySelectorAll('.ant-btn')[4].innerText == 'Перерыв')
                document.querySelectorAll('.ant-btn')[4].style.background = "red";
        } else if (document.querySelectorAll('.user_menu-status-name')[1].innerText == "Онлайн") {
            document.querySelectorAll('.user_menu-status-name')[1].style = " background: green; color: white; font-weight: 700";
            if (document.querySelectorAll('.ant-btn')[4].innerText == 'Онлайн')
                document.querySelectorAll('.ant-btn')[4].style.background = "green";
        } else if (document.querySelectorAll('.user_menu-status-name')[1].innerText == "Занят") {
            document.querySelectorAll('.user_menu-status-name')[1].style = " background: yellow; color: black; font-weight: 700";
            if (document.querySelectorAll('.ant-btn')[4].innerText == 'Занят')
                document.querySelectorAll('.ant-btn')[4].style.background = "yellow";
        }
    }

}

setInterval(paintstatus, 5000);

function backbtn() { //функция возвращает в кота омельченко возможность возвращаться на предыдущее окно после открытия чата например но для нового варианта уже Азара
    if (document.getElementsByClassName('show').length >= 2) {

        let barea = document.createElement('textarea')
        barea.id = "notes_field"
        barea.style = 'background: lightgrey; top: 90vh; position: fixed; width: 300px;'

        let btnsndnotes = document.createElement('button')
        btnsndnotes.innerText = "Notes"
        btnsndnotes.style = 'position: fixed; top: 90vh; left: 32vh;'
        btnsndnotes.id = "SendNotesToChat"
        btnsndnotes.onclick = notetoclchat;

        let btntakechat = document.createElement('button')
        btntakechat.innerText = "Забрать"
        btntakechat.style = 'position: fixed; top: 93vh; left: 32vh;'
        btntakechat.id = "TakeChat"
        btntakechat.onclick = get_used_chat;

        if (document.getElementById('notes_field') == null && document.getElementById('SendNotesToChat') == null) {
            document.getElementsByClassName('rounded vh-100')[0].append(barea)
            document.getElementsByClassName('rounded vh-100')[0].append(btnsndnotes)
            document.getElementsByClassName('rounded vh-100')[0].append(btntakechat)
        }

        let sesid;

        async function notetoclchat() { //функция отправки заметок в чат
            let chathashfromdiv = document.querySelector('.fs-custom-0_8', '.text-light').innerText.split('\n')[0].split(' ')[1];

            await fetch("https://skyeng.autofaq.ai/api/conversations/" + chathashfromdiv)
                .then(r => r.json()).then(r => rdata = r)
            sesid = rdata.sessionId;

            let notemsg = '<p>' + document.getElementById('notes_field').value + '</p>';

            fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryH2CK1t5M3Dc3ziNW",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin"
                },
                "body": "------WebKitFormBoundaryH2CK1t5M3Dc3ziNW\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + sesid + "\",\"conversationId\":\"" + chathashfromdiv + "\",\"text\":\"" + notemsg + "\",\"isComment\":true}\r\n------WebKitFormBoundaryH2CK1t5M3Dc3ziNW--\r\n",
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            });

            document.getElementById('notes_field').value = ''
        }

        function get_used_chat() {
            var result = confirm("Вы действительно желаете забрать чат?");
            if (result) {
                let chat_id = document.querySelector('.fs-custom-0_8', '.text-light').innerText.split('\n')[0].split(' ')[1];
                let operator_id = operatorId;

                fetch("https://skyeng.autofaq.ai/api/conversation/assign", {
                    "headers": {
                        "content-type": "application/json"
                    },
                    "credentials": "include",
                    "body": `{\"command\":\"DO_ASSIGN_CONVERSATION\",\"conversationId\":\"${chat_id}\",\"assignToOperatorId\":\"${operator_id}\"}`,
                    "method": "POST"
                });
            }
        }

    } else if (document.getElementById('notes_field') != null && document.getElementById('SendNotesToChat') != null && document.getElementById('TakeChat') != null && document.getElementsByClassName('show').length < 2) {
        document.getElementById('notes_field').remove()
        document.getElementById('SendNotesToChat').remove()
        document.getElementById('TakeChat').remove()
    }

}

setInterval(backbtn, 5000);

function backbtnold() { //функция возвращает в кота омельченко возможность возвращаться на предыдущее окно после открытия чата например, но для старого варианта Омельченко
    if (document.getElementById('search') != null)
        document.getElementById('back_btn').style.display = "";

    let bareaold = document.createElement('textarea')
    bareaold.id = "notes_field_old"
    bareaold.style.background = "lightgrey";

    let btnsndnotes = document.createElement('button')
    btnsndnotes.innerText = "Notes"
    btnsndnotes.id = "SendNotesToChatOld"
    btnsndnotes.onclick = notetoclchat;


    if (document.getElementById('notes_field_old') == null && document.getElementById('SendNotesToChatOld') == null) {
        if (document.getElementById('send_btns') != null) {

            document.getElementById('send_text').style.display = 'none'
            document.getElementById('send_btn').style.display = 'none'

            document.getElementById('send_btns').append(bareaold)
            document.getElementById('send_btns').append(btnsndnotes)


            let zambtnhide = document.getElementsByTagName('a')
            for (let i = 0; i < zambtnhide.length; i++) {
                if (zambtnhide[i].innerText == 'заметка')
                    zambtnhide[i].style.display = 'none'
            }
        }
    }

    let sesid;
    async function notetoclchat() {
        let chathashfromdiv = document.querySelector('#msg_block').children[0].innerText.split('\n')[0].split(' ')[1];


        await fetch("https://skyeng.autofaq.ai/api/conversations/" + chathashfromdiv)
            .then(r => r.json()).then(r => rdata = r)
        sesid = rdata.sessionId;


        let notemsg = '<p>' + document.getElementById('notes_field_old').value + '</p>';

        fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
            "headers": {
                "accept": "*/*",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryH2CK1t5M3Dc3ziNW",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "body": "------WebKitFormBoundaryH2CK1t5M3Dc3ziNW\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + sesid + "\",\"conversationId\":\"" + chathashfromdiv + "\",\"text\":\"" + notemsg + "\",\"isComment\":true}\r\n------WebKitFormBoundaryH2CK1t5M3Dc3ziNW--\r\n",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });

        document.getElementById('notes_field_old').value = ''
    }
}

setInterval(backbtnold, 5000);

function timerHideButtons() { //функция добавления скрытия полей плюс также перекрашивает при выборе тп исход срм2 в красный, тп2л в зеленый
    if (document.getElementsByClassName('ant-modal-content')[0] !== undefined) {
        document.getElementsByClassName('ant-modal-content')[0].childNodes[1].children[0].appendChild(maskBackHide)

        if (document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Указать тему')
            for (i = 1; i < document.getElementsByClassName('ant-modal-content')[0].children[2].childElementCount - 1; i++)
                if (document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Техподдержка V1 (работает ежедневно с 07:00-23:50)" && document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Уроки V2" && document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Группа КМ (работает ежедневно с 8:00 до 21:55)" && document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Обратная связь ТП (работает ежедневно с 08:00-22:50)")
                    document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].style.display = 'none'

        if (document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Закрыть запрос?')
            for (i = 1; i < document.getElementsByClassName('ant-modal-content')[0].children[2].childElementCount - 1; i++)
                if (document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].textContent != "Техподдержка V1 (работает ежедневно с 07:00-23:50)")
                    document.getElementsByClassName('ant-modal-content')[0].children[2].children[i].style.display = 'none'

        if (document.getElementsByClassName('ant-modal-content')[0].children[1].children[0].childNodes[0].textContent == 'Создать задачу') { // обращение к функции подсветки и добавления заметки
            let selectorList = document.querySelectorAll('.sc-fznZeY');
            if (selectorList.length > 5) {
                for (let i = 0; i < selectorList.length; i++) {
                    if (selectorList[i].innerText == "Техподдержка исход crm2")
                        selectorList[i].style.backgroundColor = 'red'
                    if (selectorList[i].innerText == "Техподдержка 2-я линия crm2")
                        selectorList[i].style.backgroundColor = 'green'
                }
            }
        }
    }
}

function requestsRed() { //функция окрашивает в красный цвет, кнопка взять запрос не будет (0) иметь, а любое другое значение
    document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].childNodes[0].addEventListener("DOMSubtreeModified", function () {
        txt = document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].childNodes[0].innerHTML
        if (txt != "Взять запрос (0)")
            document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].style.backgroundColor = "#F34723"
        else
            document.getElementsByClassName('expert-sidebar-button')[0].childNodes[1].style.backgroundColor = "white"
    });
}

const copyToClipboard1 = str => { // функция копирования в буфер обмена
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

var operatorId = ""
var operatorsarray = [];
async function whoAmI() { // функция получения айди оператора, который работает и запустил расширение
    a = await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
        "credentials": "include"
    }).then(a => b = a.json()).then(b => {
        let me = document.querySelector('.user_menu-dropdown-user_name');
        operatorsarray = b.rows;
        b.rows.forEach(s => {
            if (s.operator != null && me && s.operator.fullName === me.innerText) {
                operatorId = s.operator.id
                afopername = s.operator.fullName
                console.log("Мой ID: " + operatorId)
            }
        })
    })
}

// Тут будет функция запуска получения информации о статистики

document.getElementById('getstatfromperiod').onclick = async function () { // Тут будет функция запуска получения информации о статистики
    let datefrom = document.getElementById('dateFrom').value + "T21:00:00.000Z";
    let dateto = document.getElementById('dateTo').value + "T20:59:59.059Z";
    let strnew = document.getElementById('chatsinfoout');
    let allchatcounttouched = document.getElementById('sumchatcounttouched')
    document.getElementById('getstatfromperiod').textContent = "Загрузка"
    allchatcounttouched.textContent = "Загрузка"
    let allchatcountclosed = document.getElementById('sumchatcountclosed')
    allchatcountclosed.textContent = "Загрузка"
    strnew.textContent = "Загрузка"
    await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
        "headers": {
            "content-type": "application/json",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://skyeng.autofaq.ai/logs",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"participatingOperatorsIds\":[\"" + operatorId + "\"],\"tsFrom\":\"" + datefrom + "\",\"tsTo\":\"" + dateto + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":1}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(r => r.json()).then(data => sumchatcounttouched = data)
    allchatcounttouched.innerText = "Количество пощупаных чатов: " + sumchatcounttouched.total;


    await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
        "headers": {
            "content-type": "application/json",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://skyeng.autofaq.ai/logs",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"participatingOperatorsIds\":[\"" + operatorId + "\"],\"tsFrom\":\"" + datefrom + "\",\"tsTo\":\"" + dateto + "\",\"usedStatuses\":[\"ClosedByOperator\"],\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":1}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(r1 => r1.json()).then(data1 => sumchatcountclosed = data1)
    allchatcountclosed.innerText = "Количество закрытых чатов: " + sumchatcountclosed.total;

    // блок с расчетом КСАТ и чатов без тематики
    try {
        pagenew = 1
        let stringChatsWithoutTopic2 = ""
        csatScoreNew = 0
        csatCountNew = 0
        while (true) {
            test = ''
            await fetch("https://skyeng.autofaq.ai/api/conversations/queues/archive", {
                "headers": {
                    "content-type": "application/json",
                },
                "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"tsFrom\":\"" + datefrom + "\",\"tsTo\":\"" + dateto + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":" + pagenew + ",\"limit\":100}",
                "method": "POST",
            }).then(r => r.json()).then(r => test = r)
            for (let i = 0; i < test.items.length; i++) {
                let flagCsat = 0
                let flagTopic = 0
                await fetch('https://skyeng.autofaq.ai/api/conversations/' + test.items[i].conversationId)
                    .then(r => r.json())
                    .then(r => {
                        if (r.operatorId == operatorId) {
                            flagCsat = 1
                            if (r.payload != undefined)
                                if (r.payload.topicId != undefined)
                                    if (r.payload.topicId.value == "")
                                        flagTopic = 1
                        }
                    })
                if (flagCsat == 1)
                    if (test.items[i].stats.rate != undefined)
                        if (test.items[i].stats.rate.rate != undefined) {
                            csatScoreNew += test.items[i].stats.rate.rate
                            csatCountNew++
                        }
                if (flagTopic == 1)
                    stringChatsWithoutTopic2 += '<span style="color: #00FA9A">&#5129;</span>' + " " + '<a href="https://skyeng.autofaq.ai/logs/' + test.items[i].conversationId + '" onclick="" style="color:#1E90FF;">' + test.items[i].conversationId + '</a></br>'
            }

            if (stringChatsWithoutTopic2 == "")
                stringChatsWithoutTopic2 = ' нет таких' + '<br>'

            strnew.innerHTML = 'Оценка: ' + Math.round(csatScoreNew / csatCountNew * 100) / 100 + '<br>' + 'Чаты без тематики: <br>' + stringChatsWithoutTopic2

            if ((test.total / 100) > pagenew) {
                pagenew++;
            } else {
                document.getElementById('getstatfromperiod').textContent = "Получить статистику"
                break
            }
        }
    } catch {
        strnew.textContent = 'Что-то пошло не так. Сделайте скрин консоли и отправьте в канал chm-dev, пожалуйста'
    }
}

document.getElementById('changetheme').onclick = function () { //функция изменения тематики чата
    let curval = document.getElementById('thematics').value;
    let chatId = document.getElementById('commenttosearch').value;
    if (chatId != "" && chatId != null && chatId != undefined)
        fetch("https://skyeng.autofaq.ai/api/conversation/" + chatId + "/payload", {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"conversationId\":\"" + chatId + "\",\"elements\":[{\"name\":\"topicId\",\"value\":\"" + curval + "\"}]}",
            "method": "POST",
            "credentials": "include"
        });
    else alert("Введите хэш чата в длинное поле по центру");
}

document.getElementById('gofindit').onclick = async function () { //функция поиска чатов по вытсалвенной тематике с отображениеи и тегов
    let curval = document.getElementById('thematics').value;
    let strcsatnew = document.getElementById('themesdata');
    strcsatnew.textContent = "Загрузка"
    document.getElementById('gofindit').textContent = "Загрузка";
    let datefrom3 = document.getElementById('dateFrom').value + "T21:00:00.000Z";
    let dateto3 = document.getElementById('dateTo').value + "T20:59:59.059Z";
    let count = 0;
    let stringChatsWithComment = ""
    let sctc = 0;
    let page;
    let tagflag;
    let timestmp;
    let tsh;
    let tsm;
    try {
        test = ''
        page = 1;
        while (true) {
            await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
                "headers": {
                    "content-type": "application/json",
                },
                "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"participatingOperatorsIds\":[\"" + operatorId + "\"],\"tsFrom\":\"" + datefrom3 + "\",\"tsTo\":\"" + dateto3 + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":" + page + ",\"limit\":100}",
                "method": "POST",
            }).then(r => r.json()).then(r => test = r)
            sctc = test.total;
            for (let i = 0; i < test.items.length; i++) {
                let flagComment = 0
                await fetch('https://skyeng.autofaq.ai/api/conversations/' + test.items[i].conversationId)
                    .then(response => response.json()).then(data => {
                        if (data.payload.topicId.value == curval) {
                            if (data.payload.tags.value.match(/\w+/) != null && data.payload.tags.value.match(/\w+/) != undefined && data.payload.tags.value.match(/\w+/)[0] == "request_forwarded_to_outgoing_tp_crm2")
                                tagflag = "Исход ТП1Л CRM2"
                            else if (data.payload.tags.value.match(/\w+/) != null && data.payload.tags.value.match(/\w+/) != undefined && data.payload.tags.value.match(/\w+/)[0] == "recommendations_given ")
                                tagflag = "Рекомендации даны"
                            else if (data.payload.tags.value.match(/\w+/) != null && data.payload.tags.value.match(/\w+/) != undefined && data.payload.tags.value.match(/\w+/)[0] == "refusal_of_help")
                                tagflag = "Отказ от помощи"
                            else if (data.payload.tags.value.match(/\w+/) != null && data.payload.tags.value.match(/\w+/) != undefined && data.payload.tags.value.match(/\w+/)[0] == "request_solved")
                                tagflag = "Задача решена"
                            else if (data.payload.tags.value.match(/\w+/) != null && data.payload.tags.value.match(/\w+/) != undefined && data.payload.tags.value.match(/\w+/)[0] == "request_solved")
                                tagflag = "Задача решена"
                            else if (data.payload.tags.value.match(/\w+/) != null && data.payload.tags.value.match(/\w+/) != undefined && data.payload.tags.value.match(/\w+/)[0] == "request_forwarded_to_2l_tp")
                                tagflag = "->ТП2Л"
                            else if (data.payload.tags.value.match(/\w+/) != null && data.payload.tags.value.match(/\w+/) != undefined && data.payload.tags.value.match(/\w+/)[0] == "request_forwarded_to_channel_qa")
                                tagflag = "Передача в QA"
                            else if (data.payload.tags.value.match(/\w+/) != null && data.payload.tags.value.match(/\w+/) != undefined && data.payload.tags.value.match(/\w+/)[0] == "request_forwarded_to_development")
                                tagflag = "Задача в разработку"
                            else if (data.payload.tags.value.match(/\w+/) != null && data.payload.tags.value.match(/\w+/) != undefined && data.payload.tags.value.match(/\w+/)[0] == "request_forwarded_to_sc")
                                tagflag = "Задача передана в SC"
                            else if (data.payload.tags.value.match(/\w+/) != null && data.payload.tags.value.match(/\w+/) != undefined && data.payload.tags.value.match(/\w+/)[0] == "request_forwarded_to_tc")
                                tagflag = "Задача передана в TC"
                            else tagflag = "Нет темы/ др тема/2+"

                            timestmp = new Date(data.messages[0].ts);
                            if ((timestmp.getUTCHours() + 3) < 10)
                                tsh = "0" + (timestmp.getUTCHours() + 3);
                            else tsh = (timestmp.getUTCHours() + 3);

                            if (timestmp.getMinutes() < 10)
                                tsm = "0" + timestmp.getMinutes();
                            else tsm = timestmp.getMinutes();

                            stringChatsWithComment += '<span style="color: #00FA9A">&#5129;</span>' + " " + '<a href="https://skyeng.autofaq.ai/logs/' + data.id + '" onclick="" style="color:#FFA07A;" class = "csatchatids">' + data.id + '</a>' + " " + tagflag + '<span class = "seechat" style="margin-left: 10px; cursor: pointer">👁‍🗨</span>' + " " + tsh + ":" + tsm + '</br>';
                            count++;
                        }
                    })
            }


            if ((test.total / 100) > page) {
                page++;
            } else break;
        }

    } catch (e) {
        console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
    }

    document.querySelector('#themesdata').style.display = ""
    strcsatnew.innerHTML = 'Чаты с тематикой: ' + '<br>' + stringChatsWithComment + '<br>' + 'Количество обращений по этой теме: ' + count;
    document.getElementById('gofindit').textContent = "Find";

    let csatcontainer = document.querySelectorAll('.seechat');
    let csatchattids = document.querySelectorAll('.csatchatids');
    for (let j = 0; j < csatcontainer.length; j++) {
        csatcontainer[j].onclick = function () {

            if (document.getElementById('AF_ChatHis').style.display == 'none') {
                document.getElementById('butChatHistory').click();
                document.getElementById('hashchathis').value = csatchattids[j].innerText;
                btn_search_history.click()
            } else {
                document.getElementById('hashchathis').value = csatchattids[j].innerText;
                btn_search_history.click()
            }
        }
    }

    console.log(stringChatsWithComment);
    console.log("count: " + count);
}

//Функция очищения выведенной информации после поиска
document.getElementById('clearall').onclick = function () {
    document.querySelector('#sumchatcounttouched').innerText = ""
    document.querySelector('#sumchatcountclosed').innerText = ""
    document.querySelector('#chatsinfoout').innerText = ""
    document.querySelector('#lowCSATcount').innerText = ""
    document.querySelector('#lowCSATcount').style.display = "none"
    document.querySelector('#chatcommentsdata').innerText = ""
    document.querySelector('#chatcommentsdata').style.display = "none"
    document.querySelector('#commenttosearch').value = ""
    document.querySelector('#themesdata').innerText = ""
}

document.getElementById('clearlessonstatus').onclick = function () { // очистить поля проверки статуса урока
    if (confirm("Вы уверены, что хотите очистить?")) {
        let getdateset = new Date()
        let getyearLS = getdateset.getFullYear();
        let getcurmonthLS = (getdateset.getMonth() + 1)
        let todayLS = getdateset.getDate();

        if (getdateset.getDate() < 10) {
            todayLS = "0" + getdateset.getDate();
            document.getElementById('dateFromLS').value = getyearLS + "-" + getcurmonthLS + "-" + "0" + (Number(todayLS) - 1);
            document.getElementById('dateToLS').value = getyearLS + "-" + getcurmonthLS + "-" + todayLS;
        } else {
            todayLS = getdateset.getDate();
            document.getElementById('dateFromLS').value = getyearLS + "-" + getcurmonthLS + "-" + (todayLS - 1);
            document.getElementById('dateToLS').value = getyearLS + "-" + getcurmonthLS + "-" + todayLS;
        }
        document.getElementById('statustable').innerText = "";
        document.getElementById('idteacherforsearch').value = "";
        document.getElementById('idstudentforsearch').value = "";
    } else {
        console.log("Canceled!")
    }
}

//Функция парсинга чатов по заданному коменту
let stringChatsWithComment;

document.getElementById('parsechat').onclick = async function () { //Функция парсинга чатов по заданному коменту
    stringChatsWithComment = "";
    let datefrom2 = document.getElementById('dateFrom').value + "T21:00:00.000Z";
    let dateto2 = document.getElementById('dateTo').value + "T20:59:59.059Z";
    document.getElementById('parsechat').textContent = "Идёт поиск"
    try {
        pagecmt = 1
        while (true) {
            test = ''
            await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
                "headers": {
                    "content-type": "application/json",
                },
                "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"participatingOperatorsIds\":[\"" + operatorId + "\"],\"tsFrom\":\"" + datefrom2 + "\",\"tsTo\":\"" + dateto2 + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":" + pagecmt + ",\"limit\":100}",
                "method": "POST",
            }).then(r => r.json()).then(r => test = r)
            for (let i = 0; i < test.items.length; i++) {
                let flagComment = 0
                await fetch('https://skyeng.autofaq.ai/api/conversations/' + test.items[i].conversationId)
                    .then(response => response.json()).then(data => {
                        for (let j = 0; j < data.messages.length; j++) {
                            if (data.messages[j].tpe == "OperatorComment" && data.messages[j].txt == document.getElementById('commenttosearch').value)
                                flagComment = 1
                        }
                        if (flagComment == 1)
                            stringChatsWithComment += '<span style="color: #00FA9A">&#5129;</span>' + " " + '<a href="https://skyeng.autofaq.ai/logs/' + data.id + '" onclick="" style="color:#1E90FF;" class="chatids">' + data.id + '</a>' + '<span class = "chatswithcomments" style="margin-left: 10px; cursor: pointer">👁‍🗨</span>' + '</br>'

                    })
            }
            if (stringChatsWithComment == "")
                stringChatsWithComment = ' нет таких' + '<br>'

            document.querySelector('#chatcommentsdata').style.display = ""
            document.getElementById('chatcommentsdata').innerHTML = 'Чаты с найденными комментариями' + '<br>' + stringChatsWithComment;

            let chatscontainer = document.querySelectorAll('.chatswithcomments');
            let chatids = document.querySelectorAll('.chatids');
            for (let j = 0; j < chatscontainer.length; j++) {
                chatscontainer[j].onclick = function () {

                    if (document.getElementById('AF_ChatHis').style.display == 'none') {
                        document.getElementById('butChatHistory').click();

                        document.getElementById('hashchathis').value = chatids[j].innerText;
                        btn_search_history.click()

                    } else {
                        document.getElementById('hashchathis').value = chatids[j].innerText;
                        btn_search_history.click()
                    }
                }
            }

            if ((test.total / 100) > pagecmt) {
                pagecmt++;
            } else {
                document.getElementById('parsechat').textContent = "Найти по комменту"
                break
            }

        }
    } catch {
        console.log('Что-то пошло не так.')
    }
}

//Функция проверки статусов урока
let arregetted;

document.getElementById('startlookstatus').onclick = function () { //Функция проверки статусов урока
    if (document.getElementById('idteacherforsearch').value != "") {
        document.querySelector('#statustable').style.display = "";
        document.querySelector('#statustable').innerText = "";
        let time_t = new Date();
        let ticherid = document.getElementById('idteacherforsearch').value;
        let uchenikid = document.getElementById('idstudentforsearch').value;
        uchenikid = uchenikid.trim();
        ticherid = ticherid.trim();
        let startdate = document.querySelector('#dateFromLS').value;
        startdate = startdate.split('-');
        startdate = Number(startdate[2]) + '-' + Number(startdate[1]) + '-' + Number(startdate[0]) + ' ' + 21;
        console.log("start date= " + startdate);
        let enddate = document.querySelector('#dateToLS').value;
        enddate = enddate.split('-');
        enddate = Number(enddate[2]) + '-' + Number(enddate[1]) + '-' + Number(enddate[0]) + ' ' + 21;
        console.log("end date= " + enddate);

        document.getElementById('responseTextarea1').value = `{
  "headers": {
    "accept": "*/*",
    "content-type": "application/x-www-form-urlencoded",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://timetable.skyeng.ru/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "from=${startdate}:00:00&to=${enddate}:00:00&offset=0&filters[teacherIds][]=${ticherid}&callback=getJSONP",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
	}`
        document.getElementById('responseTextarea2').value = "https://timetable.skyeng.ru/api/teachers/search";
        document.getElementById('responseTextarea3').value = 'getlessonstatusinfos'
        document.getElementById('sendResponse').click()

        setTimeout(function () {
            document.getElementById('responseTextarea1').value = `{}`
            document.getElementById('responseTextarea2').value = "https://timetable.skyeng.ru/api/teachers/search";
            document.getElementById('responseTextarea3').value = 'getlessonstatusinfos'
            document.getElementById('sendResponse').click()

            arregetted = document.getElementById('responseTextarea1').getAttribute('getlessonstatusinfos');
            arregetted = JSON.parse(arregetted);
            if (arregetted[0].result[0].classes != null || arregetted[0].result[0].classes !== undefined) {
                for (let i = 0; i < arregetted[0].result[0].classes.length; i++) {
                    if (arregetted[0].result[0].classes[i].studentId == uchenikid) {

                        let text = 'У: ' + arregetted[0].result[0].classes[i].studentId + ' | ' + new Date(arregetted[0].result[0].classes[i].startAt).toLocaleString("ru-RU", { timeZone: 'Europe/Moscow' }).slice(0, 17)

                        //	new Date(arregetted[0].result[0].classes[i].startAt).toLocaleTimeString("ru-RU", {timeZone: 'Europe/Moscow'}).slice(0,5)

                        if (arregetted[0].result[0].classes[i].classStatus !== undefined) {
                            text = text + ' | услуга : ' + arregetted[0].result[0].classes[i].educationServiceId;
                            text = text + ' | статус: ' + arregetted[0].result[0].classes[i].classStatus.status;
                            text = text + ' | когда выставлен: ' + new Date(arregetted[0].result[0].classes[i].classStatus.createdAt).toLocaleString("ru-RU", { timeZone: 'Europe/Moscow' });
                            text = text + ' | кем: ' + arregetted[0].result[0].classes[i].classStatus.createdByUserId;
                            text = text + ' | тип: ' + arregetted[0].result[0].classes[i].type;
                            if (arregetted[0].result[0].classes[i].classStatus.comment !== '') {
                                text = text + ' | комментарий: ' + arregetted[0].result[0].classes[i].classStatus.comment;
                            }
                        } else if (arregetted[0].result[0].classes[i].removedAt) {
                            text = text + ' | удален | дата удаления: ' + new Date(arregetted[0].result[0].classes[i].removedAt).toLocaleString("ru-RU", { timeZone: 'Europe/Moscow' });
                        }

                        let tempor = document.createElement('input');
                        document.getElementById('statustable').append(tempor);
                        tempor.setAttribute('type', 'text');
                        tempor.setAttribute('style', 'width: 99.4%; height: 20px; color: bisque; font-weight:500; background-color:#464451;border-style:double;');
                        tempor.value = text;
                        //    console.log(text);
                    } else if (document.getElementById('idstudentforsearch').value == "") {
                        let text = 'У: ' + arregetted[0].result[0].classes[i].studentId + ' | ' + new Date(arregetted[0].result[0].classes[i].startAt).toLocaleString("ru-RU", { timeZone: 'Europe/Moscow' }).slice(0, 17)

                        //	new Date(arregetted[0].result[0].classes[i].startAt).toLocaleTimeString("ru-RU", {timeZone: 'Europe/Moscow'}).slice(0,5)

                        if (arregetted[0].result[0].classes[i].classStatus !== undefined) {
                            text = text + ' | услуга : ' + arregetted[0].result[0].classes[i].educationServiceId;
                            text = text + ' | статус: ' + arregetted[0].result[0].classes[i].classStatus.status;
                            text = text + ' | когда выставлен: ' + new Date(arregetted[0].result[0].classes[i].classStatus.createdAt).toLocaleString("ru-RU", { timeZone: 'Europe/Moscow' });
                            text = text + ' | кем: ' + arregetted[0].result[0].classes[i].classStatus.createdByUserId;
                            text = text + ' | тип: ' + arregetted[0].result[0].classes[i].type;
                            if (arregetted[0].result[0].classes[i].classStatus.comment !== '') {
                                text = text + ' | комментарий: ' + arregetted[0].result[0].classes[i].classStatus.comment;
                            }
                        } else if (arregetted[0].result[0].classes[i].removedAt) {
                            text = text + ' | удален | дата удаления: ' + new Date(arregetted[0].result[0].classes[i].removedAt).toLocaleString("ru-RU", { timeZone: 'Europe/Moscow' });
                        }

                        let tempor = document.createElement('input');
                        document.getElementById('statustable').append(tempor);
                        tempor.setAttribute('type', 'text');
                        tempor.setAttribute('style', 'width: 99.4%; height: 20px; color: bisque; font-weight:500; background-color:#464451;border-style:double;');
                        tempor.value = text;
                    }
                }
            } else {
                alert("Уроков нет");
            }

            document.getElementById('responseTextarea1').removeAttribute('getlessonstatusinfos');


        }, 500)

    } else {
        alert("Введите ID учителя в поле");
    }

}

//Функция получения чатов с низким КСАТ
let stringChatsWithLowCsat;

document.getElementById('getlowcsat').onclick = async function () { // получить хеши чатов с оценками ниже 4
    let datefrom1 = document.getElementById('dateFrom').value + "T21:00:00.000Z";
    let dateto1 = document.getElementById('dateTo').value + "T20:59:59.059Z";
    let strcsatnew = document.getElementById('lowCSATcount');
    strcsatnew.textContent = "Загрузка"
    document.getElementById('getlowcsat').textContent = "Загрузка";

    // блок с расчетом КСАТ и чатов без тематики
    try {
        pagenewlowcsat = 1
        stringChatsWithLowCsat = "";
        while (true) {
            test = ''
            await fetch("https://skyeng.autofaq.ai/api/conversations/queues/archive", {
                "headers": {
                    "content-type": "application/json",
                },
                "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"tsFrom\":\"" + datefrom1 + "\",\"tsTo\":\"" + dateto1 + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":" + pagenewlowcsat + ",\"limit\":100}",
                "method": "POST",
            }).then(r => r.json()).then(r => test = r)
            for (let i = 0; i < test.items.length; i++) {
                let flagCsat1 = 0
                csatScoreNewLow = 0
                await fetch('https://skyeng.autofaq.ai/api/conversations/' + test.items[i].conversationId)
                    .then(r => r.json())
                    .then(r => {
                        if (r.operatorId == operatorId) {
                            flagCsat1 = 1
                        }
                    })
                if (flagCsat1 == 1)
                    if (test.items[i].stats.rate != undefined)
                        if (test.items[i].stats.rate.rate != undefined && test.items[i].stats.rate.rate < 4) {
                            csatScoreNewLow = 1;
                        }

                if (csatScoreNewLow == 1)
                    stringChatsWithLowCsat += '<span style="color: #00FA9A">&#5129;</span>' + " " + '<a href="https://skyeng.autofaq.ai/logs/' + test.items[i].conversationId + '" onclick="" style="color:#1E90FF;" class = "csatchatids">' + test.items[i].conversationId + '</a>' + '<span class = "lowcsatschats" style="margin-left: 10px; cursor: pointer">👁‍🗨</span>' + '</br>'

            }

            if (stringChatsWithLowCsat == "")
                stringChatsWithLowCsat = ' нет таких' + '<br>'

            document.querySelector('#lowCSATcount').style.display = ""
            strcsatnew.innerHTML = 'Чаты с плохими оценками: (открывать в режиме инкогнито!) ' + '<br>' + stringChatsWithLowCsat

            let csatcontainer = document.querySelectorAll('.lowcsatschats');
            let csatchattids = document.querySelectorAll('.csatchatids');
            for (let j = 0; j < csatcontainer.length; j++) {
                csatcontainer[j].onclick = function () {

                    if (document.querySelector('#hide_or_display').textContent != "свернуть") {
                        hide_or_display.click()
                        document.getElementById('chat_id').value = csatchattids[j].innerText;
                        search.click()
                    } else if (document.querySelector('#hide_or_display').textContent == "свернуть") {
                        document.getElementById('chat_id').value = csatchattids[j].innerText;
                        search.click()
                    }
                }
            }



            if ((test.total / 100) > pagenewlowcsat) {
                pagenewlowcsat++;
            } else {
                document.getElementById('getlowcsat').textContent = "Чаты с КСАТ<4"
                break
            }
        }
    } finally {
        document.getElementById('getlowcsat').textContent = "Чаты с КСАТ<4"
        console.log('Что-то пошло не так.')
    }
}

document.getElementById('getfile').onclick = function () { // функция загрузки файла в виде HTML  lowcsat или всех чатов по комменту
    if (stringChatsWithComment != null || stringChatsWithComment != undefined) {
        var blob = new Blob([stringChatsWithComment], { type: "text/plain" });
        var link = document.createElement("a");
        link.setAttribute("href", URL.createObjectURL(blob));
        link.setAttribute("download", "FoundComments.html");
        link.click();
    } else if (stringChatsWithLowCsat != null || stringChatsWithLowCsat != undefined) {
        var blob = new Blob([stringChatsWithLowCsat], { type: "text/plain" });
        var link = document.createElement("a");
        link.setAttribute("href", URL.createObjectURL(blob));
        link.setAttribute("download", "LowCSAT.html");
        link.click();
    }
}

async function sendAnswerTemplate2(word, flag = 0) { //функция отправки шаблона 2
    var tmpTxt = ""
    var adr = `https://skyeng.autofaq.ai/tickets/assigned/`
    if (word.length < 50)
        try {
            a = await fetch("https://skyeng.autofaq.ai/api/reason8/autofaq/top/batch", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                    "cache-control": "max-age=0",
                    "content-type": "application/json",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin"
                },
                "referrer": adr,
                "referrerPolicy": "no-referrer-when-downgrade",
                "body": "{\"query\":\"" + word + "\",\"answersLimit\":25,\"autoFaqServiceIds\":[121388, 121384]}",
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            }).then(a => b = a.json()).then(result => result.forEach(k => {
                if (k.title == word)
                    tmpTxt = k.text
            }))
            tmpTxt = tmpTxt.split("<br>↵").join('\n')
            tmpTxt = tmpTxt.split("&nbsp;").join(' ')
            tmpTxt = tmpTxt.split("<br />").join('\n')
            tmpTxt = tmpTxt.split('<a').join('TMPaTMP').split('</a').join('TMPENDaTMEPEND')
            tmpTxt = tmpTxt.replace(/<\/?[^>]+>/g, '')
            tmpTxt = tmpTxt.split('TMPaTMP').join('<a').split('TMPENDaTMEPEND').join('</a')
        } catch (e) { }
    if (tmpTxt == "")
        tmpTxt = word
    if (document.getElementById('msg1').innerHTML == "Доработать" && flag == 0) {
        document.getElementById('inp').value = tmpTxt
        template_flag = 1
        template_flag2 = 1
    } else {
        tmpTxt = tmpTxt.split("\"").join("\\\"")
        tmpTxt2 = tmpTxt.split('\n')
        tmpTxt3 = ""
        tmpTxt2.forEach(el => tmpTxt3 += "<p>" + el + "</p>\\n")
        tmpTxt = tmpTxt3
        tmpTxt = tmpTxt.split('<p></p>').join("<p><br></p>")
        tmpTxt = tmpTxt.substr(0, tmpTxt.length - 2)
        var values = await getInfo(0)
        refCurTimer(localStorage.getItem('aclstime') + ":00")
        var adr = values[0]; var adr1 = values[1]; var uid = values[2]
        fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
            "headers": {
                "accept": "*/*",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "max-age=0",
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundarymasjvc4O46a190zh",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": adr,
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": "------WebKitFormBoundarymasjvc4O46a190zh\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + tmpTxt + "\",\"suggestedAnswerDocId\":0}\r\n------WebKitFormBoundarymasjvc4O46a190zh--\r\n",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        resetFlags()
        flagggg = 0
    }
}

function resetFlags() { //функция обнуления флагов
    template_flag = 0
    template_flag2 = 0
}
async function checkHistory(id) { //проверка истории по чату чтобы занести переменные и флаги , но тоже проверить  нужна или нет ибо раньше использовалась для проверки повторного обращения чтобы при нажатии привет др шаблон отрабатывался НУЖНА?
    var date = new Date()
    var date2 = new Date()
    date2.setTime(date - 8 * 60 * 60 * 1000)

    day = month = ""
    if (date.getMonth() < 9)
        month = "0" + (date.getMonth() + 1)
    else
        month = (date.getMonth() + 1)
    if (date.getDate() < 10)
        day = "0" + date.getDate()
    else
        day = date.getDate()
    if (date.getHours() < 10)
        hours = '0' + date.getHours()
    else
        hours = date.getHours()
    if (date.getMinutes() < 10)
        minutes = '0' + date.getMinutes()
    else
        minutes = date.getMinutes()
    if (date.getSeconds() < 10)
        seconds = '0' + date.getSeconds()
    else
        seconds = date.getSeconds()

    secondDate = date.getFullYear() + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + ".000z"

    if (date2.getMonth() < 9)
        month2 = "0" + (date2.getMonth() + 1)
    else
        month2 = (date2.getMonth() + 1)
    if (date2.getDate() < 10)
        day2 = "0" + date2.getDate()
    else
        day2 = date2.getDate()

    if (date2.getHours() < 10)
        hours2 = '0' + date2.getHours()
    else
        hours2 = date2.getHours()
    if (date2.getMinutes() < 10)
        minutes2 = '0' + date2.getMinutes()
    else
        minutes2 = date2.getMinutes()
    if (date2.getSeconds() < 10)
        seconds2 = '0' + date2.getSeconds()
    else
        seconds2 = date2.getSeconds()

    firstDate = date2.getFullYear() + "-" + month2 + "-" + day2 + "T" + hours2 + ":" + minutes2 + ":" + seconds2 + ".000z"
    count = -1
    serviceId = localStorage.getItem('serviceIdGlob')
    a = await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
        "headers": {
            "accept": "*/*",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "max-age=0",
            "content-type": "application/json",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://skyeng.autofaq.ai/logs",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"serviceId\":\"" + serviceId + "\",\"mode\":\"Json\",\"channelUserIds\":[\"" + id + "\"],\"tsFrom\":\"" + firstDate + "\",\"tsTo\":\"" + secondDate + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":10}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(a => b = a.json()).then(b => { count = b.items.length })
    return count
}

async function getNotGoods(stringDate) { // функция проверки нот гуд оценок, рядовыми ТП не используется да и не знаю нужна ли она еще тут! НУЖНА?

    async function goNotgood(list, list2, date1, date2) {
        var text = ""
        var text2 = "Дата: " + stringDate2 + "\n"
        var page = 1
        for (m = -1; m < list.length; m++) {
            if (page == 2)
                m--
            a = await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                    "cache-control": "max-age=0",
                    "content-type": "application/json",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin"
                },
                "referrer": "https://skyeng.autofaq.ai/logs",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"participatingOperatorsIds\":[\"" + list[m] + "\"],\"tsFrom\":\"" + date1 + "\",\"tsTo\":\"" + date2 + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":" + page + ",\"limit\":100}",
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            }).then(a => b = a.json().then(array => {
                array1 = array
                n = 1
                array1.items.forEach(a => {
                    if (a.stats.rate != undefined)
                        if (a.stats.rate.rate != undefined) {
                            if (a.stats.rate.rate < 4) {
                                text += stringDate2 + "	" + list2[m] + "	https://skyeng.autofaq.ai/logs/" + a.conversationId + "	" + a.stats.rate.rate + "\n"
                                if (n == 1)
                                    text2 += "\nАгент: `" + list2[m] + "` C	S	A		T =\n "
                                text2 += "=HYPERLINK(\"https://skyeng.autofaq.ai/logs/" + a.conversationId + "\"; \"Нотгуд №" + n + "\" 	 (	оценка " + a.stats.rate.rate + ") - \n"
                                n++
                            }
                        }
                })
                if (array1.total > 100)
                    if (page == 2)
                        page = 1
                    else
                        page = 2
            }))
        }
        console.log(text)
        console.log(text2)
    }

    var operatorId = []
    var operatorNames = []
    await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
        "credentials": "include"
    }).then(result => b = result.json()).then(b => b.rows.forEach(k => {
        if (k.operator != null)
            if (k.operator.kbs.indexOf(120181) != -1 && k.operator.fullName.split('-')[0] == opsection) {
                operatorId.push(k.operator.id)
                operatorNames.push(k.operator.fullName.split('-')[1])
            }
    }))

    list = operatorId
    list2 = operatorNames

    stringDate2 = stringDate
    stringDate = stringDate.split(".")
    stringDate[1]--
    var date = new Date(stringDate[2], stringDate[1], stringDate[0])
    day = month = ""
    if (date.getMonth() < 9)
        month = "0" + (date.getMonth() + 1)
    else
        month = (date.getMonth() + 1)
    if (date.getDate() < 10)
        day = "0" + date.getDate()
    else
        day = date.getDate()

    secondDate = date.getFullYear() + "-" + month + "-" + day + "T20:59:59.059z"
    date = date - 24 * 60 * 60 * 1000
    var date2 = new Date()
    date2.setTime(date)

    if (date2.getMonth() < 9)
        month2 = "0" + (date2.getMonth() + 1)
    else
        month2 = (date2.getMonth() + 1)
    if (date2.getDate() < 10)
        day2 = "0" + date2.getDate()
    else
        day2 = date2.getDate()

    firstDate = date2.getFullYear() + "-" + month2 + "-" + day2 + "T21:00:00.000z"
    goNotgood(list, list2, firstDate, secondDate)
}

function customTemplates(language = '') { //собственные шаблоны и их добавление
    if (localStorage.getItem('winCstmTmpsTop') == null) {
        localStorage.setItem('winCstmTmpsTop', '120');
        localStorage.setItem('winCstmTmpsLeft', '295');
    }
    if (localStorage.getItem('cntTmplts' + language) == null)
        localStorage.setItem('cntTmplts' + language, 0)
    if (document.getElementById('cstmTmplates') == undefined) {
        var cstmTmp = document.createElement('div')
        cstmTmp.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winCstmTmpsTop') + 'px; left: ' + localStorage.getItem('winCstmTmpsLeft') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black; border-radius:5px; border:1px solid #768d87; ';
        cstmTmp.id = 'cstmTmplates'
        cstmTmp.style.display = 'none'
        document.body.append(cstmTmp);
    } else {
        cstmTmp = document.getElementById('cstmTmplates')
        while (document.getElementById('cstmTmplates').children[0] != undefined)
            document.getElementById('cstmTmplates').children[0].remove()
    }
    countOfTemplates = localStorage.getItem('cntTmplts' + language)


    var buttonOpenTmpWindow = document.createElement('button')
    buttonOpenTmpWindow.innerHTML = 'tmps'
    buttonOpenTmpWindow.title = 'Открывает окно для добавления своих шаблонов либо информации в ячейки в этом поле'
    buttonOpenTmpWindow.style.marginLeft = '7px'
    buttonOpenTmpWindow.onclick = function () {
        var a = document.getElementById('cstmTmplates')
        if (a.style.display == '')
            a.style.display = 'none'
        else
            a.style.display = ''
    }

    var tmpA = document.getElementById('AF_helper').children[0].children[0].children[0].children[0]
    if (tmpA.children[1].innerHTML != 'tmps')
        tmpA.insertBefore(buttonOpenTmpWindow, tmpA.children[1])

    tmpA.children[2].style.marginLeft = '40px'

    function refreshHotTmps() {
        while (document.getElementById('6str').children[0] != undefined)
            document.getElementById('6str').children[0].remove()
        countOfTemplates = localStorage.getItem('cntTmplts' + language)
        for (var i = 1; i <= countOfTemplates; i++) {
            var j = Number(i) - 1
            if (document.getElementById('cstmTmplates').children[j].children[0].checked) {
                if (localStorage.getItem('tmp_name_' + language + i) == null || localStorage.getItem('tmp_name_' + language + i) == "")
                    continue
                var a = document.getElementById('6str')
                var newBut = document.createElement('button')
                newBut.setAttribute('template', 'template_' + language + i)
                newBut.style.marginRight = '5px'
                newBut.style.marginTop = '5px'
                newBut.innerHTML = localStorage.getItem('tmp_name_' + language + i)
                a.appendChild(newBut)
                newBut.onclick = function () {
                    var text = localStorage.getItem(this.getAttribute('template')).split('\\n').join('\n')
                    sendAnswer(text)
                }
            }
        }
    }

    function addNewString(index) {

        var newDiv = document.createElement('div')
        newDiv.style.margin = '5px'
        newDiv.setAttribute('inp', 'cstmTmpInp' + language + index)
        newDiv.setAttribute('tmp', 'template_' + language + index)
        newDiv.setAttribute('index', index)

        var template = localStorage.getItem('template_' + language + index)
        var newInput = document.createElement('input')
        newInput.id = 'cstmTmpInp' + language + index
        newInput.value = template == undefined ? "" : template
        newInput.style.marginRight = '5px'
        newInput.style.width = '500px'

        var template = localStorage.getItem('tmp_name_' + language + index)
        var newInputTmpName = document.createElement('input')
        newInputTmpName.value = template == undefined ? "" : template
        newInputTmpName.style.marginRight = '5px'
        newInputTmpName.style.width = '150px'

        var newButton = document.createElement('button')
        newButton.style.marginRight = '5px'
        newButton.textContent = 'save'
        newButton.onclick = function () {
            localStorage.setItem(this.parentElement.getAttribute('tmp'), document.getElementById(this.parentElement.getAttribute('inp')).value)
            localStorage.setItem('tmp_name_' + language + index, this.parentElement.children[1].value)
            refreshHotTmps()
        }
        var newButton2 = document.createElement('button')
        newButton2.style.marginRight = '5px'
        newButton2.textContent = 'send'
        newButton2.onclick = function () {
            document.getElementById('inp').value = document.getElementById(this.parentElement.getAttribute('inp')).value.split('\\n').join('\n')
            this.parentElement.parentElement.style.display = 'none'
        }

        var newButton3 = document.createElement('button')
        newButton3.style.marginRight = '5px'
        newButton3.textContent = 'delete'
        newButton3.onclick = function () {
            for (var i = this.parentElement.getAttribute('index'); i < countOfTemplates; i++) {
                var n = Number(i) + 1
                localStorage.setItem('template_' + language + i, localStorage.getItem('template_' + language + n))
                localStorage.setItem('checkbox_' + language + i, localStorage.getItem('checkbox_' + language + n))
                localStorage.setItem('tmp_name_' + language + i, localStorage.getItem('tmp_name_' + language + n))
            }
            localStorage.removeItem('template_' + language + countOfTemplates)
            localStorage.removeItem('checkbox_' + language + countOfTemplates)
            localStorage.removeItem('tmp_name_' + language + countOfTemplates)
            countOfTemplates--;
            localStorage.setItem('cntTmplts' + language, countOfTemplates)
            while (document.getElementById('cstmTmplates').children[0] != undefined)
                document.getElementById('cstmTmplates').children[0].remove()
            customTemplates(language)
        }


        var buttonSortUp = document.createElement('button')
        buttonSortUp.innerHTML = '↑'
        buttonSortUp.onclick = function () {
            var index = this.parentElement.getAttribute('index')
            if (index == 1)
                return
            var index2 = Number(index) - 1

            var tmp1 = localStorage.getItem('template_' + language + index)
            localStorage.setItem('template_' + language + index, localStorage.getItem('template_' + language + index2))
            localStorage.setItem('template_' + language + index2, tmp1)

            tmp1 = localStorage.getItem('checkbox_' + language + index)
            localStorage.setItem('checkbox_' + language + index, localStorage.getItem('checkbox_' + language + index2))
            localStorage.setItem('checkbox_' + language + index2, tmp1)

            tmp1 = localStorage.getItem('tmp_name_' + language + index)
            localStorage.setItem('tmp_name_' + language + index, localStorage.getItem('tmp_name_' + language + index2))
            localStorage.setItem('tmp_name_' + language + index2, tmp1)
            if (document.getElementById('languageAF').innerHTML == "Русский")
                customTemplates()
            else
                customTemplates('en_')
        }

        var buttonSortDown = document.createElement('button')
        buttonSortDown.innerHTML = '↓'
        buttonSortDown.style.marginRight = '5px'
        buttonSortDown.onclick = function () {
            var index = this.parentElement.getAttribute('index')
            if (index == countOfTemplates)
                return
            var index2 = Number(index) + 1

            var tmp1 = localStorage.getItem('template_' + language + index)
            localStorage.setItem('template_' + language + index, localStorage.getItem('template_' + language + index2))
            localStorage.setItem('template_' + language + index2, tmp1)

            tmp1 = localStorage.getItem('checkbox_' + language + index)
            localStorage.setItem('checkbox_' + language + index, localStorage.getItem('checkbox_' + language + index2))
            localStorage.setItem('checkbox_' + language + index2, tmp1)

            tmp1 = localStorage.getItem('tmp_name_' + language + index)
            localStorage.setItem('tmp_name_' + language + index, localStorage.getItem('tmp_name_' + language + index2))
            localStorage.setItem('tmp_name_' + language + index2, tmp1)
            if (document.getElementById('languageAF').innerHTML == "Русский")
                customTemplates()
            else
                customTemplates('en_')
        }

        var newcheckbox = document.createElement('input')
        newcheckbox.type = 'checkbox'
        newcheckbox.style.marginRight = '5px'
        newcheckbox.checked = localStorage.getItem('checkbox_' + language + index) == 'true' ? 1 : 0
        newcheckbox.onclick = function () {
            localStorage.setItem('checkbox_' + language + index, this.checked)
        }

        newDiv.append(newcheckbox)
        newDiv.append(newInputTmpName)
        newDiv.append(buttonSortUp)
        newDiv.append(buttonSortDown)
        newDiv.append(newButton3)
        newDiv.append(newButton)
        newDiv.append(newInput)
        newDiv.append(newButton2)
        cstmTmp.insertBefore(newDiv, cstmTmp.lastElementChild)
    }

    var newDiv = document.createElement('div')
    newDiv.style = 'cursor: -webkit-grab;'
    newDiv.style.margin = '5px'
    newDiv.style.textAlign = 'center'
    var addTmpl = document.createElement('button')
    addTmpl.textContent = 'Добавить шаблон'
    addTmpl.style.marginRight = '5px'
    addTmpl.onclick = function () {
        countOfTemplates++
        localStorage.setItem('cntTmplts' + language, countOfTemplates)
        localStorage.setItem('template_' + language + countOfTemplates, "")
        localStorage.setItem('checkbox_' + language + countOfTemplates, false)
        localStorage.setItem('tmp_name_' + language + countOfTemplates, "")
        addNewString(countOfTemplates)
    }
    var saveAllTmp = document.createElement('button')
    saveAllTmp.textContent = 'Сохранить всё'
    saveAllTmp.style.marginRight = '5px'
    saveAllTmp.onclick = function () {
        for (var i = 1; i <= countOfTemplates; i++) {
            localStorage.setItem('template_' + language + i, document.getElementById('cstmTmpInp' + language + i).value)
            localStorage.setItem('checkbox_' + language + i, document.getElementById('cstmTmpInp' + language + i).parentElement.children[0].checked)
            localStorage.setItem('tmp_name_' + language + i, document.getElementById('cstmTmpInp' + language + i).parentElement.children[1].value)
            refreshHotTmps()
        }
    }

    var but = document.createElement('button')
    but.innerHTML = 'hide'
    but.onclick = function () {
        this.parentElement.parentElement.style.display = 'none'
    }
    but.style.float = 'right'

    newDiv.append(saveAllTmp)
    newDiv.append(addTmpl)
    newDiv.append(but)
    cstmTmp.append(newDiv)

    if (countOfTemplates > 0)
        for (i = 1; i <= countOfTemplates; i++)
            addNewString(i)
    refreshHotTmps()

    var listenercstmTmp = function (e, a) {
        cstmTmp.style.left = Number(e.clientX - myX3) + "px";
        cstmTmp.style.top = Number(e.clientY - myY3) + "px";
        localStorage.setItem('winCstmTmpsTop', String(Number(e.clientY - myY3)));
        localStorage.setItem('winCstmTmpsLeft', String(Number(e.clientX - myX3)));
    };

    cstmTmp.onmousedown = function (a) {
        if (checkelementtype(a)){
            window.myX3 = a.layerX;
            window.myY3 = a.layerY;
            document.addEventListener('mousemove', listenercstmTmp);
        }
    }
    cstmTmp.onmouseup = function () { document.removeEventListener('mousemove', listenercstmTmp); }

    document.getElementById('languageAF').onclick = function () {
        if (this.innerHTML == "Русский") {
            this.innerHTML = "Английский";
            document.getElementById('AF_helper').style.background = "#EBC7DF"
            customTemplates('en_')
        } else {
            this.innerHTML = "Русский";
            document.getElementById('AF_helper').style.background = "#464451"
            customTemplates()
        }
    }
}

async function getStats() {           // функция получения статистики за день (сколько чатов закрыто, пощупано, время работы)
    let table = document.createElement('table')
    table.style = 'table-layout: auto; width:750px;'
    table.style.textAlign = 'center'
    table.id = 'tableStats'
    let columnNames = ["Оператор", "Закрыл запросов", "Пощупал чатов", "Среднее время ожидания", "Среднее время работы"]
    let trHead = document.createElement('tr')
    for (let i = 0; i < columnNames.length; i++) {
        var th = document.createElement('th')
        trHead.append(th)
        th.textContent = columnNames[i]
    }

    var time = new Date()
    var time2 = new Date()
    time2.setTime(time - 24 * 60 * 60 * 1000)
    var date1 = time.getDate() < 10 ? '0' + time.getDate() : time.getDate()
    var date2 = time2.getDate() < 10 ? '0' + time2.getDate() : time2.getDate()
    var month1 = Number(time.getMonth() + 1) < 10 ? '0' + Number(time.getMonth() + 1) : Number(time.getMonth() + 1)
    var month2 = Number(time2.getMonth() + 1) < 10 ? '0' + Number(time2.getMonth() + 1) : Number(time2.getMonth() + 1)
    var str1 = time.getFullYear() + "-" + month1 + "-" + date1 + "T21%3A00%3A00Z"
    var str2 = time2.getFullYear() + "-" + month2 + "-" + date2 + "T21%3A00%3A00Z"
    var array = []
    let opsection = document.getElementsByClassName('user_menu-dropdown-user_name')[0].innerText.split('-')[0] //определение отдела оператора
    console.log("Подразделение - " + opsection);
    await fetch("https://skyeng.autofaq.ai/api/reason8/reports/operatorActivityTable?dateFrom=" + str2 + "&dateTo=" + str1, {
        "headers": {
            "accept": "*/*",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "max-age=0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://skyeng.autofaq.ai/reports/operator-activity",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    }).then(response => b = response.json().then(b => b.rows.forEach(k => {
        if (k.operator.indexOf(opsection) != -1) {
            array.push(k)
        }
    })))
    array.sort(function (a, b) {
        return b.conversationClosed - a.conversationClosed;
    });

    var operatorId = []
    var operatorNames = []
    await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
        "credentials": "include"
    }).then(result => b = result.json()).then(b => b.rows.forEach(k => {
        if (k.operator != null)
            if (k.operator.kbs.indexOf(120181) != -1 && k.operator.fullName.split('-')[0] == opsection) {
                operatorId.push(k.operator.id)
                operatorNames.push(k.operator.fullName)
            }
    }))

    var date = new Date()
    day = month = ""
    if (date.getMonth() < 9)
        month = "0" + (date.getMonth() + 1)
    else
        month = (date.getMonth() + 1)
    if (date.getDate() < 10)
        day = "0" + date.getDate()
    else
        day = date.getDate()

    var secondDate = date.getFullYear() + "-" + month + "-" + day + "T20:59:59.059z"
    date = date - 24 * 60 * 60 * 1000
    var date2 = new Date()
    date2.setTime(date)

    if (date2.getMonth() < 9)
        month2 = "0" + (date2.getMonth() + 1)
    else
        month2 = (date2.getMonth() + 1)
    if (date2.getDate() < 10)
        day2 = "0" + date2.getDate()
    else
        day2 = date2.getDate()

    var firstDate = date2.getFullYear() + "-" + month2 + "-" + day2 + "T21:00:00.000z"

    var operatorChatCount = []
    for (var l = 0; l < operatorId.length; l++) {
        await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
            "headers": {
                "accept": "*/*",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "max-age=0",
                "content-type": "application/json",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://skyeng.autofaq.ai/logs",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"participatingOperatorsIds\":[\"" + operatorId[l] + "\"],\"tsFrom\":\"" + firstDate + "\",\"tsTo\":\"" + secondDate + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":1}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(a => a.json()).then(b => operatorChatCount[l] = b.total)
    }

    let tbody = document.createElement('tbody')
    for (let i = 0; i < array.length; i++) {
        var tr = document.createElement('tr')
        for (let j = 0; j < 5; j++) {
            var td = document.createElement('td')
            switch (j) {
                case 0:
                    td.textContent = array[i].operator;
                    td.style = 'text-align: left; padding-left: 50px'
                    break;
                case 2:
                    for (let j = 0; j < operatorNames.length; j++)
                        if (array[i].operator == operatorNames[j]) {
                            td.textContent = operatorChatCount[j]
                            td.classList.add("chtcnt");
                            break
                        }
                    break;
                case 1:
                    td.textContent = array[i].conversationClosed;
                    td.classList.add("chtclosed");
                    break;
                case 3:
                    var averageAnswerTime = Math.floor(array[i].averageAnswerTime / 1000)
                    averageAnswerTime = averageAnswerTime < 60 ? '00:' + averageAnswerTime : Math.floor(averageAnswerTime / 60) + ':' + ((averageAnswerTime % 60) < 10 ? '0' + (averageAnswerTime % 60) : (averageAnswerTime % 60))
                    td.textContent = averageAnswerTime;
                    break;
                case 4:
                    var averageHandlingTime = Math.floor(array[i].averageHandlingTime / 1000)
                    averageHandlingTime = averageHandlingTime < 60 ? averageHandlingTime : Math.floor(averageHandlingTime / 60) + ':' + ((averageHandlingTime % 60) < 10 ? '0' + (averageHandlingTime % 60) : (averageHandlingTime % 60))
                    td.textContent = averageHandlingTime;
                    break;
            }
            tr.append(td)
        }
        tbody.append(tr)
    }


    for (let i = 0; i < tbody.childElementCount; i++) {
        for (let j = 0; j < operatorNames.length; j++)
            if (tbody.children[0].children[0] == operatorNames.length) {
                let tr = document.createElement('tr')
                tr.textContent = operatorChatCount[j]
                tbody.children[0].insertBefore(tbody.children[0].children[2])
            }
    }

    table.append(trHead)
    table.append(tbody)

    let newDivForStats = document.createElement('div')
    newDivForStats.append(table)
    document.getElementById('root').children[0].children[1].children[0].children[1].append(newDivForStats)

    let str = document.createElement('button') // кнопка для запуска проверки КСАТ и тематики чатов
    str.textContent = 'Проверить CSAT + тематики чатов'
    str.id = 'buttonCheckStats'
    str.style.marginLeft = '50px'
    str.onclick = checkCSAT
    document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(str)

    let quechatscount = document.createElement('button') // кнопка для запуска подсчета количества чатов в очереди ТП и КЦ
    quechatscount.textContent = 'Узнать кол-во чатов в очереди'
    quechatscount.id = 'buttonQueChatsCount'
    quechatscount.style.marginLeft = '10px'
    quechatscount.onclick = checkChatCountQue
    document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(quechatscount)

    let kcpower = document.createElement('button') // кнопка для проверки нагрузки КЦ
    kcpower.textContent = 'Нагрузка КЦ'
    kcpower.id = 'buttonKCpower'
    kcpower.style.marginLeft = '10px'
    kcpower.onclick = checkkcpower
    document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(kcpower)

    let tppower = document.createElement('button') // кнопка для проверки нагрузки КЦ
    tppower.textContent = 'Нагрузка ТП'
    tppower.id = 'buttonTPpower'
    tppower.style.marginLeft = '10px'
    tppower.onclick = checktppower
    document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(tppower)

    let dcc = document.getElementsByClassName('chtcnt')
    let summcnt = 0;
    for (i = 0; i < dcc.length; i++) {
        summcnt = summcnt + Number(dcc[i].textContent)
    }

    let dc = document.getElementsByClassName('chtclosed')
    let summclsd = 0;
    for (i = 0; i < dc.length; i++) {
        summclsd = summclsd + Number(dc[i].textContent)
    }

    let sumchatclosed = document.createElement('div') // кнопка для запуска подсчета количества чатов в очереди ТП и КЦ
    sumchatclosed.textContent = 'Общая сумма закрытых чатов за сутки по отделу: ' + summclsd;
    sumchatclosed.style.marginLeft = '50px'
    document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(sumchatclosed)

    let sumchatcount = document.createElement('div') // кнопка для запуска подсчета количества чатов в очереди ТП и КЦ
    sumchatcount.textContent = 'Общая сумма пощупаных чатов за сутки по отделу: ' + summcnt;
    sumchatcount.style.marginLeft = '50px'
    document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(sumchatcount)

    document.getElementById('buttonGetStat').textContent = 'Скрыть стату'
    document.getElementById('buttonGetStat').removeAttribute('disabled')
}

async function checkkcpower() { //проверить нагрузку на КЦ
    let cntc = 0;
    let busycnt = 0;
    let pausecnt = 0;
    let allcntc = 0;
    let found = [];
    let str = document.createElement('p')
    str.style.paddingLeft = '50px'
    if (document.getElementById('buttonTPpower').textContent == 'Повторить проверку' || document.getElementById('buttonKCpower').textContent == 'Повторить проверку' || document.getElementById('buttonQueChatsCount').textContent == 'Повторить проверку')
        document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.lastElementChild.remove()

    await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
        "credentials": "include"
    }).then(r => r.json()).then(result => {
        setTimeout(function () {
            for (let i = 0; i < result.rows.length; i++) {
                if (result.rows[i].operator != null && result.rows[i].operator.status != "Offline" && result.rows[i].operator.fullName.match(/КЦ/)) {
                    cntc++;
                    if (result.rows[i].operator.status == "Busy")
                        busycnt++;
                    else if (result.rows[i].operator.status == "Pause")
                        pausecnt++;
                    if (result.rows[i].aCnt == null)
                        result.rows[i].aCnt = 0;
                    allcntc += result.rows[i].aCnt;
                    if (result.rows[i].operator.status == "Online")
                        result.rows[i].operator.status = "🟢 Онлайн"
                    else if (result.rows[i].operator.status == "Busy")
                        result.rows[i].operator.status = "🟡 Занят"
                    else if (result.rows[i].operator.status == "Pause")
                        result.rows[i].operator.status = "🔴 Перерыв"
                    found += result.rows[i].operator.fullName + " | Чатов: " + result.rows[i].aCnt + " | Статус: " + result.rows[i].operator.status + '<br>';
                }
            }
            if (allcntc / (cntc - pausecnt - busycnt) <= 2.2)
                found += '<br>' + "Сотрудников на линии: " + cntc + " из них: " + "занят: " + busycnt + " перерыв: " + pausecnt + " онлайн: " + (cntc - busycnt - pausecnt) + '<br>' + "Всего чатов в работе: " + allcntc + '<br>' + " Низкая нагрузка";
            else if (allcntc / (cntc - pausecnt - busycnt) > 2.2 && allcntc / (cntc - pausecnt - busycnt) <= 3.2)
                found += '<br>' + "Сотрудников на линии: " + cntc + " из них: " + "занят: " + busycnt + " перерыв: " + pausecnt + " онлайн: " + (cntc - busycnt - pausecnt) + '<br>' + "Всего чатов в работе: " + allcntc + '<br>' + " Средняя нагрузка";
            else if (allcntc / (cntc - pausecnt - busycnt) > 3.2 && allcntc / (cntc - pausecnt - busycnt) <= 4.4)
                found += '<br>' + "Сотрудников на линии: " + cntc + " из них: " + "занят: " + busycnt + " перерыв: " + pausecnt + " онлайн: " + (cntc - busycnt - pausecnt) + '<br>' + "Всего чатов в работе: " + allcntc + '<br>' + " Высокая нагрузка";
            else if (allcntc / (cntc - pausecnt - busycnt) >= 4.5)
                found += '<br>' + "Сотрудников на линии: " + cntc + " из них: " + "занят: " + busycnt + " перерыв: " + pausecnt + " онлайн: " + (cntc - busycnt - pausecnt) + '<br>' + "Всего чатов в работе: " + allcntc + '<br>' + " Критическая нагрузка";
        }, 1000)

        setTimeout(function () {
            document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(str)
            str.innerHTML = '<br>' + found;
        }, 1000)

        document.getElementById('buttonKCpower').textContent = 'Повторить проверку'
    })
}

async function checktppower() { //проверить нагрузку на ТП
    let cntc = 0;
    let busycnt = 0;
    let pausecnt = 0;
    let allcntc = 0;
    let found = [];
    let str = document.createElement('p')
    str.style.paddingLeft = '50px'
    if (document.getElementById('buttonTPpower').textContent == 'Повторить проверку' || document.getElementById('buttonKCpower').textContent == 'Повторить проверку' || document.getElementById('buttonQueChatsCount').textContent == 'Повторить проверку')
        document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.lastElementChild.remove()

    await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
        "credentials": "include"
    }).then(r => r.json()).then(result => {
        setTimeout(function () {
            for (let i = 0; i < result.rows.length; i++) {
                if (result.rows[i].operator != null && result.rows[i].operator.status != "Offline" && result.rows[i].operator.fullName.match(/ТП\D/)) {
                    cntc++;
                    if (result.rows[i].operator.status == "Busy")
                        busycnt++;
                    else if (result.rows[i].operator.status == "Pause")
                        pausecnt++;
                    if (result.rows[i].aCnt == null)
                        result.rows[i].aCnt = 0;
                    allcntc += result.rows[i].aCnt;
                    if (result.rows[i].operator.status == "Online")
                        result.rows[i].operator.status = "🟢 Онлайн"
                    else if (result.rows[i].operator.status == "Busy")
                        result.rows[i].operator.status = "🟡 Занят"
                    else if (result.rows[i].operator.status == "Pause")
                        result.rows[i].operator.status = "🔴 Перерыв"
                    found += result.rows[i].operator.fullName + " | Чатов: " + result.rows[i].aCnt + " | Статус: " + result.rows[i].operator.status + '<br>';
                }
            }

            if (allcntc / (cntc - pausecnt - busycnt) <= 2.2)
                found += '<br>' + "Сотрудников на линии: " + cntc + " из них: " + "занят: " + busycnt + " перерыв: " + pausecnt + " онлайн: " + (cntc - busycnt - pausecnt) + '<br>' + "Всего чатов в работе: " + allcntc + '<br>' + " Низкая нагрузка";
            else if (allcntc / (cntc - pausecnt - busycnt) > 2.2 && allcntc / (cntc - pausecnt - busycnt) <= 3.2)
                found += '<br>' + "Сотрудников на линии: " + cntc + " из них: " + "занят: " + busycnt + " перерыв: " + pausecnt + " онлайн: " + (cntc - busycnt - pausecnt) + '<br>' + "Всего чатов в работе: " + allcntc + '<br>' + " Средняя нагрузка";
            else if (allcntc / (cntc - pausecnt - busycnt) > 3.2 && allcntc / (cntc - pausecnt - busycnt) <= 4.4)
                found += '<br>' + "Сотрудников на линии: " + cntc + " из них: " + "занят: " + busycnt + " перерыв: " + pausecnt + " онлайн: " + (cntc - busycnt - pausecnt) + '<br>' + "Всего чатов в работе: " + allcntc + '<br>' + " Высокая нагрузка";
            else if (allcntc / (cntc - pausecnt - busycnt) >= 4.5)
                found += '<br>' + "Сотрудников на линии: " + cntc + " из них: " + "занят: " + busycnt + " перерыв: " + pausecnt + " онлайн: " + (cntc - busycnt - pausecnt) + '<br>' + "Всего чатов в работе: " + allcntc + '<br>' + " Критическая нагрузка";
        }, 1000)

        setTimeout(function () {
            document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(str)
            str.innerHTML = '<br>' + found;
        }, 1000)

        document.getElementById('buttonTPpower').textContent = 'Повторить проверку'
    })
}

let chatneraspcount;
let chattpquecount;

async function checkChatCountQue() { // функция проверки количества чатов в очереди в КЦ и ТП
    let str = document.createElement('p')
    str.style.paddingLeft = '50px'
    if (document.getElementById('buttonQueChatsCount').textContent == 'Повторить проверку' || document.getElementById('buttonTPpower').textContent == 'Повторить проверку' || document.getElementById('buttonKCpower').textContent == 'Повторить проверку')
        document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.lastElementChild.remove()
    var date = new Date()
    day = month = ""
    if (date.getMonth() < 9)
        month = "0" + (date.getMonth() + 1)
    else
        month = (date.getMonth() + 1)
    if (date.getDate() < 10)
        day = "0" + date.getDate()
    else
        day = date.getDate()

    secondDate = date.getFullYear() + "-" + month + "-" + day + "T20:59:59.059Z"
    date = date - 24 * 60 * 60 * 1000
    var date2 = new Date()
    date2.setTime(date)

    if (date2.getMonth() < 9)
        month2 = "0" + (date2.getMonth() + 1)
    else
        month2 = (date2.getMonth() + 1)
    if (date2.getDate() < 10)
        day2 = "0" + (date2.getDate()) // убрал -1
    else if (date2.getDate() == 10)
        day2 = (date2.getDate());
    else
        day2 = (date2.getDate() - 1)

    firstDate = date2.getFullYear() + "-" + month2 + "-" + day2 + "T21:00:00.000Z"
    await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
        "headers": {
            "content-type": "application/json",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://skyeng.autofaq.ai/logs",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"tsFrom\":\"" + firstDate + "\",\"tsTo\":\"" + secondDate + "\",\"usedStatuses\":[\"OnOperator\"],\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":10}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(r => r.text()).then(result => {
        setTimeout(function () {
            chatneraspcount = result.match(/total.*?(\d+).*/)[1];
            //		str.innerHTML = 'Количество чатов в нераспределенной очереди: ' + newres;
        }, 1000)
    })

    await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
        "headers": {
            "content-type": "application/json",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://skyeng.autofaq.ai/logs",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"usedAutoFaqKbIds\":[\"120181\"],\"tsFrom\":\"" + firstDate + "\",\"tsTo\":\"" + secondDate + "\",\"usedStatuses\":[\"OnOperator\"],\"orderBy\":\"ts\",\"orderDirection\":\"Desc\",\"page\":1,\"limit\":200}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(r1 => r1.text()).then(result1 => {
        setTimeout(function () {
            chattpquecount = result1.match(/total.*?(\d+).*/)[1];
            //		str2.innerHTML = 'Количество чатов в очереди ТП: ' + newres2;
        }, 1000)
    })

    setTimeout(function () {
        document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(str)
        str.innerHTML = 'Количество чатов в нераспределенной очереди: ' + chatneraspcount + " " + '<br> Количество чатов в очереди ТП: ' + chattpquecount;
    }, 1000)

    document.getElementById('buttonQueChatsCount').textContent = 'Повторить проверку'
}

async function checkCSAT() {             // функция проверки CSAT и чатов без тематики
    let str = document.createElement('p')
    str.style.paddingLeft = '50px'
    if (document.getElementById('buttonCheckStats').textContent == 'Повторить проверку')
        document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.lastElementChild.remove()
    document.getElementById('buttonCheckStats').textContent = 'Загрузка'
    document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.append(str)

    var date = new Date()
    day = month = ""
    if (date.getMonth() < 9)
        month = "0" + (date.getMonth() + 1)
    else
        month = (date.getMonth() + 1)
    if (date.getDate() < 10)
        day = "0" + date.getDate()
    else
        day = date.getDate()

    secondDate = date.getFullYear() + "-" + month + "-" + day + "T20:59:59.059z"
    date = date - 24 * 60 * 60 * 1000
    var date2 = new Date()
    date2.setTime(date)

    if (date2.getMonth() < 9)
        month2 = "0" + (date2.getMonth() + 1)
    else
        month2 = (date2.getMonth() + 1)
    if (date2.getDate() < 10)
        day2 = "0" + date2.getDate()
    else
        day2 = date2.getDate()

    firstDate = date2.getFullYear() + "-" + month2 + "-" + day2 + "T21:00:00.000z"

    try {
        page = 1
        let stringChatsWithoutTopic = ""
        csatScore = 0
        csatCount = 0
        let flagok = [];
        let tagsarr = []; //обьявляем пустой массив для хранения тегов чатов
        let count = {};
        let flagvbad = [];
        let flagbad = [];
        let flagmid = [];
        let clschatarr = [];
        let abovecloseslaarr = []
        let aboveart = [];
        let slacount = 0;
        let artcount = 0;
        while (true) {
            test = ''
            await fetch("https://skyeng.autofaq.ai/api/conversations/queues/archive", {
                "headers": {
                    "content-type": "application/json",
                },
                "body": "{\"serviceId\":\"361c681b-340a-4e47-9342-c7309e27e7b5\",\"mode\":\"Json\",\"tsFrom\":\"" + firstDate + "\",\"tsTo\":\"" + secondDate + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":" + page + ",\"limit\":100}",
                "method": "POST",
            }).then(r => r.json()).then(r => test = r)
            for (let i = 0; i < test.items.length; i++) {
                let flagCsat = 0
                let flagTopic = 0


                await fetch('https://skyeng.autofaq.ai/api/conversations/' + test.items[i].conversationId)
                    .then(r => r.json())
                    .then(r => {
                        if (r.operatorId == operatorId) {
                            clschatarr.push(test.items[i].conversationId)
                            if (r.payload == undefined || r.payload.tags == undefined || r.payload.tags.value == '')
                                tagsarr.push('Нет тега!')
                            else if (r.payload.tags.value == '[\n  \"queue\"\n]')
                                tagsarr.push('Тег: Очередь КЦ') //добавляет что тег очередь КЦ выставлен
                            else if (r.payload.tags.value == '[\n  \"request_forwarded_to_2l_tp\"\n]')
                                tagsarr.push('Тег: 2ЛТП') //добавляет что тег очередь КЦ выставлен
                            else tagsarr.push(r.payload.tags.value) //формирует массив тегов чатов
                            flagCsat = 1
                            if (r.payload != undefined)
                                if (r.payload.topicId != undefined)
                                    if (r.payload.topicId.value == "")
                                        flagTopic = 1

                        }
                    })

                for (let k = 0; k < clschatarr.length; k++) {
                    if (test.items[i].conversationId == clschatarr[k]) {
                        if ((test.items[i].stats.conversationDuration / 1000 / 60).toFixed(1) > 25) {

                            let tmestmp = new Date((test.items[i].ts.split('[GMT]'))[0]);
                            let tshrs;
                            let tsmin
                            if ((tmestmp.getUTCHours() + 3) < 10)
                                tshrs = "0" + (tmestmp.getUTCHours() + 3);
                            else tshrs = (tmestmp.getUTCHours() + 3);

                            if (tmestmp.getMinutes() < 10)
                                tsmin = "0" + tmestmp.getMinutes();
                            else tsmin = tmestmp.getMinutes();

                            slacount++;
                            abovecloseslaarr += ('<span style="color: red; font-weight:700">&#5129;</span>' + " " +
                                '<a href="https://skyeng.autofaq.ai/logs/' + clschatarr[k] + '" onclick="" style="color:LightGoldenrod;" class = "slaclchatids">' +
                                clschatarr[k] + '</a>' + ' Время чата: ' + (test.items[i].stats.conversationDuration / 1000 / 60).toFixed(1) +
                                '<span class = "lookchat" style="margin-left: 10px; cursor: pointer">👁‍🗨</span>' + ' Создан чат в: ' + tshrs + ":" + tsmin + ' МСК ' + tagsarr[k] + '<br>')
                        }

                        if (test.items[i].stats.averageOperatorAnswerTime !== undefined && ((test.items[i].stats.averageOperatorAnswerTime / 1000 / 60).toFixed(2)) > 2) {
                            artcount++;
                            aboveart += ('<span style="color: red; font-weight:700">&#5129;</span>' + " " +
                                '<a href="https://skyeng.autofaq.ai/logs/' + clschatarr[k] + '" onclick="" style="color:LightGoldenrod;" class = "artchatids">' +
                                clschatarr[k] + '</a>' + ' Ср.время ответа: ' + (test.items[i].stats.averageOperatorAnswerTime / 1000 / 60).toFixed(2) +
                                '<span class = "lookchatart" style="margin-left: 10px; cursor: pointer">👁‍🗨</span>' + '<br>')
                        }
                    }
                }

                if (flagCsat == 1)
                    if (test.items[i].stats.rate != undefined)
                        if (test.items[i].stats.rate.rate != undefined) {
                            csatScore += test.items[i].stats.rate.rate
                            csatCount++
                            flagok.push(test.items[i].stats.rate.rate)
                            if (test.items[i].stats.rate.rate == 1)
                                flagvbad += '• ' + test.items[i].stats.conversationId + '<br>'
                            if (test.items[i].stats.rate.rate == 2)
                                flagbad += '• ' + test.items[i].stats.conversationId + '<br>'
                            if (test.items[i].stats.rate.rate == 3)
                                flagmid += '• ' + test.items[i].stats.conversationId + '<br>'
                        }
                if (flagTopic == 1)
                    stringChatsWithoutTopic += '<a href="https://skyeng.autofaq.ai/logs/' + test.items[i].conversationId + '" onclick="">https://skyeng.autofaq.ai/logs/' + test.items[i].conversationId + '</a></br>'
            }

            if (test.total / 100 >= page) {
                page++
            } else {
                if (stringChatsWithoutTopic == "")
                    stringChatsWithoutTopic = ' нет чатов без тематики'
                flagok.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
                if (count[1] == undefined)
                    count[1] = 0;
                if (count[2] == undefined)
                    count[2] = 0;
                if (count[3] == undefined)
                    count[3] = 0;
                if (count[4] == undefined)
                    count[4] = 0;
                if (count[5] == undefined)
                    count[5] = 0;

                if (flagvbad == "" && flagbad == "" && flagmid == "")
                    str.innerHTML = 'Оценка: ' + Math.round(csatScore / csatCount * 100) / 100 + '<br>' + 'Чаты без тематики (открывайте в инкогнито, чтобы не вылететь с текущей сессии): <br>' +
                        "Количество оценок: " + csatCount + ' из них: ' + '<br>' + 'Оценка 1 🤬: ' + count[1] + '<br>' +
                        'Оценка 2 🤢: ' + count[2] + '<br>' + 'Оценка 3 😐: ' + count[3] + '<br>' +
                        'Оценка 4 🥴: ' + count[4] + '<br>' + 'Оценка 5 😊: ' + count[5] + '<br>' + stringChatsWithoutTopic + '<br>' +
                        "Чаты СЛА закрытия > 25 m: " + '<br>' + abovecloseslaarr + '<br>' + 'Количество просроченных чатов: ' + slacount + " SLA Закрытия: " +
                        (100 - ((slacount / clschatarr.length) * 100)).toFixed(1) + '%' + '<br>' + "Чаты с просроченным АRT >2m: " + '<br>' + aboveart +
                        '<br>' + 'Количество просроченных чатов: ' + artcount + " ART: " + (100 - ((artcount / clschatarr.length) * 100)).toFixed(1) + '%';
                else if (flagvbad == "" && flagbad == "" && flagmid != "")
                    str.innerHTML = 'Оценка: ' + Math.round(csatScore / csatCount * 100) / 100 + '<br>' + 'Чаты без тематики (открывайте в инкогнито, чтобы не вылететь с текущей сессии): <br>' +
                        "Количество оценок: " + csatCount + ' из них: ' + '<br>' + 'Оценка 1 🤬: ' + count[1] + '<br>' +
                        'Оценка 2 🤢: ' + count[2] + '<br>' + 'Оценка 3 😐: ' + count[3] + '<br>' + flagmid + '<br>' +
                        'Оценка 4 🥴: ' + count[4] + '<br>' + 'Оценка 5 😊: ' + count[5] + '<br>' + stringChatsWithoutTopic + '<br>' +
                        "Чаты СЛА закрытия > 25 m: " + '<br>' + abovecloseslaarr + '<br>' + 'Количество просроченных чатов: ' + slacount + " SLA Закрытия: " +
                        (100 - ((slacount / clschatarr.length) * 100)).toFixed(1) + '%' + '<br>' + "Чаты с просроченным АRT >2m: " + '<br>' + aboveart +
                        '<br>' + 'Количество просроченных чатов: ' + artcount + " ART: " + (100 - ((artcount / clschatarr.length) * 100)).toFixed(1) + '%';
                else if (flagvbad == "" && flagbad != "" && flagmid != "")
                    str.innerHTML = 'Оценка: ' + Math.round(csatScore / csatCount * 100) / 100 + '<br>' + 'Чаты без тематики (открывайте в инкогнито, чтобы не вылететь с текущей сессии): <br>' +
                        "Количество оценок: " + csatCount + ' из них: ' + '<br>' + 'Оценка 1 🤬: ' + count[1] + '<br>' +
                        'Оценка 2 🤢: ' + count[2] + '<br>' + flagbad + '<br>' + 'Оценка 3 😐: ' + count[3] + '<br>' + flagmid + '<br>' +
                        'Оценка 4 🥴: ' + count[4] + '<br>' + 'Оценка 5 😊: ' + count[5] + '<br>' + stringChatsWithoutTopic + '<br>' +
                        "Чаты СЛА закрытия > 25 m: " + '<br>' + abovecloseslaarr + '<br>' + 'Количество просроченных чатов: ' + slacount + " SLA Закрытия: " +
                        (100 - ((slacount / clschatarr.length) * 100)).toFixed(1) + '%' + '<br>' + "Чаты с просроченным АRT >2m: " + '<br>' + aboveart +
                        '<br>' + 'Количество просроченных чатов: ' + artcount + " ART: " + (100 - ((artcount / clschatarr.length) * 100)).toFixed(1) + '%';
                else if (flagvbad != "" && flagbad == "" && flagmid != "")
                    str.innerHTML = 'Оценка: ' + Math.round(csatScore / csatCount * 100) / 100 + '<br>' + 'Чаты без тематики (открывайте в инкогнито, чтобы не вылететь с текущей сессии): <br>' +
                        "Количество оценок: " + csatCount + ' из них: ' + '<br>' + 'Оценка 1 🤬: ' + count[1] + '<br>' + flagvbad + '<br>' +
                        'Оценка 2 🤢: ' + count[2] + '<br>' + 'Оценка 3 😐: ' + count[3] + '<br>' + flagmid + '<br>' +
                        'Оценка 4 🥴: ' + count[4] + '<br>' + 'Оценка 5 😊: ' + count[5] + '<br>' + stringChatsWithoutTopic + '<br>' +
                        "Чаты СЛА закрытия > 25 m: " + '<br>' + abovecloseslaarr + '<br>' + 'Количество просроченных чатов: ' + slacount + " SLA Закрытия: " +
                        (100 - ((slacount / clschatarr.length) * 100)).toFixed(1) + '%' + '<br>' + "Чаты с просроченным АRT >2m: " + '<br>' + aboveart +
                        '<br>' + 'Количество просроченных чатов: ' + artcount + " ART: " + (100 - ((artcount / clschatarr.length) * 100)).toFixed(1) + '%';
                else if (flagvbad != "" && flagbad != "" && flagmid == "")
                    str.innerHTML = 'Оценка: ' + Math.round(csatScore / csatCount * 100) / 100 + '<br>' + 'Чаты без тематики (открывайте в инкогнито, чтобы не вылететь с текущей сессии): <br>' +
                        "Количество оценок: " + csatCount + ' из них: ' + '<br>' + 'Оценка 1 🤬: ' + count[1] + '<br>' + flagvbad + '<br>' +
                        'Оценка 2 🤢: ' + count[2] + '<br>' + flagbad + '<br>' + 'Оценка 3 😐: ' + count[3] + '<br>' +
                        'Оценка 4 🥴: ' + count[4] + '<br>' + 'Оценка 5 😊: ' + count[5] + '<br>' + stringChatsWithoutTopic + '<br>' +
                        "Чаты СЛА закрытия > 25 m: " + '<br>' + abovecloseslaarr + '<br>' + 'Количество просроченных чатов: ' + slacount + " SLA Закрытия: " +
                        (100 - ((slacount / clschatarr.length) * 100)).toFixed(1) + '%' + '<br>' + "Чаты с просроченным АRT >2m: " + '<br>' + aboveart +
                        '<br>' + 'Количество просроченных чатов: ' + artcount + " ART: " + (100 - ((artcount / clschatarr.length) * 100)).toFixed(1) + '%';
                else if (flagvbad != "" && flagbad == "" && flagmid == "")
                    str.innerHTML = 'Оценка: ' + Math.round(csatScore / csatCount * 100) / 100 + '<br>' + 'Чаты без тематики (открывайте в инкогнито, чтобы не вылететь с текущей сессии): <br>' +
                        "Количество оценок: " + csatCount + ' из них: ' + '<br>' + 'Оценка 1 🤬: ' + count[1] + '<br>' + flagvbad + '<br>' +
                        'Оценка 2 🤢: ' + count[2] + '<br>' + 'Оценка 3 😐: ' + count[3] + '<br>' +
                        'Оценка 4 🥴: ' + count[4] + '<br>' + 'Оценка 5 😊: ' + count[5] + '<br>' + stringChatsWithoutTopic + '<br>' +
                        "Чаты СЛА закрытия > 25 m: " + '<br>' + abovecloseslaarr + '<br>' + 'Количество просроченных чатов: ' + slacount + " SLA Закрытия: " +
                        (100 - ((slacount / clschatarr.length) * 100)).toFixed(1) + '%' + '<br>' + "Чаты с просроченным АRT >2m: " + '<br>' + aboveart +
                        '<br>' + 'Количество просроченных чатов: ' + artcount + " ART: " + (100 - ((artcount / clschatarr.length) * 100)).toFixed(1) + '%';
                else if (flagvbad == "" && flagbad != "" && flagmid == "")
                    str.innerHTML = 'Оценка: ' + Math.round(csatScore / csatCount * 100) / 100 + '<br>' + 'Чаты без тематики (открывайте в инкогнито, чтобы не вылететь с текущей сессии): <br>' +
                        "Количество оценок: " + csatCount + ' из них: ' + '<br>' + 'Оценка 1 🤬: ' + count[1] + '<br>' +
                        'Оценка 2 🤢: ' + count[2] + '<br>' + flagbad + '<br>' + 'Оценка 3 😐: ' + count[3] + '<br>' +
                        'Оценка 4 🥴: ' + count[4] + '<br>' + 'Оценка 5 😊: ' + count[5] + '<br>' + stringChatsWithoutTopic + '<br>' +
                        "Чаты СЛА закрытия > 25 m: " + '<br>' + abovecloseslaarr + '<br>' + 'Количество просроченных чатов: ' + slacount + " SLA Закрытия: " +
                        (100 - ((slacount / clschatarr.length) * 100)).toFixed(1) + '%' + '<br>' + "Чаты с просроченным АRT >2m: " + '<br>' + aboveart +
                        '<br>' + 'Количество просроченных чатов: ' + artcount + " ART: " + (100 - ((artcount / clschatarr.length) * 100)).toFixed(1) + '%';
                else if (flagvbad != "" && flagbad != "" && flagmid != "")
                    str.innerHTML = 'Оценка: ' + Math.round(csatScore / csatCount * 100) / 100 + '<br>' + 'Чаты без тематики (открывайте в инкогнито, чтобы не вылететь с текущей сессии): <br>' +
                        "Количество оценок: " + csatCount + ' из них: ' + '<br>' + 'Оценка 1 🤬: ' + count[1] + '<br>' + flagvbad + '<br>' +
                        'Оценка 2 🤢: ' + count[2] + '<br>' + flagbad + '<br>' + 'Оценка 3 😐: ' + count[3] + '<br>' + flagmid + '<br>' +
                        'Оценка 4 🥴: ' + count[4] + '<br>' + 'Оценка 5 😊: ' + count[5] + '<br>' + stringChatsWithoutTopic + '<br>' +
                        "Чаты СЛА закрытия > 25 m: " + '<br>' + abovecloseslaarr + '<br>' + 'Количество просроченных чатов: ' + slacount + " SLA Закрытия: " +
                        (100 - ((slacount / clschatarr.length) * 100)).toFixed(1) + '%' + '<br>' + "Чаты с просроченным АRT >2m: " + '<br>' + aboveart +
                        '<br>' + 'Количество просроченных чатов: ' + artcount + " ART: " + (100 - ((artcount / clschatarr.length) * 100)).toFixed(1) + '%';
                console.log(tagsarr) //выводит список полученных тегов с чатов
                break
            }
        }
    } catch (e) {
        console.error(e, e.stack);
    }

    let slaclchatcontainer = document.querySelectorAll('.lookchat');
    let slaclchattids = document.querySelectorAll('.slaclchatids');
    for (let j = 0; j < slaclchatcontainer.length; j++) {
        slaclchatcontainer[j].onclick = function () {

            if (document.getElementById('AF_ChatHis').style.display == 'none') {
                document.getElementById('butChatHistory').click();

                document.getElementById('hashchathis').value = slaclchattids[j].innerText;
                btn_search_history.click()

            } else {
                document.getElementById('hashchathis').value = slaclchattids[j].innerText;
                btn_search_history.click()
            }
        }
    }

    let artchatcontainer = document.querySelectorAll('.lookchatart');
    let artchattids = document.querySelectorAll('.artchatids');
    for (let j = 0; j < artchatcontainer.length; j++) {
        artchatcontainer[j].onclick = () => {
            if (document.getElementById('AF_ChatHis').style.display == 'none') {
                document.getElementById('butChatHistory').click();
                document.getElementById('hashchathis').value = artchattids[j].innerText;
                btn_search_history.click()
            } else {
                document.getElementById('hashchathis').value = artchattids[j].innerText;
                btn_search_history.click()
            }
        }
    }

    document.getElementById('buttonCheckStats').textContent = 'Повторить проверку'
}

function prepTp() { //функция подготовки расширения ТП
    document.getElementById('msg1').style.display = ''
    document.getElementById('snd').style.marginLeft = '10px'


    if (localStorage.getItem('disablelpmwindow') == 1)
        document.getElementById('testUsers').style.display = "none";
    else document.getElementById('testUsers').style.display = ''

	if (localStorage.getItem('disablelngpmwindow') == 1)
		document.getElementsByClassName('user_menu-language_switcher')[0].style.display = 'none'
	else document.getElementsByClassName('user_menu-language_switcher')[0].style.display = ''

    let openchhis = document.createElement('button')
    openchhis.innerHTML = '☢'
    openchhis.style = 'position:fixed;top:45px;right:0px;z-index:5;'
    openchhis.id = 'opennewcat'
    document.getElementsByTagName('section')[1].append(openchhis)

    openchhis.onclick = () => {
        if (document.getElementById('AF_ChatHis').style.display == 'none')
            document.getElementById('butChatHistory').click()
    }

    flagLangBut = 1
    customTemplates()
    setTimeout(whoAmI, 2000)

    let buttonGetStat = document.createElement('div'); // добавляет кнопку с выводом статистики за день
    buttonGetStat.id = 'buttonGetStat';
    buttonGetStat.innerHTML = "Статистика";
    buttonGetStat.style.marginLeft = "15px";
    buttonGetStat.onclick = function () {
        if (this.textContent == 'Скрыть стату') {
            if (this.getAttribute('disabled') != null)
                return
            if (document.getElementById('tableStats') != undefined) {
                document.getElementById('root').children[0].children[1].children[0].children[1].lastElementChild.remove()
            }
            this.textContent = 'Статистика'

            document.getElementById('buttonGetStat').setAttribute('disabled', 'disabled')

            if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') != -1) {
                document.getElementById('root').children[0].children[1].children[0].children[1].children[1].style.display = ""
            }
            if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') != -1) {
                document.getElementById('root').children[0].children[1].children[0].children[1].children[0].style.display = ""
            }
        } else {
            if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') != -1) {
                document.getElementById('root').children[0].children[1].children[0].children[1].children[1].style.display = "none"
            } else if (window.location.href.indexOf('skyeng.autofaq.ai/tickets/archive') != -1) {
                document.getElementById('root').children[0].children[1].children[0].children[1].children[0].style.display = "none"
            } else {
                this.textContent = 'Неверная страница'
                setTimeout(function () { document.getElementById('buttonGetStat').textContent = "Статистика" }, 500)
                return
            }
            getStats()
            document.getElementById('buttonGetStat').setAttribute('disabled', 'disabled')
            this.textContent = 'Загрузка'
        }
    }
    document.getElementById('app-header').append(buttonGetStat)

    setInterval(timerHideButtons, 300)

    setTimeout(function () {
        let lboxstyles = document.createElement('link')
        lboxstyles.rel = 'stylesheet'
        lboxstyles.href = "https://dimentorexpo.github.io/Lightbox/dist/css/lightbox.min.css" // подключаем модуль стилей для Lightbox
        document.querySelector('header').append(lboxstyles)
        include("https://dimentorexpo.github.io/MobilePass.js") // модуль генерации одноразового пароля для моб приложения
        include("https://dimentorexpo.github.io/ServiceDesk.js") // модуль сервис деска , с 1  тестовая версия
        include("https://code.jquery.com/jquery-3.6.0.js") // подключаем модуль обработки JQuery
        include("https://dimentorexpo.github.io/unsub.js") // подключаем модуль unsub валентина
    }, 2000)

    setTimeout(function () {

        include("https://dimentorexpo.github.io/Lightbox/dist/js/lightbox.min.js") // подключаем библиотеку обработки изображений при клике на них

    }, 4000)

}
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function firstLoadPage() { //первичаня загрузка страницы
    if (window.location.href.indexOf('skyeng.autofaq.ai') === -1) {
        document.getElementById('AF_helper').style.display = 'none';
        document.getElementById('testUsers').style.display = 'none';
        document.getElementById('AF_Links').style.display = 'none';
    } else {
        mystyles()

        if (localStorage.getItem('disablelpmwindow') == 1)
            document.getElementById('testUsers').style.display = "none";

        if (localStorage.getItem('Hidetestid') == 0){
            document.getElementById('testid').style.display = 'none';
            document.getElementById('idlogin').style.display = 'none';
        }

        setTimeout(move_again_AF, 3500)

        setTimeout(function () {
            btnAdd1 = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]
            btnAdd1.insertBefore(butMarks, btnAdd1.children[0])
            btnAdd1.insertBefore(servDsk, btnAdd1.children[1])
			btnAdd1.insertBefore(butJiraOpenForm, btnAdd1.children[2])
            btnAdd1.insertBefore(butopensugestform, btnAdd1.children[3])
            btnAdd1.insertBefore(butrefuse, btnAdd1.children[4])
            btnAdd1.insertBefore(butChatHistory, btnAdd1.children[5])
			btnAdd1.insertBefore(maskBack, btnAdd1.children[6])
            btnAdd1.insertBefore(hashBut, btnAdd1.children[7])
			btnAdd1.insertBefore(butServ, btnAdd1.children[8])
			btnAdd1.insertBefore(taskBut, btnAdd1.children[9])
        }, 2000)
 
        setTimeout(() => {
            let headmenulist = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]
            let menubutarea = document.createElement('div')
            menubutarea.style = 'margin-right:20px;'

            headmenulist.insertBefore(menubutarea, headmenulist.children[11])
            menubutarea.append(butmenu)
            headmenulist.insertBefore(menubar, headmenulist.children[11])
            menubar.append(document.getElementById('servDsk'))
			menubar.append(document.getElementById('JiraOpenForm'))
            menubar.append(document.getElementById('buttonOpenForm'))
            menubar.append(document.getElementById('butMarks'))
            menubar.append(document.getElementById('suggestform'))
            menubar.append(document.getElementById('otkaz'))
            menubar.append(document.getElementById('butChatHistory'))
        }, 8000)

        setInterval(startTimer, 1000)
    }
    setTimeout(function () { document.getElementById('testUsers').style.background = "#464451" }, 200)
}
firstLoadPage()

if (localStorage.getItem('hesoyam') == 1) {
    let newDiv = document.createElement('div')
    newDiv.style.margin = '5px'
    let button = document.createElement('button')
    button.textContent = 'Закрыть чат'
    button.id = 'easyCloseChat'
    button.onclick = function () {
        var chatId = document.location.pathname.split('/')[3]
        fetch("https://skyeng.autofaq.ai/api/conversation/status", {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"command\":\"DO_SET_CONVERSATION_STATUS\",\"conversationId\":\"" + chatId + "\",\"status\":\"ClosedByOperator\",\"autofaqServiceId\":120181,\"assignToOperatorId\":\"" + operatorId + "\"}",
            "method": "POST",
        });
    }
    newDiv.append(button)
    document.getElementById('AF_helper').lastElementChild.lastElementChild.lastElementChild.append(newDiv)
}

let lginfo;
let tokenlog;

let btnpm = document.createElement('button')
btnpm.innerText = "ПМ";
btnpm.id = "mathteachercode";
btnpm.style = "background-color: #3CB371 ; margin: 5px;";

let btnsid = document.createElement('button')
btnsid.innerText = "У";
btnsid.id = "sidcode";
btnsid.style = "background-color: #3CB371 ; margin-left: 5px;";

let btntid = document.createElement('button')
btntid.innerText = "П";
btntid.id = "tidcode";
btntid.style = "background-color: #3CB371 ; margin-left: 5px;";

document.getElementById('testMath').replaceWith(btnpm);
document.getElementById('testStudent').replaceWith(btnsid);
document.getElementById('testTeacher').replaceWith(btntid);

btnpm.onclick = async function () { // копирует в буфер логиннер для ПМ
    document.getElementById('responseTextarea1').value = `{
			  "headers": {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"content-type": "application/x-www-form-urlencoded",
				"sec-fetch-dest": "document",
				"sec-fetch-mode": "navigate",
				"sec-fetch-site": "same-origin",
				"sec-fetch-user": "?1",
				"upgrade-insecure-requests": "1"
			  },
			  "referrer": "https://id.skyeng.ru/admin/auth/login-links",
			  "referrerPolicy": "strict-origin-when-cross-origin",
			  "body": "login_link_form%5Bidentity%5D=&login_link_form%5Bid%5D=3622918&login_link_form%5Btarget%5D=https%3A%2F%2Fskyeng.ru&login_link_form%5Bpromocode%5D=&login_link_form%5Blifetime%5D=3600&login_link_form%5Bcreate%5D=&login_link_form%5B_token%5D=${tokenlog}",
			  "method": "POST",
			  "mode": "cors",
			  "credentials": "include"
			}`
    document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/auth/login-links";
    document.getElementById('responseTextarea3').value = 'senddata'
    document.getElementById('sendResponse').click()

    setTimeout(async function () {

        document.getElementById('responseTextarea1').value = `{
				   "headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-fetch-dest": "document",
					"sec-fetch-mode": "navigate",
					"sec-fetch-site": "same-origin",
					"sec-fetch-user": "?1",
					"upgrade-insecure-requests": "1"
				  },
				  "referrer": "https://id.skyeng.ru/admin/auth/login-links",
				  "referrerPolicy": "strict-origin-when-cross-origin",
				  "body": null,
				  "method": "GET",
				  "mode": "cors",
				  "credentials": "include"
			}`
        document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/auth/login-links"
        document.getElementById('responseTextarea3').value = 'senddata'
        document.getElementById('sendResponse').click()

        lginfo = await document.getElementById('responseTextarea1').getAttribute('senddata');
        lginfo = lginfo.match(/("https:\/\/id.skyeng.ru\/auth\/login-link\/\w+.*?")/gm);
        lginfo = lginfo[lginfo.length - 1].split("\"");
        copyToClipboard1(lginfo[1])
        document.getElementById('responseTextarea1').removeAttribute('senddata')

    }, 1000)
}

btnsid.onclick = async function () { // копирует в буфер логиннер для У
    let teststudid = localStorage.getItem('test_stud');
    if (teststudid != null || teststudid != '') {
        document.getElementById('responseTextarea1').value = `{
			  "headers": {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"content-type": "application/x-www-form-urlencoded",
				"sec-fetch-dest": "document",
				"sec-fetch-mode": "navigate",
				"sec-fetch-site": "same-origin",
				"sec-fetch-user": "?1",
				"upgrade-insecure-requests": "1"
			  },
			  "referrer": "https://id.skyeng.ru/admin/auth/login-links",
			  "referrerPolicy": "strict-origin-when-cross-origin",
			  "body": "login_link_form%5Bidentity%5D=&login_link_form%5Bid%5D=${teststudid}&login_link_form%5Btarget%5D=https%3A%2F%2Fskyeng.ru&login_link_form%5Bpromocode%5D=&login_link_form%5Blifetime%5D=3600&login_link_form%5Bcreate%5D=&login_link_form%5B_token%5D=${tokenlog}",
			  "method": "POST",
			  "mode": "cors",
			  "credentials": "include"
			}`
        document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/auth/login-links";
        document.getElementById('responseTextarea3').value = 'senddata1'
        document.getElementById('sendResponse').click()

        setTimeout(async function () {

            document.getElementById('responseTextarea1').value = `{
				   "headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-fetch-dest": "document",
					"sec-fetch-mode": "navigate",
					"sec-fetch-site": "same-origin",
					"sec-fetch-user": "?1",
					"upgrade-insecure-requests": "1"
				  },
				  "referrer": "https://id.skyeng.ru/admin/auth/login-links",
				  "referrerPolicy": "strict-origin-when-cross-origin",
				  "body": null,
				  "method": "GET",
				  "mode": "cors",
				  "credentials": "include"
			}`
            document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/auth/login-links"
            document.getElementById('responseTextarea3').value = 'senddata1'
            document.getElementById('sendResponse').click()

            lginfo = await document.getElementById('responseTextarea1').getAttribute('senddata1');
            lginfo = lginfo.match(/("https:\/\/id.skyeng.ru\/auth\/login-link\/\w+.*?")/gm);
            lginfo = lginfo[lginfo.length - 1].split("\"");
            copyToClipboard1(lginfo[1])
            document.getElementById('responseTextarea1').removeAttribute('senddata1')

        }, 1000)

    } else alert("Введите ID тестового ученика в настройках ⚙");
}

btntid.onclick = async function () { // копирует в буфер логиннер для П
    let testteachid = localStorage.getItem('test_teach');
    if (testteachid != null || testteachid != '') {
        document.getElementById('responseTextarea1').value = `{
			  "headers": {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"content-type": "application/x-www-form-urlencoded",
				"sec-fetch-dest": "document",
				"sec-fetch-mode": "navigate",
				"sec-fetch-site": "same-origin",
				"sec-fetch-user": "?1",
				"upgrade-insecure-requests": "1"
			  },
			  "referrer": "https://id.skyeng.ru/admin/auth/login-links",
			  "referrerPolicy": "strict-origin-when-cross-origin",
			  "body": "login_link_form%5Bidentity%5D=&login_link_form%5Bid%5D=${testteachid}&login_link_form%5Btarget%5D=https%3A%2F%2Fskyeng.ru&login_link_form%5Bpromocode%5D=&login_link_form%5Blifetime%5D=3600&login_link_form%5Bcreate%5D=&login_link_form%5B_token%5D=${tokenlog}",
			  "method": "POST",
			  "mode": "cors",
			  "credentials": "include"
			}`
        document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/auth/login-links";
        document.getElementById('responseTextarea3').value = 'senddata2'
        document.getElementById('sendResponse').click()

        setTimeout(async function () {

            document.getElementById('responseTextarea1').value = `{
				   "headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-fetch-dest": "document",
					"sec-fetch-mode": "navigate",
					"sec-fetch-site": "same-origin",
					"sec-fetch-user": "?1",
					"upgrade-insecure-requests": "1"
				  },
				  "referrer": "https://id.skyeng.ru/admin/auth/login-links",
				  "referrerPolicy": "strict-origin-when-cross-origin",
				  "body": null,
				  "method": "GET",
				  "mode": "cors",
				  "credentials": "include"
			}`
            document.getElementById('responseTextarea2').value = "https://id.skyeng.ru/admin/auth/login-links"
            document.getElementById('responseTextarea3').value = 'senddata2'
            document.getElementById('sendResponse').click()

            lginfo = await document.getElementById('responseTextarea1').getAttribute('senddata2');
            lginfo = lginfo.match(/("https:\/\/id.skyeng.ru\/auth\/login-link\/\w+.*?")/gm);
            lginfo = lginfo[lginfo.length - 1].split("\"");
            copyToClipboard1(lginfo[1])
            document.getElementById('responseTextarea1').removeAttribute('senddata2')

        }, 1000)

    } else alert("Введите ID тестового преподавателя в настройках ⚙");
}


function hesoyam() {
    if (localStorage.getItem('hesoyam') == 1) {
        localStorage.setItem('hesoyam', '0')
        document.getElementById('easyCloseChat').remove()
        return
    }
    localStorage.setItem('hesoyam', '1')
    let newDiv = document.createElement('div')
    newDiv.style.margin = '5px'
    let button = document.createElement('button')
    button.textContent = 'Закрыть чат'
    button.id = 'easyCloseChat'
    button.onclick = function () {
        chatId = document.location.pathname.split('/')[3]
        fetch("https://skyeng.autofaq.ai/api/conversation/status", {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"command\":\"DO_SET_CONVERSATION_STATUS\",\"conversationId\":\"" + chatId + "\",\"status\":\"ClosedByOperator\",\"autofaqServiceId\":120181,\"assignToOperatorId\":\"" + operatorId + "\"}",
            "method": "POST",
        });
    }
    newDiv.append(button)
    document.getElementById('AF_helper').lastElementChild.lastElementChild.lastElementChild.append(newDiv)
}
