$(function(){

  var formObj = formObj || {};

  formObj = ( function($) {

    $constructor = {};

    $inputName = {
      username: $("#username"),
      email: $("#email"),
      password: $("#password"),
      re_password: $("#re_password")
    };

    $error_message = {
      username: $("#error_message_username"),
      email: $("#error_message_email"),
      password: $("#error_message_password"),
      re_password: $("#error_message_re_password")
    };

    $button = {
      submit: $(".submit")
    };

    return {

      init: function(){
        console.log("555");
      }

    }

  })(jQuery);

  formObj.init();

});