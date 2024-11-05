{/* Previous imports remain the same */}
import React, { useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, ExternalLink, Code2 } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import ContactForm from './components/ContactForm';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section - remains the same */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Nazier Abdurahman
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer crafting exceptional digital experiences through elegant code
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a 
              href="https://github.com/Nazier-123" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a 
              href="https://www.linkedin.com/in/nazier-abdurahman-1551a3266/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a 
              href="mailto:nazierabdurahman2@gmail.com" 
              className="hover:text-blue-400 transition-colors"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce w-8 h-8" />
      </section>

      {/* Updated Projects Section */}
      <section className="py-20 px-4" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Calculator (No JavaScript)"
              description="An innovative calculator application built purely with HTML and CSS, demonstrating advanced CSS techniques and logical operations without JavaScript."
              image="https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80&w=800"
              tags={['HTML', 'CSS', 'No JavaScript']}
              link="https://github.com/Nazier-123/Calculator_no_JS"
            />
            <ProjectCard
              title="Project H - 2D Action Game"
              description="An engaging 2D action game developed using Godot Engine and GDScript, featuring dynamic gameplay mechanics and immersive storytelling."
              image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
              tags={['Godot', 'GDScript', 'Game Development']}
              link="https://nazier-123.itch.io/project-h"
            />
          </div>
        </div>
      </section>

      {/* Skills Section - Updated to reflect your tech stack */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <SkillBadge icon={<Code2 className="w-5 h-5" />} name="HTML" />
            <SkillBadge icon={<Code2 className="w-5 h-5" />} name="CSS" />
            <SkillBadge icon={<Code2 className="w-5 h-5" />} name="JavaScript" />
            <SkillBadge icon={<Code2 className="w-5 h-5" />} name="GDScript" />
            <SkillBadge icon={<Code2 className="w-5 h-5" />} name="Godot" />
            <SkillBadge icon={<Code2 className="w-5 h-5" />} name="React" />
            <SkillBadge icon={<Code2 className="w-5 h-5" />} name="Git" />
          </div>
        </div>
      </section>

      {/* Contact Section - remains the same */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <button
            onClick={() => setShowContactForm(true)}
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Get in Touch
            <Mail className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer - remains the same */}
      <footer className="py-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Nazier Abdurahman. All rights reserved.</p>
      </footer>

      {/* Contact Form Modal - remains the same */}
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </div>
  );
}

export default App;