/**
 * @param {string} str
 * @return {number}
 */

var myAtoi = function(str) {
	let value = 0;
	let sign = 1;
	let started = false;
	
    for (let i = 0; i < str.length; i++) {
	
		let char_code = str.charCodeAt(i);		
		
		if (!started) {
			if (char_code == 32) {  // ignore sapces
				continue;
			}
			
			if (char_code == 43) {  // positive sign, expect numbers next
				started = true;
				continue;
			}
			
			if (char_code == 45) {  // negative sign, expect numbers next
				sign = -1;
				started = true;
				continue;
			}
		}
		
		char_code -= 48; // convert number character codes to numbers
        
		let valid_num = char_code <= 9 && char_code >= 0; // single digits only
		
		if (!valid_num) break; 
		
		if (valid_num) {
			started = true;
			value = value * 10 + char_code;
		}
	}
	
	value = value * sign; // signed number
	
    // much bigger number limits on javascript, satisfying test cases
	if (value < -2147483648) {
		value = -2147483648;
	} else if (value > 2147483647) {
		value = 2147483647;
	}
	
	return value;
};