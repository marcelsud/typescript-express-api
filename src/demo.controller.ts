import {
  Response,
  Params,
  Controller,
  Get,
  attachControllers,
  Middleware,
} from "@decorators/express";

@Controller("/")
export class UsersController {
  @Get("/users/:id")
  getData(@Response() res, @Params("id") id: string) {
    res.send({
      message: `Hello from the public api! Your id is ${id}`,
    });
  }
}
