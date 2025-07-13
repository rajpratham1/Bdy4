document.addEventListener('DOMContentLoaded', () => {
    const openBookBtn = document.getElementById('openBookBtn');
    const bookContainer = document.getElementById('bookContainer');
    
    // --- Scrapbook Cover (index.html) Logic ---
    if (document.body.classList.contains('scrapbook-cover')) {
        if (openBookBtn && bookContainer) {
            openBookBtn.addEventListener('click', () => {
                
                // 1. Add the 'open' class to trigger the CSS transition
                bookContainer.classList.add('open');
                
                // 2. Hide the latch immediately (optional, for visual effect)
                openBookBtn.style.opacity = 0;
                
                // 3. Wait for the animation to complete (1.5s) and then navigate
                setTimeout(() => {
                    // Navigate to the next page (Timeline Page)
                    window.location.href = 'timeline.html'; 
                }, 1500); 
            });
        }
    }

    // --- Placeholder for other page interactions (e.g., final.html confetti) ---
    if (document.body.classList.contains('final-page')) {
        // Future JavaScript logic for final page animations (e.g., confetti) can go here.
    }
});
