"use client";
import React, { useState, useRef } from "react";
import ExperiencesCard from "./ExperiencesCard";

const experiences = [
    {
        role: 'Software Engineering Fellow',
        description: '• Build 5+ AI apps and APIs using NextJS, OpenAI, Pinecone, StripeAPI with 98% accuracy as seen by 1000 users.\n• Develop projects from design to deployment, leading 4+ engineering fellows using MVP design patterns.\n• Coached by Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git, and microservice patterns.',
        workplace: 'Headstarter AI',
        date: 'July 2024 - Present',
    },
    {
        role: 'Full Stack Developer Intern',
        description: '• Develop applications using Flutter, React Native, ReactJS, .NET, C#, and PostgreSQL.\n• Identifying and fixing bugs to enhance application performance.\n• Collaborate with team members on projects.',
        workplace: 'Accelist Lentera Indonesia',
        date: 'February 2024 - Present',
    },
    {
        role: 'Activist of Education and Development Department',
        description: `• Created a monthly data science curriculum with hands-on projects and real-world case studies, improving participants' ability to apply data science methods by 40%.
        • Developed and delivered data science training program for monthly classes, focusing on advanced statistics and machine learning, which led to a 25% boost in data-driven decision-making.`,
        workplace: 'DSC (Data Science Club) BINUS University',
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
        workplace: 'BINUS University',
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
        workplace: 'HIMTI (Himpunan Teknik Informatika) BINUS University',
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