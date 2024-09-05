import AnnouncementView from "./AnnouncementView";
import { useQuery } from "@tanstack/react-query";
import { fetchAnnouncements } from "../services/api";
import { useEffect, useState } from "react";
import type { Announcement } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  appearDelay,
  dismissDelay,
  dismissDuration,
  localStorageKey,
  queryKey,
} from "../utils/constants";
import { Linking } from "react-native";

interface Props {
  host: string;
  appPath: string;
  titleFontFamily?: string;
  bodyFontFamily?: string;
}

export default function AnnouncementWrapper({
  host,
  appPath,
  titleFontFamily,
  bodyFontFamily,
}: Props) {
  // MARK: States
  const announcementsQuery = useQuery<Announcement[]>({
    queryKey: [queryKey],
    queryFn: async () => fetchAnnouncements(host, appPath),
  });
  const [announcement, setAnnouncement] = useState<Announcement | undefined>(
    undefined
  );

  // MARK: Constants
  const dismissAnnouncement = () => setAnnouncement(undefined);
  const storeAnnouncementID = async (value: string) => {
    try {
      const oldValue = await AsyncStorage.getItem(localStorageKey);
      if (oldValue) {
        // Value previously stored
        const arr: string[] = JSON.parse(oldValue);
        arr.push(value);
        await AsyncStorage.setItem(localStorageKey, JSON.stringify(arr));
      } else {
        await AsyncStorage.setItem(localStorageKey, `["${value}"]`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // MARK: useEffects
  useEffect(() => {
    if (announcementsQuery.data) {
      const announcements = announcementsQuery.data;

      // Check in local storage
      AsyncStorage.getItem(localStorageKey).then((value) => {
        const storedIDs: string[] = JSON.parse(value ?? "[]");
        let isAnnouncementDisplayed: boolean = false;
        for (const ann of announcements) {
          if (!isAnnouncementDisplayed && !storedIDs.includes(ann.id)) {
            // Only display unseen announcements
            setTimeout(() => setAnnouncement(ann), appearDelay);
            // Store in local storage
            storeAnnouncementID(ann.id);
            // Only loop once
            isAnnouncementDisplayed = true;
          }
        }
      });
    }
  }, [announcementsQuery.data]);
  useEffect(() => {
    // Dismiss announcement
    if (announcement) {
      setTimeout(dismissAnnouncement, dismissDelay + dismissDuration);
    }
  }, [announcement]);

  // MARK: Render
  return (
    announcement && (
      <AnnouncementView
        body={announcement.body}
        imageUrl={announcement.imageUrl}
        title={announcement.title}
        closeAction={dismissAnnouncement}
        linkAction={() => {
          Linking.openURL(announcement.link);
          dismissAnnouncement();
        }}
        titleFontFamily={titleFontFamily}
        bodyFontFamily={bodyFontFamily}
      />
    )
  );
}
