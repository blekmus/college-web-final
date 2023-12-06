function validateForm() {
  var phoneInput = document.getElementById('phone').value;

  // Regular expression to check if the phone number contains only digits
  var phonePattern = /^\d*$/;

  if (phoneInput !== '' && !phonePattern.test(phoneInput)) {
    alert('Please enter a valid phone number (digits only).');
    return false;
  }

  return true;
}