let peoplestatus = document.createElement('div')
peoplestatus.id = 'idforpeopstatus'
peoplestatus.style = 'position: absolute; top: 170px; left: 0px; width: 205px; color: bisque;'
document.body.append(peoplestatus)
async function operstatusleftbar() { // функция замены Script Package вывода списка операторов
	let opstats = []
	let moderresult;
	let flagtpkc;

	let operdep = document.getElementsByClassName('user_menu-dropdown-user_name')[0].innerText.split('-')[0]
	if operdep  == 'ТП'
		flagtpkc = 'ТП'
	else if operdep == 'КЦ'
		flagtpkc = 'КЦ'
	else if operdep == 'КМ'
		flagtpkc = 'КМ'
	
	await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState", {
		"credentials": "include"
	}).then(r => r.json()).then(result => {

		for (let i = 0; i < result.onOperator.length; i++) {
			if (flagtpkc == 'ТП' && result.onOperator[i].operator != null && result.onOperator[i].operator.status != "Offline" && result.onOperator[i].operator.fullName.match(/ТП\D/)) {
				opstats.push(result.onOperator[i])
			} // end of if state
		} // end of for			
	})
	
		peoplestatus.innerHTML = ''
		
		if (opstats.length != 0) {
			for (let i = 0; i < opstats.length; i++) {
				if (opstats[i].aCnt == null)
					opstats[i].aCnt = 0;
				if (opstats[i].operator.status == "Online") {
					moderresult += '<div style="display:flex;">' + '<span style="font-size:20px;">🟢 </span> ' + '<span style="position: absolute;left: 10px;">' + opstats[i].aCnt + '</span>' + `${opstats[i].operator.fullName}` + '</div>'
				} else if (opstats[i].operator.status == "Busy") {
					moderresult += '<div style="display:flex;">' + '<span style="font-size:20px;">🟡 </span>' + '<span style="position: absolute;left: 10px;">' + opstats[i].aCnt + '</span>' +  `${opstats[i].operator.fullName}` + '</div>'
				} else if (opstats[i].operator.status == "Pause") {
					moderresult+= '<div style="display:flex;">' + '<span style="font-size:20px;">🔴 </span>' +  '<span style="position: absolute;left: 10px;">' + opstats[i].aCnt + '</span>' + `${opstats[i].operator.fullName}` + '</div>'
				}
			}
			peoplestatus.innerHTML = moderresult			
		}
			
}