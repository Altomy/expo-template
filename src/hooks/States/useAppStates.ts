import { useEffect, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

/**
 * It returns the current app state, and updates the returned value whenever the app state changes
 * @returns A function that returns the current state of the app.
 */
export function useAppState() {
  /* Getting the current state of the app. */
  const currentState = AppState.currentState;
  /* A destructuring assignment. */
  const [appState, setAppState] = useState(currentState);

  useEffect(() => {
    /**
     * The function takes a parameter of type AppStateStatus and sets the state of the app to the new
     * state
     * @param {AppStateStatus} newState - The new app state.
     */
    function onChange(newState: AppStateStatus) {
      setAppState(newState);
    }

    /* Adding an event listener to the app state. */
    const subscription = AppState.addEventListener('change', onChange);

    return () => {
      /* It removes the event listener. */
      subscription.remove();
    };
  }, []);

  /* It returns the current state of the app. */
  return appState;
}
