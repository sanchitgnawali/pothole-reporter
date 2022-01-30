import React, { useState } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { FAB } from "react-native-paper";

const initialData = [{ id: 1, latitude: 29.73615, longitude: -95.5094 }];

export default function HomeScreen({ navigation }) {
  const [potholes, setPotholes] = useState(initialData);

  const addMarker = () => {
    setPotholes((prevState) => {
      const newLocation = {
        id: prevState.length + 1,
        latitude: initialData[0].latitude + Math.random() * 0.01,
        longitude: initialData[0].longitude + Math.random() * 0.01,
      };

      return [...prevState, newLocation];
    });
    alert("Quickly reported a pothole at current location");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 29.73615,
          longitude: -95.5094,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {potholes.map((addr) => {
          return (
            <Marker key={addr.id} description="Pothole" coordinate={addr}>
              <Image
                style={{ height: 40, width: 40 }}
                source={require("./../../../assets/danger.png")}
              />
            </Marker>
          );
        })}
      </MapView>
      <FAB
        style={{
          backgroundColor: "red",
          position: "absolute",
          right: 0,
          bottom: 0,
          margin: 20,
        }}
        onPress={addMarker}
        icon="bullhorn"
      />
    </SafeAreaView>
  );
}
