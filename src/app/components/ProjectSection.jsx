"use client";
import React, { useState, useRef } from "react";

const projectsData = [
  {
    id: 1,
    title: "QueueCheck: Decentralized Queue Tracking dApp",
    description: "A decentralized application built on the IOTA ecosystem to track and manage service queues transparently. Leveraging IOTA's Tangle technology, this project ensures tamper-proof queue data, reduces wait times through real-time tracking, and provides a trustless interface for users and service providers.",
    image: "/images/projects/QueueCheck_IOTA.png",
    tag: ["All", "Web3"],
    link: "https://queuecheck.vercel.app/",
    role: "Blockchain Developer",
    type: "Development Project",
    date: "2025"
  },
  {
    id: 2,
    title: "Enterprise AWS Security Compliance Auditor",
    description: "An automated security auditing tool designed to scan AWS environments for compliance with enterprise-grade security standards. It identifies misconfigurations in S3 buckets, IAM roles, and security groups, providing a detailed report to mitigate potential vulnerabilities and ensure cloud infrastructure integrity.",
    image: "/images/projects/AWS_Security.png",
    tag: ["All", "Security"],
    link: "https://aws-audit.streamlit.app/",
    role: "Cloud Security Engineer",
    type: "Development Project",
    date: "2025"
  },
  {
    id: 3,
    title: "Digital Transformation of LMS & CKMS using Scrumban",
    description: "Designed a comprehensive project plan for Learning Management System & Customer Knowledge Management System implementation at PT Pembangunan Property. Applied Scrumban methodology to manage project scope, cost, quality, risk, and stakeholder engagement. Delivered project charter, WBS, Gantt chart, and risk analysis, simulating a 17-week, ~Rp 496M digital transformation initiative.",
    image: "/images/projects/LMS_CKMS.png",
    tag: ["All", "Academic", "Business"],
    link: "https://drive.google.com/file/d/1rcb9cuLHVMeRk-O5gVZ3q2iAV505Ujd_/view?usp=sharing",
    role: "Project Manager, Business Analyst",
    type: "Academic Project",
    date: "2025"
  },
  {
    id: 4,
    title: "Enterprise Architecture for E-Commerce (TOGAF)",
    description: "Designed enterprise architecture blueprint for an e-commerce case study using TOGAF ADM framework. Mapped business, data, application, and technology layers, addressing scalability, customer experience, and security. Applied EA modeling (ArchiMate, matrices, integration models) to align IT infrastructure with business goals and digital transformation strategy.",
    image: "/images/projects/EA_TOGAF.png",
    tag: ["All", "Academic", "Business"],
    link: "https://drive.google.com/file/d/1Q_5mHskTaFOYajorwtgK5LyaLgkoKJoS/view?usp=sharing",
    role: "Enterprise Architect",
    type: "Academic Project",
    date: "2025"
  },
  {
    id: 5,
    title: "Customer Churn Prediction using Machine Learning",
    description: "Built predictive models to identify customers at risk of churn, uncovering inefficiencies in retention strategies. Achieved 97.9% accuracy and 99.7% AUC; highlighted key drivers such as tenure, cashback usage, and delivery distance. Translated technical findings into actionable insights to support data-driven decision-making for customer retention.",
    image: "/images/projects/CustomerChurnPrediction.png",
    tag: ["All", "Data", "Academic"],
    link: "https://drive.google.com/file/d/13CTwwy0UHlk6L4QGBTO5B4OwFzV1DFke/view?usp=sharing",
    role: "Data Analyst, ML Engineer",
    type: "Academic Project",
    date: "2024"
  },
  {
    id: 6,
    title: "Bitcoin Price Prediction: ARIMA vs FBProphet",
    description: "Comparative analysis research paper presented at IEEE International Conference on AI and Data Analytics (ICAD) 2025, hosted by Tufts University. Analyzed Bitcoin price movements using time series forecasting models to evaluate prediction accuracy and performance.",
    image: "/images/projects/BitcoinPricePrediction.jpeg",
    tag: ["All", "Data", "Research"],
    link: "https://ieeexplore.ieee.org/document/11114051",
    role: "Researcher, Author",
    type: "Publication",
    date: "2025"
  },
  {
    id: 7,
    title: "Brain Tumor Detection",
    description: "Leveraged deep learning techniques to detect brain tumors in medical images. Developed classification model using Python, TensorFlow, Keras, and OpenCV. Created a mobile application using Android Studio and TensorFlow Lite model, enabling real-time brain tumor detection from selected images.",
    image: "/images/projects/BrainTumorDetection.png",
    tag: ["All", "Mobile", "Data"],
    link: "https://github.com/verodw/Brain-Tumor-Detect-App",
    role: "ML Engineer, Mobile Developer",
    type: "Development Project",
    date: "2024"
  },
  {
    id: 8,
    title: "TapPat Game Store App",
    description: "A mobile application built with Flutter that allows users to easily explore free games and purchase their favorite games. Features an extensive collection of games across various genres with an intuitive interface ensuring easy navigation and seamless browsing experience.",
    image: "/images/projects/TapPat_GameStore.png",
    tag: ["All", "Mobile"],
    link: "https://drive.google.com/drive/folders/17wrIuAM-ZbJEzVzb576gVpzWFw0w7-5b?usp=sharing",
    role: "Project Manager, Mobile Developer",
    type: "Development Project",
    date: "2024"
  },
  {
    id: 9,
    title: "Sentiment Analysis - Makeup Alley Reviews",
    description: "Developed sentiment analysis application for cosmetic product reviews using aspect-based analysis with TF-IDF and SVM algorithms. Achieved 74.04% accuracy in categorizing reviews into positive, neutral, and negative sentiments, demonstrating practical utility in understanding customer sentiments.",
    image: "/images/projects/SentimentAnalysis_MakeupAlley.png",
    tag: ["All", "Data", "Research"],
    link: "https://www.canva.com/design/DAF4FmXL058/AHuPSgG5mLXddl9yOl4FJQ/view",
    role: "ML Engineer, Data Analyst",
    type: "Development Project",
    date: "2024"
  },
  {
    id: 10,
    title: "Skinmates iOS",
    description: "iOS app developed using Swift that retrieves product listings from the Makeup API. Features Core Data for efficient storage, detailed product information viewing, user review posting and reading, and review modification capabilities.",
    image: "/images/projects/Skinmates_iOS.png",
    tag: ["All", "Mobile"],
    link: "https://github.com/verodw/skinmatesmms.git",
    role: "iOS Developer",
    type: "Development Project",
    date: "2023"
  },
];

