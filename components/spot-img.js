let currentGallery = [];
let currentIndex = 0;
let currentCaption = "";

// OPEN GALLERY
function openGallery(images, caption = "") {
    currentGallery = images;
    currentIndex = 0;
    currentCaption = caption;

    updateGallery();

    document.getElementById("imageModal").style.display = "block";
}

// UPDATE IMAGE
function updateGallery() {
    document.getElementById("galleryImage").src = currentGallery[currentIndex];
    document.getElementById("galleryCaption").innerText = `${currentCaption} (${currentIndex+1}/${currentGallery.length})`;
}

// NAVIGATION
function nextImage() {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    updateGallery();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    updateGallery();
}

// CLOSE GALLERY
function closeGallery() {
    document.getElementById("imageModal").style.display = "none";
}

// MOBILE SWIPE
let startX = 0;

document.getElementById("imageModal").addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

document.getElementById("imageModal").addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextImage();
    if (endX - startX > 50) prevImage();
});
