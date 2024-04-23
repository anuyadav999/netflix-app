import { useDispatch } from "react-redux";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "./utils/constants";
import { changeLanguagePreference } from "./utils/appConfigSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleLanguageSelect = (e) => {
    dispatch(changeLanguagePreference(e.target.value));
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 justify-between flex">
      <img className="w-44" alt="Logo" src={LOGO_URL} />
      <div>
        <select
          className="p-3 m-3 bg-red-600 text-white"
          onChange={handleLanguageSelect}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
