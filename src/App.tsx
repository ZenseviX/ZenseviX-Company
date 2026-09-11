import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ProductPreview } from './components/ProductPreview';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { GetStartedModal } from './components/GetStartedModal';
import { TeamSection } from './components/TeamSection';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenGetStarted = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleExplore = () => {
    const previewEl = document.getElementById('preview');
    if (previewEl) {
      previewEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-neutral-100 flex flex-col selection:bg-red-600 selection:text-white antialiased">
      {/* 1. NAVBAR */}
      <Navbar onOpenGetStarted={handleOpenGetStarted} />

      <main className="flex-grow">
        {/* 2. HERO SECTION */}
        <Hero onExplore={handleExplore} />

        {/* 3. PROBLEM / INTRODUCTION */}
        <ProblemSection />

        {/* 4. SOLUTION */}
        <SolutionSection />

        {/* 5. FEATURES */}
        <FeaturesSection />

        {/* 6. PRODUCT PREVIEW */}
        <ProductPreview />

        {/* 7. TEAM */}
        <TeamSection />

        {/* 8. FINAL CTA */}
        <CtaSection onStartExploring={handleOpenGetStarted} />
      </main>

      {/* 9. FOOTER */}
      <Footer />

      {/* Interactive Modal for Get Started / Early Access */}
      <GetStartedModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}
