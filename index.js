var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');

function auth(){

    var number = '+82' + document.querySelector('input').value;
  
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
        console.log('문자 전송 성공');
        

        var 
            code = prompt('인증 번호를 입력해주세요', '');

        
        if(code === null) return;

        
        e.confirm(code).then(function (result) {
            console.log('인증 성공', result.user);
            
        }).catch(function (error) {
            console.error('인증 실패', error);
            
        });

    })
    .catch(function (error) {
        console.error('문자 전송 실패', error);

    });
  
}