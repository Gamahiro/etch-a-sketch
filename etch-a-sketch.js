const container = document.getElementById("container");
const containerBorder = document.getElementById("containerBorder");
const gridbox = document.createElement('div');
const gridboxes = document.getElementsByClassName("gridElement");


let xGrid = 50;
let yGrid = 50;



let boxSize = xGrid * yGrid;

function changeContainerSize() {
    containerBorder.style.width = "" + ((xGrid  * 1.1) + 1) + "vw";
    containerBorder.style.height = "" + ((yGrid * 1.1) + 1) + "vw";
    container.style.width = "" + (xGrid  * 1.1) + "vw";
    container.style.height = "" + (yGrid * 1.1) + "vw";




}


function createGridBox() {

    changeContainerSize();
    container.style.gridTemplateColumns = "repeat(" + xGrid + ", 1vw)";
    container.style.gridTemplateRows= "repeat(" + yGrid + ", 1vw)";


    for(i = 0; i < boxSize; i++) {

        const gridbox = document.createElement('div');
        gridbox.className="gridElement";
        container.appendChild(gridbox);

        
    }
    
   
    
}


createGridBox();
