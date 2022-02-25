<?php

include "db.php";


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
