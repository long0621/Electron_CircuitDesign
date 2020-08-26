import express from "express";
import {routes} from "./startup/routes"

const expressServer = express();
routes(expressServer);


//設定port與連接
const port = process.env.PORT || 3000;

//expressServer.set("port", port);
expressServer.listen(port,() => console.log(`expressServer listening on port ${port}...`));

export { expressServer };