import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LandingPageWhereUniqueInput } from "../landingPage/LandingPageWhereUniqueInput";
import { MediaListRelationFilter } from "../media/MediaListRelationFilter";

export type CourseWhereInput = {
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  landingPage?: LandingPageWhereUniqueInput;
  mediaItems?: MediaListRelationFilter;
  name?: StringNullableFilter;
};
