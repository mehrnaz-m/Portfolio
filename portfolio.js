

document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var opacity = 1 - (scrollPosition / 500); // Adjust divisor for speed of fade
        document.querySelector('.gradient-section').style.opacity = opacity;
    });

    // Function to handle smooth scrolling
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Add event listeners to navigation links
    const webProjectsLink = document.querySelector('a[href="#HTML-Projects"]');
    const pythonProjectsLink = document.querySelector('a[href="#Python-Projects"]');

    if (webProjectsLink) {
        webProjectsLink.addEventListener('click', function(event) {
            event.preventDefault();
            scrollToSection('HTML-Projects');
        });
    }

    if (pythonProjectsLink) {
        pythonProjectsLink.addEventListener('click', function(event) {
            event.preventDefault();
            scrollToSection('Python-Projects');
        });
    }
});