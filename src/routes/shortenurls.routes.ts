import { Router } from 'express';

import ShortenURLsRepository from '../repositories/ShortenURLsRepository';
import CreateShortenURLService from '../services/CreateShortenURLService';

const shortenURLsRouter = Router();
const shortenURLsRepository = new ShortenURLsRepository();

shortenURLsRouter.post('/', (request, response) => {
  try {
    const { url: urlOrigin } = request.body;
    const createShortenUrl = new CreateShortenURLService(shortenURLsRepository);
    const newShortenURL = createShortenUrl.execute({ urlOrigin });
    return response.json({ shorten_url: newShortenURL });
  } catch (error) {
    return response.status(400).json({ Error: error.message });
  }
});

export default shortenURLsRouter;
