//Global variables
let jiratoken;
let psarr = [];
let firstEl;
let slacklnk;
let infoarr;
let lasttsk;
let prevtsk;
let flagpsis = 0;
//func initialize

function getprsuplasttask() { //функция для получения ссылки на последний проект в джира
    document.getElementById('responseTextarea1').value = `{    "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
         }`
    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/user/requests?portalId=62&page=1";
    document.getElementById('responseTextarea3').value = 'pstickets'
    document.getElementById('sendResponse').click()

    setTimeout(async () => {
        document.getElementById('responseTextarea1').value = `{   "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
                 }`
        document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/user/requests?portalId=62&page=1";
        document.getElementById('responseTextarea3').value = 'pstickets'
        document.getElementById('sendResponse').click()

        psarr = document.getElementById('responseTextarea1').getAttribute('pstickets');
        psarr = await psarr;

        document.getElementById('responseTextarea1').removeAttribute('pstickets');

        let sortarr = psarr.match(/PS-(\d+)/g);
        sortarr = sortarr.sort().reverse();
        firstEl = sortarr[0];

        prevtsk = firstEl;
        document.getElementById('prevtask').innerText = prevtsk;

        document.getElementById('prevtask').onclick = function () {
            if (document.getElementById('prevtask').innerText == "") {
                console.log('Введите Задача не найдена')
            } else {
                window.open("https://jira.skyeng.tech/browse/" + prevtsk);
            };
        }

    }, 2000);

}


function getprsup() { //функция для получения ссылки на последний проект в джира
    document.getElementById('responseTextarea1').value = `{    "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
         }`
    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/user/requests?portalId=62&page=1";
    document.getElementById('responseTextarea3').value = 'pstickets'
    document.getElementById('sendResponse').click()

    setTimeout(async () => {
        document.getElementById('responseTextarea1').value = `{   "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
                 }`
        document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/user/requests?portalId=62&page=1";
        document.getElementById('responseTextarea3').value = 'pstickets'
        document.getElementById('sendResponse').click()

        psarr = document.getElementById('responseTextarea1').getAttribute('pstickets');
        psarr = await psarr;

        document.getElementById('responseTextarea1').removeAttribute('pstickets');

        let sortarr = psarr.match(/PS-(\d+)/g);
        sortarr = sortarr.sort().reverse();
        firstEl = sortarr[0];

        console.log("Testo massiv " + sortarr);
        console.log("Link tp PJ JIRA " + "https://jira.skyeng.tech/browse/" + firstEl);

        lasttsk = firstEl;
        flagpsis = 1;

        if (lasttsk > prevtsk) {
            document.getElementById('newtask').innerText = lasttsk;
            sendComment("Jira Service Desk link: " + "https://jira.skyeng.tech/browse/" + lasttsk);
            for (let i = 0; i < document.getElementsByClassName('removefield').length; i++) {
                document.getElementsByClassName('removefield')[i].value = ''
            }
        } else if (lasttsk <= prevtsk) {
            alert("Новая задача не была создана из-за введных значений или изменения логики работы  выбранной формы в самом ServiceDesk!")
        }

    }, 2000);

}

function getinfrasup() { //функция для получения ссылки на последний запрос Infra в джира
    document.getElementById('responseTextarea1').value = `{    "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
         }`
    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/user/requests?status=open&reporter=all";
    document.getElementById('responseTextarea3').value = 'istickets'
    document.getElementById('sendResponse').click()

    setTimeout(async () => {
        document.getElementById('responseTextarea1').value = `{   "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
                 }`
        document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/user/requests?status=open&reporter=all";
        document.getElementById('responseTextarea3').value = 'istickets'
        document.getElementById('sendResponse').click()

        psarr = await document.getElementById('responseTextarea1').getAttribute('istickets');

        document.getElementById('responseTextarea1').removeAttribute('istickets');

        let sortisarr = psarr.match(/IS-(\d+)/g);
        sortisarr = sortisarr.sort().reverse();
        firstEl = sortisarr[0];

        console.log("Testo massiv " + sortisarr);
        console.log("Link tp IS JIRA " + "https://jira.skyeng.tech/browse/" + firstEl);

        lasttsk = firstEl;
        flagpsis = 2;
        sendComment("Jira Service Desk link: " + "https://jira.skyeng.tech/browse/" + lasttsk);

    }, 2000);

}

