/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
	
	let y_maxes = [];
	let x_maxes = [];
	
	let max_x = 0;
	let max_y = 0;
	
	// get all max heights from one direction
	for (let y = 0; y < grid.length; y++) {
	
		max_x = 0;
		max_y = 0;
		
		for (let x = 0; x < grid[0].length; x++) {
			max_x = Math.max(max_x, grid[y][x]);
			max_y = Math.max(max_y, grid[x][y]);
		}
		
		x_maxes.push(max_x);
		y_maxes.push(max_y);
	}
	
	// add up all the building floors that can be increased without affecting the skyline
	let ret = 0;	
	for (let x = 0; x < grid[0].length; x++) {
		for (let y = 0; y < grid.length; y++) {
			ret += Math.min(y_maxes[x], x_maxes[y]) - grid[y][x];
		}
	}
	
	return ret;
};


var test = function(input) {
	console.log( maxIncreaseKeepingSkyline(input));
}

test(
[ [3, 0, 8, 4], 
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] ]
);