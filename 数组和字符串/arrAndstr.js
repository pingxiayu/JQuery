$(document).ready(function(){
	var members=['John',"Steve","Ben","Damon","Ian"];
	//$('p').text(members.join('-'));
	//$('p').html(members.join("<br>"));
	
	/*var list=$('#list');
	$.each(members,function(index,value){
		list.append($('<li>'+value+'</li>'));
	});
	//get()方法 获取由选择器指定的 DOM 元素;不加参数获取全部
	var name=$('li').get();
	$('p').text("Following are the "+name.length+"members of Group");*/



	//map()  用于使用指定函数处理数组中的每个元素(或对象的每个属性)，并将处理结果封装为新的数组返回
	//$.map(object,callback) callback为function类型 接收(值,索引);
	/*members=$.map(members,function(value,key){
		//toUpperCase() 将字符串转换为大写
		return (key+1+"."+value.toUpperCase());
	});
	$('p').html(members.join("<br>"));*/
	/*var list=$("#list");
	$.each(members,function(index,value){
		list.append($('<li>'+value.toUpperCase()+'</li>'));
	});*/

	//grep() 对数组进行筛选
	/*members=$.grep(members,function(value){
		return value.length>4;
	});
	$('p').html(members.join('<br />'));*/
	//接收正则
	/*members=$.grep(members,function(value){
		return value.match(/^[A-D]/);
	});
	$('p').html(members.join('<br />'));*/

	//排序sort
	/*members=members.sort();
	$('p').html(members.join('<br />'));
	//对于数字数组排序 需要传入compare函数
	function compare(a,b){
		return a-b
	}*/


	//splice()  
	//删除 返回被删除的项
	/*members1=members.splice(0,2);
	$('p').html(members1.join('<br />'));*/

	//插入 没有返回值
	/*members.splice(1,0,'Tom');
	$('p').html(members.join('<br />'));*/

	//替换  没有返回值
	/*members.splice(2,1,"Jack");
	$('p').html(members.join('<br />'));*/


	//concat() 合并数组
	/*var age=[20,23,18,26,45];
	members=members.concat(age);
	$('p').html(members.join('<br />'));*/

	//join() 可以将数值数组转换为字符串 从而查找substr()子串
	/*var age=[20,23,18,26,45];
	var str=age.join('');
	var substr=str.substring(0,4);
	$('p').html(substr);*/


	//创建对象数组
	var student=[
	{
		"role":101,
		"name":'Ben',
		"email":"xxxx@163.com"
	},
	{
		"role":102,
		"name":'Aack',
		"email":"xxxx@qq.com"
	},
	{
		"role":103,
		"name":'Tom',
		"email":'xxxx.@xxx.com'
	}

	]
	//按数值排序
	/*student=student.sort(function(a,b){
			return b.role-a.role;
		});*/
	//按字母排序
	student=student.sort(function(a,b){
		if(a.name<b.name){
			return -1;
		}else if(a.name>b.name){
			return 1;
		}else{
			return 0;
		}
	});
	$.each(student,function(index,value){
		$('p').append(value.role+" "+value.name+" "+value.email+"<br />");
	});

});