import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Greet from "../components/scheduleatime";

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { useNavigation } from "@react-navigation/native";

// const Stack = createNativeStackNavigator();

export default function Login() {
  // const navigation = useNavigation();
  const [login, setLogin] = useState(true);
  const [login2, setLogin2] = useState(true);
  const [map, setMap] = useState(true);
  const [route, setRoute] = useState(true);
  const [route2, setRoute2] = useState(true);
  const [schedule, setSchedule] = useState(true);
  const [greet, setGreet] = useState(true);

  const [number, onChangeNumber] = React.useState("");
  const [numberEmail, onChangeNumberEmail] = React.useState("");

  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");

  return (
    <View
      style={{
        // alignItems: "center",
        // justifyContent: "center",
        // backgroundColor: "red",
        flex: 1,
      }}
    >
      {login && ( // Login Page
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View>
            <TouchableOpacity onPress={() => setLogin(false)}>
              <View style={styles.button1}>
                <Text style={styles.text1}>Sign Up</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setLogin(false)}>
              <View style={styles.button1}>
                <Text style={styles.text1}>Log in</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {!login && login2 && (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.buttonContainer2}>
            <TouchableOpacity onPress={() => setLogin(true)}>
              <View style={styles.backButton2}>
                <Text style={styles.backButtontxt2}>back</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.bodyContainer2}>
            <Text style={styles.login2}>Login</Text>
            <Text style={styles.welcomeBack2}>Welcome Back!</Text>
            <Text>Email</Text>
            <TextInput
              style={styles.textInput2}
              onChangeText={onChangeNumberEmail}
              value={numberEmail}
              placeholder="Enter your email"
              keyboardType="numeric"
            ></TextInput>
            <Text>Password</Text>
            <TextInput
              style={styles.textInput2}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Enter your password"
              keyboardType="numeric"
            ></TextInput>
            <TouchableOpacity>
              <Text>Forgot password</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setLogin2(false)}>
              <View style={styles.loginButton2}>
                <Text style={styles.backButtontxt2}>Login</Text>
              </View>
            </TouchableOpacity>
            <Text>Don't have an account? Sign up!</Text>
          </View>
        </View>
      )}

      {!login2 && map && (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              flex: 1,
              zIndex: 2,
              position: "absolute",
              // marginBottom: 100,
            }}
          >
            <TouchableOpacity onPress={() => setLogin2(true)}>
              <View style={styles.backButton3}>
                <Text style={styles.backButtontxt2}>back</Text>
              </View>
            </TouchableOpacity>

            <View>
              <Text style={styles.whereText3}>Where are you going?</Text>
            </View>

            <TextInput
              style={styles.textInput2}
              onChangeText={onChangeNumberEmail}
              value={numberEmail}
              placeholder="Enter your destination"
              keyboardType="numeric"
            ></TextInput>

            <TouchableOpacity onPress={() => setMap(false)}>
              <View style={styles.Done3}>
                <Text style={styles.backButtontxt2}>Done</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Image
            style={{
              // position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "lightgrey",
              // marginTop: "100%",
              // zIndex: 1,
            }}
            source={require("./map.png")}
          />
        </View>
      )}

      {!map && greet && (
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => setMap(true)}>
            <View style={styles.backButton4}>
              <Text style={styles.backButtontxt2}>Back</Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              marginTop: 130,
              marginLeft: 30,
              justifyContent: "center",
              alignItems: "center",
              // alignContent: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons
                name="location-on"
                size={31}
                style={styles.mapIcon}
              />
              <TextInput
                style={styles.textInput4}
                onChangeText={setFrom}
                value={from}
                placeholder="Current Location"
                keyboardType="numeric"
              ></TextInput>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons
                name="location-on"
                size={31}
                style={styles.mapIcon}
              />
              <TextInput
                style={styles.textInput4}
                onChangeText={setTo}
                value={to}
                placeholder="Santa Monica Pier"
                keyboardType="numeric"
              ></TextInput>
            </View>
          </View>

          <MaterialIcons name="stars" size={31} />
          <TouchableOpacity onPress={() => setGreet(false)}>
            <View style={styles.Done3}>
              <Text style={styles.backButtontxt2}>Done</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      {!greet && (
        <View style={{ flex: 1 }}>
          <Greet />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button1: {
    // alignItems: "flex-start",
    // justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 45,
    elevation: 3,
    backgroundColor: "lightgrey",
    marginBottom: 30,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  text1: {
    fontSize: 50,
    lineHeight: 60,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  buttonContainer2: {
    // position: "absolute",
    alignSelf: "flex-start",
    // marginBottom: 200,
    marginTop: "15%",
    flex: 1,
    marginLeft: 15,
    // backgroundColor: "red",
  },
  backButton2: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 45,
    elevation: 3,
    backgroundColor: "lightgrey",
    // marginRight: "75%",
    // marginBottom: "169%",
    // flex: 1,
    // margin: 30,
  },
  backButtontxt2: {
    fontSize: 25,
  },
  bodyContainer2: {
    flex: 3,
    // backgroundColor: "lightblue",
  },
  login2: {
    fontSize: 65,
  },
  welcomeBack2: {
    fontSize: 20,
  },
  textInput2: {
    height: 40,
    margin: 12,
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 8,
  },
  loginButton2: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "lightgrey",
    marginBottom: 30,
    shadowColor: "#171717",
  },
  whereText3: {
    fontSize: 30,
    fontWeight: "bold",
  },
  backButton3: {
    alignItems: "center",
    // justifyContent: "center",
    paddingVertical: 5,
    // paddingHorizontal: 20,
    borderRadius: 45,
    backgroundColor: "lightgrey",
    marginBottom: 80,
  },
  Done3: {
    alignItems: "center",
    // justifyContent: "center",
    paddingVertical: 5,
    // paddingHorizontal: 20,
    borderRadius: 45,
    backgroundColor: "lightgrey",
    marginBottom: 80,
  },
  backButton4: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 45,
    marginTop: 60,
    marginLeft: 20,
    backgroundColor: "lightgrey",
  },
  textInput4: {
    height: 40,
    width: 300,
    margin: 12,
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 20,
  },
});
