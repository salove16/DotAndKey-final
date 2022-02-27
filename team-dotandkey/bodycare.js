import { createProductPage,createProductCard, mainDisp,searchItems } from "./Scripts/main.js";
import { navBar,navInt,navcar } from "./Componentes/navBar.js";
import { footer } from "./Componentes/footer.js";
document.querySelector("#main").innerHTML = mainDisp();
document.querySelector("#navInterval").innerHTML = navInt();
let i=0;
navcar(i);

document.querySelector("#navbar").innerHTML = navBar();
document.querySelector("#footer").innerHTML = footer();
let bodyScrubData = [
  {
    DispName: "Vitamin C & Avalon Lemon",
    dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price: 545.0,
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
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },
  {
    DispName: "Damask Rose & Lavender",
    dNameSub: "Gel Body Scrub",
    name: "DAMASK ROSE GEL BODY SCRUB ",
    price: 545.0,
    size: 200,
    review: 19,
    discription:
      "A soft gel scrub lovingly curated with Damask Rose, French Lavender Oil & crushed walnut shells to buff away dead skin cells for smooth, soft & rosy bright skin.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Adds_Dewey_Glow.png?v=1636458476",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Calms_Soothes.png?v=1636458476",
    ],
    features: ["Adds a Dewy Glow", "Exfoliates Skin", "Calms And Soothes"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4-Rose-Scrub_a089f825-eea5-44f6-96ef-bf606c830d17.png?v=1636541997",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/rose_scrub.jpg?v=1636541859",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_1_1800x1800.jpg?v=1644862614",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_1_1800x1800.jpg?v=1644862614",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_1_1800x1800.jpg?v=1644862614",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_1_1800x1800.jpg?v=1644862614",
    ],
  },
];
let bodySerumData = [
  {
    DispName: "Damask Rose & Lavender",
    dNameSub: "Hydrating Hyaluronic Body Lotion",
    name: "ROSE HYDRATING HYALURONIC BODY LOTION (DAMASK ROSE & LAVENDER)",
    price: 595.0,
    size: 300,
    review: 23,
    discription:
      "With nourishing Damask Rose oil, lavender & hyaluronic acid, this body serum lotion spreads evenly for hydrated, soft & dewy glowing skin.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Hydrates_Skin.png?v=1636459852",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Reduces_Dark_Spots.png?v=1636459850",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Fades_Fine_Lines_Wrinkles.png?v=1636459850",
    ],
    features: ["Intensely moisturizes", "Evens SKIN TONE", "Reduces redness"],
    features: ["Hydrates Skin", "Reduces Dark Spots", "Fades Fine line"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/6-Rose-Serum_e0b52d98-eb8c-4a7e-84b0-2970679d63c2.png?v=1636540251",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Artboard_1-6_6.jpg?v=1636540346",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_f9452183-3e22-4fdc-9ef6-3cc2adab66c6_1800x1800.jpg?v=1644862572",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_1_9e39328e-9390-4fab-b1c8-9a33b778c3c5_1800x1800.jpg?v=1644862572",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_16463eb2-7c5f-4f69-85ff-13e94417d461_1800x1800.jpg?v=1644862572",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_1_81c8c36d-146a-44d9-a88f-43a22307d808_1800x1800.jpg?v=1644862572",
    ],
  },
  {
    DispName: "Avalon Lemon & Verbena",
    dNameSub: "Vitamin C Glow Body Lotion",
    name: "VITAMIN C GLOW BODY LOTION (AVALON LEMON & VERBENA) ",
    price: 595.0,
    size: 300,
    review: 13,
    discription:
      "Citrusy & lightweight body serum lotion with 3 types of vitamin C that hydrates & tones for soft, bright & glowing skin. ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Hydrates_Skin.png?v=1636459852",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Adds_Natural_Glow.png?v=1636460322",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Calms_Soothes.png?v=1636458476",
    ],
    features: ["Hydrates Skin", "Adds Natural Glow", "Calm & Soothes Skin"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/7-Lemon-Serum_bbf78342-bda8-4ac3-bc9b-42b4bb036a6c.png?v=1636543472",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_serum_lotion.jpg?v=1636543398",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_4_1800x1800.jpg?v=1641964129",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_4_1800x1800.jpg?v=1641964129",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_4_1800x1800.jpg?v=1641964129",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_4_1800x1800.jpg?v=1641964129",
    ],
  },
];
let bodyButterData = [
  {
    DispName: "Cocoa & French Vanilla",
    dNameSub: "Rich Body Butter With 10% SHEA",
    name: "VITAMIN C GLOW BODY LOTION (AVALON LEMON & VERBENA) ",
    price: 595.0,
    size: 200,
    review: 27,
    discription:
      "A warm, melt-in-your-skin body butter with the goodness of 10% shea & cocoa butter for intense hydration leaving skin ultra-soft, smooth & glowing with the lingering essence of vanilla.  ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Intensely_Moisturize.png?v=1636455493",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Reduces_Skin_Damage.png?v=1636455537",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Fades_Strech_Marks.png?v=1636455741",
    ],
    features: [
      "Intensely moisturizes",
      "Reduces Skin Damage",
      "Fades Strech Marks",
    ],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-Cocoa-Body-Butter_1cdb3a0d-ce99-468a-98c9-55130b91542f.png?v=1638788914",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/cocoa_butter.jpg?v=1638789166",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_1800x1800.jpg?v=1644862704",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_15_1800x1800.jpg?v=1644862704",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_1800x1800.jpg?v=1644862704",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_1800x1800.jpg?v=1644862704",
    ],
  },
  {
    DispName: "Damask Rose & Lavender",
    dNameSub: "Velvet Body Butter With 5% SHEA",
    name: "VELVET ROSE BODY BUTTER WITH 5% SHEA  ",
    price: 595.0,
    size: 200,
    review: 32,
    discription:
      "A luxurious body butter lovingly whipped with 5% Shea Butter to moisturize, handpicked damask roses to add a dewy glow & lavender oil to keep your senses calm  ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Intensely_Moisturize.png?v=1636455493",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/12.png?v=1636614450",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/6_2383de78-f32e-4870-a46c-3f56ce769df0.png?v=1636614450",
    ],
    features: ["Intensely moisturizes", "Evens SKIN TONE", "Reduces redness"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Rose-Body-Butter_638146c1-a774-448e-bc2d-4636ce05fda9.png?v=1636542687",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/rose_butter_1.jpg?v=1636542538",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_2_1800x1800.png?v=1644862556",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_1_1800x1800.png?v=1644862556",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_1_1800x1800.png?v=1644862556",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_1_1800x1800.png?v=1644862556",
    ],
  },
  {
    DispName: "Avalon Lemon & Vitamin C",
    dNameSub: "Yoghurt Glow Body Moisturizer",
    name: "Yoghurt GLOW Body Moisturizer WITH Avalon Lemon VITAMIN C   ",
    price: 495.0,
    size: 200,
    review: 20,
    discription:
      "Get happy, bouncy skin with lemony zing! A soft cushiony body yoghurt squeezed with Avalon Lemon & Verbena, it hydrates & pampers for even-toned, fresh & glowing skin.   ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Intensely_Moisturize.png?v=1636455493",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: [
      "Intensely moisturizes",
      "Brightens SKIN",
      "Breaks DownCellulite",
    ],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3-Lemon-Moisturizer.png?v=1636543528",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_moist_1.jpg?v=1636543651",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_5_1800x1800.jpg?v=1641964153",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_5_1800x1800.jpg?v=1641964153",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_5_1800x1800.jpg?v=1641964153",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_5_1800x1800.jpg?v=1641964153",
    ],
  },
];
let comboData = [
  {
    DispName: "Citrus Crush Combo",
    name: "Citrus Crush Combo  ",
    price: 1140.0,
    review: 8,
    discription:
      "Tease & tickle your senses with the citrus zing! Meet our Citrus Crush Combo, freshly squeezed with lemony goodness and vitamin C, both the products work together to smoothen, soften and brighten your skin leaving it fresh and energized.    ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Adds_Natural_Glow.png?v=1636460322",
    ],
    features: [
      "Exfoliates skin",
      "Breaks Down Cellulite",
      "Adds a Natural Glow",
    ],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3.2.gif?v=1643717611",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3.5.jpg?v=1643717611",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_8_1800x1800.jpg?v=1643717568",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3.1_2_1800x1800.jpg?v=1643717570",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_8_1800x1800.jpg?v=1643717568",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3.1_2_1800x1800.jpg?v=1643717570",
    ],
  },
  {
    DispName: "Rosy Affair Combo",
    name: "Rosy Affair Combo  ",
    price: 1140.0,
    review: 8,
    discription:
      "Get ready for some serious rosy romance with the Rosy Affair Combo. Curated lovingly with our all-time indulgent rose body serum lotion and rose gel scrub, wrap your body and your senses with the goodness of handpicked Damask Roses for nourished, glowing skin that smells sensual yet sweet like roses.    ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Adds_Dewey_Glow.png?v=1636458476%20style=",
    ],
    features: ["Exfoliates skin", "Brightens skin", "Adds a Dewy Glow"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2.2.gif?v=1643715435",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2.5.jpg?v=1643715674",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_9_1800x1800.jpg?v=1643714860",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2.1_2_1800x1800.jpg?v=1643714860",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_9_1800x1800.jpg?v=1643714860",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2.1_2_1800x1800.jpg?v=1643714860",
    ],
  },
  {
    DispName: "Soft & Glow Combo",
    name: "Soft & Glow Combo  ",
    price: 1190.0,
    review: 7,
    discription:
      "Searching for the key to Happy Body? Find it with Soft & Glow Combo. Curated with our hydrating body serum lotions, this combo is ideal for all skin types. Whether your body is craving for a floral freshness or citrus zing, we have got you (or your body) covered all day, every day!   ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Hydrates_Skin.png?v=1636459852",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Reduces_Dark_Spots.png?v=1636459850",
    ],
    features: ["Hydrates skin", "Brightens skin", "Reduces Dark spots"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1.2.gif?v=1643713243",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1.5.jpg?v=1643713223",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_7_1800x1800.jpg?v=1643713066",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1.1_3_1800x1800.jpg?v=1643713067",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_7_1800x1800.jpg?v=1643713066",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1.1_3_1800x1800.jpg?v=1643713067",
    ],
  },
];

