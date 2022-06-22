/*
 * useUuid.ts
 * Created on Wed Jun 15 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

import uuid from 'react-native-uuid';
import { useState, useCallback, useEffect } from 'react';

/**
 * It generates a UUID and provides a few methods to manipulate it
 * @param {boolean} [generateInCall=true] - boolean = true
 * @returns An object with the following properties:
 *   value: string | number[]
 *   remove: () => void
 *   refresh: () => void
 *   generate: () => void
 */
export function useUuid(generateInCall: boolean = true) {
  /* A destructuring assignment. */
  const [value, setValue] = useState<string | number[]>('');

  const remove = useCallback(() => {
    setValue('');
  }, []);

  const refresh = useCallback(() => {
    setValue(uuid.v4());
  }, []);

  const generate = useCallback(() => {
    setValue(uuid.v4());
  }, []);

  useEffect(() => {
    if (generateInCall) generate();
  }, [generate, generateInCall]);

  /* Returning an object with the following properties:
 value: string | number[]
 remove: () => void
 refresh: () => void
 generate: () => void */
  return {
    value,
    remove,
    refresh,
    generate,
  };
}
