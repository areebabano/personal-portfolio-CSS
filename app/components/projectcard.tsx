"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  githubLink?: string;
  youtubeLink?: string;
  linkedinLink?: string;
}

export default function ProjectCard({
  imageSrc,
  title,
  description,
  githubLink,
  youtubeLink,
  linkedinLink,
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="project-card"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="400"
      data-aos-duration="1000"
    >
      <div
        className={`card-container ${isFlipped ? "flipped" : ""}`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front Side */}
        <div className={`card-front ${isFlipped ? "hidden" : ""}`}>
          <Image
            src={imageSrc}
            alt={title}
            width={256}
            height={320}
            className="card-image"
          />
        </div>

        {/* Back Side */}
        <div className={`card-back ${isFlipped ? "visible" : "hidden"}`}>
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <div className="card-links">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            )}
            {youtubeLink && (
              <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                <FaYoutube size={24} />
              </a>
            )}
            {linkedinLink && (
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
