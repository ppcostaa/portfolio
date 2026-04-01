let navItems = document.querySelectorAll(".nav-item");

navItems.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    navItems.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});

const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {
  const scrollY = window.scrollY + 100;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-item[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        navItems.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
      }
    }
  });
}

window.addEventListener("scroll", updateActiveNav);
updateActiveNav();

const revealEls = document.querySelectorAll(
  ".experienciaBox, .skillsItem, .contatoItem, .inicioTexto, .inicioImg, .sobre .descricao",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealEls.forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  observer.observe(el);
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
  });

  navLinks.querySelectorAll(".nav-item").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
    });
  });
}
