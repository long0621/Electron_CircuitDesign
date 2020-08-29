import express from "express";
import {routes} from "./startup/routes";
import cors from "cors"

const expressServer = express();
expressServer.use(cors());//引用cors解決跨域問題
routes(expressServer);//將各項服務的總模組加入




//設定port與連接
const port = process.env.PORT || 3000;

//expressServer.set("port", port);
expressServer.listen(port,() => console.log(`expressServer listening on port ${port}...`));

export { expressServer };