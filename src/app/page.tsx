import SearchKu from "../components/searchKu";

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
      <div>
        <h1 className="text-red-950 text-center">
          Tokyo Sento Review Kuchikomi Site
        </h1>
      </div>
      <SearchKu />
    </div>
  );
}
