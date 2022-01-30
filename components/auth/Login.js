import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    if (!email && !password) {
      alert("Please enter Email and Password");
    } else {
      if (email.toLowerCase() == "root@root.com" && password == "root") {
        navigation.navigate("Main");
      } else {
        alert("invalid credentials");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="road" style={styles.icon} />
      <TextInput
        placeholder="Email"
        style={styles.input}
        secureTextEntry={false}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <View styles={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={loginHandler}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={{ marginTop: 10, color: "#2d3436" }}>
            Don't have an account? Create one
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2ecc71",
  },
  input: {
    width: "95%",
    fontSize: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },

  btn: {
    marginTop: 15,
    width: 350,
    alignItems: "center",
    backgroundColor: "#2d3436",
    borderRadius: 10,
    padding: 5,
  },
  btnText: {
    fontSize: 20,
    padding: 7,
    color: "#fff",
  },
  icon: {
    fontSize: 100,
    marginTop: 30,
    color: "#fff",
    marginBottom: 30,
  },
});
