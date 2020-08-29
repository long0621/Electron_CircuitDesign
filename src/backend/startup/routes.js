import express from "express";
//import {auth} from "../middleware/auth";
import {calculateRouter} from "../controller/calculate"




const routes = function(app){
  app.use(express.json());
  // app.use(express.urlencoded({ extended: false }));
  //進行計算並回傳結果
  //資料庫配置
  //中間件(錯誤處理/驗證/日誌等)
  app.use('/api/calculate',calculateRouter);


}

export { routes };