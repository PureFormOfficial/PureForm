function addToCart(name, price){

let cart =
JSON.parse(
localStorage.getItem(
"pureformCart"
)
) || [];

cart.push({
name:name,
price:price
});

localStorage.setItem(
"pureformCart",
JSON.stringify(cart)
);

alert(name + " added to cart");

}
