import { IoLanguageSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="sm:w-full sm:px-32 px-4  sm:h-screen h-[560px]   text-white  bg-[url('/img/bg-1.jpg')]">
        <div className="flex justify-between">
        <div>
          <img
            src="img/logo.png"
            alt=""
            className="sm:mt-0 mt-4  sm:h-20 h-12"
          />
        </div>

        <div className=" h-16 flex w-fit">
          <button className="border-[1px] sm:py-2 py-1 sm:h-10 h-9  mt-5 px-3 flex sm:mr-6 mr-3 gap-2   rounded-md ">
            <IoLanguageSharp className="mt-1" />
            <span className="sm:block hidden">English </span>
            <FaCaretDown className="mt-1" />
          </button>
          <button className="border-2 border-[red] sm:h-10 h-9  py-1 mt-5 px-3 bg-[red] rounded-md">
            Sign in
          </button>
        </div>
        </div>
        <div>
          <h1 className="sm:text-[45px]  text-[30px] font-extrabold text-center sm:mt-[140px] mt-[70px]">The biggest Indian hits. The best Indian stories. All streaming here.</h1>
          <p className="sm:text-[25px] text-[18px] sm:mt-6 sm:my-0 my-5 text-center ">Watch anywhere. Cancel anytime.</p>
          <p className="sm:text-[20px] text-[18px] sm:mt-6 sm:px-0 px-7  text-center ">Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        <div>
          <input type="text" placeholder="Email address" className="sm:h-14 h-12 bg-transparent border sm:w-96 w-80  ml-7 px-3 sm:ml-[210px]  sm:mt-4 mt-2 rounded"/>
          
          <a href="www.youtube.com/@AnujRana-13-7"><button className="sm:px-16 px-12 sm:ml-2 sm:h-14 h-12 rounded ml-24 sm:mt-0 mt-3 bg-[red]">Get Started</button></a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
