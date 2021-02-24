import { Router } from 'express';

import CreateShortenURLService from '../services/CreateShortenURLService';
import GetURLService from '../services/GetURLService';

const shortenURLsRouter = Router();

shortenURLsRouter.post('/encurtador', async (request, response) => {
  try {
    const { url: urlOrigin } = request.body;
    const createShortenUrl = new CreateShortenURLService();
    const newShortenURL = await createShortenUrl.execute({ urlOrigin });
    return response.json({ shorten_url: newShortenURL });
  } catch (error) {
    return response.status(400).json({ Error: error.message });
  }
});

shortenURLsRouter.post('/pegar_url_original', async (request, response) => {
  try {
    const { url: shortUrl } = request.body;
    const getOriginURL = new GetURLService();
    const originUrl = await getOriginURL.execute({ key: shortUrl });
    return response.json({ origin_url: originUrl.urlOrigin });
  } catch (error) {
    return response.status(404).json({ Error: error.message });
  }
});

export default shortenURLsRouter;
