/// <reference path="./js/crud.d.ts" />

import { RowID, RowElement } from "./interface";
declare function require(name: string): any;
const CRUD = require("./js/crud");


const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`Insert row ${newRowID}`, row);

const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID}`, updatedRow);

CRUD.deleteRow(newRowID);
console.log(`Delete row id ${newRowID}`);

