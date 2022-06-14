/*
 * useAppStartup.ts
 * Created on Tue Jun 14 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

import { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
  Inter_900Black,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter';
import { checkTranslation } from 'utils';
import 'utils/Translations.utils';

/**
 * This function will prevent the splash screen from auto hiding, load the fonts, and then hide the
 * splash screen when the app is ready.
 * @returns A boolean value.
 */
export function useAppStartup() {
  /* Creating a state variable called appIsReady and setting it to false. */
  const [appIsReady, setAppIsReady] = useState(false);

  /* A hook that is called when the component is mounted. */
  useEffect(() => {
    /**
     * The function waits for the SplashScreen to prevent auto-hiding, then loads the fonts, then
     * sets the appIsReady state to true, then hides the SplashScreen.
     */
    async function prepare() {
      try {
        /* Preventing the splash screen from auto hiding. */
        await SplashScreen.preventAutoHideAsync();
        /* Loading the fonts. */
        await fontsLoader();
        /* Checking if the translation file is up to date. */
        await checkTranslation();
      } catch (error) {
        /* Throwing an error if the app fails to load. */
        throw new Error('App startup error' + error);
      } finally {
        /* Setting the state of the appIsReady variable to true. */
        setAppIsReady(true);
        /* Hiding the splash screen. */
        await SplashScreen.hideAsync();
      }
    }

    /* Calling the function. */
    prepare();
  }, []);

  /* Returning the state of the appIsReady variable. */
  return appIsReady;
}

/**
 * It loads the fonts
 * @returns Nothing.
 */
async function fontsLoader() {
  /* Loading the fonts. */
  await Font.loadAsync({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  /* Returning nothing. */
  return 'done';
}
