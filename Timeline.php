<?php

include 'connection.php';

 $a1 =  "SELECT * FROM shareimageandtext";
            $result = mysqli_query($con, $a1);
            if ($result->num_rows >0) {
 
 
			 while($row[] = $result->fetch_assoc()) {
			 
			 $item = $row;
			 
			 $json = json_encode($item);
			 
			 }
			 
			} else {
			$fail = json_encode("No Results Found.");
			 echo $fail;
			}
			 echo $json;
			$conn->close();

?>