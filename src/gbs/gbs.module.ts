import { Module } from "@nestjs/common";
import { GbsController } from "./gbs.controller";
import { GbsService } from "./gbs.service";

@Module({
    imports: [],
    controllers: [GbsController],
    providers: [GbsService],
    exports:[]
})
export class GbsModule { }