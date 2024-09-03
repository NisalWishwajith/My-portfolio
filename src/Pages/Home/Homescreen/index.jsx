import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";

export default function Home() {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center">
    <div className="w-full max-w-screen-2xl">
      <HeroSection />
      <AboutMe />
      <MySkills />    
      <MyPortfolio />
      <ContactMe /> 
      </div>
      </div>
        
      <Footer />

    </>
  );
}
