/*
 * EntryPoint.tsx
 * Created on Tue Jun 14 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

import { useAuthChecker, useUser } from "hooks";
import { Box, Button, ScrollView, Text } from "native-base";
import React from "react";

/* A page view EntryPoint */
export default function EntryPoint() {
  useAuthChecker(true);
  const { user } = useUser();
  return (
    <Box flex={1} safeAreaTop>
      <ScrollView>
        <Text>Check the user is auth</Text>
        {user && <Text>have user: {user}</Text>}
      </ScrollView>
    </Box>
  );
}
