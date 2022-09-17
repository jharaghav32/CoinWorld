// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const header={
    'X-RapidAPI-Key': '13c57badccmshcd4373f043b1262p160bddjsnd2e8948c5405',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl =  'https://coinranking1.p.rapidapi.com';
// Define a service using a base URL and expected endpoints

const createRequest = (url)=>({url,headers:header})
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoByName: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),
     
  }),
})

export const {
    useGetCryptoByNameQuery,
    useGetCryptoExchangeByNameQuery
}=cryptoApi

