import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (build) => ({
    getPokemonByName: build.query({
      query: (priority) => {
        return {
          url: `/todos?priority=${priority}`,
          method: "GET",
        };
      },
      providesTags: ["todo"],
    }),
    postTodo: build.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/create-todo`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    deleteTodo: build.mutation({
      query: (id) => {
        return {
          url: `/todo/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetPokemonByNameQuery,
  usePostTodoMutation,
  useDeleteTodoMutation,
} = baseApi;
