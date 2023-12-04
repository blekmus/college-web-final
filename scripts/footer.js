// Function to generate and append the footer dynamically
function generateFooter() {
  // Create the main container div for the footer
  var footerContainer = document.createElement('div');
  footerContainer.classList.add('footer', 'container');

  // Create the left div for the footer
  var leftDiv = document.createElement('div');
  leftDiv.classList.add('left');

  // Create the image element for the footer
  var image = document.createElement('img');
  image.src = './images/footer_dpad.png';

  // Append the image to the left div
  leftDiv.appendChild(image);

  // Create the right div for the footer
  var rightDiv = document.createElement('div');
  rightDiv.classList.add('right');

  // Create the paragraphs for the footer
  var warningParagraph = document.createElement('p');
  warningParagraph.textContent = 'WARNING: If you have epilepsy or have had seizures or other unusual reactions to flashing lights or patterns, consult a doctor before playing video games. All users should read the Health and Safety Information available in the system settings before using this software.';

  // Create a line break element for better separation
  var lineBreak = document.createElement('br');

  var copyrightParagraph = document.createElement('p');
  copyrightParagraph.textContent = '©Nintendo. Games are property of their respective owners.';

  // Append paragraphs and line break to the right div
  rightDiv.appendChild(warningParagraph);
  rightDiv.appendChild(lineBreak);
  rightDiv.appendChild(copyrightParagraph);

  // Append left and right divs to the main container
  footerContainer.appendChild(leftDiv);
  footerContainer.appendChild(rightDiv);

  // Append the main container to the bottom of the page
  document.body.appendChild(footerContainer);
}

// Call the function to generate and append the footer
generateFooter();
