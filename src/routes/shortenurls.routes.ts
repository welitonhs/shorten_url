import { Router } from 'express';

const shortenURLsRouter = Router();

shortenURLsRouter.post('/', (request, response) => {
  const { url } = request.body;

  return response.json({ url_to_shorten: url });
});

export default shortenURLsRouter;
