import ShortenURLs from '../models/ShortenURLs';

interface CreateShortenURLDTO {
  urlOrigin: string;
  keyShortenURL: string
}

class ShortenURLsRepository {
  private shortenURLs: ShortenURLs[];

  constructor() {
    this.shortenURLs = [];
  }

  public create({ urlOrigin, keyShortenURL }: CreateShortenURLDTO): ShortenURLs {
    const aShortenUrl = new ShortenURLs({ urlOrigin, keyShortenURL });
    this.shortenURLs.push(aShortenUrl);

    console.table(this.shortenURLs);

    return aShortenUrl;
  }

  public findKeyShortenURL(key: string): ShortenURLs | null {
    const findUrl = this.shortenURLs.find(url => url.keyShortenURL === key);
    return findUrl || null;
  }
}

export default ShortenURLsRepository;
