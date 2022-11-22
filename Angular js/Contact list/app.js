

var app = angular.module("contactApp",[]);
app.controller("mycontroller", function($scope){
    $scope.Contacts=[]; //empty array for contacts

    //add contacts
    $scope.save = function(){
        var c = {                    //objects to be added
            Id:$scope.Contacts.length + 1,
            Name:$scope.Name,
            Number:$scope.Number
        };
        if($scope.Name==null){
            alert("Please add Name ");
            ClearModel();
        }
        else if($scope.Number==null){
            alert("Please add Number");
            ClearModel();
        }
        else{
            $scope.Contacts.push(c);  //push objects to the array
        }
         
        ClearModel();  // call function for reset values
    };

    //delete data
    $scope.remove = function(cont){
        var index = $scope.Contacts.indexOf(cont); //delete the data in which index in array
        $scope.Contacts.splice(index,1); //delete data
    };

    //selected data bind to input fields for update
    $scope.bindSelectData = function(cont){
        $scope.Id=cont.id;
        $scope.Name=cont.Name;
        $scope.Number=cont.Number;
    };
    //update data
    $scope.edit = function(){
        $.grep($scope.Contacts, function(i){
            if(i.id == $scope.Id){
                i.Name=$scope.Name;
                i.Number=$scope.Number;
            }
            else{
                alert("Save changes ?");
            }
            ClearModel();  // call function for reset values
        });
    }
    
    function ClearModel(){   //function declaration for reset values
        $scope.Id= null;
        $scope.Name=null;
        $scope.Number=null;
    };
});

