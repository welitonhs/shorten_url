import { EntityRepository, Repository } from 'typeorm';

import ShortenURLs from '../models/ShortenURLs';
@EntityRepository(ShortenURLs)
class ShortenURLsRepository extends Repository<ShortenURLs> {
  public async findKeyShortenURL(key: string): Promise<ShortenURLs | null> {
    const findUrl = await this.findOne({
      where: {
        keyShortenURL: key
      }
    });
    return findUrl || null;
  }
}

export default ShortenURLsRepository;
