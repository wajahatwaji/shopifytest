document.addEventListener('DOMContentLoaded', function () {
  var productBtns = document.querySelectorAll('.product-btn');

  productBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var parentCard = btn.parentElement;
      parentCard.classList.toggle('active');
    });
    
  });
  var productBtns = document.querySelectorAll('.close');

  productBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var parentCard = btn.parentElement;
      parentCard.classList.toggle('active');
    });
    
  });
});
document.querySelectorAll('.product-card .close').forEach(function(closeBtn) {
  closeBtn.addEventListener('click', function() {
    this.closest('.product-card').classList.remove('active');
  });
});
const toggleButton = document.getElementById('toggleButton');
    const navbar = document.getElementById('navbar');

    toggleButton.onclick = function() {
        toggleButton.classList.toggle('active');
        navbar.classList.toggle('active');
    };
