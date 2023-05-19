import About from "../About/About";
import AllToys from "../AllToys/AllToy/AllToys";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div className="px-4 md:px-24">
            <Banner></Banner>
            <Gallery></Gallery>
            <About></About>
            <AllToys></AllToys>
        </div>
    );
};

export default Home;