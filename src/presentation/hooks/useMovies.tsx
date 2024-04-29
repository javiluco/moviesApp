import { useEffect, useState } from "react";
import { Movie } from "../../core/entities/movie.entity";

import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

    useEffect(() => {
        initialLoad();
    }, []);

    const initialLoad = async()=>{
        const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        console.log({nowPlayingMovies});
    }
    

  return {
    isLoading,
    nowPlaying,
  }
}
