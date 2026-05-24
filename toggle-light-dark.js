document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const darkIcon = document.getElementById("dark-icon");
    const lightIcon = document.getElementById("light-icon");

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "dark-mode";
    body.classList.add(savedTheme);
    updateIcons(savedTheme);

    // Toggle function
    function toggleTheme(theme) {
        body.classList.remove("dark-mode", "light-mode");
        body.classList.add(theme);
        localStorage.setItem("theme", theme);
        updateIcons(theme);
    }

    // Update icon visibility
    function updateIcons(theme) {
        if (theme === "dark-mode") {
            darkIcon.style.display = "inline-block";
            lightIcon.style.display = "none";
        } else {
            darkIcon.style.display = "none";
            lightIcon.style.display = "inline-block";
        }
    }

    // Event listeners
    darkIcon.addEventListener("click", (e) => {
        e.preventDefault();
        toggleTheme("light-mode");
    });
    lightIcon.addEventListener("click", (e) => {
        e.preventDefault();
        toggleTheme("dark-mode");
    });
});
