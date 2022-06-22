const container = document.getElementById("container");
const containerBorder = document.getElementById("containerBorder");
const gridbox = document.createElement('div');
const gridboxes = document.getElementsByClassName("gridElement");


let xGrid = 5;
let yGrid = 5;



let boxSize = xGrid * yGrid;

function changeContainerSize(xAmount, yAmount) {
    containerBorder.style.width = "" + ((xAmount  * 1.1) + 1) + "vw";
    containerBorder.style.height = "" + ((yAmount * 1.1) + 1) + "vw";
    container.style.width = "" + (xAmount  * 1.1) + "vw";
    container.style.height = "" + (yAmount * 1.1) + "vw";

}

function listenGridbox() {
    for (let i = 0; i < gridboxes.length; i++) {
        gridboxes[i].addEventListener("mouseover", () => {
            gridboxes[i].style.backgroundColor = "blue";
            console.log(gridboxes[i].className +" " + i);
        });
    }
}

//creates columns and rows based on x and y axis, also runs a for loop to create divs (x * y) times
function createGridBox(xAmount, yAmount) {

    xAmount = prompt("Define box size (1 = 1x1)");
    yAmount = xAmount;

    changeContainerSize(xAmount, yAmount);
    container.style.gridTemplateColumns = "repeat(" + xAmount + ", 1vw)";
    container.style.gridTemplateRows= "repeat(" + yAmount + ", 1vw)";


    for(let i = 0; i < (xAmount * yAmount); i++) {

        const gridbox = document.createElement('div');
        gridbox.className="gridElement";
        container.appendChild(gridbox); 
            
    }   
    listenGridbox();
   
}

function removeGridBox() {
    console.log(gridboxes)
    for (let i = gridboxes.length - 1; gridboxes.length > 0; i--) {
        console.log(gridboxes + " " + i);
        container.removeChild(gridboxes[i]);
    }
}



createGridBox(xGrid, yGrid);



function initiateEtch() {
//remove gridboxes
removeGridBox();
createGridBox();









}