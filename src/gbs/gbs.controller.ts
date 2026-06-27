import { Controller, Post } from "@nestjs/common";
import { GbsService } from "./gbs.service";

@Controller('gbs')
export class GbsController{
    constructor(private readonly gbsService: GbsService){}

    @Post('login')
    async createLogin(){
        return await this.gbsService.createGbs();
    }
}