import { createColumn } from "./columns.js";
import { createjsPanel } from "./new_card.js";

$('.add__card').on('click', createjsPanel);
$('.add__columns').on('click', createColumn);
