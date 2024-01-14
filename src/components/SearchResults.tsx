import type { RootState } from "../app/redux/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function SearchResults() {
  let searchResultsArray: any = [];
  searchResultsArray.push(
    useSelector((state: RootState) => state.searchResults)
  );

  const [arrayOfSentos, setArrayOfSentos] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (searchResultsArray !== null) {
      console.log("THE ARRAY", searchResultsArray);
      for (let i = 0; i < searchResultsArray[0].searchResults.length / 3; i++) {
        console.log(i);
        arrayOfSentos.push(
          <div>
            <p className="text-xl text-emerald-500">
              Name: {searchResultsArray[0].searchResults[i].name}
            </p>
            <p>Rating: {searchResultsArray[0].searchResults[i].rating}</p>
            <p>
              Nearest Station: {searchResultsArray[0].searchResults[i].station}
            </p>
            <p className="pb-5">
              Address: {searchResultsArray[0].searchResults[i].address}
            </p>
          </div>
        );
      }
    }
  }, [searchResultsArray]);

  return <div>{arrayOfSentos}</div>;
}

export default SearchResults;
