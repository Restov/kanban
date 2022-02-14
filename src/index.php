<?php

function createQuery($conn, $sql)
{
    if (!mysqli_query($conn, $sql)) {
        echo "Ошибка: " . mysqli_error($conn) . "<br>";
    }
}

function createnNewPole($conn, $name, $pos)
{
    createQuery($conn, "INSERT poles(name_pole, pos_pole) values($name, $pos)");
}

function createnNewEvent($conn, $name, $date, $disc, $color, $poleid, $pos)
{
    createQuery($conn, "INSERT events (name,date_create,opisanie,color_sob,id_pole,num_pos) values($name,$date,$disc,$color,$poleid,$pos)");
}


$hostname = "localhost";
$root = "root";
$password = "";
$db_name = "db";

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

createQuery($conn, "CREATE TABLE IF NOT EXISTS events (id INTEGER AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30),
date_create DATE, opisanie VARCHAR(100), color_sob VARCHAR(7), id_pole INTEGER, num_pos INTEGER);");

//$date = date("Y-m-d H:i:s");

mysqli_close($conn);
