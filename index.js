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



// snapping 


// nav



const badgeIds = [
  "f352a68f-1559-4fb0-8b16-53396c2590d4",
  "97e4385a-01fe-407d-919f-14c7f00fb9aa",
  "2be7b03d-18ae-4a68-a4e5-f5a82038ae92",
  "2df8c524-9379-45f1-94b1-9d9cf962c065",
  "3630bc03-d4b1-4241-b1d3-c9b58e3cb531",
  "1c519f1b-0289-4928-98ee-9ff43f45ad42",
  "d72981b2-b8c1-4f29-a054-336b9a49e895",
  "a45ea92c-5047-4b6b-b1e1-a0b11b27fc34",
  "bad98609-33c1-4f1f-8fcb-aad0eaea20f5",
  "9fb3d578-513b-4df7-8edf-737b1d80e037",
  "9273a297-c89f-4407-9067-7a09cfbc7916"
];
// // Function to create the embed nodes
// function createEmbedNodes(badgeIds) {
//   badgeIds.forEach((badgeId) => {
//     const embedContainer = document.createElement("div");
//     embedContainer.setAttribute("class", "embed-item");

//     const embedDiv = document.createElement("div");
//     embedDiv.setAttribute("data-iframe-width", "270");
//     embedDiv.setAttribute("data-iframe-height", "270");
//     embedDiv.setAttribute("data-share-badge-id", badgeId);
//     embedDiv.setAttribute("data-share-badge-host", "https://www.credly.com");

//     const embedScript = document.createElement("script");
//     embedScript.setAttribute("type", "text/javascript");
//     embedScript.setAttribute(
//       "src",
//       "//cdn.credly.com/assets/utilities/embed.js"
//     );
//     embedScript.async = true;

//     embedContainer.appendChild(embedDiv);
//     embedContainer.appendChild(embedScript);
//     marqueeContent.appendChild(embedContainer);
//   });
// }

// // Function to start the marquee animation
// function startMarquee() {
//   const marqueeWidth = marqueeContent.offsetWidth;
//   const badges = marqueeContent.getElementsByClassName("embed-item");
//   const badgeWidth = badges[0].offsetWidth;

//   let translateX = 0;
//   let index = 0;

//   function animateMarquee() {
//     if (translateX <= -((badgeWidth + 20) * (badges.length - 4))) {
//       translateX = 0;
//       index = 0;
//     } else {
//       translateX -= badgeWidth + 20;
//       index++;
//     }

//     marqueeContent.style.transform = `translateX(${translateX}px)`;

//     // If the last badge is fully visible, clone the first badge and append it
//     if (index === badges.length - 4) {
//       const firstBadge = badges[0].cloneNode(true);
//       marqueeContent.appendChild(firstBadge);
//     }

//     requestAnimationFrame(animateMarquee);
//   }

//   animateMarquee();
// }

// Call the function to create the embed nodes
// createEmbedNodes(badgeIds);

// // Start the marquee animation
// startMarquee();


// Accordion
// Add event listeners to toggle accordion items
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
