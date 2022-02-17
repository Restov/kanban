import { createColumn } from "./columns.js";
import { createjsPanel } from "./new_card.js";
import { refreshKanban } from "./refresh_kanban.js";

$('.add__card').on('click', createjsPanel);
$('.r').on('click', refreshKanban);
$('.add__columns').on('click', createColumn);