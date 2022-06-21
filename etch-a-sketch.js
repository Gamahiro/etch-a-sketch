const container = document.getElementById("container");


let xGrid = 5;
let yGrid = 5;



let boxSize = xGrid * yGrid;

function createGridBox() {
    container.style.width = "" + xGrid + "vw";
    container.style.height = "" + yGrid + "vw";
    container.style.gridTemplateColumns = "repeat(" + xGrid + ", 1fr)";
    container.style.gridTemplateRows= "repeat(" + yGrid + ", 1fr)";


    for(i = 0; i < boxSize; i++) {


        const gridbox = document.createElement('div');
        gridbox.className="gridElement";
        container.appendChild(gridbox);

    }

}


createGridBox();