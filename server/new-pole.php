<?php
include "db.php";
$ourData = file_get_contents("../client/assets/data.json");

$object = json_decode($ourData);

$hostname = $object->hostname;
$root = $object->root;
$password = $object->password;
$db_name = $object->db_name;
$conn = mysqli_connect($hostname, $root, $password, $db_name);
if (!$conn) 
    die("Ошибка: " . mysqli_connect_error());


$title = $_POST['title'];
$id = $_POST['id'];

createnNewPole($conn,$title,0);