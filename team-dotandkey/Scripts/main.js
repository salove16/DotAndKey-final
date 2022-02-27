function createProductCard(data, parent) {
  let cartArr =JSON.parse(localStorage.getItem("cartArr"))||[];
  data.map((elem) => {
    let mainDiv = document.createElement("div");
    mainDiv.id = "mainDiv";
    let imgDiv = document.createElement("img");
    imgDiv.src = elem.prodImgUrl[0];
    imgDiv.style.cursor = "pointer";
    let saveDiv = document.createElement("div");
    saveDiv.textContent = "SAVE 10%";
    saveDiv.id = "saveDiv";
    let star = document.createElement("i");
    star.setAttribute("class", "fa-solid fa-star");
    let max = 4.0;
    let min = 4.0;
    let value = Math.random() * (max - min + 1) + min;
    value = value.toFixed(1);
    let rating = document.createElement("span");
    rating.textContent = ` ${value}/5 `;
    rating.id = "rating";
    let review = document.createElement("span");
    review.id = "review";
    review.textContent = `(${elem.review})`;
    let nameDiv = document.createElement("div");
    nameDiv.textContent = elem.DispName;
    nameDiv.id = "nameDiv";
    let subNameDiv = document.createElement("div");
    subNameDiv.textContent = elem.dNameSub;
    subNameDiv.id = "subNameDiv";

    let mainPrice = document.createElement("div");
    mainPrice.id = "mainPrice";
    let discount = elem.price - elem.price / 10;
    let priceDiv = document.createElement("div");
    priceDiv.textContent = `RS: ${elem.price} `;
    priceDiv.style.textDecoration = "line-through";
    let discountSpan = document.createElement("div");
    discountSpan.textContent = ` RS: ${discount}`;

    mainPrice.append(priceDiv, discountSpan);

    let cart = document.createElement("button");
    cart.textContent = "ADD TO CART";
    cart.id = "Addcart";

    cart.addEventListener("click",()=>{
      cartArr.push(elem);
      localStorage.setItem("cartArr",JSON.stringify(cartArr));
      alert("Added To Cart")
    });

    imgDiv.addEventListener("click", () => {
      localStorage.setItem("productData", JSON.stringify(elem));
      location.href = "productPage.html";
    });
    mainDiv.append(
      imgDiv,
      saveDiv,
      star,
      rating,
      review,
      nameDiv,
      subNameDiv,
      mainPrice,
      cart
    );
    parent.append(mainDiv);
  });
}

