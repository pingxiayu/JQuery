$(document).ready(function() {
    $('.web').hide();
    $('.prog').hide();
    $('.rdbms').hide();
    $('#ou').hide();
    $('#ai').hide();

    //设置快捷键
   /* $(document).keypress(function(event) {
       if(String.fromCharCode(event.keyCode)=="w"||String.fromCharCode(event.keyCode)=="W"){
       	$('#webd').hover();
       }else if(String.fromCharCode(event.keyCode)=="p"||String.fromCharCode(event.keyCode)=="P"){
       	$('#pgmng').hover();
       }else if(String.fromCharCode(event.keyCode)=='r'||String.fromCharCode(event.keyCode)=="R"){
       	$('#datab').hover();
       }
    });*/


    //创建上下文菜单
    $('#webd').hover(function(event) {
        $('.web').show();
        $('.prog').hide();
        $('.rdbms').hide();
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });

    $('#pgmng').hover(function(event) {
        $('.prog').show();
        $('.rdbms').hide();
        $('.web').hide();
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });

    $('#datab').hover(function(event) {
        $('.web').hide();
        $('.prog').hide();
        $('.rdbms').show();
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });
    $('#ou').mouseout(function(event) {
        $('.web').hide();
        $('.prog').hide();
        $('.rdbms').hide();
    });


    //创建具有独立菜单项的两个菜单
    $('li.mainmenu').hover(function(){
    	$('ul',this).show();
    },function(){
    	$('ul',this).hide();
    });
});