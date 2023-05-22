import image1 from '../../../assets/Banner/banner1.jpg'
import image2 from '../../../assets/Banner/banner2.jpg'
import image3 from '../../../assets/Banner/banner3.jpg'
import image4 from '../../../assets/Banner/banner4.jpg'
const Banner = () => {
  return (
    <div className="carousel w-full h-[400px] md:h-[640px] mt-12">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image1} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full left-0 rounded-xl right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className="text-white space-y-7 pl-8 md:pl-24">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold">
            We love <br /> creative play
            </h1>
            <p>
              Discover our range of soft play-shapes lovingly made for kids.
            </p>
            <div>
              <button className="btn btn-accent font-bold text-white">
               Shop Now!
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-accent text-white btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full left-0 rounded-xl right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
        <div className="text-white space-y-7 pl-8 md:pl-24">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold">
            We love <br /> creative play
            </h1>
            <p>
              Discover our range of soft play-shapes lovingly made for kids.
            </p>
            <div>
              <button className="btn btn-accent font-bold text-white">
               Shop Now!
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-accent text-white btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full left-0 rounded-xl right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
        <div className="text-white space-y-7 pl-8 md:pl-24">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold">
            We love <br /> creative play
            </h1>
            <p>
              Discover our range of soft play-shapes lovingly made for kids.
            </p>
            <div>
              <button className="btn btn-accent font-bold text-white">
               Shop Now!
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-accent text-white btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full rou" />
        <div className="absolute flex items-center h-full left-0 rounded-xl right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
        <div className="text-white space-y-7 pl-8 md:pl-24">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold">
            We love <br /> creative play
            </h1>
            <p>
              Discover our range of soft play-shapes lovingly made for kids.
            </p>
            <div>
              <button className="btn btn-accent font-bold text-white">
               Shop Now!
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-accent text-white btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
