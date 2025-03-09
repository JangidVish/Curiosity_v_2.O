import { ShootingStars } from "./components/shooting-stars";
import { StarsBackground } from "./components/stars-background";
export default function Home() {
  return (
    <>
    <ShootingStars/>
    <StarsBackground/>
    <div className="w-full min-h-screen flex justify-center items-center ">
      This is home page
    </div>
    </>
  );
}
