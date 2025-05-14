// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Header scroll effect
    const header = document.getElementById('header');
    const scrollThreshold = 100;

    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    // Create close button for mobile menu
    const closeBtn = document.createElement('div');
    closeBtn.className = 'close-menu';
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';

    menuToggle.addEventListener('click', function() {
        nav.classList.add('active');
        // Add close button when menu is opened
        if (!nav.querySelector('.close-menu')) {
            nav.appendChild(closeBtn);
        }
    });

    closeBtn.addEventListener('click', function() {
        nav.classList.remove('active');
        // Remove close button when menu is closed
        setTimeout(() => {
            if (nav.contains(closeBtn)) {
                nav.removeChild(closeBtn);
            }
        }, 300); // Wait for transition to finish
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });

    // Portfolio filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Testimonial slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    
    let currentTestimonial = 0;
    const testimonialCount = testimonialItems.length;

    // Hide all testimonials except the first one
    for (let i = 1; i < testimonialCount; i++) {
        testimonialItems[i].style.display = 'none';
    }

    // Function to show a specific testimonial
    function showTestimonial(index) {
        // Hide all testimonials
        testimonialItems.forEach(item => {
            item.style.display = 'none';
        });
        
        // Show the current testimonial
        testimonialItems[index].style.display = 'block';
    }

    // Previous button click
    prevBtn.addEventListener('click', function() {
        currentTestimonial--;
        if (currentTestimonial < 0) {
            currentTestimonial = testimonialCount - 1;
        }
        showTestimonial(currentTestimonial);
    });

    // Next button click
    nextBtn.addEventListener('click', function() {
        currentTestimonial++;
        if (currentTestimonial >= testimonialCount) {
            currentTestimonial = 0;
        }
        showTestimonial(currentTestimonial);
    });

    // Automatic testimonial slider
    setInterval(function() {
        currentTestimonial++;
        if (currentTestimonial >= testimonialCount) {
            currentTestimonial = 0;
        }
        showTestimonial(currentTestimonial);
    }, 5000);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // Offset for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send this data to a server
            // For demo purposes, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get email value
            const email = this.querySelector('input[type="email"]').value;
            
            // Here you would typically send this data to a server
            // For demo purposes, we'll just show an alert
            alert(`Thank you for subscribing to our newsletter with email: ${email}`);
            
            // Reset form
            newsletterForm.reset();
        });
    }

    // Add active class to current section in navigation
    function highlightNavigation() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');
        
        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    highlightNavigation();

    // Initialize AOS (Animate On Scroll) - Uncomment if you decide to use AOS library
    // AOS.init({
    //     duration: 1000,
    //     once: true
    // });
});

// Preloader
window.addEventListener('load', function() {
    // If you want to add a preloader, you can remove it here when the page is fully loaded
}); 