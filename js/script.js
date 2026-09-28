// Mobile Drawer Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const navOverlay = document.getElementById('nav-overlay');

function toggleMenu() {
    navbar.classList.toggle('active');
    navOverlay.classList.toggle('active');
}

menuToggle.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', toggleMenu);

// Shopping Cart Counter & Toast Notification
let cartCount = 0;
const cartBadge = document.getElementById('cart-count');
const toast = document.getElementById('toast');

document.querySelectorAll('.add-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartBadge.textContent = cartCount;

        // Show Toast Notification
        toast.style.display = 'block';
        setTimeout(() => {
            toast.style.display = 'none';
        }, 2000);
    });
});

// Category Filtering System
const filterBtns = document.querySelectorAll('.tab-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const category = e.target.dataset.filter;

        productCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Countdown Timer for Flash Sale
let totalSeconds = 31512; // 8 Hours 45 Mins 12 Secs
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

setInterval(() => {
    if (totalSeconds > 0) {
        totalSeconds--;
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;

        hoursEl.textContent = h < 10 ? '0' + h : h;
        minutesEl.textContent = m < 10 ? '0' + m : m;
        secondsEl.textContent = s < 10 ? '0' + s : s;
    }
}, 1000);

// Wishlist Heart Icon Toggle
document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-regular')) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
            icon.style.color = '#ef4444';
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
            icon.style.color = 'inherit';
        }
    });
});