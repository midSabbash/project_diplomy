//mobile side bar
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

//input
var input = $('.input-element');
input.on('change', function () {
    var inputVal =  $(this).val();
    var placeholder = $(this).next('.placeholder');

    if (inputVal && inputVal != ' '){
        placeholder.addClass('hidden');
    } else if(!inputVal || ' '){
        placeholder.removeClass('hidden');
    }
});