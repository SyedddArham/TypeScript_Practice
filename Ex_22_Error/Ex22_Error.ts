console.log("Instead to using an older program, Making a new array")
import { cars } from "../Ex_20_StoreArray/Ex20_StoreArray"

//trying to access an index that doesnot exist
//index 5 doesnot exist
let value = cars[5]
//this line will give the error since index 6 doesnot exist
console.log(value)


//corrected version, assing the correct index
value = cars[0]
console.log(value)