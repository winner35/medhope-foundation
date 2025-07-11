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

  // Ensure hero section animates in and is visible
window.addEventListener('DOMContentLoaded', function() {
  var hero = document.querySelector('.hero');
  if (hero) {
    hero.style.opacity = '0';
    setTimeout(function() {
      hero.style.transition = 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)';
      hero.style.opacity = '1';
    }, 200);
  }

  // Smooth scroll for Donate Now button
  var donateBtn = document.getElementById('hero-donate-btn');
  var donateSection = document.getElementById('donate');
  if (donateBtn && donateSection) {
    donateBtn.addEventListener('click', function(e) {
      e.preventDefault();
      donateSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});

// Custom confirmation popup for Join Us form
function showJoinConfirmation(e) {
  e.preventDefault();
  const joinUsForm = document.querySelector('#join-us form');
  const nameInput = joinUsForm.querySelector('input[name="name"]');
  const userName = nameInput ? nameInput.value.trim() : '';
  let message = userName ? `Thank you, ${userName}, for joining our health mission!` : 'Thank you for joining our health mission!';
  showCustomPopup(message);
  joinUsForm.reset();
  return false;
}

function showCustomPopup(message) {
  // Remove any existing popup
  const oldPopup = document.getElementById('custom-join-popup');
  if (oldPopup) oldPopup.remove();

  // Create popup container
  const popup = document.createElement('div');
  popup.id = 'custom-join-popup';
  popup.innerHTML = `
    <div class="popup-overlay"></div>
    <div class="popup-content">
      <span class="popup-close" tabindex="0">&times;</span>
      <div class="popup-message">${message}</div>
    </div>
  `;
  document.body.appendChild(popup);

  // Animate in
  setTimeout(() => popup.classList.add('show'), 10);

  // Close logic
  function closePopup() {
    popup.classList.remove('show');
    setTimeout(() => popup.remove(), 300);
  }
  popup.querySelector('.popup-close').onclick = closePopup;
  popup.querySelector('.popup-close').onkeydown = function(e) { if (e.key === 'Enter' || e.key === ' ') closePopup(); };
  popup.querySelector('.popup-overlay').onclick = closePopup;
}