import React from "react";
import { StyleSheet, Text, View } from "react-native";
function Greet() {
  return (
    <View style={styles.container}>
      <View style={styles.scheduleContainer}>
        <Text style={styles.scheduleText}>Schedule A Time!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scheduleContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: 350,
    marginTop: 100,
    fontSize: 300,
  },
  scheduleText: {
    fontSize: 30,
  },
});
export default Greet;
