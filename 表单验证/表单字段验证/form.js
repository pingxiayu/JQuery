$(document).ready(function() {


    //验证用户名不能为空 且只能为数字字母下划线
    $('.userE').hide();
    $('.ageE').hide();
    $('.phoneE').hide();
    $('.birE').hide();
    $('.emailE').hide();
    $('.error').hide();
    $('option:even').addClass('meal');
    $('.submit').click(function(event) {
       /* var data = $.trim($('.user').val());
        var len = data.length;
        var f = 0;
        if (len < 1) {
            $('.userE').show();
            f = 1;
            event.preventDefault();
        }else{
            $('.userE').hide();
        }
        if (f == 0) {
            if (!validate_userid(data)) {
                $('.userE').text('User Id can contain only letters,number or underscore').show();
                event.preventDefault();
            }else{
                $('.userE').hide();
            }

            function validate_userid(uid) {
                var pattern = new RegExp(/^[\w]+$/);
                //test() 指定正则匹配字符串 返回一个布尔值
                return pattern.test(uid);
            }
        }




        //验证年龄只能为数字
         var data1=$.trim($('.age').val());
         var len1=data1.length;
         var c;
         var flag=0;
         for(var i=0;i<len1;i++){
            c=data1.charAt(i).charCodeAt(0);
            //允许为负值
            if(c==45&&i==0){
                continue;
            }
            if(c<48||c>57){
                $('.ageE').show();
                flag=1;
                event.preventDefault();
                break;
            }
         }
         //限定数值范围
         if(flag==0){
            age=parseInt(data1);
            if(age<5||age>99){
                $('.ageE').show();
                $('.ageE').text('Invalid Age.Please enter the age within the rangs 5 to 99');
                event.preventDefault();
            }
         }



         //验证电话号码
         var data2=$('.mob').val();
         if(!validate_phoneno(data2)){
            $('.phoneE').show();
            event.preventDefault();
         }
         function validate_phoneno(pnumber){
            var pattern=new RegExp(/^[0-9-+]+$/);
             return pattern.test(pnumber) ;

         }


         //验证日期
         var data3=$('.birth').val();
         if(!validate_date(data3)){
            $('.birE').show();
            event.preventDefault();
         }
         function validate_date(date){
            var pattern=new RegExp(/\b\d{1,2}[\/-]\d{1,2}[\/-]\d{4}\b/);
            return pattern.test(date);
         }*/



         //验证表单  val()用于获取表单字段的值
         /*var data3=$('.email').val();
         if(!validate_email(data3)){
            $('.emailE').show();
            event.preventDefault();
         }
         function validate_email(email){
            var pattern=new RegExp(/^[\w]+(\.[\w-]+)*@([\w-]+\.)+([a-zA-Z]{2,3}$)+/);
            return pattern.test(email);
         }*/








       //检查复选框是否被选中
       /*  var amt=0;
         var count=0;
         $('form').find(':checkbox').each(function(){
            if($(this).is(':checked')){
                count++;
                amt+=parseInt($(this).val());
            }
         });
         if(count==0){
            $('p.result').hide();
            $('.error').show();
         }else{
            $('.error').hide();
            $('p.result').text('Your bill is $ '+amt).show();
         }
         //这里阻止提交仅仅是为了显示$('p.result')里内容
         //因为不阻止的话就提交上去了,看不到效果
         event.preventDefault();*/


         //利用length()方法检查复选框
        /* var amt=0;
         var count=$(':checked').length;
         if(count==0){
            $('p.result').hide();
            $('.error').show();

        }else{
            $('form').find(':checkbox').each(function(){
                if($(this).is(':checked')){
                    amt+=parseInt($(this).val());
                }
            });
            $('.error').hide();
            $('p.result').text('Your bill is $ '+amt).show();
        }
        event.preventDefault();*/





        //检查单选按钮是否被选中
            
        
       /* var count=$(':checked').length;
        if(count==0){
            $('.result').hide();
            $('.error').show();
        }else{
            var amt=$(':checked').attr('value');
            $('.result').text('You have selected '+amt).show();
        }
        event.preventDefault();*/




        //检查下拉列表选项是否被选中
       /* if($('select option:selected').val()==0){
            $('.result1').hide();
            $('.error').show();
        }else{
            $('.error').hide();
            $('.result1').text('you have selected '+$('select option:selected').text()).show();
        }

        event.preventDefault();*/
        

    });
});