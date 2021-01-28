function checkLength (data,len) {
    return data.length >=len?true:false;
}

function comapre(val1,val2) {
    return val1 === val2 
}

function comapreWithCase(val1,val2) {
    return val1.toLowerCase() === val2.toLowerCase()
}

function checkEmail(email) {

}

function aphaNum(val) {

}

function valFName() {
    fname = document.getElementById("firstName").value;
    if(checkLength(fname,3))
        return true;
    return false;    
}

function valLName() {
    lname = document.getElementById("lastName").value;
    if(checkLength(fname,3))
        return true;
    return false;
}

function checkPassword() {
    password = document.getElementById("password").value;
    if(checkLength(password,6))
        return true;
    return false;
}

function confirmPass() {
    var password = document.getElementById("password").value;
    var Cpassword = document.getElementById("Cpassword").value;
    if(comapre(password,Cpassword))
        return true;
    return false;
}
