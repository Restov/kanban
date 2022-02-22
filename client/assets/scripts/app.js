import { createColumn } from "./columns.js";
import { refreshKanban } from "./refresh_kanban.js";

$(document).ready(refreshKanban);
$('.add__columns').on('click', createColumn);
