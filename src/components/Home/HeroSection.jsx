'use client';

import { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaGlobeAfrica, FaChevronLeft, FaChevronRight, FaPlay, FaChartLine,
  FaNetworkWired,
  FaRecycle,
  FaBuilding,
  FaGlobe,
  FaBrain,
  FaRocket,
  FaCubes, } from 'react-icons/fa';

const slides = [
  {
    badge: "ACTIVE OPERATIONAL ANCHOR",
    badgeSubtext: "BEAPCapital Core Anchor",
    title: "Building Next-Generation Phygital Infrastructure for Africa & Global Markets",
    description: "Unifying Asset-Heavy Utilities, Enterprise SaaS, and Circular Bio-Refineries under One Scalable Ecosystem.",
    primaryBtn: "EXPLORE OUR ECOSYSTEM",
    secondaryBtn: "VIEW EU EXPANSION STRATEGY",
    card: {
      icon: <FaGlobeAfrica />,
      category: "ECOSYSTEM CORE",
      title: "BEAPCapital Core Anchor",
      status: "100% Platform Aligned",
    }
  },
  {
  badge: "STRATEGIC GROWTH ENGINE",
  badgeSubtext: "BEAPCapital Innovation Hub",
  title: "Powering Scalable Infrastructure for Africa's Next Economic Era",
  description: "Connecting intelligent technology, sustainable assets, and high-growth ventures through one integrated capital ecosystem.",
  primaryBtn: "DISCOVER OUR PLATFORM",
  secondaryBtn: "EXPLORE GROWTH STRATEGY",
  card: {
    icon: <FaChartLine />,
    category: "GROWTH ENGINE",
    title: "BEAPCapital Innovation Hub",
    status: "98% Ecosystem Integrated",
  }
},
{
  badge: "DIGITAL INFRASTRUCTURE",
  badgeSubtext: "BEAPCapital Technology Network",
  title: "Transforming Complex Markets into Connected Digital Ecosystems",
  description: "Building intelligent platforms that simplify operations, unlock new opportunities, and accelerate enterprise growth across emerging markets.",
  primaryBtn: "EXPLORE TECHNOLOGY",
  secondaryBtn: "VIEW MARKET EXPANSION",
  card: {
    icon: <FaNetworkWired />,
    category: "DIGITAL CORE",
    title: "Technology Network",
    status: "Fully Ecosystem Connected",
  }
},
{
  badge: "SUSTAINABLE VALUE SYSTEM",
  badgeSubtext: "BEAPCapital Circular Economy",
  title: "Turning Resources into Resilient, High-Value Economic Systems",
  description: "Developing circular infrastructure that connects production, technology, logistics, and sustainable resource utilization.",
  primaryBtn: "EXPLORE CIRCULAR ECONOMY",
  secondaryBtn: "VIEW IMPACT STRATEGY",
  card: {
    icon: <FaRecycle />,
    category: "CIRCULAR CORE",
    title: "Sustainable Value System",
    status: "92% Impact Optimized",
  }
},
{
  badge: "ENTERPRISE SCALE PLATFORM",
  badgeSubtext: "BEAPCapital Business Network",
  title: "Building the Operating Infrastructure Behind Tomorrow's Enterprises",
  description: "Unifying business intelligence, enterprise solutions, and strategic infrastructure to help organizations scale with confidence.",
  primaryBtn: "EXPLORE ENTERPRISE",
  secondaryBtn: "VIEW SCALE STRATEGY",
  card: {
    icon: <FaBuilding />,
    category: "ENTERPRISE CORE",
    title: "Business Network",
    status: "Enterprise Ready",
  }
},
{
  badge: "GLOBAL MARKET BRIDGE",
  badgeSubtext: "BEAPCapital Global Expansion",
  title: "Connecting African Innovation to Global Capital and Opportunity",
  description: "Creating strategic bridges between emerging-market businesses, international partners, and scalable investment opportunities.",
  primaryBtn: "EXPLORE GLOBAL NETWORK",
  secondaryBtn: "VIEW EXPANSION ROADMAP",
  card: {
    icon: <FaGlobe />,
    category: "GLOBAL CORE",
    title: "International Growth Bridge",
    status: "24 Markets Connected",
  }
},
{
  badge: "INTELLIGENT OPERATIONS",
  badgeSubtext: "BEAPCapital Enterprise Intelligence",
  title: "Making Business Infrastructure Smarter, Faster, and More Connected",
  description: "Deploying intelligent systems that bring data, operations, decision-making, and enterprise performance together.",
  primaryBtn: "EXPLORE INTELLIGENCE",
  secondaryBtn: "VIEW OPERATIONS MODEL",
  card: {
    icon: <FaBrain />,
    category: "INTELLIGENCE CORE",
    title: "Enterprise Intelligence",
    status: "AI Enabled Infrastructure",
  }
},
{
  badge: "NEXT-GEN MARKET ENGINE",
  badgeSubtext: "BEAPCapital Future Markets",
  title: "Designing the Infrastructure for Africa's Next Generation of Growth",
  description: "Combining capital, technology, enterprise systems, and physical infrastructure into a scalable engine for long-term economic value.",
  primaryBtn: "EXPLORE THE ECOSYSTEM",
  secondaryBtn: "VIEW FUTURE MARKETS",
  card: {
    icon: <FaRocket />,
    category: "MARKET CORE",
    title: "Future Markets Engine",
    status: "Growth Architecture Active",
  }
},
{
  badge: "ASSET INTELLIGENCE NETWORK",
  badgeSubtext: "BEAPCapital Asset Systems",
  title: "Connecting Physical Assets with Intelligent Digital Infrastructure",
  description: "Digitizing asset-intensive industries through connected systems, operational intelligence, and scalable enterprise technology.",
  primaryBtn: "EXPLORE ASSET NETWORK",
  secondaryBtn: "VIEW DIGITAL STRATEGY",
  card: {
    icon: <FaCubes />,
    category: "ASSET CORE",
    title: "Intelligent Asset Network",
    status: "100% Digitally Connected",
  }
},
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  const totalSlides = slides.length;
  const displayTotal = 14;

  useEffect(() => {
    if (isPlaying && totalSlides > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 2000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, totalSlides]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index) => setCurrentSlide(index);

  const slide = slides[currentSlide] || slides[0];

  return (
    <section className="w-full bg-[#050810] text-white py-12 md:py-16 px-6 md:px-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-400/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm">
                {slide.badge}
              </span>
              <span className="flex items-center gap-2 text-[10px] text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                {slide.badgeSubtext}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-white">
              {slide.title}
            </h1>

            <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
              {slide.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              <button className="bg-amber-400 hover:bg-amber-500 text-black font-bold text-[10px] tracking-wider uppercase px-5 py-2.5 rounded flex items-center gap-2 transition-colors">
                {slide.primaryBtn}
                <FaArrowRight className="text-[10px]" />
              </button>
              <button className="bg-indigo-900/40 hover:bg-indigo-800/60 border border-indigo-500/40 text-white font-bold text-[10px] tracking-wider uppercase px-5 py-2.5 rounded transition-colors">
                {slide.secondaryBtn}
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="bg-white/[0.03] border border-white/10 backdrop-blur-sm rounded-2xl p-6 w-full max-w-xs">
              <div className="w-11 h-11 rounded-lg bg-amber-400/20 border border-amber-400/30 flex items-center justify-center mb-6">
                <span className="text-amber-400 text-lg">{slide.card.icon}</span>
              </div>

              <p className="text-gray-500 text-[9px] font-bold tracking-widest uppercase mb-2">
                {slide.card.category}
              </p>

              <h3 className="text-white text-base font-bold leading-snug mb-3">
                {slide.card.title}
              </h3>

              <p className="text-amber-400 text-[11px] font-semibold">
                {slide.card.status}
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <button 
              onClick={prevSlide}
              className="w-8 h-8 rounded bg-indigo-900/40 hover:bg-indigo-800/60 border border-indigo-500/40 flex items-center justify-center text-white transition-colors"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="text-[10px]" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-8 h-8 rounded bg-indigo-900/40 hover:bg-indigo-800/60 border border-indigo-500/40 flex items-center justify-center text-white transition-colors"
              aria-label="Next slide"
            >
              <FaChevronRight className="text-[10px]" />
            </button>
            <span className="text-gray-500 text-[11px] font-medium ml-1">
              Slide {String(currentSlide + 1).padStart(2, '0')} / {displayTotal}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: displayTotal }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-5 h-1.5 bg-amber-400' 
                    : 'w-1.5 h-1.5 bg-gray-700 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 text-gray-500 text-[11px] hover:text-gray-300 transition-colors"
          >
            <FaPlay className={`text-amber-400 text-[7px] ${isPlaying ? '' : 'opacity-50'}`} />
            <span>Auto-streaming {displayTotal} portfolio slides</span>
          </button>
        </div>
      </div>
    </section>
  );
}