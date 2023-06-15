import React,{ useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MovieState } from '../movieState';
import styled from "styled-components";

const MovieDetail = () => {
    const location = useLocation();
    const url = location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    //Use Effect
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
        setMovie(currentMovie[0]);
    }, [movies, url]);
    
    return (
     <>
      {movie && (
        <Details>
            <Headline>
                <h2>{movie.title}</h2>
                <img src={movie.mainImg} alt="movie" />
            </Headline>
        </Details>
        )}
     </>
    );
};

const Details = styled.div`

`;

const Headline = styled.div`
`;

export default MovieDetail;
