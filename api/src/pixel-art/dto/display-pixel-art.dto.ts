import Dot from '../../types/Dot';
import { IsString, IsInt, IsArray, ArrayMaxSize, ArrayMinSize, IsDefined } from 'class-validator';

export class DisplayPixelArt {
  @IsDefined()
  @IsInt()
  id: number;

  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsArray()
  @ArrayMaxSize(32)
  @ArrayMinSize(32)
  dots: [Dot];
}
