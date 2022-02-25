<?php
include "db.php";

$title = $_POST['title'];
$id = $_POST['id'];

createnNewPole($conn, $title, $id);
