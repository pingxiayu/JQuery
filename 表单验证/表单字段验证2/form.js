$(document).ready(function() {

	//验证两个字段
   /* $('.error').hide();
    $('.infobox').each(function() {
        $(this).blur(function() {
            var data = $(this).val();
            var len = data.length;
            if (len < 1) {
                $(this).parent().find('.error').show();
            } else {
                $(this).parent().find('.error').hide();
            }
            $(this).focus(function() {
                $(this).parent().find('.error').hide();
            });

        });
    });*/
    //添加submit
   /* $('.error').hide();
    $('.submit').click(function(event){
    	$('.infobox').each(function(){
    		var data=$(this).val();
    		var len=data.length;
    		if(len<1){
    			 $(this).parent().find('.error').show();
    			 event.preventDefault();
    		}else{
    			$(this).parent().find('.error').hide();
    		}

    		$(this).focus(function(){
    			$(this).parent().find('.error').hide();
    		});

    		$(this).blur(function(){
    			$(this).parent().find('.error').show();
    		});
    	});
    	
    });*/


    //检测两次输入密码是否一致
    $('.error').hide();
    $('.submit').click(function(event){
    	var data=$('.password').val();
    	var len=data.length;
    	if(len<1){
    		$('.password').next().show();
    		event.preventDefault();
    	}else{
    		$('.password').next().hide();
    	}
    	if($('.password').val()!=$('.confpass').val()){
    		$('.confpass').next().show();
    		event.preventDefault();
    	}else{
    		$('.confpass').next().hide();
    	}

    });

    //禁用某些字段
    $('.error').hide();
    $('.userid').blur(function(){
    	var data=$(this).val();
    	var len=data.length;
    	if(len<1){
    		$(this).next().show();
    		$('.password').attr('disabled',true);
    		$('.confpass').attr('disabled',true);
    
    	}else{
    		$(this).next().hide();
    		$('.password').removeAttr('disabled');
    		$('.confpass').removeAttr('disabled');
    	}
    });
    $('.password').blur(function(){
    	var data=$(this).val();
    	var len =data.length;
    	if(len<1){
    		$(this).next().show();
    		$('.confpass').attr('disabled',true);
    	
    	}else{
    		$(this).next().hide();
    		$('.confpass').removeAttr('disabled');
    	}
    });
    $('.confpass').blur(function(){
    	if($(this).val()!=$('.password').val()){
    		$(this).next().show();
    		
    	}else{
    		$(this).next().hide();
    	}
    });

});