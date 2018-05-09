<?php 
	//$name1=$_POST['uname'];
	//$name=$_GET['uname'];
	//echo "Welcome".$name1;
	//echo "Welcome".$name;
	

	

	//验证用户名
	/*if($_POST['uname']==''){
		echo "This field connot be blank";
	}*/

	//使用正则
	if(isset($_POST['email'])){
		$email=$_POST['email'];
		if(preg_match("/^[\w-]+(\.[\w-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/",$email)){
		}else{
		echo "Invalid email address,";
		}
	}
	if(isset($_POST['uname'])){
		$name=$_POST['uname'];
		if(preg_match("/^[\w]+$/",$name)){

		}else{
		echo "Invalid User name,";
		}
	}
	if(isset($_POST['password'])){
		$pswd=$_POST['password'];
		if(preg_match("/^[^\s]+$/",$pswd)){
	
		}else{
		echo "Invalid password";
		exit;
		}
	}
	
	//执行认证
	if(($name=='pingxiayu')&&($pswd=='1314520')){
		echo "Welcome".$name;
	}else{
		echo "用户名或密码错误";
		exit;
	}

 ?>