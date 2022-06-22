/*
 * NumberHelper.ts
 * Created on Wed Jun 15 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

/**
 * "Return a random number between min and max, inclusive."
 *
 * The function has two parameters, min and max, with default values of 0 and 1000, respectively
 * @param [min=0] - The minimum number that can be returned.
 * @param [max=1000] - The maximum number that can be generated.
 * @returns A random number between 0 and 1000.
 */
export function randomNumber(min = 0, max = 1000) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
