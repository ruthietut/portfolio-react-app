// import React from 'react'
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";
import Project5 from "../assets/project5.png";
import Project6 from "../assets/project6.png";
import Project7 from "../assets/project7.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-purple-500">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* projects grid */}

          <div
            style={{ backgroundImage: `url(${Project2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div">
            {/*hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white px-2 tracking-wider">
                JavaScript Application
              </span>
              <p className="flex px-4 text-white ">
                {" "}
                {
                  "This app checks a phone number's network provider, returns its name, and displays the logo."
                }
              </p>
              <div className="pt-5 text-center">
                <a href="https://topgs.repl.co/" className="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    demo
                  </button>
                </a>
                <a href="https://github.com/ruthietut/TopGs" className="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Project3})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div">
            {/*hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React js application
              </span>

              <div className="pt-8 text-center">
                <a href="" className="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    demo
                  </button>
                </a>
                <a href="" className="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Project4})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div">
            {/*hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white px-2 tracking-wider">
                React js application
              </span>
              <p className="flex px-4 text-white ">
                {
                  "App features: Nested routes, fake authentication, SEO, and seamless navigation. Enjoy exploring!"
                }
              </p>
              <div className="pt-5 text-center">
                <a
                  href="https://altschool-second-semester.web.app/"
                  className="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    demo
                  </button>
                </a>
                <a
                  href="https://github.com/ruthietut/Altschool-second-semester-exam"
                  className="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Project5})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div">
            {/*hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white px-2 tracking-wider">
                TypeScript Application
              </span>
              <p className="flex px-4 text-white ">
                {
                  "Collaboratively built app: Shortens long URLs, provides short link, and enables copying to clipboard."
                }
              </p>
              <div className="pt-5 text-center">
                <a
                  href="https://altschool-capstone-project-scissors.vercel.app/"
                  className="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    demo
                  </button>
                </a>
                <a
                  href="https://github.com/ruthietut/Altschool-capstone-project"
                  className="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Project6})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div">
            {/*hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white px-2 tracking-wider">
                React js Application
              </span>
              <p className="flex px-3 text-white ">
                {
                  "In progress: Revolutionizing vehicle document management for owners. User-friendly and efficient, it streamlines interactions with licensing offices."
                }
              </p>
              <div className="pt-5 text-center">
                <a href="https://autodocuments.vercel.app/" className="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    demo
                  </button>
                </a>
                <a
                  href="https://github.com/ruthietut/autodocuments"
                  className="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Project7})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div">
            {/*hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white px-4 tracking-wider">
                Vue js Application
              </span>
              <p className="flex px-4 text-white ">
                {
                  "The Counter App showcases Vue.js, demonstrating an interactive UI with a dynamic counter."
                }
              </p>
              <div className="pt-5 text-center">
                <a href="https://ruthiecounterapp.netlify.app/" className="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    demo
                  </button>
                </a>
                <a
                  href="https://github.com/ruthietut/counter-3rd-semester-exam"
                  className="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
