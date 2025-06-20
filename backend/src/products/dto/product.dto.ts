import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class ProductDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  imageUrl: string;

  @IsNumber()
  price: number;

  @IsString()
  material: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  department?: string;

  @IsOptional()
  @IsBoolean()
  hasDiscount?: boolean;

  @IsOptional()
  @IsNumber()
  discountValue?: number;

  @IsString()
  provider: 'brazilian' | 'european';
}
