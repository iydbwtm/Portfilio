document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    const scrollLinks = document.querySelectorAll('a.scroll-link');

    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    }

    // Toggle project details
    const projectContainers = document.querySelectorAll('.project');

    for (const projectContainer of projectContainers) {
        const projectTitle = projectContainer.querySelector('h3');
        const projectDetails = projectContainer.querySelector('p');

        projectTitle.addEventListener('click', function () {
            projectDetails.classList.toggle('show');
        });
    }
});