let bodyCare = [
  {
    DispName: "Vitamin C & Avalon Lemon",
    dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price: 545.0,
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
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },
  {
    DispName: "Damask Rose & Lavender",
    dNameSub: "Gel Body Scrub",
    name: "DAMASK ROSE GEL BODY SCRUB ",
    price: 545.0,
    size: 200,
    review: 19,
    discription:
      "A soft gel scrub lovingly curated with Damask Rose, French Lavender Oil & crushed walnut shells to buff away dead skin cells for smooth, soft & rosy bright skin.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Adds_Dewey_Glow.png?v=1636458476",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Calms_Soothes.png?v=1636458476",
    ],
    features: ["Adds a Dewy Glow", "Exfoliates Skin", "Calms And Soothes"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4-Rose-Scrub_a089f825-eea5-44f6-96ef-bf606c830d17.png?v=1636541997",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/rose_scrub.jpg?v=1636541859",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_1_1800x1800.jpg?v=1644862614",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_1_1800x1800.jpg?v=1644862614",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_1_1800x1800.jpg?v=1644862614",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_1_1800x1800.jpg?v=1644862614",
    ],
  },
  {
    DispName: "Damask Rose & Lavender",
    dNameSub: "Hydrating Hyaluronic Body Lotion",
    name: "ROSE HYDRATING HYALURONIC BODY LOTION (DAMASK ROSE & LAVENDER)",
    price: 595.0,
    size: 300,
    review: 23,
    discription:
      "With nourishing Damask Rose oil, lavender & hyaluronic acid, this body serum lotion spreads evenly for hydrated, soft & dewy glowing skin.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Hydrates_Skin.png?v=1636459852",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Reduces_Dark_Spots.png?v=1636459850",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Fades_Fine_Lines_Wrinkles.png?v=1636459850",
    ],
    features: ["Intensely moisturizes", "Evens SKIN TONE", "Reduces redness"],
    features: ["Hydrates Skin", "Reduces Dark Spots", "Fades Fine line"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/6-Rose-Serum_e0b52d98-eb8c-4a7e-84b0-2970679d63c2.png?v=1636540251",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Artboard_1-6_6.jpg?v=1636540346",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_f9452183-3e22-4fdc-9ef6-3cc2adab66c6_1800x1800.jpg?v=1644862572",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_1_9e39328e-9390-4fab-b1c8-9a33b778c3c5_1800x1800.jpg?v=1644862572",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_16463eb2-7c5f-4f69-85ff-13e94417d461_1800x1800.jpg?v=1644862572",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_1_81c8c36d-146a-44d9-a88f-43a22307d808_1800x1800.jpg?v=1644862572",
    ],
  },
  {
    DispName: "Avalon Lemon & Verbena",
    dNameSub: "Vitamin C Glow Body Lotion",
    name: "VITAMIN C GLOW BODY LOTION (AVALON LEMON & VERBENA) ",
    price: 595.0,
    size: 300,
    review: 13,
    discription:
      "Citrusy & lightweight body serum lotion with 3 types of vitamin C that hydrates & tones for soft, bright & glowing skin. ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Hydrates_Skin.png?v=1636459852",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Adds_Natural_Glow.png?v=1636460322",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Calms_Soothes.png?v=1636458476",
    ],
    features: ["Hydrates Skin", "Adds Natural Glow", "Calm & Soothes Skin"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/7-Lemon-Serum_bbf78342-bda8-4ac3-bc9b-42b4bb036a6c.png?v=1636543472",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_serum_lotion.jpg?v=1636543398",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_4_1800x1800.jpg?v=1641964129",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_4_1800x1800.jpg?v=1641964129",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_4_1800x1800.jpg?v=1641964129",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_4_1800x1800.jpg?v=1641964129",
    ],
  },
  {
    DispName: "Cocoa & French Vanilla",
    dNameSub: "Rich Body Butter With 10% SHEA",
    name: "VITAMIN C GLOW BODY LOTION (AVALON LEMON & VERBENA) ",
    price: 595.0,
    size: 200,
    review: 27,
    discription:
      "A warm, melt-in-your-skin body butter with the goodness of 10% shea & cocoa butter for intense hydration leaving skin ultra-soft, smooth & glowing with the lingering essence of vanilla.  ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Intensely_Moisturize.png?v=1636455493",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Reduces_Skin_Damage.png?v=1636455537",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Fades_Strech_Marks.png?v=1636455741",
    ],
    features: [
      "Intensely moisturizes",
      "Reduces Skin Damage",
      "Fades Strech Marks",
    ],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-Cocoa-Body-Butter_1cdb3a0d-ce99-468a-98c9-55130b91542f.png?v=1638788914",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/cocoa_butter.jpg?v=1638789166",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_1800x1800.jpg?v=1644862704",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_15_1800x1800.jpg?v=1644862704",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_1800x1800.jpg?v=1644862704",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_1800x1800.jpg?v=1644862704",
    ],
  },
  {
    DispName: "Damask Rose & Lavender",
    dNameSub: "Velvet Body Butter With 5% SHEA",
    name: "VELVET ROSE BODY BUTTER WITH 5% SHEA  ",
    price: 595.0,
    size: 200,
    review: 32,
    discription:
      "A luxurious body butter lovingly whipped with 5% Shea Butter to moisturize, handpicked damask roses to add a dewy glow & lavender oil to keep your senses calm  ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Intensely_Moisturize.png?v=1636455493",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/12.png?v=1636614450",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/6_2383de78-f32e-4870-a46c-3f56ce769df0.png?v=1636614450",
    ],
    features: ["Intensely moisturizes", "Evens SKIN TONE", "Reduces redness"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Rose-Body-Butter_638146c1-a774-448e-bc2d-4636ce05fda9.png?v=1636542687",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/rose_butter_1.jpg?v=1636542538",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_2_1800x1800.png?v=1644862556",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_1_1800x1800.png?v=1644862556",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_1_1800x1800.png?v=1644862556",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_1_1800x1800.png?v=1644862556",
    ],
  },
  {
    DispName: "Avalon Lemon & Vitamin C",
    dNameSub: "Yoghurt Glow Body Moisturizer",
    name: "Yoghurt GLOW Body Moisturizer WITH Avalon Lemon VITAMIN C   ",
    price: 495.0,
    size: 200,
    review: 20,
    discription:
      "Get happy, bouncy skin with lemony zing! A soft cushiony body yoghurt squeezed with Avalon Lemon & Verbena, it hydrates & pampers for even-toned, fresh & glowing skin.   ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Intensely_Moisturize.png?v=1636455493",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: [
      "Intensely moisturizes",
      "Brightens SKIN",
      "Breaks DownCellulite",
    ],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3-Lemon-Moisturizer.png?v=1636543528",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_moist_1.jpg?v=1636543651",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_5_1800x1800.jpg?v=1641964153",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_5_1800x1800.jpg?v=1641964153",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_5_1800x1800.jpg?v=1641964153",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_5_1800x1800.jpg?v=1641964153",
    ],
  },
  {
    DispName: "Citrus Crush Combo",
    name: "Citrus Crush Combo  ",
    price: 1140.0,
    review: 8,
    discription:
      "Tease & tickle your senses with the citrus zing! Meet our Citrus Crush Combo, freshly squeezed with lemony goodness and vitamin C, both the products work together to smoothen, soften and brighten your skin leaving it fresh and energized.    ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Adds_Natural_Glow.png?v=1636460322",
    ],
    features: [
      "Exfoliates skin",
      "Breaks Down Cellulite",
      "Adds a Natural Glow",
    ],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3.2.gif?v=1643717611",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3.5.jpg?v=1643717611",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_8_1800x1800.jpg?v=1643717568",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3.1_2_1800x1800.jpg?v=1643717570",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_8_1800x1800.jpg?v=1643717568",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3.1_2_1800x1800.jpg?v=1643717570",
    ],
  },
  {
    DispName: "Rosy Affair Combo",
    name: "Rosy Affair Combo  ",
    price: 1140.0,
    review: 8,
    discription:
      "Get ready for some serious rosy romance with the Rosy Affair Combo. Curated lovingly with our all-time indulgent rose body serum lotion and rose gel scrub, wrap your body and your senses with the goodness of handpicked Damask Roses for nourished, glowing skin that smells sensual yet sweet like roses.    ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Adds_Dewey_Glow.png?v=1636458476%20style=",
    ],
    features: ["Exfoliates skin", "Brightens skin", "Adds a Dewy Glow"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2.2.gif?v=1643715435",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2.5.jpg?v=1643715674",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_9_1800x1800.jpg?v=1643714860",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2.1_2_1800x1800.jpg?v=1643714860",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_9_1800x1800.jpg?v=1643714860",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2.1_2_1800x1800.jpg?v=1643714860",
    ],
  },
  {
    DispName: "Soft & Glow Combo",
    name: "Soft & Glow Combo  ",
    price: 1190.0,
    review: 7,
    discription:
      "Searching for the key to Happy Body? Find it with Soft & Glow Combo. Curated with our hydrating body serum lotions, this combo is ideal for all skin types. Whether your body is craving for a floral freshness or citrus zing, we have got you (or your body) covered all day, every day!   ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Hydrates_Skin.png?v=1636459852",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Reduces_Dark_Spots.png?v=1636459850",
    ],
    features: ["Hydrates skin", "Brightens skin", "Reduces Dark spots"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1.2.gif?v=1643713243",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1.5.jpg?v=1643713223",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_7_1800x1800.jpg?v=1643713066",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1.1_3_1800x1800.jpg?v=1643713067",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_7_1800x1800.jpg?v=1643713066",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1.1_3_1800x1800.jpg?v=1643713067",
    ],
  },
  {
    name: " Vitamin C+E Super Bright Moisturizer ",
    price: 595.0,
    size: 60,
    discription:
      " Turn your glow on with 3 types of vitamin C backed by vitamin E. ",
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
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-2_52198176-cba4-4b83-b4cf-26a5455dd4fb_1800x1800.jpg?v=1644914660",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_2_1800x1800.webp?v=1644914660",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/5_2_1800x1800.webp?v=1644914660",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_2_1800x1800.webp?v=1644914660",
    ],
  },
  {
    name: " Vitamin C Serum Glow Revealing Concentrate  ",
    price: 926.0,
    size: 60,
    discription:
      " Flaunt healthy, glowing skin with Dot & Key Glow Reviving Vitamin C Serum. ",
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
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_4_1800x1800.webp?v=1644493527",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_5_1800x1800.webp?v=1644493527",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_6_1800x1800.webp?v=1644493527",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_2_1800x1800.webp?v=1644914660",
    ],
  },
  {
    name: " VITAMIN C GLOW PINK CLAY MASK   ",
    price: 845.0,
    size: 60,
    discription:
      " Layer your skin with the power of pink to treat dullness and clear deep-rooted impurities for glowing, nourished and hydrated skin.  ",
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
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_980f3c37-b8eb-4ef3-ade1-4444190c32cf_1800x1800.jpg?v=1644914753",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/pinkclayhuman_18ed2ff0-8d46-4a89-b300-258bf13c32c5_1800x1800.png?v=1644914753",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/vit-c-packaging-box-3_1800x1800.jpg?v=1644914753",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_2_1800x1800.webp?v=1644914660",
    ],
  },
  {
    name: " OVERNIGHT GLOW VITAMIN C SLEEP MASK   ",
    price: 995.0,
    size: 60,
    discription:
      " Vitamin C rich Sleeping Mask with ceramides & hyaluronic acid",
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
    review: 22,
    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/VITCSLEEP_1800x1800.jpg?v=1645679320",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/vit-c-packaging-box-1_1800x1800.jpg?v=1645679320",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/5416de8fff2342f09fabf5d2d066c146.thumbnail.0000000_1800x1800.jpg?v=1612171387",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_2_1800x1800.webp?v=1644914660",
    ],
  },
  {
    name: " CHOCOLATE GLOW MOUSSE FACE MASK  ",
    price: 596.0,
    size: 60,
    discription:
      " Formulated with home-grown artisanal raw cocoa powder by ALL THINGS CHOCOLATE and zesty peppermint oil.",
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
    review: 32,
    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/chocolate_Mask_1800x1800_4015046f-2199-4fad-9cd8-80dabe004d0d_1800x1800.jpg?v=1645382330",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/image-4_1800x1800.png?v=1645382330",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/website-1080-X-1080_1800x1800.jpg?v=1645382330",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/chocolatemasktexture_1800x1800.jpg?v=1645382330",
    ],
  },
  {
    name: " Damask Rose Resurfacing Gel Mask   ",
    price: 595.0,
    size: 60,
    discription:
      " Give your skin a luxe glow treatment to reveal plump, dewy glowing skin with Damask Rose Resurfacing Gel Mask. ",
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
    review: 26,
    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_1_1800x1800.png?v=1644862636",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_7_1800x1800.png?v=1644862636",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_9_1800x1800.png?v=1644862636",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_9_1800x1800.png?v=1644862636",
    ],
  },
  {
    name: " 5 Steps To Glowing Skin    ",
    price: 1995.0,
    size: 60,
    discription:
      " Add an extra shot of glow to your skincare routine with our 5 step glowing skin regime.  ",
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
    review: 26,
    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/dullness_1800x1800.jpg?v=1638790406",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/dullness2_1800x1800.jpg?v=1638790417",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/dullness3_b53ea903-8610-491e-9fe6-d8b967b48eaf_1800x1800.jpg?v=1639028630",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_9_1800x1800.png?v=1644862636",
    ],
  },
  {
    name: " LIP SUGAR SCRUB WITH 35% CANE SUGAR  ",
    price: 612.0,
    size: 60,
    discription:
      " Made of real chocolate & peppermint oil.Scrubs away dead cells to reveal softer lips  ",
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
    review: 44,
    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/SUGARSCRUB_1800x1800.jpg?v=1645679270",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/e32a6159246a4ce9b17334541303055f.thumbnail.0000000_1800x1800.jpg?v=1607421470",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Lip-scrub-Image-2_1800x1800.jpg?v=1645679270",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Lipscrub_1800x1800.jpg?v=1645679270",
    ],
  },
  {
    name: " COFFEE BUTT SCRUB FOR ANTI CELLULITE & STRETCH MARKS   ",
    price: 636.0,
    size: 60,
    discription:
      " A body polish formulated especially for the butt, thighs and hips ",
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
    review: 54,
    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/BootyPolish_1b3a03e0-3543-4c67-99b1-b4b68947e565_1800x1800.jpg?v=1644862499",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/bootypolish_1800x1800.jpg?v=1644862499",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/pigmentation-packaging-box-1_1800x1800.jpg?v=1644862499",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Lipscrub_1800x1800.jpg?v=1645679270",
    ],
  },
  {
    name: " Lip Loving Mask & Scrub Duo  ",
    price: 999.0,
    size: 60,
    discription:
      "Plump up those puckers with Dot & Key's Lip Loving Mask & Scrub Duo. For smooth, plush pink lips  ",
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
    review: 54,
    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_983aa803-dda7-4934-8070-2421a138da7f_1800x1800.jpg?v=1644862769",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/lip2_80404cf0-0eeb-426a-a7b5-c647fed86e83_1800x1800.jpg?v=1644862769",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/lip1_1_1800x1800.jpg?v=1644862769",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_983aa803-dda7-4934-8070-2421a138da7f_1800x1800.jpg?v=1644862769",
    ],
  },
  {
    DispName: "10% NIACINAMIDE SERUM DARK SPOT CORRECTOR",
    dNameSub: "Sugar Body Scrub",
    name: "10% NIACINAMIDE SERUM DARK SPOT CORRECTOR",
    price: 1040.00,
    size: 30,
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
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_5_1800x1800.webp?v=1644493563",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_6_1800x1800.webp?v=1644493564",
      
    ],
  },
  {
    DispName: "Vitamin C Serum Glow Revealing Concentrate",
    dNameSub: "Gel Body Scrub",
    name: "Vitamin C Serum Glow Revealing Concentrate ",
    price: 1040.00,
    size: 30,
    review: 19,
    discription:
      "A soft gel scrub lovingly curated with Damask Rose, French Lavender Oil & crushed walnut shells to buff away dead skin cells for smooth, soft & rosy bright skin.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Adds_Dewey_Glow.png?v=1636458476",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Calms_Soothes.png?v=1636458476",
    ],
    features: ["Adds a Dewy Glow", "Exfoliates Skin", "Calms And Soothes"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4-Rose-Scrub_a089f825-eea5-44f6-96ef-bf606c830d17.png?v=1636541997",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/rose_scrub.jpg?v=1636541859",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_4_1800x1800.webp?v=1644493527",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_5_1800x1800.webp?v=1644493527",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_6_1800x1800.webp?v=1644493527",
      
    ],
  },
  {
    DispName: "PHA + Bakuchiol Daily Peel Serum",
    dNameSub: "Hydrating Hyaluronic Body Lotion",
    name: "PHA + Bakuchiol Daily Peel Serum",
    price: 796.0,
    size: 30,
    review: 23,
    discription:
      "With nourishing Damask Rose oil, lavender & hyaluronic acid, this body serum lotion spreads evenly for hydrated, soft & dewy glowing skin.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Hydrates_Skin.png?v=1636459852",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Reduces_Dark_Spots.png?v=1636459850",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Fades_Fine_Lines_Wrinkles.png?v=1636459850",
    ],
    features: ["Intensely moisturizes", "Evens SKIN TONE", "Reduces redness"],
    features: ["Hydrates Skin", "Reduces Dark Spots", "Fades Fine line"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/6-Rose-Serum_e0b52d98-eb8c-4a7e-84b0-2970679d63c2.png?v=1636540251",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Artboard_1-6_6.jpg?v=1636540346",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-2_2_1800x1800.jpg?v=1640324322",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/box_1800x1800.jpg?v=1640324322",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/howtouse_1800x1800.jpg?v=1640324322",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/product_1800x1800.jpg?v=1640324322",
    ],
  },
  {
    DispName: "HYALURONIC + CERAMIDE HYDRATING FACE SERUM",
    dNameSub: "Vitamin C Glow Body Lotion",
    name: "HYALURONIC + CERAMIDE HYDRATING FACE SERUM ",
    price: 975.0,
    size: 30,
    review: 272,
    discription:
      "Citrusy & lightweight body serum lotion with 3 types of vitamin C that hydrates & tones for soft, bright & glowing skin. ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Hydrates_Skin.png?v=1636459852",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Adds_Natural_Glow.png?v=1636460322",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Calms_Soothes.png?v=1636458476",
    ],
    features: ["Hydrates Skin", "Adds Natural Glow", "Calm & Soothes Skin"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/7-Lemon-Serum_bbf78342-bda8-4ac3-bc9b-42b4bb036a6c.png?v=1636543472",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_serum_lotion.jpg?v=1636543398",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_adea079b-ee56-4632-8012-e9fe744cf4bc_1800x1800.jpg?v=1644914942",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_7_1800x1800.webp?v=1644914942",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_7_1800x1800.webp?v=1644914942",
      
    ],
  },
  {
    DispName: "SKIN AWAKENING MOISTURIZING SERUM",
    dNameSub: "Rich Body Butter With 10% SHEA",
    name: "SKIN AWAKENING MOISTURIZING SERUM ",
    price: 366.0,
    size: 200,
    review: 80,
    discription:
      "A warm, melt-in-your-skin body butter with the goodness of 10% shea & cocoa butter for intense hydration leaving skin ultra-soft, smooth & glowing with the lingering essence of vanilla.  ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Intensely_Moisturize.png?v=1636455493",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Reduces_Skin_Damage.png?v=1636455537",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Fades_Strech_Marks.png?v=1636455741",
    ],
    features: [
      "Intensely moisturizes",
      "Reduces Skin Damage",
      "Fades Strech Marks",
    ],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-Cocoa-Body-Butter_1cdb3a0d-ce99-468a-98c9-55130b91542f.png?v=1638788914",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/cocoa_butter.jpg?v=1638789166",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/SkinAwakening_1800x1800.jpg?v=1610017602",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Mint-packaging-box-2SkinAwakeningSerum_1800x1800.jpg?v=1610017602",
    
    ],
  },
  {
    DispName: "30% AHA + 2% BHA GLOW ACCELERATOR PEEL",
    dNameSub: "Velvet Body Butter With 5% SHEA",
    name: "30% AHA + 2% BHA GLOW ACCELERATOR PEEL  ",
    price: 695.0,
    size: 200,
    review: 31,
    discription:
      "A luxurious body butter lovingly whipped with 5% Shea Butter to moisturize, handpicked damask roses to add a dewy glow & lavender oil to keep your senses calm  ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Intensely_Moisturize.png?v=1636455493",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/12.png?v=1636614450",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/6_2383de78-f32e-4870-a46c-3f56ce769df0.png?v=1636614450",
    ],
    features: ["Intensely moisturizes", "Evens SKIN TONE", "Reduces redness"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Rose-Body-Butter_638146c1-a774-448e-bc2d-4636ce05fda9.png?v=1636542687",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/rose_butter_1.jpg?v=1636542538",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_1_89e520f1-64da-4e68-a3cc-d821faaa0736_1800x1800.jpg?v=1640324228",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/GlowAccelerator_1800x1800.jpg?v=1640324228",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/glowacceleratorcleansingsolution_1800x1800.png?v=1640324228",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/IMG_4883_1800x1800.jpg?v=1640324228",
    ],
  },
  {
    DispName: "Pea Peptide + Cysteine Hair Volumising Serum",
    dNameSub: "Yoghurt Glow Body Moisturizer",
    name: "Pea Peptide + Cysteine Hair Volumising Serum  ",
    price: 670.0,
    size: 30,
    review: 31,
    discription:
      "Get happy, bouncy skin with lemony zing! A soft cushiony body yoghurt squeezed with Avalon Lemon & Verbena, it hydrates & pampers for even-toned, fresh & glowing skin.   ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Intensely_Moisturize.png?v=1636455493",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: [
      "Intensely moisturizes",
      "Brightens SKIN",
      "Breaks DownCellulite",
    ],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3-Lemon-Moisturizer.png?v=1636543528",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_moist_1.jpg?v=1636543651",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_ad531b5f-96d9-45c9-a81e-53cb3371c56c_1800x1800.png?v=1642749296",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_b6651138-4771-4e9b-84f9-148439eebcca_1800x1800.png?v=1642749296",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_a6bd7aa6-bb68-4387-bf6b-f1e4aaf1ceb5_1800x1800.png?v=1642749296",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_5e2019c3-70d5-435f-a7d6-24c6274c841f_1800x1800.jpg?v=1643026209",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/5_d655807d-21d5-420d-811e-97e438b05c0a_1800x1800.jpg?v=1643026209",
    ],
  },
  {
    DispName: "15% Vitamin C + 0.5% Ferulic CAPSULE GLOW BOOSTER SERUM",
    name: "15% Vitamin C + 0.5% Ferulic CAPSULE GLOW BOOSTER SERUM",
    price: 1116.00,
    review: 43,
    discription:
      "Tease & tickle your senses with the citrus zing! Meet our Citrus Crush Combo, freshly squeezed with lemony goodness and vitamin C, both the products work together to smoothen, soften and brighten your skin leaving it fresh and energized.    ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Adds_Natural_Glow.png?v=1636460322",
    ],
    features: [
      "Exfoliates skin",
      "Breaks Down Cellulite",
      "Adds a Natural Glow",
    ],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3.2.gif?v=1643717611",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3.5.jpg?v=1643717611",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_816982c4-ebdf-460b-8f71-da7b4162b5be_1800x1800.jpg?v=1640324376",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/10_1800x1800.png?v=1640324376",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/listing1_1800x1800.jpg?v=1640324376",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/listing2_1800x1800.jpg?v=1640324376",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/68307b4659c34502809ba609132f8558.thumbnail.0000000_1800x1800.jpg?v=1612168841" ,
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/glowbooster-combo-2_1800x1800.jpg?v=1640324376"       ],
  },
  {
    DispName: "Hyaluronic + Ceramide Hair Treatment Serum",
    name: "Hyaluronic + Ceramide Hair Treatment Serum  ",
    price: 670.0,
    review: 12,
    discription:
      "Get ready for some serious rosy romance with the Rosy Affair Combo. Curated lovingly with our all-time indulgent rose body serum lotion and rose gel scrub, wrap your body and your senses with the goodness of handpicked Damask Roses for nourished, glowing skin that smells sensual yet sweet like roses.    ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Adds_Dewey_Glow.png?v=1636458476%20style=",
    ],
    features: ["Exfoliates skin", "Brightens skin", "Adds a Dewy Glow"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2.2.gif?v=1643715435",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2.5.jpg?v=1643715674",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_1b863967-15e3-4a22-877d-870a4a542b34_1800x1800.png?v=1642748601",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_ea7ef6e0-364d-4fb1-b869-b131eb17443f_1800x1800.png?v=1643021005",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_ce866b5d-d086-495b-a838-ed199f874adc_1800x1800.png?v=1643021005",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_bdc2111e-6b29-430b-b71f-4dd99b9f62e8_1800x1800.jpg?v=1643026086",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/10_4c9456c8-d375-4153-9997-9165df9dc412_1800x1800.png?v=1643026086",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/5_1a86fcd2-6c5f-41a6-be6a-df462438e575_1800x1800.jpg?v=1643026086",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/6_45679a61-73b2-4de5-9e96-ec2331569ada_1800x1800.png?v=1643026086",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/7_44b523ec-f6aa-414c-9e56-c8701c5492f3_1800x1800.png?v=1643026086",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/8_58d0091e-0ad5-442c-8f0b-54d726d11c05_1800x1800.png?v=1643026086",
    ],
  },
  {
    name: " Vitamin C+E Super Bright Moisturizer   ",
    price: 595.0,
    size: 60,
    discription:
      "Turn your glow on with 3 types of vitamin C backed by vitamin E  ",
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
    review: 54,
    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-2_52198176-cba4-4b83-b4cf-26a5455dd4fb_1800x1800.jpg?v=1644914660",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_2_1800x1800.webp?v=1644914660",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/5_2_1800x1800.webp?v=1644914660",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_2_1800x1800.webp?v=1644914660",
    ],
  },

  {
    name: " Night Reset Retinol + Ceramide Treatment Cream   ",
    price: 945.0,
    size: 60,
    discription:
      "Wake up to fresh, smooth and youthful glowing skin with this targeted overnight skin treatment ",
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
    review: 54,
    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_876f386f-dd64-472c-8ace-4b616db63105_1800x1800.jpg?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_2_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/5_3_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_1_1800x1800.webp?v=1644902669",
    ],
  },

  {
    name: " CICA CALMING NIGHT GEL WITH NIACINAMIDE",
    price: 595.0,
    size: 60,
    discription:
      "Get acne-free skin with Dot & Key Cica Calming Skin Renewing Night Gel.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/5_1_1800x1800.webp?v=1644481721",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_11_1800x1800.jpg?v=1645615573",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3a_2_1800x1800.jpg?v=1645615570",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 54,
    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_876f386f-dd64-472c-8ace-4b616db63105_1800x1800.jpg?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_2_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/5_3_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_1_1800x1800.webp?v=1644902669",
    ],
  },

  {
    name: " Watermelon SuperGlow Matte Moisturizer",
    price: 595.0,
    size: 60,
    discription:
      "Get plump, dewy, hydrated and glowing skin with Dot & Key Watermelon Superglow Matte Moisturizer.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_3_1800x1800.webp?v=1644862742",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_3_1800x1800.webp?v=1644862742",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_3_1800x1800.webp?v=1644862742",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 54,
    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_876f386f-dd64-472c-8ace-4b616db63105_1800x1800.jpg?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_2_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/5_3_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_1_1800x1800.webp?v=1644902669",
    ],
  },

  {
    name: " 72HR Hydration Gel + Probiotics",
    price: 745.0,
    size: 60,
    discription:
      "Drench your skin in 72 hours of hydration with Dot & Key Hydrating Gel + Probiotics.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/6_1800x1800.webp?v=1644474105",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_1800x1800.webp?v=1644474105",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_1800x1800.webp?v=1644474105",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 54,
    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_876f386f-dd64-472c-8ace-4b616db63105_1800x1800.jpg?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_2_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/5_3_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_1_1800x1800.webp?v=1644902669",
    ],
  },

  {
    name: "AVOCADO SMOOTHIE DAY CREAM SPF 20",
    price: 845.0,
    size: 60,
    discription:
      "As healthy for your skin as a green smoothie for your health",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-18_1800x1800.jpg?v=1644916747",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_5_1800x1800.webp?v=1644916747",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_4_1800x1800.webp?v=1644916747",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 54,
    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_876f386f-dd64-472c-8ace-4b616db63105_1800x1800.jpg?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_2_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/5_3_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_1_1800x1800.webp?v=1644902669",
    ],
  },

  {
    name: " DAY & NIGHT CARE COMBO",
    price: 1790.0,
    size: 60,
    discription:
      "A day & night combo that works on a cellular level to brighten and moisturize dull skin.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/day-night_1800x1800_1_1800x1800.png?v=1628595712",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/day-night_1800x1800.jpg?v=1610086311",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/DaynIghtCombo2_1800x1800_d1b2b0dc-527b-4d18-adeb-dea166817e6e_1800x1800.jpg?v=1629204803",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 54,
    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_876f386f-dd64-472c-8ace-4b616db63105_1800x1800.jpg?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_2_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/5_3_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_1_1800x1800.webp?v=1644902669",
    ],
  },
  {
    name:"HAND CREAM + SANITIZER, LAVENDER",
    price: 395.0,
    size: 50,
    discription:"A perfect hand cream with dual benefits of sanitizer plus moisturizer.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-L_1800x1800.jpg?v=1638974908",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Other-product-packaging-box-3HandCream_1800x1800.jpg?v=1638974908",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-L_1800x1800.jpg?v=1638974908",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 54,
    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_876f386f-dd64-472c-8ace-4b616db63105_1800x1800.jpg?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_2_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/5_3_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_1_1800x1800.webp?v=1644902669",
    ],
  },

  {
    name: "FOOT CREAM + DEODORIZER, MINT",
    price: 395.0,
    size: 50,
    discription:
      "A 2-in-1 foot care cream with benefits of a moisturizer plus deodorizer.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/FootCream-Lav_Pep_1800x1800.jpg?v=1638974857",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Other-product-packaging-box-1FootCream_1800x1800.jpg?v=1638974857",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/FootCream-Lav_Pep_1800x1800.jpg?v=1638974857",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 54,
    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_876f386f-dd64-472c-8ace-4b616db63105_1800x1800.jpg?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_2_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/5_3_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_1_1800x1800.webp?v=1644902669",
    ],
  },

  {
    name:"HAND CREAM + SANITIZER, ROSE",
    price: 395.0,
    size: 50,
    discription:
      "A best hand cream solution with dual benefits of sanitizer plus moisturizer.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-Rose_1800x1800.jpg?v=1644862602",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Other-product-packaging-box-4HandCream_1800x1800.jpg?v=1644862602",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-Rose_1800x1800.jpg?v=1644862602",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 54,
    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_876f386f-dd64-472c-8ace-4b616db63105_1800x1800.jpg?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_2_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/5_3_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_1_1800x1800.webp?v=1644902669",
    ],
  },

  {
    name:"HAND CREAM + SANITIZER, MANDARIN",
    price: 395.0,
    size: 50,
    discription:
      "A perfect hand cream with dual benefits of sanitizer plus moisturizer.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-M_1800x1800.jpg?v=1644916543",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Other-product-packaging-box-2HandCream_1800x1800.jpg?v=1644916543",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-M_1800x1800.jpg?v=1644916543",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 54,
    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_876f386f-dd64-472c-8ace-4b616db63105_1800x1800.jpg?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_2_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/5_3_1800x1800.webp?v=1644902669",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_1_1800x1800.webp?v=1644902669",
    ],
  },
  {
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
  },
];
let scrubParent = document.querySelector("#scrubCard");
let serumParent = document.querySelector("#serumCard");
let butterParent = document.querySelector("#butterCard");
let comboParent = document.querySelector("#comboCard");
createProductCard(bodyScrubData, scrubParent);
createProductCard(bodySerumData, serumParent);
createProductCard(bodyButterData, butterParent);
createProductCard(comboData, comboParent);

