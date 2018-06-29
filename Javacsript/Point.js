class Point
{
	constructor(x,y) 
	{
		this.x = x;
		this.y = y;
	}
	calculateDistance(p)
	{
		var t1 = this.x - p.x;
		var t2 = this.y - p.y;
		var result =  Math.sqrt((t1 * t1 )+(t2 * t2));
		return result;
	}
}