const imagesToLoad = document.querySelectorAll('image[data-src]');
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};
const imgOptions = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 0
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver(items => {
        if (item.isIntersecting) {
            loadImages(item.target);
            imgObserver.unobserve(item.target);
        }
    });


imagesToLoad.forEach((img) => {
    loadImages(img);
});

} else {
    imagesToLoad.forEach(img => {
        loadImages(img);
    });
}