class Temprature
{
    constructor(t){
        this.t=t;
    }
    
    convertToCelcius(){
        var celcius = new Temprature(0)
        celcius = (this.t -32)*(5/9);
        return celcius;
    }
    convertToFarenheit(){
        var far = new Temprature(0);
        far = (this.t *1.8)+32;
        return far;
    }
 
}
// module.exports.convertToCelcius = convertToCelcius;
// module.exports.convertToFarenheit = convertToFarenheit;
module.exports.Temprature = Temprature;