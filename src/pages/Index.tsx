import { useState } from 'react';
import Intro from '@/components/cinema/Intro';
import Hero from '@/components/cinema/Hero';
import Work from '@/components/cinema/Work';
import { Cursor } from '@/components/cinema/primitives';
import { Consulting, FAQ, Offers, ProofBar, StickyCTA } from '@/components/cinema/Sales';
import { CaseFiles, Contact, Footer, Process, Ticker, Voices } from '@/components/cinema/Sections';

const Index = () => {
  const [ready, setReady] = useState(false);

  return (
    <div className="grain relative min-h-screen bg-ink text-bone overflow-x-clip">
      <Intro onDone={() => setReady(true)} />
      <Cursor />
      <StickyCTA />
      <main>
        <Hero ready={ready} />
        <ProofBar />
        <Ticker />
        <Work />
        <CaseFiles />
        <Offers />
        <Consulting />
        <Voices />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
