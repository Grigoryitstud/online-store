import { products } from "./products";
import { products__main } from "./index";
import { sorts} from "./index";
import { sortProducts } from "./sortProducts";
const n = document.getElementById('n') as HTMLElement;

interface slicer {
  cost: number;
  сategory: string;
  available: string;
  brand: string;
  colors: string;
}
export let slicerProducts: slicer = {
  cost: 3000,
  сategory: "All",
  available: "All",
  brand: "All",
  colors: "All",
};
// const slicerProducts: slicer;

export const setProducts = () => {
  let images: string [] = [];
  let num: number = 0;
  Array.from(products).forEach((prod) => {
    if ((slicerProducts.сategory == "All" || slicerProducts.сategory == prod.сategory) &&
    (slicerProducts.brand == "All" || slicerProducts.brand == prod.brand) &&
    (slicerProducts.available == "All" || slicerProducts.available == prod.available) &&
    (slicerProducts.cost == 3000 || slicerProducts.cost >= prod.cost)) {
      if (slicerProducts.colors == "All") {
        console.log(`yesssss`);
        images.push(`<div class="product" data-value="${prod.name}" data-cost="${prod.cost}"><img class="product__img" src="${prod.img}" alt=""><div class="product__about"><h4>${prod.name}</h4><h4>${prod.cost}</h4><h4 class="inline">${prod.about}</h4><h4 class="inline">available: ${prod.available}</h4><h4 class="inline">SKU: ${prod.SKU}</h4><h4 class="inline">brand: ${prod.brand}</h4><h4 class="inline">Colors: ${prod.colors}</h4></div></div>`);
        num++;
      } else {
        Array.from(prod.colors).forEach((el) => {
                if (el == slicerProducts.colors) {
                  console.log(`yesssss ${slicerProducts.colors}`);
                  images.push(`<div class="product" data-value="${prod.name}" data-cost="${prod.cost}"><img class="product__img" src="${prod.img}" alt=""><div class="product__about"><h4>${prod.name}</h4><h4>${prod.cost}</h4><h4 class="inline">${prod.about}</h4><h4 class="inline">available: ${prod.available}</h4><h4 class="inline">SKU: ${prod.SKU}</h4><h4 class="inline">brand: ${prod.brand}</h4><h4 class="inline">Colors: ${prod.colors}</h4></div></div>`);
                  num++;
                } else console.log(`no right color`);
              });
            }
      }});
      n.innerHTML = `${num}`;
      console.log(num);
  products__main.innerHTML = images.join("");
  sortProducts(sorts);
};