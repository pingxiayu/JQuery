$(document).ready(function(){
	$('.userror').hide();
	$('.emerror').hide();
	$('#submit').click(function(){
		var selectedopts="";
		var info=$('form').serializeArray();
		//alert(info);
		$.each(info,function(index,v){
			selectedopts+=v.value+"  ";
		});
		$("#message").text('the format when input elements are serialized：'+selectedopts);
		return false;
	});
});