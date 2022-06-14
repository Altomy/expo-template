/**
 * Api
 * @utils
 */
import axios, { AxiosResponse } from "axios";
import { QueryClient, useMutation, useQuery } from "react-query";
import { BaseUrl } from "./Constants.utils";

/* Creating a new instance of the QueryClient class. */
export const queryClient = new QueryClient();

/* Creating a new instance of the axios client. */
export const http = axios.create({
  baseURL: BaseUrl,
});

/**
 * Crud Functions
 * [useListQuery, useFindByIndexQuery, useFilterQuery, usePaginationQuery]
 * [useCreateMutation, useUpdateMutation, useDeleteMutation]
 * [useGetQuery, usePostQuery]
 */

/**
 * It's a function that takes a key and returns a result.
 * @param {string} key - string - the key to use for the query
 * @returns The result of the query.
 */
export function useListQuery<T>(key: string) {
  return useQuery<T>(key, async () => {
    const { data } = await http.get(`${key}/list`);
    return data;
  });
}

/**
 * a function that take a key, id and return result from API
 * @param {string} key - The key of the resource you want to fetch.
 * @param {string | number} id - The id of the item you want to find
 * @returns The return type is a tuple of the data and the loading state.
 */
export function useFindByIndexQuery<T>(key: string, id: string | number) {
  return useQuery<T>(key, async () => {
    const { data } = await http.get(`${key}/findByIndex/${id}`);
    return data;
  });
}

/**
 * It's a function that takes a key and options, and returns a query.
 * @param {string} key - The key of the query.
 * @param {unknown} _options - options for filter
 * @returns The return type is a tuple of the following:
 */
export function useFilterQuery<T>(
  key: string,
  _options: { [key: string]: unknown }
) {
  return useQuery<T>(key, async () => {
    const { data } = await http.post(`${key}/filter`, _options);
    return data;
  });
}

/**
 * It's a function that takes a key and a page number and returns a query object.
 * @param {string} key - string - the key of the query
 * @param  - key - the key of the query
 * @returns The return value of the function is the result of the useQuery hook.
 */
export function usePaginationQuery<T>(
  key: string,
  { page, length = 10 }: { page: number; length: number }
) {
  return useQuery<T>(
    key,
    async () => {
      const { data } = await http.post(`${key}/pagination`, { page, length });
      return data;
    },
    { keepPreviousData: true }
  );
}

/**
 * It's a function that takes key as string and return useMutation
 * @param {string} key - string - The key is the endpoint you want to hit.
 * @returns A function that takes an object and returns a promise.
 */
export function useCreateMutation<TData, TObject>(key: string) {
  return useMutation<AxiosResponse<TData, unknown>, unknown, TObject>(
    (data) => {
      return http.post(`${key}/create`, data);
    }
  );
}

/**
 * It returns a function that takes an object and returns a promise that resolves to an object.
 * @param {string} key - string - the key of the resource you want to update
 * @returns A function that takes an object and returns a promise.
 */
export function useUpdateMutation<TData, TObject>(key: string) {
  return useMutation<AxiosResponse<TData, unknown>, unknown, TObject>(
    (data) => {
      return http.post(`${key}/update`, data);
    }
  );
}

/**
 * It takes a key and an id, and returns a function that deletes the item with the given id from the
 * collection with the given key.
 * @param {string} key - The key of the resource you want to delete.
 * @param {number | string} id - The id of the item you want to delete
 * @returns A function that returns a promise.
 */
export function useDeleteMutation(key: string, id: number | string) {
  return useMutation(() => {
    return http.get(`${key}/delete/${id}`);
  });
}

/**
 * It's a function that takes a key and returns a useQuery hook that uses the key to make a GET request
 * to the server and returns the data
 * @param {string} key - The key to store the data under.
 * @returns The return value is a tuple of the data and the loading state.
 */
export function useGetQuery<T>(key: string) {
  return useQuery<T>(key, async () => {
    const { data } = await http.get(`${key}`);
    return data;
  });
}

/**
 * It's a function that takes a key and options, and returns a useQuery hook that uses the key and
 * options to make a POST request to the server
 * @param {string} key - The key to use for the query.
 * @param {unknown} _options - The options to pass to the post request
 * @returns The return type is a tuple of the data and the loading state.
 */
export function usePostQuery<T>(
  key: string,
  _options: { [key: string]: unknown }
) {
  return useQuery<T>(key, async () => {
    const { data } = await http.post(`${key}`, _options);
    return data;
  });
}
