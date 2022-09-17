import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const header={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '13c57badccmshcd4373f043b1262p160bddjsnd2e8948c5405',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url)=>({url,headers:header})
export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNewsByName: builder.query({
      query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
    }),
  }),
})

export const {
    useGetNewsByNameQuery,
}=newsApi