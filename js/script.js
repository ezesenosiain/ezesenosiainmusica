const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

// Menú hamburguesa
if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
}

// ====================
// Modal de videos
// ====================

const cards = document.querySelectorAll(".video-card, .video-card-2");
const modal = document.querySelector(".video-modal");
const player = document.querySelector("#youtubePlayer");
const closeVideo = document.querySelector(".close-video");

if (cards.length && modal && player) {

    cards.forEach(card => {

        card.addEventListener("click", () => {

            const id = card.dataset.video;

            player.src = `https://www.youtube.com/embed/${id}?autoplay=1`;

            modal.classList.add("active");

        });

    });

}

if (closeVideo && modal && player) {

    closeVideo.addEventListener("click", () => {

        modal.classList.remove("active");

        player.src = "";

    });

}

// ====================
// Galería de fotos
// ====================

const galleryItems = document.querySelectorAll(".gallery-item");
const imageModal = document.querySelector(".image-modal");
const modalImage = document.querySelector("#modalImage");
const closeImage = document.querySelector(".close-image");

if (galleryItems.length && imageModal && modalImage) {

    galleryItems.forEach(item => {

        item.addEventListener("click", () => {

            const image = item.querySelector("img");

            modalImage.src = image.src;

            imageModal.classList.add("active");

        });

    });

}

if (closeImage && imageModal && modalImage) {

    closeImage.addEventListener("click", () => {

        imageModal.classList.remove("active");

        modalImage.src = "";

    });

}

imageModal.addEventListener("click", (e) => {

    if (e.target === imageModal) {

        imageModal.classList.remove("active");
        modalImage.src = "";

    }

});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("active");
        player.src = "";

    }

});