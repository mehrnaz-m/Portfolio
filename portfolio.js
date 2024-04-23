window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var opacity = 1 - (scrollPosition / 500); // Adjust divisor for speed of fade
    document.querySelector('.gradient-section').style.opacity = opacity;
});