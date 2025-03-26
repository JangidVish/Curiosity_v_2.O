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
    // GSAP animations for each section
    gsap.from(homeRef.current, {
      opacity: 0.1,
      y: 20,
      duration: 2,
      scrollTrigger: {
        trigger: homeRef.current,
        start: "top 80%", // Start animation when the top of the section hits 80% of the viewport
        end: "bottom 20%",
        toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
      },
    });
    gsap.from(youtubeRef.current, {
      opacity: 0.1,
      y: 50,
      duration: 2,
      scrollTrigger: {
        trigger: youtubeRef.current,
        start: "top 80%", // Start animation when the top of the section hits 80% of the viewport
        end: "bottom 20%",
        toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
      },
    });
    gsap.from(marqueeRef.current, {
      opacity: 0.1,
      y: 50,
      duration: 2,
      scrollTrigger: {
        trigger: marqueeRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(foundersRef.current, {
      opacity: 0.1,
      y: 50,
      duration: 2,
      scrollTrigger: {
        trigger: foundersRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(aboutUsRef.current, {
      opacity: 0.1,
      y: 50,
      duration: 2,
      ease: "power1.out", // Ease is placed here, outside scrollTrigger
      scrollTrigger: {
        trigger: aboutUsRef.current,
        start: "top 80%", // Start when the top of the element hits 80% of the viewport
        end: "bottom 20%", // End when the bottom of the element hits 20% of the viewport
        toggleActions: "play none none reverse", // Play on enter, reverse on leave
        // scrub: true, // Optional: Add this for smooth scrubbing
      },
    });

    gsap.from(contactUsRef.current, {
      opacity: 0.1,
      y: 50,
      duration: 2,
      scrollTrigger: {
        trigger: contactUsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <>
      <ShootingStars />
      <StarsBackground />
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