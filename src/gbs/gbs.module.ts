import { Module } from "@nestjs/common";
import { GbsController } from "./gbs.controller";
import { GbsService } from "./gbs.service";

@Module({
    controllers: [GbsController],
    providers: [GbsService],
})
export class GbsModule { }