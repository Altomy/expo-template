/*
 * useObject.ts
 * Created on Tue Jun 14 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */
import { useState, useCallback } from 'react';

/**
 * It returns a state and a setState function that can be used to update the state
 * @param {T} initialState - The initial state of the object.
 * @returns An array with two elements. The first element is the localState, the second element is the
 * setState function.
 */
export function useObject<T>(
  initialState: T
): [localState: T, setState: (state: Partial<T>) => void] {
  /* Destructuring the array returned by useState. */
  const [localState, setStateLocal] = useState<T>(initialState);

  /* A function that takes a state and updates the localState. */
  const setState = useCallback(
    /* A type assertion. It is telling TypeScript that the state is a Partial<T>. */
    (state: Partial<T>) => {
      /* Merging the localState and the state. */
      setStateLocal({ ...localState, ...state });
    },
    /* A dependency array. It is used to tell React that the setState function depends on the
    localState. */
    [localState]
  );

  /* Returning an array with two elements. The first element is the localState, the second element is
  the setState function. */
  return [localState, setState];
}
