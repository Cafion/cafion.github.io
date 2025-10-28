// Get the image and button elements
const img = document.getElementById("BABYBONO");
const btn = document.getElementById("changeImageBtn");

// Define your image paths
const image1 = "BABYBONO.jpg";   // the one you want to show by default
const image2 = "DEFAULTDUDE.jpg"; // the other one

// 1️⃣ Set the default image when the page loads
img.src = image1;

// 2️⃣ Keep track of which one is showing
let showingImage1 = true;

// 3️⃣ Handle button click
btn.addEventListener("click", () => {
  if (showingImage1) {
    img.src = image2;
    btn.textContent = "0%";
  } else {
    img.src = image1;
    btn.textContent = "100%";
  }
  showingImage1 = !showingImage1;
});
