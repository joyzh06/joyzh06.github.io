function showFullscreen(imgElement) {
    const fullscreenHolder = document.getElementById("fullscreen-holder");
    const fullscreenImage = document.getElementById("fullscreen-image");

    fullscreenImage.src = imgElement.src;
    fullscreenHolder.style.display = "flex";

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
}

function hideFullscreen() {
    document.getElementById("fullscreen-holder").style.display = "none";

    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
}

document.querySelectorAll(".project-image").forEach(image => {
    image.addEventListener("click", function() {
        showFullscreen(this);
    });
});
