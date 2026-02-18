document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("showTeamBtn");
    const section = document.getElementById("teamSection");
    const cards = document.querySelectorAll(".card");

    button.addEventListener("click", () => {

        // afficher la section
        section.classList.remove("hidden");

        // animation progressive (effet pro)
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transition = "all 0.5s ease";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, index * 300);
        });

        button.textContent = "Notre équipe ✅";
        button.disabled = true;
    });

});
