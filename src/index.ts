import { products } from "./products";
const products__main: HTMLElement = document.getElementById("products__main") as HTMLElement;
const category = document.getElementsByClassName("category") as HTMLCollectionOf<HTMLElement>;
const company = document.getElementById("company") as HTMLElement;
const product = document.getElementsByClassName("product") as HTMLCollectionOf<HTMLElement>;
const dots = document.querySelector(".dots") as HTMLElement;
const lines = document.querySelector(".lines") as HTMLElement;

interface slicer {
  cost: number,
  сategory: string,
  available: string,
  brand: string,
  colors: string
}
let slicerProducts: slicer = {
  cost: 3000,
  сategory: "All",
  available: "All",
  brand: "All",
  colors: "All"
};
// const slicerProducts: slicer;

const setProducts = () => {
  let imeges = products.map(
    (prod) => {
      if(slicerProducts.сategory !== "All") {
        if(slicerProducts.available !== "All") {
          if(slicerProducts.cost !== 3000) {
            if(slicerProducts.brand !== "All") {
              if(slicerProducts.colors !== "All") {
                Array.from(prod.colors).forEach((el) => {
                  if(el == slicerProducts.colors) {
                        return `<div class="product active"><img class="product__img" src="${prod.img}" alt=""><div class="product__about"><h4>${prod.name}</h4><h4>${prod.cost}</h4><h4 class="inline">${prod.about}</h4><h4 class="inline">available: ${prod.available}</h4><h4 class="inline">SKU: ${prod.SKU}</h4><h4 class="inline">brand: ${prod.brand}</h4><h4 class="inline">Colors: ${prod.colors}</h4></div></div>`
                      }
                });
              }
              if(prod.cost == slicerProducts.cost) {
                return `<div class="product active"><img class="product__img" src="${prod.img}" alt=""><div class="product__about"><h4>${prod.name}</h4><h4>${prod.cost}</h4><h4 class="inline">${prod.about}</h4><h4 class="inline">available: ${prod.available}</h4><h4 class="inline">SKU: ${prod.SKU}</h4><h4 class="inline">brand: ${prod.brand}</h4><h4 class="inline">Colors: ${prod.colors}</h4></div></div>`
              }
            }
            if(prod.cost <= slicerProducts.cost) {
              return `<div class="product active"><img class="product__img" src="${prod.img}" alt=""><div class="product__about"><h4>${prod.name}</h4><h4>${prod.cost}</h4><h4 class="inline">${prod.about}</h4><h4 class="inline">available: ${prod.available}</h4><h4 class="inline">SKU: ${prod.SKU}</h4><h4 class="inline">brand: ${prod.brand}</h4><h4 class="inline">Colors: ${prod.colors}</h4></div></div>`
            }
          }
          if(prod.available == slicerProducts.сategory) {
            return `<div class="product active"><img class="product__img" src="${prod.img}" alt=""><div class="product__about"><h4>${prod.name}</h4><h4>${prod.cost}</h4><h4 class="inline">${prod.about}</h4><h4 class="inline">available: ${prod.available}</h4><h4 class="inline">SKU: ${prod.SKU}</h4><h4 class="inline">brand: ${prod.brand}</h4><h4 class="inline">Colors: ${prod.colors}</h4></div></div>`
          }
        }
        if(prod.сategory == slicerProducts.сategory) {
          return `<div class="product active"><img class="product__img" src="${prod.img}" alt=""><div class="product__about"><h4>${prod.name}</h4><h4>${prod.cost}</h4><h4 class="inline">${prod.about}</h4><h4 class="inline">available: ${prod.available}</h4><h4 class="inline">SKU: ${prod.SKU}</h4><h4 class="inline">brand: ${prod.brand}</h4><h4 class="inline">Colors: ${prod.colors}</h4></div></div>`
        }
      } else return `<div class="product active"><img class="product__img" src="${prod.img}" alt=""><div class="product__about"><h4>${prod.name}</h4><h4>${prod.cost}</h4><h4 class="inline">${prod.about}</h4><h4 class="inline">available: ${prod.available}</h4><h4 class="inline">SKU: ${prod.SKU}</h4><h4 class="inline">brand: ${prod.brand}</h4><h4 class="inline">Colors: ${prod.colors}</h4></div></div>`
    }
     
  );
  products__main.innerHTML = imeges.join("");
};
setProducts();
const changeDotsClass = () => {
  dots.classList.add("active");
  lines.classList.remove("active");
  products__main.classList.remove("active");
};
const changeLinesClass = () => {
  lines.classList.add("active");
  dots.classList.remove("active");
  products__main.classList.add("active");
};
const changeCategory = (a: string) => {
  slicerProducts.сategory = a;
  setProducts();
  console.log(a);
};
const changeCompany = (a: string) => {
  slicerProducts.brand = a;
  setProducts();
  console.log(a);
};
Array.from(category).forEach((box) => {
  box.addEventListener("click", function () {
    changeCategory(box.innerText);
  });
  console.log(box.innerText);
});

company.onchange = () => {
  console.log(company.value);
};

// Array.from(company).forEach((box) => {
//   box.addEventListener("click", function () {
//     changeCompany(box.innerText);
//   });
//   console.log(box.innerText);
// });

// for (let i = 0; i < category.length; i++) {
//   category[i].addEventListener('click', changeCategory(category[i].innerHTML: any));
// }

dots.addEventListener("click", changeDotsClass);
lines.addEventListener("click", changeLinesClass);
