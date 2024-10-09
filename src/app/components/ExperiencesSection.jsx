"use client";
import React, { useState, useRef } from "react";
import ExperiencesCard from "./ExperiencesCard";

const experiences = [
    {
        role: 'Software Engineering Fellow',
        description: '• Built and deployed AI projects using React JS, Next.js, Firebase, Clerk, and Vercel, following agile methodologies with weekly sprints and incorporated CI/CD practices for iterative deployment.\n• Collaborated in a team to develop an interactive customer support agent using Next.js, integrating a custom RAG pipeline with OpenAI and Pinecone to deliver responses based on the company’s knowledge base.\n• Participated in weekly sessions with engineers from Google, Y Combinator, Stanford, Amazon, and various venture-backed startups, fostering knowledge sharing and networking opportunities.',
        workplace: 'Headstarter AI',
        date: 'July 2024 - September 2024',
    },
    {
        role: 'Full Stack Developer Intern',
        description: '• Develop applications using Flutter, React Native, ReactJS, .NET, C#, and PostgreSQL.\n• Identifying and fixing bugs to enhance application performance.\n• Collaborate with team members on projects.',
        workplace: 'PT Accelist Lentera Indonesia',
        date: 'February 2024 - August 2024',
    },
    {
        role: 'Activist of Education and Development Department',
        description: `• Created a monthly data science curriculum with hands-on projects and real-world case studies, improving participants' ability to apply data science methods by 40%.
        • Developed and delivered data science training program for monthly classes, focusing on advanced statistics and machine learning, which led to a 25% boost in data-driven decision-making.`,
        workplace: 'DSC (Data Science Club) Bina Nusantara University',
        date: 'March 2023 - January 2024',
    },
    {
        role: 'Project-Based Virtual Intern: Mobile Apps Developer',
        description: 'Successfully executed various tasks related with the activity of Mobile Developer from Bank Mandiri, including Android (Kotlin), iOS, UI/Design Patterns, Unit Testing, and API.',
        workplace: 'Bank Mandiri x Rakamin Academy',
        date: 'November 2023 - December 2023',
    },
    {
        role: 'Freshmen Partner',
        description: `• Assisted, directed, and managed a group of 17 students of Game Application and Technology major through their First Year Program (FYP) in both the first and second semesters.
        • Provided critical support and mentorship to ensure their smooth transition and achievement throughout this critical stage of their academic journey.`,
        workplace: 'Bina Nusantara University',
        date: 'May 2022 - July 2023',
    },
    {
        role: 'Public Relation Commission',
        description: `• Scheduled promotional activities and events.
        • Created and managed TECHFEST's social media accounts, curated content for social media posts, stories, and themed designs.
        • Promoted the event across various social media platforms.
        • Identified media partners, established collaborative relationships with them & create a media partner booklets.
        • Make an SPK letter (Support and Cooperation Agreement) with media partners.
        • Managed the event's budget and expenses.`,
        workplace: 'HIMTI (Himpunan Teknik Informatika) Bina Nusantara University',
        date: 'September 2022 - December 2022',
    },
];

const ExperiencesSection = () => {
    return (
        <section id="experiences" className="py-8 px-4">
            <h2 className="text-4xl font-bold text-center text-white mt-4 mb-8 md:mb-12">
                Experience
            </h2>
            <div className="flex flex-col gap-6">
                {experiences.map((experience, index) => (
                    <ExperiencesCard
                        key={index}
                        role={experience.role}
                        description={experience.description}
                        workplace={experience.workplace}
                        date={experience.date}
                        isEven={index % 2 === 0}
                    />
                ))}
            </div>
        </section>
    );
};

export default ExperiencesSection;