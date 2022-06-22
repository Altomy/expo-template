/*
 * useAsyncState.ts
 * Created on Wed Jun 15 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useState, useEffect, useCallback } from 'react';

/**
 * It returns a state, a function to update the state, and a function to remove the state
 * @param {string} key - string - The key to use for the storage.
 */
export function useAsyncState<T>(
  key: string
): [
  state: T | null,
  onChangeValue: (data: T) => Promise<void>,
  removeValue: () => Promise<void>
] {
  /* A React Hook that allows you to have a state in a functional component. */
  const [state, setState] = useState<T | null>(null);

  /* Destructuring the `useAsyncStorage` hook. */
  const { setItem, getItem, removeItem } = useAsyncStorage(key);

  /* Fetch the async storage data in the key if have */
  const fetch = useCallback(async () => {
    const storageData = await getItem();
    if (storageData) {
      setState(JSON.parse(storageData));
    }
  }, [getItem]);

  /* When user change the value */
  const onChangeValue = useCallback(
    async (data: T) => {
      setState(data);
      await setItem(JSON.stringify(data));
    },
    [setItem]
  );

  /* When user remove the value */
  const removeValue = useCallback(async () => {
    setState(null);
    await removeItem();
  }, [removeItem]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  /* Returning an array of the state, the function to update the state, and the function to remove the
  state. */
  return [state, onChangeValue, removeValue];
}
