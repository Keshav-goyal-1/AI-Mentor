
import Header from "../components/HomeHeader";
import Hero from "../components/Hero";
import LanguageSection from "../components/LanguageSection";
import FeaturesSection from "../components/FeaturesSection";
import ExamplesSection from "../components/ExamplesSection";
import CallToAction from "../components/CallToAction";
import Footer from "../components/HomeFooter";
import AboutSection from "@/components/AboutSection";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <LanguageSection />
        <FeaturesSection />
        <ExamplesSection />
        <AboutSection/>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
