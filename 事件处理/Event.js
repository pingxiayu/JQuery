$(document).ready(function() {
    //使用bing() 添加单击事件
    /*$('.blod').bind('click',function(){
    	alert("你单击了blod按钮");
    });
    $('.italic').bind('click',function(){
    	alert("你单击了italic按钮");
    });*/



    //直接附加事件
    /*$('.buttons').click(function(){
    	alert("你单击了"+$(this).text()+"按钮");
    });*/


    //利用事件的目标属性
    /*$('.buttons').click(function(event){
    	var target=$(event.target);
    	//is() 方法用于查看选择的元素是否匹配选择器。
    	if(target.is('.blod')){
    		alert("你单击了blod按钮");
    	}
    	if(target.is('.italic')){
    		alert("你单击了italic按钮");
    	}
    });*/


    //自动触发事件

    //trigger() 方法触发被选元素的指定事件类型
    /*$('.buttons').bind('click',function(){
    	alert("你单击了"+$(this).text()+"按钮");
    });
    $('.italic').trigger('click');*/


    //点击后警禁用按钮

    //unbind()方法 用于从指定元素中删除某事件类型
    /*$('.buttons').bind('click',function(){
    	alert("你单击了"+$(this).text()+"按钮");
    	$('.buttons').unbind('click');
    });*/


    //处理鼠标事件
    //mousedown
    /*$('.buttons').bind('mousedown',function(){
    	alert("你的鼠标按下了"+$(this).text()+"按钮");
    });*/

    //mouseup
    /*$('.buttons').bind('mouseup',function(){
    	alert("你的鼠标按下了"+$(this).text()+"按钮");
    });*/

    //mouseover
    /*$('.buttons').bind('mouseover',function(){
    	alert("你的鼠标移动到了"+$(this).text()+"按钮");
    });*/



    //查明哪个鼠标键被按下了 event.button属性 0:左键,1:中键,2:右键
    /*$('.buttons').bind('mousedown',function(event){
    	if(event.button==0){
    		alert("你按下了鼠标左键");
    	}else if(event.button==2){
    		alert("你按下了鼠标右键");
    	}else{
    		alert("你按下了鼠标中键");
    	}

    });*/


    //查找鼠标按下时额屏幕坐标
    /*$('img').bind('mousedown',function(event){
    	$('p').text("x轴距离"+event.clientX+"y轴距离"+event.clientY);
    });*/

    //动态地突出显示文本
    /*$('.buttons').mouseover(function(){
    	$('p').css({
    		'background-color':'cyan',
    		'font-weight':'bold',
    		'color':'blue'
    	});
    });
    $('.buttons').mouseout(function(){
    	$('p').css({
    		'background-color':'',
    		'font-weight':'',
    		'color':''
    	});
    });*/


    //随鼠标移动是图像明亮或模糊
    /*$('img').css('opacity',0.4);
    $('img').bind('mouseover',function(){
    	$('img').css('opacity',1.0);
    	$('img').css('width',function(){
    		return $(this).width()+50;
    	});
    	$('img').css('height',function(){
    		return $(this).height()+30;
    	});
    });
    $('img').bind('mouseout',function(){
    	$('img').css('opacity',0.4);
    	$('img').css('width','');
    	$('img').css('height','');
    });*/

    //查明严肃何时获得或失去焦点

    /* var flag = true;
     $('.name').focus(function() {
         if (flag) {
             alert("焦点在name框上");
             flag = false;
         }

     });
     var flag1 = true;
     $('.name').blur(function() {
         if (flag1) {
             alert("焦点离开了name框");
             flag1 = false;
         }

     });*/


    //在按钮上应用悬停效果
    /*$('.buttons').hover(function(){
    	$(this).addClass('hover');
    },function(){
    	$(this).removeClass('hover');
    });*/


    //切换应用一个css类 toggleClass(className)  
    //如果css类已经应用则删除 否则为指定元素应用css类
    /* $('.buttons').click(function(){
     	$(this).toggleClass('hover');
     });*/
     //toggle() 现在只能用于显示和隐藏;
    /*$('.buttons').click(function() {
       $('.buttons').toggle('slow');
    });*/
    //为响应事件而添加和删除文本
    
    /*$('.add').click(function(){
    	$('div').before("<p class='text'>坚持就是胜利</p>");
    });
    $('.remove').click(function(){
    	//remove() 删除指定元素集合
    	$('.text').remove();
    });*/

    //应用样式作为对事件的响应
   /* $('.blod').click(function(){
    	$('#info').toggleClass('blodmatter');
    });
    $('.italic').click(function(){
    	$('#info').toggleClass('italicmatter');
    });
    $('.buttons').hover(function(){
    	$(this).addClass('hover');
    },function(){
    	$(this).removeClass('hover');
    });*/


 	//返回顶部链接
 	/*$('<a href="#topofpage">Return to Top</a>').insertAfter('p');
 	$('<a id="topofpage"></a>').insertBefore('p');*/

 	//提供'更多....'链接
 	
 	/*$('#info').hide();
 	$('span.readmore').click(function(){
 		if($('#info').css('display')=='none'){
 			//fadeIn() 使用淡入效果来显示被选元素
 			//$('#info').fadeIn('slow');
 			$('#info').show('slow');
 		}else{
 			//fadeOut() 使用淡出效果来隐藏被选元素
 			//$('#info').fadeOut('slow');
 			$('#info').hide('slow');
 		}
 		
 		$('#info').addClass('hover');
 		//$(this).hide();
 	});*/
 	//使用toggle实现
 	/*$('span.readmore').click(function(){
 		$('#info').toggle('slow');
 		$('#info').addClass('hover');
 	});*/

    //以动画效果显示文本
    //click
    /*$('.Some').hide();
    $('.Sing').hide();
    $('.Singer').hide();
    $('#someText').click(function(){
        $('.Some').show('slow');
        $('.Singer').hide();
        $('.Sing').hide();
    });
    $('#singText').click(function(){
        $('.Sing').show('slow');
        $('.Singer').hide();
        $('.Some').hide();
    });
    $('#singerText').click(function(){
        $('.Singer').show('slow');
        $('.Sing').hide();
        $('.Some').hide();
    });*/

    //mouseover mouseout
    /*$('.Some').hide();
    $('.Sing').hide();
    $('.Singer').hide();
     $('#someText,#singText,#singerText').mouseout(function(){
        $('.Sing').hide();
        $('.Some').hide();
        $('.Singer').hide();
    });
    $('#someText').mouseover(function(){
        $('.Some').show('slow');
        $('.Singer').hide();
        $('.Sing').hide();
    });
    $('#singText').mouseover(function(){
        $('.Sing').show('slow');
        $('.Singer').hide();
        $('.Some').hide();
    });
    $('#singerText').mouseover(function(){
        $('.Singer').show('slow');
        $('.Sing').hide();
        $('.Some').hide();
    });*/

    //以滑动效果替换文本
    /*$('#message1').css({
        'text-align':'center',
        'font-weight':'bold'
    }).hide().click(function(){
        $(this).slideUp('slow');
        $('#message2').slideDown('slow')
    });
    $('#message2').css({
        'color':'#10F6BC',
        'text-align':'center',
        'font-weight':'bold',
        'background-color':'#7C7C7C'
    }).click(function(){
        $(this).slideUp('slow');
        $('#message1').slideDown('slow');
    });*/

    //使图像滚动
   /* $('img').click(function(){
        $(this).animate({
            left:600,
            //使图像变大
            width:$(this).width()*1.5,
            height:$(this).height()*1.5
        },'slow',function(){
            $(this).fadeTo('slow',0);
            $(this).fadeTo('slow',1);
            $(this).animate({
                left:0,
            },'slow')
        });
        //隐藏 也可以用hide()
        //$(this).slideUp('slow');
        //淡出fadeTo() 接收参数:speed opacity callback()
        //$(this).fadeTo('slow',0);
    });*/

    //确定被按下的键 keypress()特殊键位不会触发  不支持中文输入法
    //keydown() keyup()所有键位都会触发  
   /* $('.name').keydown(function(event){
        alert(event.keyCode);
        $('.Some').text("我输入的内容:"+String.fromCharCode(event.keyCode));
    });*/


    //防止事件冒泡 使用stopPropagation()
    /*$('#myD').click(function(){
        alert('div');
    });
    $('#myP').click(function(event){
        alert('p');
     event.stopPropagation();
    });
    $('#myS').click(function(){
        alert('span');
     event.stopPropagation();
    });*/
    //使用event对象的target属性防止冒泡
    
     /*$('#myD').click(function(event){
        var $target=$(event.target);
        if($target.is('div')){
            alert('div');
        }
        if($target.is('p')){
            alert('p');
        }
        if($target.is('span')){
            alert('span');
        }
    });*/

});