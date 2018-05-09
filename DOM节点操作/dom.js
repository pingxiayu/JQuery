$(document).ready(function(){
	//$('p').addClass('highlight');
	

	//$(":contains(text)"); 选取包含指定字符串的元素
	//$("span:contains(影子)").addClass('highlight');
	
	//自定义选择器odd和even
	//$('div:even').addClass('highlight');
	//$('div:odd').addClass('highlight');
	
	//自定义选择器$(":eq(int)");
	//$('div:eq(1)').addClass('highlight');

	//each()方法用于循环访问包装集合中的每个元素
	//children() 搜索指定元素的直接子节点，并返回一个新的jQuery对象
	//text() 用于访问指定元素的文本内容
	/*var nodes=$("#root").children();
	alert("Number of nodes is"+nodes.length);
	var txt="";
	nodes.each(function(){
		txt+=$.trim($(this).text());
	});
	alert(txt);*/

	//parent()用于搜索指定元素的直接父节点
	//alert($('span').parent().text());
	
	//html() 从指定元素中的第一个元素获取html内容 包含html标签
	//alert($('p:eq(1)').html());
	
	//使用text()和html()设置文本内容
	/*$('h2').text('烟火里的尘埃');

	$('h2').html('<i>烟火里的尘埃</i>');*/


	//创建节点 prepend() prependTo() clone()
	//append() appendTo() before() insertbefore()
	//after() insertAfter()
	//$('h2').prepend('<h1>平夏雨</h1>');
	$("<h1>平夏雨</h1>").prependTo('h2');//<h1>和<h2>看做一个整体?
	$("h2").clone().prependTo("#root");
	
});

