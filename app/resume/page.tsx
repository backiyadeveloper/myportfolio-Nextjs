"use client";

export default function ResumePage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/backiyalakshmi _resume.pdf";   // file inside /public
    link.download = "Backiya_Resume.pdf"; // name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
    <div className="flex justify-center h-auto "> 
        <div className="bg-[url('/resume.png')] min-w-300 min-h-400 bg-no-repeat shadow-xl -mt-20"></div>
      </div>
  </div>
  )
}
