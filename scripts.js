// Get references to the image and button
const img = document.getElementById("BABYBONO");
const btn = document.getElementById("changeImageBtn");

// Define the image sources
const image1 = "BABYBONO.jpg";     // the current image shown
const image2 = "DEFAULTDUDE.jpg";  // the image you want to switch to

// Track which image is currently displayed
let showingImage1 = true;

// Add an event listener for the button click
btn.addEventListener("click", () => {
  if (showingImage1) {
    img.src = image2; // switch to DEFAULTDUDE
    btn.textContent = "Change Back";
  } else {
    img.src = image1; // switch back to BABYBONO
    btn.textContent = "Change Image";
  }

  // Flip the state for next time
  showingImage1 = !showingImage1;
});
