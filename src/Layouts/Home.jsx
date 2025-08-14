import Categores from "../components/layouts-components/Categores";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import RightNavbar from "../components/layouts-components/RightNavbar";

const Home = () => {
    return (
        <div className="bg-white ">
            <header className="w-10/12 mx-auto">
                <Header></Header>
            </header>
            <nav className="w-10/12 mx-auto pb-8">
                <Navbar></Navbar>
            </nav>
            <main className="w-10/12 mx-auto text-gray-800 flex justify-start gap-5">
                <div className="w-3/12">
                    <Categores></Categores>
                </div>
                <div className="w-6/12">
                    <h2>news</h2>
                </div>
                <div className="w-3/12">
                    <RightNavbar></RightNavbar>
                </div>
            </main>
        </div>
    );
};

export default Home;