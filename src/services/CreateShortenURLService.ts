import { Chance } from 'chance';

import ShortenURLs from '../models/ShortenURLs';
import ShortenURLsRepository from '../repositories/ShortenURLsRepository';


interface RequestDTO {
  urlOrigin: string;
}

class CreateShortenURLService {
  private shortenURLsRepository: ShortenURLsRepository;

  constructor(shortenURLsRepository: ShortenURLsRepository) {
    this.shortenURLsRepository = shortenURLsRepository;
  }

  public execute({ urlOrigin }: RequestDTO): ShortenURLs {
    const aKeyShortenUrl = this.getKey();
    const keyShortenUrlExists = this.shortenURLsRepository.findKeyShortenURL(aKeyShortenUrl);

    if (keyShortenUrlExists) {
      this.execute({ urlOrigin });
    }

    const shortenURL = this.shortenURLsRepository.create({
      urlOrigin,
      keyShortenURL: aKeyShortenUrl
    });

    return shortenURL;
  }

  private getKey(): string {
    const chance = new Chance();
    const lengthUrlKey = chance.integer({ min: 5, max: 10 });
    return chance.string({ length: lengthUrlKey, alpha: true, numeric: true });
  }
}

export default CreateShortenURLService;
