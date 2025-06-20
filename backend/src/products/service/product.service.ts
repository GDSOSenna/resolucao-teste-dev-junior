import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dto/product.dto';
import { NotFoundException } from '@nestjs/common';
import { BrazilianProviderService } from '../providers/brazilian-provider.service';
import { EuropeanProviderService } from '../providers/european-provider.service';

@Injectable()
export class ProductService {
  constructor(
    private readonly brazilianService: BrazilianProviderService,
    private readonly europeanService: EuropeanProviderService,
  ) {}

  async getAllProducts(): Promise<ProductDto[]> {
    const [brazilian, european] = await Promise.all([
      this.brazilianService.getAllProducts(),
      this.europeanService.getAllProducts(),
    ]);

    return [...brazilian, ...european];
  }

  async getBrazilianProducts(): Promise<ProductDto[]> {
    return this.brazilianService.getAllProducts();
  }

  async getEuropeanProducts(): Promise<ProductDto[]> {
    return this.europeanService.getAllProducts();
  }

  async getProductByProviderAndId(
    provider: 'brazilian' | 'european',
    id: string,
  ): Promise<ProductDto> {
    if (provider === 'brazilian') {
      return this.brazilianService.getProductById(id);
    }

    if (provider === 'european') {
      return this.europeanService.getProductById(id);
    }

    throw new NotFoundException('Provedor inválido');
  }
}
