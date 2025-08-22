import Services from "../components/general/Services";
import Hero from "../components/general/Hero";
import Surprise from "../components/general/Surprise";
import Steps from "../components/general/Steps";
import Pricing from "../components/general/Pricing";
import Contact from "../components/general/Contact";

export default function Home() {
  return (
    <div>
      <div className="container">
        <Hero />
        <Services />
        <Surprise />
      </div>
      <div className="bg-gradient-to-r mt-[120px] from-primary-50 to-gray-100">
        <Steps />
      </div>

      <div className="container">
        <Pricing />
        <Contact />
      </div>
    </div>
  );
}
