/** The key where announcement IDs are stored via local storage. */
export const localStorageKey = "announcementsLocalStorageKey";

/** The query key for the API call.  */
export const queryKey = "announcementsQueryKey";

/** The time before an announcement will display, in ms. */
export const appearDelay = 4 * 1000;

/** The time an announcement will display for before dismissing, in ms. */
export const dismissDelay = 8 * 1000;

/** The duration in which the animation will last when the announcement appears, in ms. */
export const appearDuration = 0.4 * 1000;

/** The duration in which the animation will last when the announcement dismisses, in ms. */
export const dismissDuration = 0.2 * 1000;
