// Image gallery data
const images = [
  {
    url: 'images/image1.jpg',
    thumb: 'images/image1.jpg',
    alt: 'Apartment view 1',
  },
  {
    url: 'images/image2.jpg',
    thumb: 'images/image2.jpg',
    alt: 'Apartment view 2',
  },
  {
    url: 'images/image3.jpg',
    thumb: 'images/image3.jpg',
    alt: 'Apartment view 3',
  },
  {
    url: 'images/image4.jpg',
    thumb: 'images/image4.jpg',
    alt: 'Apartment view 4',
  },
  {
    url: 'images/image5.jpg',
    thumb: 'images/image5.jpg',
    alt: 'Apartment view 5',
  },
  {
    url: 'images/image6.jpg',
    thumb: 'images/image6.jpg',
    alt: 'Apartment view 6',
  },
  {
    url: 'images/image7.jpg',
    thumb: 'images/image7.jpg',
    alt: 'Apartment view 7',
  },
  {
    url: 'images/image8.jpg',
    thumb: 'images/image8.jpg',
    alt: 'Apartment view 8',
  },
  {
    url: 'images/image9.jpg',
    thumb: 'images/image9.jpg',
    alt: 'Apartment view 9',
  },
  {
    url: 'images/image10.jpg',
    thumb: 'images/image10.jpg',
    alt: 'Apartment view 10',
  },
  {
    url: 'images/image11.jpg',
    thumb: 'images/image11.jpg',
    alt: 'Apartment view 11',
  },
];

let currentImageIndex = 0;

// Initialize gallery
function initGallery() {
  updateImage();
  updateCounter();

  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      changeImage(-1);
    } else if (e.key === 'ArrowRight') {
      changeImage(1);
    }
  });

  // Preload images for smooth transitions
  preloadImages();
}

// Change image (next/previous)
function changeImage(direction) {
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails[currentImageIndex].classList.remove('active');

  currentImageIndex += direction;

  // Loop around
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }

  updateImage();
  updateCounter();
  thumbnails[currentImageIndex].classList.add('active');
}

// Select specific image
function selectImage(index) {
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails[currentImageIndex].classList.remove('active');

  currentImageIndex = index;

  updateImage();
  updateCounter();
  thumbnails[currentImageIndex].classList.add('active');
}

// Update main image
function updateImage() {
  const mainImage = document.getElementById('mainImage');
  const newImage = images[currentImageIndex];

  // Fade out effect
  mainImage.style.opacity = '0';

  setTimeout(() => {
    mainImage.src = newImage.url;
    mainImage.alt = newImage.alt;
    // Fade in effect
    mainImage.style.opacity = '1';
  }, 300);
}

// Update image counter
function updateCounter() {
  document.getElementById('currentImage').textContent = currentImageIndex + 1;
  document.getElementById('totalImages').textContent = images.length;
}

// Preload images
function preloadImages() {
  images.forEach((image) => {
    const img = new Image();
    img.src = image.url;
  });
}

// Auto-play slideshow (optional)
let autoPlayInterval;
let isAutoPlaying = false;

function toggleAutoPlay() {
  if (isAutoPlaying) {
    clearInterval(autoPlayInterval);
    isAutoPlaying = false;
  } else {
    autoPlayInterval = setInterval(() => {
      changeImage(1);
    }, 4000);
    isAutoPlaying = true;
  }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Add scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
  initGallery();

  const sections = document.querySelectorAll('.container > section');
  sections.forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
});

// Handle CTA button click
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
  ctaButton.addEventListener('click', () => {
    // You can customize this action
    alert(
      'Thank you for your interest! Please contact us at rental@example.com or call (123) 456-7890 to schedule a viewing.'
    );

    // Or redirect to a contact form
    // window.location.href = 'contact.html';

    // Or open email client
    // window.location.href = 'mailto:rental@example.com?subject=House Rental Inquiry';
  });
}

// Add parallax effect to hero image (optional enhancement)
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.gallery-main');
  if (hero && scrolled < 800) {
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// Lazy loading for thumbnails (performance optimization)
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('.thumbnail').forEach((img) => {
    imageObserver.observe(img);
  });
}
