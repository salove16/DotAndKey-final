
let background1_data = [{
    icon: "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/12x.png?v=1643031632",
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/girl_1.png?v=1643013901",
    title: "CONTROL HAIRFALL"
  },
  {
    icon: "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/dand.png?v=1643031643",
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/girl_3.png?v=1643013978",
    title: "SCALP CARE"
  },
  {
    icon: "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/88.png?v=1643031666",
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/girl_2_5f178ee9-cbb6-4d93-81fe-248206564305.png?v=1643014000",
    title: "REPAIR DAMAGE"
  }]

  let items = [{
    image: "//cdn.shopify.com/s/files/1/0361/8553/8692/products/1.png?v=1642746025",
    rating: "4.9/5",
    name: "Moringa & Argan Hair Fall Control Shampoo",
    price: "Rs: 695.00",
    discounted_price: "Rs: 625.00"
  },
  {
    image: "//cdn.shopify.com/s/files/1/0361/8553/8692/products/1_b737be29-1463-49be-993d-f501174f5ed6.png?v=1642747503",
    rating: "5.0/5",
    name: "Pea Peptide Strengthening Moringa & Argan Hair Mask",
    price: "Rs: 645.00",
    discounted_price: "Rs: 580.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_ad531b5f-96d9-45c9-a81e-53cb3371c56c.png?v=1642749296",
    rating: "5.0/5",
    name: "Pea Peptide + Cysteine Hair Volumising Serum",
    price: "Rs: 745.00",
    discounted_price: "Rs: 633.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_7af0a876-4de1-4ca4-8fb9-431f10bed3d4.png?v=1643623502",
    rating: "5.0/5",
    name: "AHA Exfoliation Apple Cider Hair & Scalp Scrub",
    price: "Rs: 745.00",
    discounted_price: "Rs: 633.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_a157d397-fbd5-4712-9cf0-7a788decafcd.png?v=1642746829",
    rating: "5.0/5",
    name: "Quinoa Protein & Olive Damage Repair Shampoo",
    price: "Rs: 695.00",
    discounted_price: "Rs: 590.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_a157d397-fbd5-4712-9cf0-7a788decafcd.png?v=1642746829",
    rating: "50/5",
    name: "Hyaluronic Hydrating Quinoa Protein & Olive Hair Mask",
    price: "Rs: 645.00",
    discounted_price: "Rs: 580.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_1b863967-15e3-4a22-877d-870a4a542b34.png?v=1642748601",
    rating: "5.0/5",
    name: "Hyaluronic + Ceramide Hair Treatment Serum",
    price: "Rs: 745.00",
    discounted_price: "Rs: 670.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_7.jpg?v=1643096418",
    rating: "5.0/5",
    name: "Ditch the Damage Combo",
    price: "Rs: 2,085.00",
    discounted_price: "Rs: 1,772.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_6_44a76a9c-93bc-4179-a6f8-bc5f0794ee05.jpg?v=1643096708",
    rating: "5.0/5",
    name: "Care & Repair Power Combo",
    price: "Rs: 1,340.00",
    discounted_price: "Rs: 1,206.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_6.jpg?v=1643115129",
    rating: "5.0/5",
    name: "Hairfall Farewell Combo",
    price: "Rs: 2,085.00",
    discounted_price: "Rs: 1,772.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_6.jpg?v=1643115129",
    rating: "5.0/5",
    name: "Strong & Shiny Hair Combo",
    price: "Rs: 1,340.00",
    discounted_price: "Rs: 1,206.00"
  },];



  let append_background1 = document.getElementById("background1")

  background1_data.forEach(el => {
    let div = document.createElement("div")

    let div1 = document.createElement("div")
    div1.setAttribute("class", "slide-slicker")
    let div2 = document.createElement("div")
    div2.setAttribute("class", "hair-icon")
    let div3 = document.createElement("div")
    div3.setAttribute("class", "hair-image")
    let div4 = document.createElement("div")
    div4.setAttribute("class", "hair-text")
    let icon = document.createElement("img")
    icon.src = el.icon
    div2.append(icon)
    let image = document.createElement("img")
    image.src = el.image
    div3.append(image)
    let title = document.createElement("p")
    title.textContent = el.title
    div4.append(title)
    div1.append(div2, div3, div4)
    div.append(div1)
    append_background1.append(div)
  })







