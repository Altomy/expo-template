/* Importing the library */
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useAppStartup } from "hooks";

/**
 * "If the app is not ready, return null, otherwise return the app."
 *
 * The app is not ready until the app startup function has completed.
 *
 * The app startup function is an asynchronous function that returns a boolean.
 *
 * @returns A function that returns null || JSX
 */
export default function App() {
  /* Calling the useAppStartup() hook. */
  const appIsReady = useAppStartup();

  /* Returning null if the app is not ready. */
  if (!appIsReady) return null;
  /* Returning a view with a text and status bar. */
  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
