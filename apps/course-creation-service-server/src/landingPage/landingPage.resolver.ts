import * as graphql from "@nestjs/graphql";
import { LandingPageResolverBase } from "./base/landingPage.resolver.base";
import { LandingPage } from "./base/LandingPage";
import { LandingPageService } from "./landingPage.service";

@graphql.Resolver(() => LandingPage)
export class LandingPageResolver extends LandingPageResolverBase {
  constructor(protected readonly service: LandingPageService) {
    super(service);
  }
}
