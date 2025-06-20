import { Module } from '@nestjs/common';
import { PruductModule } from './products/module/product.module';
import { OrderModule } from './orders/module/order.module';
import { PrismaModule } from './prisma/module/prisma.module';

@Module({
  imports: [PruductModule, OrderModule, PrismaModule]
})
export class AppModule {}
