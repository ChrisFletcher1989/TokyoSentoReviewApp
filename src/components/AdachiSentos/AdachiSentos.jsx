import store from "../../app/redux/store";
import { addSentos } from "../../app/redux/features/searchResults";

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
  adachiIchiran = () => {
    if (adachiSelected === true) {
      store.dispatch(addSentos(adachiDB));
    }
  };
}
export default AdachiSentos;
