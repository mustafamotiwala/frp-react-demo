import { makeObservable, observable } from 'mobx';
import axios from 'axios';

export const useMovieObservable = (imdbId) => {
  const movieObservable = makeObservable(
    {
      Title: '',
      Year: '',
      Rated: '',
      Released: '',
      Runtime: '',
      Genre: '',
      Director: '',
      Writer: '',
      Actors: '',
      Plot: '',
      Language: '',
      Country: '',
      Awards: '',
      Poster: '',
      Ratings: [
        {
          Source: '',
          Value: '',
        },
      ],
      Metascore: '',
      imdbRating: '',
      imdbVotes: '',
      imdbID: '',
      Type: '',
      DVD: '',
      BoxOffice: '',
      Production: '',
      Website: '',
      Response: '',
    },
    {
      Title: observable,
      Year: observable,
      Rated: observable,
      Released: observable,
      Runtime: observable,
      Genre: observable,
      Director: observable,
      Writer: observable,
      Actors: observable,
      Plot: observable,
      Poster: observable,
      imdbID: observable,
      Type: observable,
      Website: observable,
      Response: observable,
      Ratings: observable,
    }
  );
  axios
    .get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${imdbId}`)
    .then((searchResults) => {
      Object.keys(searchResults.data).forEach((key) => {
        movieObservable[key] = searchResults.data[key];
      });
    });
  return movieObservable;
};
