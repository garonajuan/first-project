let searchEngine;


function Products(id, name, brand, price, type) {
  this.id = id;
  this.name = name;
  this.brand = brand;
  this.price = price;
  this.type = type;
}


let product1 = new Products(1, 'Hidrosomas', 'Lhiderma', 960, 'Crema Hidratante');
let product2 = new Products(2, 'SkinBioma', 'Lhiderma', 1005, 'Tónico');
let product3 = new Products(3, 'Biosmotic', 'Lhiderma', 1065, 'Serum');
let product4 = new Products(4, 'Radian C', 'Lhiderma', 1100, 'Serum');
let product5 = new Products(5, 'Hydrapore', 'Lhiderma', 975, 'Tónico');
let product6 = new Products(6, 'Formula Limpieza', 'Lhiderma', 785, 'Limpieza');




let totalPrice = 0;


console.log(product1);