import Blogs from "../../../component/Blogs/Blogs";
import JoinUsSection from "../../../component/JoinUsSection/JoinUsSection";
import NewArrival from "../../../component/NewArrival/NewArrival";
import ToySection from "../../../component/ToySection/Toysection";
import Discount from "../../Discount/Discount";
import About from "../About/About";
// import AllToys from "../AllToys/AllToy/AllToys";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Gallery></Gallery>
            <ToySection/>
            <NewArrival/>
            <JoinUsSection/>
            <Discount></Discount>
            <Blogs/>
            {/* <AllToys></AllToys> */}
        </div>
    );
};

export default Home;