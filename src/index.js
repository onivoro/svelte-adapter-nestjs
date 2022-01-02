import { NestFactory } from '@nestjs/core';
import {handler} from './handler';
import nestJsModule from 'NESTJS_MODULE';

export async function main() {
  const app = await NestFactory.create(nestJsModule);
  app.enableShutdownHooks();
  app.use(handler);
  return app;
}

