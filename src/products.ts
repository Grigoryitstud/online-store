interface Colors {
    [index: number]: string;
}

interface Product{
    id: number;
    img: string;
    name: string;
    cost: string;
    сategory: string,
    about: string;
    Available: string;
    SKU: string;
    Brand: string;
    colors?: Colors;
}


export const products: Product[]= [
  {
    id: 1,
    img: "../img/1.jpg",
    name: "Modern Poster",
    cost: "$30.99",
    сategory: "Living Room",
    about: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    Available: "In Stock",
    SKU: "RecQ0fMd8T0Vk211E",
    Brand: "Liddy",
    colors: ["black"]
},
{
    id: 2,
    name: "Bar Stool",
    img: "../img/2.jpg",
    cost: "$40.99",
    сategory: "Kitchen",
    about: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    Available: "In Stock",
    SKU: "RecoM2MyHJGHLVi5l",
    Brand: "Liddy",
    colors: ["black", "green"]
},
{
    id: 3,
    name: "Armchair",
    img: "../img/3.jpg",
    cost: "$125.99",
    сategory: "Office",
    about: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    Available: "In Stock",
    SKU: "Recd1jIVIEChmiwhe",
    Brand: "Marcos",
    colors: ["black", "green", "blue"]
},
{
    id: 4,
    name: "Suede Armchair",
    img: "../img/4.jpeg",
    cost: "$159.99",
    сategory: "Bedroom",
    about: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    Available: "In Stock",
    SKU: "RecroK1VD8qVdMP5H",
    Brand: "Caressa",
    colors: ["gold", "green"]
},
{
    id: 5,
    name: "Leather Chair",
    img: "../img/5.jpg",
    cost: "$200.99",
    сategory: "Living Room",
    about: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    Available: "In Stock",
    SKU: "RecoW8ecgjtKx2Sj2",
    Brand: "Caressa",
    colors: ["gold", "green", "red"]
},
{
    id: 6,
    name: "Emperor Bed",
    img: "../img/6.jpg",
    cost: "$239.99",
    сategory: "Bedroom",
    about: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    Available: "Out Of Stock",
    SKU: "Rec1Ntk7siEEW9ha1",
    Brand: "Ikea"
},
{
    id: 7,
    name: "Accent Chair",
    img: "../img/7.jpeg",
    cost: "$259.99",
    сategory: "Living Room",
    about: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    Available: "In Stock",
    SKU: "RecZkNf2kwmdBcqd0",
    Brand: "Marcos",
    colors: ["blue", "green", "red"]
},
{
    id: 8,
    name: "Dining Table",
    img: "../img/8.jpg",
    cost: "$429.99",
    сategory: "Dining",
    about: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    Available: "In Stock",
    SKU: "RecotY5Nh00DQFdkm",
    Brand: "Ikea",
    colors: ["blue", "green", "red"]
},
{
    id: 9,
    name: "Entertainment Center",
    img: "../img/9.jpg",
    cost: "$599.99",
    сategory: "Living Room",
    about: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    Available: "In Stock",
    SKU: "RecNZ0koOqEmilmoz",
    Brand: "Caressa",
    colors: ["black", "red"]
},
{
    id: 10,
    name: "Utopia Sofa",
    img: "../img/10.jpg",
    cost: "$799.99",
    сategory: "Living Room",
    about: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    Available: "In Stock",
    SKU: "Rec7JInsuCEHgmaGe",
    Brand: "Liddy",
    colors: ["red", "green"]
},
{
    id: 11,
    name: "Leather Sofa",
    img: "../img/11.jpg",
    cost: "$999.99",
    сategory: "Living Room",
    about: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    Available: "In Stock",
    SKU: "RecEOA6qtDag1hRbU",
    Brand: "Caressa",
    colors: ["blue", "green", "red"]
},
{
    id: 12,
    name: "Vase Table",
    img: "../img/12.jpeg",
    cost: "$1,209.99",
    сategory: "Bedroom",
    about: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    Available: "In Stock",
    SKU: "Rec3jeKnhInKHJuz2",
    Brand: "Marcos",
    colors: ["red", "green"]
},
{
    id: 13,
    name: "Sofa Set",
    img: "../img/13.jpeg",
    cost: "$1,299.99",
    сategory: "Office",
    about: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    Available: "In Stock",
    SKU: "Recs5BSVU3qQrOj4E",
    Brand: "Marcos",
    colors: ["gold", "green"]
},
{
    id: 14,
    name: "Wooden Desk",
    img: "../img/14.jpeg",
    cost: "$1,509.99",
    сategory: "Kids",
    about: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    Available: "In Stock",
    SKU: "RecJIjREF3dlFi3sR",
    Brand: "Ikea",
    colors: ["black", "green", "blue"]
},
{
    id: 15,
    name: "Wooden Table",
    img: "../img/15.jpg",
    cost: "$2,349.99",
    сategory: "Dining",
    about: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    Available: "In Stock",
    SKU: "RectfNsySwAJeWDN2",
    Brand: "Caressa",
    colors: ["gold", "red", "blue"]
},
{
    id: 16,
    name: "Wooden Bed",
    img: "../img/16.jpg",
    cost: "$2,500.99",
    сategory: "Bedroom",
    about: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    Available: "In Stock",
    SKU: "Recv2ohxljlK2FZO7",
    Brand: "Ikea",
    colors: ["black", "gold"]
},
{
    id: 17,
    name: "Albany Table",
    img: "../img/17.jpeg",
    cost: "$3,099.99",
    сategory: "Dining",
    about: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    Available: "In Stock",
    SKU: "Rec5NBwZ5zCD9nfF0",
    Brand: "Liddy",
    colors: ["gold", "blue"]
},
];
