/*$(window).blur(function () {
    $("title").text('Regrese al Sistema');
});
$(window).focus(function () {
    $("title").text('ADN 3.0');
});*/
$('document').ready((function ($) {
    return function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 150) {
                $('.sticky-container').show(0);
            } else {
                $('.sticky-container').hide();
            }
        });
        $('.ui-autocomplete-panel').after("<div class='add-button' style='display:none; text-align: center; -webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.3);-moz-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.3);box-shadow: 0 1px 3px 0 rgba(0,0,0,0.3);background-color: #F1F6FB; border-top: 1px solid #d4d4d4; padding: 10px; z-index: 9999; position: absolute;'><a href='#' class='ui-button ui-button-small'>AGREGAR NUEVO</a></div>");
        $(document).on('focus', 'body p-autocomplete.canAdd span', function () {
            $(this).parent().parent().parent().addClass('withicon');
        });
        $(document).on('blur', 'body p-autocomplete', function () {
            $(this).parent().parent().parent().removeClass('withicon');
        });
        $(document).on('blur', '.md-inputfield.withicon input', function () {
            $('.add-button').hide();
        });
        $(document).on('keyup', '.md-inputfield.withicon input', function () {
            var input = $(this);
            //$( '.add-button' ).remove();
            input.parent().find('.add-button').hide(0);
            setTimeout(function () {
                var height = input.parent().find('.ui-autocomplete-panel').outerHeight();
                var width = input.parent().find('.ui-autocomplete-panel').outerWidth();
                var position = input.parent().find('.ui-autocomplete-panel').position();
                if (height > 0) {
                    input.parent().find('.add-button').css('top', (height + 19) + 'px').css('width', width + 'px').show(0);
                }
            }, 500);
        });
    };
})(jQuery));