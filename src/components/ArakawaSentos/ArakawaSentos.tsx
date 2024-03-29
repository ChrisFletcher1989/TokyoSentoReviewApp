import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSentos } from "../../app/redux/features/searchResults";
import type { RootState } from "../../app/redux/store";

const arakawaDB = [
  {
    name: "AraYuu",
    rating: 2.3,
    station: "2 minutes from Minami-Senju",
    address: "Senju 3-3-10-2",
  },
  {
    name: "maiyuu",
    rating: 4.9,
    station: "9 minutes from Arakawa",
    address: "Arakawa-3-3-3",
  },
  {
    name: "how are yuu",
    rating: 3.7,
    station: "Nippori",
    address: "Nippor 4-5-8",
  },
  {
    name: "Teikoku-yu",
    rating: 4.0,
    station: "Nippori",
    address: "Yanaka 1-2-4",
  },
  {
    name: "After-yu",
    rating: 3.5,
    station: "Minami-Senju",
    address: "Minami-Senju 7-2-1",
  },
];

function ArakawaSentos() {
  const dispatch = useDispatch();
  const isArakawaSelected = useSelector((state: RootState) => state.arakawa);
  const searchResults = useSelector((state: RootState) => state.searchResults);

  useEffect(() => {
    if (isArakawaSelected) {
      dispatch(addSentos(arakawaDB));
      console.log("Search results updated:", searchResults);
    }
  }, [isArakawaSelected]);

  return null;
}

export default ArakawaSentos;
