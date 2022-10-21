function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

 window.onload = function () {
            cookie()
        };

        function cookie() {
            alert("Deze website maakt alleen gebruik van essentiële cookies!")
        };