// Get the canvas element by its ID
const canvas = document.getElementById("myCanvas");
// Get the 2D rendering context
const ctx = canvas.getContext("2d");

// --- Grid Parameters ---
const cellWidth = 50;
const numRows = 5;
const numCols = 5;
const lineWidth = 1;
const gridColor = "black"; 

// Set the canvas width and height based on the parameters
canvas.width = cellWidth * numCols;
canvas.height = cellWidth * numRows;

/**
* Draws a grid on the canvas.
*/
function drawGrid(ctx, cellWidth, numRows, numCols, color, width) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
}

// Draw vertical lines
    for (let x = 0; x <= numCols * cellWidth; x += cellWidth) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, numRows * cellWidth);
        ctx.stroke();

// Draw horizontal lines
    for (let y = 0; y <= numRows * cellWidth; y += cellWidth) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(numCols * cellWidth, y);
        ctx.stroke();
        }
    }

// Draw the grid using the specified parameters
drawGrid(ctx, cellWidth, numRows, numCols, gridColor, lineWidth);


