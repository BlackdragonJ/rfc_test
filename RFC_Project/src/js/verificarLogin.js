function validarlogin(){
	
	var usr = "62079";
	var psw = "Viejosabroso"; 

	if (document.loginform.username.value==usr && document.loginform.pass.value==psw) {
		
		window.location = 
		"file:///C:/Users/62079/Documents/SegTI_Ciberseguridad/RFC_Project/src/home.html";
		return false; 
	}else{
	
		window.alert("El usuario o contraseña no coinciden, por favor intente de nuevo...")
	
	}

}