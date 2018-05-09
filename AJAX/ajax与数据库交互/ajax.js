$(document).ready(function(){
	$('.listbox').hide();
	$('.userid').keyup(function(){
		var uid=$(this).val();
		var data='userid='+uid;
		$.ajax({
			type:"POST",
			url:"mysql.php",
			data:data,
			success:function(html){
				if(html!=""){
					$('.listbox').show();
				}else{
					$('.listbox').hide();
				}
				$('.nameslist').html(html);

				$('li').hover(function(){
					$(this).addClass('hover');
				},function(){
					$(this).removeClass('hover');
				});

				$('li').click(function(){
					$('.userid').val($(this).text());
					$('.listbox').hide();
				});
			}
		});
		return false;
	});
});