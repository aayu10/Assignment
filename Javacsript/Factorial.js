function factorial(n)
{
	var factorial = 1;
	for (var i = 1; i <= n; i++)
    {
    	factorial *= i;
    }
    return factorial;
}

function computeFactorial()
{
	var n = document.getElementById("n").value;
	var result = factorial(n);
	document.getElementById("fact").value = result; 
}