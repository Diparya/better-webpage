import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuestionSection from '@/components/QuestionSection';
import TestimonialSection from '@/components/TestimonialSection';

export default function Home() {
  return (
    <>
      {/* The header remains outside the colored sections */}
      <Header />

      {/* Hero section with green background */}
      <div className="min-h-screen bg-[rgb(0,71,51)] text-white">
        <HeroSection />
      </div>

      {/* All other sections with a white background */}
      <div className="bg-white text-black">
        <TestimonialSection />
        <QuestionSection />
        <Footer/>
      </div>
    </>
  );
}
