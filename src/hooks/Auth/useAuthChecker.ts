/*
 * useAuthChecker.ts
 * Created on Tue Jun 14 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUser } from "../Context/UserProvider";
import React from "react";
import { storagesKey } from "utils";

/** Auth check state type */
type AuthCheckStateType = "isLoading" | "isAuth" | "isNotAuth";

/**
 * It checks if the user is authenticated and returns the state of the check
 * @param {boolean} [checkAuthInCall] - boolean - if true, the function will check the user's
 * authentication status immediately. If false, it will wait for the user to call the function.
 * @returns An object with a property called authCheckState.
 */
export function useAuthChecker(checkAuthInCall: boolean) {
  /* A React hook that is used to set the state of the component. */
  const [authCheckState, setAuthCheckState] =
    React.useState<AuthCheckStateType>("isLoading");

  const { setUser } = useUser();

  /* A function that is used to check if the user has a token. */
  const builder = React.useCallback(async () => {
    /* Checking if the user has a token. */
    const userAuthToken = await checkHaveUserToken();
    /* Setting the state of the component to "isNotAuth" if the user does not have a token. */
    if (!userAuthToken) setAuthCheckState("isNotAuth");
    /* A placeholder for the code that will be executed if the user has a token. */
    if (userAuthToken) {
      // Handle user token
      setUser("User string");
    }
  }, []);

  /* Checking if the user is authenticated. */
  React.useEffect(() => {
    if (checkAuthInCall) builder();
  }, []);

  /* Returning an object with a property called authCheckState. */
  return { authCheckState };
}

/**
 * If the user has a token, return it, otherwise return undefined.
 * @returns A promise<string | undefined>
 */
async function checkHaveUserToken() {
  try {
    const userAuthToken = await AsyncStorage.getItem(storagesKey.userAuthToken);
    if (userAuthToken) return userAuthToken;
    return undefined;
  } catch (error) {
    return undefined;
  }
}
