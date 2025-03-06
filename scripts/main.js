function showFullscreen(imgElement) {
    const fullscreenHolder = document.getElementById("fullscreen-holder");
    const fullscreenImage = document.getElementById("fullscreen-image");

    fullscreenImage.src = imgElement.src;
    fullscreenHolder.style.display = "flex";
}

function hideFullscreen() {
    document.getElementById("fullscreen-holder").style.display = "none";
}

document.querySelectorAll('.project-image').forEach(image => {
    image.addEventListener('click', function() {
        showFullscreen(this);
    });
});
