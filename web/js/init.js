(function($) {
    $(function() {

        $(".button-collapse").sideNav();
        $('.collapsible').collapsible({
            accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });
        $('select').material_select();
        //Fade when change section
        $('#sections').children('section').not('#module').hide();
        // activate links main menu
        $(".side-nav a").click(function(e){
            var href = $(this).attr('href');
            e.preventDefault();
            $('#sections').children('section').stop().hide();
            document.location.href = href;
            $(href).stop().fadeIn(500);
            $('.collapsible .collapsible-body ul li').removeClass('active');
            $(this).parent().addClass('active');
        });

        var $wrapper = $('.multi-field');

        /*$('.multi-field-wrapper').each(function() {
            $(".add-permission").click(function(e) {
                e.preventDefault();
                $('.multi-field:first-child').clone().appendTo($('.multi-field').parent());
            });
            $('.multi-field .remove-field', $wrapper).click(function() {
                e.preventDefault();
                if ($('.multi-field', $wrapper).length > 1)
                    $(this).parent('.multi-field').remove();
                return false;
            });
        });*/
    });
}(jQuery));