function factorial(n)
{
	var i;
	var temp = 1;
	for (i = 1; i <= n; i++)
    {
    	temp = temp * i;
    }
    return temp;
}
function combination(n,r)
{
	var fact = factorial(n);
	var rFact = factorial(r);
	var nrFact = factorial(n-r);
	var com = (fact)/(rFact*nrFact);
	return com;
}