"use client";
import Link from "next/link"
import emailjs from "emailjs-com";


export default function ContactPage() {
  function sendEmail(e:any) {
    e.preventDefault();

    emailjs.sendForm(
      "service_nuz39yn",   // from EmailJS dashboard
      "template_3imo3r8",  // email template
      e.target,
      "joNiGX9zJe6ECEVnn"    // public key
    ).then(
      (result) => {
        alert("Message Sent!");
      },
      (error) => {
        alert("Failed to send: " + error.text);
      }
    );
  } 

  return (
    <div>
      <div className="animate-[rainbow_5s_infinite] h-40 bg-sky-500  pt-10 pl-10">
        <div className=" text-gray-50 text-5xl font-bold">Contact</div>
      </div>
      <div className="flex justify-center ">
        <div className="mt-10 basis-200 shadow-lg p-20 rounded-full">
          <p>
            I am a Software Engineer with experience in developing web applications and user-friendly interfaces. I specialize in HTML, CSS, JavaScript, ReactJS, Java, and Spring Boot.
            <br/>
          If you are interested in hiring me for your project, please use the form below to get in touch. Want to know how I work and what I can offer?Check out my <Link className="text-sky-500" href="/project"> project case studies</Link> and <Link className="text-sky-500" href="/resume"> resume</Link>.
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
            <form action="" onSubmit={sendEmail}>
              <div className="flex sm:flex-row flex-col gap-5">
                <input type="text" name="name" className="border-2 px-5 py-1 sm:basis-90 rounded-xl outline-none"  placeholder="Name" />
                <input type="email" name="email" className="border-2 px-5 py-1 sm:basis-90 rounded-xl outline-none"  placeholder="Email" />
              </div>
              <div className="flex ">
                <textarea name="message"
                  className="basis-180 px-5 mt-10 border-2 py-1 rounded-xl outline-none"
                  placeholder="Message">
                </textarea>
              </div>
              <div className="flex mt-10">
                <button type="submit" className="bg-sky-500 basis-180 rounded-full p-2 text-white text-lg ">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}