/*
 * useNavigationHook.ts
 * Created on Wed Jun 15 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

/**
 * It returns a navigation prop that is typed to the specific screen you want to navigate to
 * @param key - keyof RootStackParams
 * @returns A navigation prop for the root stack.
 */
export function useRootNavigation(key: keyof RootStackParams) {
  /* Returning the navigation prop for the root stack. */
  return useNavigation<
    NativeStackNavigationProp<RootStackParams, typeof key>
  >();
}

/**
 * Add new navigation hooks
 * example
 * useNameNavigation(key: keyof NameStackParams)
 * return useNavigation<NativeStackNavigationProp<NameStackParams, typeof key>>()
 */
