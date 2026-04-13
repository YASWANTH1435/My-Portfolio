// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
// Sidebar elements //
menu.addEventListener("click", function () {
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function () {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");

})

function sendMail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    window.location.href = "mailto:bammidiyaswanth1435@gmail.com?subject=Portfolio Contact from " + name + "&body=" + message + "%0D%0A%0D%0AFrom: " + email;
}

// Certificates Modal Functions
const viewCertBtn = document.getElementById("viewCertBtn");
const certModal = document.getElementById("certModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const certCards = document.querySelectorAll(".cert-card");
const certContainer = document.querySelector(".modal-cert-container");

if (certModal && closeModalBtn) {
    if (viewCertBtn) {
        viewCertBtn.addEventListener("click", function () {
            // Apply carousel mode
            certContainer.classList.remove("single-mode");
            certContainer.classList.add("carousel-mode");
            certModal.style.display = "block";
            certContainer.scrollLeft = 0; // Reset scroll position
        });
    }

    certCards.forEach(card => {
        const h1 = card.querySelector('h1');
        // Click either the card or the H1 heading
        (h1 || card).addEventListener("click", function (e) {
            e.stopPropagation();
            const targetId = card.getAttribute("data-cert-target");
            if (targetId) {
                // Apply single mode
                certContainer.classList.remove("carousel-mode");
                certContainer.classList.add("single-mode");
                
                const certImages = certContainer.querySelectorAll("img");
                certImages.forEach(img => {
                    if (img.id === targetId) {
                        img.classList.add("active");
                    } else {
                        img.classList.remove("active");
                    }
                });
                certModal.style.display = "block";
            }
        });
    });

    closeModalBtn.addEventListener("click", function () {
        certModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == certModal) {
            certModal.style.display = "none";
        }
    });
}