import Link from "next/link"

export default function ContactPage() {
  return (
    <div>
      <div className="h-40 bg-sky-500  pt-10 pl-10">
        <div className=" text-gray-50 text-5xl font-bold">Contact</div>
      </div>
      <div className="flex justify-center ">
        <div className="mt-10 basis-200 shadow-lg p-20 rounded-full">
          <p>
            I'm currently workine Sofware Engineer on ATDXT private limited. If you are interested in hiring me for your project please use the form below to get in touch. Want to know how I work and what I can offer? Check out my <Link className="text-sky-500" href="/project"> project case studies</Link> and <Link className="text-sky-500" href="/resume"> resume</Link>.
          </p>
          <div className="flex gap-5 justify-center mt-5">
            <Link href="https://github.com/backiyadeveloper" target="_blank"><img src="/github.webp" className="w-10 h-10" alt="" /></Link>
            <Link href="https://www.linkedin.com/in/backiya-lakshmi-a21158279/" target="_blank"><img src="/linkedin.png" className="w-10 h-10" alt="" /></Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-10 ">
        <div className="basis-180 rounded-xl shadow-xl p-10">
          <h2 className="text-center text-lg p-10">Get In Touch</h2>
          <div>
            <form action="">
              <div className="flex sm:flex-row flex-col gap-5">
              <input className="border-2 px-5 py-1 sm:basis-90 rounded-xl outline-none" type="text" placeholder="Name" />
              <input className="border-2 px-5 py-1 sm:basis-90 rounded-xl outline-none" type="text" placeholder="Email" />
              </div>
              <div className="flex ">
                <textarea
                  className="basis-180 px-5 mt-10 border-2 py-1 rounded-xl outline-none"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="flex mt-10">
              <button className="bg-sky-500 basis-180 rounded-full p-2 text-white text-lg ">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}