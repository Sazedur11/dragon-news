import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold text-gray-700">Login with</h2>
            <div className="*:w-full space-y-2 mt-2">
                <button className="btn btn-outline"><FaGoogle></FaGoogle> Login with Google</button>
            <button className="btn btn-outline"><FaGithub></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;