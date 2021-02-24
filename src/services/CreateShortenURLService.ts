import { Chance } from 'chance';
import { getCustomRepository } from 'typeorm';

import ShortenURLs from '../models/ShortenURLs';
import ShortenURLsRepository from '../repositories/ShortenURLsRepository';


interface RequestDTO {
  urlOrigin: string;
}

class CreateShortenURLService {
  public async execute({ urlOrigin }: RequestDTO): Promise<ShortenURLs> {
    const shortenURLsRepository = getCustomRepository(ShortenURLsRepository);
    const aKeyShortenUrl = this.getKey();
    const keyShortenUrlExists = await shortenURLsRepository.findKeyShortenURL(aKeyShortenUrl);
    if (keyShortenUrlExists) {
      throw new Error("Try again!");
    }
    const shortenURL = shortenURLsRepository.create({
      urlOrigin,
      keyShortenURL: aKeyShortenUrl
    });
    await shortenURLsRepository.save(shortenURL);
    return shortenURL;
  }

  private getKey(): string {
    const chance = new Chance();
    const lengthUrlKey = chance.integer({ min: 5, max: 10 });
    return chance.string({ length: lengthUrlKey, alpha: true, numeric: true });
  }
}

export default CreateShortenURLService;
