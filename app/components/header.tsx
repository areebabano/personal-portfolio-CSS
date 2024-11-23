import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <Image
              src="/portfolioLogo.jpg"
              alt="Areeba Bano logo"
              height={90}
              width={90}
            />
          </Link>
        </div>
        <div className="navbar">
          <Navbar />
        </div>
      </div>
    </header>
  );
}
