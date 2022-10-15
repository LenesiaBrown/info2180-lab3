const emptyBox = [null, null, null, null, null, null, null, null, null]
const playerX = "X"; //document.getElementsByTagName(".square.X");
const playerO = "O";
let firstPlay = playerX;
const boardsss = document.getElementById("board");
//let playeroturn = false;

//Excercise 1
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
    
   

//Excercise 2
    const gameBoxes = Array.from(document.querySelectorAll(".square"));
    console.log(gameBoxes);

    gameBoxes.forEach(box => {
        box.addEventListener("click", forClick)
    });   

    
}


// Come back to later!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    function forClick(c) {
        const tile = c.target.id;
        //console.log(id);
        if (!emptyBox[tile]) {
            emptyBox[tile] = firstPlay;
            c.target.innerText = firstPlay;
            firstPlay = firstPlay === playerX ? playerO : playerX
        }
    };

    





