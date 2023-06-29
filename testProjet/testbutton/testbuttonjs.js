let buttonlike = document.getElementById('likebutton');
let navbarbutton = document.getElementById('navbarbutton');
let toggle = false;
let merciElement = document.getElementById("merci");

buttonlike.addEventListener("click", function() {
    toggle = !toggle;
    if (toggle) {
        buttonlike.src = "like.png";
    } else { buttonlike.src = "like2.png"
    }
});

merciElement.addEventListener("click", function() {
    merciElement.classList.toggle("highlight");
  });

