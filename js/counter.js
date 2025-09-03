// Counter animation function with consistent speed
function animateCounter(element, target, duration = 500) {
    const startTime = performance.now();
    const startValue = 0;
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        const current = Math.floor(startValue + (easeOut * (target - startValue)));
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target; // Ensure final value is exact
        }
    }
    
    requestAnimationFrame(update);
}

// Initialize intersection observer for individual counters
function initIndividualCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    
    const observerOptions = {
        threshold: 0.3, // Trigger when 30% of the KPI card is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before fully visible
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                
                // Check if already animated
                if (!counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    // Each counter starts immediately when its KPI card comes into view
                    animateCounter(counter, target);
                    
                    // Stop observing this specific counter after animation starts
                    observer.unobserve(counter);
                }
            }
        });
    }, observerOptions);
    
    // Observe each individual counter
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initIndividualCounterAnimation(); // Animates each counter individually
});