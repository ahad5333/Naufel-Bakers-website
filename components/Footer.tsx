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
                    Jadcherla, Mahabubnagar,<br/>
                    Telangana 509001, India
                  </li>
                  <li>(+91) 7671073675</li>
                </ul>
              </div>
            </div>
             <div className="md:grid md:grid-cols-1 md:gap-8">
                <div>
                    <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Hours</h3>
                    <ul className="mt-4 space-y-4 text-base text-gray-300">
                      <li>Monday - Sunday</li>
                      <li>9:00 AM - 11:00 PM</li>
                    </ul>
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