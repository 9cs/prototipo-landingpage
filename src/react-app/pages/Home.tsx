import Navbar from '@/react-app/components/Navbar';
import Hero from '@/react-app/components/Hero';
import Benefits from '@/react-app/components/Benefits';
import HowItWorks from '@/react-app/components/HowItWorks';
import Gallery from '@/react-app/components/Gallery';
import Solutions from '@/react-app/components/Solutions';
import Pricing from '@/react-app/components/Pricing';
import Calendly from '@/react-app/components/Calendly';
import FAQ from '@/react-app/components/FAQ';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Gallery />
      <Solutions />
      <Pricing />
      <Calendly />
      <FAQ />
      <Footer />
    </div>
  );
}
