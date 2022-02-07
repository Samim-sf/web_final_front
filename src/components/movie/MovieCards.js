import React from 'react';
import MovieCardsList from "./MovieCardsList";
import MovieCardsGrid from "./MovieCardsGrid";

const MovieCards = ({isGrid}) => {
    if (isGrid) {
        return (<MovieCardsGrid/>);

    } else {
        return (
            <div>
                <MovieCardsList/>
            </div>
        );
    }

}
export default MovieCards;