var app = angular.module("studentapp",[]);
app.controller("studentCtrl", function($scope) {

    $scope.students =
        [
        {  name : 'Aayush',
            subjects : [
            {name : 'Core Java', marks :70},
            {name : 'Servlets', marks :80},
            {name : 'Spring MVC', marks :65}
            ],
            total : function(){ 
                sum = 0;
                for(i = 0; i<$scope.students[0].subjects.length; i++){
                    sum = sum + $scope.students[0].subjects[i].marks; 
                }
                return sum; 
            },

            average :function(){
                var avg = $scope.students[0].total() / $scope.students[0].subjects.length;
                return avg;
            }

        },

        {  name : 'Aman',
            subjects : [
            {name : 'Core Java', marks :75},
            {name : 'Servlets', marks :85},
            {name : 'Spring MVC', marks :60}
            ],
            total : function(){ 
                sum = 0;
                for(i = 0; i<$scope.students[1].subjects.length; i++){
                    sum = sum + $scope.students[1].subjects[i].marks; 
                }
                return sum; 
            },
            average :function(){
                var avg = $scope.students[1].total() / $scope.students[0].subjects.length;
                return avg;
            }
        }];

        $scope.compare = function(){
            var avg1 = $scope.students[0].average();
            var avg2 = $scope.students[1].average();
            if(avg1>avg2){
                return avg1;
            }
            else{
                return avg2;
            }
        }
    
});




