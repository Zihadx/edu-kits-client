import Discount from "../../Discount/Discount";
import About from "../About/About";
// import AllToys from "../AllToys/AllToy/AllToys";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div className="px-4 md:px-24">
            <Banner></Banner>
            <About></About>
            <Gallery></Gallery>
            <Discount></Discount>
            {/* <AllToys></AllToys> */}
        </div>
    );
};

export default Home;