import { DataSourceOptions } from 'typeorm';
import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_SYNC,
  DATABASE_USERNAME,
} from './config';

const config: DataSourceOptions = {
  type: 'postgres',
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  entities: ['**/modules/**/entities/*.js'],
  synchronize: DATABASE_SYNC,
};
export default config;