document
  .querySelector("#mainProduct>div:nth-child(1)")
  .addEventListener("click", () => {
    location.href = "#butter";
  });
document
  .querySelector("#mainProduct>div:nth-child(2)")
  .addEventListener("click", () => {
    location.href = "#serum";
  });
document
  .querySelector("#mainProduct>div:nth-child(3)")
  .addEventListener("click", () => {
    location.href = "#scrub";
  });
localStorage.setItem("data", JSON.stringify(bodyCare));

let searchFrom = JSON.parse(localStorage.getItem("data"));



let timerId;
document.querySelector("#searchProd").addEventListener("input", () => {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(() => {
    showData(searchFrom);
  }, 2000);
});

function showData(searchFrom) {
  let searchValue = document.querySelector("#searchProd").value;
  searchValue = searchValue.toLowerCase();
  if (searchValue !== "") {
    let result = searchFrom.filter((elem) => {
      let val = elem.name.toLowerCase();
      return val.includes(searchValue);
    });
    localStorage.setItem("fliterData",JSON.stringify(result));
    appendMain(result);
  } else {
    document.querySelector("#main").style.width = "100%";
    document.querySelector("#main").innerHTML = mainDisp();
    let scrubParent = document.querySelector("#scrubCard");
    let serumParent = document.querySelector("#serumCard");
    let butterParent = document.querySelector("#butterCard");
    let comboParent = document.querySelector("#comboCard");
    createProductCard(bodyScrubData, scrubParent);
    createProductCard(bodySerumData, serumParent);
    createProductCard(bodyButterData, butterParent);
    createProductCard(comboData, comboParent);

    document
      .querySelector("#mainProduct>div:nth-child(1)")
      .addEventListener("click", () => {
        location.href = "#butter";
      });
    document
      .querySelector("#mainProduct>div:nth-child(2)")
      .addEventListener("click", () => {
        location.href = "#serum";
      });
    document
      .querySelector("#mainProduct>div:nth-child(3)")
      .addEventListener("click", () => {
        location.href = "#scrub";
      });
  }
}

