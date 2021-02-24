import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shorten_urls')
class ShortenURLs {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'url_origin' })
  urlOrigin: string;

  @Column({ name: 'key_shorten_url' })
  keyShortenURL: string;

  @Column({ name: 'created_at', type: 'time with time zone' })
  createdAt: Date;
}

export default ShortenURLs;
