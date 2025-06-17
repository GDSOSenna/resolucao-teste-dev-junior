import { Controller, Get, Param } from "@nestjs/common"
import { ProductService } from "../service/product.service"
import { ProductDto } from "../dto/product.dto"
import { NotFoundException } from "@nestjs/common"

//aqui criamos as solicitações que serão realizadas, a lógica fica dentro de services

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async findAll(): Promise<ProductDto[]> {
        return this.productService.getAllProducts()
    }

    @Get('provider/:provider')
    async findByProvider(@Param('provider') provider: string): Promise<ProductDto[]>{
        if (provider === 'brazilian'){
            return this.productService.getBrazilianProducts()
        }

        if (provider === 'european'){
            return this.productService.getEuropeanProducts()
        }

        throw new NotFoundException('Provedor inválido. Use "brazilian" ou "european".')
    }

    @Get(':providerId')
    async findOne(@Param('providerId') providerId: string): Promise<ProductDto> {
    const [provider, id] = providerId.split(':');
    
    if (!['brazilian', 'european'].includes(provider)) {
      throw new NotFoundException('Provedor inválido. Use "brazilian" ou "european".');
    }

    return this.productService.getProductByProviderAndId(
        provider as 'brazilian' | 'european',
        id
    )
}
}