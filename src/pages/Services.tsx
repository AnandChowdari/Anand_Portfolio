
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonGradient } from '@/components/ui/button-gradient';

/* Single-row plans with equal sizes and 3D tilt on hover */
const Services = () => {
  const plans = [
    {
      key: 'ReelsStarter',
      name: 'Reels Starter Plan',
      price: '₹8,000 / month',
      bullets: [
        '4–5 Instagram / YouTube reels',
        'Clean cuts + captions',
        'Trend-based pacing',
        'Fast turnaround',
      ],
      message: "Hi Anand, I'm interested in the Reels Starter Plan.",
    },
    {
      key: 'StarterCreator',
      name: 'Starter Creator Plan',
      price: '₹12,000 / month',
      bullets: [
        '6–8 reels / shorts',
        'Clean edits + captions',
        'Basic motion graphics',
      ],
      message: "Hi Anand, I'm interested in the Starter Creator Plan.",
    },
    {
      key: 'GrowthPro',
      name: 'Growth Pro Plan',
      price: '₹25,000 / month',
      badge: 'MOST POPULAR',
      bullets: [
        '12–15 high-retention reels',
        'Story-driven editing',
        'Advanced motion graphics',
        'Faster turnaround & priority communication',
      ],
      message: "Hi Anand, I'm interested in the Growth Pro Plan (Most Popular).",
    },
    {
      key: 'PerformanceBrand',
      name: 'Performance Brand Plan',
      price: '₹45,000+ / month (Custom)',
      bullets: [
        'Motion-heavy reels & explainers',
        'SaaS-style storytelling',
        'Conversion-focused visuals',
        'Priority delivery & strategy support',
      ],
      message: "Hi Anand, I'm interested in the Performance Brand Plan.",
    },
  ];

  const navigate = useNavigate();

  const PlanCard: React.FC<{ plan: any; isPopular?: boolean }> = ({ plan, isPopular }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [style, setStyle] = useState<React.CSSProperties>({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' });

    function handleMove(e: React.MouseEvent) {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0..1
      const py = (e.clientY - rect.top) / rect.height; // 0..1
      const rotateX = (py - 1) * 12; // tilt intensity
      const rotateY = (px - 1) * -12;
      setStyle({ transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`, transition: 'transform 100ms linear' });
    }

    function handleLeave() {
      setStyle({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)', transition: 'transform 400ms cubic-bezier(.2,.9,.3,1)' });
    }

    function handleSelect(e: React.MouseEvent) {
      e.preventDefault();
      const search = `?plan=${encodeURIComponent(plan.key)}&message=${encodeURIComponent(plan.message)}`;
      navigate(`/contact${search}`);
    }

    return (
      <div className="flex-1 min-w-0">
        <div
          ref={ref}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className={`relative w-full h-full rounded-2xl overflow-visible`}>
          <div
            style={style}
            className={`h-full rounded-2xl p-6 md:p-8 bg-black/50 border border-border flex flex-col justify-between transition-shadow duration-300 will-change-transform ${
              isPopular ? 'shadow-[0_30px_80px_rgba(155,135,245,0.22)] ring-1 ring-primary/30 scale-[1.02]' : 'hover:shadow-[0_18px_50px_rgba(155,135,245,0.08)]'
            }`}
          >
            {isPopular && (
              <div className="absolute -top-5 right-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary/80 to-accent/80 text-black shadow-md">
                  {plan.badge}
                </span>
              </div>
            )}

            <div>
              <h3 className="text-2xl font-extrabold text-white">{plan.name}</h3>
              <div className="mt-3">
                <span className="text-3xl font-bold text-gradient-purple">{plan.price}</span>
              </div>

              <ul className="mt-6 space-y-2">
                {plan.bullets.map((b: string, i: number) => (
                  <li key={i} className="text-gray-300 text-sm flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary/80" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <ButtonGradient asChild>
                <button onClick={handleSelect} type="button" className="inline-flex w-full items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold">
                  Select This!
                </button>
              </ButtonGradient>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <div className="bg-gradient-to-b from-background to-black/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">Plans & Pricing</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">Choose a plan tailored to growth, retention, and conversions — dark, cinematic creative matched to your brand.</p>
        </div>
      </div>

      {/* Single-row plans: horizontal on large screens, scrollable on small */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <style>{`\n            /* Mobile: stack plans vertically and scale down each subsequent card */\n            @media (max-width: 767px) {\n              .plans-row { flex-direction: column; gap: 1rem; }\n              .plans-row .plan-card { min-width: auto !important; width: 100% !important; transform-origin: top center; transition: transform 300ms ease, opacity 300ms ease; }\n              .plans-row .plan-card:nth-child(1) { transform: scale(1); }\n              .plans-row .plan-card:nth-child(2) { transform: scale(0.96); }\n              .plans-row .plan-card:nth-child(3) { transform: scale(0.92); }\n              .plans-row .plan-card:nth-child(4) { transform: scale(0.88); }\n            }\n          `}</style>
          <div className="flex gap-6 lg:gap-8 overflow-x-auto lg:overflow-visible py-2" style={{ perspective: '1200px' }}>
            {/* Each card gets equal width */}
            <div className="plans-row flex w-full gap-6">
              {plans.map((plan) => (
                <div key={plan.key} className="plan-card flex-1 min-w-[260px] lg:min-w-0 lg:flex-1">
                  <PlanCard plan={plan} isPopular={plan.key === 'GrowthPro'} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-400 max-w-3xl">
            <p>Prices are indicative. Custom enterprise work, long-term retainers, and agency partnerships available — contact for custom quoting.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