let product_data=[{
    DispName: "Moringa & Argan Hair Fall Control Shampoo",
    // dNameSub: "Sugar Body Scrub",
    name: "Moringa & Argan Hair Fall Control Shampoo",
    price:695.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1.png?v=1642746025",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_1800x1800.png?v=1643021491",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_1800x1800.png?v=1643021491",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/9_8fc725cc-f301-4382-98a4-f53798480935_1800x1800.png?v=1643026139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/7_03a0f01c-255c-44d6-9c45-ce717f53042d_1800x1800.png?v=1643026139"
    ],
  },{
    DispName: "Pea Peptide Strengthening Moringa & Argan Hair Mask",
    // dNameSub: "Sugar Body Scrub",
    name: "Pea Peptide Strengthening Moringa & Argan Hair Mask",
    price:645.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "//cdn.shopify.com/s/files/1/0361/8553/8692/products/1_b737be29-1463-49be-993d-f501174f5ed6.png?v=1642747503",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_5c230f6f-062a-4f48-a9eb-826186ea7ae5_1800x1800.png?v=1643610339",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_a43882ad-6955-4a11-b0ff-b68832a95a71_1800x1800.png?v=1643610339",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_a43882ad-6955-4a11-b0ff-b68832a95a71_1800x1800.png?v=1643610339",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_14eeea21-f659-4d32-8cca-7daf8ec783ae_1800x1800.jpg?v=1643610339"
    ,
    ],
  },{
    DispName: "Pea Peptide + Cysteine Hair Volumising Serum",
    // dNameSub: "Sugar Body Scrub",
    name: "Pea Peptide + Cysteine Hair Volumising Serum",
    price:745.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_ad531b5f-96d9-45c9-a81e-53cb3371c56c.png?v=1642749296",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_00ef907f-6fcb-48b0-8222-e5a43ab02e1a_1800x1800.png?v=1643623502",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_c0fda1aa-f0c5-4b21-ab07-44d659156e1a_1800x1800.jpg?v=1643623502",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/5_0bba455c-fc97-45c2-bde7-d895231f5d53_1800x1800.png?v=1643623502",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/8_4793ec55-604d-4a0d-a0a0-7f4bc24c5a4a_1800x1800.png?v=1643623502"
    ,
    ],
  },{
    DispName: "AHA Exfoliation Apple Cider Hair & Scalp Scrub",
    // dNameSub: "Sugar Body Scrub",
    name: "AHA Exfoliation Apple Cider Hair & Scalp Scrub",
    price:745.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_7af0a876-4de1-4ca4-8fb9-431f10bed3d4.png?v=1643623502",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_b6651138-4771-4e9b-84f9-148439eebcca_1800x1800.png?v=1642749296",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_a6bd7aa6-bb68-4387-bf6b-f1e4aaf1ceb5_1800x1800.png?v=1642749296",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_5e2019c3-70d5-435f-a7d6-24c6274c841f_1800x1800.jpg?v=1643026209",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/6_e0954878-0f58-4db7-a78b-a83560c52bcc_1800x1800.png?v=1643026209"
    ,
    ],
  },{
    DispName: "Quinoa Protein & Olive Damage Repair Shampoo",
    // dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price:695.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_a157d397-fbd5-4712-9cf0-7a788decafcd.png?v=1642746829",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },{
    DispName: "Hyaluronic Hydrating Quinoa Protein & Olive Hair Mask",
    // dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price:645.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_5068fbb4-12c3-46df-aa0c-03e340c3b99c.png?v=1642747897",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },{
    DispName: "Hyaluronic + Ceramide Hair Treatment Serum",
    // dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price:745.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_1b863967-15e3-4a22-877d-870a4a542b34.png?v=1642748601",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },{
    DispName: "Ditch the Damage Combo",
    // dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price:2085.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_7.jpg?v=1643096418",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },{
    DispName: "Care & Repair Power Combo",
    // dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price:1340.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_6_44a76a9c-93bc-4179-a6f8-bc5f0794ee05.jpg?v=1643096708",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },{
    DispName: "Hairfall Farewell Combo",
    // dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price:2085.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_5.jpg?v=1643113374",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },{
    DispName: "Strong & Shiny Hair Combo",
    // dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price:1340.00,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_6.jpg?v=1643115129",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },]




  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  let slider_data=[{
      title:"Avocado Oil",
      benifits:"to Reduce Dryness",
      description:"Rich in fatty acids & antioxidants, avocado oil repairs dry and damaged hair by penetrating deep into the scalp & hair shaft",
      icon:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_57.png?v=1643014587"
  },
  {
    title:"Macadamia Oil",
    benifits:"to Regulate Oil",
    description:"Is rich in fatty acids that tame dry and frizzy hair and keep it hydrated. It also regulates oil production in the scalp",
    icon:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_57.png?v=1643014587",
},
{
    title:"2% BHA – Salicylic Acid",
    benifits:"for Exfoliation",
    description:"Topical application of salicylic acid strips away the outermost layer of the epidermis, penetrating in to dissolve dead skin cells & remove dandruff, flakes & scaly skin. It unclogs the hair follicles to prevent oil & product buildup, which also reduces itchiness & scalp irritation.",
    icon:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_55.png?v=1643015116",
},
{
    title:"AHA – Glycolic & Lactic Acid",
    benifits:"for Scalp Detox",
    description:"AHAs like Glycolic & Lactic Acid helps exfoliate your scalp by removing dirt & dry skin build up, clearing dead skin cells, dandruff & sebum for a detox treatment while promoting cell turnover.",
    icon:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_54.png?v=1643015157",
},
{
    title:"Apple Cider Vinegar",
    benifits:"to Balance pH",
    description:"ACV is a natural AHA, anti-fungal & antibacterial ingredient that soothes your scalp, decreases dandruff and yeast growth while keeping your scalp pH level balanced. It is also a natural conditioner that smoothens hair, controls frizz & adds shine.",
    icon:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_61.png?v=1643015276",
},
{
    title:"Moringa seed oil",
    benifits:"to Strengthen",
    description:"Moringa Seed Oil is rich in zinc that boosts natural keratin production in hair to strengthen limp, lifeless hair. It also activates dormant hair follicles to enhance hair growth. Moringa-infused haircare is also rich in omega-3 fatty acid which over-coats the hair cortex to lock in moisture. Behenic Acid in Moringa Seed Oil makes the hair lustrous & soft.",
    icon:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_45.png?v=1643014332",
},
{
    title:"Pea peptide Protein",
    benifits:"to Resist Hair Loss",
    description:"A rich source of amino acid, pea-peptide protein stimulates & strengthens hair follicle cells to resist hair loss. The reconstructive properties of pea peptide forms a film over hair slowing down moisture loss from the hair, keeping it hydrated, healthy & less prone to breakage. In addition, pea peptides also acts as a superfood for the scalp nourishing it for supersoft, silky smooth hair.",
    icon:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_44.png?v=1643014378",
},
{
    title:"Hydrolyzed Keratin",
    benifits:"to Replace Missing Keratin",
    description:"Keratin is a protein naturally found in the hair, a deficiency of which can cause hair thinning & loss. Infusion of hydrolyzed keratin to the hair helps to strengthen the hair shaft & reduce hair loss from breakage. Hydrolyzed keratin is a large protein molecule broken down to penetrate the hair cuticle. Topical application of hydrolyzed keratin creates a protective barrier on the hair to strengthen brittle, thin & limp hair by penetrating the hair shaft to replace missing or damaged keratin. Reduces hair breakage by minimizing cuticle damage, and increases hair elasticity.",
    icon:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_46.png?v=1643014449",
},
{
    title:"Argan Oil",
    benifits:"to Fight Breakage",
    description:"A known hydrator & a natural source of Vitamin E, it strengthens weak & damaged hair. It increases the hair elasticity to prevent rough breakage while restoring volume to dull, lifeless hair. It also contains fatty acids that naturally moisturize & lubricate the hair giving it a healthy lustre and shine.",
    icon:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_57.png?v=1643014587",
},
{
    title:"Linoleic Acid",
    benifits:"to Balance Hair Growth",
    description:"Linoleic Acid keeps the scalp hydrated & healthy. It rebalances the hair growth cycle which in turn gives you strong and thick hair, hence reducing hair fall and loss.",
    icon:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_58_8fbb0ba6-02ca-42fb-8ce4-b56d30975438.png?v=1643014648",
},
{
    title:"Ceramides",
    benifits:"for Cuticle Repair",
    description:"Ceramides that occur naturally in the hair get depleted by the overuse of chemical treatments and styling tools, thus leading to raised cuticles. Raised cuticles allow moisture to quickly escape, making hair dry and frizzy. Ceramides (1, 2, 3, 4 & 6) are the saviour for dry, damaged hair cuticles. Multiple Ceramides together create a protective layer around the hair strands that help repair cuticle damage caused from colouring, styling, chemical or heat treatments. Applying ceramides infused hair care, can help flatten the hair cuticles, thus promoting moisture retention and elasticity, controlling frizz and further damage.",
    icon:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_48.png?v=1643014740",
},
{
    title:"Hyaluronic Acid",
    benifits:"for Hydration",
    description:"While Hyaluronic is a known skin hero, it is also extremely beneficial for dry and frizzy hair. Healthy hair strands need moisture to maintain their structure and resist the effects of environmental factors. Hyaluronic Acid is a natural humectant that locks water molecules inside the hair strands to improve its appearance and overall hair health, while resisting damage.",
    icon:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_50.png?v=1643014781",
},
{
    title:"Quinoa Protein",
    benifits:"to Boost Keratin",
    description:"As a rich source of protein & amino acids, quinoa protein provides the hair with moisture & strength while repairing surface damage. It also boosts keratin production which strengthens the hair shaft to make damaged hair healthier & stronger. Quinoa Protein also contains Vitamin E that balances the production of natural oils in your hair to keep it soft & smooth.",
    icon:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_46.png?v=1643014449",
},
{
    title:"Olive",
    benifits:"to Smoothen",
    description:"Olive oil is a natural emollient which adds softness and strength to hair. It penetrates deep into the hair shaft to smoothen the outer cuticle & preserve moisture from within.",
    icon:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_57.png?v=1643014587",
},
{
    title:"Vegetal Keratin",
    benifits:"to Improve Tensile Strength",
    description:"The natural keratin present in the hair cuticle gets damaged by use of harsh chemicals, styling tools, etc. As a result, hair loses elasticity and becomes damaged. Lab studies prove Vegetal Keratin improves hair elasticity by 18%. More elastic hair is healthier and less prone to breakage. Rich in Omega 3 Fatty Acids, this vegan alternative to animal keratin helps repair dry and damaged hair by penetrating the hair shaft to improve the tensile strength of hair fibres & increase hair elasticity, thus making hair stronger, healthier and frizz-free.",
    icon:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_46.png?v=1643014449",

}];



function sweperslider(slider_data){
console.log(slider_data)
  slider_data.forEach(function(el){
    
let mainDiv=document.createElement("div")
mainDiv.setAttribute("class","swiper-slide")
let iconDiv=document.createElement("div")
iconDiv.setAttribute("class","swiper-icon")
let icon=document.createElement("img")
icon.src=el.icon
iconDiv.append(icon)
let sonDiv=document.createElement("div")
sonDiv.id="sonDiv"
 let topDiv=document.createElement("div")
 topDiv.setAttribute("class","topDiv")
 let botDiv=document.createElement("div")
 botDiv.setAttribute("class","botDiv")

 let title=document.createElement("h4")
 title.textContent=el.title
 let benifit=document.createElement("h5")
 benifit.textContent=el.benifits

topDiv.append(title,benifit)


 let decript=document.createElement("p")
 decript.textContent=el.description

 botDiv.append(decript)
 sonDiv.append(topDiv,botDiv)
 mainDiv.append(iconDiv,sonDiv)

 document.querySelector(".swiper-wrapper").append(mainDiv)




  })


}
sweperslider(slider_data);
import { createProductPage,createProductCard, mainDisp } from "./Scripts/main.js";
let parent = document.getElementById("product-grid")
createProductCard(product_data, parent);


import { navBar,navInt,navcar } from "./Componentes/navBar.js";
  import { footer } from "./Componentes/footer.js";
  document.querySelector("#navInterval").innerHTML = navInt();
  let i = 0;
  navcar(i);
  document.querySelector("#navbar").innerHTML = navBar();
  document.querySelector("#footer").innerHTML = footer();
document.querySelector("#leftNav > img ").addEventListener("click",()=>{
  location.href = "index.html";
});
document.querySelector("#cartBag ").addEventListener("click",()=>{
  location.href = "cart.html";
});