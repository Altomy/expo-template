/*
 * ApplicationProvider.tsx
 * Created on Tue Jun 14 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

import { NativeBaseProvider, theme } from 'native-base';
import React, { FC } from 'react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'utils';
import { UserProvider } from './UserProvider';

/**
 * This function is a React component that takes in children and returns a React Fragment with the
 * children.
 * @param  - FC = ({ children })
 * @returns React.Fragment
 */
export const ApplicationProvider: FC = ({ children }) => {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider theme={theme}>
          <UserProvider>{children}</UserProvider>
        </NativeBaseProvider>
      </QueryClientProvider>
    </React.Fragment>
  );
};
