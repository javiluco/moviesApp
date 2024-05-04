import { HttpAdapater } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";


export const moviesPopularUseCase= async( fetcher: HttpAdapater ):Promise<Movie[]>=>{

    try {
        const popular = await fetcher.get<MovieDBMoviesResponse>('/popular');

        console.log({popular});

        return popular.results.map( result=> MovieMapper.fromMovieDBResultToEntity( result ) )

    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - PopularUseCase')
    }
}