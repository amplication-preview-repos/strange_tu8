import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LandingPageService } from "./landingPage.service";
import { LandingPageControllerBase } from "./base/landingPage.controller.base";

@swagger.ApiTags("landingPages")
@common.Controller("landingPages")
export class LandingPageController extends LandingPageControllerBase {
  constructor(protected readonly service: LandingPageService) {
    super(service);
  }
}
