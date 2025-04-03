
document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navItems.forEach(nav => nav.classList.remove('active'));


            this.classList.add('active');

            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const mainContent = document.querySelector('.main-content');
    mainContent.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - mainContent.offsetTop;
            const sectionHeight = section.clientHeight;

            if (mainContent.scrollTop >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === current) {
                item.classList.add('active');
            }
        });
    });
});