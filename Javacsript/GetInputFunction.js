function getInput()
{
	var x1 = parseFloat(document.getElementById("x1").value);		
	var y1 = parseFloat(document.getElementById("y1").value);
	var x2 = parseFloat(document.getElementById("x2").value);
	var y2 = parseFloat(document.getElementById("y2").value);
	var p1 = new Point(x1,y1);
	var p2 = new Point(x2,y2);
   	var p3 = p1.calculateDistance(p2);
	document.getElementById("distance").value = p3;
}