import express from "express";
import {auth} from "../middleware/auth";
import  {PythonShell}  from "python-shell"
import { app } from 'electron';

const calculateRouter = express.Router();


//post測試
calculateRouter.post("/home", auth ,async(req,res)=>{
  //1.錯誤時return程式(需要丟入中間件)
  
  //2.呼叫python程式執行
  //設定傳入參數
  let options = {
    args:[req.body.name, req.body.from]
  };
  console.log(process.resourcesPath);
  
  //根據開發環境決定讀取路徑
  let path;
  if (app.getName() == "Electron") {
    path = `${__dirname}/../../../extraResources/python/test.py`;//將額外資源整合到根目錄的extraResources
  }else{
    //正式版(process.resourcesPath 也許可用app.getAppPath()獲得)
    path = process.resourcesPath + "/extraResources/python/test.py"
  }
  //呼叫python函式後取得結果並返回
  PythonShell.run(path, options, (err, results) => {
    //呼叫錯誤時的err還沒實作
    if (err) {
      throw err;
    }
    res.send(JSON.parse(results));//傳回res結果
  });
});



export { calculateRouter };