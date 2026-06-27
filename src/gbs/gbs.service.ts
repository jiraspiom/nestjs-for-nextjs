import { Injectable } from "@nestjs/common";

@Injectable()
export class GbsService {
    postGbs(): string {
        return "GbsService postGbs() called";
    }
}