'use strict';
angular.module('app').controller('mainCtrl',['$scope',function($scope){
    $scope.list= [
        {
            id:'1',
            name:'web前端',
            imgSrc:'',
            companyName:'众信旅游',
            city:'北京',
            industry:'互联网',
            time:'2017-08-12'
        },{
            id:'2',
            name:'java高级',
            imgSrc:'',
            companyName:'途牛旅游',
            city:'北京',
            industry:'互联网',
            time:'2017-08-12'
        }
    ]
}])