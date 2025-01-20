//loading Animation

document.body.classList.add("loading");

window.addEventListener("load", () => {
  document.body.classList.remove("loading");
  document.body.classList.add("loaded");
});

// Alert message js

let currentDownloadUrl = "";

// menu burger

const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".Ebong_nav ul");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Sélectionne tous les boutons des documents et visuels
const buttons = document.querySelectorAll(".document-btn, .visuel-btn");

// Effet général pour tous les boutons
buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.transition =
      "transform 0.6s ease-in-out, box-shadow 0.6s ease-in-out";
    button.style.transform = "scale(1.1)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transition =
      "transform 0.6s ease-in-out, box-shadow 0.6s ease-in-out";
    button.style.transform = "scale(1)";
  });
});

// Sélectionne à nouveau les boutons pour la logique responsive
const hoverButtons = document.querySelectorAll(".document-btn, .visuel-btn");

function resetStyles(button) {
  button.style.transition = "none";
  button.style.transform = "none";
  button.style.boxShadow = "none";
  button.style.background = "#white";
  button.style.color = "black";
  button.style.border = "1px solid black";
}

// Effet hover conditionnel (responsive) pour tous les boutons
hoverButtons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    if (window.innerWidth > 1300) {
      button.style.transition =
        "transform 0.6s ease-in-out, box-shadow 0.6s ease-in-out";
      button.style.transform = "scale(1.1)";
      button.style.background = "linear-gradient(120deg, #4a90e2, #274770)";
      button.style.color = "white";
      button.style.border = "none";
    } else {
      resetStyles(button);
    }
  });

  button.addEventListener("mouseleave", () => {
    if (window.innerWidth > 1300) {
      button.style.transition =
        "transform 0.6s ease-in-out, box-shadow 0.6s ease-in-out";
      button.style.transform = "scale(1)";
      button.style.background = "#f5f5f5";
      button.style.color = "black";
      button.style.border = "1px solid black";
    } else {
      resetStyles(button);
    }
  });
});

// header position fixed js

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.innerWidth > 1050) {
    const scrollProgress = Math.min(window.scrollY / 200, 1);
    const borderWidth = scrollProgress * 4;

    header.style.position = "fixed";
    header.style.top = "0";
    header.style.width = "100%";
    header.style.zIndex = "1000";
    header.style.backgroundColor = "white";
    header.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.15)";
    header.style.transition =
      "border-bottom 0.2s ease-in-out, box-shadow 0.4s ease-in-out";
    header.style.borderBottom = `${borderWidth}px solid transparent`;
    header.style.borderImage = "linear-gradient(to right, #4a90e2, #274770) 1";
  }
});

// Ajoute un effet de transition à la sortie de la page
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = link.getAttribute("href");

      if (target && !target.startsWith("#") && target !== "") {
        event.preventDefault();
        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = target;
        }, 700);
      }
    });
  });
});

// Script pour ouvrir les PDF en grand dans une modal pour page design.html

document.addEventListener("DOMContentLoaded", function () {
  const pdfIframes = document.querySelectorAll(".pdf-iframe");
  const modal = document.getElementById("pdf-modal");
  const modalIframe = document.getElementById("modal-iframe");
  const closeModal = document.querySelector(".close-modal");

  // Effet de parallaxe sur le titre
  const title = document.querySelector(".design-h1");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    title.style.transform = `translateY(${scrollY * 0.5}px)`;
  });

  // Animation d'entrée des iframes
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.5, // Déclenche l'animation lorsque 50% de l'élément est visible
    }
  );

  pdfIframes.forEach((iframe) => {
    iframe.style.opacity = 0;
    iframe.style.transform = "translateY(50px)";
    observer.observe(iframe);
  });

  // Ouvrir la modal avec une animation
  pdfIframes.forEach((iframe) => {
    iframe.addEventListener("click", () => {
      modal.style.display = "flex";
      setTimeout(() => {
        modal.style.opacity = 1;
        modalIframe.src = iframe.src;
      }, 10); // Petit délai pour l'animation
    });
  });

  // Fermer la modal avec une animation
  closeModal.addEventListener("click", () => {
    modal.style.opacity = 0;
    setTimeout(() => {
      modal.style.display = "none";
      modalIframe.src = ""; // Réinitialiser l'iframe
    }, 300); // Correspond à la durée de l'animation CSS
  });

  // Fermer la modal en cliquant à l'extérieur
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.opacity = 0;
      setTimeout(() => {
        modal.style.display = "none";
        modalIframe.src = ""; // Réinitialiser l'iframe
      }, 300); // Correspond à la durée de l'animation CSS
    }
  });

  // Effet de survol sur les iframes
  pdfIframes.forEach((iframe) => {
    iframe.addEventListener("mouseenter", () => {
      iframe.style.transform = "scale(1.05) rotate(2deg)";
      iframe.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.2)";
    });

    iframe.addEventListener("mouseleave", () => {
      iframe.style.transform = "scale(1) rotate(0deg)";
      iframe.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
    });
  });
});

