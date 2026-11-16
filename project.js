
/* =========================================
   PROJECT DETAIL PAGE
========================================= */

// Read the game ID from the URL
const params = new URLSearchParams(window.location.search);
const gameId = params.get("game");

// Find the matching game
const selectedGame = games.find(game => game.id === gameId);

// Find the content container
const detailContainer =
    document.getElementById("project-detail-content");

if (selectedGame) {

    document.title = selectedGame.title + " | Portfolio";

    const heading = document.createElement("h1");
    heading.textContent = selectedGame.title;

    const category = document.createElement("p");
    category.className = "detail-category";
    category.textContent = selectedGame.category;

    const cover = document.createElement("img");
    cover.className = "detail-cover";
    cover.src = selectedGame.image;
    cover.alt = selectedGame.title + " artwork";

    const description = document.createElement("p");
    description.className = "detail-description";
    description.textContent = selectedGame.description;

    detailContainer.append(
        category,
        heading,
        cover,
        description
    );

    // Only show Play Game if there's an itch.io link
    if (selectedGame.link) {
        const playButton = document.createElement("a");
        playButton.className = "play-button";
        playButton.href = selectedGame.link;
        playButton.target = "_blank";
        playButton.rel = "noopener noreferrer";
        playButton.textContent = "Play Game ↗";

        detailContainer.appendChild(playButton);
    }

} else {
    detailContainer.textContent = "Project not found.";
}
