import { MovieSearchResultRow } from '../components/movie-search-result';
import { MockSearchResults } from '../mock-api-response';

export const Library = () => {
  const library = MockSearchResults.Search;
  const initialList = library || [];
  const searchResults = initialList.map((movie, index) => {
    return <MovieSearchResultRow key={index} movie={movie} />;
  });
  return (
    <>
      <nav className="sticky bg-coolGray-200 m-2 max-w-md mx-auto dark:bg-coolGray-700 rounded-xl shadow-md overflow-hidden">
        <div className="flex pt-2 pb-2 ">
          <input className="ml-2 mr-2 w-full rounded text-2xl" />
        </div>
      </nav>
      {searchResults}
    </>
  );
};
