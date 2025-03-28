import WhyPravi from "../components/Advantages";
import { Catalogue } from "../components/Catalogue";
import Navbar from "../components/Navbar/Navbar";
export default function Pravi() {
  return (
    <>
    <Navbar></Navbar>
    <Catalogue/>
    {/* <div className="w-full min-h-screen flex justify-center items-center">
      This is pravi page
    </div> */}
    <WhyPravi/>
    </>
  );
}
