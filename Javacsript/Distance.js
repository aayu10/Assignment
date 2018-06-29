class Distance
{
	constructor(x,y) 
	{
		this.x = x;
		this.y = y;
	}
	calculateDistance(d)
	{
		var distance  = new Distance(0,0);
		distance.x = this.x - d.x;
		distance.y = this.y - d.y;
		return Math.sqrt((distance.x*distance.x)+(distance.y*distance.y));
	}
}