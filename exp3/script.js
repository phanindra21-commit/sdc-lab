function validateForm(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if(username.trim() === ""){
    alert("Username cannot be empty");
    return false;
}

if(password.length < 6){
    alert("Password must be at least 6 characters");
    return false;
}
//Username and Password
alert("Login successful");
return true;

}