// import { navLogo } from "./images/more/logo1.png";
const Navbar = () => {
  return (
    // <div className="my-6 bg-[url('./images/more/15.png'),_linear-gradient(#6b7280,_#6b7280)] bg-blend-overlay">
    <div className=" font-rancho bg-[url('./images/more/15.jpg')] bg-blend-overlay py-3 bg-cover bg-center flex items-center justify-center gap-3">
      <img
        src={`./images/more/logo1.png`}
        alt=""
        className="max-w-[65px] max-h-[75px] md:max-h-[90px] md:max-w-[75px]"
      />
      <h1 className="text-4xl md:text-5xl lg:text-[60px] text-white">
        Espresso Emporium
      </h1>
    </div>
  );
};

export default Navbar;
