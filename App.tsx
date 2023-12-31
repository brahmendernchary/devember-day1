import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import DayListItem from "./src/components/core/DayListItem";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
const days = [...Array(24)].map((val, index) => index + 1);

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        data={days}
        renderItem={({ item }) => <DayListItem day={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5d4d4",
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: { gap: 10 },
});
