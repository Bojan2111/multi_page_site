// let headerDiv = document.getElementById('header');
// headerDiv.innerHTML = '<h1>This will be the header div</h1>';

// let footerDiv = document.getElementById('footer');
// footerDiv.innerText = 'Footer will go here';

// document.getElementById("header").innerHTML =
// 	"<span id='headerText'>Title</span>"
// 	+ "<span id='headerSubtext'>Subtitle</span>";
// document.getElementById("myNav").innerHTML =
// 	"<ul id='navLinks'>"
// 	+ "<li><a href='index.html'>Home</a></li>"
// 	+ "<li><a href='about.html'>About</a>"
// 	+ "<li><a href='donate.html'>Donate</a></li>"
// 	+ "</ul>";
// document.getElementById("footer").innerHTML =
// 	"<p id='copyright'>Copyright &copy; " + new Date().getFullYear() + " You. All"
// 	+ " rights reserved.</p>"
// 	+ "<p id='credits'>Layout by You</p>"
// 	+ "<p id='contact'><a href='mailto:you@you.com'>Contact Us</a> / "
// 	+ "<a href='mailto:you@you.com'>Report a problem.</a></p>";

var allClasses = [];

var allElements = document.querySelectorAll('*');

for (var i = 0; i < allElements.length; i++) {
  var classes = allElements[i].className.toString().split(/\s+/);
  for (var j = 0; j < classes.length; j++) {
    var cls = classes[j];
    if (cls && allClasses.indexOf(cls) === -1)
      allClasses.push(cls);
  }
}

console.log(allClasses);