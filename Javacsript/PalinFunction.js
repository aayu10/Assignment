function palinFunction()
{
	var a, number, b, temp=0;
	number = document.getElementById("n").value;
	b=number;
	while(number>0)
	{
		a=number%10;
		number=parseInt(number/10);
		temp=temp*10+a;
	}
	if(temp==b)
	{
		alert("Palindrome number");
	}
	else
	{
		alert("Not Palindrome number");
	}
}