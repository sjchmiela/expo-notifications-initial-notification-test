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
      <Text style={{ marginBottom: 20 }}>
        1. Ensure notifications are allowed to be presented.{"\n"}
        2. Tap on the button below a couple of times.{"\n"}
        3. Immediately, background the application.{"\n"}
        4. See the notifications arrive.{"\n"}
        5. Kill the app. (Double Home tap, swipe app up){"\n"}
        6. Tap on one of the notifications.{"\n"}
        7. See the warning show up.
      </Text>
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
