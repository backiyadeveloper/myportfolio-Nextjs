import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
    return (
      <div className="mb-10">
        <div className=" flex md:flex-row items-center justify-around gap-5 p-10 bg-sky-500 text-gray-50 sm:flex-col leading-20">
          <div className="h-[300px] w-[500px] bg-[url('/tools.webp')] bg-cover bg-center"></div>
          <div className=" sm:w-125 text-justify">
              <p className="text-2xl font-extralight italic">Hello,my name is</p>
              <h1 className="text-5xl italic">R.Backiyalakshmi</h1>
              <p className="text-lg font-semibold">I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps.Want to know how I may help your project? Check out my project case studies and resume. </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-justify mx-20 my-10">
          <h1>Skills Overview</h1>
          <p>I have more than 1 years' experience building rich web applications for clients all over the world. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience? </p>
          <Link href="/resume" className="text-sky-800 underline">Check out my online resume.</Link>
        </div>

        <div className="flex gap-15  flex-col items-center md:flex-row md:justify-evenly sm:flex-col md:gap-5 sm:gap-15 mt-20 sm:items-center">
          <div className="relative">
            <div className="shadow-xl rounded-full bg-gray-500 h-[90] w-[90] flex justify-center items-center absolute absolute -top-11 left-1/3">
              <div className=" h-[60px] w-[60px] bg-[url('/frontend.png')] bg-cover bg-center "></div>
            </div>
            <div className="bg-gray-100 min-w-70 md:basis-60  md:min-w-60 p-15 sm:min-w-80 border-rounded shadow-lg rounded-xl">
              <h2 className="text-center">Frontend</h2>
              <p className="flex gap-2"><img src="/check.png" alt="" className="h-4 w-4 self-center"/>Reactjs,redux</p>
              <p className="flex gap-2"><img src="/check.png" alt="" className="h-4 w-4 self-center"/>Javascript</p>
              <p className="flex gap-2"><img src="/check.png" alt="" className="h-4 w-4 self-center"/>Nextjs</p>
              <p className="flex gap-2"><img src="/check.png" alt="" className="h-4 w-4 self-center"/>Html,Css</p>
              <p className="flex gap-2"><img src="/check.png" alt="" className="h-4 w-4 self-center"/>Bootstrap,Tailwid</p>
            </div>
          </div>
          <div className="relative">
            <div className="shadow-xl rounded-full bg-gray-500 h-[90] w-[90] flex justify-center items-center absolute absolute -top-11 left-1/3">
              <div className=" h-[60px] w-[60px] bg-[url('/backend.png')] bg-cover bg-center "></div>
            </div>
            <div className="bg-gray-100 min-w-70 md:basis-60  md:min-w-60 p-15 sm:min-w-80 border-rounded shadow-lg rounded-xl">
              <h2 className="text-center">Backend</h2>
              <p className="flex gap-2"><img src="/check.png" alt="" className="h-4 w-4 self-center"/>Java</p>
              <p className="flex gap-2"><img src="/check.png" alt="" className="h-4 w-4 self-center"/>Jdbc</p>
              <p className="flex gap-2"><img src="/check.png" alt="" className="h-4 w-4 self-center"/>Spring</p>
              <p className="flex gap-2"><img src="/check.png" alt="" className="h-4 w-4 self-center"/>Nodejs</p>
              <p className="flex gap-2"><img src="/check.png" alt="" className="h-4 w-4 self-center"/>Expressjs</p>
            </div>
          </div>
          <div className="relative">
            <div className="shadow-xl rounded-full bg-gray-500 h-[90] w-[90] flex justify-center items-center absolute absolute -top-11 left-1/3">
              <div className=" h-[60px] w-[60px] bg-[url('/db.png')]  bg-cover bg-center "></div>
            </div>
            <div className="bg-gray-100 min-w-70 md:basis-60  md:min-w-60 p-15 sm:min-w-80 border-rounded shadow-lg rounded-xl">
              <h3 className="text-center">Database</h3>
              <p className="flex gap-2"><img src="/check.png" alt="" className="h-4 w-4 self-center"/>sql</p>
              <p className="flex gap-2"><img src="/check.png" alt="" className="h-4 w-4 self-center"/>psql</p>
              <p className="flex gap-2"><img src="/check.png" alt="" className="h-4 w-4 self-center"/>mysql</p>
              <p className="flex gap-2"><img src="/check.png" alt="" className="h-4 w-4 self-center"/>MongoDb</p>
              <p className="flex gap-2"><img src="/check.png" alt="" className="h-4 w-4 self-center"/>nosql</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  