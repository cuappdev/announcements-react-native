# react-native-appdev-announcements

A React Native library for AppDev Announcements.

## Installation

**Yarn:**

```sh
yarn add react-native-appdev-announcements
```

**NPM:**

```sh
npm install react-native-appdev-announcements
```

## Usage

### Getting Started

Simply add the component as a view to the entry point of your application. Provide the host URL of the backend API as well as the path of the request containing the app slug.

```ts
import { AppDevAnnouncements } from "react-native-appdev-announcements";

// ...

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
```

Optionally, you can pass in `titleFontFamily` and `bodyFontFamily` to be used for the title and body text, respectively.

```ts
import { AppDevAnnouncements } from "react-native-appdev-announcements";

// ...

export default function App() {
  return (
    <View style={styles.container}>
      <AppDevAnnouncements
        host="https://example-url.com"
        appPath="example-slug"
        titleFontFamily="example-font-family"
        bodyFontFamily="example-font-family"
      />
    </View>
  );
}
```

### Resetting Local Storage

This library uses AsyncStorage to store announcement IDs that the user has already seen. In the case that these values need to be cleared, simply call the asynchronous function `resetAnnouncements`.

```ts
import { resetAnnouncements } from "react-native-appdev-announcements";

// ...

await resetAnnouncements();
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

_This library was originally created and currently maintained by Vin Bui at Cornell University in Fall 2024._
