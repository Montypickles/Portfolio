
/* =========================================
   GAME PROJECT DATA
========================================= */

const games = [
    {
        id: "brunos-number",
        title: "Bruno's Number",
        category: "FEATURED GAME",
      
description: [
    "2D mystery game developed in Unity using C# as part of the Unity Game Jam 2026. Working collaboratively in a small team, we designed and developed a fully playable game centered around number guessing, interactive dialogue, and an increasingly unsettling atmosphere.",

    "The project involved implementing gameplay mechanics, UI systems, character animations, scene transitions, and dynamic environmental changes. We also developed a complete gameplay loop, including a countdown timer, hint system, and win/loss conditions.",

    "Throughout development, we gained valuable experience in Unity, C#, GitHub collaboration, debugging, and game design, taking the project from initial concept through to a completed WebGL build published on itch.io.",

    "This project strengthened my technical skills, teamwork, and understanding of the full game development lifecycle while further developing my passion for the games industry."
].join("\n\n"),

        image: "images/bruno-cover.png",
        link: "https://montypickles.itch.io/brunos-number",
        featured: true
    }

    // Add future games here
];


/* =========================================
   REUSABLE GAME WIDGET
========================================= */

function createGameWidget(game) {

    const card = document.createElement("a");
    card.className = "project-card bruno-card";

    if (game.featured) {
        card.classList.add("featured");
    }

   
    card.href = `project.html?game=${encodeURIComponent(game.id)}`;


    const image = document.createElement("img");
    image.className = "project-image";
    image.src = game.image;
    image.alt = game.title + " artwork";

    const overlay = document.createElement("div");
    overlay.className = "project-overlay";

    const info = document.createElement("div");
    info.className = "project-info";

    const label = document.createElement("span");
    label.className = "project-label";
    label.textContent = game.category;

    const title = document.createElement("h2");
    title.textContent = game.title;

    const description = document.createElement("p");
    description.textContent = game.description;

    info.append(label, title, description);
    card.append(image, overlay, info);

    return card;
}


/* =========================================
   DISPLAY GAME WIDGETS
========================================= */

const gameContainer =
    document.getElementById("game-projects");


if (gameContainer) {
    games.forEach(game => {
        gameContainer.appendChild(createGameWidget(game));
    });
}

