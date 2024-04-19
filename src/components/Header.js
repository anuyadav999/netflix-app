import { LOGO_URL } from "./utils/constants";

const Header = () => {
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" alt="Logo" src={LOGO_URL} />
    </div>
  );
};

export default Header;
