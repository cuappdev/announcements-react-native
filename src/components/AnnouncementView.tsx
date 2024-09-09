import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CloseIcon from "../icons/CloseIcon";
import { useEffect, useRef } from "react";
import {
  appearDuration,
  dismissDelay,
  dismissDuration,
} from "../utils/constants";

interface Props {
  body: string;
  imageUrl: string;
  title: string;
  closeAction: () => void;
  linkAction: () => void;
  titleFontFamily?: string;
  bodyFontFamily?: string;
}

export default function AnnouncementView({
  body,
  imageUrl,
  title,
  closeAction,
  linkAction,
  titleFontFamily,
  bodyFontFamily,
}: Props) {
  // MARK: - States
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  // MARK: - Constants
  const animatedStyles = {
    opacity: fadeAnim,
    transform: [
      {
        translateY: slideAnim,
      },
    ],
  };
  const dismissAction = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: dismissDuration,
      useNativeDriver: true,
    }).start();
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: dismissDuration,
      useNativeDriver: true,
    }).start();
  };

  // MARK: - useEffects
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: appearDuration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 64,
      duration: appearDuration,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);
  useEffect(() => {
    // Dismiss announcement on timer
    setTimeout(dismissAction, dismissDelay);
  });

  // MARK: - Render
  return (
    <Animated.View style={{ ...styles.container, ...animatedStyles }}>
      <Pressable
        style={styles.subContainer}
        onPress={() => {
          linkAction();
          dismissAction();
        }}
      >
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.textContainer}>
          <Text style={{ ...styles.title, fontFamily: titleFontFamily }}>
            {title}
          </Text>
          <Text style={{ ...styles.body, fontFamily: bodyFontFamily }}>
            {body}
          </Text>
        </View>
      </Pressable>
      <TouchableOpacity
        style={styles.closeIcon}
        onPress={() => {
          setTimeout(closeAction, dismissDuration);
          dismissAction();
        }}
      >
        <CloseIcon />
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  body: {
    fontSize: 12,
    color: "#444D56",
  },
  closeIcon: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  container: {
    width: Dimensions.get("window").width - 32,
    position: "absolute",
    left: 16,
    top: 0,
    zIndex: 100,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    shadowOpacity: 0.15,
    shadowColor: "#24292E",
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    padding: 16,
    borderRadius: 4,
    borderColor: "#E5E6EA",
    borderWidth: 1,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 4,
  },
  subContainer: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 4,
  },
  title: {
    fontSize: 16,
    color: "#24292E",
    fontWeight: "600",
  },
});
