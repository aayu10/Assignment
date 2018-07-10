var app = angular.module("studentapp",[]);
app.controller("studentCtrl", function($scope) {
    $scope.student ={
        name : 'Aman',
        subjects : [
            {name : 'Core Java', marks :70},
            {name : 'Servlets', marks :80},
            {name : 'Spring MVC', marks :65}
        ],
        total : function(){ 
        sum = 0; 
        for(i = 0; i<$scope.student.subjects.length; i++){
            sum = sum + $scope.student.subjects[i].marks; 
        }
        return sum; 
    },
    average :function(){
        return $scope.student.total() / $scope.student.subjects.length;
        }
    };
});