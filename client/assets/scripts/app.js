import { createColumn } from "./columns.js";
import { createjsPanel } from "./new_card.js";
import { initDraggable } from "./dragNdrop.js"

$('.add__card').on('click', createjsPanel);
$('.add__columns').on('click', createColumn);
initDraggable();
