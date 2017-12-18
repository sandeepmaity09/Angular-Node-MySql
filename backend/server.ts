
import * as express from "express";
import { Application } from "express";
import { sequelize } from "./server/db/db";
import * as nconf from "nconf";

import Server from "./server/index";

const app: Application = express();
const server: Server = new Server(app);
const port: number = nconf.get("http:port");

process.on('uncaughtException', (err) => {
	console.log(err);
});

app.listen(port, "localhost", function (err: any) {
    if (err) return err;
    console.info(`Server running on : http://localhost:${port}`);
});

