import moment from "moment";
import logo from "../assets/logo.png";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="flex flex-col  items-center pt-8 text-gray-500">
      <img src={logo} alt="" />
      <h2 className="mt-2">Journalism Without Fear and Favour</h2>
      <p className="mb-2 font-semibold">
        {moment().format("dddd, MMMM Do YYYY")}
      </p>
      <div className="flex items-center bg-gray-200 p-2 mb-2">
        <p className="bg-red-600 py-1 px-4 text-white mr-3">Latest</p>
        
          <Marquee pauseOnHover={true} direction="right" className="space-x-8">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Adipisci, incidunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Adipisci, incidunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Adipisci, incidunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Adipisci, incidunt.
            </p>
          </Marquee>
        
      </div>
    </div>
  );
};

export default Header;
