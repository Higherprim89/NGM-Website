document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.enlargeable-image');
    const overlay = document.querySelector('.fullscreen-overlay');
    const fullscreenImg = document.querySelector('.fullscreen-image');
    const closeBtn = document.querySelector('.close-fullscreen');

    // Open fullscreen
    image.addEventListener('click', function() {
        overlay.style.display = 'block';
        fullscreenImg.src = this.src;
        fullscreenImg.alt = this.alt;
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Close fullscreen
    closeBtn.addEventListener('click', function() {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close when clicking outside image
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.style.display === 'block') {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});