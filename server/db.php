<?php

function createQuery($conn, $sql)
{
    if (!mysqli_query($conn, $sql)) {
        echo "Ошибка: " . mysqli_error($conn) . "<br>";
    }
}

function createnNewPole($conn, $name, $pos)
{
    createQuery($conn, "INSERT poles(name_pole, pos_pole) values('$name', '$pos')");
}

function createnNewEvent($conn, $name, $date, $disc, $color, $poleid, $pos)
{
    $SQL = "SELECT id_pole FROM poles WHERE pos_pole = 0 LIMIT 1";
    $result = mysqli_query($conn, $SQL);
    $poleid  = $result->fetch_assoc();
    $poleid = (int)$poleid["id_pole"];
    createQuery($conn, "UPDATE events SET num_pos=num_pos + 1 WHERE id_pole = $poleid");
    createQuery($conn, "INSERT events (name,date_create,opisanie,color_sob,id_pole,num_pos) values('$name','$date','$disc','$color','$poleid','$pos')");
    $SQL = "SELECT * FROM events ORDER BY ID DESC LIMIT 1";
    $result = mysqli_query($conn, $SQL);
    return $result->fetch_assoc()["id"];
}

$ourData = file_get_contents("../client/assets/data.json");

$object = json_decode($ourData);

$hostname = $object->hostname;
$root = $object->root;
$password = $object->password;
$db_name = $object->db_name;

$conn = mysqli_connect($hostname, $root, $password);
createQuery($conn, "CREATE DATABASE IF NOT EXISTS $db_name");
$conn = mysqli_connect($hostname, $root, $password,$db_name);
if (!$conn) {
    die("Ошибка: " . mysqli_connect_error());
}