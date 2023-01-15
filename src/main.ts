import { NestFactory } from '@nestjs/core';
import { initModels } from 'models';
import db from 'models/db';
import { AppModule } from './app.module';

async function bootstrap() {
  initModels(db.sequelize)
  await db.sequelize.sync()
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
