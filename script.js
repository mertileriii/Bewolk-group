// ==========================
// 📱 Mobil Menü
// ==========================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// ==========================
// 🎯 Smooth Scroll Navigation
// ==========================
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ==========================
// 🧭 Navbar scroll efekti
// ==========================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = 'none';
    }
  }
});

// ==========================
// 💬 Bildirim sistemi
// ==========================
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
      <span>${message}</span>
    </div>
    <button class="notification-close">
      <i class="fas fa-times"></i>
    </button>
  `;

  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#10b981' : '#3b82f6'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 1rem;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    max-width: 400px;
  `;

  document.body.appendChild(notification);
  setTimeout(() => (notification.style.transform = 'translateX(0)'), 100);

  notification.querySelector('.notification-close').addEventListener('click', () => {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => notification.remove(), 300);
  });

  setTimeout(() => {
    if (document.body.contains(notification)) {
      notification.style.transform = 'translateX(400px)';
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// ==========================
// 🎢 Aşağı ok - Hero’dan Hakkımızda’ya kaydırma
// ==========================
const scrollDownBtn = document.getElementById("scrollToContent");

if (scrollDownBtn) {
  scrollDownBtn.addEventListener("click", () => {
    const nextSection = document.querySelector(".brand-content");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// ==========================
// ⬆️ Başa dön butonu
// ==========================
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: #000;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.opacity = '1';
    backToTopBtn.style.visibility = 'visible';
  } else {
    backToTopBtn.style.opacity = '0';
    backToTopBtn.style.visibility = 'hidden';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

backToTopBtn.addEventListener('mouseenter', () => {
  backToTopBtn.style.transform = 'translateY(-2px)';
  backToTopBtn.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
});
backToTopBtn.addEventListener('mouseleave', () => {
  backToTopBtn.style.transform = 'translateY(0)';
  backToTopBtn.style.boxShadow = 'none';
});

// ==========================
// ✨ Scroll Reveal efektleri
// ==========================
function revealOnScroll() {
  const reveals = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);
document.addEventListener("DOMContentLoaded", () => {
  const scrollDownBtn = document.querySelector(".scroll-down");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
 });
  // 🔽 Aşağı ok tıklanınca .brand-content kısmına kaydır
  if (scrollDownBtn) {
    scrollDownBtn.addEventListener("click", () => {
      const nextSection = document.querySelector(".brand-content");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // 🔼 Yukarı dön butonu görünür/gizlenir
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "flex";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  // 🔼 Yukarı dön butonu işlevi
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

 // ✅ Dokunmatik ve fare destekli kaydırma


 document.addEventListener("DOMContentLoaded", () => {
  const photoSlider = document.querySelector(".photo-slider");
  if (!photoSlider) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  // 🖱️ Fare olayları
  photoSlider.addEventListener("mousedown", (e) => {
    isDown = true;
    photoSlider.classList.add("active");
    startX = e.pageX - photoSlider.offsetLeft;
    scrollLeft = photoSlider.scrollLeft;
  });

  photoSlider.addEventListener("mouseleave", () => {
    isDown = false;
    photoSlider.classList.remove("active");
  });

  photoSlider.addEventListener("mouseup", () => {
    isDown = false;
    photoSlider.classList.remove("active");
  });

  photoSlider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - photoSlider.offsetLeft;
    const walk = (x - startX) * 1.5;
    photoSlider.scrollLeft = scrollLeft - walk;
  });

  // 📱 Dokunmatik olaylar (MOBİL)
  photoSlider.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - photoSlider.offsetLeft;
    scrollLeft = photoSlider.scrollLeft;
  }, { passive: true });

  photoSlider.addEventListener("touchend", () => {
    isDown = false;
  });

  photoSlider.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - photoSlider.offsetLeft;
    const walk = (x - startX) * 1.5;
    photoSlider.scrollLeft = scrollLeft - walk;
  }, { passive: false });
});
