(function() {

    window.addEventListener('load', () => {
        const mainNavList = document.querySelector('.header__nav-list');
        const burgerNavList = document.querySelector('.burger-menu__list');
        const mainNavDropdownItem = document.querySelector('.header__nav-item--dropdown');
        const leaveRequestBtn = document.querySelector('.header-banner__request button');

        const ourSupport = document.querySelector('.our-support');
        const portfolio = document.querySelector('.portfolio');
        const reviews = document.querySelector('.reviews');
        const feedback = document.querySelector('.feedback');

        const sections = {
            'our-support': ourSupport,
            'portfolio': portfolio,
            'reviews': reviews,
            'feedback': feedback
        };

        const scrollPage = (section) => {
            scrollTo({
                behavior: 'smooth',
                top: window.pageYOffset + sections[section].getBoundingClientRect().top
            });
        };

        mainNavList.addEventListener('click', (evt) => {
            const dropdown = evt.target.closest('.header__nav-item--dropdown');

            if (dropdown) {
                return;
            }

            const navListItem = evt.target.closest('.header__nav-item .header-item');

            if (!navListItem) {
                return;
            }

            scrollPage(navListItem.getAttribute('data-section'));
        });

        burgerNavList.addEventListener('click', (evt) => {
            const navListItem = evt.target.closest('.burger-menu__item .item');

            if (!navListItem) {
                return;
            }

            scrollPage(navListItem.getAttribute('data-section'));
        });

        mainNavDropdownItem.addEventListener('click', (evt) => {
            let item = evt.currentTarget;
            item.classList.toggle('header__nav-item--dropdown-open');
        });
        
        leaveRequestBtn.addEventListener('click', () => {
            scrollPage('feedback');
        });
    });

})()