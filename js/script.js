const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});

const cards = document.querySelectorAll(".video-card");

const modal = document.querySelector(".video-modal");

const player = document.querySelector("#youtubePlayer");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        const id = card.dataset.video;

        player.src =
        `https://www.youtube.com/embed/${id}?autoplay=1`;

        modal.classList.add("active");

    });

});

document
.querySelector(".close-video")
.addEventListener("click",()=>{

    modal.classList.remove("active");

    player.src="";

});