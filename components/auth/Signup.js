import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        secureTextEntry={false}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        secureTextEntry={false}
      />
      <TextInput
        placeholder="Phone (Optional)"
        style={styles.input}
        secureTextEntry={false}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Address"
        style={styles.input}
        secureTextEntry={true}
      />

      <View styles={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Main")}
        >
          <Text style={styles.btnText}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ marginTop: 10, color: "#2d3436" }}>
            Already have an account? Sign in
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
  title: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 20,
    fontWeight: "700",
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
