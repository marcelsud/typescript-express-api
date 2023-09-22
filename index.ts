import { http } from "@ampt/sdk";
import { bootstrap } from "fastify-decorators";
import { resolve } from "path";
import * as fastify from "fastify";

const app = fastify();

app.register(bootstrap, {
  directory: resolve(__dirname, `controllers`),
  mask: /\.controller\./,
});

http.node.use(app);
