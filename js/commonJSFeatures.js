/* Logo Begins */
document.getElementById("logoArea").innerHTML +=  "\
	<div id=\"logos\">\
		<!--<a target=\"_blank\" href=\"https://www.iiit.ac.in/\"><img src=\"./images/iiit.png\" alt=\"IIITH\"></a>-->\
		<a id=\"SyPyRGLogo\" href=\"./index.html\"><img src=\"./images/SyPyRG.svg\" alt=\"SyPy\"></a>\
		<!--<a target=\"_blank\" href=\"https://cstar.iiit.ac.in/\"><img src=\"./images/cstar.png\" alt=\"CSTAR\"></a>-->\
	</div><br>\
	<!--<center><h2>SyPy Security & Privacy Research Group</h2></center>-->\
	";
/* Logo Ends */

/* Menu Begins */	
	document.getElementById("menuArea").innerHTML += "\
	<a id=\"miniMenu\" href=\"javascript:void(0)\" class=\"menuLinksButtons\" onclick=\"ResponsiveMenu()\">Menu</a>";
	document.getElementById("menuArea").innerHTML += "\
	<button id=\"miniMenuClose\" href=\"javascript:void(0)\" class=\"menuLinksButtons\" onclick=\"ResponsiveMenuClose()\" style=\"display:none\; padding: 1px;\"><i class=\"fas fa-times\"></i></a>	";
	document.getElementById("menuPallet").innerHTML += "\
		<a id=\"indexPage\" href=\"./index.html\" class=\"menuLinks\">Home</a>\
		<a id=\"teamPage\" href=\"./team.html\" class=\"menuLinks\">Team</a>\
		<a id=\"publicationsPage\" href=\"./publications.html\" class=\"menuLinks\">Publications</a>\
	";
	document.getElementById(activePageID).classList.add("activePageHighlight");
	document.getElementById(activePageID).href = "javascript:void(0)";
	if (activePageID=="indexPage"){document.getElementById("SyPyRGLogo").href = "javascript:void(0)";}
/* Menu Ends */

/* ResponsiveMenu Begins */
	function ResponsiveMenu() {
		document.getElementById("menuPallet").style.display = "block";
		document.getElementById("miniMenu").style.display = "none";
		document.getElementById("miniMenuClose").style.display = "block";
	}
	function ResponsiveMenuClose() {
		document.getElementById("menuPallet").style.display = "none";
		document.getElementById("miniMenu").style.display = "block";
		document.getElementById("miniMenuClose").style.display = "none";
	}
/* ResponsiveMenu Ends */

/* Footer Begins */
	var update_date = "";
	const today = new Date();
	update_date = "February 01, 2025";

	document.getElementById("footer").innerHTML +=  "\
	Last updated on " + update_date + "\
	<br>\
	SyPy\ &#169; " + today.getFullYear() + "\
	\
	\
	\
	<button onclick=\"topFunction()\" id=\"topbtn\"><i class=\"fas fa-arrow-up\"></i></button>\
	";
/* Footer Ends */

/* returnToTop Begins */
	// When the user scrolls down 175px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
	    document.getElementById("topbtn").style.display = "block";
	  } else {
	    document.getElementById("topbtn").style.display = "none";
	  }
	}
	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
	  document.body.scrollTop = 0;
	  document.documentElement.scrollTop = 0;
	}
/* returnToTop Ends */