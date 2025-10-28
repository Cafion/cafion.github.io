// Get the image and button elements
const img = document.getElementById("BABYBONO");
const btn = document.getElementById("changeImageBtn");

// Define your image paths
const image1 = "IMG_1255.jpg";   // the one you want to show by default
const image2 = "https://dummyimage.com/150x150/ced4da/6c757d"; // the other one

//  Set the default image when the page loads
img.src = image1;

//  Keep track of which one is showing
let showingImage1 = true;

//  Handle button click
btn.addEventListener("click", () => {
  if (showingImage1) {
    img.src = image2;
    btn.textContent = "Change Back";
  } else {
    img.src = image1;
    btn.textContent = "Change Image";
  }
  showingImage1 = !showingImage1;
});
