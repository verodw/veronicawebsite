"use client";
import React from "react";

const experiences = [
  {
    role: 'Mobile App Developer Intern',
    description: [
      'Improved customer engagement by delivering a cross-platform mobile app, aligning technical implementation with business requirements and user experience goals',
      'Streamlined internal workflows through API integration and supporting operational efficiency',
      'Conducted end-to-end testing to ensure product stability and reduce operational risks prior to launch'
    ],
    workplace: 'Serenade Story',
    location: 'Indonesia',
    date: 'October 2024 - June 2025',
    type: 'internship'
  },
  {
    role: 'Software Engineering Fellow',
    description: [
      'Contributed to ideation and scoping of AI-powered web applications that streamlined workflows and improved decision-making',
      'Helped define use cases and validate a smart support agent prototype using OpenAI & Pinecone to improve information retrieval efficiency',
      'Collaborated in designing a SaaS product concept, including requirements mapping and integrating payment flows using Stripe',
      'Participated in mentorships with engineers from Google, Stanford, and Amazon to refine technical, solution design, and product strategy'
    ],
    workplace: 'Headstarter AI',
    location: 'United States',
    date: 'July 2024 - September 2024',
    type: 'fellowship'
  },
  {
    role: 'Full Stack Developer Intern',
    description: [
      'Supported digital transformation initiatives by analyzing business requirements and delivering improvements across internal systems',
      'Worked in an agile environment to refine requirements, review user stories, and deliver functional updates',
      'Collaborated with cross-functional teams to validate features, assist UAT, and ensure successful change adoption'
    ],
    workplace: 'PT Accelist Lentera Indonesia',
    location: 'Jakarta, Indonesia',
    date: 'February 2024 - August 2024',
    type: 'internship'
  },
];

const ExperienceCard = ({ role, description, workplace, location, date, type, index }) => {
  const isLeft = index % 2 === 0;
  
  return (
    <div className="relative">
      {/* Timeline dot */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
        <div className="w-4 h-4 bg-purple-400 rounded-full border-4 border-[#221C35]"></div>
      </div>

      <div className={`lg:flex lg:gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        {/* Content */}
        <div className={`lg:w-1/2 ${isLeft ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
          <div className="bg-[#2A2438] border border-gray-700 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300 shadow-lg">
            {/* Header */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">
                  {type}
                </span>
                <span className="text-gray-600">•</span>
                <span className="text-xs text-gray-400">{date}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{role}</h3>
              <div className="text-gray-300 font-medium">{workplace}</div>
              <div className="text-sm text-gray-500">{location}</div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent mb-4"></div>

            {/* Description */}
            <ul className="space-y-3">
              {description.map((item, idx) => (
                <li key={idx} className="text-gray-300 text-sm leading-relaxed flex items-start gap-3">
                  <span className="text-purple-400 mt-1.5 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Spacer for alternating layout */}
        <div className="hidden lg:block lg:w-1/2"></div>
      </div>

      {/* Vertical line connector */}
      {index < experiences.length - 1 && (
        <div className="hidden lg:block absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-purple-400/50 to-purple-400/20 transform -translate-x-1/2"></div>
      )}
    </div>
  );
};

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="py-20 px-4 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A track record of delivering impactful solutions across mobile development, 
            AI innovation, and digital transformation
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12 lg:space-y-20">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              role={experience.role}
              description={experience.description}
              workplace={experience.workplace}
              location={experience.location}
              date={experience.date}
              type={experience.type}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;