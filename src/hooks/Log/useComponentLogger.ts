/* eslint-disable no-console */
/*
 * useComponentLogger.ts
 * Created on Tue Jun 14 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

import { useUpdateEffect } from "../LifeCycles/useUpdateEffect";
import { useEffectOnce } from "../LifeCycles/useEffectOnce";

/**
 * UseComponentLogger is a custom hook that logs when a component mounts, unmounts, and updates.
 * @param {string} componentName - The name of the component you want to log.
 */
export const useComponentLogger = (componentName: string) => {
  useEffectOnce(() => {
    /* Using template literals to log the component name and the time it mounted. */
    console.log(`${componentName} mounted ${new Date().toTimeString()}`);
    return () =>
      /* Logging the component name and the time it unmounted. */
      console.log(`${componentName} unmounted ${new Date().toTimeString()}`);
  });

  /* Logging the component name and the time it updated. */
  useUpdateEffect(() => {
    console.log(`${componentName} updated ${new Date().toTimeString()}`);
  });
};