function createProductPage(data, parent) {
  let cartArr =JSON.parse(localStorage.getItem("cartArr"))||[];
  data.map((elem) => {
    let topDiv = document.createElement("div");
    topDiv.id = "topDiv";

    let leftDiv = document.createElement("div");
    leftDiv.id = "leftDiv";
    let leftMainImg = document.createElement("img");
    leftMainImg.src = elem.prodImgUrl[0];

    let thumbMain = document.createElement("div");
    thumbMain.id = "thumbMain";

    for (let i = 0; i < elem.prodImgUrl.length; i++) {
      let thumb1 = document.createElement("img");
      thumb1.class = "thumb1";
      thumb1.src = elem.prodImgUrl[i];
      thumbMain.append(thumb1);
      thumb1.addEventListener("click", () => {
        let list = document.querySelectorAll("img");
        for (let j = 0; j < list.length; j++) {
          list[j].style.border = "0px solid black";
        }
        leftMainImg.src = elem.prodImgUrl[i];
        thumb1.style.border = "2px solid black";
      });
    }

    let perksDiv = document.createElement("div");
    perksDiv.id = "perksDiv";
    let headPerks = document.createElement("div");
    headPerks.textContent = "Perks to love";
    headPerks.id = "headPerks";
    let UlDiv = document.createElement("ul");
    UlDiv.id = "UlDiv";

    let firstLi = document.createElement("li");
    firstLi.textContent =
      "Buy Products Worth Rs. 1499 Or More & Pick Your Free 5-in-1 Kit";
    let secLi = document.createElement("li");
    secLi.textContent =
      "Buy Products Worth Rs. 899 Or More & Get A Cica Calming Night Gel - 15ml For Free.";
    let thirdLi = document.createElement("li");
    thirdLi.textContent =
      "Upto 15% Off On Haircare + Free Detangling Brush on All Haircare Combos";
    let fourthLi = document.createElement("li");
    fourthLi.textContent = "Flat 10% Off On Bodycare";
    let fiveLi = document.createElement("li");
    fiveLi.textContent = "Extra 3% Off on Prepaid Orders";
    let sixLi = document.createElement("li");
    sixLi.textContent = "10% Cashback on all orders";

    UlDiv.append(firstLi, secLi, thirdLi, fourthLi, fiveLi, sixLi);
    perksDiv.append(headPerks, UlDiv);
    leftDiv.append(leftMainImg, thumbMain, perksDiv);

    let rigthDiv = document.createElement("div");
    rigthDiv.id = "rigthDiv";
    let rightName = document.createElement("div");
    rightName.id = "rightName";
    rightName.textContent = elem.name;

    let starDiv = document.createElement("i");
    starDiv.id = "starDiv";

    for (let i = 1; i <= 5; i++) {
      let star = document.createElement("i");
      star.setAttribute("class", "fa-solid fa-star");
      starDiv.append(star);
    }
    let review = document.createElement("a");
    review.href = "#";
    review.id = "review";
    review.textContent = `${elem.review} Reviews`;

    let mainPrice = document.createElement("div");
    mainPrice.id = "mainPrice";
    let discount = elem.price - elem.price / 10;
    let priceDiv = document.createElement("div");
    priceDiv.textContent = `RS: ${elem.price} `;
    priceDiv.style.textDecoration = "line-through";
    let discountSpan = document.createElement("div");
    discountSpan.textContent = ` RS: ${discount}`;

    mainPrice.append(priceDiv, discountSpan);

    let tax = document.createElement("div");
    tax.textContent = "Inclusive of All Taxes";
    tax.id = "tax";

    let size = document.createElement("div");
    size.id = "size";
    let sizeDiv = document.createElement("div");
    sizeDiv.id = "sizeDiv";
    if (elem.size != undefined) {
      size.textContent = "SIZE";
      sizeDiv.textContent = `${elem.size} ml`;
    } else {
      sizeDiv.style.border = "0px";
    }

    let addFav = document.createElement("div");
    addFav.id = "addFav";

    let cart = document.createElement("button");
    cart.textContent = "ADD TO CART";
    cart.id = "Addcart";
    
    cart.addEventListener("click",()=>{
      cartArr.push(elem);
      localStorage.setItem("cartArr",JSON.stringify(cartArr));
      alert("Added To Cart")
    });

    let heart = document.createElement("i");
    heart.id = "heart";
    heart.setAttribute("class", "fa-regular fa-heart");
    let count = 1;
    heart.addEventListener("click", (elem) => {
      count++;
      console.log(count);
      if (count % 2 == 0) {
        document
          .querySelector("#heart")
          .setAttribute("class", "fa-solid fa-heart");
        document.querySelector("#heart").style.color = "red";
      } else {
        document
          .querySelector("#heart")
          .setAttribute("class", "fa-regular fa-heart");
        document.querySelector("#heart").style.color = "#3c3c3c";
      }
    });

    let descp = document.createElement("div");
    descp.textContent = elem.discription;
    descp.id = "descp";

    let featureDiv = document.createElement("div");
    featureDiv.id = "featureDiv";
    let featureHead = document.createElement("span");
    featureHead.textContent = "Feel the ";
    let featureHead2 = document.createElement("span");
    featureHead2.textContent = " Love";

    let featureImageDiv = document.createElement("div");
    featureImageDiv.id = "featureImageDiv";
    for (let i = 0; i < 3; i++) {
      let imgSrc = document.createElement("img");
      imgSrc.src = elem.featuresImg[i];
      featureImageDiv.append(imgSrc);
    }
    let fTextDiv = document.createElement("div");
    fTextDiv.id = "fTextDiv";
    for (let i = 0; i < 3; i++) {
      let textSrc = document.createElement("div");
      textSrc.textContent = elem.features[i];
      fTextDiv.append(textSrc);
    }

    featureDiv.append(featureHead, featureHead2);
    addFav.append(cart, heart);
    rigthDiv.append(
      rightName,
      starDiv,
      review,
      mainPrice,
      tax,
      size,
      sizeDiv,
      addFav,
      descp,
      featureDiv,
      featureImageDiv,
      fTextDiv
    );
    topDiv.append(leftDiv, rigthDiv);

    let head2 = document.createElement("div");
    head2.id = "head2";

    let headspn1 = document.createElement("span");
    headspn1.textContent = "Made With ";

    let headspn2 = document.createElement("span");
    headspn2.textContent = " Love";

    head2.append(headspn1, headspn2);

    let banner1 = document.createElement("img");
    banner1.src = elem.promo1;
    banner1.id="banner1"

    let head3 = document.createElement("div");
    head3.id = "head3";

    let headspn3 = document.createElement("span");
    headspn3.textContent = "Slather ";

    let headspn4 = document.createElement("span");
    headspn4.textContent = " Not Slurp";

    head3.append(headspn3, headspn4);

    let banner2 = document.createElement("img");
    banner2.src = elem.promo3;
    banner2.id="banner2"


    parent.append(topDiv, head2, banner1, head3, banner2);
  });
}


