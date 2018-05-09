$(document).ready(function() {
    /*var $pic=$('#images a');
    $pic.hide();
    var imgs=$pic.length;
    var next;
    for(var i=0;i<imgs;i++){
    	next=$pic.eq(i);
    	//水平图片
    	//next.css({'position':'absolute','left':160*i});
    	//垂直图片
    	next.css({'position':'absolute','top':160*i});
    	next.show();
    }*/


    //创建水平滑动的图片浏览
    /*$('#scroller').css({
    	'margin':'auto',
    	'width':'465px',
    	'height':'170px',
    	'overflow-x':'scroll',
    	'overflow-y':'hidden'
    });
    $('#images').css({
    	//水平滑动
    	'width':'790px'
    	//垂直滑动
    	'height':790px;
    })*/

    //点击图片向左滚动并消失
    /*$('#img1').click(function(){
    	$(this).animate({'left':-160},'slow');
    });*/

    //让图片在左边消失 在右边重新出现
    /*$('.image').click(function(){
    	$(this).animate({
    		'left':-155
    	},'slow',function(){
    		$(this).css({
    			'left':150
    		});
    		$(this).animate({
    			'left':0
    		},'slow');
    	});
    });*/
    //使图片一直滚动
   /* scroll();
    function scroll() {
       $('.image').animate({
       		'left':-160
       },'slow',function(){
       	$(this).css({
       		'left':150
       	});
       	$(this).animate({
       		'left':0
       	},'slow');
       });
        setTimeout(scroll,1500);
    }*/


});
 