const capy = document.getElementById("capybara");
const tree = document.getElementById("tree");
const restart = document.getElementById("restart");
const errorDiv = document.getElementById("gameover");


restart.addEventListener("click", function(e) {
  e.preventDefault;
  
  tree.classList.remove("animation");
  tree.classList.remove("pause");
  capy.classList.remove("pause");
  
  void tree.offsetWidth;
  
  tree.classList.add("animation");
}, false);


function jump() {
  if (capy.classList != "jump") {
    capy.classList.add("jump");
  
    setTimeout(function () {
      capy.classList.remove("jump");
    }, 600)
  }
}


let isAlive = setInterval(function () {

  let transform = window.getComputedStyle(capy).getPropertyValue("transform");
  let matrix = transform.split(",");
  let y = parseInt(matrix[matrix.length - 1]);
  let treeleft = parseInt(window.getComputedStyle(tree).getPropertyValue("left"));

  /* Código para detectar colisão */

  if (treeleft < 50 && treeleft > -10 && (y > -30 || isNaN(y))) {
    errorDiv.classList.remove("visibility");
    tree.classList.add("pause");
    capy.classList.add("pause");
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
