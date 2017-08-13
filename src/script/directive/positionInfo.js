'use strict';
angular.module('app').directive('appPositionInfo',[function(){
    return {
        retsrict:'A',
        replace:true,
        templateUrl:'view/template/positionInfo.html',
        scope:{
            isActive:'='
        },
        link:function($scope,element,attr){
            $scope.imagePath = $scope.isActive ? 'image/star-active.png':'image/star.png'
        }
    }
}]);