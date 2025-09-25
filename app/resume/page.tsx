"use client";

import { useEffect, useState } from "react";
import {Resume} from "../model/resume"

export default function ResumePage() {
  const [data, setData] = useState<Resume.retrive[]>([]);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/backiyalakshmi _resume.pdf";
    link.download = "Backiya_Resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useEffect(()=>{
    fetchdata();
  })

  async function fetchdata(){
    const data=await fetch("/data/resume.json");
    const resumedata:Resume.retrive[]=await data.json();
    setData(resumedata );
  }
  return (
  <div className="h-auto ">
    <div className="h-55 bg-sky-500  pt-10 pl-10">
    <div className=" text-gray-50 text-5xl font-bold">
      Resume</div>
      <button
        onClick={handleDownload}
        className="px-6 py-3 bg-sky-800 float-end mx-10 text-white rounded-lg shadow hover:bg-sky-600"
      >
        Download Resume
      </button>
    
    </div>
    {/* <div className="flex justify-center h-auto container"> 
        <div className="bg-[url('/resume.png')] min-w-300 min-h-400 bg-no-repeat shadow-xl -mt-20"></div>
      </div> */}
      <div className="m-5 p-10 grid justify-center rounded-xl shadow-lg">      {
        data.map(data=>(
          <div className="" key={data.name}>
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <div className="flex gap-5">
              {data.personaldetails.map(data=>(
                <div key={data}>{data}</div>
              ))}
            </div>
            <div className="border-b-2 text-xl font-bold">{data.summary}</div>
            <div>{data.details}</div>
            <div>
              <div className="border-b-2 text-xl font-bold">{data.Education}</div>
              <div className="flex justify-between">
                <div>{data.clgname}</div>
                <div>{data.year}</div>
              </div>
              <div className="flex justify-between">
                <div>{data.cgpa}</div>
                <div>{data.city}</div>
              </div>
            </div>
            <div className="">
              <div className="border-b-2 text-xl font-bold">{data.skils}</div>
              <div className="flex justify-around mt-5">
              <div>
                <div className="text-base font-bold">{data.skills.frontend}</div>
                <div>
                  {data.skills.feskills.map(data=>(
                    <div key={data}>
                      {data}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-base font-bold">{data.skills.backend}</div>
                <div>
                  {data.skills.beskills.map(data=>(
                    <div key={data}>
                      {data}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-base font-bold">{data.skills.db}</div>
                <div>
                  {data.skills.dbskills.map(data=>(
                    <div key={data}>
                      {data}
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </div>
            <div>
            <div className="border-b-2 text-xl font-bold">{data.ProfessionalExperience}</div>
            <div>
            <div>{data.companyname}</div>
            <div>{data.experience}</div>
            </div>
            <div><div>{data.role}</div>
            <div>{data.workcity}</div>
            </div>
            
            </div>
          </div>
        ))
      }
      </div>
      <div className="underline"></div>
  </div>
  )
}
