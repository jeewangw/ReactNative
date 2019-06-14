
<?php

include 'connection.php';



move_uploaded_file($_FILES['photo']['tmp_name'], './images/' . $_FILES['photo']['name']);


$json = file_get_contents('php://input');

$obj = json_decode($json, true);

$email = $obj['email'];

$password = $obj['password'];

 $q= "INSERT INTO userlogin (email, password) VALUES ('".$email."','".$password."')";

if( mysqli_query($con, $q)) {

$Inserted = "Successfully Inserted";

$InsertedJson = json_encode ($q);

echo $InsertedJson;
}

?>