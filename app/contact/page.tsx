"use client"
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
      <div className='contact-container'>
        <h1 className='contact-heading'>Contact Me</h1>
        <p className='contact-paragraph'>
          I&aposd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to get in touch.
        </p>

        <div className='contactInfo'>
          <h2>Contact Information</h2>
          <p>📍 Location: Karachi, Pakistan</p>
          <p>✉️ Email: areebabano986@gmail.com</p>
          <div className='iconLinks'>
            <Link href="https://github.com/areebabano" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/areeba-bano-9249752b7/?trk=public-profile-join-page" className="li" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100072877617416&mibextid=ZbWKwL" className="fb" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </Link>
            <Link href="https://www.youtube.com/@CodeVerse-vk9fo/featured" className="yt" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} />
            </Link>
            <Link href="https://www.instagram.com/invites/contact/?igsh=9hs10rg71n48&utm_content=r2vbwcj" className="ig" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </Link>
          </div>
        </div>

        <div className="form-section">
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit} className='form'>
          <div className='formGroup'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className='formInput'
            />
          </div>

          <div className='formGroup'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className='formInput'
            />
          </div>

          <div className='formGroup'>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className='formTextarea'
            />
          </div>

          <button type="submit" className='formButton'>
            Send Message
          </button>
        </form>

        {status === "success" && <p className='messageSuccess'>Message sent successfully!</p>}
        {status === "error" && <p className='messageError'>There was an error sending your message.</p>}
      </div>
        </div>
  );
}
