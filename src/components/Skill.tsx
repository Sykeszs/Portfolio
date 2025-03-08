import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '../ThemeContext';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaFigma,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiFirebase,
  SiSqlite,
  SiPostman,
  SiVite,
  SiSharp,
  SiJet,
  SiAuth0,
} from 'react-icons/si';


const Skills: React.FC = () => {
  const { darkMode } = useTheme();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const skills = {
    frontend: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, percentage: 90 },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" />, percentage: 90 },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, percentage: 80 },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-700" />, percentage: 80 },
      { name: 'React.js', icon: <FaReact className="text-blue-500" />, percentage: 95 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" />, percentage: 90 },
      { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" />, percentage: 60 },
      { name: 'React Native', icon: <SiReact className="text-blue-500" />, percentage: 90 },
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, percentage: 80 },
      { name: 'Python', icon: <FaPython className="text-blue-400" />, percentage: 70 },
      { name: 'PHP', icon: <FaPhp className="text-indigo-600" />, percentage: 20 },
      { name: 'Java', icon: <FaJava className="text-red-500" />, percentage: 40 },
      { name: 'C#', icon: <SiSharp className="text-green-600" />, percentage: 90 },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-600" />, percentage: 90 },
      { name: 'SQLite', icon: <SiSqlite className="text-gray-600" />, percentage: 20 },
      { name: 'REST APIs', icon: <SiPostman className="text-orange-500" />, percentage: 30 },
    ],
    tools: [
      { name: 'Git', icon: <FaGitAlt className="text-red-500" />, percentage: 35 },
      { name: 'GitHub', icon: <FaGithub className="text-gray-900" />, percentage: 90 },
      { name: 'GitLab', icon: <FaGitlab className="text-orange-600" />, percentage: 20 },
      { name: 'Vite', icon: <SiVite className="text-purple-500" />, percentage: 80 },
      { name: 'JWT', icon: <SiJet className="text-blue-500" />, percentage: 25 },
      { name: 'Auth0', icon: <SiAuth0 className="text-gray-600" />, percentage: 70 },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" />, percentage: 80 },
      { name: 'Figma', icon: <FaFigma className="text-pink-500" />, percentage: 100 },
    ],
  };

  const renderSkills = (skillSet: { name: string; icon: JSX.Element; percentage: number }[]) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skillSet.map((skill) => (
        <div
          key={skill.name}
          className={`relative text-center p-4 border rounded-lg shadow-md group hover:bg-opacity-50 transition-all duration-300 ${darkMode ? "bg-CA" : "bg-CD"}`}
        >
          <div className="flex justify-center mb-2">
            <div className="text-5xl">{skill.icon}</div>
          </div>
          <p className={`text-lg font-semibold ${darkMode ? "text-CD" : "text-CA"}`}>{skill.name}</p>

          {/* Hover Circle Gauge */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="relative w-16 h-16 rounded-full">
              {/* Outer ring (Dial-like gauge effect) */}
              <div
                className="absolute inset-0 rounded-full border-8 border-CC"
              />
              {/* Inner gauge (Green part representing the percentage) */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(#4caf50 ${skill.percentage}%, transparent 0)`,
                }}
              />
              {/* Center percentage text */}
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                {skill.percentage}%
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );


  return (
    <section id="skills" className={`py-12 ${darkMode ? "bg-CD" : "bg-CA"}`} >
      <div className="max-w-7xl mx-auto px-6 lg:px-32">
        <h2 className={`text-4xl font-bold text-center mb-8 ${darkMode ? "text-CB" : "text-CD"}`}>
          My Skills
        </h2>

        <Slider {...sliderSettings}>
          {/* Frontend Slide */}
          <div>
            <h3 className={`text-2xl font-semibold text-center mb-4 ${darkMode ? "text-CB" : "text-CD"}`}>
              Frontend Development
            </h3>
            {renderSkills(skills.frontend)}
          </div>

          {/* Backend Slide */}
          <div>
            <h3 className={`text-2xl font-semibold text-center mb-4 ${darkMode ? "text-CB" : "text-CD"}`}>
              Backend Development
            </h3>
            {renderSkills(skills.backend)}
          </div>

          {/* Tools Slide */}
          <div>
            <h3 className={`text-2xl font-semibold text-center mb-4 ${darkMode ? "text-CB" : "text-CD"}`}>
              Tools & Frameworks
            </h3>
            {renderSkills(skills.tools)}
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
