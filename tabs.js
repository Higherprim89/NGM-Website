// document.addEventListener('DOMContentLoaded', function() {
//     const tabButtons = document.querySelectorAll('.tab-button');
    
//     tabButtons.forEach(button => {
//       button.addEventListener('click', () => {
//         // Remove active class from all buttons and content
//         document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
//         document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
//         // Add active class to clicked button
//         button.classList.add('active');
        
//         // Show corresponding content
//         const tabId = button.getAttribute('data-tab');
//         document.getElementById(`${tabId}-tab`).classList.add('active');
//       });
//     });
//   });

  // New tab behavior

  document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const backLink = document.querySelector('.back-link');
    
    // Function to activate a tab
    function activateTab(tabId) {
        // Remove active class from all buttons and content
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Add active class to specified button and content
        document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
        document.getElementById(`${tabId}-tab`).classList.add('active');
        
        // Store the active tab
        sessionStorage.setItem('activeTab', tabId);
    }
    
    // Set up tab button click handlers
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            activateTab(tabId);
        });
    });
    
    // Check for stored tab on page load
    const storedTab = sessionStorage.getItem('activeTab');
    if (storedTab) {
        activateTab(storedTab);
        
        // Update back link to include tab parameter
        backLink.href = `Gallery.html?tab=${storedTab}`;
    }
    
    // Check for tab parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlTab = urlParams.get('tab');
    if (urlTab) {
        activateTab(urlTab);
    }
});