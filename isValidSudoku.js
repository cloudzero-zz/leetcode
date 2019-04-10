/**
 * @param {character[][]} board
 * @return {boolean}
 */

var check_flags = function(board, x, y, flags, found_tag) {
    let box_value = board[y][x];
    if (box_value == ".") return true;

    let flag_value = flags[box_value];                
    if (flag_value == found_tag) {
        return false;
    }

    flags[box_value] = found_tag;
    return true;
};

var isValidSudoku = function(board) {
    let flags = [0,0,0,0,0,0,0,0,0];
    let found_tag = 0;
    
    // check 3x3    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {            
            found_tag++;            
            for (let index = 0; index < 9; index++) {
                let value = index + 1;
                let x = index % 3;
                let y = Math.floor(index / 3);
                let xboard = i * 3 + x;
                let yboard = j * 3 + y;                
                if (!check_flags(board, xboard, yboard, flags, found_tag)) {
                    return false;
                }
            }
        }
    }
    
    //check horizontal
    for (let y = 0; y < 9; y++) {
        found_tag++
        for (let x = 0; x < 9; x++) {            
            if (!check_flags(board, x, y, flags, found_tag)) {
                return false;
            }
        }    
    }
    
    //check vertical
    for (let x = 0; x < 9; x++) {            
        found_tag++
        for (let y = 0; y < 9; y++) {
            if (!check_flags(board, x, y, flags, found_tag))  {
                return false;
            }
        }    
    }
    
    return true;
};