function mainDisp(){
  return `<div id="addImage">
  <img
    src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/bodycare_desktop.png?v=1639668460"
    alt=""
  />
</div>
<div id="secondImg">
  <img
    src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-SPREAD-THE-LOVE-Desktop-Final_3.png?v=1638165803"
    alt=""
  />
</div>
<div id="head1">
  <div class="subHead">Just In</div>
  <div class="subHead2">BODYCARE</div>
</div>
<div id="mainProduct">
  <div class="card">
    <img
      src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/ROSE_2.png?v=1636617537"
      alt=""
    />
    <div class="subCard">
      <span>Body</span>
      <span>Butter</span>
    </div>
  </div>
  <div class="card">
    <img
      src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/0_1.png?v=1636623319"
      alt=""
    />
    <div class="subCard">
      <span>Serum</span>
      <span>Lotion</span>
    </div>
  </div>
  <div class="card">
    <img
      src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1.3_d0fb05cd-1610-4b66-ad0d-391d4aad2676.png?v=1636537323"
      alt=""
    />
    <div class="subCard">
      <span>Body</span>
      <span>Scrub</span>
    </div>
  </div>
</div>
<div id="promoImgLast">
  <img
    src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3-Model-Image-Desktop_2_1ac15045-7c83-4680-9bd8-6d5a5878a0c4.png?v=1636955347"
    alt=""
  />
</div>
<div class="head2">
  <div id="scrub">BODY</div>
  <div>SCRUB</div>
  <div>Buff’ that Ruff’</div>
</div>
<div class="productList">
  <div id="scrubCard"></div>
</div>
<div class="head2">
  <div id="serum">SERUM</div>
  <div>LOTIONS</div>
  <div>Hydration’s your bae</div>
</div>
<div class="productList">
  <div id="serumCard"></div>
</div>
<div class="head2">
  <div id="butter">BODY</div>
  <div>BUTTER</div>
  <div>Buttery, melt-in goodness</div>
</div>
<div class="productList">
  <div id="butterCard"></div>
</div>
<div class="head2">
  <div>OUR</div>
  <div>COMBOS</div>
  <div></div>
</div>
<div class="productList">
  <div id="comboCard"></div>
</div>

<div id="video">
  <div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/YuM30jM381M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div id="banner">
    <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4-Revised-Youtube-Desktop.png?v=1638165848" alt="">
  </div>
</div>`
}



