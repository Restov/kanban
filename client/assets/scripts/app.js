import { createColumn } from "./columns.js";
import { createjsPanel } from "./new_card.js";
import { refresh_kanban } from "./refresh_kanban.js";

$('.add__card').on('click', createjsPanel);
$('.r').on('click', refresh_kanban);
$('.add__columns').on('click', createColumn);