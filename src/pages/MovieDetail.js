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
            <Awards>
                {movie.awards.map((award) => (
                    <Award 
                        title={award.title} 
                        description={award.description} 
                        key={award.title} 
                    />
                ))}
            </Awards>
        </Details>
        )}
     </>
    );
};

const Details = styled.div`
    color: white;
`;

const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Awards = styled.div`

`;


//Award Component
const Award = ({title, description}) => {
    return (
        <div>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </div>
    )
}

export default MovieDetail;
