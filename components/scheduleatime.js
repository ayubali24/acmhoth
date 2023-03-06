import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import { Alert } from "react-native";

function Greet() {
  return (
    <View style={styles.container}>
      <View style={styles.scheduleContainer}>
        <Text style={styles.scheduleText}>Schedule A Time!</Text>
      </View>
      <View style={styles.confirmButton}>
        <Text>
          <Button title="Confirm" onPress={() => Alert.alert("Ayub")}></Button>
        </Text>
      </View>
      <View style={styles.backButton}>
        <Text>
          <Button
            title="Back"
            onPress={() => Alert.alert("back button pressed")}
          ></Button>
        </Text>
      </View>
      <View style={styles.textStyle}>
        <Text>Day</Text>
      </View>
      <View>
        <Text>Time</Text>
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
    marginTop: 200,
    fontSize: 300,
  },
  scheduleText: {
    fontSize: 30,
  },
  confirmButton: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 200,
  },
  textStyle: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: 350,
    marginTop: 200,
    fontSize: 300,
  },
});
export default Greet;
