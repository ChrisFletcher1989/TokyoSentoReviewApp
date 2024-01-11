import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import store from "../../app/redux/store";
import { addSentos } from "../../app/redux/features/searchResults";
import { adachiReducer } from "../../app/redux/features/区s/adachi";
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
];

function AdachiSentos() {
  const dispatch = useDispatch();
  const isAdachiSelected = useSelector((state: RootState) => state.adachi);

  useEffect(() => {
    if (isAdachiSelected) {
      dispatch(addSentos(adachiDB));
      console.log("Search results updated:");
    }
  }, [isAdachiSelected, dispatch]);

  return null;
}

export default AdachiSentos;
