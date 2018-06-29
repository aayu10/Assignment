var interest = (a,b,c=2) => {
	return (a*b*c)/100;
}
console.log(interest(10000,2))
console.log(interest(10000,2,3))