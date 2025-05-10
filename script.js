const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})

// scripts.js
// const cartItems = document.getElementById('cartItems');

// function addToCart(itemName, itemPrice) {
//     const itemCard = document.createElement('div');
//     itemCard.classList.add('item-card');

//     const img = document.createElement('img');
//     img.src = 'images/fragments.jpg'; // Replace with your image path
//     img.alt = itemName;

//     const itemInfo = document.createElement('div');
//     itemInfo.classList.add('item-info');

//     const title = document.createElement('h3');
//     title.textContent = itemName;
//     itemInfo.appendChild(title);

//     const price = document.createElement('p');
//     price.textContent = `$${itemPrice}`;
//     itemInfo.appendChild(price);

//     itemCard.appendChild(img);
//     itemCard.appendChild(itemInfo);

//     cartItems.appendChild(itemCard);
// }

// function checkout() {
//     alert('Checkout process will go here.');
//     // Implement your checkout logic
// }