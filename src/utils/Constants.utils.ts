/**
 * Constants
 * @utils
 */

/* Exporting a constant called APP_NAME and setting it to "expo-template", change it to application name */
export const AppName = 'expo-template';

export const IsDev = true;

/* The base url for the API. */
export const BaseUrl = IsDev ? 'http://192.168.1.242:3030/' : '';

/* Exporting a constant called storagesKey and setting it to an object with a keys for async storage  */
export const storagesKey = {
  locale: `@${AppName}-locale`,
  userAuthToken: `@${AppName}-user_auth_token`,
};
