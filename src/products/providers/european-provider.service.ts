import { Injectable} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ProductDto } from '../dto/product.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class EuropeanProviderService {
  private readonly baseUrl =
    'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider';

  constructor(private readonly http: HttpService) {}

  async getAllProducts(): Promise<ProductDto[]> {
    const response = await firstValueFrom(this.http.get(this.baseUrl));
    const products = response.data;

    return products.map((item: any): ProductDto => ({
      id: `european:${item.id}`,
      name: item.name,
      description: item.description,
      imageUrl: item.gallery?.[0] || '',
      price: parseFloat(item.price),
      material: item.details?.material || 'N/A',
      hasDiscount: item.hasDiscount,
      discountValue: parseFloat(item.discountValue || '0'),
      provider: 'european',
    }))
    
  }

  async getProductById(id: string): Promise<ProductDto> {
    const url = `${this.baseUrl}/${id}`;
    const response = await firstValueFrom(this.http.get(url));
    const item = response.data;

    return {
      id: `european:${item.id}`,
      name: item.name,
      description: item.description,
      imageUrl: item.gallery?.[0] || '',
      price: parseFloat(item.price),
      material: item.details?.material || 'N/A',
      hasDiscount: item.hasDiscount,
      discountValue: parseFloat(item.discountValue || '0'),
      provider: 'european',
    };
  }
}
