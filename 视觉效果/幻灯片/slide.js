$(document).ready(function() {
	//鼠标移入移出时图片替换
    /*$('.imge').hide();
    $('.imge:first').fadeIn('slow');
    $('.imge').hover(function() {
        //$(this).fadeIn('slow');
    }, function() {
        var next = ($(this).next().length) ? $(this).next() : $('.imge:first');
        $(this).fadeOut('slow');
        next.fadeIn('slow');
    });*/

    //鼠标点击时
   /* $('.imge').hide();
    var next;
    $('.imge:first').fadeIn('slow');
    $('.imge').click(function(event){
    	next=($(this).next().length)?$(this).next():$('.imge:first');
    	$(this).fadeOut('slow');
    	next.fadeIn('slow');
    	//这里不知道为什么要阻止默认行为
    	event.preventDefault();
    });*/
    

    //当鼠标悬停时显示放大图片
    $('.small img').hover(function(){
        var src=$(this).attr('src');
        $('.large').fadeTo('slow',0,function(){
            $('.large').attr('src',src);
        }).fadeTo('slow',1); 
    },function(){

    });

});