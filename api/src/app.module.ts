import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PixelArtController } from './pixel-art/pixel-art.controller';

@Module({
  imports: [],
  controllers: [AppController, PixelArtController],
  providers: [AppService],
})
export class AppModule {}
