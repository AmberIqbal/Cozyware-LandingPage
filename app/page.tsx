
"use client";
import { useState } from 'react';
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 flex items-center justify-between">
     <Link href="/" className="text-2xl font-bold text-pink-600">
        CozyWares
      </Link>
      <div className="space-x-4">
        <Link href="/Contact">
          <span className="text-gray-700-bold hover:text-pink-500 cursor-pointer">Contact</span>
        </Link>
        <Link href="/Signup">
          <span className="text-white bg-pink-500 px-4 py-2 rounded hover:bg-pink-600 cursor-pointer">Sign Up</span>
        </Link>
      </div>
    </nav>
  );
};
const pages = [
  {
    title: "We're Launching Soon!",
    description: "Get ready for adorable kids apparel coming your way.",
    imgSrc: "/hero-image_how-to-start-a-kids-clothing-line-from-concept-to-closet-1.jpg", // replace with your kid image path
  },
  {
    title: "What We'll Sell",
    description:
      "Cute t-shirts, comfy pants, dresses, pajamas, and accessories for kids of all ages!",
    imgSrc : "/cashmirino-dresses-1649779157.avif",
  },
  {
    title: "Follow Us",
    
    imgSrc: "/Pink-Flower-girl-romper-dress-11.webp ",
  },
];

export default function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((i) => (i === 0 ? pages.length - 1 : i - 1));
  };

  const next = () => {
    setCurrentIndex((i) => (i === pages.length - 1 ? 0 : i + 1));
  };

  return (
    
    <>
    <Navbar/>
   
      <style>{`
        .slider {
          display: flex;
          width: 300%; /* 3 pages */
          transform: translateX(-${currentIndex * 100 / 3}%);
          transition: transform 0.5s ease-in-out;
        }
        .page {
          flex: 0 0 33.3333%;
          padding: 2rem;
          box-sizing: border-box;
          text-align: center;
          background: linear-gradient(135deg, #f9f0ff, #d7b8ff);
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }
        img {
          max-width: 600px;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        button {
          background: #7a52ff;
          color: white;
          border: none;
          padding: 0.7rem 1.5rem;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 600;
          margin: 0 1rem;
        }
        .nav {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
        }
      `}</style>

      <div style={{ overflow: "hidden", width: "100vw", height: "100vh" }}>
       <div className="slider">
 {pages.map(({ title, description, imgSrc }, i) => (
  <div className="page" key={i}>
    <h1 className="text-5xl font-lobster text-pink-700 mb-4">{title}</h1>

    <div className="relative w-full max-w-[600px]">
      <img
        src={imgSrc}
        alt="Kids Apparel"
        className={` rounded-[15px] shadow-lg relative z-0 ${
          title === "What We'll Sell"
            ? "w-[600px] h-[350px] object-cover": title === "Follow Us"
      ? "w-full max-w-[600px] h-[450px] object-cover"
            : "w-full max-w-[600px] h-auto"
        }`}
      />
      
      {title === "Follow Us" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-60 text-white p-4 rounded-[15px] space-y-3">
          <a href="https://instagram.com" target="_blank" className="hover:underline">Instagram</a>
          <a href="https://facebook.com" target="_blank" className="hover:underline">Facebook</a>
          <a href="https://tiktok.com" target="_blank" className="hover:underline">Tiktok</a>
        </div>
      )}
    </div>
 
   <div style={{ maxWidth: "300px" }}>
  {typeof description === "string" ? <p>{description}</p> : description}
</div>
  </div>
))}
</div>
      </div>

      <div className="nav">
        {currentIndex !== 0 && <button onClick={prev}>Prev</button>}
  {currentIndex !== pages.length - 1 && <button onClick={next}>Next</button>}
        
      </div>
    </>
  );
}
