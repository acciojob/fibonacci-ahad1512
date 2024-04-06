function fibonacci(num) {
// your code here
	let first =0;
	let second =1;
	let term =0;
	if (num===1) {
		return 0;
	}
	if (num===2) {
		return 1;
	}
	for (let i = 1; i < num-1; i++) {
		term = first+second;
		first=second;
		second= term;
	}
	 return term;
}

module.exports = fibonacci;
