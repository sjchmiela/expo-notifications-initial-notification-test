import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Notifications from "expo-notifications";

Notifications.addNotificationResponseReceivedListener((response) => {
  console.warn(response);
});

export default function App() {
  React.useEffect(() => {
    Notifications.requestPermissionsAsync();
  }, []);
  const onPress = React.useCallback(() => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Tap to open the app",
      },
      trigger: {
        seconds: 5,
      },
    });
  }, []);
  return (
    <View style={styles.container}>
      <Button title="Schedule the notification" onPress={onPress} />
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
});
