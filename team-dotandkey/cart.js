let cartData = JSON.parse(localStorage.getItem("cartArr"))|| [];
let sum;

total(cartData);
if (cartData.length == 0) {
  console.log("empty");
}

let cartDisplay = (array) => {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  array.forEach((el, index) => {
    let imagetd = document.createElement("td");

    let imageTdDiv = document.createElement("div");
    imageTdDiv.id = "imageTdDiv";

    let imageDiv = document.createElement("div");
    imageDiv.id = "cartimg";
    let rightDiv = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.prodImgUrl[0];

    imageDiv.append(image);

    let title = document.createElement("p");
    title.textContent = el.DispName;
    let sizeMl = document.createElement("h3");
    sizeMl.textContent = `${el.size} ml`;
    let remove = document.createElement("button");
    remove.innerText = "remove";
    remove.addEventListener("click", () => {
      removeData(array, index);
    });

    rightDiv.append(title, sizeMl, remove);

    imageTdDiv.append(imageDiv, rightDiv);

    imagetd.append(imageTdDiv);

    let qualitytd = document.createElement("td");
    let quality = document.createElement("h4");
    quality.textContent = "1";

    qualitytd.append(quality);

    let totaltd = document.createElement("td");
    let price = document.createElement("h4");
    price.textContent = `₹ ${el.price}`;

    totaltd.append(price);

    let row = document.createElement("tr");
    row.id = "row";
    row.append(imagetd, qualitytd, totaltd);

    //    document.getElementById("displayDataCart").append(tbody)

    tbody.append(row);
  });
};
cartDisplay(cartData);

function removeData(array, index) {
  array.splice(index, 1);
  localStorage.setItem("cartArr", JSON.stringify(array));
  cartDisplay(array);
  total(cartData);
}

function total(cartData) {
  //     console.log(ref)

  // console.log(refkey)
  sum = 0;
  for (let i = 0; i < cartData.length; i++) {
    sum += cartData[i].price;
  }
  // refkey.addEventListener("click",(e)=>{

  //     if(e.key=="Enter")
  //     {
  //

  //     }
  // } )

  document.getElementById("cartTotal").textContent = `₹ ${sum}`;
}
let refkey = document.getElementById("refeered");
refkey.addEventListener("keypress", (e) => {
  discount(e);
});

function discount(e) {
  let ref = document.getElementById("refeered").value;
  console.log(ref);

  if (e.key == "Enter") {
    if (ref == "masai30") {
      sum = sum - (sum * 30) / 100;
    }
  }
  console.log(sum);
  document.getElementById("cartTotal").textContent = `₹ ${sum}`;
}

let checkout = document.getElementById("checkout");
checkout.addEventListener("click", function () {
  window.location.href = "payment.html";
});
import { navBar, navInt, navcar } from "./Componentes/navBar.js";
import { footer } from "./Componentes/footer.js";
document.querySelector("#navInterval").innerHTML = navInt();
let i = 0;
navcar(i);
document.querySelector("#navbar").innerHTML = navBar();
document.querySelector("#footer").innerHTML = footer();
document.querySelector("#leftNav > img ").addEventListener("click", () => {
  location.href = "index.html";
});
document.querySelector("#cartBag ").addEventListener("click",()=>{
  location.href = "cart.html";
});
