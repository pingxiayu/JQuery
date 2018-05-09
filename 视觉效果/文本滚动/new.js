$(document).ready(function() {
    /*var $wrapper=$('#scroller p');
    $wrapper.css({'top':0});
    var animator=function(imgblock){
    	imgblock.animate({
    		'top':-500
    	},5000,function(){
    		imgblock.css({'top':250});
    		animator($(this));
    	});
    }
    animator($wrapper);
    $("#scroller").hover(function(){
    	$wrapper.stop();
    },function(){
    	animator($wrapper);
    });*/


    //使用.css创建
    /*height=$('#scroller').height();
	height2=$('#scroller p').height();
	no_ofline=0;
	rotate=true;
	$('#scroller').hover(function(){
		rotate=false;
	},function(){
		rotate=true;
	});
	scroll();
});
function scroll(){
	no_ofline+=rotate?-2:0;
	$('#scroller p').css({'top':no_ofline+'px'});
	if(no_ofline<-1*height2){
		no_ofline=height;
	}
	setTimeout(scroll,50);
}*/
});