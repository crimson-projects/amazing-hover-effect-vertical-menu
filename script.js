const elements = document.querySelectorAll(".elements");
const imageContainer = document.querySelector(".images");

elements.forEach(function (element) {
  element.addEventListener("mouseenter", function (e) {
    let img = element.getAttribute("data-image");
    let width = element.getAttribute("data-width");
    let height = element.getAttribute("data-height");
    imageContainer.style.backgroundImage = `url(${img})`;
    imageContainer.style.width = width;
    imageContainer.style.height = height;
    imageContainer.style.backgroundSize = "cover";
    imageContainer.style.backgroundPosition = "center";
  });

  document.addEventListener("mousemove", function (e) {
    imageContainer.style.left = `${e.x - 150}px`;
    imageContainer.style.top = `${e.y - 100}px`;
  });
});


