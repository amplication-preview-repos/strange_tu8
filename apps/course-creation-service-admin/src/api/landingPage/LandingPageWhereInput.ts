import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LandingPageWhereInput = {
  courses?: CourseListRelationFilter;
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  url?: StringNullableFilter;
};
