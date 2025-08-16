// js/main.js
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.hover-scale, .timeline-item').forEach(el => {
    observer.observe(el);
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // In a real implementation, you would send this data to your server
    // For now, we'll just show a success message
    const form = this;
    const successMessage = document.createElement('div');
    successMessage.id = 'successMessage';
    successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
    
    // Remove any existing success message
    const existingMessage = form.querySelector('#successMessage');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Add success message
    form.appendChild(successMessage);
    successMessage.style.display = 'block';
    
    // Reset form
    setTimeout(() => {
        form.reset();
        successMessage.style.display = 'none';
    }, 3000);
});