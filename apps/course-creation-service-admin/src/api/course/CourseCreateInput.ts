import { LandingPageWhereUniqueInput } from "../landingPage/LandingPageWhereUniqueInput";
import { MediaCreateNestedManyWithoutCoursesInput } from "./MediaCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  createdBy?: string | null;
  description?: string | null;
  landingPage?: LandingPageWhereUniqueInput | null;
  mediaItems?: MediaCreateNestedManyWithoutCoursesInput;
  name?: string | null;
};
