import { products__main } from "./index";

const product = document.getElementsByClassName(
  "product"
) as HTMLCollectionOf<HTMLElement>;

const orderFunctions = {
  ascendingByCost: (a: any, b: any) => a.dataset.cost - b.dataset.cost,
  descendingByCost: (a: any, b: any) => b.dataset.cost - a.dataset.cost,
  ascendingByName: (a: any, b: any) =>{
    var nameA=a.dataset.value.toLowerCase(), nameB=b.dataset.value.toLowerCase()
    if (nameA < nameB) //сортируем строки по возрастанию
      return -1
    if (nameA > nameB)
      return 1
    return 0 // Никакой сортировки
    },
    //  a.dataset.value - b.dataset.value,
  descendingByName: (a: any, b: any) => {
    var nameA=a.dataset.value.toLowerCase(), nameB=b.dataset.value.toLowerCase()
    if (nameA < nameB)
      return 1
    if (nameA > nameB)
      return -1
    return 0 
    }
}

let currentOrder = orderFunctions.ascendingByCost

export const sortProducts = (a: any) => {
  console.log(a.value);  
  if(a.value == "price(Lowest)"){
    currentOrder = orderFunctions.ascendingByCost;
  }
  if(a.value == "price(Highest)"){
    currentOrder = orderFunctions.descendingByCost;
  }
  if(a.value == "name(A-Z)"){
    currentOrder = orderFunctions.ascendingByName;
  }
  if(a.value == "name(Z-A)"){
    currentOrder = orderFunctions.descendingByName;
  }
  order()
}

const order = function() {
  console.log(currentOrder); 
  const ordered = [...document.getElementsByClassName('product')].sort(currentOrder)
  console.log(ordered)
  let prod: string [] = [];
  Array.from(ordered).forEach((box: any) => {
    products__main.appendChild(box)
    prod.push(`<div class="product" data-value="${box.dataset.value}" data-cost="${box.dataset.cost}">${box.innerHTML}</div>`);
    box.innerHTML
    console.log(box.innerHTML)
  });
  console.log(prod)
  products__main.innerHTML = prod.join("");
  
}
