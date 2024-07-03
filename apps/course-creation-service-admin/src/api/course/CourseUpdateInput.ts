import { LandingPageWhereUniqueInput } from "../landingPage/LandingPageWhereUniqueInput";
import { MediaUpdateManyWithoutCoursesInput } from "./MediaUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  createdBy?: string | null;
  description?: string | null;
  landingPage?: LandingPageWhereUniqueInput | null;
  mediaItems?: MediaUpdateManyWithoutCoursesInput;
  name?: string | null;
};
