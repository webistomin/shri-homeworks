$(document).ready(function(){
  
  var carousel = $("#carousel");
  
  // carousel.owlCarousel();
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
      fridgeInfoContainer.replaceWith(purchaseListContainer);
      buttonsContainer.style.display = "none";
    }
  }, 500);
  
  
  document.getElementsByClassName("header-menu__switcher")[0].addEventListener("click", function () {
    document.getElementsByClassName("header-menu")[0].classList.toggle("header-menu_active")
  })
}, !1);
