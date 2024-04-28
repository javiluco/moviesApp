import { HttpAdapater } from "../../../config/adapters/http/http.adapter";


export const moviesNowPlayingUseCase= async( fetcher: HttpAdapater )=>{

    try {
        const nowPlaying = await fetcher.get('/now_playing');

        console.log({nowPlaying});

        return [];
    } catch (error) {
        
    }
}