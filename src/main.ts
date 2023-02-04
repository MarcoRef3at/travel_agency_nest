import { NestFactory } from '@nestjs/core';
import { initModels } from 'models';
import db from 'models/db';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

(async function () {
  initModels(db.sequelize)
  await db.sequelize.sync()
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({ validationError: { target: false } }));
  await app.listen(4000);
})()
