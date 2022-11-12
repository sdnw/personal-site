// Write a function that takes 4 parameters as input. 
// The first one is the dimension 'a' of a 2-dimensional grid (a*a), 
// the second one is the x coordinates of the starting point, 
// third one are the y coordinates of the starting point and 
// the fourth is a string of characters from this set: {'U','D','L','R'}. 
// Each character represents Up, Down, Left, Right. 
// The function should return the coordinates of the location where the cursor would be if you applied the movements represented in the string.
//  Assumption: The grid is cylindrical, i.e. it wraps around on the left/right edge but not on the up down edges. 
//  If the next move would take the cursor out of the grid (i.e. top or bottom), then the move should be skipped. 
//  Tests: Input: (3, 0, 0,"RDD") Output: [2,1] Input: (3, 1, 0, "LLUU") Output: [0,1]


function netBeez(a, x, y, s) {
  let result = [x, y];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "U") {
      if (result[1] !== 0) {
        result[1] = result[1] - 1;
      }
    } else if (s[i] === "D") {
      if (result[1] !== a - 1) {
        result[1] = result[1] + 1;
      }
    } else if (s[i] === "L") {
      if (result[0] === 0) {
        result[0] = a - 1;
      } else {
        result[0] = result[0] - 1;
      }
    } else if (s[i] === "R") {
      if (result[0] === a - 1) {
        result[0] = 0;
      } else {
        result[0] = result[0] + 1;
      }
    }
  }
  return result;
}
