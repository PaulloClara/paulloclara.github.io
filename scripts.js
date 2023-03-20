function runThemeScript() {
  try {
    const bodyPageEl = document.querySelector("body");
    const switchThemeButtonEl = document.querySelector("#pc-switch-theme");

    switchThemeButtonEl.onclick = () => {
      const currentTheme =
        bodyPageEl.dataset.theme === "night" ? "day" : "night";
      bodyPageEl.dataset.theme = currentTheme;
      localStorage.setItem("THEME", currentTheme);
      switchBackgroundSoundByTheme(currentTheme);
    };

    const savedTheme = localStorage.getItem("THEME");
    if (savedTheme) bodyPageEl.dataset.theme = savedTheme;
    else if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      bodyPageEl.dataset.theme = "night";
    }

    switchBackgroundSoundByTheme(bodyPageEl.dataset.theme);
  } catch (error) {
    console.error(error);
  }
}

function runBannerTypingAnimationScript() {
  try {
    new Typed("#pc-banner-typing-animation", {
      strings: [
        "Paulo",
        "Dev FrontEnd",
        "Dev Mobile",
        "Criativo",
        "Entusiasta",
        "Flexível",
      ],
      loop: true,
      typeSpeed: 120,
      backSpeed: 100,
      backDelay: 1200,
    });
  } catch (error) {
    console.error(error);
  }
}

function runScrollSmoothScript() {
  try {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;

        target.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
  } catch (error) {
    console.error(error);
  }
}

function runBackgroundSoundScript() {
  try {
    const backgroundSoundEl = document.querySelector("#pc-background-sound");
    backgroundSoundEl.volume = 0.05;
  } catch (error) {
    console.error(error);
  }
}

function switchBackgroundSoundByTheme(theme) {
  try {
    const backgroundSoundEl = document.querySelector("#pc-background-sound");
    backgroundSoundEl.pause();
    const currentSound =
      theme === "day" ? "sounds/hollow-knight.mp3" : "sounds/radiance.mp3";
    backgroundSoundEl.getElementsByTagName("source")[0].src = currentSound;
    backgroundSoundEl.load();
    backgroundSoundEl.play();
  } catch (error) {
    console.error(error);
  }
}

function runSkillsAnimationScript() {
  const skillsSectionEl = document.querySelectorAll("#skills");

  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px", threshold: 0.2 }
  );

  skillsSectionEl.forEach((element) => {
    observer.observe(element);
  });
}

runThemeScript();
runScrollSmoothScript();
runBackgroundSoundScript();
runSkillsAnimationScript();
runBannerTypingAnimationScript();
