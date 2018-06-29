class Complex
{
	constructor(real,imaginary)
	{
		this.real = real;
		this.imaginary = imaginary;
	}
	addComplex(c)
	{
		var result  = new Complex(0,0);
		result.real = this.real + c.real;
		result.imaginary = this.imaginary + c.imaginary;
		return result;
	}
}