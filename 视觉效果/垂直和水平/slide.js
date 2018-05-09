$(document).ready(function() {
    //垂直滚动
    /*var $wrapper=$('#images');
    var animator=function(imgblock){
    	imgblock.animate({
    		bottom:"-"+imgblock.height()+'px'
    	},5000,function(){
    		$(this).css({
    			bottom:imgblock.height()+'px'
    		});
    		animator($(this));
    	});
    }
    animator($wrapper);*/
    //使图片在浏览器中间的小窗口中滚动
    /*var $wrapper=$('#images');
    $wrapper.css({'bottom':0});
    //$wrapper.css({'top':0});
    var animator=function(imgblock){
    	imgblock.animate({
    		//向下
    		'bottom':-600
    		//向上
    		//'top':-600
    	},5000,function(){
    		imgblock.css({
    			//向下
    			'bottom':600
    			//向上
    			//'top':600
    		});
    		animator($(this));
    	});
    }
    animator($wrapper);*/

    //水平滚动
    var $wrapper = $('#images');
    $wrapper.css({'right':-150})//将前三张图片显示
    var animator = function(imgblock) {
        imgblock.animate({
            //'left': -600 
            'right': -600
        }, 5000, function() {
            imgblock.css({
             //'left': 450
             'right':450
            });
            animator($(this));
        });
    }
    animator($wrapper);
    //鼠标悬停暂停滚动
    $wrapper.hover(function() {
        $wrapper.stop();
    }, function() {
        animator($(this));
    });
});