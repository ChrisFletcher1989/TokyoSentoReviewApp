import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSentos } from "../../app/redux/features/searchResults";
import type { RootState } from "../../app/redux/store";

const adachiDB = [
  {
    name: "HeiYu",
    rating: 4.7,
    station: "5 minutes from Rokuchyo",
    address: "rokucho 3-3-10-2",
  },
  {
    name: "yutopia",
    rating: 3.8,
    station: "5 minutes from Kameari",
    address: "Kameari-3-3-3",
  },
  {
    name: "FujinoYu",
    rating: 3.5,
    station: "1 minute from Ayase",
    address: "Ayase-3-31-3",
  },
  {
    name: "empty",
  },
    {
    name: "empty",
  },
];

function AdachiSentos() {
  const dispatch = useDispatch();
  const isAdachiSelected = useSelector((state: RootState) => state.adachi);
  const searchResults = useSelector((state: RootState) => state.searchResults);

  useEffect(() => {
    if (isAdachiSelected) {
      dispatch(addSentos(adachiDB));
      console.log("Search results updated:", searchResults);
    }
  }, [isAdachiSelected]);

  return null;
}

export default AdachiSentos;
