/*
 * useLogin.tsx
 * Created on Tue Jun 14 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

import { fnLogger } from 'hooks/Log/logger';
import { useObject } from 'hooks/States/useObject';
import { useCallback } from 'react';

type LoginType = {
  phone: string;
  password: string;
};

/**
 * It returns an object with three properties: user, login, and setUser
 * @returns An object with 3 properties: user, login, and setUser.
 */
export function useLogin() {
  /* Using the useState hook to create a local state variable called user. */
  const [user, setUser] = useObject<LoginType>({
    phone: '',
    password: '',
  });

  /* A React hook that returns a memoized version of the callback function that only changes if one of
 the dependencies has changed. This is useful when passing callbacks to optimized child components
 that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate). */
  const login = useCallback(async () => {
    // User Login handler
    fnLogger('useLogin', 'login', user);
  }, [user]);

  /* Returning an object with three properties: user, login, and setUser. */
  return { user, login, setUser };
}
