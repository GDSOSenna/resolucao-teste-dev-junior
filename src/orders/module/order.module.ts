import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { OrderService } from "../service/order.service";
import { OrderController } from "../controller/order.controller";

@Module({
    imports: [HttpModule],
    controllers: [OrderController],
    providers: [OrderService]
})

export class OrderModule {}