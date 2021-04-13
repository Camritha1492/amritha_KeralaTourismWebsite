function nonEmptyLogin(){
    let email = document.getElementById("exampleInputEmail1");
    let password = document.getElementById("exampleInputPassword1");

    if(email.value.trim()=="")
    {
        alert("Email cannot be empty");
        //email.style.border="3px solid red;";
        return false;
    }
    else if(password.value.trim()=="")
    {
        alert("Password cannot be empty");
        //password.style.border = "3px solid red;";
        return false;
    }
    else if(!checkEmailFormat(email))
    {
        return false;
    }
    else if(!checkPasswordLength(password))
    {
        return false;
    }
    return true;
}

function checkEmailFormat(email){
    //let email = document.getElementById("exampleInputEmail1");
    let regex = /^([A-Za-z0-9\.\*\&\%\#\ \_\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(\.[a-z]{2,3}?)$/;

    if(!regex.test(email.value.trim()))
    {
        alert("Email not as per recommended formats");
        return false;
    }

    return true;
}

function checkPasswordLength(password){
 if((password.value.length >= 8) && (password.value.length <= 16))  
 {
     return true
 }
 else
 {
     alert("Password does not match the expectations");
 }
 return false;
}

function checkPhoneFormat(PhoneNumber)
{
    let regexp = /^([0-9]{3})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(!regexp.test(PhoneNumber.value))
    {
        alert("Phone number length not valid");
        return false;
    }

return true;
}

function checkPasswordFormat(password)
{
    let passreg = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*_|><])(?=.*[A-Z]).{8,16}$/;
   
    if(passreg.test(password.value.trim()))
    {
        return true;
    }
    else{
        return false;
    }
}

function ShowPwdStrength()
{
    let passreg = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*_|><])(?=.*[A-Z]).{8,16}$/;
    let weakReg = /^(?=.*[a-z])(?=.*[A-Z]).{1,12}$/;
    let slightlystrong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$/;
    let stronger = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*_|><])(?=.*[A-Z]).{4,16}$/;

   // let meter = document.getElementById("password-strength-meter");
    let para = document.getElementById("password-strength-text");
    let password = document.getElementById("inputPassword4");
   //meter.setAttribute("hidden", "false");
   if(weakReg.test(password.value.trim()))
    {
        console.log("Weak");
        para.innerText = "Weak";
        // meter.value = "1";
        // meter.style.background = "red";
        // meter[value="1"]::-webkit-meter-optimum-value { background: red; }
        // meter[value="1"]::-moz-meter-bar { background: red; }
    }
    else if(slightlystrong.test(password.value.trim()))
    {
        console.log("Slightly better");
        para.innerText = "Slighly better; You can do much better";
        // meter.value = "2";
        // meter[value="2"]::-webkit-meter-optimum-value { background: yellow; }
        // meter[value="2"]::-moz-meter-bar { background: yellow; }
    }
    else if(stronger.test(password.value.trim()))
    {
        console.log("Stronger");
        para.innerText = "Stronger; You can do better";
        // meter.value = "3";
        // meter[value="3"]::-webkit-meter-optimum-value { background: orange; }
        // meter[value="3"]::-moz-meter-bar { background: orange; }
    }
    else if(passreg.test(password.value.trim()))
    {
        console.log("Strongest");
        para.innerText = "Strongest! You did it";
        // meter.value = "4";
        // meter[value="4"]::-webkit-meter-optimum-value { background: green; }
        // meter[value="4"]::-moz-meter-bar { background: green; }
    }
}


function nonEmptySignup(){
    email = document.getElementById("inputEmail4");
    password = document.getElementById("inputPassword4");
    inputAddress = document.getElementById("inputAddress");
    inputAddress2 = document.getElementById("inputAddress2");
    inputCity = document.getElementById("inputCity");
    inputZip = document.getElementById("inputZip");
    PhoneNumber = document.getElementById("PhoneNumber");
   
    if(email.value==""||password.value=="" || PhoneNumber.value=="" || inputAddress.value==""||inputAddress2.value==""||inputCity==""||inputZip=="")
    {
        alert("Fields cannot be empty");
        return false;
    }
    else if(!checkEmailFormat(email))
    {
        return false;
    }
    else if(!checkPasswordFormat(password))
    {
        return false;
    }
    else if(!checkPhoneFormat(PhoneNumber))
    {
        return false;
    }   

    return true;
}