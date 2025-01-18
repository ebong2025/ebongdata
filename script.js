//loading Animation

document.body.classList.add("loading");

window.addEventListener("load", () => {
  document.body.classList.remove("loading");
  document.body.classList.add("loaded");
});

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
