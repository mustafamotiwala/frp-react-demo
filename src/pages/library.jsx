import { MovieSearchResultRow } from '../components/movie-search-result';
import { MockSearchResults } from '../mock-api-response';
import axios from 'axios';
import { makeObservable, observable, reaction } from 'mobx';
import { observer } from 'mobx-react-lite';

export const Library = () => {
  const library = makeObservable(
    { Search: [], Response: '', totalResults: 0 },
    { Search: observable, Response: observable, totalResults: observable }
  );

  library.Search = MockSearchResults.Search;

  const search = (event) => {
    const searchString = encodeURIComponent(event.target.value);
    if (event.keyCode === 13) {
      axios
        .get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${searchString}`)
        .then((searchResults) => {
          library.Search = searchResults.data.Search;
          library.Response = searchResults.data.Response;
          library.totalResults = searchResults.data.totalResults;
          console.table(searchResults);
        });
    }
  };
  return (
    <>
      <nav className="sticky bg-coolGray-200 m-2 max-w-md mx-auto dark:bg-coolGray-700 rounded-xl shadow-md overflow-hidden">
        <div className="flex pt-2 pb-2 ">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span>
              <svg
                style={{ width: '24px', height: '24px' }}
                viewBox="0 0 24 24"
                className="fill-current text-coolGray-300"
              >
                <path
                  fill="currentColor"
                  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                />
              </svg>
            </span>
            {/*<span className="text-gray-500 sm:text-sm">$</span>*/}
          </div>
          <input
            id="search"
            placeholder="Search..."
            className="ml-2 mr-2 pl-7 w-full rounded text-2xl focus:ring-2 focus:ring-blue-300 focus:outline-none ring-coolGray-200 ring-2 placeholder-coolGray-300"
            onKeyDown={search}
          />
        </div>
      </nav>
      <SearchResults searchResponse={library} />
    </>
  );
};

const SearchResults = observer(({ searchResponse }) => {
  return searchResponse.Search.map((movie, index) => {
    return <MovieSearchResultRow key={index} movie={movie} />;
  });
});
