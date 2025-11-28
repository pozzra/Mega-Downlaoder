import React from 'react';
import { Send, Download } from 'lucide-react';

export const Footer = () => {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    // Simulate downloading a README file since we don't have the .exe host
    const content = `
MEGA DOWNLOADER v10.5 - TRIAL VERSION INFO
==========================================

Thank you for downloading the MEGA DOWNLOADER v10.5 demo!

To get the full functional software (.exe) and your activation key:
1. Join our Telegram Channel: https://t.me/kun_amra
2. Contact Admin @kun_amra to purchase a Lifetime Key (9.99$).
3. You will receive the software link and a unique License Key immediately.

Features included in Full Version:
- Unlimited Downloads (YouTube, TikTok, FB, IG)
- 4K Video Quality
- High Speed (aria2c)
- Auto Updates
- Lifetime Support

Contact: @kun_amra
    `;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "READ_ME_TRIAL.txt";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    alert("ការទាញយក Demo ចាប់ផ្ដើម! សូមអាន file ដែលបានទាញយក។");
  };

  return (
    <footer className="bg-[#0d1117] border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">MEGA DOWNLOADER</h3>
            <p className="text-gray-500">v10.5 © 2025. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
             <button 
              onClick={handleDownload}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2 border border-gray-700 cursor-pointer"
            >
              <Download size={18} />
              ទាញយក Demo (Free 3 ថ្ងៃ)
            </button>
            <a 
              href="https://t.me/kun_amra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
            >
              <Send size={18} />
              Chat តាម Telegram
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-600">
          <p>Designed with ❤️ for Cambodian Users.</p>
        </div>
      </div>
    </footer>
  );
};