function validation(){
    // var email =document.forms ["regform"] ["useremail"].value;
    // var password =document.forms ["regform"] ["pswd"].value;
    var email =document.getElementById("useremail").value;
    var password =document.getElementById("pswd").value;
    var fName= document.getElementById("fname").value;
    var lName= document.getElementById("lname").value;
    if(fName.length==0)
    {
        alert("Enter first name");
        return false;
    }
    if(lName.length==0)
    {
        alert("Enter last name");
        return false;
    }

    if(email.length>30)
    {
        alert("plz shorten email");
        return false;
    }
    if (email.length==0)
    {
        alert("plz enter your email");
        return false;
    }
    if(password.length==0){
        alert("Password cannot be null");
        return false;
    }
     if(password.length<8){
         alert("pasword must be of 8 character");
         return false;
     }
     var number = /[0-9]/g;
     if(!password.match(number)){
        alert('atleast 1 number');
        return false;
     }
     var uppercase =/[A-Z]/g;
     if(!password.match(uppercase)){
        alert('atleast 1 uppercase');
        return false;
     }
     var lowercase = /[a-z]/g;
     if(!password.match(uppercase)){
        alert('atleast 1 lowercase');
        return false;
        
     }
     
     else{
         localStorage.setItem("Email",email);
         localStorage.setItem("Password",password);
         

         alert("successfully register");
     };
}

