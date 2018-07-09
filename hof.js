/* The following 6 functions select their corresponding character's info */
function bagul() {
    var x = document.getElementById("bagul");
    if (x.style.display === "none") {
        x.style.display = "block";
        hide("bagul")
    } else {
        x.style.display = "none";
    }
}


function mick() {
    var x = document.getElementById("mick");
    if (x.style.display === "none") {
        x.style.display = "block";
        hide("mick");
    } else {
        x.style.display = "none";
    }
}


function phillip() {
  var x = document.getElementById("phillip");
  if (x.style.display === "none") {
      x.style.display = "block";
      hide("phillip");
  } else {
      x.style.display = "none";
  }
}


function hair() {
  var x = document.getElementById("hair");
  if (x.style.display === "none") {
      x.style.display = "block";
      hide("hair");
  } else {
      x.style.display = "none";
  }
}


function tommy() {
  var x = document.getElementById("tommy");
  if (x.style.display === "none") {
      x.style.display = "block";
      hide("tommy");
  } else {
      x.style.display = "none";
  }
}


function rod() {
  var x = document.getElementById("rod");
  if (x.style.display === "none") {
      x.style.display = "block";
      hide("rod");
  } else {
      x.style.display = "none";
  }
}

/* Hides all additional info except for the selected character */
function hide(current) {

  if(current != "bagul") {
    var x = document.getElementById("bagul");
    x.style.display = "none";
  }

  if (current != "mick") {
    var y = document.getElementById("mick");
    y.style.display = "none";
  }

  if (current != "phillip") {
    var z = document.getElementById("phillip");
    z.style.display = "none";
  }

  if(current != "hair") {
    var a = document.getElementById("hair");
    a.style.display = "none";
  }

  if (current != "tommy") {
    var b = document.getElementById("tommy");
    b.style.display = "none";
  }

  if (current != "rod") {
    var c = document.getElementById("rod");
    c.style.display = "none";
  }
}

/* By default, all additional info is hidden */
function hideAll() {
  var x = document.getElementById("bagul");
  x.style.display = "none";

  var y = document.getElementById("mick");
  y.style.display = "none";

  var z = document.getElementById("phillip");
  z.style.display = "none";

  var a = document.getElementById("hair");
  a.style.display = "none";

  var b = document.getElementById("tommy");
  b.style.display = "none";

  var c = document.getElementById("rod");
  c.style.display = "none";
}
