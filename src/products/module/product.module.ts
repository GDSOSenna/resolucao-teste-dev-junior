import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { ProductService } from "../service/product.service";
import { ProductsController } from "../controller/products.controller";
import { BrazilianProviderService } from "../providers/brazilian-provider.service";
import { EuropeanProviderService } from "../providers/european-provider.service";

@Module({
    imports: [HttpModule],
    controllers: [ProductsController],
    providers: [
        ProductService,
        BrazilianProviderService,
        EuropeanProviderService,
    ]
})

export class PruductModule {}