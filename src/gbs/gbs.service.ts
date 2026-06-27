import { Injectable } from "@nestjs/common";

@Injectable()
export class GbsService {
    async createGbs(): Promise<string> {
        return "GbsService createGbs() called";
    }
}