import { AxiosAdapter } from "./http/axios.adapter";


export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    paramas: {
        api_key: '43c2bec34163cec32ef98bd67f62e2b1',
        language: 'es'
    }
})