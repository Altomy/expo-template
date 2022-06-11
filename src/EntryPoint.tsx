import axios from "axios";
import { Box, Button, ScrollView, Text } from "native-base";
import React from "react";
import { useQuery } from "react-query";
import {
  useCreateMutation,
  useFindByIndexQuery,
  useListQuery,
  usePostQuery,
} from "utils";

/* A page view EntryPoint */
export default function EntryPoint() {
  const { data, error, isError, isLoading } = useFindByIndexQuery<{
    title: string;
  }>("categories", 1);
  if (isLoading) {
    return (
      <Box flex={1} safeAreaTop>
        <Text>Loading ...</Text>
      </Box>
    );
  }

  const {
    mutate,
    data: d,
    error: e,
  } = useCreateMutation<{ data: string }, { title: string }>("categories");

  const {} = usePostQuery("key", { title: "hello" });
  if (isError) {
    return <Text>Error ... {JSON.stringify(error)}</Text>;
  }
  if (data) {
    console.log(data);
    return (
      <Box flex={1} safeAreaTop>
        <ScrollView>
          <Text>Hello world</Text>
          <Text>{data.title}</Text>
          <Button
            onPress={() => {
              mutate({ title: "hi world" });
            }}
          >
            mutate
          </Button>
        </ScrollView>
      </Box>
    );
  }
  return null;
}
