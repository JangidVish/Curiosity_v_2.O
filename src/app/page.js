"use client"; // Ensure this is a client component
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShootingStars } from "./components/shooting-stars";
import { StarsBackground } from "./components/stars-background";
import { Founders } from './founders/page.jsx';
import { LatestShorts } from './youtube/page.jsx';
import { MarqueeDemo } from '../app/components/FeedbackCarosel.jsx';
import { AboutUs } from '@/app/aboutUs/page.jsx';
import { ContactUs } from '@/app/contactUs/page.jsx';
import Navbar from "./components/Navbar/Navbar";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // Create refs for each section
  const homeRef = useRef(null);
  const youtubeRef = useRef(null);
  const marqueeRef = useRef(null);
  const foundersRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactUsRef = useRef(null);

  useEffect(() => {
    // Set initial state with GSAP
    const sections = [
      homeRef.current,
      youtubeRef.current,
      marqueeRef.current,
      foundersRef.current,
      aboutUsRef.current,
      contactUsRef.current
    ];

    // Set initial state
    gsap.set(sections, { opacity: 0, y: 50 });

    // Create animations array for cleanup
    const animations = [];

    // Helper function to create animations
    const createAnimation = (ref, y = 50) => {
      const anim = gsap.to(ref.current, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reset",
          markers: false // Set to true for debugging
        }
      });
      animations.push(anim);
    };

    // Create animations for each section
    createAnimation(homeRef, 20);
    createAnimation(youtubeRef);
    createAnimation(marqueeRef);
    createAnimation(foundersRef);
    createAnimation(aboutUsRef);
    createAnimation(contactUsRef);

    // Cleanup function
    return () => {
      animations.forEach(anim => {
        anim.scrollTrigger?.kill();
        anim.kill();
      });
      ScrollTrigger.clearMatchMedia();
      ScrollTrigger.refresh();
    };
  }, []);


  return (
    <>
    <Navbar/>
       {/* <ShootingStars />
      <StarsBackground />  */}
      <div
        ref={homeRef}
        className="w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-black to-red-950"
      >
        {/* This is home page */}

        <LatestShorts />
      </div>
      <div ref={marqueeRef}>
        <MarqueeDemo />
      </div>
      <div ref={foundersRef}>
        <Founders />
      </div>
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={contactUsRef}>
        <ContactUs />
      </div>
    </>
  );
}