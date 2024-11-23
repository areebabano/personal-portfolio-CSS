import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footerStyle">
      <div className="footerContainer">
        {/* Navigation */}
        <div className="navLinks">
          <Link href="/" className="link">
            <b><i>Home</i></b>
          </Link>
          <Link href="/about" className="link">
            <b><i>About</i></b>
          </Link>
          <Link href="/project" className="link">
            <b><i>Project</i></b>
          </Link>
          <Link href="/contact" className="link">
            <b><i>Contact</i></b>
          </Link>
        </div>

        {/* Profile Image */}
        <div className="imageContainer">
          <Image
            src="/my-image.jpg"
            alt="Areeba Bano, a software developer"
            height={100}
            width={100}
            className="profileImage"
          />
        </div>

        {/* Connect with Me */}
        <h5 className="connectTitle">Connect with me:</h5>

        {/* Social Media Icons */}
        <div className="socialLinks">
          <a
            href="https://www.facebook.com/profile.php?id=100072877617416&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <Image src="/facebook.png" alt="Facebook" height={24} width={24} />
          </a>
          <a
            href="https://github.com/areebabano"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <Image src="/git.png" alt="GitHub" height={24} width={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/areeba-bano-9249752b7/?trk=public-profile-join-page"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <Image src="/linkedin2.png" alt="LinkedIn" height={24} width={24} />
          </a>
          <a
            href="https://www.youtube.com/@CodeVerse-vk9fo/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <Image src="/youtube.png" alt="YouTube" height={24} width={24} />
          </a>
          <a
            href="https://www.instagram.com/invites/contact/?igsh=9hs10rg71n48&utm_content=r2vbwcj"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <Image src="/insta.png" alt="Instagram" height={24} width={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="copyright">
          &copy; {new Date().getFullYear()} Areeba Bano. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

