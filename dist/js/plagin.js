;(function ($){
    $(window).on('load', function(){
        var sidebarBtn = $('.mobile-btn-sidebar');
        var sidebar = $('.sidebar');
        sidebarBtn.on('click', function (){
            sidebarBtn.toggleClass('open');
            sidebar.toggleClass('open');
        });
    });

})(jQuery);