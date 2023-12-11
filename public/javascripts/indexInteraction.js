document.addEventListener("DOMContentLoaded", function () {
    // HEADER LINKS
    const iconElements = document.querySelectorAll(".h-apps-div i");

    iconElements.forEach((icon) => {
        icon.addEventListener("click", function () {
            const url = icon.getAttribute("data-url");
            if (url) {
                window.location.href = url;
            }
        });
    });
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
    // Arrows Logic (Certificates)
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
    // Arrows Logic (Projects)
    const scrollContainerProjects = document.querySelector(".projects-scroll-container");
    const leftArrowProjects = document.querySelector(".projects-arrows-content-div:first-child");
    const rightArrowProjects = document.querySelector(".projects-arrows-content-div:last-child");

    const scrollStepProjects = 500; // Adjust the scroll step as needed

    leftArrow.addEventListener("click", function () {
        scrollContainer.scrollBy(-scrollStepProjects, 0);
    });

    rightArrow.addEventListener("click", function () {
        scrollContainer.scrollBy(scrollStepProjects, 0);
    });
    


    //PROJECTS
    //Links (Desktop)
    const options = document.querySelectorAll('.projects-options option');

    options.forEach(option => {
        option.addEventListener('click', function () {
            const url = this.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });

    //Links (Mobile)
    const githubIcons = document.querySelectorAll('.fa-github');
    const optionDivs = document.querySelectorAll('.projects-link-div-mobile');

    // Add click event listeners to each GitHub icon
    githubIcons.forEach((githubIcon, index) => {
        githubIcon.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the click from reaching projects-div
            githubIcon.style.display = 'none';
            optionDivs[index].style.display = 'block';
        });
    });

    // Add click event listeners to the options
    optionDivs.forEach((optionDiv, index) => {
        optionDiv.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the click from reaching projects-div
            
            const url = event.currentTarget.querySelector('option').getAttribute('data-url');

            if (url) {
                // Open a new window with the specified URL
                window.open(url, '_blank');
            }
        });
    });

    // Add click event listener to the document to hide options when clicking outside
    document.addEventListener('click', () => {
        githubIcons.forEach((githubIcon, index) => {
            githubIcon.style.display = 'block';
            optionDivs[index].style.display = 'none';
        });
    });
});

