$(".content-toolbar a").on('click', function(){
    if ($(this).hasClass('content-view-grid')) {
        var element = $('#projectContent');
        element.removeClass('list');
        element.addClass('grid');
        
    }else if ($(this).hasClass('content-view-list')) {
        var element = $('#projectContent');
        element.removeClass('grid');
        element.addClass('list');

    }
    
    return false;
});

