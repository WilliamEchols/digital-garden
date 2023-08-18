import {
  apply,
  navigate,
  prefetch,
  router,
} from "https://unpkg.com/million@1.11.5/dist/router.mjs"

const initColorPicker = () => {
  const colorPicker = document.getElementById('secondary-color');
  if (colorPicker) {
    // Set the default color from the CSS variable --secondary
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim();
    colorPicker.value = secondaryColor;

    // Add the event listener
    colorPicker.addEventListener('change', function() {
      document.documentElement.style.setProperty('--secondary', this.value);
    });
  }
};

const initDarkModeToggle = () => {
  const toggleSwitch = document.getElementById('darkmode-toggle');
  if (toggleSwitch) {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.documentElement.setAttribute('saved-theme', currentTheme);
      toggleSwitch.checked = currentTheme === 'dark';
    }

    toggleSwitch.addEventListener('change', (e) => {
      if (e.target.checked) {
        document.documentElement.setAttribute('saved-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('saved-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
  }
};


export const attachSPARouting = (init, rerender) => {
  // Attach SPA functions to the global Million namespace
  window.Million = {
    apply,
    navigate,
    prefetch,
    router,
  }

  const render = () => {
    requestAnimationFrame(rerender);
    initColorPicker(); // Reinitialize the color picker
    initDarkModeToggle(); // Reinitialize the dark mode toggle
  };
  window.addEventListener("DOMContentLoaded", () => {
    apply((doc) => init(doc));
    init();
    router(".singlePage");
    render();
  })
  window.addEventListener("million:navigate", render);
}
