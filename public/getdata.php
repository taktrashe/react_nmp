<?php
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

//include 'connect.php';
$servername = "localhost";
$username = "taktrash_db_user";
$password = "Iamali@1345";
$db_name = "taktrash_build";

//$conn = mysqli_connect('localhost', 'root', '', 'students');
$conn = mysqli_connect($servername,$username,$password, $db_name);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

//$sql = "select * from studentdata";
$sql = "select * from vahed order by plak";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  //mysqli_fetch_all gives us the data in 2D array format.
  // It's second parameter decide whether its assoc array or indexed. Or maybe both
  $data = mysqli_fetch_all($result, MYSQLI_ASSOC);

  echo json_encode($data);
} else {
  echo json_encode(['msg' => 'No Data!', 'status' => false]);
}

