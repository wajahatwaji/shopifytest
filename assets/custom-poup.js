



// document.addEventListener("DOMContentLoaded", function () {
//     const popupTriggers = document.querySelectorAll(".circle");
//     const popup = document.querySelector(".popup");
//     const closeButton = document.querySelector(".close-button");
//     const popupImage = document.querySelector(".popup-image img");
//     const popupProductName = document.querySelector(".popup-product-detail h2");
//     const popupProductPrice = document.querySelector(".popup-product-detail h3");

//     popupTriggers.forEach((trigger) => {
//         trigger.addEventListener("click", function () {
//             const productName = trigger.dataset.product_handle;

//             popupProductName.textContent = productName;
//             // popupProductPrice.textContent = productPrice;
//             // popupImage.src = trigger.querySelector('img').src;

//             popup.style.display = "flex";
//         });
//     });

//     closeButton.addEventListener("click", function () {
//         popup.style.display = "none";
//     });

//     window.addEventListener("click", function (event) {
//         if (event.target === popup) {
//             popup.style.display = "none";
//         }
//     });
// });



// ///////////////////////////////////////////////

// function closeQuickViewPoup(){
    
//    var quickViewPopup = document.querySelector('.cross');
//     quickViewPopup.classList.remove('active');
// } 



document.addEventListener('DOMContentLoaded', function() {
    // Get the cross element
    const cross = document.querySelector('.cross');

    // Add click event listener to the cross element
    cross.addEventListener('click', function() {
        // Remove the active class from the .quickview_popup element
        document.querySelector('.quickview_popup').classList.remove('active');
      document.querySelector(".quickview_pro_inner").innerHTML = "";
    });
});




function showFlashMessage() {
    // Create a new flash message element
    const flashMessage = document.createElement('div');
    flashMessage.classList.add('flash-message');
    flashMessage.textContent = 'Product is addes to cart';
    
    // Append the flash message to the body
    document.body.appendChild(flashMessage);
    
    // Fade in the flash message
    flashMessage.style.display = 'block';
    setTimeout(function() {
        flashMessage.style.opacity = '1';
    }, 100);
    
    // Fade out and remove the flash message after 3 seconds
    setTimeout(function() {
        flashMessage.style.opacity = '0';
        setTimeout(function() {
            // document.body.removeChild(flashMessage);
        }, 500);
    }, 3000);
}