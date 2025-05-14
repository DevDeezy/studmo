# Studmo Photography & Filming Services Website

This is a modern, responsive website for Studmo, a company offering photography and filming services. The website showcases the company's portfolio, services, and provides contact information for potential clients.

## Features

- Responsive design that works on all devices (desktop, tablet, mobile)
- Modern and clean user interface
- Animated sections for better user engagement
- Portfolio showcase with filtering options
- Testimonials slider
- Contact form
- Mobile-friendly navigation
- Newsletter subscription

## File Structure

```
studmo/
│
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── images/
│   ├── hero-bg.jpg     # Hero section background
│   ├── about-image.jpg # About section image
│   └── portfolio/      # Portfolio images
│       ├── portfolio-1.jpg
│       ├── portfolio-2.jpg
│       └── ...
└── README.md           # This file
```

## Setup Instructions

1. Download or clone the repository
2. Replace placeholder images in the `images` directory with your own images
3. Customize the content in `index.html` to match your company's information
4. Upload the files to your web hosting provider

## Customization

### Changing Colors

The website uses CSS variables for easy color customization. Open `css/styles.css` and modify the following variables in the `:root` section:

```css
:root {
    --primary-color: #3f51b5;     /* Main brand color */
    --secondary-color: #303f9f;   /* Secondary brand color */
    --accent-color: #ff4081;      /* Accent color for highlights */
    --text-color: #333333;        /* Main text color */
    /* ... other color variables ... */
}
```

### Adding New Portfolio Items

To add new portfolio items, add your image to the `images/portfolio/` directory and then update the HTML in the portfolio section of `index.html`:

```html
<div class="portfolio-item" data-category="your-category">
    <img src="images/portfolio/your-image.jpg" alt="Project Description">
    <div class="portfolio-overlay">
        <h3>Project Title</h3>
        <p>Project Description</p>
    </div>
</div>
```

### Adding New Services

To add a new service, add a new service card to the services section in `index.html`:

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Service Title</h3>
    <p>Service description goes here.</p>
</div>
```

## Dependencies

This website uses the following external resources:

- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for Montserrat and Playfair Display fonts

## Browser Compatibility

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

Feel free to use this website template for your personal or commercial projects.

## Contact

For any questions or support, please contact:
- Email: info@studmo.com
- Phone: +1 (555) 123-4567 