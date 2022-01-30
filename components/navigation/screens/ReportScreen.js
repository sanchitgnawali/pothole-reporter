import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ReportScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Pothole</Text>

      <TextInput
        placeholder="Title"
        style={styles.input}
        secureTextEntry={false}
      />

      <TextInput
        placeholder="Description"
        style={styles.input}
        secureTextEntry={false}
      />
      <TextInput
        placeholder="Address"
        style={styles.input}
        secureTextEntry={false}
      />

      <View styles={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Main")}
        >
          <Text style={styles.btnText}>Full Report</Text>
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
    marginTop: 80,
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
    marginBottom: 30,
  },
  quickBtn: {
    marginTop: 15,
    width: 350,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    marginBottom: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  quickBtnText: {
    fontSize: 20,
    padding: 7,
    color: "#000",
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
