(function(){
    'use strict';

    var app = angular.module('app',['ui.router']);

})();


'use strict';
angular.module('app').directive('appCompany',[function(){
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
'ust strict';
angular.module('app').directive('appFooter',[function(){
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/footer.html'
    }
}]);
'use strict';
angular.module('app').directive('appHead',[function(){
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/head.html'
    }
}]);
'use strict';
angular.module('app').directive('appHeadBar',[function(){
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/headBar.html',
        scope:{
            text:'@'
        },
        link:function(scope,element,attr){
            scope.back = function(){
                window.history.back();
            }
        }
    }
}]);
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
'use strict';
angular.module('app').directive('appPositionList',[function(){
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/positionList.html',
        scope:{
            data:'='
        }
    }
}]);
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
'use strict';
angular.module('app').controller('positionCtrl',['$scope',function($scope){
    
}])
'use strict';
angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider.state('main',{
        url:'/main',
        templateUrl:'view/main.html',
        controller:'mainCtrl'
    }).state('position',{
        url:'/position/:id',
        templateUrl:'view/position.html',
        controller:'positionCtrl'
    });
    $urlRouterProvider.otherwise('main');
}]);