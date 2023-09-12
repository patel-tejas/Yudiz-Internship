import React from "react";
import Image from "next/image";
import logo from "./images/logo.png";
import logo1 from "./images/logo1.png";
import Account from "./images/Ac.png";
import Link from "next/link";

const Navbar = () => {
return (
    <header className="text-gray-600 body-font bg:white  navbar-fixed  sticky z-10 top-[0.1px] ">
      <nav className="backdrop-filter backdrop-blur after:absolute after:inset-x-0 after:w-full after:h-12 after:shadow-hr after:z-[-1] mx-auto flex   p-[20px] bg flex-row justify-between max-[650px]:justify-between items-center ">
        
        <div className="dropdown inline-block p-4 cursor-pointer min-[650px]:hidden ">
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          </div>
          
{/* <Link href="/"> */}
<Image    href="/"
          src={logo}
          className="mix-blend-multiply  cursor-pointer h-[12%] w-[18%] max-[650px]:w-[38%] max-[650px]:h-[32%] "
          width={10000}
          height={10000}
          alt="Picture of the Logo"
        />
{/* </Link> */}
        <div className=" text-black flex gap-6 items-center justify-center max-[1200px]:me-[4%] max-[1000px]:me-[2%] max-[800px]:me-[0%] me-[6%] max-[650px]:hidden">
          <Link href="/" className="hover:text-[#353a47] text-[20px] relative after:bg-[#7E4684] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            Home
          </Link>
          <Link href="/about"  className="hover:text-[#353a47]  text-[20px] relative after:bg-[#7E4684] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#353a47]  text-[20px] relative after:bg-[#7E4684] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            Contact
          </Link>
        </div>
{/* 
        <div className="flex flex-row gap-2 items-center ">
          <div className="max-[650px]:hidden flex felx-row gap-1">
            <label
              htmlFor="toggle"
              className="hover:border-y-emerald-950 cursor-pointer s"
            >
              Dark
            </label>
            <div className="flex justify-center items-center ">
              <div className="relative inline-block w-10 mr-3 align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer dark:border-gray-800"
                />
                <label
                  htmlFor="toggle"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer dark:bg-gray-800"
                ></label>
              </div>
            </div>
          </div> */}
          <div className="flex flex-row gap-2 items-center">
          <div className=" cursor-pointer gap-1 max-[650px]:hidden text-[110%]">
            User_Name
          </div>
          {/* <div> */}
          <Image
            src={Account}
            className=" cursor-pointer h-[22px] w-[24px] md:h-[32px] md:w-[32px]   "
            width={500}
            height={500}
            alt="Picture of the acount"
          />
          {/* </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
