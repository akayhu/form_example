$(function(){

	var formObj = formObj || {};

	formObj = ( function() {

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
				button = {
					submit: $(".submit")
				},
				errorMessage = {
					error_username: "✕ 請輸入姓名",
					error_email1: "✕ 請輸入Email",
					error_email2: "✕ Email格式錯誤",
					error_password: "✕ 請輸入密碼",
					error_re_password1: "✕ 請輸入再次確認密碼",
					error_re_password2: "✕ 與密碼不一致，請重新輸入"
				};

		var submit = function(){
					var data = {
						username: $inputName.username.val(),
						email: $inputName.email.val(),
						password: $inputName.password.val()
					};
					console.log( '送出', data );
				},

				showError = function( showTag, showMessage ){
					showTag.html( showMessage );
				},

				hideError = function( hideTag ){
					hideTag.html('');
				},

				DOMOperating = function(){

					button.submit.click( function() {

						var reg = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

						// username
						if( !inputName.username.val() ){
							showError( errorDiv.username, errorMessage.error_username );
						} else {
							hideError( errorDiv.username );
							constructor.username = true;
						}
						
						// email
						if( !inputName.email.val() ) {
							showError( errorDiv.email, errorMessage.error_email1 );
						} else if( !reg.test( inputName.email.val() ) ) {
							showError( errorDiv.email, errorMessage.error_email2 );
						} else {
							hideError( errorDiv.email );
							constructor.email = true;
						}

						// password
						if( !inputName.password.val() ){
							showError( errorDiv.password, errorMessage.error_password );
						} else {
							hideError( errorDiv.password );
							constructor.password = true;
						}

						// re_password
						if( !inputName.re_password.val() ) {
							showError( errorDiv.re_password, errorMessage.error_re_password1 );
						} else if( inputName.password.val() !== inputName.re_password.val() ) {
							showError( errorDiv.re_password, errorMessage.error_re_password2 );
						} else {
							hideError( errorDiv.re_password );
							constructor.re_password = true;
						}

						console.log( 'constructor', constructor );
						if( constructor.username && constructor.email && constructor.password && constructor.re_password ) {
							submit();
						}

					});

				};

		return {

			DOMOperating: DOMOperating

		}

	})();

	formObj.DOMOperating();

});