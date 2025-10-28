const img = document.getElementById("BABYBONO");
const btn = document.getElementById("changeImageBtn");

// Set the images
const image1 = "https://dummyimage.com/150x150/ced4da/6c757d"; // DEFAULTDUDE (shown first)
const image2 = "IMG_1255.jpg"; // BABYBONO

// Show DEFAULTDUDE by default
img.src = image1;

let showingImage1 = true;

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
