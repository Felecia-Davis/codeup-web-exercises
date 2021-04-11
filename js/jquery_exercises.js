$(document).ready(function() {

    $('.list').hover(
        function() {
            $('.list').css('color', '#F00');
        },
        function() {
            $('.list').css('color', '#000');
        }
    )
});