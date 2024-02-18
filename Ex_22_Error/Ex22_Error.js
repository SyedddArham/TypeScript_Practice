"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Instead to using an older program, Making a new array");
var Ex20_StoreArray_1 = require("../Ex_20_StoreArray/Ex20_StoreArray");
//trying to access an index that doesnot exist
//index 5 doesnot exist
var value = Ex20_StoreArray_1.cars[5];
//this line will give the error since index 6 doesnot exist
console.log(value);
//corrected version, assing the correct index
value = Ex20_StoreArray_1.cars[0];
console.log(value);