// 3D Interactive Card Component
const InteractiveProjectCard = ({ project, onClick }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -8;
    const rotateYValue = ((x - centerX) / centerX) * 8;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovering(false);
  };

  const truncatedDesc = project.description.length > 150 
    ? project.description.substring(0, 150) + "..." 
    : project.description;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="relative cursor-pointer transition-transform duration-300"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovering ? 'scale(1.02)' : 'scale(1)'}`,
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="bg-[#2A2438] border border-gray-700 rounded-lg overflow-hidden hover:border-purple-400/50 transition-colors group">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden bg-gray-800">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <div className="absolute top-3 right-3 z-20 bg-purple-600/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
            {project.type}
          </div>
          {project.image && (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          )}
        </div>
        
        {/* Content Section */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-400 text-xs">{project.date}</span>
            <span className="text-gray-600">•</span>
            <span className="text-purple-400 text-xs">{project.role}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {truncatedDesc}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tag.filter(t => t !== "All").map((tag, idx) => (
              <span 
                key={idx}
                className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded border border-purple-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Shine Effect */}
      <div
        className="absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${rotateY * 5 + 50}% ${-rotateX * 5 + 50}%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)`,
          opacity: isHovering ? 1 : 0,
        }}
      />
    </div>
  );
};

// Modal Component
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-[#1a1625] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          {project.image && (
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          )}
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
              {project.type}
            </span>
            <span className="text-gray-400 text-sm">{project.date}</span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-3">{project.title}</h2>
          
          <p className="text-purple-400 font-semibold mb-4">Role: {project.role}</p>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tag.filter(t => t !== "All").map((tag, idx) => (
              <span 
                key={idx}
                className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-lg text-sm border border-purple-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.link && project.link !== "#" && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              View Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Project Section
const ProjectSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const tags = ["All", "Academic", "Business", "Data", "Mobile", "Research", "Security", "Web3"];
  
  const filteredProjects = projectsData.filter(project =>
    selectedTag === "All" ? true : project.tag.includes(selectedTag)
  );

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">
            Featured Projects & Research
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my work spanning mobile development, data science, business analysis, and research
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedTag === tag
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-[#2A2438] text-gray-400 border border-gray-700 hover:border-purple-500/50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <InteractiveProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectSection;