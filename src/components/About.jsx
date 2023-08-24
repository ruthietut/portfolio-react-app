const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 ">
            <p className="text-4xl font-bold inline border-b-4 border-purple-500">
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className=" max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>{"Hi, I'm Ruth, a frontend developer who's all about crafting immersive digital experiences."}</p>
            </div>
            <div>
                <p className="text-lg" >My goal is to bridge the gap between design and functionality. I thrive on collaborating with designers to bring their visions to life, ensuring that user interfaces are not only visually appealing but also intuitive and seamless. My journey in the world of web development is driven by a passion for creating user-friendly and visually stunning interfaces.</p>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default About;
