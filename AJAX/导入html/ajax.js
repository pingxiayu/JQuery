$(document).ready(function(){
	$('.list').click(function(){
		//ajax load()方法
		//导入需要的html元素
		$('#message').load('namesinfo.htm li');
		//导入整个html页面
		$('#message').load('namesinfo.htm');
		return false;
	});
});