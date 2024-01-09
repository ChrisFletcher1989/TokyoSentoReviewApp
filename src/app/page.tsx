"use client";
import SearchKu from "../components/searchKu";
import { Provider } from "react-redux";
import store from "./redux/store";

//APP SKELETON
//Add components for each 区 and allow users to selected 区s to search by
//Create a global state for each 区 in a redux store. When 区 is selected it changes to that state
//Fetch appropriate sentos from DM and algorithm orders them in an array before rendering
//Loading screen/skeleton is needed (and loading state)
//The 区 state renders the list of sento's reviewed and not reviewed in order of highest rank (out of 5 stars) followed by number of reviews if rank is a tie.
//It displayes info such as distance from nearest station, facilities available etc (pending).
//Users can press a "report closed down" button if they notice the sento no longer exists
//Each Sento has a review button which allows users to login/create an account and review
//Therefore a seperate login and register page is needed + redux states
//Review page diplays a disclaimer page before asking them their score out of 5, and any comments

export default function Home() {
  return (
    <div>
      <Provider store={store}>
        <div>
          <h1 className="text-red-950 text-center">
            Tokyo Sento Review Kuchikomi Site
          </h1>
          <p>
            Introductionary text Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <SearchKu />
      </Provider>
    </div>
  );
}
