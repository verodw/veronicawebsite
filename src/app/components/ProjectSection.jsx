"use client";
import React, { useState, useRef } from "react";

const projectsData = [
  // --- 2025 PROJECTS ---
  {
    id: 1,
    title: "QueueCheck: Decentralized Queue Tracking dApp",
    description: `A Web3 application built on the IOTA Network to provide real-time transparency for public service queues (hospitals, banks) without centralized servers. Features a "Report-to-Earn" model using smart contracts to reward users with $QUEUE tokens for valid updates, integrated with IOTA wallets for secure transaction management.`,
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
    description: `A Cloud Security Posture Management (CSPM) tool that automates security audits for AWS infrastructure. Features a dual-mode architecture for live and simulated audits, checking IAM and Storage against CIS Benchmarks. Includes a Streamlit dashboard for real-time risk visualization and auto-remediation simulation.`,
    image: "/images/projects/AWS_Security.png",
    tag: ["All", "Security"],
    link: "https://aws-audit.streamlit.app/",
    role: "Cloud Security Engineer",
    type: "Development Project",
    date: "2025"
  },
  {
    id: 3,
    title: "Digital Transformation of LMS & CKMS",
    description: `Spearheaded the digital transformation initiative for PT Pembangunan Property by designing a comprehensive implementation plan for Learning Management (LMS) and Customer Knowledge Management Systems (CKMS). This 17-week initiative, valued at ~Rp 496M, utilized Scrumban methodology to bridge the gap between business strategy and technical execution. The project delivered a robust project charter, Work Breakdown Structure (WBS), and detailed risk analysis to ensure seamless stakeholder engagement and high-quality system integration.`,
    image: "/images/projects/LMS_CKMS.png",
    tag: ["All", "Business"],
    link: "https://drive.google.com/file/d/1rcb9cuLHVMeRk-O5gVZ3q2iAV505Ujd_/view?usp=sharing",
    role: "Project Manager, Business Analyst",
    type: "Academic Project",
    date: "2025"
  },
  {
    id: 4,
    title: "Enterprise Architecture for E-Commerce (TOGAF)",
    description: `Developed an Enterprise Architecture blueprint for a scalable e-commerce platform using the TOGAF ADM framework. The project meticulously mapped the Business, Data, Application, and Technology (BDAT) layers to align IT infrastructure with core business objectives. By utilizing ArchiMate modeling and integration matrices, the blueprint addresses critical digital transformation challenges including system scalability, security protocols, and cross-channel customer experience optimization.`,
    image: "/images/projects/EA_TOGAF.png",
    tag: ["All", "Business"],
    link: "https://drive.google.com/file/d/1Q_5mHskTaFOYajorwtgK5LyaLgkoKJoS/view?usp=sharing",
    role: "Enterprise Architect",
    type: "Academic Project",
    date: "2025"
  },
  {
    id: 5,
    title: "Bitcoin Price Prediction: ARIMA vs FBProphet",
    description: `A comparative research paper presented at the IEEE International Conference on AI and Data Analytics (ICAD) 2025, hosted by Tufts University. This study evaluates the accuracy of time-series forecasting models in the volatile cryptocurrency market. By performing rigorous data preprocessing and comparative analysis between ARIMA and FBProphet models, the research provides valuable insights into predictive performance and model reliability for digital asset price movements.`,
    image: "/images/projects/BitcoinPricePrediction.jpeg",
    tag: ["All", "Data"],
    link: "https://ieeexplore.ieee.org/document/11114051",
    role: "Researcher, Author",
    type: "Publication",
    date: "2025"
  },

  // --- 2024 PROJECTS ---
  {
    id: 6,
    title: "Customer Churn Prediction using ML",
    description: `Conducted a comprehensive predictive analysis on a dataset of 5,630 retail records to identify at-risk customers and uncover inefficiencies in retention strategies. By implementing the CRISP-DM methodology, the study evaluated multiple machine learning models, including Logistic Regression, Decision Tree, SVM, and Ensemble methods. XGBoost emerged as the top performer, achieving an outstanding 97.9% accuracy and 99.7% AUC, demonstrating high precision in addressing significant class imbalances. The analysis highlighted critical churn drivers such as customer tenure, warehouse-to-home delivery distance, and customer care interactions. These technical findings were translated into actionable business insights, focusing on personalized loyalty programs and supply chain optimizations to enhance customer lifetime value and operational efficiency.`,
    image: "/images/projects/CustomerChurnPrediction.png",
    tag: ["All", "Data"],
    link: "https://drive.google.com/file/d/13CTwwy0UHlk6L4QGBTO5B4OwFzV1DFke/view?usp=sharing",
    role: "Data Analyst, ML Engineer",
    type: "Academic Project",
    date: "2024"
  },
  {
    id: 7,
    title: "Brain Tumor Detection",
    description: "The Brain Tumor Classification & Detection project leverages deep learning techniques to detect brain tumors in medical images, offering significant advancements in healthcare diagnostics. The project involved extensive research and the development of a classification model using Python, TensorFlow, Keras, and OpenCV. Utilizing a dataset sourced from Kaggle, the model was trained to accurately classify brain tumor images. Additionally, a mobile application was developed using Android Studio and a TensorFlow Lite model, enabling real-time brain tumor detection from selected images.",
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
    description: "TapPat Game Store App is a mobile application built with Flutter. This program allows users to easily and enjoyably explore free games and purchase their favorite games. Key features of the app include an extensive collection of games across various genres such as racing, mystery, and adventure. The app's intuitive interface, crafted with careful attention to user experience, ensures easy navigation and a seamless browsing experience.",
    image: "/images/projects/TapPat_GameStore.png",
    tag: ["All", "Mobile"],
    link: "https://drive.google.com/drive/folders/17wrIuAM-ZbJEzVzb576gVpzWFw0w7-5b?usp=sharing",
    role: "Project Manager, Mobile Developer",
    type: "Development Project",
    date: "2024"
  },
  {
    id: 9,
    title: "Sentiment Analysis of Makeup Alley Website Cosmetic Reviews",
    description: "This project focuses on the development of a sentiment analysis application for cosmetic product reviews sourced from the Makeup Alley website. Leveraging aspect-based sentiment analysis with TF-IDF and SVM algorithms, the application categorizes reviews into positive, neutral, and negative sentiments. By accurately classifying reviews, the project emphasizes the significance of sentiment analysis for businesses to comprehend and enhance customer satisfaction. The evaluation results demonstrate the effectiveness of the TF-IDF and SVM methods, with 182 positive, 23 negative, and 3 neutral reviews identified. The experiment achieves an accuracy rate of 74.04%, with 154 correct predictions out of 208 reviews, underscoring the practical utility of sentiment analysis in deciphering customer sentiments.",
    image: "/images/projects/SentimentAnalysis_MakeupAlley.png",
    tag: ["All", "Data"],
    link: "https://www.canva.com/design/DAF4FmXL058/AHuPSgG5mLXddl9yOl4FJQ/view",
    role: "ML Engineer, Data Analyst",
    type: "Publication",
    date: "2024"
  },
  {
    id: 10,
    title: "Skinmates iOS",
    description: "The Skinmates iOS app, developed using Swift, retrieves product listings from the Makeup API via JSON. It utilizes core data for efficient storage of user, review, and product data. Key features include the ability to view detailed product information for compatibility assessment, post and read reviews from other users, and modify or delete user-generated reviews within the app interface.",
    image: "/images/projects/Skinmates_iOS.png",
    tag: ["All", "Mobile"],
    link: "https://github.com/verodw/skinmatesmms.git",
    role: "iOS Developer",
    type: "Development Project",
    date: "2023"
  },
  {
    id: 11,
    title: "BeezHub: Business Ecosystem Platform",
    description: "BeezHub is a mobile business ecosystem app designed to facilitate Binus alumni entrepreneurs, allowing businesses, startups, and public investors to interact, collaborate, and build business relationships. Binus graduates or those who have worked at Binus, can register their businesses on BeezHub by confirming their identity with Binus administration. The app features a home section for posts, events, and recommendations, a network section for connecting with other users, an invest section, a profile section for viewing results and adding businesses, and a premium section for exclusive access.",
    image: "/images/projects/BeezHub_Prototype.png",
    tag: ["All", "Business"], 
    link: "https://tinyurl.com/BeezhubVidAsg2",
    role: "COO & Lead Designer", 
    type: "Entrepreneurship Project",
    date: "2023"
  },
  {
    id: 12,
    title: "GameHI iOS",
    description: "GameHI is a mobile game management application sold by GameHI exclusively designed for iOS. There are two roles in this application, admin and user. The admin in this application can insert, update, and delete mobile games. The user can buy mobile games and view mobile games in GameHI based on what is set by the admin.",
    image: "/images/projects/GameHI_iOS.png",
    tag: ["All", "Mobile"],
    link: "https://drive.google.com/file/d/1rrYJeqEumnJtNyv6kNbwQCVnb7H45j38/view?usp=sharing",
    role: "iOS Developer",
    type: "Development Project",
    date: "2023"
  },
  {
    id: 13,
    title: "Machine Learning Solubility Model",
    description: "Focuses on the development of an accurate predictive model for determining the solubility of molecules in water or solvent. Utilizing Python programming language, various machine learning techniques were implemented to construct and evaluate predictive models. Techniques such as Linear Regression and Random Forest were explored to identify the most effective approach for addressing the solubility prediction task. Additionally, data visualization methods, including scatter plots and polynomial regression, were employed to gain insights into the relationship between experimental and predicted solubility values.",
    image: "/images/projects/ML_Model.png",
    tag: ["All", "Data"],
    link: "https://colab.research.google.com/drive/18SVZ5oXsCb-3vzcVP8seDGCDnjgdY1gX",
    role: "Project Developer",
    type: "Development Project",
    date: "2023"
  },
  {
    id: 14,
    title: "Image Classification Rock Paper Scissors",
    description: "This image classification project focuses on classifying images of rock, paper, and scissors gestures using machine learning techniques. The dataset consists of a total of 1312 training samples and 876 validation samples, with each class (rock, paper, scissors) having a balanced distribution. The model achieved an impressive validation accuracy of 98.86%, indicating its effectiveness in accurately classifying hand gestures. With extensive training and validation data, the model demonstrates robust performance in distinguishing between different gestures, laying the foundation for applications in gesture recognition and interactive gaming.",
    image: "/images/projects/RPS_ImageClassification.png",
    tag: ["All", "Data"],
    link: "https://github.com/verodw/FinalProject_ImageClassification.git",
    role: "Project Engineer",
    type: "Development Project",
    date: "2023"
  },
  {
    id: 15,
    title: "Skinmates Android",
    description: "Android cosmetic review app that empowers users to explore and rate cosmetic products they use. The app provides comprehensive information, including product ingredients, benefits, drawbacks, and user experiences. With Skinmates, users can make informed decisions about cosmetic purchases, ensuring they find the products best suited to their needs. By leveraging a trusted cosmetic review app like Skinmates, consumers can maximize the benefits of using the right cosmetic products.",
    image: "/images/projects/Skinmates_Android.png",
    tag: ["All", "Mobile"],
    link: "https://github.com/ClaudyaSalim/MCS_LEC_Skinmates.git",
    role: "Android Developer",
    type: "Development Project",
    date: "2023"
  },
  {
    id: 16,
    title: "Skinmates Design Mobile",
    description: "A comprehensive skincare application featuring three main sections: Home, Reviews, and Blog. The Home page features a search bar, category selection, recommendations, and the latest reviews. Users can easily access skincare product evaluations, rate products, and contribute their own reviews. Additionally, the app offers insightful skincare knowledge through its blog section, allowing users to share and learn from each other. SkinMates is designed to provide personalized product recommendations based on user preferences, ensuring a tailored skincare experience.",
    image: "/images/projects/Skinmates_Prototype.png",
    tag: ["All", "Design"],
    link: "https://www.figma.com/proto/VBsnNL84Wi1tsC6z1H6ow5/Skinmates",
    role: "UI/UX Designer",
    type: "Design Project",
    date: "2023"
  },
  {
    id: 17,
    title: "Skinmates Web Design",
    description: "The Skinmates cosmetic review website enables users to browse and rate cosmetic products based on their personal experiences. The website offers comprehensive information, including brand, category, colors, price, and detailed descriptions of each cosmetic product. Users have the opportunity to explore and learn more about the products they are interested in, ultimately allowing them to make informed decisions and select the most suitable options. By utilizing a trusted cosmetic review website like Skinmates, users can optimize the benefits of using the right cosmetic products for their needs.",
    image: "/images/projects/Skinmates_WebDesign.png",
    tag: ["All", "Design"],
    link: "https://github.com/verodw/webdesign-skinmates.git",
    role: "Web Developer",
    type: "Development Project",
    date: "2023"
  },
  {
    id: 18,
    title: "Instaperfect Wardah Chatbot",
    description: "The Smoojo.ai chatbot was developed for Instaperfect, Wardah's premium beauty series, to provide personalized product recommendations based on customers' skin type and preferences. Through the chatbot interface, customers can efficiently select the product version that aligns with their needs and receive comprehensive information about product benefits, ingredients, usage directions, and tips. This chatbot enhances the customer experience by facilitating seamless product exploration, purchasing, and obtaining tailored assistance.",
    image: "/images/projects/Instaperfect_Chatbot.png",
    tag: ["All", "Business", "Mobile"],
    link: "https://app.smojo.org/byanarvendy/helpy",
    role: "Concept Developer",
    type: "Business Solution Project",
    date: "2022"
  },
  {
    id: 19,
    title: "Bluejack Pharmacy App",
    description: "The Bluejack Pharmacy mobile application was created to make it easy for users to access pharmaceutical services and make drug purchases from the Bluejack Pharmacy firm. Using the Java programming language and SQLite as the database to store the data (users, medications, and transactions), this application was created for the Android operating system. This program comprises of a number of pages with various features.",
    image: "/images/projects/BluejackPharmacy_Android.png",
    tag: ["All", "Mobile"],
    link: "https://drive.google.com/file/d/17nDX80cCPR5jcFlAC4Q0r86wfz07RyIx/view?usp=sharing",
    role: "Android Developer",
    type: "Development Project",
    date: "2022"
  },
  {
    id: 20,
    title: "English Adventure",
    description: "English Adventure English Adventures is an educational app designed for children aged 7 to 12 to enhance their English language skills through interactive games, activities, and lessons. The app features fun language games covering vocabulary, grammar, pronunciation, and comprehension, making learning enjoyable for kids. It also offers progress tracking tools to monitor children's development and interactive lessons covering reading, writing, listening, and speaking.",
    image: "/images/projects/EnglishAdventure_Prototype.png",
    tag: ["All", "Design"],
    link: "https://www.figma.com/proto/ee18shCvgzg04zAZlD3P9w/Project-HCI_Game-Edukasi",
    role: "UI/UX Designer",
    type: "Design Project",
    date: "2022"
  }
];

