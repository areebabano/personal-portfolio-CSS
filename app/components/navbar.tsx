import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link href="/" className="navbar-link">
          <Image
            src="/home.jpg"
            alt="home icon"
            height={50}
            width={50}
          />
          <span><b><i>Home</i></b></span>
        </Link>
        <Link href="/about" className="navbar-link">
          <Image
            src="/about.jpg"
            alt="about icon"
            height={60}
            width={60}
          />
          <span><b><i>About</i></b></span>
        </Link>
        <Link href="/project" className="navbar-link">
          <Image
            src="/project2.jpg"
            alt="project icon"
            height={60}
            width={60}
          />
          <span><b><i>Project</i></b></span>
        </Link>
        <Link href="/contact" className="navbar-link">
          <Image
            src="/contact.jpg"
            alt="contact icon"
            height={60}
            width={60}
          />
          <span><b><i>Contact</i></b></span>
        </Link>
      </nav>
    </div>
  );
}
