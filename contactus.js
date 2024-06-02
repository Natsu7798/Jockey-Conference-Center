function validateForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var message = document.getElementById("message").value;
    var phone = document.getElementById("phone");
    var Email = document.getElementById("Email");

    if(name.length < 1){
        alert("Name cannot be empty !")
    }
    else if(!email.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com !")
    }
    else if(phonenumber.charAt(0) != 0){
        alert("Please retype your phone number !")
    }
    else if(message.length < 1){
        alert("Please enter your message !")
    }
    else if(!phone.checked && !Email.checked){
        alert("Please select a preferred contact method !")
    }
    else{
        alert("Thank you, your form has been succesfully submitted !")
    }
}