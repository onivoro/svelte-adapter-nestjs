import { NestFactory } from '@nestjs/core';

export async function main(module) {
  const app = await NestFactory.create(module);
  app.enableShutdownHooks();
  return app;
}

