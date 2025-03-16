import { ShootingStars } from "./components/shooting-stars";
import { StarsBackground } from "./components/stars-background";
import{Founders} from './founders/page.jsx'
import {LatestShorts} from './youtube/page.jsx'
export default function Home() {
  return (
    <>
    <ShootingStars/>
    <StarsBackground/>
    <div className="w-full min-h-screen flex justify-center items-center ">
      This is home page
      <LatestShorts/>
    </div>
    <Founders/>
    </>
  );
}
