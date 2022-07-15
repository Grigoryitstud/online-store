import { slicerProducts } from "./setProducts";
import { setProducts } from "./setProducts";
import { sortProducts } from "./sortProducts";

export const sorts = document.getElementById('sort') as HTMLElement;

const company = document.querySelector(".company") as HTMLElement;
export const products__main: HTMLElement = document.getElementById(
  "products__main"
) as HTMLElement;
const category = document.getElementsByClassName(
  "category"
) as HTMLCollectionOf<HTMLElement>;
const color = document.getElementsByClassName(
  "color"
) as HTMLCollectionOf<HTMLElement>;
export const price = document.getElementById("price") as HTMLElement;
export const checkbox = document.getElementById("checkbox-id") as HTMLElement;
export const btn = document.querySelector(".btn") as HTMLElement;
export const dots = document.querySelector(".dots") as HTMLElement;
export const lines = document.querySelector(".lines") as HTMLElement;

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

dots.addEventListener("click", changeDotsClass);
lines.addEventListener("click", changeLinesClass);

setProducts();

const changeCategory = (a: HTMLElement) => {
  Array.from(category).forEach((box) => {
    box.classList.remove('active')
  });
    a.classList.add('active')

  slicerProducts.сategory = a.innerText;
  console.log(slicerProducts);
  setProducts();
  
};
Array.from(category).forEach((box) => {
  box.addEventListener("click", function () {
    changeCategory(box as HTMLElement);
  });
  console.log(box as HTMLElement);
});


const changeCompany = (a: any) => {
  slicerProducts.brand = a.value;
  console.log(slicerProducts);
  setProducts();
  console.log(a);
};

company.addEventListener("change", (event) => {
  changeCompany(event.target);
});

const changeColor = (a: HTMLElement) => {
  Array.from(color).forEach((box) => {
    box.classList.remove('active')
  });
  if(a.id !== "All"){
    a.classList.add('active')
  };
  slicerProducts.colors = a.id;
  setProducts();
  console.log(slicerProducts);
};

Array.from(color).forEach((box) => {
  box.addEventListener("click", function () {
    changeColor(box as HTMLElement);
  });
});

const changePrice = (a: any) => {
  slicerProducts.cost = a.value;
  console.log(slicerProducts);
  setProducts();
  console.log(a);
};

price.addEventListener("change", (event) => {
  changePrice(event.target);
  console.log(event);
});

const changeFree = (a: any) => {
  if(a.checked !== true) {
    slicerProducts.available = "Out Of Stock";
  } else slicerProducts.available = "All";
  console.log(slicerProducts);
  setProducts();
  console.log(a.checked);
};

checkbox.addEventListener("click", function () {
  changeFree(checkbox);
});

btn.addEventListener("click", function () {
  slicerProducts.cost = 3000;
  slicerProducts.сategory = "All";
  slicerProducts.available = "All";
  slicerProducts.brand = "All";
  slicerProducts.colors = "All";
  setProducts();
});

sorts.addEventListener("change", (event) => {
  sortProducts(event.target);
});

