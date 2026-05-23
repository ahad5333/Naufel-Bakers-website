import React from 'react';
import { NAV_LINKS } from '../constants';
import { InstagramIcon, MapPinIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  const googleBusinessUrl = "https://www.google.com/maps/place/Naufel+Bakers/@16.7745852,78.1328434,17z/data=!4m7!3m6!1s0x3bca31fe33484ac3:0x5d66ab2a96552c4d!8m2!3d16.7745852!4d78.1328434!10e9!16s%2Fg%2F11ry8k4c6c?hl=en-IN&entry=ttu";
  const instagramUrl = "https://www.instagram.com/naufelbakers/";

  return (
    <footer className="bg-brown-dark text-cream">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h2 className="text-3xl font-serif font-bold">Naufel Bakers</h2>
            <p className="text-gray-300 text-base">
              Baking Happiness Every Day.
            </p>
            <div className="flex space-x-6">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><span className="sr-only">Instagram</span><InstagramIcon /></a>
              <a href={googleBusinessUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><span className="sr-only">Google Maps</span><MapPinIcon /></a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Navigation</h3>
                <ul className="mt-4 space-y-4">
                  {NAV_LINKS.map(link => (
                    <li key={link.name}>
                      <a href={link.href} className="text-base text-gray-300 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact</h3>
                <ul className="mt-4 space-y-4 text-base text-gray-300">
                  <li>
                    H NO 5-6-134/2/A, beside RELAINCE SMART POINT,<br/>
                    Teachers Colony, Mahabubnagar,<br/>
                    Telangana 509001, India
                  </li>
                  <li>(+91) 91547 86835</li>
                  <li>hello@naufelbakers.com</li>
                </ul>
              </div>
            </div>
             <div className="md:grid md:grid-cols-1 md:gap-8">
                <div>
                    <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Hours</h3>
                    <ul className="mt-4 space-y-4 text-base text-gray-300">
                      <li>Monday - Sunday</li>
                      <li>10:00 AM - 10:00 PM</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
        {/* Trust & Hygiene Badges */}
        <div className="mt-16 border-t border-gray-800 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center justify-center">
            {/* Badge 1: FSSAI */}
            <div className="flex flex-col items-center space-y-2.5">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-accent">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-200">FSSAI Registered</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">Reg. No. 23624021000123</p>
              </div>
            </div>

            {/* Badge 2: 100% Butter */}
            <div className="flex flex-col items-center space-y-2.5">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-accent">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z"/></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-200">100% Pure Butter</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">No Dalda or Margarine</p>
              </div>
            </div>

            {/* Badge 3: Baked Fresh Daily */}
            <div className="flex flex-col items-center space-y-2.5">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-accent">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-200">Baked Fresh Daily</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">Fresh batches every morning</p>
              </div>
            </div>

            {/* Badge 4: Hygiene Certified */}
            <div className="flex flex-col items-center space-y-2.5">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-accent">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-200">Hygiene Certified</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">Strict safety & sanitization</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">&copy; {new Date().getFullYear()} Naufel Bakers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;