import { __prod__ } from './constants';
import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\d.[tj]s$/,
  },
  entities: [Post],
  clientUrl: 'http://localhost:5432',
  user: 'postgres',
  password: 'jeonghun0!',
  dbName: 'fullstack',
  type: 'postgresql',
  debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];