document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart in localStorage if it doesn't exist
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.artwork-card button');
    
    // Add event listeners to each button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the parent artwork card
            const artworkCard = this.closest('.artwork-card');
            
            // Extract artwork details
            const artwork = {
                id: artworkCard.querySelector('img').src, // Using image src as ID
                name: artworkCard.querySelector('h3').textContent,
                price: parseFloat(artworkCard.querySelector('.price').textContent.replace('$', '')),
                image: artworkCard.querySelector('img').src,
                description: artworkCard.querySelector('p').textContent,
                quantity: 1
            };

            // Add to cart
            addToCart(artwork);
            
            // Optional: Provide visual feedback
            this.textContent = 'Added!';
            setTimeout(() => {
                this.textContent = 'Add to Cart';
            }, 1000);
        });
    });

    // Function to add item to cart
    function addToCart(artwork) {
        const cart = JSON.parse(localStorage.getItem('cart'));
        
        // Check if artwork already exists in cart
        const existingItemIndex = cart.findIndex(item => item.id === artwork.id);
        
        if (existingItemIndex !== -1) {
            // If artwork exists, increase quantity
            cart[existingItemIndex].quantity += 1;
        } else {
            // If artwork doesn't exist, add it to cart
            cart.push(artwork);
        }
        
        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update cart count in the UI if you have one
        updateCartCount();
    }

    // Function to update cart count display
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart'));
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        
        // Update cart count element if it exists
        const cartCountElement = document.querySelector('.cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = count;
        }
    }

    // Initialize cart count on page load
    updateCartCount();
});