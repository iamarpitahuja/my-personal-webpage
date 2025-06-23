//loader animation
window.addEventListener('load', function() {
    const loader = document.getElementById('loader-wrapper');
    const content = this.document.getElementById('main-content');

    // Wait 500ms after load, then fade out loader and show content
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            content.style.display = 'block';
        }, 2000); // match fade duration
    }, 200); // delay after load
});