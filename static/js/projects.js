'use strict';

// Hide project tab after it got deselected
$(document).ready(function () {
  const $navbarItems = $('.navbar-item');
  const $lastItem = $navbarItems.last();

  $navbarItems.slice(0, -1).on('click', function () {
    $lastItem.addClass('hidden');
  });
});

// When a project is clicked - open it in a new tab, autofill its data
$(document).ready(function () {
  const $projectLinks = $('ul.project-list > li > a');

  $projectLinks.on('click', function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Get the project name
    const projectName = $(this).find('.project-title').text();

    // Unhide "About Project" tab
    const $navbarItems = $('ul.navbar-list > li');
    const $lastNavbarItem = $navbarItems.last();
    $lastNavbarItem.removeClass('hidden');

    const $lastNavbarButton = $lastNavbarItem.find('button');
    if ($lastNavbarButton.length) { 
      $lastNavbarButton.addClass('active'); 
    }

    // Hide other tabs
    $navbarItems.slice(0, -1).find('button').removeClass('active');
    const $articles = $('article[data-page]');
    $articles.removeClass('active');

    // Show about project tab contents
    const $aboutProjectArticle = $('article.about[data-page="about project"]');
    if ($aboutProjectArticle.length) {
      $aboutProjectArticle.addClass('active');
    }

     

    // Make AJAX request to get project info
    $.ajax({
      url: `/get_project_info/${projectName}`,
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        console.log($('#project_name'));
        $('#project_name').text(projectName);

        // Replace .project-preview src with the one from JSON
        $('.project-preview').attr('src', data.image_src);

        // Hide all sections and show the active one
        $('article.about section.about-text').addClass('inactive');
        $(`#${data.active_section}`).removeClass('inactive');

        // Show about section
        $('#about-section').removeClass('inactive');
        $('#about-section').addClass('active');
      },
      error: function (xhr, status, error) {
        console.error(`Error fetching project info: ${error}`);
      }
    });
  });
});
