import { Router } from 'express';

import CreateShortenURLService from '../services/CreateShortenURLService';

const shortenURLsRouter = Router();

shortenURLsRouter.post('/', async (request, response) => {
  try {
    const { url: urlOrigin } = request.body;
    const createShortenUrl = new CreateShortenURLService();
    const newShortenURL = await createShortenUrl.execute({ urlOrigin });
    return response.json({ shorten_url: newShortenURL });
  } catch (error) {
    return response.status(400).json({ Error: error.message });
  }
});

export default shortenURLsRouter;
