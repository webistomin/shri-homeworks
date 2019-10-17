$(document).ready(function(){

  var carousel = $("#carousel");

  carousel.owlCarousel();
});

document.addEventListener("DOMContentLoaded", function () {
  const buttonsContainer = document.querySelector(".buttons-wrap");
  const confirmPurchaseButton = document.querySelector(".buttons-wrap .button_yellow");
  const fridgeInfoContainer = document.querySelector(".card_size_m:nth-child(8) .card-description");
  const purchaseListContainer = `<div class="purchase-list-wrap"><p class="card-description card-description_big description_critical">Список покупок:</p><ol class="purchase-list"><li class="purchase-list__item">Хлеб</li><li class="purchase-list__item">Молоко</li></ol></div>`;
  
  confirmPurchaseButton.onclick = () => {
    fridgeInfoContainer.replaceWith(purchaseListContainer);
    buttonsContainer.style.display = "none";
  };
  
  document.getElementsByClassName("header-menu__switcher")[0].addEventListener("click", function () {
    document.getElementsByClassName("header-menu")[0].classList.toggle("header-menu_active")
  })
}, !1);
