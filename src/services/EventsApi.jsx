// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const EventsAPi = createApi({
  reducerPath: 'EventsAPi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200' }),
  endpoints: (builder) => ({
    getEvents: builder.query ({
      query: () =>`/events`,
    }),
  }),
})
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEventsQuery,
               useLazyGetEventsQuery,  } = EventsAPi