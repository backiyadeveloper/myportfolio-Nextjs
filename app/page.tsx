import Image from "next/image";

export default function HomePage() {
    return (
      <div className=" flex md:flex-row items-center justify-around gap-5 p-10 bg-sky-500 text-gray-50 sm:flex-col leading-20">
        {/* <div className="h-50"> */}
        <div className="h-[300px] w-[500px] bg-[url('/tools.webp')] bg-cover bg-center">
                            {/* <img src="/tools.webp" alt="" /> */}
            </div>
        {/* </div> */}
        <div className=" w-100 text-justify">
            <p className="text-2xl font-extralight italic">Hello,my name is</p>
            <h1 className="text-5xl italic">R.Backiyalakshmi</h1>
            <p className="text-lg font-semibold">I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps.Want to know how I may help your project? Check out my project case studies and resume. </p>
        </div>
      </div>
    );
  }
  