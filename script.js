function fibonacci(num) {
// your code here
	let first =0;
	let second =1;
	let term =0;
	for (let i = 1; i < num; i++) {
		term+=first+second;
		first=second;
		second= term;
	}
	 return term;
}

module.exports = fibonacci;
