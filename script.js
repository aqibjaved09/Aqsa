document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Portfolio filtering (Placeholder logic)
    const filterItems = document.querySelectorAll('.filter-item');
    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all
            filterItems.forEach(i => {
                i.classList.remove('active', 'text-cyan');
                i.classList.add('text-secondary');
            });
            // Add active class to clicked
            item.classList.add('active', 'text-cyan');
            item.classList.remove('text-secondary');
            
            // In a real app, you would filter the portfolio items here
            console.log('Filtering by:', item.getAttribute('data-filter'));
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.marginTop = '0';
            navbar.style.width = '100%';
            navbar.style.left = '0';
            navbar.style.borderRadius = '0';
            navbar.style.backgroundColor = 'rgba(2, 11, 13, 0.95)';
        } else {
            if (window.innerWidth > 991) {
                navbar.style.marginTop = '15px';
                navbar.style.width = '90%';
                navbar.style.left = '5%';
                navbar.style.borderRadius = '50px';
            }
            navbar.style.backgroundColor = 'rgba(2, 11, 13, 0.7)';
        }
    });

    // Simple fade-in animation on scroll using Intersection Observer
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .glass').forEach(el => {
        observer.observe(el);
    });
});
