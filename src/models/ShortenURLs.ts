import { v4 as uuid_v4 } from 'uuid';
import { format } from 'date-fns';

class ShortenURLs {
  id: string;

  urlOrigin: string;

  keyShortenURL: string;

  createdAt: string;

  constructor({ urlOrigin, keyShortenURL }: Omit<ShortenURLs, 'id' | 'createdAt'>) {
    this.id = uuid_v4();
    this.urlOrigin = urlOrigin;
    this.keyShortenURL = keyShortenURL;
    this.createdAt = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  }
}

export default ShortenURLs;
