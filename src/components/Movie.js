import React from 'react';
import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar'
import Actor from './elements/Actor';
import Grid from './elements/Grid';
import spinner from './elements/Spinner';
import Spinner from './elements/Spinner';

import { useMovieFetch } from './hooks/useMovieFetch';

const Movie = ({ movieId }) => {

    const [movie, loading, error] = useMovieFetch(movieId);

    if (error) return <div>Something went wrong...</div>
    if (loading || !movie.original_title) return <Spinner />

    return (
        <>
            <Navigation movie={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar />
            <Grid>
                <Actor />
            </Grid>
        </>
    );
}

export default Movie;

