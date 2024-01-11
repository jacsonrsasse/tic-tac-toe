import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const routeParamsMiddleware =
  (schema: AnyZodObject) =>
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: request.body,
        query: request.query,
        params: request.params,
      });

      return next();
    } catch (error) {
      return response.status(400).json(error);
    }
  };

export default routeParamsMiddleware;
