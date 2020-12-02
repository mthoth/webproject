
function ConfrimPassword(){

  var pass= document.getElementById("psswrd");
  var confirmpass= document.getElementById("cnfrmpass");


 if( pass.value != confirmpass.value){


    document.getElementById("message").innerHTML="*Passwords do not match";
    confirmpass.value="";
    event.preventDefault();

}
}