function appendMain(result) {
  document.querySelector("#main").innerHTML = null;
  document.querySelector("#main").innerHTML = searchItems();
  let searchParent = document.querySelector("#ItemAppend")
  result.map((elem) => {
    let tempData = [];
    tempData.push(elem);
    
    createProductCard(tempData,searchParent)
    
  });
  document.querySelector("#sortIdS").addEventListener("change",()=>{
    let srt = document.querySelector("#sortIdS").value;
    if(srt == "High"){
      let sortArr = result.sort((a,b)=>{
        return b.price - a.price;
      });
      console.log(sortArr);
      searchParent.innerHTML="";
      createProductCard(sortArr,searchParent)
    }
    else if(srt == "Low"){
      let sortArr = result.sort((a,b)=>{
        return a.price - b.price;
      });
      console.log(sortArr);
      searchParent.innerHTML="";
      createProductCard(sortArr,searchParent)
    }
    else {
      // let sortArr =  result.sort((a,b) => {
      //  return Math.random() - 0.5;
      // });
      // searchParent.innerHTML="";
      createProductCard(result,searchParent)
    }
  });
}



document.querySelector("#leftNav > img ").addEventListener("click",()=>{
  location.href = "index.html";
});
document.querySelector("#cartBag ").addEventListener("click",()=>{
  location.href = "cart.html";
});


