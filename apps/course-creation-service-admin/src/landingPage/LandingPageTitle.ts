import { LandingPage as TLandingPage } from "../api/landingPage/LandingPage";

export const LANDINGPAGE_TITLE_FIELD = "createdBy";

export const LandingPageTitle = (record: TLandingPage): string => {
  return record.createdBy?.toString() || String(record.id);
};
