/*
 * RootStack.tsx
 * Created on Tue Jun 14 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Creating a stack navigator with the type of `RootStackParams` */
const RootStack = createNativeStackNavigator<RootStackParams>();

/**
 * It returns a NavigationContainer component that contains a RootStack.Navigator component that
 * contains a RootStack.Screen component that contains a Home component
 * @returns A React component that renders a navigation container with a root stack navigator.
 */
const RootNavigation: FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={'home'}
      >
        {/* Creating a screen with the name of `home` and the component of `Home` */}
        <RootStack.Screen
          name={'home'}
          component={require('../views/Home/Home').default}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
