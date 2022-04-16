import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mediumclone',
  password: '123456',
  database: 'mediumclone',
  entities: [`${__dirname}/**/**/*.entity{.ts,.js}`],
  synchronize: true,
};

export default config;
