import { Stack } from "expo-router";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function onboarding() {
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.pageContent}>
        <FontAwesome5
          style={styles.image}
          name="left"
          size={70}
          color="#86d4c2"
        />
        <View style={styles.footer}>
          <Text style={styles.title}>Save</Text>
          <Text style={styles.description}>
            Moniter Your spending Contribution
          </Text>
          <View style={styles.buttonsRow}>
            <Text style={styles.buttonText}>Skip</Text>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </View>
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
});
