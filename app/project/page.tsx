"use client";
import { useEffect, useState } from "react"
import {Project} from "../model/project"

export default function ProgectPage() {
  const [projectdata,setProjectdata]=useState<Project.retrive[]>([]);
  useEffect(()=>{
    fetchdata();
    console.log(projectdata)
  },[])
  async function fetchdata(){
     try {
    const response = await fetch("/data/project.json");
    const data: Project.retrive[] = await response.json(); 
    setProjectdata(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  }
  return (
    <div>
      <div className="h-50 bg-sky-500  pt-10 pl-10">
        <div className=" text-gray-50 text-5xl font-bold">Projects</div>
      </div>
    <div className="flex mb-10 flex-col items-center md:flex-row gap-5 md:justify-evenly -mt-20 sm:flex-col sm:items-center">
      {
        projectdata.map((data)=>(
          <div key={data.id} className="md:basis-70 sm:w-70  shadow-lg pb-10 rounded-xl">
            <div className="relative w-70 h-60 overflow-hidden rounded-xl group">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={data.image}
              alt={data.title}
            />
            <div className="absolute bottom-0 left-0 w-full h-0 bg-black/70 text-white flex items-center justify-center 
                            overflow-hidden rounded-xl 
                            transition-all duration-500 ease-in-out 
                            group-hover:h-full">
              <p className="p-4">{data.description}</p>
            </div>
          </div>

            <div>
              <div className="text-center text-lg">{data.title}</div>
              <div className="grid grid-cols-2 gap-1 justify-items-center">
                {data.techStack.map((data,index)=>(
                  <div className=" rounded-xl text-center border-gray-900 bg-gray-500 text-gray-100 px-2 py-1" key={index}>{data}</div>
                ))}
              </div>
            </div>
          </div>
        ))
      }
    </div>
    </div>
  )
}
