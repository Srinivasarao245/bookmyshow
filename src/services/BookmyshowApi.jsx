// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const BookmyshowApi = createApi({
  reducerPath: 'BookmyshowApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200' }),
  endpoints: (builder) => ({
    getBookmyshowApi: builder.query({
      query: () => `/movies`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBookmyshowApiQuery,
                } = BookmyshowApi;