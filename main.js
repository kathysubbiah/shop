let carts = document.querySelectorAll('.add-cart');
let products= {
{
name: 'Ripped Skinny Jeans',
tag: 'Ripped Skinny Jeans',
prince: $24.99,
incart: 0
},

{
name: 'Mega Ripped Jeans',
tag: 'Mega Ripped Jeans',
prince: $19.99,
incart: 0
},



{
name: 'Washed Skinny Jeans',
tag: 'Washed Skinny Jeans',
prince: $20.50,
incart: 0
},

{
name: 'Vintage Skinny Jeans',
tag: 'Vintage Skinny Jeans',
prince: $14.99,
incart: 0
},

{
name: 'Mega Ripped Jeans',
tag: 'Mega Ripped Jeans',
prince: $19.99,
incart: 0
},

{
name: 'Washed Skinny Jeans',
tag: 'Washed Skinny Jeans',
prince: $20.50,
incart: 0
},

{
name: 'Vintage Skinny Jeans',
tag: 'Vintage Skinny Jeans',
prince: $14.99,
incart: 0
},

{
name: 'Ripped Skinny Jeans',
tag: 'Ripped Skinny Jeans',
prince: $24.99,
incart: 0
},

for (let i=0; i< carts.length; i++)
{
console.log("my loop");
carts[i].addEventListerner('click', () => {
cartNumbers(product[i]);
totalCost(products[i])
})
}
function onLoadCartNumbers()
{
let productNumbers = localStorage.getItem('cartNumbers');

if(productNumbers){
documet.querySelector('........).textContect = prodcutNumbers;
}
}

function cartNumbers(product){

let productNumbers = localStorage.getItem('cartNumbers');

productNumbers = parseInt(productNumbers);

if(productNumbers) {

localStorage.setItem('cartNumber',productNumbers + 1);
} else{

localStorage.setItem('cartNumber', 1);
document.querySelector(............).textcontent = p
}
setItems(product)
}

fuction setItems(product){
let cartItems= localStorage.getItem('productsInCart');
console.log("My carItems are", cartItems);
cartItems.JSON.parse(cartItems);

if(cartItems != null){
if(cartItems[product.tag]!=undefined){
cartItems={
...cartItems,
[product.tag]:product
}
}
cartItems[product.tag].inCart+=1;

}else{
product.incart=1;

let cartItems = {
[product.tag]:product
}

}

localStorage.setItem("productsInCart",JSON.stringify,(cartItems));
}
function totalCost(product){
let cartCost = localStorage.getItem('totalCost');
cartCost = parseInt(cartCost);

console.log("My cartCost is", cartCost);
console.log(typeof cartCost);

if(cartCost != null){
localStorage.setItem("totalCost", cartCost+ product.price);

}else{
localStorage.setItem("totalCost", product.price);
}
}

function displayCart(){
let cartItems = localstorage.getItem("productsInCart");
cartItem = JSON.parse(cartItem);
 console.log(cartItems);
}

onLoadCardNumers();



