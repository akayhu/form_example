var formObj = formObj || {};

formObj = (function(){

  var constructor = {
        username: false,
        email: false,
        password: false,
        re_password: false
      },

      inputName = {
        username: $("#username"),
        email: $("#email"),
        password: $("#password"),
        re_password: $("#re_password")
      },

      errorDiv = {
        username: $("#error_message_username"),
        email: $("#error_message_email"),
        password: $("#error_message_password"),
        re_password: $("#error_message_re_password")
      },

      errorMessage = {
        error_username: "✕ 請輸入姓名",
        error_email1: "✕ 請輸入Email",
        error_email2: "✕ Email格式錯誤",
        error_password: "✕ 請輸入密碼",
        error_re_password1: "✕ 請輸入再次確認密碼",
        error_re_password2: "✕ 與密碼不一致，請重新輸入"
      };

  var _submitData = function( dataObj ){
        var data = {
          username: dataObj.usernameVal,
          email: dataObj.emailVal,
          password: dataObj.passwordVal
        };
        console.log( '送出', data );
      },

      _showError = function( showTag, showMessage ){
        showTag.html( showMessage );
      },

      _hideError = function( hideTag ){
        hideTag.html('');
      },

      _checkValue = function(){

        var reg = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var dataObj = {
            usernameVal: inputName.username.val(),
            emailVal: inputName.email.val(),
            passwordVal: inputName.password.val(),
            re_passwordVal: inputName.re_password.val()
        };

        // username
        if( !dataObj.usernameVal ){
            _showError( errorDiv.username, errorMessage.error_username );
        } else {
            _hideError( errorDiv.username );
            constructor.username = true;
        }
        
        // email
        if( !dataObj.emailVal ) {
            _showError( errorDiv.email, errorMessage.error_email1 );
        } else if( !reg.test( emailVal ) ) {
            _showError( errorDiv.email, errorMessage.error_email2 );
        } else {
            _hideError( errorDiv.email );
            constructor.email = true;
        }

        // password
        if( !dataObj.passwordVal ){
            _showError( errorDiv.password, errorMessage.error_password );
        } else {
            _hideError( errorDiv.password );
            constructor.password = true;
        }

        // re_password
        if( !dataObj.re_passwordVal ) {
            _showError( errorDiv.re_password, errorMessage.error_re_password1 );
        } else if( dataObj.passwordVal !== dataObj.re_passwordVal ) {
            _showError( errorDiv.re_password, errorMessage.error_re_password2 );
        } else {
            _hideError( errorDiv.re_password );
            constructor.re_password = true;
        }

        console.log( 'constructor', constructor );
        if( constructor.username && constructor.email && constructor.password && constructor.re_password ) {
            _submitData( dataObj );
        }

      };

  return {

    submit: _checkValue

  };

}());


$(function(){

  var submitButton = $(".submit");

  submitButton.on( "click", function(){
    var inputName = $(this).find("input").attr("id");
    formObj.submit( inputName );
  });

});
