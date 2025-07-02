const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) body.className = savedTheme;

    // Set initial button icon based on theme
    if (body.classList.contains("dark-theme")) {
      toggleBtn.textContent = "🔆"; // Sun for dark mode (switch to light)
    } else {
      toggleBtn.textContent = "🌙"; // Moon for light mode (switch to dark)
    }

    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark-theme");
      body.classList.toggle("light-theme");
      const currentTheme = body.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
      localStorage.setItem("theme", currentTheme);
      // Toggle button icon
      if (body.classList.contains("dark-theme")) {
        toggleBtn.textContent = "🔆"; // Sun for dark mode (switch to light)
      } else {
        toggleBtn.textContent = "🌙"; // Moon for light mode (switch to dark)
      }
    });

     // Make sure the carousel auto-slides every 1.5 seconds
  var collabCarousel = document.getElementById('collabCarousel');
  if (collabCarousel) {
    var carousel = new bootstrap.Carousel(collabCarousel, {
      interval:1500,
      ride: 'carousel',
      pause: false,
      wrap: true
    });
  }