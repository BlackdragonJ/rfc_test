function validarlogin(){
	
	var usr = "123456"; //cualquier corp, es temporal esta config 
	var psw = "12345"; //cualquier password, es temporal esta config

	if (document.loginform.username.value==usr && document.loginform.pass.value==psw) {
		
		window.location = 
		"./RFC_Project/src/home.html";
		return false; 
	}else{
	
		window.alert("El usuario o contraseña no coinciden, por favor intente de nuevo...")
	
	}

}
