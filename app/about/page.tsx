"use client";
import { useEffect } from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired settings
  }, []);

  return (
    <div className='about-container'>
      <div className="mb-20">
      </div>
      <main className='main'>
        <section>
          {/* Profile Image with AOS Animation */}
          <div className="mb-8 flex justify-center" data-aos="fade-in">
            <Image
              src="/my-image.jpg" // Ensure this path is correct
              alt="Profile Picture"
              height={150}
              width={150}
              className="profile-image"
            />
          </div>
          {/* About Me Heading with AOS Animation */}
          <h6
            className='about-heading'
            data-aos="fade-up"
            data-aos-delay="200"
          >
            About Me
          </h6>
          {/* About Me Paragraphs with AOS Animation */}
          <div className="center-container">
            <p
              className='about-paragraph'
              data-aos="fade-up"
              data-aos-delay="400"
            >
              I am a dedicated software developer with a focus on creating
              innovative and efficient solutions using modern web technologies.
              My expertise includes full-stack development with proficiency in
              Html, Css, Javascript, Node.js, Next.js enabling me to build
              high-quality, scalable applications. My background in both
              front-end and back-end development allows me to deliver seamless,
              user-centric solutions, emphasizing performance, usability, and
              adherence to best practices.
            </p>
            <p
              className='paragraph'
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Over the past year, I have rapidly expanded my skills in HTML, CSS and JAVASCRIPT. In the last six months, I have gained
              hands-on experience with frameworks like Next.js and Node.js
              through various projects in web development and data analysis.
            </p>
            <p
              className='paragraph'
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Driven by a passion for technology and a commitment to continuous
              learning, I approach challenges with a problem-solving mindset and
              dedication to excellence. I am eager to continue growing my skill
              set and contributing to impactful projects that advance the tech
              industry.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
