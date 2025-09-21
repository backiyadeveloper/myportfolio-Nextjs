import Link from "next/link"

export default function Footer(){
    return(
        <div className="">
             <footer className="bg-sky-800 text-gray-50 place-items-center grid grid-cols-[50rem] justify-center text-justify text-center py-4 mt-10">
                <div className="text-center">Interested in hiring me for your project?</div>
                <div className="">Looking for an experienced full-stack developer to build your web app ? To start an initial chat, just drop me an email at backiya3011@gmail.com or use the form on the contact page.
                </div>
                <button className="rounded-full bg-sky-500 px-5 shadow-xl/20"><Link href="/contact"></Link>Let's Talk</button>
            </footer>
        </div>
    )
}