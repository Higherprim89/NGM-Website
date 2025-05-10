// In your gallery.js (or within <script> tags)
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.artwork-card button');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const artworkCard = this.closest('.artwork-card');
            
            const artwork = {
                id: artworkCard.querySelector('img').src, // Unique identifier
                name: artworkCard.querySelector('h3').textContent,
                price: parseFloat(artworkCard.querySelector('.price').textContent.replace('$', '').replace(',', '')),
                image: artworkCard.querySelector('img').src,
                description: artworkCard.querySelector('p').textContent,
                quantity: 1
            };

            addToCart(artwork);
            updateCartCount();
            
            // Visual feedback
            const originalText = this.textContent;
            this.textContent = 'Added!';
            setTimeout(() => {
                this.textContent = originalText;
            }, 1000);
        });
    });

    function addToCart(item) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push(item);
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        document.querySelector('.cart-count-badge').textContent = count;
    }

    // Initialize count on page load
    updateCartCount();
});