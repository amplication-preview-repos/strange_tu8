import { SortOrder } from "../../util/SortOrder";

export type MediaOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
