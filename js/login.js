function loginvalidation(){

    var savedemail = localStorage.getItem("Email");
    var savedpassword= localStorage.getItem("Password");
    var enteredemail = document.getElementById("loginemail");
    var enteredpassword=document.getElementById("loginpswd");
    // var loginbutton =document.getElementById("lbtn");
    // var enteredemail = document.forms ["loginform"] ["loginemail"].value;
    // var enteredpassword =document.forms ["loginform"] ["loginpswd"].value; 

    if(enteredemail.value == savedemail && enteredpassword.value == savedpassword)
    {
        alert("successfully login");
        window.location.href="welcome.html";
        
    }
    else{
        alert("invalid");
    }
    

}