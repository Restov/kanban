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

$name = $_POST['name'];
$date = $_POST['date'];
$disc = $_POST['disc'];
$color = $_POST['color'];
//$pole_id = $_POST['pole_id'];
$pole_id = 0;
//$pos = $_POST['pos'];
$pos = 0;
$res = checkPostIsSet();
if ($res == 0) {
   $new_id = createnNewEvent($conn, $name, $date, $disc, $color, $pole_id, $pos);
   echo $new_id;
} else {
    echo "Не все поля заполнены";
}
