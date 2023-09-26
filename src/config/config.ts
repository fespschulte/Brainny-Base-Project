import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot();

export const PORT_API: number = +process.env.PORT_API || 3000;
export const DATABASE_USERNAME: string =
  process.env.DATABASE_USERNAME || 'postgres';
export const DATABASE_PASSWORD: string =
  process.env.DATABASE_PASSWORD || 'test';
export const DATABASE_NAME: string = process.env.DATABASE_DATABASE || 'test';
export const DATABASE_HOST: string = process.env.DATABASE_HOST || 'localhost';
export const DATABASE_PORT: number = +process.env.DATABASE_PORT || 5432;
export const DATABASE_SYNC: boolean =
  process.env.DATABASE_SYNCHRONIZE == 'true';
