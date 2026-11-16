
/* EXPERIENCE WIDGET */

const experienceList =
    document.getElementById("experience-list");

profileData.experience.forEach(item => {
    const entry = document.createElement("div");
    entry.className = "experience-item";

    const title = document.createElement("h3");
    title.textContent = item.company;

    const role = document.createElement("p");
    role.textContent = item.role;

    const description = document.createElement("p");
    description.textContent = item.description;

    entry.append(title, role, description);
    experienceList.appendChild(entry);
});


/* SKILLS WIDGET */

const skillsList =
    document.getElementById("skills-list");

const categoryNames = {
    languages: "Languages",
    gameDevelopment: "Game Development",
    tools: "Tools & Other"
};

Object.entries(profileData.skills).forEach(
    ([category, skills]) => {

        const section = document.createElement("div");
        section.className = "skill-category";

        const heading = document.createElement("h3");
        heading.textContent = categoryNames[category] || category;

        const tags = document.createElement("div");
        tags.className = "skill-tags";

        skills.forEach(skill => {
            const tag = document.createElement("span");
            tag.className = "skill-tag";
            tag.textContent = skill;
            tags.appendChild(tag);
        });

        section.append(heading, tags);
        skillsList.appendChild(section);
    }
);
