/**
 * Component to render a movie as a card.
 * @param movie
 * @returns {JSX.Element}
 * @constructor
 */
import { observer } from 'mobx-react-lite';

export const MovieCard = observer(({ movie }) => {
  return (
    <div className="max-w-md mx-auto dark:bg-coolGray-700 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src="https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
            alt={'Poster for ' + movie.Title}
          />
        </div>
        <div className="p-8 divide-y divide-blue-800 dark:divide-green-500">
          <div className="pb-4">
            <h3 className="uppercase tracking-wide text-2xl dark:text-amber-600 text-coolGray-700 font-semibold">
              {movie.Title}
            </h3>
            <p className="mt-2 text-coolGray-700 dark:text-cyan-400">{movie.Plot}</p>
          </div>
          <div className="pt-4">
            <button className="rounded outline">
              <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
