const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.classList.remove("hidden");
    });
});


lightbox.addEventListener("click", () => {
    lightbox.classList.add("hidden");
});



// const trailerBtn = document.getElementById("trailer-btn");
// const trailerModal = document.getElementById("trailer-modal");
// const trailerFrame = trailerModal.querySelector("iframe");

// trailerBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     trailerFrame.src = "https://www.youtube.com/embed/YOUR_TRAILER_ID?autoplay=1";
//     trailerModal.classList.remove("hidden");
// });

// trailerModal.addEventListener("click", () => {
//     trailerFrame.src = "";
//     trailerModal.classList.add("hidden");
// });