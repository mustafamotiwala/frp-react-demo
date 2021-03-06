import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

export const MovieSearchResultRow = observer(({ movie }) => {
  const history = useHistory();

  const viewMovieDetails = () => {
    history.push(`/movie/${movie.imdbID}`);
  };

  return (
    <div
      onClick={viewMovieDetails}
      className="m-2 max-w-md mx-auto dark:bg-coolGray-700 rounded-xl shadow-md overflow-hidden cursor-pointer"
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-28 md:pl-2 w-full md:w-auto object-cover object-top md:object-scale-down "
            src={movie.Poster}
            alt={'Poster for movie'}
          />
        </div>
        <div className="p-4">
          <h3 className="uppercase tracking-wide text-2xl dark:text-amber-600 text-coolGray-700 font-semibold">
            {movie.Title}
          </h3>
          <p className="mt-2 text-coolGray-700 dark:text-cyan-400">{movie.Year}</p>
        </div>
      </div>
    </div>
  );
});
