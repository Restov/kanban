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

$SQL = "SELECT * FROM poles";
$result = mysqli_query($conn, $SQL);
while ($db_field = mysqli_fetch_assoc($result)) {
    $id = $db_field["id_pole"];
    $SQL = "SELECT * FROM events WHERE id_pole = '$id'";
    $resultid = mysqli_query($conn, $SQL);
    $db_field["cards"] = array();
    while ($card = mysqli_fetch_assoc($resultid)) {
        array_push($db_field["cards"], $card);
    }
    $newArr[] = $db_field;
}
echo json_encode($newArr, JSON_UNESCAPED_UNICODE);
