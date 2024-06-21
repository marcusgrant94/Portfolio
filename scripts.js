document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
    const closeButton = document.createElement('img');
    closeButton.src = 'close-icon.png'; // Ensure this path is correct
    closeButton.classList.add('menu-button');
    closeButton.classList.add('close-icon'); // Add a specific class for close icon

    menuButton.addEventListener('click', function () {
        menu.classList.toggle('visible');
        if (menu.classList.contains('visible')) {
            menuButton.style.display = 'none';
            menuButton.parentNode.appendChild(closeButton);
        }
    });

    closeButton.addEventListener('click', function () {
        menu.classList.toggle('visible');
        menuButton.style.display = 'block';
        closeButton.remove();
    });

    const carouselImages = document.querySelector('.carousel-images');
    const totalImages = carouselImages.children.length;
    const imageWidth = carouselImages.children[0].clientWidth;
    let index = 0;

    function autoScroll() {
        index++;
        if (index >= totalImages) {
            index = 0;
        }
        carouselImages.style.transform = `translateX(-${index * imageWidth}px)`;
    }

    setInterval(autoScroll, 4000); // Change image every 4 seconds

    // Language switcher
    const langSwitch = document.getElementById('langSwitch');
    const storedLang = localStorage.getItem('lang') || 'en';
    switchLanguage(storedLang); // Apply stored language on page load

    langSwitch.addEventListener('click', function () {
        const lang = langSwitch.textContent === '日本語' ? 'ja' : 'en';
        localStorage.setItem('lang', lang); // Save language preference
        switchLanguage(lang);
    });

    function switchLanguage(lang) {
        const elements = document.querySelectorAll('[data-en], [data-ja]');
        elements.forEach(element => {
            element.textContent = element.getAttribute(`data-${lang}`);
        });
        langSwitch.textContent = lang === 'en' ? '日本語' : 'English';
    }

    // Highlight current page menu item
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll('#menu a');

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentPath) {
            item.classList.add('active');
        }
    });
});















