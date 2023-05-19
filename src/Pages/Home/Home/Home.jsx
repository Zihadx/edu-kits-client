import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div className="px-4 md:px-24">
            <h2 className="text-5xl">this is home</h2>
            <Banner></Banner>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;