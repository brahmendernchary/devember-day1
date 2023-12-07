import { useState } from "react";
import { Link, Stack, router } from "expo-router";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Animated, {
  FadeIn,
  FadeOut,
  BounceIn,
  BounceOut,
  BounceInRight,
  BounceInLeft,
  FlipInEasyX,
  BounceInUp,
} from "react-native-reanimated";

import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
const onboardingsteps = [
  {
    icon: "snowflake",
    title: "Welcome devember",
    description: "Daily react Tutorial during december",
  },
  {
    icon: "people-arrows",
    title: "Learn and Grow",
    description: "Learn by 24 Hours with practice",
  },
  {
    icon: "book-reader",
    title: "Education",
    description: "Education for children",
  },
];
export default function onboarding() {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = onboardingsteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingsteps.length - 1;

    if (isLastScreen) {
      endOnBoarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;

    if (isFirstScreen) {
      endOnBoarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };
  const endOnBoarding = () => {
    setScreenIndex(0);
    router.back();
  };
  //   const swipeForward = Gesture.Fling()
  //     .direction(Directions.LEFT)
  //     .onEnd(onContinue);

  //   const swipeBackword = Gesture.Fling()
  //     .direction(Directions.RIGHT)
  //     .onEnd(onBack);

  //   const swipes = Gesture.Simultaneous(swipeBackword, swipeForward);
  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <View style={styles.stepIndicatorContainer}>
        {onboardingsteps.map((step, index) => (
          <View
            style={[
              styles.stepIndicator,
              { backgroundColor: index === screenIndex ? "#CEF202" : "grey" },
            ]}
          />
        ))}
      </View>
      <GestureDetector gesture={swipes}>
        <View
          //   entering={BounceInRight}
          //   exiting={BounceInLeft}
          style={styles.pageContent}
          key={screenIndex}
        >
          <FontAwesome5
            style={styles.image}
            name={data.icon}
            size={70}
            color="#86d4c2"
          />
          <View style={styles.footer}>
            <Animated.Text entering={FlipInEasyX} style={styles.title}>
              {data.title}
            </Animated.Text>
            <Text style={styles.description}>{data.description} </Text>
            <View style={styles.buttonsRow}>
              <Animated.View entering={BounceInLeft.duration(1500)}>
                <Text onPress={endOnBoarding} style={styles.buttonText}>
                  Skip
                </Text>
              </Animated.View>
              <Animated.View
                entering={BounceInRight.duration(1500)}
                style={styles.button}
              >
                <Pressable onPress={onContinue}>
                  <Text style={styles.buttonText}>Continue</Text>
                </Pressable>
              </Animated.View>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    // alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#2b2a2e",
    // padding: 20,
    // marginTop: 10,
    paddingTop: 30,
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  image: {
    alignSelf: "center",
    margin: 20,
  },
  title: {
    color: "#f6f2f2",
    fontSize: 28,
    fontFamily: "InterSemi",
    letterSpacing: 1.3,
    marginVertical: 20,
  },
  description: {
    color: "gray",
    fontSize: 18,
    fontFamily: "InterRegular",
    lineHeight: 38,
  },
  footer: {
    marginTop: "auto",
  },

  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#7467a8",
    // padding: 15,
    borderRadius: 20,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "white",
    fontFamily: "InterSemi",
    fontSize: 16,
    padding: 15,
    paddingHorizontal: 25,
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    gap: 5,
    marginHorizontal: 15,
  },
  stepIndicator: {
    // width: 100,
    flex: 1,
    height: 3,
    backgroundColor: "#965555",
    margin: 5,
    borderRadius: 10,
  },
});
