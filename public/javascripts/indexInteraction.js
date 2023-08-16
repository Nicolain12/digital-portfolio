document.addEventListener("DOMContentLoaded", function () {
    // CERTIFICATES
    // See More/See Less Logic
    const seeMoreButton = document.getElementById("certificates-see-more");
    const seeLessButton = document.getElementById("certificates-see-less");
    const shortDiv = document.querySelector(".certificates-info-div-short");
    const longHiddenDiv = document.querySelector(".certificates-info-div-long-hidden");

    seeMoreButton.addEventListener("click", function () {
        shortDiv.classList.replace("certificates-info-div-short", "certificates-info-div-short-hidden");
        longHiddenDiv.classList.replace("certificates-info-div-long-hidden", "certificates-info-div-long");
    });

    seeLessButton.addEventListener("click", function () {
        shortDiv.classList.replace("certificates-info-div-short-hidden", "certificates-info-div-short");
        longHiddenDiv.classList.replace("certificates-info-div-long", "certificates-info-div-long-hidden");
    });
    // Arrows Logic
    const scrollContainer = document.querySelector(".certificates-scroll-container");
    const leftArrow = document.querySelector(".certificates-arrows-content-div:first-child");
    const rightArrow = document.querySelector(".certificates-arrows-content-div:last-child");

    const scrollStep = 500; // Adjust the scroll step as needed

    leftArrow.addEventListener("click", function () {
        scrollContainer.scrollBy(-scrollStep, 0);
    });

    rightArrow.addEventListener("click", function () {
        scrollContainer.scrollBy(scrollStep, 0);
    });
});

