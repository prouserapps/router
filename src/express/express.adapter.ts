import type { Request, Response } from 'express';
import { HttpMethod } from '../http-method';
import { ControllerFactory } from '../facade';

export function adaptExpress(controller: ControllerFactory): (req: Request, res: Response) => Promise<void> {
  return async (req, res) => {
    const response = await controller().handle({
      url: req.url,
      method: req.method.toUpperCase() as HttpMethod,
      body: req.body,
      params: req.params,
      origin: req.hostname,
      query: req.query as Record<string, string>,
      headers: new Headers(req.headers as Record<string, string>),
      root: req,
    });

    if (response.headers) {
      for (const [key, value] of response.headers) {
        res.header(key, value);
      }
    }

    if (response.redirectUrl) {
      res.redirect(response.redirectUrl.toString());
      return;
    }

    if (response.body === null || response.body === undefined) {
      res.status(response.statusCode).end();
      return;
    }

    res.status(response.statusCode).json(response.body).end();
  };
}
