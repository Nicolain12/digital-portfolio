document.addEventListener("DOMContentLoaded", function() {
    const seeMoreButton = document.getElementById("see-more");
    const seeLessButton = document.getElementById("see-less");
    const shortDiv = document.querySelector(".certificates-info-div-short");
    const longHiddenDiv = document.querySelector(".certificates-info-div-long-hidden");

    seeMoreButton.addEventListener("click", function() {
        shortDiv.classList.replace("certificates-info-div-short", "certificates-info-div-short-hidden");
        longHiddenDiv.classList.replace("certificates-info-div-long-hidden", "certificates-info-div-long");
    });

    seeLessButton.addEventListener("click", function() {
        shortDiv.classList.replace("certificates-info-div-short-hidden", "certificates-info-div-short");
        longHiddenDiv.classList.replace("certificates-info-div-long", "certificates-info-div-long-hidden");
    });
});
