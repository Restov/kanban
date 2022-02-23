<?php
include "db.php";

function getPolesCount($conn)
{
    $res = $conn->query("SELECT count(*) FROM poles");
    $row = $res->fetch_row();
    return $row[0];
}

$ourData = file_get_contents("../client/assets/data.json");

$object = json_decode($ourData);

$hostname = $object->hostname;
$root = $object->root;
$password = $object->password;
$db_name = $object->db_name;
$conn = mysqli_connect($hostname, $root, $password);
if (!$conn) {
    die("Ошибка: " . mysqli_connect_error());
}

createQuery($conn, "CREATE DATABASE IF NOT EXISTS $db_name");

$conn = mysqli_connect($hostname, $root, $password, $db_name);
if (!$conn) {
    die("Ошибка: " . mysqli_connect_error() . "<br>");
}

createQuery($conn, "CREATE TABLE IF NOT EXISTS poles (id_pole INTEGER AUTO_INCREMENT PRIMARY KEY, name_pole VARCHAR(30), pos_pole INTEGER);");


if (getPolesCount($conn) == 0)
    createnNewPole($conn, "Пустое поле", 0);

createQuery($conn, "CREATE TABLE IF NOT EXISTS events (id INTEGER AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30),
date_create DATE, opisanie VARCHAR(100), color_sob VARCHAR(7), id_pole INTEGER, num_pos INTEGER);");
mysqli_close($conn);
