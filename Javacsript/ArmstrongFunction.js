function armstrongNumber()
{
	var arm=0,a,num,temp;
	num = document.getElementById("n").value;
	temp = num;
	while(temp>0)
	{
		a=temp%10;
		temp=parseInt(temp/10);
		arm=arm+a*a*a;
	}
	if(arm==num)
	{
		alert("Armstrong number");
	}
	else
	{
		alert("Not Armstrong number");
	}
}