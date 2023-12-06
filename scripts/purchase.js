document.addEventListener('DOMContentLoaded', function() {
  // Get all elements with the class 'purchase-button'
  const purchaseButtons = document.querySelectorAll('.purchase-button');

  // Get the popup elements
  const popup = document.getElementById('popup');
  var checkmark = document.getElementById('checkmark');

  // Function to show the popup
  function showPopup() {
    popup.style.display = 'flex';
    checkmark.src = './images/check.gif';

    // Hide the popup after 4 seconds
    setTimeout(function() {
      popup.style.display = 'none';
      checkmark.src = "";
    }, 800);
  }

  // Attach the showPopup function to each button click event
  purchaseButtons.forEach(function(button) {
    button.addEventListener('click', showPopup);
  });
});