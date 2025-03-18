import { ShootingStars } from "./components/shooting-stars";
import { StarsBackground } from "./components/stars-background";
import{Founders} from './founders/page.jsx'
import {LatestShorts} from './youtube/page.jsx'
import {MarqueeDemo} from '../app/components/FeedbackCarosel.jsx'
import {AboutUs} from '@/app/aboutUs/page.jsx'
export default function Home() {
  return (
    <>
    <ShootingStars/>
    <StarsBackground/>
    <div className="w-full min-h-screen flex justify-center items-center  bg-gradient-to-b from-black to-red-950 ">
      {/* This is home page */}
      <LatestShorts/>
    </div>
    <div>
      <MarqueeDemo/>
    </div>
    <Founders/>
    <AboutUs/>
    </>
  );
}
