let direction = {x: 0, y: 0};

const foodsound = new Audio('food.wav');
const  gameOver = new Audio('dead.mp3');
const moveSound = new Audio('mr.mp3');
const  musicSound = new Audio('backm,mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
]
food = {x: 6, y: 7};


//function

function main(ctime) {
    window.requestAnimationFrame(main);
    console.log(ctime)
    
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime =  ctime;
    gameEngine();


}
function gameEngine(){

    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
    
        if(index === 0){
        
            snakeElement.classList.add('head');
        }
        
        else{
            snakeElement.classList.add('snake');
        }
        board.apandChild(snakeElement);
    });
    foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumStart = food.x;
        foodElement.classList.add('food')
        board.apandChild(foodElement)


}


window.requestAnimationFrame(main);
window.requestAnimationFrame('keydown' , e =>{
   inputDir= {x: 0, y: 1}
   moveSound.play();
   switch(e.key) {
       case "ArrowUp":
           console.log("ArrowUp")
           break;


        case "ArrowDown":
           console.log("ArrowDown")
           break;

        case "ArrowLeft":
           console.log("ArrowLeft")
           break;
        case "ArrowRight":
           console.log("ArrowRight")
           break;
        
       default:
           break;
   }
});
