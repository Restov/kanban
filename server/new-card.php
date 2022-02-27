<?php

include "db.php";

function checkPostIsSet()
{
    if (empty($_POST['name'])) return -1;
    if (empty($_POST['date'])) return -1;
    return 0;
}

$name = $_POST['name'];
$date = $_POST['date'];
$disc = $_POST['disc'];
$color = $_POST['color'];
$pole_id = 0;
$pos = 0;

$res = checkPostIsSet();
if ($res == 0) {
    $new_id = createnNewEvent($conn, $name, $date, $disc, $color, $pole_id, $pos);
    echo $new_id;
} else {
    echo "Не все поля заполнены";
}
