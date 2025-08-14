import fb from "../assets/fb.png";
import x from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

const FindUs = () => {
  return (
    <div className="mt-6">
      <h2 className="font-semibold text-gray-700">Find Us On</h2>
      <div className="join join-vertical flex gap-1 my-4">
        <button className="btn join-item btn-outline justify-start"><img src={fb} alt="" /> Facebook</button>
        <button className="btn join-item btn-outline justify-start"><img src={x} alt="" /> Twitter</button>
        <button className="btn join-item btn-outline justify-start"><img src={instagram} alt="" /> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
