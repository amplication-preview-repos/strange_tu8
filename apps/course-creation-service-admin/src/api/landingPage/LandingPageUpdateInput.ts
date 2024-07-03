import { CourseUpdateManyWithoutLandingPagesInput } from "./CourseUpdateManyWithoutLandingPagesInput";

export type LandingPageUpdateInput = {
  courses?: CourseUpdateManyWithoutLandingPagesInput;
  createdBy?: string | null;
  url?: string | null;
};
