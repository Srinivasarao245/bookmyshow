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
      getmoviesdetails:builder.query({
        query:(id)=>({
          url:`/movies/${id}`,
            method:'get',
            }),
          }),
      addMovies:builder.mutation({
        query:(movies) =>({
          url:`/addmovies`,
          method:'Post',
          body:movies,
        }),
      }),
      getFiltermovies:builder.mutation({
        query:(data)=>({
          url:`/mfilter`,
          method:'post',
          body:data,
        })
      })    
      }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBookmyshowApiQuery,
               useLazyGetBookmyshowApiQuery,
               useGetmoviesdetailsQuery,
               useAddMoviesMutation,
               useGetFiltermoviesMutation, } = BookmyshowApi;