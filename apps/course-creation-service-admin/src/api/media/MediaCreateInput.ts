import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type MediaCreateInput = {
  course?: CourseWhereUniqueInput | null;
  typeField?: "Option1" | null;
  url?: string | null;
};
