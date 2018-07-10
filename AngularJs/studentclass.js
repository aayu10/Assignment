class Student 
{
	constructor(marks[]){
		this.marks[]=marks[];
		
	}
	total(){
		var sum = 0;
		for(i = 0; i<$scope.students[1].subjects.length; i++){
			sum = sum + $scope.students[1].subjects[i].marks; 
		}
		return sum; 
   		}
   		average(){
    	var avg = $scope.students[1].total() / $scope.students[0].subjects.length;
    	return avg;
	}
}