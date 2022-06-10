/* Importing the library */
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useAppStartup } from "hooks";
import { NativeBaseProvider } from "native-base";

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
  /* Returning a view */
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
