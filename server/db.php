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
    createQuery($conn, "INSERT events (name,date_create,opisanie,color_sob,id_pole,num_pos) values('$name','$date','$disc','$color','$poleid','$pos')");
}
