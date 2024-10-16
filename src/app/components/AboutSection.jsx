"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import { skills } from '../constant/DataSkills';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
      flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItemStyled = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImageStyled = styled.img`
  width: 24px;
  height: 24px;
`;

const ButtonStyled = styled.button`
  px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-400 via-purple-500 to-pink-600 text-white mt-3 hover:bg-slate-600;
`;

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    const certifications = [
      { title: 'AI Programming with Python', provider: 'Udacity', src: '/images/certificates/AI Programming with Python-Udacity.pdf', alt: 'Certificate AI Programming with Python' },
      { title: 'React Native by Meta', provider: 'Coursera', src: '/images/certificates/React Native-Meta.pdf', alt: 'Certificate React Native by Meta' },
      { title: 'Generative AI and its Business Applications', provider: 'NSW Government', src: '/images/certificates/Generative AI and its Business Applications-NSW Government.pdf', alt: 'Certificate Generative AI and its Business Applications' },
      { title: 'Machine Learning for Beginners', provider: 'Dicoding', src: '/images/certificates/Machine Learning for Beginners-Dicoding.pdf', alt: 'Certificate Machine Learning for Beginners' },
      { title: 'Basic Python Programming', provider: 'Dicoding', src: '/images/certificates/Basic Python Programming-Dicoding.pdf', alt: 'Certificate Basic Python Programming' },
      { title: 'Basic Javascript Programming', provider: 'Dicoding', src: '/images/certificates/Basic Javascript Programming-Dicoding.pdf', alt: 'Certificate Basic Javascript Programming' },
      { title: 'Fundamentals of Data Visualization', provider: 'Dicoding', src: '/images/certificates/Fundamentals of Data Visualization-Dicoding.pdf', alt: 'Certificate Fundamentals of Data Visualization' },
    ];

    return (
      <Container>
        <Wrapper>
          <section id="about" className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
              <div className="rounded-lg overflow-hidden">
                <Image src="/images/aboutme_google.png" width={500} height={500} alt="About Me Veronica" className="rounded-lg mt-8"/>
              </div>
              <div>
                <h2 className='text-4xl font-bold text-white mb-4 mt-10'>About Me</h2>
                <p>Hi there! I&apos;m Veronica, with a background in Mobile Application and Technology major. 
                  I have a keen interest in UI/UX design, mobile development, artificial intelligence, 
                  and machine learning. With experience in full-stack mobile development, I bring a 
                  unique blend of creativity and technical expertise to every project I undertake.</p>
                <br />
                <p>My journey in the world of technology began with a fascination for creating visually 
                  stunning interfaces that not only look great but also provide seamless user experiences. 
                  As I delved deeper into the field, I discovered the transformative potential of 
                  artificial intelligence and machine learning. Fascinated by their ability to enhance 
                  user experiences and streamline processes, I embarked on a journey to explore these 
                  cutting-edge technologies further.</p>
                <br />
                <p>I&apos;m always excited to tackle new challenges and push the boundaries of innovation.</p>
              </div>
            </div>
          </section>
        </Wrapper>
        <div className='flex flex-row mt-8'>
          <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"} className={tab === "skills" ? "text-white" : "text-gray-400"}>Skills</TabButton>
          <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"} className={tab === "education" ? "text-white" : "text-gray-400"}>Education</TabButton>
          <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"} className={tab === "certifications" ? "text-white" : "text-gray-400"}>Certifications</TabButton>
        </div>
        <SkillsContainer>
          {tab === 'skills' && (
            <Skill>
              <SkillTitle className="text-white">Hard Skills</SkillTitle>
              <SkillList>
                {skills[0].skills.map((item, index) => (
                  <SkillItemStyled key={index}>
                    <SkillImageStyled src={item.image} alt={item.name} />
                    <span className="text-white">{item.name}</span>
                  </SkillItemStyled>
                ))}
              </SkillList>
            </Skill>
          )}
        </SkillsContainer>

        {tab === 'education' && (
          <Skill>
            <SkillTitle className="text-white">Education</SkillTitle>
            <SkillList>
              <SkillItemStyled>
                <span className="text-white">Bina Nusantara University</span>
              </SkillItemStyled>
            </SkillList>
          </Skill>
        )}

{tab === 'certifications' && (
  <Skill>
    <SkillTitle className="text-white">Certifications</SkillTitle>
    <SkillList>
      {certifications.map((cert, index) => (
        <SkillItemStyled key={index}>
          <a href={cert.src} target="_blank" rel="noopener noreferrer">
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-400 via-purple-500 to-pink-600 text-white mt-3 hover:bg-slate-600">
              <span className="block bg-[#221C35] hover:bg-slate-800 rounded-full px-5 py-2">
                {cert.title}
              </span>
            </button>
          </a>
        </SkillItemStyled>
      ))}
    </SkillList>
  </Skill>
)}

      </Container>
    );
}

export default AboutSection;



