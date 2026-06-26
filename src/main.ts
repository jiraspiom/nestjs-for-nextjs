import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3003);
}
// adicionado o "void" para evitar o erro "Promise<void> is not assignable to type 'void'." no TypeScript 6.0.3
void bootstrap();
