import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skill';
import ProjectList from './components/Project';
import Contact from './components/Contact';
import { ThemeProvider } from './ThemeContext'; // Import ThemeProvider

const App: React.FC = () => {
  return (
    <ThemeProvider> {/* Wrap your app with the ThemeProvider */}
      <div>
        <Header />
        <section id="about">
          <AboutMe />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <ProjectList />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </ThemeProvider>
  );
};

export default App;
