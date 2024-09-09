export interface Announcement {
  id: string;
  body: string;
  imageUrl: string;
  link: string;
  title: string;
}

export interface AnnouncementProps {
  host: string;
  appPath: string;
  titleFontFamily?: string;
  bodyFontFamily?: string;
}
