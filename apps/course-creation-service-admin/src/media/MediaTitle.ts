import { Media as TMedia } from "../api/media/Media";

export const MEDIA_TITLE_FIELD = "url";

export const MediaTitle = (record: TMedia): string => {
  return record.url?.toString() || String(record.id);
};
