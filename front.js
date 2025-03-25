function $ (id) {
	return document.getElementById(id);
}

function activateMenu (variable) {
	$('menu_audio').style.fontWeight = 'normal';
	$('menu_video').style.fontWeight = 'normal';
	$('menu_pics').style.fontWeight = 'normal';
	$('menu_'+variable).style.fontWeight = 'bold';
}

function show (variable) {
	$('tab_content').innerHTML = document['tab_'+variable];
	activateMenu(variable);
}
function toogle (id) {
	if ($(id)) {
		//alert($(id).style.display);
		if ($(id).style.display=='none') $(id).style.display='';
		else $(id).style.display='none';
	} else alert(id+'not found');
}
function mailme () {
	window.location = 'mailto:'+'vaterlo'+'@'+'gmail'+'.com';
}
function menu1Over (section) {
	//alert(pics.draugi.src);
	//alert(pics[section].src);
	baseSrc = document.getElementById('menu1').src;
	document.getElementById('menu1').src = pics[section].src; //'img/' + lang + '.menu1.' + section + '.gif';
	//alert(pics[section].src);
}

function menu1Out () {
	document.getElementById('menu1').src = baseSrc;
}

function wo (winurl,winname,winfeatures) {
	var newwin;	newwin = window.open(winurl,winname,winfeatures);	//setTimeout('newwin.focus();' ,250);
}

function confirm_link (vietne, msg) {
	if (!msg)	{
		msg = "Delete item?";
	}
	zz = window.confirm(msg);
	if (zz) {document.location = vietne;}
}

function activateDay (id) {
	if (document.grafiks['d' + id]) {
		for (name in document.grafiks) {
			document.getElementById('cell_' + name.substring(1)).className = '';
		}
		document.getElementById('calLine').innerHTML = document.grafiks['d' + id];
		document.getElementById('cell_' + id).className = 'selected';
	}
}

function chkSubscribe (id) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById(id).email.value))
		return true;
	else {
		alert("Please enter valid email!");
		return false;
	}
}