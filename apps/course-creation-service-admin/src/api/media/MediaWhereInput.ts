import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MediaWhereInput = {
  course?: CourseWhereUniqueInput;
  id?: StringFilter;
  typeField?: "Option1";
  url?: StringNullableFilter;
};
