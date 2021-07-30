export const findClick = function(e) {

    let rect = e.target.getBoundingClientRect();
    let width = rect.width;
    let height = rect.height;
    let cardHeight = height / 3;
    let cardWidth = width / 3;

    let clickLoc = {
      
      x: Math.floor(Math.abs((e.clientX - rect.left))/cardWidth),
      y: Math.floor(Math.abs((e.clientY - rect.top))/cardHeight)
      
    }
    debugger
    console.log(`clickLoc: ${clickLoc}`);
 
    console.log(`[rect.left, rect.top]: ${[e.offsetX, e.offsetY]}`);

    debugger
    window.puzzle.switchCards(clickLoc);
}