<?php

include "db.php";

$ourData = file_get_contents("../client/assets/data.json");

$object = json_decode($ourData);

$hostname = $object->hostname;
$root = $object->root;
$password = $object->password;
$db_name = $object->db_name;
$conn = mysqli_connect($hostname, $root, $password, $db_name);
if (!$conn) {
    die("Ошибка: " . mysqli_connect_error());
}

var_dump($_POST);
$id_ev = $_POST["idEvent"];
$sql = "SELECT * FROM events WHERE id = '$id_ev'";
$result = mysqli_query($conn,$sql);
$db_field = mysqli_fetch_assoc($result);
var_dump($db_field);
$lastpolid = $db_field["id_pole"];
$lastpolpos= $db_field["num_pos"];


$newcol = $_POST["idColumn"];

$positions = $_POST["positions"];
$positions = explode(" ",$positions);
$newpos = array();
foreach($positions as $pos){
    $pos = substr($pos, 2);
    array_push($newpos,$pos); 
}

var_dump($newpos);
for($i = 0; $i < count($newpos); ++$i)
{
    $temp = $newpos[$i];
    createQuery($conn,"UPDATE events SET num_pos = '$i' WHERE (id_pole = '$newcol' AND id = '$temp')");
}
