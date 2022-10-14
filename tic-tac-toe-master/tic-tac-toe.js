const emptyBox = [null, null, null, null, null, null, null, null, null]
const playerX = "X";
const playerO = "O";
let firstPlay = playerX;

//Excercise 1
window.onload = function(){   
    for (var n = 3; n <= 11; n++) {
        document.getElementsByTagName("div")[n].setAttribute("id", n);
        let box1 = document.getElementById(n);
        box1.classList.add("square"); 
    }
    

    // gameBoxes.forEach(box => {
    //     box.addEventListener("click", forClick, {once : true})
    //     console.log(box);
    
    // })
    
   

//Excercise 2
    const gameBoxes = Array.from(document.querySelectorAll(".square"));
    console.log(gameBoxes);

    gameBoxes.forEach(box => {
        box.addEventListener("click", forClick)
    });
    // const boards = Array(gameBoxes.length);
    // boards.fill(null);
    
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

    





