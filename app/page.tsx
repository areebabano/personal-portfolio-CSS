import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="main-container">
        <section className="hero">
          <div className="hero-content">
            <h2>Hello, I am</h2>
            <h1>AREEBA BANO</h1>
            <p className="paragraph-style">
              A Software Developer with a passion for crafting innovative
              solutions. My journey in programming began a year ago, and it has
              been a life-changing adventure. Through dedication and
              perseverance, I&apos;ve achieved notable milestones and continue to
              strive for excellence. Programming has not only challenged me but
              also instilled a sense of purpose and hope. I&apos;m excited to see
              where this journey takes me and how I can harness my skills to
              drive positive change.
            </p>
          </div>
          <div className="hero-image">
            <Image
              src="/my-image.jpg"
              alt="Areeba Bano, a software developer"
              height={300}
              width={300}
              className="image-style"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
