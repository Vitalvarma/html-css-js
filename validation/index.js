

document.getElementById("button").onclick = function(){

    let fullname = document.getElementById("fullName").value;

    if(fullname.length<5){
        alert("Enter your name greaterthan 5 characters");          
    } 
    let phnnumber = document.getElementById("phoneNum").value;

    if(phnnumber.length!=10){
        alert("Enter valid phone number")     
    }
    let password = document.getElementById("pwd").value;

    let confirmpassword = document.getElementById("confirmpwd").value;
    
    if(password!=confirmpassword || password==fullname || password.length<8){
        alert("Confirm password must match password and it must be strong")
    } 
}

