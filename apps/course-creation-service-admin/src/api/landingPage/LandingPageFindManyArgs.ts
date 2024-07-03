import { LandingPageWhereInput } from "./LandingPageWhereInput";
import { LandingPageOrderByInput } from "./LandingPageOrderByInput";

export type LandingPageFindManyArgs = {
  where?: LandingPageWhereInput;
  orderBy?: Array<LandingPageOrderByInput>;
  skip?: number;
  take?: number;
};
