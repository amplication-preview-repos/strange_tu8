import { Course } from "../course/Course";

export type LandingPage = {
  courses?: Array<Course>;
  createdAt: Date;
  createdBy: string | null;
  id: string;
  updatedAt: Date;
  url: string | null;
};
