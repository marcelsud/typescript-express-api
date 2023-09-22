import { http } from "@ampt/sdk";
import { attachControllers } from "@decorators/express";
import * as express from "express";
import { Router } from "express";
import { UsersController } from "./src/demo.controller";

const app = express();

const api = Router();
attachControllers(api, [UsersController]);

app.use("/v1/api", api);

http.node.use(app);
