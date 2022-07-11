const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const errorDiv = document.getElementById("gameover");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  
    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300)
  }
}


let isAlive = setInterval(function () {

  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

  /* Código para detectar colisão */

  if (cactusleft < 50 && cactusleft > 0 && dinoTop >= 140) {
    errorDiv.classList.remove("visibility");
    cactus.classList.add("pause");
    dino.classList.add("pause");
  }
  else {
    errorDiv.classList.add("visibility");
  }

}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});

document.addEventListener("touchstart", function (event) {
  jump();
});
