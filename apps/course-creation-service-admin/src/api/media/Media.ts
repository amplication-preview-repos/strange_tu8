import { Course } from "../course/Course";

export type Media = {
  course?: Course | null;
  createdAt: Date;
  id: string;
  typeField?: "Option1" | null;
  updatedAt: Date;
  url: string | null;
};
