import store from "../app/redux/store";
import AdachiSentos from "./AdachiSentos/AdachiSentos";
import { adachiSelected } from "../app/redux/features/区s/adachi";

export default function SearchKu() {
  const handleAdachiSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(adachiSelected());
    if (event.target.checked) {
    }
  };
  return (
    <div>
      <p className="text-red-950 text-center">Search by Tokyo Ward:</p>
      <form className="text-base font-semibold leading-7 text-gray-900 text-center">
        <input
          type="checkbox"
          name="adachi"
          id="adachi"
          onChange={handleAdachiSelected}
        ></input>
        <label className="mr-4">Adachi</label>
        <input type="checkbox" name="arakawa" id="arakawa"></input>
        <label className="mr-4">Arakawa</label>
        <input type="checkbox" name="bunkyo" id="bunkyo"></input>
        <label className="mr-4">Bunkyo</label>
        <input type="checkbox" name="chiyoda" id="chiyoda"></input>
        <label className="mr-4">Chiyoda</label>
        <input type="checkbox" name="chuo" id="chuo"></input>
        <label className="mr-4">Chuo</label>
        <input type="checkbox" name="edogawa" id="edogawa"></input>
        <label className="mr-4">Edogawa</label>
        <input type="checkbox" name="itabashi" id="itabashi"></input>
        <label className="mr-4">Itabashi</label>
        <input type="checkbox" name="katsushika" id="katsushika"></input>
        <label className="mr-4">Katsushika</label>
        <input type="checkbox" name="kita" id="kita"></input>
        <label className="mr-4">Kita</label>
        <input type="checkbox" name="koto" id="koto"></input>
        <label className="mr-4">Koto</label>
        <input type="checkbox" name="minato" id="minato"></input>
        <label className="mr-4">Minato</label>
        <input type="checkbox" name="meguro" id="meguro"></input>
        <label className="mr-4">Meguro</label>
        <input type="checkbox" name="nakano" id="nakano"></input>
        <label className="mr-4">Nakano</label>
        <input type="checkbox" name="nerima" id="nerima"></input>
        <label className="mr-4">Nerima</label>
        <input type="checkbox" name="ota" id="ota"></input>
        <label className="mr-4">Ota</label>
        <input type="checkbox" name="setagaya" id="setagaya"></input>
        <label className="mr-4">Setagaya</label>
        <input type="checkbox" name="shibuya" id="shibuya"></input>
        <label className="mr-4">Shibuya</label>
        <input type="checkbox" name="shinagawa" id="shinagawa"></input>
        <label className="mr-4">Shinagawa</label>
        <input type="checkbox" name="shinjuku" id="shinjuku"></input>
        <label className="mr-4">Shinjuku</label>
        <input type="checkbox" name="suginami" id="suginami"></input>
        <label className="mr-4">Suginami</label>
        <input type="checkbox" name="sumida" id="sumida"></input>
        <label className="mr-4">Sumida</label>
        <input type="checkbox" name="taito" id="taito"></input>
        <label className="mr-4">Taito</label>
        <input type="checkbox" name="toshima" id="toshima"></input>
        <label className="mr-4">Toshima</label>
      </form>
    </div>
  );
}
