const navLinks = document.querySelectorAll('.navbar a');
const navbar = document.querySelector('.navbar');
const underline = document.querySelector('.navbar .underline');

function updateUnderline() {
const activeLink = document.querySelector('.navbar a.active');
if (activeLink) {
    const isLastChild = activeLink === navLinks[navLinks.length - 1];
    if (isLastChild) {
        underline.style.display = 'none';
    } else {
        underline.style.display = 'block';
        const linkRect = activeLink.getBoundingClientRect();
        const navbarRect = navbar.getBoundingClientRect();
        const translateX = linkRect.left - navbarRect.left + (linkRect.width - 38) / 2;
        underline.style.transform = `translateX(${translateX}px)`;
        underline.style.left = `${translateX * 0.03}px`
    }
}
}

navLinks.forEach(link => {
link.addEventListener('click', function(e) {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    if(this.innerText === "Services") {
        window.location.href = "services.html";
    } 
    if(this.innerText === "Artemis Partnership") {
        window.location.href = "artemis.html";
    } 
    if(this.innerText === "Home") {
        window.location.href = "index.html"
    }
    if(this.innerText === "About Us") {
        window.location.href = "about-us.html"
    }
    requestAnimationFrame(() => {
        updateUnderline();
    });
});
});

window.addEventListener('load', updateUnderline);
window.addEventListener('resize', updateUnderline);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hamburger-menu').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('active');
    });

    document.getElementById('closebtn').addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('active');
    });
    
    document.addEventListener('click', function(event) {
        var sidebar = document.getElementById('sidebar');
        var hamburger = document.getElementById('hamburger');
        if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });

const images = [
    'https://picsum.photos/id/1015/800/600',
    'https://picsum.photos/id/1016/800/600', 
    'https://picsum.photos/id/1018/800/600',
    'https://picsum.photos/id/1019/800/600',
    'https://picsum.photos/id/1021/800/600' 
];

const carousel = document.getElementById('carousel');
const indicators = document.getElementById('carousel-indicators');

let currentIndex = 0;


function createCarousel() {
    images.forEach((src, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Image ${index + 1}`;
        
        item.appendChild(img);
        carousel.appendChild(item);

        item.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel(currentIndex);
        });

        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = 'carousel-indicator';
        indicators.appendChild(indicator);
    });
    
    // Initial update
    updateCarousel(0);
    
    // Force a second update after a slight delay to ensure all styles are applied
    setTimeout(() => {
        updateCarousel(0);
    }, 100);
    
    // Start auto-rotation every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel(currentIndex);
    }, 5000);
}

// Update carousel to show correct 3 images and update indicators
function updateCarousel(centerIndex) {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-indicator');
    const viewportWidth = window.innerWidth;
    
    // Reset all items
    items.forEach(item => {
        item.style.transform = 'scale(0) translateZ(-5000px)';
        item.style.opacity = '0';
        item.style.zIndex = '0';
        item.style.display = 'none';
    });

    // Reset all indicators
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Calculate indices for visible items
    const totalItems = items.length;
    const farLeftIndex = (centerIndex - 2 + totalItems) % totalItems;
    const prevIndex = (centerIndex - 1 + totalItems) % totalItems;
    const nextIndex = (centerIndex + 1) % totalItems;
    const farRightIndex = (centerIndex + 2) % totalItems;
    
    // Calculate positions based on viewport size
    // Decrease the spacing between images
    const sideTranslateX = viewportWidth * 0.46;  // Decreased spacing
    
    // Make sure all five visible items are displayed
    items[farLeftIndex].style.display = 'block';
    items[prevIndex].style.display = 'block';
    items[centerIndex].style.display = 'block';
    items[nextIndex].style.display = 'block';
    items[farRightIndex].style.display = 'block';
    
    // Position the far left item - move it further to the left and outside the screen
    items[farLeftIndex].style.transform = `translateX(-${sideTranslateX * 2}px) translateZ(-600px) rotateY(0deg)`;
    items[farLeftIndex].style.opacity = '0';
    items[farLeftIndex].style.height = 'min(45vh, 400px)';
    items[farLeftIndex].style.zIndex = '0';
    
    // Position the prev item - far left with less spacing and decreased height
    items[prevIndex].style.transform = `translateX(-${sideTranslateX}px) translateZ(-400px) rotateY(50deg) scale(0.95)`;
    items[prevIndex].style.opacity = '0.7';
    items[prevIndex].style.height = 'min(45vh, 400px)';
    items[prevIndex].style.zIndex = '1';
    
    // Position the center (active) item with decreased height and scale to align edges
    items[centerIndex].style.transform = 'translateZ(400px) scale(1)';  // Further decreased scale
    items[centerIndex].style.height = '210px';
    items[centerIndex].style.opacity = '1';
    items[centerIndex].style.zIndex = '3';
    
    // Position the next item - far right with less spacing and decreased height
    items[nextIndex].style.transform = `translateX(${sideTranslateX}px) translateZ(-400px) rotateY(-50deg) scale(0.95)`;
    items[nextIndex].style.opacity = '0.7'; 
    items[nextIndex].style.height = 'min(45vh, 400px)';
    items[nextIndex].style.zIndex = '1';
    
    // Position the far right item - move it further to the right and outside the screen
    items[farRightIndex].style.transform = `translateX(${sideTranslateX * 2}px) translateZ(-600px) rotateY(0deg)`;
    items[farRightIndex].style.opacity = '0';
    items[farRightIndex].style.height = 'min(45vh, 400px)';
    items[farRightIndex].style.zIndex = '0';

    // Activate the current indicator
    dots[centerIndex].classList.add('active');
}

// Handle window resize to ensure carousel adapts to screen size
window.addEventListener('resize', () => {
    updateCarousel(currentIndex);
});

// Initialize
createCarousel();

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust the scroll value as needed
        navbar.classList.add('glow');
    } else {
        navbar.classList.remove('glow');
    }
});
});

const carouselT = document.querySelector('.carousel-container-testimonials');
const itemsT = document.querySelectorAll('.carousel-item-testimonials');
let currentIndexTestimonials = 0;

function startCarousel() {
    setInterval(() => {
        currentIndexTestimonials = (currentIndexTestimonials + 1) % itemsT.length;
        carouselT.style.transition = 'transform 1s ease';
        carouselT.style.transform = `translateX(-${currentIndexTestimonials * 60}vw)`;
    }, 20000);
}

startCarousel();