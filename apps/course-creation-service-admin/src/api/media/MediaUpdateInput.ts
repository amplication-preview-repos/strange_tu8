import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type MediaUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  typeField?: "Option1" | null;
  url?: string | null;
};
