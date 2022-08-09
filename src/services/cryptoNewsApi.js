
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  'x-rapidapi-host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;


// const options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics',
//   params: {textFormat: 'Raw', safeSearch: 'Off'},
//   headers: {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': '9d0ef34c18msha9b9dc97ba6048ap14e6dbjsnbe91af1474e0',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//   }
// };
