//
function amoebaFilling(n, q, b1) {
	let sumaryAmoeba = b1 + 1;
	for (let i = b1; i < n; i++) {
		sumaryAmoeba *= q; 
	}

	let secondAmoeba = 8;
	let timeAmoebaFilling = 0;

	do {
		timeAmoebaFilling +=1;
		secondAmoeba *=q; 
	} while(primarisAmebius <= sumaryAmoeba)

	return timeAmoebaFilling
}

console.log(amoebaFilling(60, 2, 1))