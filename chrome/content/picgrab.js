function picgrab_process() {

	var tmpurl = getSite();
	var newWindow = window.open( "http://www.jpg4me.com/index.php?this_url=" + tmpurl + "&searchtype=2");
	fixStyles(newWindow);	
}

function getSite() {
	var sSite;
	try {
		sSite = window._content.document.location;
	} catch (ex) {}
	return sSite;
}
function fixStyles(newWindow) {
	/*var mysheet = newWindow.document.styleSheets[0];
	alert(newWindow.document.styleSheets.length + " styles on this page.");*/

	/*var mysheet = new styleSheet();
	newWindow.document.styleSheets[0] = mysheet;	
	var trules = mysheet.cssRules ? mysheet.cssRules.length : mysheet.rules.length;

	newWindow.alert(newWindow.document.styleSheets.length + " styles on this page.");
	

	if(mysheet.insertRule) { // Standard
		mysheet.insertRule("img{width: auto;}",trules);
		mysheet.insertRule("td{vertical-align: top;}",trules+1);
	}*/
	newWindow.document.createStyleSheet("img{width:auto;} td{vertical-align: top;}");
	newWindow.alert("New Stylesheet added.");
}
	
