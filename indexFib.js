let a = 43;

function fib(n) {
	if (n <= 2) {
		return 1;
	} else {
		return fib(n - 1) + fib(n - 2);
	}
}

console.log("fib1 : " + fib(a));

function fib2(x, prevValues = []) {
	if (prevValues[x] != null) {
		return prevValues[x];
	}

	let result;
	if (x <= 2) {
		result = 1;
	} else {
		result = fib2(x - 1, prevValues) + fib2(x - 2, prevValues);
	}
	prevValues[x] = result;
	return result;
}

console.log("fib2 : " + fib2(a));
