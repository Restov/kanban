<?php 

include "db.php";

$ourData = file_get_contents("../assets/data.json");

$object = json_decode($ourData);

$hostname = $object->hostname;
$root = $object->root;
$password = $object->password;
$db_name = $object->db_name;
$conn = mysqli_connect($hostname, $root, $password,$db_name);
if (!$conn) {
    die("Ошибка: " . mysqli_connect_error());
}

$name = $_POST['name'];
$date = date('Y-m-d H:i:s');
$disc = $_POST['disc'];
$color = $_POST['color'];
$pole_id = $_POST['pole_id'];
$pos = $_POST['pos'];

createnNewEvent($conn,$name,$date,$disc,$color,$pole_id,$pos);

