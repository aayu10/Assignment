var pow = (a,b) => {
	var result =1;
	for(var i =1; i<=b; i++){
		result *= a;
	}
	return result;
}
console.log(pow(5,2))