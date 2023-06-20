// Intersection Observer API to trigger animations
const sections = document.querySelectorAll('section');

const options = {
  rootMargin: '-50px 0px -50px 0px',
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Wait for all images to finish their animation
function waitForAnimationCompletion(images, callback) {
  let counter = 0;

  // Check if each image has finished animating
  function checkAnimationCompletion() {
    counter++;
    if (counter === images.length) {
      callback();
    }
  }

  // Listen for the animationend event on each image
  images.forEach(function (image) {
    image.addEventListener("animationend", checkAnimationCompletion);
  });
}

// Add the "float" class to all images
function addFloatClass() {
  const floatingImages = document.querySelectorAll(".floating-svg");

  floatingImages.forEach(function (image) {
    image.classList.add("float");
  });
}

// Get all the images inside the "floating-svgs" div
const images = Array.from(document.querySelectorAll(".floating-svgs img"));

// Wait for the animation of all images to finish, then add the "float" class
waitForAnimationCompletion(images, addFloatClass);



// snapping 


// nav

