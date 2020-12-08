function family() {
  var family = document.getElementById("family");
  var caregiver = document.getElementById("caregiver");
  if ((family.style.display = "none")) {
    family.style.display = "flex";
    caregiver.style.display = "none";
  }
}

function caregiver() {
  var family = document.getElementById("family");
  var caregiver = document.getElementById("caregiver");
  if ((caregiver.style.display = "none")) {
    family.style.display = "none";
    caregiver.style.display = "flex";
  }
}

var header = document.getElementById("btndiv");
var btns = header.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

var headerThree = document.getElementById("btnsectionThree");
var btnsThree = headerThree.getElementsByClassName("btnThree");

for (var i = 0; i < btnsThree.length; i++) {
  btnsThree[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activeThree");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" activeThree", "");
    }
    this.className += " activeThree";
  });
}