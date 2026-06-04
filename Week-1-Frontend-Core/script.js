// menu active state
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    item.addEventListener("click", () => {

        menuItems.forEach(menu => {
            menu.classList.remove("active");
        });

        item.classList.add("active");

    });
});

// search sidebar
const searchInput = document.querySelector(".search-box input");
const menuItemsList = document.querySelectorAll(".menu-item");

searchInput.addEventListener("keyup", () => {

    let value = searchInput.value.toLowerCase();

    menuItemsList.forEach(item => {

        let text = item.innerText.toLowerCase();

        if (text.includes(value)) {
            item.style.display = "flex";
        }
        else {
            item.style.display = "none";
        }

    });

});


// total assigned tasks
const assignedCount =
    document.getElementById("assignedCount");

const totalTasks =
    document.querySelectorAll(".task").length;

assignedCount.textContent = totalTasks;

// task completed alert
const circlesTask = document.querySelectorAll(".circle");
const completedCount = document.getElementById("completedCount");

// Load saved task states
let completedTasks =
    JSON.parse(localStorage.getItem("taskStates")) || [];

let count = 0;

// Restore completed tasks after refresh
circlesTask.forEach((circle, index) => {

    if (completedTasks[index]) {
        circle.classList.add("completed");
         circle.nextElementSibling.classList.add("done");
    count++;
    }

});

completedCount.textContent = count;

// Click event
circlesTask.forEach((circle, index) => {

    circle.addEventListener("click", () => {

        circle.classList.toggle("completed");

        const taskText =
            circle.nextElementSibling;

        taskText.classList.toggle("done");

        if (circle.classList.contains("completed")) {
            count++;
        } else {
            count--;
        }

        completedCount.textContent = count;

        completedTasks[index] =
            circle.classList.contains("completed");

        localStorage.setItem(
            "taskStates",
            JSON.stringify(completedTasks)
        );

        updateProgress();

    });

});

// sidebar toggle
const menuBtn = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

// Open sidebar
menuBtn.addEventListener("click", () => {

    if (window.innerWidth <= 825) {

        sidebar.classList.add("show");
        overlay.classList.add("show");

    } else {
        sidebar.classList.toggle("close");
    }

});

// Close Sidebar Function
function closeSidebar() {

    sidebar.classList.remove("show");
    overlay.classList.remove("show");

}

// Click Outside
overlay.addEventListener("click", closeSidebar);

// Click Any Menu Item
document.querySelectorAll(".menu-item").forEach(item => {

    item.addEventListener("click", () => {

        if (window.innerWidth <= 825) {

            // Mobile: hide sidebar completely
            closeSidebar();

        } else {

            // Tablet/Laptop/Desktop: collapse sidebar
            sidebar.classList.toggle("close");

        }
    });
});

// notification dropdown
const bellBtn = document.querySelector(".fa-bell");
const notificationDropdown =
    document.querySelector(".notification-dropdown");

bellBtn.addEventListener("click", () => {

    notificationDropdown.classList.toggle("show");

    notificationCount.style.display = "none";
});

// message dropdown
const mailBtn =
    document.querySelector(".message-wrapper i");

const messageDropdown =
    document.querySelector(".message-dropdown");

mailBtn.addEventListener("click", () => {

    messageDropdown.classList.toggle("show");

});

// mobile search toggle
const mobileSearch =
    document.querySelector(".mobile-search");

const searchBox =
    document.querySelector(".search-box");

mobileSearch.addEventListener("click", () => {

    searchBox.classList.toggle("show");

});

// profile dropdown
const profile =
    document.querySelector(".profile");

const profileDropdown =
    document.querySelector(".profile-dropdown");

profile.addEventListener("click", () => {

    profileDropdown.classList.toggle("show");

});

// close dropdowns when clicking outside
document.addEventListener("click", (e) => {

    if (!bellBtn.closest(".notification-wrapper").contains(e.target)) {
        notificationDropdown.classList.remove("show");
    }

    if (!mailBtn.closest(".message-wrapper").contains(e.target)) {
        messageDropdown.classList.remove("show");
    }

    if (!profile.contains(e.target)) {
        profileDropdown.classList.remove("show");
    }

});

// dark mode toggle
const darkModeBtn = document.getElementById("darkModeBtn");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});

// progress bar
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

function updateProgress() {

    const percentage = (count / totalTasks) * 100;

    progressFill.style.width = percentage + "%";

    progressText.textContent =
        Math.round(percentage) + "% Completed";
}
updateProgress();
localStorage.removeItem("taskStates");