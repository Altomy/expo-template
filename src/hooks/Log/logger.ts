/* eslint-disable no-console */
/*
 * logger.ts
 * Created on Tue Jun 14 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

/**
 * It logs the function name, component name, and data (if any) to the console.
 * @param {string} functionName - The name of the function you're logging
 * @param {string} componentName - The name of the component that the function is in.
 * @param {string} [data] - string - This is the data that you want to log.
 */
export function fnLogger(
  functionName: string,
  componentName: string,
  data?: any
) {
  console.log(`Function logger`);
  console.log(`Component: ${componentName} - Function: ${functionName}`);
  console.log('========================');
  console.log(data);
  console.log('========================');
}

/**
 * This function logs the component name, model name, and data to the console.
 * @param {string} componentName - The name of the component that is calling the API
 * @param {string} modelName - The name of the model you're using.
 * @param {any} data - any - this is the data that is returned from the API call
 */
export function apiLogger(componentName: string, modelName: string, data: any) {
  console.log(`Api logger`);
  console.log(`Component: ${componentName} - Model: ${modelName}`);
  console.log('========================');
  console.log(`Data - ${data}`);
  console.log('========================');
}

/**
 * It logs the component name, model name, and error to the console.
 * @param {string} componentName - The name of the component that is calling the API
 * @param {string} modelName - The name of the model that you're using.
 * @param {any} error - any - This is the error object that you get from the API call.
 */
export function errApiLogger(
  componentName: string,
  modelName: string,
  error: any
) {
  console.log(`Error Api logger`);
  console.log(`Component: ${componentName} - Model: ${modelName}`);
  console.log('======================');
  console.log(`Error: ${JSON.stringify(error)}`);
  console.log('======================');
}
