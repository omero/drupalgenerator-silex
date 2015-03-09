(function($) {
    $(function() {
        $(".button-collapse").sideNav();
        $('.collapsible').collapsible({
            accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });
        //Fade when change section
        $('#sections').children('section').not('#module').hide();
        $("a").click(function(e){
            var href = $(this).attr('href');
            e.preventDefault();
            $('#sections').children('section').stop().hide();
            document.location.href = href;
            $(href).stop().fadeIn("slow");
            $(this).addClass('active');

        });
    });
}(jQuery));