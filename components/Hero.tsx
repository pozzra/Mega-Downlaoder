import React from 'react';
import { ArrowRight, DownloadCloud, Zap, ShieldCheck } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-primary text-sm font-medium mb-6 animate-fade-in-up">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          Update ថ្មីបំផុតសម្រាប់ឆ្នាំ 2025
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-white">MEGA DOWNLOADER</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#4affb0] to-primaryDark">
            v10.5
          </span>
        </h1>

        <p className="text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Tools ទាញយកវីដេអូលឿនបំផុតនៅកម្ពុជា។ គាំទ្រ <span className="text-white font-semibold">YouTube, TikTok, Facebook, Instagram</span> និងគ្រប់ Link!
          ទាញយកកម្រិត 4K ច្បាស់ឥតខ្ចោះ។
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <a 
            href="https://t.me/kun_amra" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primaryDark text-background hover:text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:shadow-[0_0_30px_rgba(0,255,136,0.6)] flex items-center justify-center gap-2"
          >
            ទិញ Key ឥឡូវនេះ
            <ArrowRight size={20} />
          </a>
          <a 
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 bg-[#161b22] border border-gray-700 hover:border-primary text-secondary hover:text-primary font-bold text-lg rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            មើលតម្លៃ
          </a>
        </div>

        {/* Stats / Mini Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20 text-left">
          <div className="bg-[#161b22]/80 backdrop-blur border border-gray-800 p-4 rounded-lg flex items-center gap-4">
            <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg">
              <DownloadCloud size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white">All in One</h3>
              <p className="text-sm text-gray-400">គាំទ្រ 1000+ វេបសាយ</p>
            </div>
          </div>
          <div className="bg-[#161b22]/80 backdrop-blur border border-gray-800 p-4 rounded-lg flex items-center gap-4">
            <div className="p-3 bg-yellow-500/20 text-yellow-400 rounded-lg">
              <Zap size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white">ល្បឿនគុណនឹង 10</h3>
              <p className="text-sm text-gray-400">បច្ចេកវិទ្យា aria2c</p>
            </div>
          </div>
          <div className="bg-[#161b22]/80 backdrop-blur border border-gray-800 p-4 rounded-lg flex items-center gap-4">
            <div className="p-3 bg-primary/20 text-primary rounded-lg">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white">សុវត្ថិភាព 100%</h3>
              <p className="text-sm text-gray-400">គ្មានមេរោគ គ្មាន Error</p>
            </div>
          </div>
        </div>

        {/* Placeholder for Screenshots - Using styled divs to simulate UI */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-30"></div>
          <div className="relative bg-[#0d1117] rounded-xl border border-gray-800 shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
             <div className="text-center p-8">
                <img 
                    src="https://picsum.photos/1200/675?grayscale" 
                    alt="App Screenshot" 
                    className="opacity-50 hover:opacity-100 transition-opacity duration-500 object-cover w-full h-full absolute inset-0"
                />
                <div className="relative z-10 bg-black/70 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
                    <p className="text-primary font-bold text-xl mb-2">MEGA DOWNLOADER UI</p>
                    <p className="text-gray-300">រូបភាពកម្មវិធីបង្ហាញនៅទីនេះ</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};