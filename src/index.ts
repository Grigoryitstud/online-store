import { products } from "./products";
const products__main: HTMLElement = document.getElementById(
  "products__main"
) as HTMLElement;
const category = document.getElementsByClassName(
  "category"
)  as HTMLCollectionOf<HTMLElement> ;
const product = document.getElementsByClassName(
  "product"
)  as HTMLCollectionOf<HTMLElement> ;
const dots = document.querySelector('.dots') as HTMLElement;
const lines = document.querySelector('.lines') as HTMLElement;

const setProducts = () => {
  let imeges = products.map((prod) => `<div class="product active"><img class="product__img" src="${prod.img}" alt=""><div class="product__about"><h4>${prod.name}</h4><h4>${prod.cost}</h4><h4 class="inline">${prod.about}</h4><h4 class="inline">Available: ${prod.Available}</h4><h4 class="inline">SKU: ${prod.SKU}</h4><h4 class="inline">Brand: ${prod.Brand}</h4><h4 class="inline">Colors: ${prod.colors}</h4></div></div>`);

  products__main.innerHTML = imeges.join("");
};
setProducts();
const changeDotsClass = () => {
  dots.classList.add('active');
  lines.classList.remove('active');
  products__main.classList.remove('active');
};
const changeLinesClass = () => {
  lines.classList.add('active');
  dots.classList.remove('active');
  products__main.classList.add('active');
};
const changeCategory = (a: string) => {
 console.log(a);
}
Array.from(category).forEach(box => {
  box.addEventListener('click', function(){ changeCategory(box.innerText); })
  console.log(box.innerText);
});

  // for (let i = 0; i < category.length; i++) {
  //   category[i].addEventListener('click', changeCategory(category[i].innerHTML: any));
  // }

dots.addEventListener('click', changeDotsClass);
lines.addEventListener('click', changeLinesClass);