let arr = [

  {imgUrl:"https://bit.ly/33Ig1FO", name:"VITAMIN C+E SUPER BRIGHT MOISTURIZER", price:595.00},
  {imgUrl:"https://bit.ly/3h2LwNO", name:"NIGHT RESET RETINOL + CERAMIDE TREATMENT CREAM", price:897.00},
  {imgUrl:"https://bit.ly/3p4ECMg", name:"CICA CALMING NIGHT GEL WITH NIACINAMIDE", price:590.00},
  {imgUrl:"https://bit.ly/3v803QE", name:"WATERMELON SUPERGLOW MATTE MOISTURIZER", price:550.00},
  {imgUrl:"https://bit.ly/3IdSziO", name:"72HR HYDRATION GEL + PROBIOTICS", price:707.00},
  {imgUrl:"https://bit.ly/35ga2sj", name:"AVOCADO SMOOTHIE DAY CREAM SPF 20", price:845.00},
  {imgUrl:"https://bit.ly/3sYip3N", name:"DAY & NIGHT CARE COMBO", price:1161.00},
  {imgUrl:"https://bit.ly/3h8RdtH", name:"HAND CREAM + SANITIZER, LAVENDER", price:395.00},
  {imgUrl:"https://bit.ly/3BDsffs", name:"FOOT CREAM + DEODORIZER, MINT", price:325.00},
  {imgUrl:"https://bit.ly/3v5lUbp", name:"HAND CREAM + SANITIZER, ROSE", price:315.00},
  {imgUrl:"https://bit.ly/3BE23kT", name:"HAND CREAM + SANITIZER, MANDARIN", price:495.00},
  
  ];


  function searchItems(){
    return `<div id="searchContainer">
    <div id="leftSearch">
      <div>
        <span>Filter By </span>
      </div>
      <div>
        <span>Category</span>
        <span>+</span>
      </div>
      <div>
        <span>Product Type</span>
        <span>+</span>
      </div>
      <div>
        <span>Skin Type</span>
        <span>+</span>
      </div>
      <div>
        <span>Skin Concern</span>
        <span>+</span>
      </div>
      <div>
        <span>Price</span>
        <span>+</span>
      </div>
    </div>
    <div id="rightSearch">
         <div id="dropDown">
            <span>Sort By:</span>
            <span>
              <select name="" id="sortIdS">
                <option value="BestSeller">BestSeller</option>
                <option value="Relevance">Relevance</option>
                <option value="High">Price(High to Low)</option>
                <option value="Low">Price(Low to High)</option>
                <option value="New">New Arrival</option>
              </select>
            </span>
         </div>
      <div id="ItemAppend">
        
      </div>

    </div>
  </div>`
  }
 const data = (parent, filterarr) =>{
    parent.innerHTML = "";
    filterarr.map ((items)=>{
   
           let div = document.createElement("div");
   
           let img = document.createElement("img");
           img.src = items.imgUrl;
   
           let rating = Math.floor(Math.random() * (6 - 2) + 2);;
           let bag = "";
           for(let i=0; i<Math.floor(rating); i++){
               bag += "★";
           }
   
           let heart = document.createElement("p")
           heart.textContent = "♡";
           heart.style.display = "inline-block"
           heart.style.marginLeft = "60%"
           heart.style.fontSize = "25px"
   
           let name = document.createElement("h4");
           name.textContent = items.name;
   
           let price = document.createElement("h6");
           price.textContent = `Rs. ${items.price}`;
   
           let btn = document.createElement("button");
           btn.textContent = "ADD TO CART";
           btn.onclick=()=>{
               alert("Your item added successfully!")
           }
   
           div.append(img, bag, rating, heart, name, price, btn);
   
           parent.append(div);
       });
   }
   function filter_sort(){
    return `
    <select name="" id="select_product">
    <option value="">All Products</option>
    <option value="">Acne Products</option>
    <option value="">Acne Prone Skin</option>
    <option value="">activeAcne</option>
    <option value="">Age Defence</option>
    <option value="">bundle</option>
    <option value="">Combination skin</option>
    <option value="">Daily Essentials</option>
    <option value="">Dry Skin</option>
    <option value="">Dry Acne</option>
    <option value="">Dryness and Repair</option>
    <option value="">Hydration</option>
    <option value="">Mature Skin</option>
    <option value="">Moisturizer</option>
    <option value="">Normal Skin</option>
    <option value="">Oily Skin</option>
    <option value="">postAcne</option>
    <option value="">proneAcne</option>
    <option value="">Sensitive Skin</option>
    <option value="">Skin Glow</option>
    <option value="">Uneven Tone</option>
    <option value="">Valentine</option>
    <option value="">winter-pick</option>
</select>
<select name="" id="select_featured">
    <option value="">Sort</option>
    <option value="">Featured</option>
    <option value="">Best-selling</option>
    <option value="ATZ">Alphabetically, A-Z</option>
    <option value="ZTA">Alphabetically, Z-A</option>
    <option value="LTH">Price, low to high</option>
    <option value="HTL">Price, high to low</option>
    <option value="">Date, old to new</option>
    <option value="">Date, new to old</option>
</select>
    `;
}

export { createProductCard, createProductPage,mainDisp,data,searchItems,filter_sort};
