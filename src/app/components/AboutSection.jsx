"use client";
import React, { useState, useTransition, useEffect, useRef } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

// ScrollReveal Component
const ScrollReveal = ({ children, direction = 'up', delay = 0, duration = 1000, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const directionStyles = {
    up: 'translate-y-20',
    down: '-translate-y-20',
    left: 'translate-x-20',
    right: '-translate-x-20',
    fade: ''
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 translate-x-0' 
          : `opacity-0 ${directionStyles[direction]}`
      } ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

const skills = [
  {
    category: "Business & Analysis",
    items: [
      { name: "Business Analysis" },
      { name: "System Analysis" },
      { name: "Requirements Gathering" },
      { name: "Data Analysis" },
      { name: "Design Thinking" },
      { name: "Project Management" },
    ]
  },
  {
    category: "Development",
    items: [
      { name: "React Native", image: "https://vectorified.com/images/icon-react-native-24.png" },
      { name: "React", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" },
      { name: "Flutter", image: "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png" },
      { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" },
      { name: "TypeScript" },
      { name: "Python", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "RESTful APIs" },
    ]
  },
  {
    category: "Methodologies",
    items: [
      { name: "Agile/Scrum" },
      { name: "TOGAF" },
      { name: "Scrumban" },
      { name: "Design Thinking" },
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Figma", image: "https://pnghq.com/wp-content/uploads/figma-logo-png-transparent-svg-vector-79954-768x1152.png" },
      { name: "Git", image: "https://logospng.org/download/git/git-2048.png" },
      { name: "Firebase", image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
      { name: "SQL" },
      { name: "Android Studio", image: "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png" },
      { name: "VS Code", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519" },
    ]
  }
];

const certifications = [
  { 
    title: 'McKinsey Forward Program', 
    provider: 'McKinsey & Company', 
    src: '/images/certificates/McKinseyForward-Veronica.pdf' 
  },
  { 
    title: 'AWS Machine Learning Fundamentals', 
    provider: 'Udacity', 
    src: '/images/certificates/AWS ML Fundamentals Udacity-Vero.pdf' 
  },
  { 
    title: 'Fundamentals of Deep Learning', 
    provider: 'NVIDIA', 
    src: '/images/certificates/NVIDIA_Fundamental Deep Learning_Veronica Dwiyanti.pdf' 
  },
  { 
    title: 'ACA Cloud Computing', 
    provider: 'Alibaba Cloud', 
    src: '/images/certificates/ACA-CloudComputing-Veronica.pdf' 
  },
  { 
    title: 'AI Programming with Python', 
    provider: 'Udacity', 
    src: '/images/certificates/AI Programming with Python-Udacity.pdf' 
  },
  { 
    title: 'React Native by Meta', 
    provider: 'Coursera', 
    src: '/images/certificates/React Native-Meta.pdf' 
  },
  { 
    title: 'Generative AI and its Business Applications', 
    provider: 'NSW Government', 
    src: '/images/certificates/Generative AI and its Business Applications-NSW Government.pdf' 
  },
  { 
    title: 'Machine Learning for Beginners', 
    provider: 'Dicoding', 
    src: '/images/certificates/Machine Learning for Beginners-Dicoding.pdf' 
  },
  { 
    title: 'Basic Python Programming', 
    provider: 'Dicoding', 
    src: '/images/certificates/Basic Python Programming-Dicoding.pdf' 
  },
  { 
    title: 'Basic Javascript Programming', 
    provider: 'Dicoding', 
    src: '/images/certificates/Basic Javascript Programming-Dicoding.pdf' 
  },
  { 
    title: 'Fundamentals of Data Visualization', 
    provider: 'Dicoding', 
    src: '/images/certificates/Fundamentals of Data Visualization-Dicoding.pdf' 
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("about");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className='text-white py-20 px-4 relative overflow-hidden'>
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-12">
            <h2 className='text-4xl font-bold text-white mb-3'>About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
        </ScrollReveal>
        
        {/* Tabs */}
        <ScrollReveal direction="up" delay={100}>
          <div className='flex flex-row justify-center gap-2 mb-12 flex-wrap'>
            <TabButton selectTab={() => handleTabChange("about")} active={tab === "about"}>
              About
            </TabButton>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              Certifications
            </TabButton>
          </div>
        </ScrollReveal>

        {/* Content */}
        {tab === 'about' && (
          <div className='lg:grid lg:grid-cols-2 gap-12 items-center'>
            <ScrollReveal direction="left" delay={100}>
              <div className="rounded-lg overflow-hidden mb-8 lg:mb-0">
                <Image 
                  src="/images/aboutme_google.png" 
                  width={500} 
                  height={500} 
                  alt="About Me Veronica" 
                  className="rounded-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollReveal>
            <div className="space-y-5">
              <ScrollReveal direction="right" delay={100}>
                <p className="text-gray-300 text-base leading-relaxed">
                  Hi there! I'm Veronica, currently pursuing my <span className="text-purple-300 font-medium">Master's in Information Systems Management</span> at Bina Nusantara University with a focus on Information Systems Strategic Management.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={200}>
                <p className="text-gray-300 text-base leading-relaxed">
                  With a background in <span className="text-purple-300 font-medium">Mobile Application Technology</span> and hands-on experience as a Mobile App Developer, I bridge the gap between business strategy and technical implementation. My expertise spans across mobile development, system analysis, business analysis, and leveraging AI/ML technologies to drive digital transformation.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={300}>
                <p className="text-gray-300 text-base leading-relaxed">
                  I've contributed to diverse projects ranging from cross-platform mobile applications to enterprise architecture design and AI-powered solutions. My approach combines strategic thinking with technical execution, ensuring solutions that deliver real business value.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={400}>
                <p className="text-gray-300 text-base leading-relaxed">
                  Currently, I'm excited about exploring the intersection of business strategy, system design, and emerging technologies to solve complex organizational challenges.
                </p>
              </ScrollReveal>
            </div>
          </div>
        )}

        {tab === 'skills' && (
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {skills.map((skillGroup, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <div className="bg-[#2A2438] border border-gray-700/50 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-4 text-white">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, index) => (
                      <div key={index} className="bg-[#1a1625] rounded-md px-3 py-2 border border-gray-700/30 hover:border-purple-400/40 transition-all duration-200 flex items-center gap-2">
                        {skill.image && (
                          <img src={skill.image} alt={skill.name} className="w-4 h-4" />
                        )}
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {tab === 'education' && (
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <ScrollReveal direction="left" delay={100}>
                <div className="bg-[#2A2438] border border-gray-700/50 rounded-lg p-6 hover:border-purple-400/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">Master of Information Systems Management</h3>
                      <p className="text-gray-300 mb-1">Bina Nusantara University</p>
                      <p className="text-gray-400 text-sm mb-3">Stream: Information Systems Strategic Management</p>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="bg-purple-500/10 text-purple-300 px-3 py-1.5 rounded-md border border-purple-500/20">
                          GPA: 3.99/4.00
                        </span>
                        <span className="text-gray-400">Expected 2026</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={200}>
                <div className="bg-[#2A2438] border border-gray-700/50 rounded-lg p-6 hover:border-purple-400/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">Bachelor of Computer Science</h3>
                      <p className="text-gray-300 mb-1">Bina Nusantara University</p>
                      <p className="text-gray-400 text-sm mb-3">Major: Mobile Application and Technology</p>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="bg-purple-500/10 text-purple-300 px-3 py-1.5 rounded-md border border-purple-500/20">
                          GPA: 3.56/4.00
                        </span>
                        <span className="text-gray-400">2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        )}

        {tab === 'certifications' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 50}>
                  <a 
                    href={cert.src} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-[#2A2438] border border-gray-700/50 rounded-lg p-4 hover:border-purple-400/50 transition-all duration-300 block"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium mb-1 group-hover:text-purple-300 transition-colors line-clamp-2">
                          {cert.title}
                        </h4>
                        <p className="text-gray-400 text-sm">{cert.provider}</p>
                      </div>
                      <svg className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;