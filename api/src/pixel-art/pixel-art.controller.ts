import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { DisplayPixelArt } from './dto/display-pixel-art.dto';

@Controller('pixel-art')
export class PixelArtController {
  @Post()
  @HttpCode(HttpStatus.OK)
  displayPixelArt(@Body() displayPixelArt: DisplayPixelArt) {
    console.log(displayPixelArt);

    return '';
  }
}
