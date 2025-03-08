import React from 'react';
import MS from '../assets/MySelf.png';
import MSL from '../assets/MySelfLight.png';
import { useTheme } from '../ThemeContext';

const AboutMe: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="about-me"
      className={`relative w-full ${darkMode ? 'bg-CD' : 'bg-CA'}`}
    >
      <div className="max-w-7xl mx-auto py-12 lg:px-32">
        {/* Content Block with Overlay */}
        <div className="rounded-lg px-8 pt-12">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
            {/* About Me Text */}
            <div className="lg:w-1/2 text-center lg:text-left space-y-2">
              <p className={`text-left text-3xl font-black leading-relaxed ${darkMode ? 'text-CB' : 'text-CD'}`}>
                Hi! I'm Steven
              </p>
              <p className={`text-left text-2xl font-black leading-relaxed ${darkMode ? 'text-CB' : 'text-CD'}`}>
                Web Developer
              </p>
              <p className={`text-left pb-8 text-xs leading-relaxed ${darkMode ? 'text-CB' : 'text-CD'}`}>
              Constructing digital platforms and interactive experiences. Crafting the blueprint, aesthetics, and behavior of online environments. Developing the architecture, interface, and logic of web-based systems.

              </p>

              {/* Button */}
              <div>
                <a
                  href="#contact"
                  className={`px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition ${darkMode ? 'bg-CB text-CD' : 'bg-CD text CA'}`}
                >
                  Contact Me
                </a>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="w-60 h-60 lg:w-96 lg:h-96 lg:items-center lg:justify-items-center rounded-full">
              <img
                src={`${darkMode ? MSL : MS}`} 
                alt="Your Name"
                className="w-full h-full object-cover"
              />
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
