
/* =========================================
   GITHUB REPOSITORY LOADER
========================================= */

const githubUsername = "Montypickles";

const repositoryContainer =
    document.getElementById("github-repositories");

async function loadRepositories() {

    repositoryContainer.textContent =
        "Loading repositories...";

    try {

        const response = await fetch(
            `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=30`
        );

        if (!response.ok) {
            throw new Error("GitHub API error");
        }

        const repositories = await response.json();

        repositoryContainer.textContent = "";

        if (repositories.length === 0) {
            repositoryContainer.textContent =
                "No public repositories found.";
            return;
        }

        repositories.forEach(repo => {

            const card = document.createElement("a");
            card.className = "repository-card";

            card.href = repo.html_url;
            card.target = "_blank";
            card.rel = "noopener noreferrer";

            const title = document.createElement("h3");
            title.textContent = repo.name;

            const description = document.createElement("p");
            description.textContent =
                repo.description ||
                "View this project on GitHub.";

            const language = document.createElement("span");
            language.className = "repository-language";
            language.textContent =
                repo.language || "Repository";

            card.append(title, description, language);

            repositoryContainer.appendChild(card);

        });

    } catch (error) {

        repositoryContainer.textContent =
            "Unable to load repositories. Visit my GitHub profile instead.";

        console.error(error);
    }
}

loadRepositories();
