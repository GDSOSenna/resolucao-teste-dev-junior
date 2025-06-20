import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ProductDto } from '../dto/product.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class BrazilianProviderService {
  private readonly baseUrl =
    'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider';

  constructor(private readonly http: HttpService) {}

  async getAllProducts(): Promise<ProductDto[]> {
    const response = await firstValueFrom(this.http.get(this.baseUrl));
    const products = response.data;

    return products.map(
      (item: any): ProductDto => ({
        id: `brazilian:${item.id}`,
        name: item.nome || item.name,
        description: item.descricao,
        imageUrl: item.imagem,
        price: parseFloat(item.preco),
        material: item.material,
        category: item.categoria,
        department: item.departamento,
        provider: 'brazilian',
      }),
    );
  }

  async getProductById(id: string): Promise<ProductDto> {
    const url = `${this.baseUrl}/${id}`;
    const response = await firstValueFrom(this.http.get(url));
    const item = response.data;

    return {
      id: `brazilian:${item.id}`,
      name: item.nome || item.name,
      description: item.descricao,
      imageUrl: item.imagem,
      price: parseFloat(item.preco),
      material: item.material,
      category: item.categoria,
      department: item.departamento,
      provider: 'brazilian',
    };
  }
}
