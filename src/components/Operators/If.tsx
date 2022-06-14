/*
 * If.tsx
 * Created on Tue Jun 14 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */
import React, { FC, Fragment } from 'react';

type PropsType = {
  condition: boolean;
};

/**
 * If the condition is true, return the children, otherwise return null
 * @param  - FC<PropsType>
 * @returns null
 */
export const If: FC<PropsType> = ({ children, condition }) => {
  if (!condition) return null;

  return <Fragment>{children}</Fragment>;
};
