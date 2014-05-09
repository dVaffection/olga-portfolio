$(function () {
    
    function addOpacity($img) {
        $img.css('opacity', 0.2);
    }
    
    function removeOpacity($img) {
        $img.css('opacity', 1);
    }

    $('.hover-aware').each(function () {
        var $hover = $(this).find('.hover');
        if ($hover.length) {
            var $img = $(this).find('img.projects');
            $(this).hover(function () {
                $hover.show();
                addOpacity($img);
            }, function () {
                $hover.hide();
                removeOpacity($img);
            });
        }
    });
    
    // trun.js plugin
    
    $('#magazine').turn({
            display: 'double',
            acceleration: true,
            gradients: !$.isTouch,
            elevation:50,
            when: {
                    turned: function(e, page) {
                            /*console.log('Current view: ', $(this).turn('view'));*/
                    }
            }
    });
    
    $('.leftbutton').on('click', function() {
        $("#magazine").turn("previous");
    });
    
    $('.rightbutton').on('click', function() {
        $("#magazine").turn("next");
    });

});
