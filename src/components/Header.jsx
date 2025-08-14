import moment from "moment";
import logo from "../assets/logo.png";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col  items-center pt-8 text-gray-500">
      <img src={logo} alt="" />
      <h2 className="mt-2">Journalism Without Fear and Favour</h2>
      <p className="mb-2 font-semibold">
        {moment().format("dddd, MMMM Do YYYY")}
      </p>
      <div className="flex items-center w-full md:w-full lg:w-full bg-gray-100 p-2 mb-2">
        <p className="bg-[#d72050] py-1 px-4 text-white mr-3">Latest</p>
        
          <Marquee pauseOnHover={true} direction="right" className="space-x-8">
            <Link to={'/'}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Adipisci, incidunt.
            </Link>
            <Link to={'/'}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Adipisci, incidunt.
            </Link>
            <Link to={'/'}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Adipisci, incidunt.
            </Link>
            <Link to={'/'}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Adipisci, incidunt.
            </Link>
            
          </Marquee>
        
      </div>
    </div>
  );
};

export default Header;
