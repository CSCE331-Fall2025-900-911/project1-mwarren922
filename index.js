const themeToggle = document.getElementById('theme-toggle');
        const themeStyle = document.getElementById('theme-style');

        themeToggle.addEventListener('click', () => {
            if (themeStyle.getAttribute('href') === 'style_dark.css') {
                themeStyle.setAttribute('href', 'style_light.css');
            } else {
                themeStyle.setAttribute('href', 'style_dark.css');
            }
        });