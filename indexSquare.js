// volontairement inefficace formule de calcul pour montrer l'interet du prevValues

let a = 10101;

// function square(n) {
// 	let result = 0;
// 	for (let i = 1; i <= n; i++) {
// 		for (let j = 1; j <= n; j++) {
// 			result += 1;
// 		}
// 	}
// 	return result;
// }

// console.log("s1 : " + square(a));
// console.log("s1 : " + square(a));

const prevValues = [];

function square2(x) {
	if (prevValues[x] != null) {
		return prevValues;
	}
	let result = 0;
	for (let i = 1; i <= x; i++) {
		for (let j = 1; j <= x; j++) {
			result += 1;
		}
	}
	prevValues[x] = result;
	return result;
}

console.log("s2 : " + square2(a));
console.log(square2(a));
// console.log("s2 : " + square2(a));
// console.log("s2 : " + square2(a));
