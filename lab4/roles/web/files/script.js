document.addEventListener('DOMContentLoaded', function () {
    const message = document.getElementById('message');

    // Initial animation
    setTimeout(() => {
        message.classList.remove('fade-in');
    }, 2000);

    // Fading animation
    function fadeOutAndIn() {
        message.classList.add('fade-in');
        setTimeout(() => {
            message.classList.remove('fade-in');
        }, 2000);
    }

    // Set the animation to repeat every 4 seconds
    setInterval(fadeOutAndIn, 4000);
});
