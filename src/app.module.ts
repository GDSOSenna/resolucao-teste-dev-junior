import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PruductModule } from './products/module/product.module';
import { OrderModule } from './orders/module/order.module';
import { PrismaModule } from './prisma/module/prisma.module';

@Module({
  imports: [PruductModule, OrderModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
