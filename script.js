
const infoTab = document.getElementById("info-tab");
const contactTab = document.getElementById("contact-tab");

const infoContent = document.getElementById("info-content");
const contactContent = document.getElementById("contact-content");

let activeTab = "info";

function updateTabs() {
    infoContent.hidden = activeTab !== "info";
    contactContent.hidden = activeTab !== "contact";

    infoTab.classList.toggle("active", activeTab === "info");
    contactTab.classList.toggle("active", activeTab === "contact");

    infoTab.textContent = activeTab === "info" ? "Info −" : "Info +";
    contactTab.textContent = activeTab === "contact" ? "Contact −" : "Contact +";

    infoTab.setAttribute("aria-expanded", activeTab === "info");
    contactTab.setAttribute("aria-expanded", activeTab === "contact");
}

infoTab.addEventListener("click", () => {
    activeTab = activeTab === "info" ? null : "info";
    updateTabs();
});

contactTab.addEventListener("click", () => {
    activeTab = activeTab === "contact" ? null : "contact";
    updateTabs();
});

updateTabs();