// Initialisation d'i18next avec les traductions
i18next.init({
  lng: 'fr', // Langue par défaut
  resources: {
    en: {
      translation: {
        welcome: "Welcome to our site",
        greeting: "We are happy to have you here."
      }
    },
    fr: {
      translation: {
        welcome: "Bienvenue sur notre site",
        greeting: "Nous sommes heureux de vous voir ici."
      }
    }
  }
}, function(err, t) {
  // Met à jour le texte initial lors du chargement
  updateContent();
});


// Attendre que le DOM soit entièrement chargé
document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner toutes les cartes SWOT et PESTEL
    const cards = document.querySelectorAll(".swot-item, .pestel-item");

    // Ajouter un effet de survol à chaque carte
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transition = "transform 0.3s ease, background-color 0.3s ease";
            card.style.transform = "scale(1.05)";
            card.style.backgroundColor = "#e8f4fc";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.backgroundColor = "#f9f9f9";
        });
    });


                      
    // Sélection des cartes et des titres page swot
    const cards = document.querySelectorAll(".swot-item, .pestel-item");
    const highlights = document.querySelectorAll(".highlight");
    const sections = document.querySelectorAll(".swot-grid, .pestel-grid");

    // Effet d'apparition des sections en cascade
    sections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(100px)";
        section.style.transition = `opacity 1s ease, transform 1s ease ${index * 0.2}s`;
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Animation dynamique au survol des cartes
    cards.forEach(card => {
        card.style.transition = "all 0.5s ease";
        card.addEventListener("mouseenter", () => {
            card.style.transform = "rotate3d(1, 1, 0, 10deg) scale(1.1)";
            card.style.boxShadow = "0px 15px 30px rgba(0, 0, 0, 0.3)";
            card.style.backgroundColor = "#f0faff";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotate3d(0, 0, 0, 0) scale(1)";
            card.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
            card.style.backgroundColor = "#f9f9f9";
        });
    });

    // Effet pulsant sur les initiales
    highlights.forEach(highlight => {
        highlight.style.display = "inline-block";
        highlight.style.transition = "transform 0.5s ease, color 0.5s ease";
        highlight.addEventListener("mouseenter", () => {
            highlight.style.transform = "scale(1.5) rotate(-5deg)";
            highlight.style.color = "#00a676";
        });

        highlight.addEventListener("mouseleave", () => {
            highlight.style.transform = "scale(1) rotate(0deg)";
            highlight.style.color = "#ff7a59";
        });
    });

    // Animation des titres principaux
    const titles = document.querySelectorAll("#swot h2, #pestel h2");
    titles.forEach(title => {
        title.style.position = "relative";
        title.style.overflow = "hidden";

        const underline = document.createElement("div");
        underline.style.position = "absolute";
        underline.style.bottom = "0";
        underline.style.left = "0";
        underline.style.width = "100%";
        underline.style.height = "5px";
        underline.style.backgroundColor = "#ff7a59";
        underline.style.transform = "translateX(-100%)";
        underline.style.transition = "transform 0.5s ease";

        title.appendChild(underline);

        title.addEventListener("mouseenter", () => {
            underline.style.transform = "translateX(0)";
        });

        title.addEventListener("mouseleave", () => {
            underline.style.transform = "translateX(-100%)";
        });
    });
});
