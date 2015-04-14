<?php
// define variables and set to empty values



$key=md5('why so serious?');

$name = $email = $rollnumber = $password = "";

function test_input($data) {
  $data = trim($data);   // trims data of any extra space,newline
  $data = stripslashes($data);  // removes slashes from the input
  $data = htmlspecialchars($data); // does not allow html tags as input
  return $data;
}
//encrypt
function encrypt($string,$key){
	$string=rtrim(base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256,$key,$string,MCRYPT_MODE_ECB)));
	return $string;
}
//decrypt
function decrypt($string,$key){
   $string=rtrim(mcrypt_decrypt(MCRYPT_RIJNDAEL_256, $key, base64_decode($string), MCRYPT_MODE_ECB) );
return $string;
}



if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $rollnumber = test_input($_POST["rollnumber"]);
  $password = test_input($_POST["password"]);

//connection to database
$servername = "localhost";
$username = "root";
$Password = "";
$dbname = "forms";

//hashing password



// $password=md5($password);


// Create connection
$conn = new mysqli($servername, $username, $Password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO users (name,rollnumber,email,password)
VALUES ('$name','$rollnumber','$email','".encrypt($password,$key)."')";

if ($conn->query($sql) === TRUE) {
    echo "user succesfully created";
} else {

    echo "Error: please try again!!  ";
}


/* $sqli="SELECT name,rollnumber,email,password FROM users";

if ($result=mysqli_query($conn,$sqli))
  {
  // Fetch one and one row
  while ($row=mysqli_fetch_row($result))
    {
    printf ("%s\n",decrypt($row[3],$key));
    }
  // Free result set
  mysqli_free_result($result);
  */










$conn->close();
}


?>