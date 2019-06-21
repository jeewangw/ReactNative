
<?php

include 'connection.php'; // Needed to connect with database


$json = file_get_contents('php://input');	// Get input from json

$obj = json_decode($json, true);		//Decode 

$username = $obj['name'];			//Save json name to php username

$email = $obj['email'];				//Save email to $email

$password = $obj['password'];		//Save password to $password

if ($username == null || $email == null || $password == null  ){	//Make sure user enters all fields
$Inserted = "All Fields are Required";	//Saved string into php variable

$InsertedJson = json_encode ($Inserted); //converted php variable into json

echo $InsertedJson;		// response to json

}else {
	//Check if there is already an same email address registered in the database or not?
	$q1 =  "SELECT * FROM userRegistration where email = '$email'";	

	  $result = mysqli_query($con, $q1);   // Connect $q1 query to database and get result
      $number = mysqli_num_rows($result); // Check how many rows are there in result and save it in $number

      if ($number == 0) {
      //If not then insert the data into database userRegistration
	 $q= "INSERT INTO userRegistration (username, email, password) VALUES ('".$username."','".$email."','".$password."')";
      } else {
      	$Inserted = "This email is already in used!!!";

		$InsertedJson = json_encode ($Inserted);

		echo $InsertedJson;
      }


}

if( mysqli_query($con, $q)) {

$Inserted = "Registration Accepted!!!";

$InsertedJson = json_encode ($Inserted);

echo $InsertedJson;
}

?>