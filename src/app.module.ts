import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GbsModule } from './gbs/gbs.module';

@Module({
  imports: [GbsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
