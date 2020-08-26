import express from "express";
//import {auth} from "../middleware/auth";
import {calculateRouter} from "../controller/calculate"




const routes = function(app){
  app.use(express.json());
  // app.use(express.urlencoded({ extended: false }));
  app.use('/api/calculate',calculateRouter);
}

export { routes };