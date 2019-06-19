
<?php

include 'connection.php';

$name= $_POST['name'];
$email= $_POST['email'];
$password= $_POST['password'];
$status= $_POST['status'];
move_uploaded_file($_FILES['photo']['tmp_name'], './images/' . $_FILES['photo']['name']);
$folder ="http://jgyawali.000webhostapp.com/awesomeapp/images/" . $_FILES['photo']['name'];


if ($email == null || $password == null   ){

$Inserted = "All Fields are Required";

$InsertedJson = json_encode ($Inserted);

echo $InsertedJson;

}else {
	  $q= "INSERT INTO shareimageandtext (name, email, password, status, folder) VALUES ('".$name."','".$email."','".$password."','".$status."','".$folder."')";
}

if( mysqli_query($con, $q)) {


$Inserted = "Successfully Inserted";

$InsertedJson = json_encode ($q);

echo $InsertedJson;
} 

?>