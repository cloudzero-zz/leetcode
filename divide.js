//
// @param {number} dividend
// @param {number} divisor
// @return {number}
//

// globe vars over block vars for less memory alloc
var prev_divs = [];		// we're gonna grow our divisor exponentially, in case dividend is huge
var prev_quos = [];		// save previous consumption multipliers, for correct consumption of dividend
var quo = 1;			// starting consumption multiplier
var negative = false;
var ret = 0;

var divide = function(dividend, divisor) {
    
    negative = false;
    
    if (dividend < 0) {
        dividend = -dividend;
        negative = !negative; // can't use multiplication
    } 
    
    if (divisor < 0) {
        divisor = -divisor;
        negative = !negative; // can't use multiplication
    }
    
    if (dividend < divisor) {	// edge case, don't do unnecessary work
        return 0;
    }
    
	ret = 0;
    
    while (divisor <= dividend || prev_divs.length) {
	
        if (divisor + divisor + divisor + divisor <= dividend) {	// NOT RECOMMENDED, but gotta beat other leetcoders in runtime
			prev_divs.push(divisor); 
			prev_quos.push(quo); 
			divisor = divisor + divisor + divisor + divisor;
			quo = quo + quo + quo + quo;
            continue;
        } 
        
        if (divisor + divisor <= dividend) {		// probably optimal for code length / and time complexity log(m/n)
			prev_divs.push(divisor); 
			prev_quos.push(quo); 
			divisor = divisor + divisor;
			quo = quo + quo;
            continue;
        }
        
        if (divisor <= dividend) {		// can't double, consume
            dividend -= divisor;
            ret += quo;
			if (dividend == 0) {
                quo = 1;
                while(prev_divs.length) { // clean global vars for next use
                    prev_divs.pop();
                    prev_quos.pop();
                }
                break;
            }
            
            continue;
        } 
        
        if (prev_divs.length) {		// too big, try smaller multipliers we saved
            divisor = prev_divs.pop();
            quo = prev_quos.pop();
			
        } else {
            
            break;
        }
    }
    
    ret = negative ? -ret : ret;	// give the correct sign, can't use multiplication
    
	// satisfy leetcode's test case of 32-bit limitation
	
    if (ret > 2147483647) ret = 2147483647;
    if (ret < -2147483648) ret = -2147483648;
    
    return ret;
};
