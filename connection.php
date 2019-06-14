<?php

//set connection variables
$host='192.168.0.7';
$username='root';
$password='gyawalij1';
$database_name= 'myawesomeproject';

//connection to server & database
$con = mysqli_connect($host, $username, $password,$database_name) ;
 
//check connection 
if (mysqli_connect_errno()):
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
endif;

?>
