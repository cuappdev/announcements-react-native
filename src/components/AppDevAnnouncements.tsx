import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AnnouncementWrapper from "./AnnouncementWrapper";

interface Props {
  host: string;
  appPath: string;
  titleFontFamily?: string;
  bodyFontFamily?: string;
}

/**
 * Integrate AppDev Announcements to the application.
 *
 * @param host The host URL of the backend API.
 * @param appPath The path of the request containing the app slug.
 * @param titleFontFamily Optional. The font family to use for the title text.
 * @param bodyFontFamily Optional. The font family to ues for the body text.
 */
export default function AppDevAnnouncements({
  host,
  appPath,
  titleFontFamily,
  bodyFontFamily,
}: Props) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AnnouncementWrapper
        host={host}
        appPath={appPath}
        titleFontFamily={titleFontFamily}
        bodyFontFamily={bodyFontFamily}
      />
    </QueryClientProvider>
  );
}
