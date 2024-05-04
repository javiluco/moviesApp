import { HttpAdapater } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";


export const moviesTopRatedUseCase= async( fetcher: HttpAdapater ):Promise<Movie[]>=>{

    try {
        const topRated = await fetcher.get<MovieDBMoviesResponse>('/top_rated');

        console.log({top_rated: topRated});

        return topRated.results.map( result=> MovieMapper.fromMovieDBResultToEntity( result ) )

    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - topRatedUseCase')
    }
}