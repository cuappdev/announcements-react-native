import axios from "axios";

/**
 * Fetch active announcements.
 *
 * @param host The base URL host.
 * @param appPath The path containing the app name.
 * @returns The response data.
 */
export const fetchAnnouncements = async (host: string, appPath: string) => {
  try {
    const response = await axios({
      method: "get",
      url: `/announcements/${appPath}`,
      baseURL: host,
    });
    return response.data;
  } catch (err) {
    console.error(`Error with AppDev Announcements: ${err}`);
  }
};
