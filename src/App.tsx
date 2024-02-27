// import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
// import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Examples } from "./components/Examples";
// import { Sponsors } from "./components/Sponsors";
// import { Team } from "./components/Team";
// import { Testimonials } from "./components/Testimonials";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Sponsors /> */}
      <Features />
      <Examples />
      <HowItWorks />
      <Cta />
      <Services />
      {/* <Testimonials /> */}
      {/* <Team /> */}
      <Pricing />
      {/* <Newsletter /> */}
      <FAQ />
      <Footer />
      <ScrollToTop />
      <Analytics />
    </>
  );
}

export default App;
