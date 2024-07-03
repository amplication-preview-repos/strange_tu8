import { Module } from "@nestjs/common";
import { LandingPageModuleBase } from "./base/landingPage.module.base";
import { LandingPageService } from "./landingPage.service";
import { LandingPageController } from "./landingPage.controller";
import { LandingPageResolver } from "./landingPage.resolver";

@Module({
  imports: [LandingPageModuleBase],
  controllers: [LandingPageController],
  providers: [LandingPageService, LandingPageResolver],
  exports: [LandingPageService],
})
export class LandingPageModule {}
