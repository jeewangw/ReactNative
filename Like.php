
<?php

include 'connection.php';

$name= $_POST['name'];
$email= $_POST['name']; //Email is not working so
$password= $_POST['password'];
$status= $_POST['status'];
$like= $_POST['like'];
$id= $_POST['id'];



if ($email == null || $password == null || $status == null  ){

$Inserted = "All Fields are Required";

$InsertedJson = json_encode ($Inserted);

echo $InsertedJson;

}else {
	  $q= "Update shareimageandtext 
	  		SET likes = '".$like."' 
	  		WHERE name = '$name' AND password = '$password' AND id = '$id'";
}

if( mysqli_query($con, $q)) {


$Inserted = "Successfully Inserted";

$InsertedJson = json_encode ($q);

echo $InsertedJson;
} 

?>