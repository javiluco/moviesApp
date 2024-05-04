import { HttpAdapater } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";


export const moviesUpcomingUseCase= async( fetcher: HttpAdapater ):Promise<Movie[]>=>{

    try {
        const upcoming = await fetcher.get<NowPlayingResponse>('/upcoming');

        console.log({upcoming});

        return upcoming.results.map( result=> MovieMapper.fromMovieDBResultToEntity( result ) )

    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - upcoming')
    }
}