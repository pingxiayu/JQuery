$(document).ready(function() {
    //post
    /*$('#submit').click(function(){
    	var name=$('.uname').val();
    	var data="uname="+name;
    	$.ajax({
    		type:"POST",
    		url:"ajax.php",
    		data:data,
    		success:function(html){
    			$('#message').html(html);
    		}
    	});
    	return false;
    });*/

    //get
    /*$('#submit').click(function(){
    	var name=$('.uname').val();
    	var data='uname='+name;
    	$.ajax({
    		type:"GET",
    		url:"ajax.php",
    		data:data,
    		success:function(html){
    			$('#message').html(html)
    		},
    		error:function(XMLHttpRequest,textStatus,errorThrown){
    			//状态码
    			console.log(XMLHttpRequest.status);
    			//状态
    			console.log(XMLHttpRequest.readyState);
    			//错误信息
    			console.log(textStatus);

    		}
    	});
    	return false;
    });*/

    //$.get()和$.post() 方法
    /*$('#submit').click(function() {
        var name = $('.uname').val();
        var data = 'uname=' + name;
        $.post(
            'ajax.php',
            data,
            function(html) {
                $('#message').html(html);
            }
        );
        return false;*/
    /*$.get(
            'ajax.php',
            data,
            function(html) {
                $('#message').html(html);
            }
        );
        return false;
    });*/

    //执行认证
    $('#submit').click(function() {
        var name = $('.uname').val();
        var pwd = $('.passwd').val();
        var email = $('.email').val();
        var data = 'uname=' + name + '&password=' + pwd + '&email=' + email;
        $.ajax({
            type: "POST",
            url: "ajax.php",
            data: data,
            success: function(html) {
                var arr = html.split(',');
                var pattern = new RegExp(/name/);
                var pattern1 = new RegExp(/password/);
                var pattern2 = new RegExp(/email/);
                $('.nameerror,.passerror,.emailerror').empty();
                if (arr != null) {
                    for (var i = 0; i < arr.length; i++) {
                        if (pattern.test(arr[i])) {
                            $('.nameerror').text(arr[i]);
                        }
                        if (pattern1.test(arr[i])) {
                            $('.passerror').text(arr[i]);
                        }
                        if (pattern2.test(arr[i])) {
                            $('.emailerror').text(arr[i]);
                        }
                        $('.nameerror,.passerror,.emailerror').show();

                    }
                }
            }
        });
        return false;
    });
    $('.uname,.passwd').focus(function(event) {
        $('.nameerror,.passerror,.emailerror').hide();
    });


    //验证用户名

    /* $('.nameerror').hide();
     $('.passerror').hide();
      $('#submit').click(function(){
      	var name=$('.uname').val();
      	var data='uname='+name;
      	$.ajax({
      		type:"POST",
      		url:"ajax.php",
      		data:data,
      		success:function(html){
      			$('.nameerror').show();
      			$('.nameerror').text(html);
      		}
      	});
      	return false;
      });
      //验证密码
      $('#submit').click(function(){
      	var pwd=$('.passwd').val();
      	var data="password="+pwd;
      	$.ajax({
      		type:"POST",
      		url:"ajax.php",
      		data:data,
      		success:function(html){
      			$('.passerror').show();
      			$('.passerror').text(html);
      		}
      	});
      	return false;
      });*/
});