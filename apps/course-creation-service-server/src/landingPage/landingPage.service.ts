import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LandingPageServiceBase } from "./base/landingPage.service.base";

@Injectable()
export class LandingPageService extends LandingPageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
