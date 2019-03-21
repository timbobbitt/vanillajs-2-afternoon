let mousePosition = {x: 0, y: 0};
let drawID;
const getRandomNumber = function(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
  };
  window.addEventListener("mousemove", function(e) {
      mousePosition.x = e.pageX;
      mousePosition.y = e.pageY;
  })
  function draw (){
      return setInterval(function(){
          const container = document.getElementById("wrap");
          const color = `background:rgb(${getRandomNumber(
            0,
            255
          )},${getRandomNumber(0, 100)}, ${getRandomNumber(0, 100)});`;
          const ballSize = getRandomNumber(25, 50);
          const size = `height:${ballSize}px; width:${ballSize}px;`;
          const left = `left:${getRandomNumber(
            mousePosition.x - ballSize,
            mousePosition.x
          )}px;`;
          const top = `top:${getRandomNumber(
            mousePosition.y - ballSize,
            mousePosition.y
          )}px; `;
          const style = `${left}${top}${color}${size}`;
      
          const ball = document.createElement("div");
          ball.classList.add("ball");
          ball.style = style;

      

      ball.addEventListener("animationend", function(e){
          e.target.remove();
      })
        container.appendChild(ball);
    }, 1)
}
      window.addEventListener("mouseover", function(){
          drawID = draw()
      });
      window.addEventListener("mouseout", function(){
          clearInterval(drawID);
      });

