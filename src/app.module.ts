import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PruductModule } from './products/module/product.module';

@Module({
  imports: [PruductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
