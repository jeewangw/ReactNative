
<?php

include 'connection.php';



move_uploaded_file($_FILES['photo']['tmp_name'], './images/' . $_FILES['photo']['name']);
$folder = $_FILES['photo']['name'];


$json = file_get_contents('php://input');

$obj = json_decode($json, true);

$email = $obj['email'];

$password = $obj['password'];

if ($email == null){
$Inserted = "Successfully Inserted";

$InsertedJson = json_encode ($Inserted);

echo $InsertedJson;

}else {
	 $q= "INSERT INTO userlogin (email, password, folder) VALUES ('".$email."','".$password."','".$folder."')";
}

if( mysqli_query($con, $q)) {

$Inserted = "Successfully Inserted";

$InsertedJson = json_encode ($q);

echo $InsertedJson;
}

?>