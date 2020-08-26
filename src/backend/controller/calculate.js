import express from "express";
import {auth} from "../middleware/auth";

const calculateRouter = express.Router();
// const auth = require('../middleware/auth');


//post測試
calculateRouter.get("/home", auth ,async(req,res)=>{
  //錯誤時return程式(需要丟入中間件)
  console.log(req.body);
  console.log(123);
  //呼叫python程式執行

  //傳回結果
  res.send("3315");
});


export { calculateRouter };