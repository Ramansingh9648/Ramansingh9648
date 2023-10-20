

let useremail = document.querySelector(".useremail");
let userpass = document.querySelector(".userpass");
let login = document.querySelector(".loginbtn");

let signin = [`"Email = ${useremail}", "Password = ${userpass}"` ];

login.addEventListener("click", () =>{
    alert(`Your user Email ID is ${useremail.value} and pass is ${userpass.value}.`);
});



