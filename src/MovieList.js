import React, { Component } from 'react';
import movies from './movies';
import MovieItem from './MovieItem';
console.log(movies)


class MovieList extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="grid">
                {movies.map((movie, i) =>
                    <MovieItem
                        key={i}
                        title={movie.title}
                        year={movie.year}
                        director={movie.director}
                        duration={movie.duration}
                        rate={movie.rate}
                        genre={movie.genre}
                    />
                
                )}
     </section>
         );
    }
}
 
export default MovieList;