function getslacklnk() { // получаем ссылку на обращение в слака с помощью парсинга номера задачи в джире и вытягивание ссылки с нее
    if (flagpsis == 1) {
        if (lasttsk > prevtsk) {
            document.getElementById('responseTextarea1').value = `{    "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
         }`
            document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/browse/" + lasttsk;
            document.getElementById('responseTextarea3').value = 'slacklnkhere'
            document.getElementById('sendResponse').click()

            setTimeout(async () => {
                document.getElementById('responseTextarea1').value = `{    "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
         }`
                document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/browse/" + firstEl;
                document.getElementById('responseTextarea3').value = 'slacklnkhere'
                document.getElementById('sendResponse').click()

                infoarr = await document.getElementById('responseTextarea1').getAttribute('slacklnkhere');
                document.getElementById('responseTextarea1').removeAttribute('slacklnkhere');

                slacklnk = infoarr.match(/">(https:\/\/skyeng.slack.com.*?)<\/a>/)[1];

                console.log("Slack link " + slacklnk);
                sendComment("Slack Service Desk link: " + slacklnk);


            }, 2000);

        } else console.log("Задача не была создана, поэтому в заметки нечего размещать")

    } else if (flagpsis == 2) {

        document.getElementById('responseTextarea1').value = `{    "headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-fetch-dest": "document",
					"sec-fetch-mode": "navigate",
					"sec-fetch-site": "same-origin",
					"sec-fetch-user": "?1",
					"upgrade-insecure-requests": "1"
				  },
				  "referrerPolicy": "strict-origin-when-cross-origin",
				  "body": null,
				  "method": "GET",
				  "mode": "cors",
				  "credentials": "include"
				}`
        document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/browse/" + lasttsk;
        document.getElementById('responseTextarea3').value = 'slacklnkhere'
        document.getElementById('sendResponse').click()

        setTimeout(async () => {
            document.getElementById('responseTextarea1').value = `{    "headers": {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"sec-fetch-dest": "document",
				"sec-fetch-mode": "navigate",
				"sec-fetch-site": "same-origin",
				"sec-fetch-user": "?1",
				"upgrade-insecure-requests": "1"
			  },
			  "referrerPolicy": "strict-origin-when-cross-origin",
			  "body": null,
			  "method": "GET",
			  "mode": "cors",
			  "credentials": "include"
			}`
            document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/browse/" + firstEl;
            document.getElementById('responseTextarea3').value = 'slacklnkhere'
            document.getElementById('sendResponse').click()

            infoarr = await document.getElementById('responseTextarea1').getAttribute('slacklnkhere');
            document.getElementById('responseTextarea1').removeAttribute('slacklnkhere');

            slacklnk = infoarr.match(/">(https:\/\/skyeng.slack.com.*?)<\/a>/)[1];

            console.log("Slack link " + slacklnk);
            sendComment("Slack Service Desk link: " + slacklnk);

        }, 2000);

    } else console.log("Задача не была создана, поэтому в заметки нечего размещать")

}


//main
document.getElementById('servDsk').onclick = function () {
    if (document.getElementById('AF_ServDsk').style.display == '')
        document.getElementById('AF_ServDsk').style.display = 'none'
    else
        document.getElementById('AF_ServDsk').style.display = ''
		document.getElementById('idmymenu').style.display = 'none'
	

    document.getElementById('responseTextarea1').value = '{}'
    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/"
    document.getElementById('responseTextarea3').value = 'getjiratoken'
    document.getElementById('sendResponse').click()

    setTimeout(async function () {

        document.getElementById('responseTextarea1').value = '{}'
        document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/"
        document.getElementById('responseTextarea3').value = 'getjiratoken'
        document.getElementById('sendResponse').click()

        jiratoken = await document.getElementById('responseTextarea1').getAttribute('getjiratoken');
        if (jiratoken.match(/name="atlassian-token" content="(.*lin)/) != null) {
            jiratoken = jiratoken.match(/name="atlassian-token" content="(.*lin)/)[1];
            document.getElementById('jiratknstatus').innerText = "🟢"
        } else {
            alert("Авторизуйтесь в системе Jira, чтобы при заполнении формы запрос был отправлен в Service Desk");
            document.getElementById('jiratknstatus').innerText = "🔴"
        }
        document.getElementById('responseTextarea1').removeAttribute('getjiratoken');
        console.log("TOKEN: " + jiratoken);
    }, 1000)

    getprsuplasttask();


    $('.sdbtn').click(function () {
        $('.sdbtn').not(this).removeClass('activebtnsd');
        $(this).toggleClass('activebtnsd');
    });

    $('.teacbtn').click(function () {
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.kidsbtn').click(function () {
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.edumodbtn').click(function () {
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.bilqabtn').click(function () {
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.c1sbtn').click(function () {
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.schdbtn').click(function () {
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.telepbtn').click(function () {
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.authbtn').click(function () {
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.crm2sbtn').click(function () {
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.mrktbtn').click(function () {
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.billbtn').click(function () {
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.vimbugsbtn').click(function () {  //поправить
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.vimvidsbtn').click(function () {  //поправить
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.studcabbtn').click(function () {  //поправить
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.chatqabtn').click(function () {  //поправить
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.tripwbtn').click(function () {  //поправить
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.analystbtn').click(function () {  //поправить
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.corpbtn').click(function () {  //поправить
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.marketingbtn').click(function () {  //поправить
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.mobbugsbtn').click(function () {  //поправить
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    }); 

	$('.academymobbugsbtn').click(function () {  //поправить
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.stcabmbsbtn').click(function () {
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.marketprojbugsbtn').click(function () {  //поправить
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    $('.infrabtn').click(function () {  //поправить
        $('.kidsbtn').not(this).removeClass('activebtn');
        $('.edumodbtn').not(this).removeClass('activebtn');
        $('.bilqabtn').not(this).removeClass('activebtn');
        $('.teacbtn').not(this).removeClass('activebtn');
        $('.c1sbtn').not(this).removeClass('activebtn');
        $('.schdbtn').not(this).removeClass('activebtn');
        $('.telepbtn').not(this).removeClass('activebtn');
        $('.authbtn').not(this).removeClass('activebtn');
        $('.crm2sbtn').not(this).removeClass('activebtn');
        $('.mrktbtn').not(this).removeClass('activebtn');
        $('.billbtn').not(this).removeClass('activebtn');
        $('.vimbugsbtn').not(this).removeClass('activebtn');
        $('.vimvidsbtn').not(this).removeClass('activebtn');
        $('.studcabbtn').not(this).removeClass('activebtn');
        $('.chatqabtn').not(this).removeClass('activebtn');
        $('.tripwbtn').not(this).removeClass('activebtn');
        $('.analystbtn').not(this).removeClass('activebtn');
        $('.corpbtn').not(this).removeClass('activebtn');
        $('.marketingbtn').not(this).removeClass('activebtn');
        $('.mobbugsbtn').not(this).removeClass('activebtn');
		$('.academymobbugsbtn').not(this).removeClass('activebtn');
        $('.stcabmbsbtn').not(this).removeClass('activebtn');
        $('.marketprojbugsbtn').not(this).removeClass('activebtn');
        $('.infrabtn').not(this).removeClass('activebtn');
        $(this).toggleClass('activebtn');
    });

    document.getElementById('optionTeacher').onclick = function () { // Teachers
        if (document.getElementById('teacherssrvdskoptions').style.display != '') {
            document.getElementById('teacherssrvdskoptions').style.display = '';
            document.getElementById('teachersform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';

            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';

            //Начало окрашивания кнопок и добавление закрашивания при переключении

            document.getElementById('create_2').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_6').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_7').value);
                let str = encodeURIComponent(document.getElementById('customfield_8').value);
                let erx = encodeURIComponent(document.getElementById('customfield_9').value);
                let ary = encodeURIComponent(document.getElementById('customfield_10').value);

                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherstatistic').textContent) {
                    console.log("Статистика: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/644",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/644";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherstudy').textContent) {
                    console.log("Моё обучение: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/643",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/643";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherbreak').textContent) {
                    console.log("Перерыв: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/642",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/642";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teachermoney').textContent) {
                    console.log("Финансы: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/641",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/641";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teachermap').textContent) {
                    console.log("Карта роста: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/640",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/640";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teachertimetable').textContent) {
                    console.log("Расписание: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/639",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/639";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherperenos').textContent) {
                    console.log("Запросы на перенос занятия: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/637",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					 "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/637";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherwidgetbalance').textContent) {
                    console.log("Виджет баланса: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/636",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/636";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherwidgetlessonmark').textContent) {
                    console.log("Виджет отметки уроков: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/635",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/635";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherwidgetplanfact').textContent) {
                    console.log("Виджет плана/факта уроков: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/634",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/634";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherwidgettimetableweek').textContent) {
                    console.log("Виджет расписания на неделю: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/633",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/633";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherwidgetKPI').textContent) {
                    console.log("Виджет KPI: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/632",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/632";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherwidgetmystudents').textContent) {
                    console.log("Виджет 'Мои ученики': " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/631",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/631";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherTRMquestions').textContent) {
                    console.log("Вопросы по TRM': " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/530",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/530";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teacherunderground').textContent) {
                    console.log("Подземный стук': " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/531",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/531";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else
                    console.log("Not found");
            }
        } else {
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';


        }
    }

    document.getElementById('optionSkysmart').onclick = function () { // Skysmart KIDS
        if (document.getElementById('skysmartsrvdskoptions').style.display != '') {
            document.getElementById('skysmartsrvdskoptions').style.display = '';
            document.getElementById('kidsform').style.display = '';

            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';

            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';

            document.getElementById('create_1').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_1').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_2').value);
                let str = encodeURIComponent(document.getElementById('customfield_3').value);
                let erx = encodeURIComponent(document.getElementById('customfield_4').value);
                let ary = encodeURIComponent(document.getElementById('customfield_5').value);

                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skysmarthomework').textContent) {
                    console.log("Страница ДЗ и тестов: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/817",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/817";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skysmartgroup').textContent) {
                    console.log("Групповые и параллельные уроки: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/816",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					   "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/816";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()


                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skysmartonetoone').textContent) {
                    console.log("Уроки 1:1: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/815",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					 "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/815";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else
                    console.log("Not found")
            }
        } else {
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';  // подумать как поправить
            document.getElementById('kidsform').style.display = 'none';
        }
    }

    document.getElementById('optionEdModel').onclick = function () { // Skysmart KIDS
        if (document.getElementById('edumodeloptions').style.display != '') {
            document.getElementById('edumodeloptions').style.display = '';
            document.getElementById('edumodelform').style.display = '';

            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';

            document.getElementById('create_20').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_97').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_98').value);
                let str = encodeURIComponent(document.getElementById('customfield_99').value);
                let erx = encodeURIComponent(document.getElementById('customfield_100').value);
                let ary = encodeURIComponent(document.getElementById('customfield_101').value);

                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('edumgoal').textContent) {
                    console.log("Анкета целей: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/983",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					   "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/983";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skysmartpersotrackprogress').textContent) {
                    console.log("Персотреки и виджет прогресса: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/980",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					   "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/980";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skysmartfeedback').textContent) {
                    console.log("Обратная связь: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/979",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					   "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/979";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skysmartprogress').textContent) {
                    console.log("Страница прогресса: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/981",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/981";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skysmartcertificate').textContent) {
                    console.log("Сертификаты: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/982",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					   "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/982";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else
                    console.log("Not found")
            }
        } else {
            document.getElementById('edumodeloptions').style.display = 'none';  // подумать как поправить
            document.getElementById('edumodelform').style.display = 'none';
        }
    }

    document.getElementById('optionBillingQA').onclick = function () { //BillingQA
        if (document.getElementById('billingqasrvdskoptions').style.display != '') {
            document.getElementById('billingqasrvdskoptions').style.display = '';
            document.getElementById('billqaform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';

            //Начало окрашивания кнопок и добавление закрашивания при переключении

            document.getElementById('create_4').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_16').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_17').value);
                let str = encodeURIComponent(document.getElementById('customfield_18').value);
                let erx = encodeURIComponent(document.getElementById('customfield_19').value);
                let ary = encodeURIComponent(document.getElementById('customfield_20').value);

                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billqarassroch').textContent) {
                    console.log("Вопросы по рассрочке: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/577",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/577";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billqabalancecorrect').textContent) {
                    console.log("Проверка баланса у на расхождения : " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/570",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/570";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else console.log("Not found");
            }
        } else {
            document.getElementById('billingqasrvdskoptions').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
        }
    }

    document.getElementById('optionVimvideocall').onclick = function () { //Vim-video-call
        if (document.getElementById('vimvidoptions').style.display != '') {
            document.getElementById('vimvidoptions').style.display = '';
            document.getElementById('vimvideocallform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';


            //Начало окрашивания кнопок и добавление закрашивания при переключении

            document.getElementById('create_12').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_56').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_57').value);
                let str = encodeURIComponent(document.getElementById('customfield_58').value);
                let erx = encodeURIComponent(document.getElementById('customfield_59').value);
                let ary = encodeURIComponent(document.getElementById('customfield_60').value);

                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('vimvidqa').textContent) {
                    console.log("Обращение к QA: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/944",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/944";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else console.log("Not found");
            }
        } else {
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
        }
    }

    document.getElementById('optionOnboarding').onclick = function () { //C1 Onboarding
        if (document.getElementById('c1srvdskoptions').style.display != '') {
            document.getElementById('c1srvdskoptions').style.display = '';
            document.getElementById('onboardingform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';

            document.getElementById('create_3').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_11').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_12').value);
                let str = encodeURIComponent(document.getElementById('customfield_13').value);
                let erx = encodeURIComponent(document.getElementById('customfield_14').value);
                let ary = encodeURIComponent(document.getElementById('customfield_15').value);

                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('c1verstka').textContent) {
                    console.log("Проблемы с версткой: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/597",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					"body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/597";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('c1payonboarding').textContent) {
                    console.log("Не завершился онбординг после оплаты: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/596",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/596";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('c1redirects').textContent) {
                    console.log("Циклические редиректы: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/595",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					 "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/595";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('c1underground').textContent) {
                    console.log("Подземный стук: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/598",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/598";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else
                    console.log("Not found");
            }

        } else {
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
        }
    }

    document.getElementById('optionSchedule').onclick = function () { // Schedule
        if (document.getElementById('schedulesrvdskoptions').style.display != '') {
            document.getElementById('schedulesrvdskoptions').style.display = '';
            document.getElementById('scheduleform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';

            //Начало окрашивания кнопок и добавление закрашивания при переключении

            document.getElementById('create_5').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_21').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_22').value);
                let str = encodeURIComponent(document.getElementById('customfield_23').value);
                let erx = encodeURIComponent(document.getElementById('customfield_24').value);
                let ary = encodeURIComponent(document.getElementById('customfield_25').value);

                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('ttenableAP').textContent) {
                    console.log("Подключение АП: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/566",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/566";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('ttdisableAP').textContent) {
                    console.log("Отключение АП в ЛКУ: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/565",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/565";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('ttquestions').textContent) {
                    console.log("Вопросы по ТТ: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/564",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/564";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('ttnottaskpodbor').textContent) {
                    console.log("Почему нет задачи подбора ?: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/562",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/562";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);


                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('ttunderground').textContent) {
                    console.log("Подземный стук: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/567",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/567";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else console.log("Not found");
            }

        } else {
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
        }
    }

    document.getElementById('optionTelephony').onclick = function () { //Telephony
        if (document.getElementById('telephonysrvdskoptions').style.display != '') {
            document.getElementById('telephonysrvdskoptions').style.display = '';
            document.getElementById('telephonyform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';

            document.getElementById('telnoaccess').onclick = function () {
                if (document.getElementById('telephonyform').style.display == '') {
                    document.getElementById('customfield_37').style.display = "";
                    document.getElementById('customfield_37').placeholder = "Ваш ID оператора";
                    document.getElementById('customfield_38').style.display = "";
                    document.getElementById('customfield_38').placeholder = "Краткое и структурированное описание проблемы";
                    document.getElementById('customfield_39').style.display = "none";
                }
            }

            document.getElementById('teloutgoing').onclick = function () {
                if (document.getElementById('telephonyform').style.display == '') {
                    document.getElementById('customfield_37').style.display = "";
                    document.getElementById('customfield_37').placeholder = "Ваш ID оператора";
                    document.getElementById('customfield_38').style.display = "";
                    document.getElementById('customfield_38').placeholder = "Краткое и структурированное описание проблемы и номера где проблемы";
                    document.getElementById('customfield_39').style.display = "none";
                }
            }

            document.getElementById('telincoming').onclick = function () {
                if (document.getElementById('telephonyform').style.display == '') {
                    document.getElementById('customfield_37').style.display = "";
                    document.getElementById('customfield_37').placeholder = "Ваш ID оператора";
                    document.getElementById('customfield_38').style.display = "";
                    document.getElementById('customfield_38').placeholder = "Краткое и структурированное описание проблемы и номера где проблемы";
                    document.getElementById('customfield_39').style.display = "none";
                }
            }

            document.getElementById('telspeaking').onclick = function () {
                if (document.getElementById('telephonyform').style.display == '') {
                    document.getElementById('customfield_37').style.display = "";
                    document.getElementById('customfield_37').placeholder = "Ваш ID оператора";
                    document.getElementById('customfield_38').style.display = "";
                    document.getElementById('customfield_38').placeholder = "Краткое и структурированное описание проблемы и номера где проблемы";
                    document.getElementById('customfield_39').style.display = "none";
                }
            }

            document.getElementById('telrtstat').onclick = function () {
                if (document.getElementById('telephonyform').style.display == '') {
                    document.getElementById('customfield_37').style.display = "";
                    document.getElementById('customfield_37').placeholder = "Краткое и структурированное описание проблемы";
                    document.getElementById('customfield_38').style.display = "";
                    document.getElementById('customfield_38').placeholder = "Ожидаемое поведение";
                    document.getElementById('customfield_39').style.display = "";
                }
            }

            document.getElementById('telcallinfo').onclick = function () {
                if (document.getElementById('telephonyform').style.display == '') {
                    document.getElementById('customfield_37').style.display = "";
                    document.getElementById('customfield_37').placeholder = "Ваш ID оператора";
                    document.getElementById('customfield_38').style.display = "";
                    document.getElementById('customfield_38').placeholder = "Краткое и структурированное описание проблемы и номера где проблемы";
                    document.getElementById('customfield_39').style.display = "none";
                }
            }

            document.getElementById('telredicall').onclick = function () {
                if (document.getElementById('telephonyform').style.display == '') {
                    document.getElementById('customfield_37').style.display = "";
                    document.getElementById('customfield_37').placeholder = "Ваш ID оператора";
                    document.getElementById('customfield_38').style.display = "";
                    document.getElementById('customfield_38').placeholder = "Краткое и структурированное описание проблемы и номера где проблемы";
                    document.getElementById('customfield_39').style.display = "none";
                }
            }

            document.getElementById('telunderground').onclick = function () {
                if (document.getElementById('telephonyform').style.display == '') {
                    document.getElementById('customfield_37').style.display = "none";
                    document.getElementById('customfield_38').placeholder = "Краткое и структурированное описание проблемы и номера где проблемы";
                    document.getElementById('customfield_39').style.display = "none";
                }
            }

            document.getElementById('create_7').onclick = function () {
                let ids = encodeURIComponent(document.getElementById('customfield_37').value);
                let erx = encodeURIComponent(document.getElementById('customfield_38').value);
                let ary = encodeURIComponent(document.getElementById('customfield_39').value);

                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('telnoaccess').textContent) {
                    console.log("Отсутствие доступа к странице телефонии: " + " ID operator " + ids + " Description " + erx);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/607",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18808=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/607";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('teloutgoing').textContent) {
                    console.log("Проблема с исходящим вызовом: " + " ID operator " + ids + " Description " + erx);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/608",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18808=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/608";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('telincoming').textContent) {
                    console.log("Проблема с входящим вызовом: " + " ID operator " + ids + " Description " + erx);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/609",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18808=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/609";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('telspeaking').textContent) {
                    console.log("Проблема во время разговора: " + " ID operator " + ids + " Description " + erx);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/610",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18808=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/610";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('telrtstat').textContent) {
                    console.log("Проблема с реал-тайм статистикой: " + " Description " + ids + " ER " + erx + " AR " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/613",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18808=${ids}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/613";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('telcallinfo').textContent) {
                    console.log("Запрос информации по звонку: " + " ID operator " + ids + " Description " + erx);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/612",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18808=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/612";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('telredicall').textContent) {
                    console.log("Проблема при переводе вызова: " + " ID operator " + ids + " Description " + erx);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/611",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${ids}&customfield_18808=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/611";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('telunderground').textContent) {
                    console.log("Подземный стук: " + " Description " + erx);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/614",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18808=${erx}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/614";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else
                    console.log("Not found");
            }

        } else {
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
        }
    }

    document.getElementById('optionAuth').onclick = function () { //Auth
        if (document.getElementById('authsrvdskoptions').style.display != '') {
            document.getElementById('authsrvdskoptions').style.display = '';
            document.getElementById('authform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';


            document.getElementById('create_8').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_26').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_27').value);
                let str = encodeURIComponent(document.getElementById('customfield_28').value);
                let erx = encodeURIComponent(document.getElementById('customfield_29').value);
                let ary = encodeURIComponent(document.getElementById('customfield_30').value);

                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('authdevq').textContent) {
                    console.log("Вопросы к разработке: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/575",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/575";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('auth2google').textContent) {
                    console.log("Проблемы с 2FA : проблема с google authenticator: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/576",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/576";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('auth2faemail').textContent) {
                    console.log("Проблемы с 2FA: не приходит письмо о восстановлении пароля: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/573",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/573";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('auth2fasms').textContent) {
                    console.log("Проблемы с 2FA: не приходит смс: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/572",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/572";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('authdeladdrolesteach').textContent) {
                    console.log("Удаление / добавление ролей Преподавателям: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/560",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/560";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('authdeladdrolesstud').textContent) {
                    console.log("Удаление / добавление ролей Ученикам: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/559",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/559";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('authlogcheck').textContent) {
                    console.log("Проверка логов в ID: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/558",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/558";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('authunderground').textContent) {
                    console.log("Подземный стук: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/561",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/561";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else
                    console.log("Not found");
            }
        } else {
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
        }

    }

    document.getElementById('optionCRM2').onclick = function () { //CRM2
        if (document.getElementById('crm2srvdskoptions').style.display != '') {
            document.getElementById('crm2srvdskoptions').style.display = '';
            document.getElementById('crm2form').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';


            document.getElementById('create_9').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_40').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_41').value);
                let str = encodeURIComponent(document.getElementById('customfield_42').value);
                let erx = encodeURIComponent(document.getElementById('customfield_43').value);
                let ary = encodeURIComponent(document.getElementById('customfield_44').value);

                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2taskssoprovod').textContent) {
                    console.log("Вопросы по задачам Сопровождения: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/677",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/677";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2taskssales').textContent) {
                    console.log("Вопросы по задачам Продаж: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/676",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/676";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2lessonhistory').textContent) {
                    console.log("Вопросы по Истории уроков: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/675",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/675";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2paymenthistory').textContent) {
                    console.log("Вопросы по Истории платежей: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/674",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/674";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2convertsrc').textContent) {
                    console.log("Вопросы по Визардам конвертации услуги: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/673",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/673";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2actionshistory').textContent) {
                    console.log("Вопросы по Истории действий: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/672",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/672";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2familycard').textContent) {
                    console.log("Вопросы о карточке Семья: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/671",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/671";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2profile').textContent) {
                    console.log("Вопросы о Профиле заявки: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/670",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/670";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2communications').textContent) {
                    console.log("Вопросы по разделу Коммуникации: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/678",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/678";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2taskpoolsoporovd').textContent) {
                    console.log("Проблемы с функционалом пула задач список задач сопровождение: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/669",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/669";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2taskpoolsales').textContent) {
                    console.log("Проблемы с функционалом пула задач список задач продажи: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/668",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/668";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2migrationcrm').textContent) {
                    console.log("Миграция компании из CRM1 в CRM2: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/555",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/555";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('crm2changestk').textContent) {
                    console.log("Смена STK услуги: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/554",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/554";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                }
                else console.log("Not found");
            }
        } else {
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
        }
    }

    document.getElementById('optionMrkt').onclick = function () { //MRKT
        if (document.getElementById('mrktsrvdskoptions').style.display != '') {
            document.getElementById('mrktsrvdskoptions').style.display = '';
            document.getElementById('mrktform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';

            document.getElementById('mrktsubscribptions').onclick = function () {
                if (document.getElementById('mrktform').style.display == '') {
                    document.getElementById('customfield_47').style.display = "";
                    document.getElementById('customfield_48').style.display = "";
                    document.getElementById('customfield_49').style.display = "";
                    document.getElementById('customfield_47').placeholder = "ID ученика";
                    document.getElementById('customfield_48').placeholder = "ID услуги";
                }
            }

            document.getElementById('mrktcertificates').onclick = function () {
                if (document.getElementById('mrktform').style.display == '') {
                    document.getElementById('customfield_47').style.display = "none";
                    document.getElementById('customfield_48').style.display = "none";
                    document.getElementById('customfield_49').style.display = "";
                }
            }

            document.getElementById('mrktpromocodes').onclick = function () {
                if (document.getElementById('mrktform').style.display == '') {
                    document.getElementById('customfield_47').style.display = "none";
                    document.getElementById('customfield_48').style.display = "none";
                    document.getElementById('customfield_49').style.display = "";
                }
            }

            document.getElementById('mrktdisablends').onclick = function () {
                if (document.getElementById('mrktform').style.display == '') {
                    document.getElementById('customfield_47').style.display = "";
                    document.getElementById('customfield_48').style.display = "";
                    document.getElementById('customfield_49').style.display = "";
                    document.getElementById('customfield_47').placeholder = "ID ученика";
                    document.getElementById('customfield_48').placeholder = "ID услуги";
                }
            }

            document.getElementById('mrktnachisl').onclick = function () {
                if (document.getElementById('mrktform').style.display == '') {
                    document.getElementById('customfield_47').style.display = "";
                    document.getElementById('customfield_48').style.display = "";
                    document.getElementById('customfield_49').style.display = "";
                    document.getElementById('customfield_47').placeholder = "ID ученика";
                    document.getElementById('customfield_48').placeholder = "ID услуги";
                }
            }

            document.getElementById('mrktdoublelessons').onclick = function () {
                if (document.getElementById('mrktform').style.display == '') {
                    document.getElementById('customfield_47').style.display = "";
                    document.getElementById('customfield_48').style.display = "";
                    document.getElementById('customfield_49').style.display = "";
                    document.getElementById('customfield_47').placeholder = "ID ученика";
                    document.getElementById('customfield_48').placeholder = "ID услуги";
                }
            }

            document.getElementById('mrktpriceq').onclick = function () {
                if (document.getElementById('mrktform').style.display == '') {
                    document.getElementById('customfield_47').style.display = "";
                    document.getElementById('customfield_48').style.display = "none";
                    document.getElementById('customfield_49').style.display = "";
                    document.getElementById('customfield_47').placeholder = "ID ученика";
                }
            }

            document.getElementById('mrktreferal').onclick = function () {
                if (document.getElementById('mrktform').style.display == '') {
                    document.getElementById('customfield_47').style.display = "";
                    document.getElementById('customfield_48').style.display = "";
                    document.getElementById('customfield_49').style.display = "";
                    document.getElementById('customfield_47').placeholder = "ID приглашающего";
                    document.getElementById('customfield_48').placeholder = "ID приглашенного";
                }
            }

            document.getElementById('mrktcertconsult').onclick = function () {
                if (document.getElementById('mrktform').style.display == '') {
                    document.getElementById('customfield_47').style.display = "";
                    document.getElementById('customfield_48').style.display = "";
                    document.getElementById('customfield_49').style.display = "";
                    document.getElementById('customfield_47').placeholder = "ID ученика";
                    document.getElementById('customfield_48').placeholder = "ID услуги";
                }
            }

            document.getElementById('mrktpromocodesconsult').onclick = function () {
                if (document.getElementById('mrktform').style.display == '') {
                    document.getElementById('customfield_47').style.display = "";
                    document.getElementById('customfield_48').style.display = "";
                    document.getElementById('customfield_49').style.display = "";
                    document.getElementById('customfield_47').placeholder = "ID ученика";
                    document.getElementById('customfield_48').placeholder = "ID услуги";
                }
            }

            document.getElementById('mrktunderground').onclick = function () {
                if (document.getElementById('mrktform').style.display == '') {
                    document.getElementById('customfield_47').style.display = "";
                    document.getElementById('customfield_48').style.display = "";
                    document.getElementById('customfield_49').style.display = "";
                    document.getElementById('customfield_47').placeholder = "ID ученика";
                    document.getElementById('customfield_48').placeholder = "ID услуги";
                }
            }


            document.getElementById('create_10').onclick = function () {
                let idstd = encodeURIComponent(document.getElementById('customfield_47').value);
                let servid = encodeURIComponent(document.getElementById('customfield_48').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_49').value);

                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktsubscribptions').textContent) {
                    console.log("Подписки: " + " ID stud " + idstd + " Id service " + servid + " Description " + dscr);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/889",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${dscr}&customfield_18975=${idstd}&customfield_18976=${servid}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/889";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);


                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktcertificates').textContent) {
                    console.log("Заказ сертификата: " + " Description " + dscr);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/626",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/626";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktpromocodes').textContent) {
                    console.log("Заказ промокодов: " + " Description " + dscr);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/625",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/625";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktdisablends').textContent) {
                    console.log("Отключение НДС: " + " ID stud " + idstd + " Id service " + servid + " Description " + dscr);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/605",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/605";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktnachisl').textContent) {
                    console.log("Начисления (срочные, журналисты, PR): " + " ID stud " + idstd + " Id service " + servid + " Description " + dscr);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/604",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/604";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktdoublelessons').textContent) {
                    console.log("Удвоение уроков: " + " ID stud " + idstd + " Id service " + servid + " Description " + dscr);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/603",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/603";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktpriceq').textContent) {
                    console.log("Вопросы по прайсам: " + " ID stud " + idstd + " Description " + dscr);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/602",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/602";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktreferal').textContent) {
                    console.log("Реферальная программа: " + " ID прглашающего " + idstd + " Id приглашенного " + servid + " Description " + dscr);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/601",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/601";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktcertconsult').textContent) {
                    console.log("Сертификаты консультация / тех. проблема: " + " ID stud " + idstd + " Id service " + servid + " Description " + dscr);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/600",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/600";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktpromocodesconsult').textContent) {
                    console.log("Сертификаты консультация / тех. проблема: " + " ID stud " + idstd + " Id service " + servid + " Description " + dscr);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/599",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/599";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mrktunderground').textContent) {
                    console.log("Сертификаты консультация / тех. проблема: " + " ID stud " + idstd + " Id service " + servid + " Description " + dscr);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/606",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18808=${dscr}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/606";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                }

                else console.log("Not found");

            }

        } else {
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
        }
    }

    document.getElementById('optionBilling').onclick = function () { //billing
        if (document.getElementById('billingsrvdskoptions').style.display != '') {
            document.getElementById('billingsrvdskoptions').style.display = '';
            document.getElementById('billingform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';

            document.getElementById('billcheques').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "none";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billdataanal').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "none";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billtaskfordev').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "none";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billadmreturn').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "none";
                    document.getElementById('customfield_32').style.display = "none";
                }
            }

            document.getElementById('billtroublcodecard').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "none";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billpaymentbot').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billschemes').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billselfemployee').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billrequisites').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billpayments').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billspisanie').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billreturns').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billpaymentmesystems').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billwidgetpayment').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billpay').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billcredit').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billoferta').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billlendings').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billterms').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billsubscribtions').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billbundles').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billtehproblemsprod').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billroles').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billbusanalys').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('billtechconv').onclick = function () {
                if (document.getElementById('billingform').style.display == '') {
                    document.getElementById('customfield_33').style.display = "";
                    document.getElementById('customfield_32').style.display = "";
                }
            }

            document.getElementById('create_6').onclick = function () {
                let idstd = encodeURIComponent(document.getElementById('customfield_32').value);
                let servid = encodeURIComponent(document.getElementById('customfield_33').value);
                let str = encodeURIComponent(document.getElementById('customfield_34').value);
                let erx = encodeURIComponent(document.getElementById('customfield_35').value);
                let ary = encodeURIComponent(document.getElementById('customfield_36').value);

                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billcheques').textContent) {
                    console.log("Чеки/инвойсы: " + "  Id student: " + idstd + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/681",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/681";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billdataanal').textContent) {
                    console.log("Data analytics: " + " Id student: " + idstd + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/680",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/680";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billtaskfordev').textContent) {
                    console.log("Задача для разработки: " + " Id student: " + idstd + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/679",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/679";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billadmreturn').textContent) {
                    console.log("Админка возвратов: " + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/667",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/667";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billtroublcodecard').textContent) {
                    console.log("Проблема с кодом для привязки карты: " + " Id student: " + idstd + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/666",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/666";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billpaymentbot').textContent) {
                    console.log("Billing payment bot: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/664",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/664";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billschemes').textContent) {
                    console.log("Схемы вознаграждения: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/663",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/663";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billselfemployee').textContent) {
                    console.log("Самозанятые: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/662",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/662";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billrequisites').textContent) {
                    console.log("Реквизиты: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/661",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/661";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billpayments').textContent) {
                    console.log("Выплаты: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/660",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/660";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billspisanie').textContent) {
                    console.log("Списание средств: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/659",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&customfield_18976=${servid}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/659";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billreturns').textContent) {
                    console.log("Возвраты: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/658",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18976=${idstd}&customfield_18975=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/658";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billpaymentmesystems').textContent) {
                    console.log("Платежные системы: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/657",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/657";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billwidgetpayment').textContent) {
                    console.log("Виджет оплаты: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/656",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18319=${str}&customfield_18976=${servid}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/656";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billpay').textContent) {
                    console.log("Оплата: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/655",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstd}&customfield_18976=${servid}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/655";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billcredit').textContent) {
                    console.log("Рассрочка: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/654",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/654";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billoferta').textContent) {
                    console.log("Оферты: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/653",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/653";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billlendings').textContent) {
                    console.log("Лендинги: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/652",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/652";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billterms').textContent) {
                    console.log("Terms: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/651",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/651";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billsubscribtions').textContent) {
                    console.log("Подписки: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/650",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/650";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billbundles').textContent) {
                    console.log("Бандлы: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/649",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/649";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billtehproblemsprod').textContent) {
                    console.log("Технические проблемы на production: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/648",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/648";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billroles').textContent) {
                    console.log("Роли и доступы: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/647",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18976=${idstd}&customfield_18975=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/647";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billbusanalys').textContent) {
                    console.log("Бизнес Анализ: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/646",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/646";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('billtechconv').textContent) {
                    console.log("Техническое обсуждение: " + " Id student: " + idstd + " ID service " + servid + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/645",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18975=${idstd}&customfield_18976=${servid}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/645";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                }
                else console.log("Not found");
            }
        } else {
            document.getElementById('billingsrvdskoptions').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
        }
    }

    document.getElementById('optionVimbugs').onclick = function () { //vimbugs
        if (document.getElementById('vimbugsoptions').style.display != '') {
            document.getElementById('vimbugsoptions').style.display = '';
            document.getElementById('vimbugsform').style.display = '';

            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';

            document.getElementById('create_11').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_50').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_52').value);
                let str = encodeURIComponent(document.getElementById('customfield_53').value);
                let erx = encodeURIComponent(document.getElementById('customfield_54').value);
                let ary = encodeURIComponent(document.getElementById('customfield_55').value);


                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('lessonbutwidg').textContent) {
                    console.log("Виджет входа у взрослых У и П: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/935",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/935";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('automark').textContent) {
                    console.log("Автоотметка по урокам взрослых У: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/934",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/934";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('cmscontentadult').textContent) {
                    console.log("Взрослый англиский: CMS и контент на взрослой платформе: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/933",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/933";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('adulthwlestest').textContent) {
                    console.log("Взрослый английский: Домашки, уроки, тесты: " + "  Id student and teacher: " + idstdserv + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/932",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/932";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('showcaseadult').textContent) {
                    console.log("Шоукейс взрослого П/взрослого У: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/931",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/931";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('vimboxpages').textContent) {
                    console.log("Любые страницы содержащие vimbox, но при этом не содержащие kids в URL: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/936",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/936";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('adultselfstudy').textContent) {
                    console.log("Adults self-study: " + "  Id student and teacher: " + idstdserv + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/942",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/942";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('premiumflip').textContent) {
                    console.log("Premium и Flip: " + "  Id student and teacher: " + idstdserv + "Descript " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/941",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/941";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else console.log("Not found");
            }

        }

        else {
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
        }
    }

    document.getElementById('optionStudcab').onclick = function () { //student-cabinet-bugs
        if (document.getElementById('studcaboptions').style.display != '') {
            document.getElementById('studcaboptions').style.display = '';
            document.getElementById('studcabform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';


            //Начало окрашивания кнопок и добавление закрашивания при переключении

            document.getElementById('create_13').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_61').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_62').value);
                let str = encodeURIComponent(document.getElementById('customfield_63').value);
                let erx = encodeURIComponent(document.getElementById('customfield_64').value);
                let ary = encodeURIComponent(document.getElementById('customfield_65').value);

                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studadultcab').textContent) {
                    console.log("Взрослый ЛКУ Главная страница: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/975",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/975";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studkidcab').textContent) {
                    console.log("Детский ЛКУ Главная страница: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/974",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/974";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studstories').textContent) {
                    console.log("Stories: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/977",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/977";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studcabrefpage').textContent) {
                    console.log("Реферальная страница: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/973",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/973";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studcabtransfpayhist').textContent) {
                    console.log("Страница оплаты, трансфера и истории баланса: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/972",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/972";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studcabttmovelesson').textContent) {
                    console.log("Страница расписания и переноса урока: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/971",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/971";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studcabteacherpage').textContent) {
                    console.log("Страница преподавателя: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/970",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/970";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studcabprofilesettings').textContent) {
                    console.log("Страница профиля У + настройки: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/969",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/969";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studcabfamandcourse').textContent) {
                    console.log("Страница семьи и курсов: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/968",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/968";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studcabshowcase').textContent) {
                    console.log("Страница шоукейса (подключение услуг): " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/967",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/967";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studcabmenunav').textContent) {
                    console.log("Меню навигации (лейаут): " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/966",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/966";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('studcabunderground').textContent) {
                    console.log("Подземный стук: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/946",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/946";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else console.log("Not found");
            }
        } else {
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
        }
    }

    document.getElementById('optionChat').onclick = function () { //chat-qa-support
        if (document.getElementById('chatqaoptions').style.display != '') {
            document.getElementById('chatqaoptions').style.display = '';
            document.getElementById('chatform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';


            //Начало окрашивания кнопок и добавление закрашивания при переключении

            document.getElementById('create_14').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_66').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_67').value);
                let str = encodeURIComponent(document.getElementById('customfield_68').value);
                let erx = encodeURIComponent(document.getElementById('customfield_69').value);
                let ary = encodeURIComponent(document.getElementById('customfield_70').value);

                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('chatqa').textContent) {
                    console.log("Обращение к QA: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/948",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/948";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else console.log("Not found");
            }
        } else {
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
        }
    }

    document.getElementById('optionTripwire').onclick = function () { //exp-tripwire-bugs
        if (document.getElementById('tripwireoptions').style.display != '') {
            document.getElementById('tripwireoptions').style.display = '';
            document.getElementById('tripwireform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';


            //Начало окрашивания кнопок и добавление закрашивания при переключении

            document.getElementById('create_15').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_71').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_72').value);
                let str = encodeURIComponent(document.getElementById('customfield_73').value);
                let erx = encodeURIComponent(document.getElementById('customfield_74').value);
                let ary = encodeURIComponent(document.getElementById('customfield_75').value);

                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('tripwqa').textContent) {
                    console.log("Обращение к QA: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/949",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/949";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else console.log("Not found");
            }
        } else {
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
        }
    }

    document.getElementById('optionAnalyst').onclick = function () { //analyst-gm-tl
        if (document.getElementById('analystoptions').style.display != '') {
            document.getElementById('analystoptions').style.display = '';
            document.getElementById('analystform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';


            //Начало окрашивания кнопок и добавление закрашивания при переключении

            document.getElementById('create_16').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_76').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_77').value);
                let str = encodeURIComponent(document.getElementById('customfield_78').value);
                let erx = encodeURIComponent(document.getElementById('customfield_79').value);
                let ary = encodeURIComponent(document.getElementById('customfield_80').value);
                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('analystsqa').textContent) {
                    console.log("Обращение к QA: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/947",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/947";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else console.log("Not found");
            }
        } else {
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
        }
    }

    document.getElementById('optionCorp').onclick = function () { //corp-support
        if (document.getElementById('corpoptions').style.display != '') {
            document.getElementById('corpoptions').style.display = '';
            document.getElementById('corpform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';


            //Начало окрашивания кнопок и добавление закрашивания при переключении

            document.getElementById('create_17').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_81').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_82').value);
                let str = encodeURIComponent(document.getElementById('customfield_83').value);
                let erx = encodeURIComponent(document.getElementById('customfield_84').value);
                let ary = encodeURIComponent(document.getElementById('customfield_85').value);

                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('corpqa').textContent) {
                    console.log("Обращение к QA: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/950",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/950";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else console.log("Not found");
            }
        } else {
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
        }
    }

    document.getElementById('optionMarketing').onclick = function () { //marketing-qa (landing pages)
        if (document.getElementById('marketingptions').style.display != '') {
            document.getElementById('marketingptions').style.display = '';
            document.getElementById('marketingform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';


            //Начало окрашивания кнопок и добавление закрашивания при переключении

            document.getElementById('create_18').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_86').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_87').value);
                let str = encodeURIComponent(document.getElementById('customfield_88').value);
                let erx = encodeURIComponent(document.getElementById('customfield_89').value);
                let ary = encodeURIComponent(document.getElementById('customfield_90').value);

                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('marketingqa').textContent) {
                    console.log("Обращение к QA: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/945",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/945";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else console.log("Not found");
            }
        } else {
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
        }
    }

    document.getElementById('optionMrktprojbugs').onclick = function () { //marketing-projects-bugs(landing pages)
        if (document.getElementById('marketprojbugsptions').style.display != '') {
            document.getElementById('marketprojbugsptions').style.display = '';
            document.getElementById('marketprojbugsform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';


            //Начало окрашивания кнопок и добавление закрашивания при переключении

            document.getElementById('create_22').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_109').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_110').value);
                let str = encodeURIComponent(document.getElementById('customfield_111').value);
                let erx = encodeURIComponent(document.getElementById('customfield_112').value);
                let ary = encodeURIComponent(document.getElementById('customfield_113').value);

                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('marketingqa').textContent) {
                    console.log("Обращение к QA: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/952",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/952";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else console.log("Not found");
            }
        } else {
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
        }
    }

    document.getElementById('optionMobbugs').onclick = function () { //mobile-bugs
        if (document.getElementById('mobbugsoptions').style.display != '') {
            document.getElementById('mobbugsoptions').style.display = '';
            document.getElementById('mobileform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';


            //Начало окрашивания кнопок и добавление закрашивания при переключении

            document.getElementById('create_19').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_91').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_92').value);
                let issuename = encodeURIComponent(document.getElementById('customfield_911').value);
                let device = encodeURIComponent(document.getElementById('customfield_912').value);
                let str = encodeURIComponent(document.getElementById('customfield_94').value);
                let erx = encodeURIComponent(document.getElementById('customfield_95').value);
                let ary = encodeURIComponent(document.getElementById('customfield_96').value);

                let priorvalue = document.getElementById('prioritymbugs').value;
                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymobauthorize').textContent) {
                    console.log("Skyeng МП: авторизация: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1031",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1031";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymobregister').textContent) {
                    console.log("Skyeng МП: регистрация: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1030",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1030";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymobregsocnetw').textContent) {
                    console.log("Skyeng МП: регистрация через соц. сети: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1029",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1029";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymobpayment').textContent) {
                    console.log("Skyeng МП: оплата: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1023",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1023";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymobauthsocnetw').textContent) {
                    console.log("Skyeng МП: аторизация через соц. сети: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1028",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1028";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymobchats').textContent) {
                    console.log("Skyeng МП: чаты: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1027",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1027";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymobpush').textContent) {
                    console.log("Skyeng МП: пуши: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1026",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1026";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymobforcupd').textContent) {
                    console.log("Skyeng МП: Force update: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1025",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1025";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymobasettings').textContent) {
                    console.log("Skyeng МП: настройки: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1024",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1024";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymoblanguage').textContent) {
                    console.log("Skyeng МП: локализация(язык приложения, контента): " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1022",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1022";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skymovideocall').textContent) {
                    console.log("Skyeng МП: видеосвязь(необразовательная часть): " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1021",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1021";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('skyteachmob').textContent) {
                    console.log("Teachers МП: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1020",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1020";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else console.log("Not found");
            }
        } else {
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
        }
    }

    document.getElementById('optionAcademymobbugs').onclick = function () { //academy-mobile-bugs
        if (document.getElementById('academymobbugsoptions').style.display != '') {
            document.getElementById('academymobbugsoptions').style.display = '';
            document.getElementById('academymobileform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('mobileform').style.display = 'none';

			document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';

            //Начало окрашивания кнопок и добавление закрашивания при переключении

            document.getElementById('create_24').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_118').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_121').value);
                let issuename = encodeURIComponent(document.getElementById('customfield_119').value);
                let device = encodeURIComponent(document.getElementById('customfield_120').value);
                let str = encodeURIComponent(document.getElementById('customfield_122').value);
                let erx = encodeURIComponent(document.getElementById('customfield_123').value);
                let ary = encodeURIComponent(document.getElementById('customfield_124').value);

                let priorvalue = document.getElementById('academyprioritymbugs').value;
                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('academmobaudiobookslifetalks').textContent) {
                    console.log("МП Skyeng: Аудиокниги и Life + Talks: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1019",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1019";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('academmobsituations').textContent) {
                    console.log("МП Skyeng: Ситуации: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1018",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1018";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('academmobvideopractice').textContent) {
                    console.log("МП Skyeng: Видеопрактика: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1017",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1017";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('academmobselfstudy').textContent) {
                    console.log("МП Skyeng: Self Study: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1016",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1016";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('academmobvocabulartrainer').textContent) {
                    console.log("МП Skyeng: тренажер слов: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1015",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1015";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('academmobvocabular').textContent) {
                    console.log("МП Skyeng: Словарь: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1014",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1014";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('academmoblessons').textContent) {
                    console.log("МП Skyeng: уроки - образовательная часть: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1013",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1013";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('academmobhomeworks').textContent) {
                    console.log("МП Skyeng: Домашки: " + " Priority:" + priorvalue + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1012",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&priority=${priorvalue}&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/1012";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else console.log("Not found");
            }
        } else {
            document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('academymobileform').style.display = 'none';
        }
    }

    document.getElementById('optionStudcabmobbugs').onclick = function () { //student-cabint-bugs
        if (document.getElementById('studcabmobbugskoptions').style.display != '') {
            document.getElementById('studcabmobbugskoptions').style.display = '';
            document.getElementById('stcabmbbugsform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
			document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';


            //Начало окрашивания кнопок и добавление закрашивания при переключении

            document.getElementById('create_21').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_102').value);
                let dscr = encodeURIComponent(document.getElementById('customfield_105').value);
                let issuename = encodeURIComponent(document.getElementById('customfield_103').value);
                let device = encodeURIComponent(document.getElementById('customfield_104').value);
                let str = encodeURIComponent(document.getElementById('customfield_106').value);
                let erx = encodeURIComponent(document.getElementById('customfield_107').value);
                let ary = encodeURIComponent(document.getElementById('customfield_108').value);

                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mpskyengmainsrv').textContent) {
                    console.log("МП Skyeng: главные страницы продуктов (кроме лайф и толкс) и страница подключения услуг: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/965",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/965";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mpskyengschedule').textContent) {
                    console.log("МП Skyeng: расписание и переносы: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/964",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/964";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mpskyengstories').textContent) {
                    console.log("МП Skyeng: stories: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/978",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/978";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mpskyengprofile').textContent) {
                    console.log("МП Skyeng: профиль У и настройки профиля, таймзоны: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/963",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/963";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mpskyengbalance').textContent) {
                    console.log("МП Skyeng: страницы оплаты и трансферы: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/962",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/962";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mpskyengreferal').textContent) {
                    console.log("МП Skyeng: реферальная программа: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/961",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/961";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mpskyengpodbor').textContent) {
                    console.log("МП Skyeng: подбор П: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/960",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/960";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mpskysmartparents').textContent) {
                    console.log("МП Skysmart Parents: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/959",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/959";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('mpunderground').textContent) {
                    console.log("Подземный стук: " + "  Id student and teacher: " + idstdserv + " Short description: " + dscr + " Название " + issuename + "Device " + device + " STR: " + str + " ER: " + erx + " AR: " + ary);

                    document.getElementById('responseTextarea1').value = `{  "headers": {
					 "content-type": "application/x-www-form-urlencoded",
					 "sec-fetch-mode": "cors",
					 "sec-fetch-site": "same-origin",
					 "x-requested-with": "XMLHttpRequest",
					 "x-sitemesh-off": "true"
					  },
					  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/958",
					  "referrerPolicy": "strict-origin-when-cross-origin",
					  "body": "atl_token=${jiratoken}&projectId=15206&customfield_18813=${issuename}&customfield_18814=${device}&description=${dscr}&customfield_18319=${str}&customfield_18320=${erx}&customfield_18321=${ary}&customfield_18975=${idstdserv}&sd-kb-article-viewed=false",
					 "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					  }`
                    document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/62/create/958";
                    document.getElementById('responseTextarea3').value = ''
                    document.getElementById('sendResponse').click()

                    setTimeout(getprsup, 5000);
                    setTimeout(getslacklnk, 8000);

                } else console.log("Not found");
            }
        } else {
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
        }
    }

    document.getElementById('optionInfra').onclick = function () { //Infra support for delete account
        if (document.getElementById('infraoptions').style.display != '') {
            document.getElementById('infraoptions').style.display = '';
            document.getElementById('infraform').style.display = '';

            document.getElementById('kidsform').style.display = 'none';
            document.getElementById('teachersform').style.display = 'none';
            document.getElementById('onboardingform').style.display = 'none';
            document.getElementById('scheduleform').style.display = 'none';
            document.getElementById('billingform').style.display = 'none';
            document.getElementById('billqaform').style.display = 'none';
            document.getElementById('mrktform').style.display = 'none';
            document.getElementById('crm2form').style.display = 'none';
            document.getElementById('authform').style.display = 'none';
            document.getElementById('telephonyform').style.display = 'none';
            document.getElementById('vimbugsform').style.display = 'none';
            document.getElementById('vimvideocallform').style.display = 'none';
            document.getElementById('studcabform').style.display = 'none';
            document.getElementById('chatform').style.display = 'none';
            document.getElementById('tripwireform').style.display = 'none';
            document.getElementById('analystform').style.display = 'none';
            document.getElementById('corpform').style.display = 'none';
            document.getElementById('marketingform').style.display = 'none';
            document.getElementById('edumodelform').style.display = 'none';
            document.getElementById('stcabmbbugsform').style.display = 'none';
            document.getElementById('marketprojbugsform').style.display = 'none';
            document.getElementById('mobileform').style.display = 'none';
            document.getElementById('academymobileform').style.display = 'none';
			
			document.getElementById('academymobbugsoptions').style.display = 'none';
            document.getElementById('mobbugsoptions').style.display = 'none';
            document.getElementById('marketprojbugsptions').style.display = 'none';
            document.getElementById('studcabmobbugskoptions').style.display = 'none';
            document.getElementById('edumodeloptions').style.display = 'none';
            document.getElementById('marketingptions').style.display = 'none';
            document.getElementById('corpoptions').style.display = 'none';
            document.getElementById('analystoptions').style.display = 'none';
            document.getElementById('tripwireoptions').style.display = 'none';
            document.getElementById('chatqaoptions').style.display = 'none';
            document.getElementById('studcaboptions').style.display = 'none';
            document.getElementById('vimvidoptions').style.display = 'none';
            document.getElementById('vimbugsoptions').style.display = 'none';
            document.getElementById('teacherssrvdskoptions').style.display = 'none';
            document.getElementById('skysmartsrvdskoptions').style.display = 'none';
            document.getElementById('c1srvdskoptions').style.display = 'none';
            document.getElementById('schedulesrvdskoptions').style.display = 'none';
            document.getElementById('telephonysrvdskoptions').style.display = 'none';
            document.getElementById('authsrvdskoptions').style.display = 'none';
            document.getElementById('crm2srvdskoptions').style.display = 'none';
            document.getElementById('mrktsrvdskoptions').style.display = 'none';
            document.getElementById('billingsrvdskoptions').style.display = 'none';
            document.getElementById('billingqasrvdskoptions').style.display = 'none';


            //Начало окрашивания кнопок и добавление закрашивания при переключении

            document.getElementById('create_23').onclick = function () {
                let idstdserv = encodeURIComponent(document.getElementById('customfield_114').value);
                let lnk = encodeURIComponent(document.getElementById('customfield_115').value);
                let commentos = encodeURIComponent(document.getElementById('customfield_117').value);
                let radiosel = document.getElementsByName('customfield_116');
                if (document.getElementsByClassName('activebtn')[0].textContent == document.getElementById('askfordelacc').textContent) {
                    console.log("Запрос на удаление перс.данных: " + "  Id student and teacher: " + idstdserv + " Link: " + lnk + " Комментарий " + commentos);

                    for (let i = 0; i < radiosel.length; i++) {
                        if (radiosel[i].checked == true) {
                            document.getElementById('responseTextarea1').value = `{  "headers": {
							 "content-type": "application/x-www-form-urlencoded",
							 "sec-fetch-mode": "cors",
							 "sec-fetch-site": "same-origin",
							 "x-requested-with": "XMLHttpRequest",
							 "x-sitemesh-off": "true"
							  },
							  "referrer": "https://jira.skyeng.tech/servicedesk/customer/portal/4/create/957",
							  "referrerPolicy": "strict-origin-when-cross-origin",
							  "body": "atl_token=${jiratoken}projectId=13437&customfield_18225=${lnk}&customfield_18975=${idstdserv}&customfield_20613=${radiosel[i].value}&customfield_17713=${commentos}&sd-kb-article-viewed=false"",
							 "method": "POST",
							  "mode": "cors",
							  "credentials": "include"
							  }`
                            document.getElementById('responseTextarea2').value = "https://jira.skyeng.tech/servicedesk/customer/portal/4/create/957";
                            document.getElementById('responseTextarea3').value = ''
                            document.getElementById('sendResponse').click()

                            document.getElementById('customfield_114').value = "";
                            document.getElementById('customfield_115').value = "";
                            document.getElementById('customfield_117').value = "";

                            setTimeout(getinfrasup, 5000);
                            setTimeout(getslacklnk, 8000);
                        }
                    }
                } else console.log("Not found");
            }

        } else {
            document.getElementById('infraoptions').style.display = 'none';
            document.getElementById('infraform').style.display = 'none';
        }
    }

    //End of script
}