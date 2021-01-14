import { useParams } from 'react-router-dom';
import { useMovieObservable } from '../useMovie';
import { MovieCard } from '../components/movie-card';

export const MovieDetail = () => {
  const { id } = useParams();
  const movie = useMovieObservable(id);
  return <MovieCard movie={movie} />;
};
