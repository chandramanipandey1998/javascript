var state=false;
function toggle(){
    if(state){
        document.getElementById("pswd").setAttribute("type","password");
        
        state=false;
    }
    else{
        document.getElementById("pswd").setAttribute("type","text");
        state=true;
    }

}