function checkBrackets(str) {
	if(typeof str !== "string") {
		return -1;
	}
	let number = 0;
	let result = 0;
	let flag = false;
	for(let i = 0; i < str.length; i++) {
		if(str[i] === '(') {
			number++;
			flag = true;
		}
		if(str[i] === ')') {
			if(number)
				number--;
			else
				result++;
			flag = true;
		}
	}
	if(!flag)
		return -1;
	return number + result;
}
