import { CourseCreateNestedManyWithoutLandingPagesInput } from "./CourseCreateNestedManyWithoutLandingPagesInput";

export type LandingPageCreateInput = {
  courses?: CourseCreateNestedManyWithoutLandingPagesInput;
  createdBy?: string | null;
  url?: string | null;
};
