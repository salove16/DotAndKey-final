import { footer } from "./Componentes/footer.js";
document.querySelector("#footer").innerHTML = footer();
import { navBar, navInt, navcar } from "./Componentes/navBar.js";
document.querySelector("#navInterval").innerHTML = navInt();
let i = 0;
navcar(i);
document.querySelector("#navbar").innerHTML = navBar();
let btn = document.getElementById("button1");
btn.onclick = async (event)=>{
    event.preventDefault();
  
    let register_data = {
        name : "Anannya!",
        email: document.querySelector("#name").value,
        password: document.querySelector("#password").value,
        username: document.querySelector("#email").value,
        mobile: document.querySelector("#last_name").value,
        description: "Anannya"
    };

    register_data = JSON.stringify(register_data);
    try {
        let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
            method: "POST",
            body: register_data,
            headers : {
                "Content-Type" : "application/json",
            },
        });
        let data = await res.json();
         console.log(data.error);
         if(data.error == false){
             alert("Account Sreated Successfully");
             window.location.href="login.html";
         }else{
            alert("Username or password already exist!!");
         }
    } catch (error) {
        console.log(error);
        
    }
};
document.querySelector("#leftNav > img ").addEventListener("click",()=>{
    location.href = "index.html";
});
document.querySelector("#cartBag ").addEventListener("click",()=>{
    location.href = "cart.html";
});