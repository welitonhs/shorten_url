import { getCustomRepository, MoreThan } from 'typeorm';
import { subHours } from 'date-fns';

import ShortenURLs from '../models/ShortenURLs';
import ShortenURLsRepository from '../repositories/ShortenURLsRepository';


interface RequestDTO {
  key: string;
}

class GetURLService {
  public async execute({ key }: RequestDTO): Promise<ShortenURLs> {
    const limitHoursValidateKey = 24;
    const validateDateTime = subHours(new Date(), limitHoursValidateKey);
    const shortenURLsRepository = getCustomRepository(ShortenURLsRepository);
    const foundedShortURL = await shortenURLsRepository.findOne({
      where: {
        keyShortenURL: key,
        createdAt: MoreThan(validateDateTime)
      }
    });
    if (!foundedShortURL) {
      throw new Error("Not found URL.");
    }
    return foundedShortURL;
  }
}
export default GetURLService;
