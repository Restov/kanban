<?php

include "db.php";

function checkPostIsSet()
{
    if (empty($_POST['name'])) return -1;
    if (empty($_POST['date'])) return -1;
    if (empty($_POST['disc'])) return -1;
    return 0;
}
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

echo "213123";