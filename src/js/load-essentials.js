document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("myHeader").innerHTML =
        "<span id='headerText'>Title</span>"
        + "<span id='headerSubtext'>Subtitle</span>";
    document.getElementById("myNav").innerHTML =
        "<ul id='navLinks'>"
        + "<li><a href='index.html'>Home</a></li>"
        + "<li><a href='about.html'>About</a>"
        + "<li><a href='donate.html'>Donate</a></li>"
        + "</ul>";
}
// document.getElementById("myFooter").innerHTML =
// 	"<p id='copyright'>Copyright &copy; " + new Date().getFullYear() + " You. All"
// 	+ " rights reserved.</p>"
// 	+ "<p id='credits'>Layout by You</p>"
// 	+ "<p id='contact'><a href='mailto:you@you.com'>Contact Us</a> / "
// 	+ "<a href='mailto:you@you.com'>Report a problem.</a></p>";