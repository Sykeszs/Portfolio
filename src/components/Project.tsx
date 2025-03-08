import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import TaskManagement from '../assets/TaskManagement.png';
import bloosomTree from '../assets/bloosomTrees.png';
import ToddlerBuddy from '../assets/ToddlerBuddy.png';
import BotanicBliss from '../assets/BotanicBliss.jpg';
import './Project.css';
import { useTheme } from '../ThemeContext';
import Weather from '../assets/Weather.png'

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubLink?: string;
  liveDemoLink?: string;
}



const Project: React.FC<ProjectProps> = ({ title, description, technologies, imageUrl, githubLink, liveDemoLink }) => {
  const { darkMode } = useTheme();

  return (
    <div className="relative group w-full h-80 mb-6 perspective-1000">
      <div className="flip-card-inner w-full h-full absolute transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        
        {/* Front of the card */}
        <div className="flip-card-front w-full h-full bg-white shadow-md rounded backface-hidden absolute top-0 left-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Back of the card */}
        <div className={`flip-card-back w-full h-full p-4 text-center rounded transform rotate-y-180 backface-hidden absolute top-0 left-0 ${darkMode ? 'bg-CB text-CA' : 'bg-CD text-CB'}`}>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="mb-4">{description}</p>
          <div className="mb-4">
            <strong>Technologies:</strong> {technologies.join(', ')}
          </div>
          <div className="flex justify-center space-x-4">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:underline"
              >
                <FaGithub /> <span>GitHub</span>
              </a>
            )}
            {liveDemoLink && (
              <a
                href={liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:underline"
              >
                <FaExternalLinkAlt /> <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectList: React.FC = () => {
  const { darkMode } = useTheme();

  const projects = [
    {
      title: 'Task Management',
      description: 'A powerful task management app that helps you stay organized, track progress, and boost productivity with seamless offline and online support.',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS'],
      imageUrl: TaskManagement,
      githubLink: 'https://github.com/Sykeszs/Task-Management',
      liveDemoLink: 'https://task-management-mocha-phi.vercel.app/',
    },
    {
      title: 'Botanic Bliss',
      description: 'A smart solution for plant care with automated watering and real-time sensor monitoring.',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      imageUrl: BotanicBliss,
      githubLink: 'https://github.com/Sykeszs/BotanicBliss',
    },
    {
      title: 'Blossom Trees',
      description: 'A simple front-end design',
      technologies: ['React.js', 'Tailwind CSS'],
      imageUrl: bloosomTree,
      githubLink: 'https://github.com/Sykeszs/TestProgram',
      liveDemoLink: 'https://test-program-psi.vercel.app/',
    },
    {
      title: 'Toddler Buddy',
      description: 'A smart parenting app that helps track a toddlers growth, daily activities, and well-being with personalized insights and interactive features.',
      technologies: ['html', 'CSS', 'Javascript'],
      imageUrl: ToddlerBuddy,
      githubLink: 'https://github.com/Sykeszs/ToddlerBuddy',
      liveDemoLink: 'https://toddler-buddy.vercel.app/',
    },
    {
      title: 'Weather',
      description: 'A web application that displays current weather conditions using the OpenWeather API.',
      technologies: ['React.js', 'Tailwind CSS', 'Vite', 'Javascript', 'OpenWeather API'],
      imageUrl: Weather,
      githubLink: 'https://github.com/Sykeszs/Weather',
      liveDemoLink: 'https://weather-weather-2se4x1tqz-sykes-projects-8b4bf7a0.vercel.app/',
    },
  ];

  return (
    <div className={`${darkMode ? 'bg-CD' : 'bg-CA'}`}>
    <h1 className={`text-3xl font-semibold text-center ${darkMode ? "text-CB" : "text-CD"}`}>Projects</h1>
    <div className={`max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${darkMode ? 'bg-CD' : 'bg-CA'}`}>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          imageUrl={project.imageUrl}
          githubLink={project.githubLink}
          liveDemoLink={project.liveDemoLink}
        />
      ))}
    </div>
    </div>
  );
};

export default ProjectList;
