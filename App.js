import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Greet from "./components/scheduleatime";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Greet />
    </View>
  );
}
