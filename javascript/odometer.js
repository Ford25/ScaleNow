function animateOdometer(odometer) {
    const count = odometer.getAttribute("data-count");
    const duration = 2500; // Animation duration in milliseconds
    let start = null;
    
    // Request animation frame loop
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      odometer.innerHTML = Math.floor(progress / duration * count);

      
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }

    
    
    // Start the animation loop when the element comes into view
    function startAnimation() {
      if (isElementInViewport(odometer)) {
        window.requestAnimationFrame(step);
        window.removeEventListener("scroll", startAnimation);
      }
    }
    window.addEventListener("scroll", startAnimation);
  }
  
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Animate all the odometer elements on the page
  const odometers = document.querySelectorAll(".odometer");
  odometers.forEach(animateOdometer);

  

  

  