const InteractiveProjectCard = ({ project, onClick }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((e.clientY - rect.top - centerY) / centerY) * -8);
    setRotateY(((e.clientX - rect.left - centerX) / centerX) * 8);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovering(false);
  };

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
        <div className="relative h-48 overflow-hidden bg-gray-800">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <div className="absolute top-3 right-3 z-20 bg-purple-600/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">{project.type}</div>
          {project.image && <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>}
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-400 text-xs">{project.date}</span>
            <span className="text-gray-600">•</span>
            <span className="text-purple-400 text-xs">{project.role}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{project.title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description.substring(0, 100)}...</p>
          <div className="flex flex-wrap gap-2">
            {project.tag.filter(t => t !== "All").map((tag, idx) => (
              <span key={idx} className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded border border-purple-500/20">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-300" style={{ background: `radial-gradient(circle at ${rotateY * 5 + 50}% ${-rotateX * 5 + 50}%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)`, opacity: isHovering ? 1 : 0 }} />
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 pt-24" onClick={onClose}>
      <div className="bg-[#1a1625] rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto border border-purple-500/30 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          {project.image && <div className="relative h-64 overflow-hidden rounded-t-2xl"><img src={project.image} alt={project.title} className="w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /></div>}
          <button onClick={onClose} className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4"><span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">{project.type}</span><span className="text-gray-400 text-sm">{project.date}</span></div>
          <h2 className="text-3xl font-bold text-white mb-3">{project.title}</h2>
          <p className="text-purple-400 font-semibold mb-4">Role: {project.role}</p>
          <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tag.filter(t => t !== "All").map((tag, idx) => (
              <span key={idx} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-lg text-sm border border-purple-500/20">{tag}</span>
            ))}
          </div>
          {project.link && project.link !== "#" && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              View Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const tags = ["All", "Business", "Data", "Design", "Mobile", "Security", "Web3"];
  
  const filteredProjects = projectsData.filter(project =>
    selectedTag === "All" ? true : project.tag.includes(selectedTag)
  );

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">Featured Projects & Research</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">A showcase of my work spanning mobile development, data science, business analysis, and emerging technologies.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tags.map(tag => (
            <button key={tag} onClick={() => setSelectedTag(tag)} className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedTag === tag ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50' : 'bg-[#2A2438] text-gray-400 border border-gray-700 hover:border-purple-500/50'}`}>{tag}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (<InteractiveProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)}/>))}
        </div>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)}/>}
      </div>
    </section>
  );
};

export default ProjectSection;