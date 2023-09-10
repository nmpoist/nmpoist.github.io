
    document.addEventListener("DOMContentLoaded", function () {
        const learnMoreButtons = document.querySelectorAll(".learn-more-btn");
        const backButtons = document.querySelectorAll(".back-btn");

        learnMoreButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                const cardBody = this.closest(".card").querySelector(".card-body");
                cardBody.style.transform = "rotateY(180deg)";
            });
        });

        backButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                const cardBody = this.closest(".card").querySelector(".card-body");
                cardBody.style.transform = "rotateY(0deg)";
            });
        });
    });