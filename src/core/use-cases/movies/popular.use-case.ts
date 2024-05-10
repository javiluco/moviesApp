import { HttpAdapater } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

interface Options{
    page?: number;
    limit?: number;
}

export const moviesPopularUseCase= async( fetcher: HttpAdapater, options?:Options ):Promise<Movie[]>=>{

    try {
        const popular = await fetcher.get<MovieDBMoviesResponse>('/popular',{
            params: {
                page: options?.page ?? 1
            }
        });

        console.log({popular});

        return popular.results.map( result=> MovieMapper.fromMovieDBResultToEntity( result ) )

    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - PopularUseCase')
    }
}