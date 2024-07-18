'use strict';


// Hide project tab after it got deselected
document.addEventListener('DOMContentLoaded', () => {
    const navbarItems = document.querySelectorAll('.navbar-item');
    const lastItem = navbarItems[navbarItems.length - 1];

    navbarItems.forEach((item, index) => {
        if (index < navbarItems.length - 1) { // Exclude the last li element (About project)
            item.addEventListener('click', () => {
                lastItem.classList.add('hidden');
            });
        }
    });
});


// When a project is clicked - open it in a new tab, autofill its data
document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('ul.project-list > li > a');

    projectLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Get the project name and image URL
            const projectName = this.querySelector('.project-title').textContent;
            
            // Unhide "About Project" tab
            const navbarItems = document.querySelectorAll('ul.navbar-list > li');
            const lastNavbarItem = navbarItems[navbarItems.length - 1];
            lastNavbarItem.classList.remove('hidden');

            const lastNavbarButton = lastNavbarItem.querySelector('button');
            if (lastNavbarButton) { lastNavbarButton.classList.add('active'); }
            
            // Hide other tabs
            navbarItems.forEach((item, index) => {
                if (index < navbarItems.length - 1) {
                    const button = item.querySelector('button');
                    if (button) {
                        button.classList.remove('active');
                    }
                }
            });
            const articles = document.querySelectorAll('article[data-page]');
            articles.forEach(article => { article.classList.remove('active'); });
            
            // Show about project tab contents
            const aboutProjectArticle = document.querySelector('article.about[data-page="about project"]');
            if (aboutProjectArticle) {
                aboutProjectArticle.classList.add('active');
            }

            
            // Update project name
            document.querySelector('#project_name').textContent = projectName;
        });
    });
});
