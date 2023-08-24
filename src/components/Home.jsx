import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f]">
      {/* container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-purple-400">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">
          Ruth Obasi
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          {" I'm a Frontend Developer"}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a frontend developer based in Lagos, Nigeria. I have a passion
          for web development and love to create for web and mobile devices.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-500 hover:border-purple-400">
            <Link to="work" smooth={true} offset={50} duration={500}>
              View Work
            </Link>
            <span className=" group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
