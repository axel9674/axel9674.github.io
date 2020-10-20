$(document).ready(() => {
    switchDarkMode();
    $('#btn-dark-mode').on('click', () => {
        if ($('body').data('dark-mode') === 'false') {
            $('body').data('dark-mode', 'true');
        } else {
            $('body').data('dark-mode', 'false');
        }
        switchDarkMode();
    });
});

function switchDarkMode() {
    if ($('body').data('dark-mode') === 'true') {
        $('body').addClass('dark-mode');
        $('nav.navbar').removeClass('navbar-light').addClass('navbar-dark');
    } else {
        $('body').data('dark-mode', 'false');
        $('body').removeClass('dark-mode');
        $('nav.navbar').removeClass('navbar-dark').addClass('navbar-light');
    }
}