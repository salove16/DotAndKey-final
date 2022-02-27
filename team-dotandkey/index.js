import { navBar,navInt,navcar } from "./Componentes/navBar.js";
import { footer } from "./Componentes/footer.js";

document.querySelector("#navbar").innerHTML = navBar();
document.querySelector("#footer").innerHTML = footer();
document.querySelector("#navInterval").innerHTML = navInt();
let i=0;
navcar(i);
document.querySelector("#user").addEventListener("click",()=>{
    location.href="login.html"
});

document.querySelector("#leftNav > img ").addEventListener("click",()=>{
    location.href = "index.html";
});
cartBag
document.querySelector("#cartBag ").addEventListener("click",()=>{
    location.href = "cart.html";
});

let status = JSON.parse(localStorage.getItem("loginData"));
console.log("status",status)
if(status == false){
   document.querySelector("#Sign_Out").textContent = "Sign Out"
 }

 document.querySelector("#Sign_Out").addEventListener("click",()=>{
        localStorage.setItem("loginData",true);
        document.querySelector("#Sign_Out").textContent = ""
        alert("Signed Out Successfully");
 });

import touch from "./Componentes/touch.js";
let touchslide=document.querySelector("#touch_sld");
touchslide.innerHTML=touch();

import reviews from "./Componentes/touchslider.js";
 let customer = document.querySelector("#customer_reviews");
 customer.innerHTML=reviews();

 document.querySelector("#cards>div:nth-child(1)").addEventListener("click",()=>{
     location.href="bodyCare.html";
 })
 document.querySelector("#cards>div:nth-child(2)").addEventListener("click",()=>{
    location.href="hairCare.html";
})
document.querySelector("#cards>div:nth-child(3)").addEventListener("click",()=>{
    location.href="nutrition.html";
})
document.querySelector("#cards>div:nth-child(4)").addEventListener("click",()=>{
    location.href="serum.html";
})
document.querySelector("#cards>div:nth-child(5)").addEventListener("click",()=>{
    location.href="moisturizer.html";
})
