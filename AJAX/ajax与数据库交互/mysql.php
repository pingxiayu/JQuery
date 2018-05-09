<?php 
	/*echo '<li>Jackub</li>';
	echo '<li>Jenny</li>';
	echo '<li>Jill</li>';
	echo '<li>John</li>';*/
	@$_mysqli=new mysqli('localhost','root','134336','school');
	if($_mysqli->connect_error){
		echo ("连接错误:".$_mysqli->connect_error);
	}
	$_sql="SELECT * FROM name";
	$_result=$_mysqli->query($_sql);
	$_row=array();
	while(!!($row=$_result->fetch_row())){
		array_push($_row,join("",$row));
	}
	if(isset($_POST['userid'])){
		$name=$_POST['userid'];
		if(strlen($name)>0){
			$hint="";
			foreach($_row as $value){
				if(strtolower($name)==strtolower(substr($value,0,strlen($name)))){
					if($hint==""){
						$hint="<li>$value</li>";
					}else{
						$hint=$hint."<li>$value</li>";
					}
				}
			}
	    if($hint==""){
				$response="no suggestion";
		}else{
				$response=$hint;
		 }
		echo $response;
	}		
}
	if($_mysqli->errno){
		echo '数据库操作错误编号:'.$_mysqli->errno.'<br>'.'数据库操作错误信息:'.$_mysqli->error;
	}
	@$_mysqli->close();
 ?>