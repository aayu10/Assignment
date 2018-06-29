function AddResults(value){
    sum = sum+value;
}

var sum =0;
var a = [1, 2, 3];
a.forEach(AddResults);
console.log(sum);