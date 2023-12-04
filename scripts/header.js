// Function to generate navigation bar dynamically
function generateNavigation() {
  // Create the main container div
  var containerDiv = document.createElement("div");
  containerDiv.classList.add("navigation", "container");

  // Create left link with Nintendo logo
  var leftLink = document.createElement("a");
  leftLink.href = "./index.html";
  leftLink.classList.add("left");

  var img = document.createElement("img");
  img.src = "./images/nintendo_logo.png";
  img.alt = "nintendo_icon";
  img.classList.add("icon");

  leftLink.appendChild(img);
  containerDiv.appendChild(leftLink);

  // Create right div with navigation links
  var rightDiv = document.createElement("div");
  rightDiv.classList.add("right");

  // Create "Buy Now" link
  var buyNowLink = document.createElement("a");
  buyNowLink.href = "./product.html";
  // Add underline and red styling if on the product page
  if (window.location.href.includes("product.html")) {
    buyNowLink.classList.add("underline");
  }
  buyNowLink.classList.add("red");
  buyNowLink.textContent = "Buy Now";

  // Create "About" link
  var aboutLink = document.createElement("a");
  aboutLink.href = "./about.html";
  // Add underline if on the about page
  if (window.location.href.includes("about.html")) {
    aboutLink.classList.add("underline");
  }
  aboutLink.textContent = "About";

  // Create "Contact" link
  var contactLink = document.createElement("a");
  contactLink.href = "./contact.html";
  // Add underline if on the contact page
  if (window.location.href.includes("contact.html")) {
    contactLink.classList.add("underline");
  }
  contactLink.textContent = "Contact";

  // Append links to the right div
  rightDiv.appendChild(buyNowLink);
  rightDiv.appendChild(aboutLink);
  rightDiv.appendChild(contactLink);

  // Append the right div to the main container div
  containerDiv.appendChild(rightDiv);

  // Append the generated HTML to the body or any other container element
  const body = document.body;
  body.insertBefore(containerDiv, body.firstChild);
}

// Call the function to generate the HTML navigation bar
generateNavigation();
