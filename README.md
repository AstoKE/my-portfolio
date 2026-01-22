# Personal Portfolio Website

A clean, modern, and recruiter-friendly portfolio website showcasing software engineering and AI/ML projects.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, minimal design focused on content clarity
- **Single-Page Layout**: Easy navigation with smooth scrolling
- **Professional Sections**:
  - Hero section with introduction
  - About section
  - Projects showcase
  - Skills display
  - Experience & Certifications timeline
  - Contact information

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript (no frameworks)
- Google Fonts (Inter)

## File Structure

```
my-portfolio/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Setup

1. Clone or download this repository
2. Open `index.html` in a web browser
3. For local development, you can use a simple HTTP server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (with http-server)
   npx http-server
   ```

## Customization

### Adding GitHub Links to Projects

Update the project links in `index.html` by replacing the `href="#"` attributes with actual GitHub repository URLs:

```html
<a href="https://github.com/yourusername/project-name" class="project-link" data-project="wearcast">
    View on GitHub →
</a>
```

### Updating Content

All content is directly editable in `index.html`. The structure is well-commented for easy modifications.

### Color Scheme

Colors can be customized in `styles.css` using CSS variables in the `:root` selector:

```css
:root {
    --primary-color: #2563eb;
    --text-primary: #1e293b;
    /* ... other variables */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Personal portfolio - All rights reserved.
