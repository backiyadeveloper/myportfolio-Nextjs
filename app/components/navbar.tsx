
import Link from "next/link";

export default function Navebar() {
  return (
    <div>
      <nav className="bg-sky-800 text-gray-50 flex gap-5 justify-end items-center px-5 h-15">
        <Link href="/" className="link-underline">Home</Link>
        <Link href="/project" className="link-underline">Projects</Link>
        <Link href="/resume" className="link-underline">Resume</Link>
        <Link href="/contact" className="link-underline">Contact</Link>
      </nav>
    </div>
  );
}
