/*
 * ArrayHelper.ts
 * Created on Tue Jun 14 2022
 *
 * Copyright (c) 2022 Altomy Dev
 */

/**
 * Return a new array with the element at the specified index removed.
 * @param {T[]} array - T[] - The array to remove the item from
 * @param {number} removeIndex - The index of the item to remove from the array.
 * @returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */
export function removeArrayByIndex<T>(array: T[], removeIndex: number) {
  /* Filtering the array and returning a new array with the element at the specified index removed. */
  return array.filter((_, index) => {
    /* Filtering the array and returning a new array with the element at the specified index removed. */
    return removeIndex !== index;
  });
}
