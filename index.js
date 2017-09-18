var dragged;

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  window.onclick = function (event) {
    if (!event.target.matches('.profimg')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}
function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  event.dataTransfer.setData('text', event.target.id);
  dragged = event.target;
}
function drop(event) {
  event.preventDefault();
  event.target.innerText  +=  dragged.innerText;
  dragged.innerText = "";
 }

function myText() {
  document.getElementById('mytextdropdown').classList.toggle("show");
  window.ondblclick = function (event) {
    if (!event.target.matches('.AddText')) {
      var dropdowns = document.getElementsByClassName("text-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        var a = document.getElementById('texta');
        var b = document.getElementById('saved');
        b.style.color = "green";
        b.innerHTML =event.target.innerText+" "+a.value;
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          a.value="";
        }
      }
    }
  }
}

function myText2() {
  document.getElementById('mytextdrpdown2').classList.toggle("show");
  window.ondblclick = function (event) {
    if (!event.target.matches('.AddText')) {
      var dropdowns = document.getElementsByClassName("text-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        var a = document.getElementById('texta2');
        var b = document.getElementById('saved2');
        b.style.color = "orange";
        b.innerHTML = event.target.innerText+" "+a.value;
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          a.value="";
        }
      }
    }
  }
}


function myText3() {
  document.getElementById('mytextdrpdown3').classList.toggle("show");
  window.ondblclick = function (event) {
    if (!event.target.matches('.AddText')) {
      var dropdowns = document.getElementsByClassName("text-content3");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        var a = document.getElementById('texta3');
        var b = document.getElementById('saved3');
        b.style.color = "blue";
        b.innerHTML = event.target.innerText+" "+a.value;
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          a.value="";
        }
      }
    }
  }
}


function myText4() {
  document.getElementById('mytextdrpdown4').classList.toggle("show");
  window.ondblclick = function (event) {
    if (!event.target.matches('.AddText')) {
      var dropdowns = document.getElementsByClassName("text-content4");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        var a = document.getElementById('texta4');
        var b = document.getElementById('saved4');
        b.style.color = "red";
        b.innerHTML =event.target.innerText+" "+a.value;
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          a.value="";
        }
      }
    }
  }
}