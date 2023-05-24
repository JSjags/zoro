import Image from "next/image";
import Header from "@/components/Header";
import heroIllustration from "../assets/home/hero-illustration.svg";
import aboutIllustration1 from "../assets/home/about-illustration-1.svg";
import aboutIllustration2 from "../assets/home/about-illustration-2.svg";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <div className=" bg-light-purple">
        {/* Header and Nav */}
        <Header />
        {/* Hero/Home  */}
        <div className="max-w-[1512px] w-full flex justify-between min-h-screen mt-10 mx-auto">
          <div className="flex flex-col items-center justify-around w-full space-between pt-10">
            <div className="flex flex-col justify-around items-start h-full ">
              <p className="text-primary-blue text-6xl flex flex-col gap-4">
                <p className="uppercase inter-bold">Rent Zoro,</p>
                <p className="inter-medium">Your Zero</p>
                <p className="inter-medium">Risk Report</p>
              </p>
              <button className="p-2 rounded-xl border-[2px] border-solid border-primary-blue">
                <span className="tilt-warp text-primary-blue">
                  Start your Journey
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[10vh] w-full items-center pt-20">
            <p className="w-3/5 inter-semi-bold text-primary-blue uppercase text-center">
              <p>We just made renting your</p>
              <p>property a whole lot easier</p>
            </p>
            <Image
              src={heroIllustration}
              alt="hero-illustation"
              className="w-7/12"
            />
          </div>
        </div>
        {/* About  */}
        <div className="max-w-[1512px] w-full flex flex-col justify-between min-h-screen mt-10 mx-auto">
          <div className="flex flex-row items-start justify-around w-full space-between pt-10 mt-[10vh]">
            <div className="bg-primary-blue rounded-xl shadow-2xl">
              <p className="inter-semi-bold p-4 text-white text-center text-[15px]">
                <p>ZORO IS A LANDLORD/TENANT PLATFORM</p>
                <p>THAT AIMS TO REMOVE THE UNCERTAINTY</p>
                <p>ASSOCIATED WITH BEING A LANDLORD/</p>
                <p>TENANT</p>
              </p>
            </div>
            <div className="bg-primary-blue rounded-xl shadow-2xl">
              <p className="inter-semi-bold p-4 text-white text-center text-[15px]">
                <p>OUR OBJECTIVE IS TO PUT LANDLORDS/</p>
                <p>TENANTS IN A BETTER FINANCIAL</p>
                <p>POSITION WITH ITS DIVERSE SET OF</p>
                <p>PROGRAMS.</p>
              </p>
            </div>
            <div className="bg-primary-blue rounded-xl shadow-2xl">
              <p className="inter-semi-bold p-4 text-white text-center text-[15px] uppercase">
                <p>Zoro aims to eliminate fraudulent</p>
                <p>documents, ensuring better decisions</p>
                <p> for tenants and preventing</p>
                <p>serious consequences.</p>
              </p>
            </div>
          </div>
          <div className="flex w-full items-center pt-20 flex-wrap justify-center gap-[15vw]">
            <Image
              src={aboutIllustration2}
              alt="hero-illustation"
              className="max-w-[300px]"
            />
            <Image
              src={aboutIllustration1}
              alt="hero-illustation"
              className="max-w-[400px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
