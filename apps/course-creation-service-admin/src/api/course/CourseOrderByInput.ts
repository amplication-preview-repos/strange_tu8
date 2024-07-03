import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  landingPageId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
