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
  // Scrollspy-like active nav highlighting
    document.addEventListener('DOMContentLoaded', function() {
      const sections = [
        {id: 'about'},
        {id: 'Services'},
        {id: 'Impact'},
        {id: 'join-us'},
        {id: 'Join'},
        {id: 'Testimonal'},
        {id: 'contact'},
        {id: 'donate'}
      ];
      const navLinks = Array.from(document.querySelectorAll('.nav-link'));
      function onScroll() {
        let scrollPos = window.scrollY || window.pageYOffset;
        let offset = 80; // adjust for fixed navbar height
        let found = false;
        for (let i = sections.length - 1; i >= 0; i--) {
          let section = document.getElementById(sections[i].id);
          if (section) {
            let sectionTop = section.offsetTop - offset;
            if (scrollPos >= sectionTop) {
              navLinks.forEach(link => link.classList.remove('active'));
              let activeLink = navLinks.find(link => link.getAttribute('href') === '#' + sections[i].id);
              if (activeLink) activeLink.classList.add('active');
              found = true;
              break;
            }
          }
        }
        if (!found) navLinks.forEach(link => link.classList.remove('active'));
      }
      window.addEventListener('scroll', onScroll);
      onScroll();
    });