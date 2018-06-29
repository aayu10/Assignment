var varArg = (...args) => {
	var sum = 0;
	for(var i = 0; i<args.length;i++)
	{
		sum += args[i];
	}
	return sum;
}
console.log(varArg(2, 2, 10))