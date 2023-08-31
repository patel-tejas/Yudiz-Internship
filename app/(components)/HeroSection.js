"use client";
import Link from "next/link";
import React from "react";
import uuid from "react-uuid";
import { useRouter } from "next/navigation";
const HeroSection = () => {
  const router = useRouter();
  const createForm = () => {
    const id = uuid();
    router.push(`/create-form/${id}`);
  };
  // const router = useRouter();
;
  return (
    <div>

    <div  className="  flex flex-col mt-[22px] items-center justify-center space-y-0">
        <div className="flex pb-[2%] max-[480px]:text-[70%] text-center">
          <h1 className="flex flex-row animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-[300%] text-black font-bold max-[700px]:text-[200%]">
            Welcome to <div className="text-[#a154ad] ">Yudiz Forms</div>
          </h1>
        </div>
  
      <div className="max-[700px]:pr-[90%] flex pr-[60%] text-[220%] font-bold text-[#8f429b] top-[10px] right-[50px] bottom-[10px] left-[10px] floating ">“</div>
      <div className=" flex flex-col max-[700px]:w-[85%] max-[700px]:text-[100%] max-[400px]:text-[90%] text-[110%] w-[55%] font-bold  text-center text-[#1c395f]    ">
        <p className="">Welcome to our Form Generator Company, where simplicity meets sophistication. We specialize in crafting user-friendly, customizable forms that effortlessly collect and organize data. Our intuitive platform empowers you to create surveys, feedback forms, and more, all with a seamless user experience. With sleek designs and robust functionalities, we transform your ideas into interactive forms that drive engagement and capture invaluable insights. Experience the ease of data collection and the power of informed decision-making with our Form Generator Company.</p>
        {/* <p className="mix-[330px]:hidden hidden">Welcome to our Form Generator Company, where simplicity meets sophistication. We specialize in crafting user-friendly, customizable forms that effortlessly collect and organize data. Our intuitive platform empowers you to create surveys, feedback forms, and more, all with a seamless user experience.</p> */}
      <div className="flex pl-[94%] text-[220%] font-bold text-[#8f429b] top-[10px] right-[50px] bottom-[10px] left-[10px] floating1">”</div>
      </div>
      </div>
        <div className="px-3 w-full  mt-8 ">
      <button
        className="w-max border-[0.1px] border-white drop-shadow-lg	btn-primarytext-white bg-[#de84dbe1] hover:font-bold hover:bg-[#e77ae4e9] px-3 py-2 rounded-full block m-auto animate-bounce duration-300"
        onClick={createForm}
      >
        Create Form <b>+</b>
      </button>
    </div>
    </div>
  );
};

export default HeroSection;
