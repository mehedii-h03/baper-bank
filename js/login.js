document.getElementById("btn-submit").addEventListener("click", function(){

     const emailField = document.getElementById("user-email");
     const email = emailField.value;

     const passwordField = document.getElementById("user-password");
     const password = passwordField.value;
     
     if(email == "hello@gmail.com" && password == 123){
        // window.open("../bank.html", "_self" )
        window.location.href = "bank.html";
     }
     else{
        alert("Wrong Password or gmail.")
     }
})