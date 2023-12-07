import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day2:OnBoarding" }} />
      <Text style={{ fontFamily: "AmaticBold", fontSize: 100 }}>
        DayDetailsScreen
      </Text>
      <Link href="days/day2/onboarding" asChild>
        <Button title="Go To Onboarding" />
      </Link>
    </View>
  );
};

export default DayDetailsScreen;

const styles = StyleSheet.create({});
