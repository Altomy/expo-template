/*
 * UserProvider.tsx
 * Created on Tue Jun 14 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

import React, { FC, useState, createContext, useContext } from 'react';

// TODO: Change with the real models type for user
export type UserType = string | null;

export type UserProviderType = {
  user: UserType | null;
  setUser: (data: UserType) => void;
};

/* Creating a context with a default value. */
const UserProviderContext = createContext<UserProviderType>({
  user: '',
  setUser: () => {},
});

/**
 * The UserProvider function is a React component that returns a UserProviderContext.Provider component
 * with a value prop that is an object with a user and setUser property.
 * @param  - FC {children}
 * @returns The UserProviderContext.Provider is being returned.
 */
export const UserProvider: FC = ({ children }) => {
  /* Creating a state variable called user and a function called setUser. */
  const [user, setUser] = useState<UserType>(null);

  /* Returning a UserProviderContext.Provider component with a value prop that is an object with a user
  and setUser property. */
  return (
    <UserProviderContext.Provider value={{ user, setUser }}>
      {children}
    </UserProviderContext.Provider>
  );
};

/**
 * UseUser is a function that returns the context of the UserProviderContext
 * @returns The context object.
 */
export const useUser = () => {
  /* Returning the context of the UserProviderContext. */
  const context = useContext(UserProviderContext);
  /* Checking if the context is undefined and if it is it will throw an error. */
  if (context === undefined) throw new Error('Must used in the UserProvider');
  /* Returning the context object. */
  return context;
};
