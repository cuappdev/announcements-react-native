import AsyncStorage from "@react-native-async-storage/async-storage";
import { localStorageKey } from "./constants";

/** Remove announcement IDs from local storage. */
export const resetAnnouncements = async () =>
  await AsyncStorage.removeItem(localStorageKey);
