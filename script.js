document.querySelector("#pyramidButton").addEventListener("click", determineHeightAndThenDrawPyramid);

function determineHeightAndThenDrawPyramid() {
    
    const height = parseInt(document.getElementById("height").value);
    
    
    document.getElementById("pyramid").innerHTML = "";

    
    createPyramid(height);
}

function createPyramid(height) {
    const pyramidDiv = document.getElementById("pyramid");

    for (let row = 1; row <= height; row++) {
        let numOfSpaces = height - row;  
        let numOfHash = row;  

        
        let rowStr = " ".repeat(numOfSpaces) + "#".repeat(numOfHash);  

        
        const lineElement = document.createElement("p");
        lineElement.style.whiteSpace = "pre";  
        lineElement.textContent = rowStr;  
        pyramidDiv.appendChild(lineElement); 
    }
}