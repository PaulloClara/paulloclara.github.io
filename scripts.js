function runThemeScript() {
  const bodyPageEl = document.querySelector("body");
  const switchThemeButtonEl = document.querySelector("#pc-switch-theme");

  switchThemeButtonEl.onclick = () => {
    const currentTheme = bodyPageEl.dataset.theme === "night" ? "day" : "night";
    bodyPageEl.dataset.theme = currentTheme;
    localStorage.setItem("THEME", currentTheme);
  };

  const savedTheme = localStorage.getItem("THEME");
  if (savedTheme) bodyPageEl.dataset.theme = savedTheme;
}

function runBannerTypingAnimationScript() {
  new Typed("#pc-banner-typing-animation", {
    strings: ["Paulo", "Frontender", "Criativo", "Entusiasta", "Versátil"],
    loop: true,
    typeSpeed: 120,
    backSpeed: 100,
    backDelay: 1200,
  });
}

function runScrollSmoothScript() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;

      target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

runThemeScript();
runScrollSmoothScript();
runBannerTypingAnimationScript();
