const product2 = {
    name: 'Shirt',
    ['product-id']: 12345, 
rating: {
    stars : 4.5,
    reviews: 100
},
 fun: function() { 
      console.log('This is a function inside the product object');
 }
}
console.log(product2);
console.log(product2.name);
console.log (product2['name']);
console.log(product2['product-id']);
console.log(product2.rating.stars);
console.log(product2.rating.reviews);
product2.fun();

console.log(typeof console.log );

const jsonString2 = console.log(JSON.stringify(product2));

const jsonString = (JSON.stringify(product2));
console.log(JSON.parse(jsonString));
