var c = document.getElementsByClassName("fa fa-thumbs-up");
for (let i = 0; i < c.length; i++) {
  c[i].onclick = function () {
    if (this.style.color == "black") {
      this.style.color = " Gold";
    } else {
      this.style.color = " black";
    }
  };
}

let bt = document.getElementsByClassName("btn-close");
let parag = document.getElementsByClassName("parag");
for (let i = 0; i < bt.length; i++) {
  bt[i].onclick = function () {
    parag[i].style.display = "none";
  };
}

$(document).ready(function () {
  $(".progress .progress-bar").css("width", function () {
    return $(this).attr("aria-valuenow") + "%";
  });
});

