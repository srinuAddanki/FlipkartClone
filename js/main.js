const products=[
    {
        id:1,
        name:"smartphone",
        description:"Latest model with high-end features",
        price: 15000,
        image:'https://via.placeholder.com/200',
    },
    {
        id:2,
        name:"laptop",
        description:"Powerful laptop for all your needs",
        price: 50000,
        image:'https://via.placeholder.com/200',
    }
];
const cart=[];
const productsContainer=document.getElementById('products');
if(productsContainer){
    products.forEach(product => {
        const productCard=`
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}INR</p>
            <a href="product.html"?id=${product.id}" >view deatilas</a>
        </div>
        `;
        productsContainer.innerHTML+=productCard;
    });
}
const productDetails= window.location.search;
if(productDetails.includes('?id=')){
    const id=new URLSearchParams(productDetails).get('id');
    const product=products.find(p => p.id == id);
    if(product){
        document.getElementById('product-image').src=product.image;
        document.getElementById('product-name').innerText=product.name;
        document.getElementById('product-description').innerText=product.description;
        document.getElementById('product-price').innerText=product.price;

}
}

function addToCart(){
    const productId=new URLSearchParams(window.location.search).get('id');
    const product=products.find(p => p.id == productId);
    cart.push(product);
    alert('product added to cart');
}

const cartItemsContainer=document.getElementById('cart-items');
if(cartItemsContainer){
    cart.forEach(item => {
        const cartItem=`
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div>
            <h3>${item.name}</h3>
            <p>${item.price}INR</p>
            </div>
        </div>
        `;
        cartItemsContainer.innerHTML+=cartItem;
    });
}

function checkout() {
    alert('Checkout functionality is not implemented yet.');
}



















