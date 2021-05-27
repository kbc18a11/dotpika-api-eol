import { Test, TestingModule } from '@nestjs/testing';
import { PixelArtController } from './pixel-art.controller';

describe('PixelArtController', () => {
  let controller: PixelArtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PixelArtController],
    }).compile();

    controller = module.get<PixelArtController>(PixelArtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
