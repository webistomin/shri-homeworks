"use strict";

const output = document.querySelector('.modal__value');
const rangeSLider = document.querySelector('.adjust-bar.adjust-bar_theme_temp');


let knobDragged;
let prevAngleRad = null;
let prevRotate = null;

const arrowLeftScens = document.querySelector('.scenarios__paginator .paginator__arrow_left');
const arrowRightScens = document.querySelector('.scenarios__paginator .paginator__arrow_right');
const panelCountScens = document.querySelectorAll('.scenarios__panel').length;
const pageCountScens = document.querySelectorAll('.scenarios__page').length;
const scenarios = document.querySelector('.scenarios');
const pagiantorScens = document.querySelector('.scenarios__paginator');
let currentPage = 1;


const selectButton = document.querySelector('.filter__select-button');
const selectButtonText = document.querySelector('.filter__select-button .button__text');
const selectOptions = document.querySelectorAll('.filter__select-item');
const popup = document.querySelector('.filter__select-popup');



let widths = '';
window.addEventListener('scroll', function() {
  widths += document.querySelectorAll('body')[0].offsetWidth;
  
});

selectOptions.forEach(o => {
  o.addEventListener('click', function(e) {
    document.querySelector('#' + e.target.dataset.group).checked = true;
    
    selectOptions.forEach(opt => opt.classList.toggle('filter__select-item_checked', false));
    e.target.classList.toggle('filter__select-item_checked', true);
    popup.classList.toggle('filter__select-popup_open', false);
    selectButtonText.innerText = e.target.innerText;
  })
});

$(document).ready(function(){
  
  var carousel = $("#carousel");
  
  carousel.owlCarousel();
});

document.addEventListener("DOMContentLoaded", function () {
  const buttonsContainer = document.querySelector(".buttons-wrap");
  const fridgeInfoContainer = document.querySelector(".card_size_m:nth-child(8) .card-description");
  setTimeout(function() {
    const confirmPurchaseButton = document.querySelector(".buttons-wrap .button_yellow");
    const purchaseListContainer = document.createElement('div');
    const purchaseListTitle = document.createElement('p');
    const purchaseList = document.createElement('ol');
    const purchaseListItemOne = document.createElement('li');
    const purchaseListItemTwo = document.createElement('li');
    
    purchaseListContainer.setAttribute('class', 'purchase-list-wrap');
    purchaseListTitle.setAttribute('class', 'card-description card-description_big description_critical');
    purchaseListTitle.textContent = 'Список покупок:';
    purchaseList.setAttribute('class', 'purchase-list');
    purchaseListItemOne.setAttribute('class', 'purchase-list__item');
    purchaseListItemOne.textContent = 'Хлеб';
    purchaseListItemTwo.setAttribute('class', 'purchase-list__item');
    purchaseListItemTwo.textContent = 'Молоко';
    
    purchaseListContainer.appendChild(purchaseListTitle);
    purchaseListContainer.appendChild(purchaseList);
    purchaseList.appendChild(purchaseListItemOne);
    purchaseList.appendChild(purchaseListItemTwo);
    
    confirmPurchaseButton.onclick = () => {
      fridgeInfoContainer.replaceWith(purchaseListContainer)
      buttonsContainer.style.display = "none";
    }
  }, 500)
  
  
  document.getElementsByClassName("header-menu__switcher")[0].addEventListener("click", function () {
    document.getElementsByClassName("header-menu")[0].classList.toggle("header-menu_active")
  })
}, !1);
