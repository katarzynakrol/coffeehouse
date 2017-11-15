document.addEventListener('DOMContentLoaded', function () {
    openMenu();
});

function openMenu() {
    var icon = document.getElementById('homeIcon');
    var socialMediaPanel = document.getElementById('socialMedia');
    icon.onmouseover = function () {
        socialMediaPanel.style.display = 'block';
        socialMediaPanel.classList += ' animation';
        icon.style.display = 'none';
    };

    function closeMenu() {
        socialMediaPanel.style.display = 'none';
        socialMediaPanel.classList.remove('animation');
        icon.style.display = 'block';
    }
    socialMediaPanel.addEventListener('mouseleave', closeMenu);
}

function scrollNavbar() {
    var menu = document.getElementById('topNavbar');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        menu.classList.add('fixedNavbar');
    } else {
        menu.classList.remove('fixedNavbar');
    }
}
document.addEventListener('scroll', scrollNavbar);