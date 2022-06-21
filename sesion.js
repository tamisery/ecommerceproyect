const contenido = document.querySelector(".compra");
const header = document.querySelector("#header");
const footer = document.querySelector("#footer");

const producto = [
    {
        nombre: ;
    }
]



function login(){

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('email');
    const email1 = localStorage.getItem(email1);
    const password1 = localStorage.getItem(password1);
    
    if(email==email1 && password==password1){
        localStorage.setItem("code","secret");
        window.location.href="shop.html";
    }else {
        alert("Email Invalido")
    }
    console.dir('email');

}

function signup(){

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    localStorage.setItem("name1", name)
    localStorage.setItem("email1", email)
    localStorage.setItem("pass1", pass)

   document.getElementById("name").value="";
   document.getElementById("email").value="";
   document.getElementById("pass").value="";
    
   alert("user registered successfully...!!!");
}