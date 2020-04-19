function stapelteller() {
  // take input from screen as a string
  var reeks = document.querySelector("input").value;
  if (reeks === "") {
    alert("voer een getal in");
  } else {
    var som = 0;
    // herhaal totdat er nog maar 1 getal over is
    while (reeks.length > 1) {
      // tel alle getallen in de reeks bij elkaar op
      for (var i = 0; i < reeks.length; i++) {
        som = som + parseInt(reeks[i]);
      }
      reeks = som.toString();
      som = 0;
    }
    // zet het resultaat in veld <p>
    document.querySelector("p").innerHTML = reeks;
    document.querySelector("p").classList.add("visible");
  }
}
