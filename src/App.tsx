import React from 'react';
import { 
  BrainCircuit, 
  MessageSquare, 
  LineChart, 
  Hexagon, 
  CircleDashed, 
  Triangle, 
  Square 
} from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
             <BrainCircuit className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">RetainIQ</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">How it Works</a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <a href="#login" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Login</a>
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
            Start Free Trial
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="bg-white pt-20 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-8">
           <span>🚀</span> The #1 AI Retention Platform for E-commerce
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          Stop Losing Customers.<br className="hidden md:block"/> Predict Churn Before It Happens.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Connect your store, identify at-risk customers, and trigger automated WhatsApp & Email campaigns to win them back automatically.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
            Start 14-Day Free Trial
          </button>
          <button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-medium hover:bg-slate-50 transition-colors">
            Book a Demo
          </button>
        </div>
        
        {/* Dashboard Mockup */}
        <div className="relative max-w-5xl mx-auto rounded-2xl border border-slate-200 bg-slate-50 shadow-md overflow-hidden aspect-[4/3] md:aspect-[21/9]">
          {/* Mac-style Window Header */}
          <div className="h-12 border-b border-slate-200 bg-white flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
          </div>
          {/* Dashboard Skeleton Body */}
          <div className="p-4 md:p-8 flex gap-6 h-full">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col gap-4 w-48 border-r border-slate-200 pr-6 h-full">
              <div className="h-8 bg-slate-200/60 rounded-lg w-full mb-4"></div>
              <div className="h-4 bg-slate-200/60 rounded-md w-3/4"></div>
              <div className="h-4 bg-slate-200/60 rounded-md w-5/6"></div>
              <div className="h-4 bg-slate-200/60 rounded-md w-full"></div>
              <div className="h-4 bg-slate-200/60 rounded-md w-2/3"></div>
            </div>
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col gap-4 md:gap-6">
              {/* Stat Cards */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="h-20 md:h-24 bg-white rounded-xl border border-slate-200 shadow-sm flex-1 flex flex-col justify-center px-6">
                  <div className="w-8 h-8 rounded-full bg-blue-50 mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                </div>
                <div className="h-20 md:h-24 bg-white rounded-xl border border-slate-200 shadow-sm flex-1 flex flex-col justify-center px-6">
                  <div className="w-8 h-8 rounded-full bg-blue-50 mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                </div>
                <div className="hidden md:flex h-24 bg-white rounded-xl border border-slate-200 shadow-sm flex-1 flex-col justify-center px-6">
                  <div className="w-8 h-8 rounded-full bg-blue-50 mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                </div>
              </div>
              {/* Big Chart Area */}
              <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col">
                <div className="h-4 bg-slate-200 rounded w-1/4 mb-6"></div>
                <div className="flex-1 border-b border-slate-100 flex items-end gap-2 pb-0">
                   <div className="w-full bg-blue-100 rounded-t-sm h-[30%]"></div>
                   <div className="w-full bg-blue-200 rounded-t-sm h-[45%]"></div>
                   <div className="w-full bg-blue-300 rounded-t-sm h-[35%]"></div>
                   <div className="w-full bg-blue-400 rounded-t-sm h-[60%]"></div>
                   <div className="w-full bg-blue-500 rounded-t-sm h-[85%]"></div>
                   <div className="w-full bg-blue-600 rounded-t-sm h-[70%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="bg-slate-50 py-16 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-slate-500 tracking-wider uppercase mb-10">
          Trusted by over 500+ MENA e-commerce stores
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-2xl font-bold text-slate-800">
            <Hexagon className="w-8 h-8 text-slate-800" /> BrandOne
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold text-slate-800">
            <CircleDashed className="w-8 h-8 text-slate-800" /> StoreFlow
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold text-slate-800">
            <Triangle className="w-8 h-8 text-slate-800" /> EcomPlus
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold text-slate-800">
            <Square className="w-8 h-8 text-slate-800" /> ShopSync
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <BrainCircuit className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">AI Churn Prediction</h3>
            <p className="text-slate-600 leading-relaxed">
              Our ML models analyze purchase history to identify dropping engagement before the customer leaves.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <MessageSquare className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Automated Campaigns</h3>
            <p className="text-slate-600 leading-relaxed">
              Trigger personalized WhatsApp messages exactly when a customer is likely to churn with customized discount codes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <LineChart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">LTV Analytics</h3>
            <p className="text-slate-600 leading-relaxed">
              Track the lifetime value of your recovered customers and measure the direct ROI of your retention campaigns in real-time.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
          Ready to boost your store's revenue?
        </h2>
        <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <BrainCircuit className="text-blue-600 w-6 h-6" />
          <span className="text-lg font-bold text-slate-900 tracking-tight">RetainIQ</span>
        </div>
        <p className="text-slate-600 text-sm">
          © 2026 RetainIQ. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
