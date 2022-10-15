const emptyBox = [null, null, null, null, null, null, null, null, null];
const playerX = "X"; 
const playerO = "O";
const newstatus = document.getElementById("status");
const restartGame = document.getElementsByClassName("btn");
let firstPlay = playerX;

const determineWinner1 = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

window.onload = function(){   
    for (var n = 3; n <= 11; n++) {
        document.getElementsByTagName("div")[n].setAttribute("id", n);
        let box1 = document.getElementById(n);
        box1.classList.add("square"); 

        box1.addEventListener("mouseover", function(){
            box1.classList.add("hover");
        })
        box1.addEventListener("mouseout", function(){
            box1.classList.remove("hover");
        })
        
    }
    
   

    const gameBoxes = Array.from(document.querySelectorAll(".square"));
    

    gameBoxes.forEach(box => {
        box.addEventListener("click", forClick)
    });   

    
    function forClick(c) {
        const tile = c.target.id;
        
        if (!emptyBox[tile]) {
            emptyBox[tile] = firstPlay;
            c.target.innerText = firstPlay;
            firstPlay = firstPlay === playerX ? playerO : playerX;

            if (checkWin(firstPlay)){
                console.log("did");
            }

            // if (winner()){
            //     newstatus.innerText = `Congratulations! ${firstPlay} is the Winner!`;
            //     return;
            // }
            
        }
    };

    function checkWin(firstPlay){
        return determineWinner1.some(winnerCombo1 => {
            return winnerCombo1.every(boxCombo => {
                return gameBoxes[boxCombo].classList.contains(firstPlay)
            })
        })
    }

    restartGame.addEventListener("click", function() {
        emptyBox.forEach((emptyboxes, index) => {
            emptyBox[index] = null;
        });
        gameBoxes.forEach((box4) => {
            box4.innerText = "";
        });
        newstatus.innerHTML = "Move your mouse over a square and click to play an X or an O.";

        firstPlay = playerX;
    });  
    
    
}








   


    

    





