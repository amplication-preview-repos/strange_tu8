import { LandingPage } from "../landingPage/LandingPage";
import { Media } from "../media/Media";

export type Course = {
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  id: string;
  landingPage?: LandingPage | null;
  mediaItems?: Array<Media>;
  name: string | null;
  updatedAt: Date;
};
