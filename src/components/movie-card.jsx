/**
 * Component to render a movie as a card.
 * @param movie
 * @returns {JSX.Element}
 * @constructor
 */
export const MovieCard = ({ movie }) => {
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
};

export const exampleMovie = {
  Title: 'Batman',
  Year: '1989',
  Rated: 'PG-13',
  Released: '23 Jun 1989',
  Runtime: '126 min',
  Genre: 'Action, Adventure',
  Director: 'Tim Burton',
  Writer: 'Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)',
  Actors: 'Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl',
  Plot:
    'The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.',
  Language: 'English, French, Spanish',
  Country: 'USA, UK',
  Awards: 'Won 1 Oscar. Another 7 wins & 26 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg',
  Ratings: [
    {
      Source: 'Internet Movie Database',
      Value: '7.5/10',
    },
    {
      Source: 'Rotten Tomatoes',
      Value: '71%',
    },
    {
      Source: 'Metacritic',
      Value: '69/100',
    },
  ],
  Metascore: '69',
  imdbRating: '7.5',
  imdbVotes: '337,623',
  imdbID: 'tt0096895',
  Type: 'movie',
  DVD: 'N/A',
  BoxOffice: '$251,348,343',
  Production: 'Warner Brothers, PolyGram Filmed Entertainment, Guber-Peters Company',
  Website: 'N/A',
  Response: 'True',
};
