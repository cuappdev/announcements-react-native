import { StyleSheet, View } from "react-native";
import { AppDevAnnouncements } from "react-native-appdev-announcements";

export default function App() {
  return (
    <View style={styles.container}>
      <AppDevAnnouncements
        host="https://example-url.com"
        appPath="example-slug"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
