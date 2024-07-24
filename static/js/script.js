'use strict';

const elementToggleFunc = function (elem) {
  $(elem).toggleClass("active");
};

const sidebar = $("[data-sidebar]");
const sidebarBtn = $("[data-sidebar-btn]");
sidebarBtn.on("click", function () {
  elementToggleFunc(sidebar);
});

const modalImg = $("[data-modal-img]");
const modalTitle = $("[data-modal-title]");
const modalText = $("[data-modal-text]");
const select = $("[data-select]");
const selectItems = $("[data-select-item]");
const selectValue = $("[data-selecct-value]");
const filterBtn = $("[data-filter-btn]");

select.on("click", function () {
  elementToggleFunc(this);
});

selectItems.each(function () {
  $(this).on("click", function () {
    const selectedValue = $(this).text().toLowerCase();
    selectValue.text($(this).text());
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

const filterItems = $("[data-filter-item]");
const filterFunc = function (selectedValue) {
  filterItems.each(function () {
    if (selectedValue === "all" || selectedValue === $(this).data("category")) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
};

let lastClickedBtn = filterBtn.first();

filterBtn.each(function () {
  $(this).on("click", function () {
    const selectedValue = $(this).text().toLowerCase();
    selectValue.text($(this).text());
    filterFunc(selectedValue);

    lastClickedBtn.removeClass("active");
    $(this).addClass("active");
    lastClickedBtn = $(this);
  });
});

const form = $("[data-form]");
const formInputs = $("[data-form-input]");
const formBtn = $("[data-form-btn]");

formInputs.each(function () {
  $(this).on("input", function () {
    if (form[0].checkValidity()) {
      formBtn.removeAttr("disabled");
    } else {
      formBtn.attr("disabled", "disabled");
    }
  });
});

const navigationLinks = $("[data-nav-link]");
const pages = $("[data-page]");

navigationLinks.each(function () {
  $(this).on("click", function () {
    const targetPage = $(this).text().toLowerCase();
    pages.each(function () {
      if (targetPage === $(this).data("page")) {
        $(this).addClass("active");
        navigationLinks.filter(`[data-nav-link="${targetPage}"]`).addClass("active");
        window.scrollTo(0, 0);
      } else {
        $(this).removeClass("active");
        navigationLinks.filter(`[data-nav-link="${$(this).data("page")}"]`).removeClass("active");
      }
    });
  });
});
