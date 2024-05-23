"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import ProjectModal from "./ProjectModal";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "TapPat Game Store App",
        description: "TapPat Game Store App is a mobile application built with Flutter. This program allows users to easily and enjoyably explore free games and purchase their favorite games. Key features of the app include an extensive collection of games across various genres such as racing, mystery, and adventure. The app's intuitive interface, crafted with careful attention to user experience, ensures easy navigation and a seamless browsing experience.",
        image: "/images/projects/TapPat_GameStore.png",
        tag:["All", "Mobile"],
        link: "https://drive.google.com/drive/folders/17wrIuAM-ZbJEzVzb576gVpzWFw0w7-5b?usp=sharing",
        role: "Project Manager, Mobile Developer"
    },
    {
        id: 2,
        title: "Machine Learning Model",
        description: "The Machine Learning Model project focuses on the development of an accurate predictive model for determining the solubility of molecules in water or solvent. Utilizing Python programming language, various machine learning techniques were implemented to construct and evaluate predictive models. Techniques such as Linear Regression and Random Forest were explored to identify the most effective approach for addressing the solubility prediction task. Additionally, data visualization methods, including scatter plots and polynomial regression, were employed to gain insights into the relationship between experimental and predicted solubility values.",
        image: "/images/projects/ML_Model.png",
        tag:["All", "Data"],
        link: "https://colab.research.google.com/drive/18SVZ5oXsCb-3vzcVP8seDGCDnjgdY1gX?usp=sharing",
        role: "Project Developer"
    },
    {
        id: 3,
        title: "Brain Tumor Detection",
        description: "The Brain Tumor Classification & Detection project leverages deep learning techniques to detect brain tumors in medical images, offering significant advancements in healthcare diagnostics. The project involved extensive research and the development of a classification model using Python, TensorFlow, Keras, and OpenCV. Utilizing a dataset sourced from Kaggle, the model was trained to accurately classify brain tumor images. Additionally, a mobile application was developed using Android Studio and a TensorFlow Lite model, enabling real-time brain tumor detection from selected images.",
        image: "/images/projects/BrainTumorDetection.png",
        tag:["All", "Mobile", "Web", "Data"],
        link: "https://drive.google.com/drive/folders/12yx_NGootu_U2vYZ5XibYU_25Ed9xPEF?usp=sharing",
        role: "Project Developer, Mobile Developer"
    },
    {
        id: 4,
        title: "Instaperfect Wardah Chatbot",
        description: "The Smoojo.ai chatbot was developed for Instaperfect, Wardah's premium beauty series, to provide personalized product recommendations based on customers' skin type and preferences. Through the chatbot interface, customers can efficiently select the product version that aligns with their needs and receive comprehensive information about product benefits, ingredients, usage directions, and tips. This chatbot enhances the customer experience by facilitating seamless product exploration, purchasing, and obtaining tailored assistance.",
        image: "/images/projects/Instaperfect_Chatbot.png",
        tag:["All", "Mobile"],
        link: "https://app.smojo.org/byanarvendy/helpy",
        role: "Hipster/Designer, Concept Developer"
    },
    {
        id: 5,
        title: "Skinmates iOS",
        description: "The Skinmates iOS app, developed using Swift, retrieves product listings from the Makeup API via JSON. It utilizes Core Data for efficient storage of user, review, and product data. Key features include the ability to view detailed product information for compatibility assessment, post and read reviews from other users, and modify or delete user-generated reviews within the app interface.",
        image: "/images/projects/Skinmates_iOS.png",
        tag:["All", "Mobile"],
        link: "https://github.com/verodw/skinmatesmms.git",
        role: "iOS Developer"
    },
    {
        id: 6,
        title: "Skinmates Android",
        description: "Skinmates is an Android cosmetic review app that empowers users to explore and rate cosmetic products they use. The app provides comprehensive information, including product ingredients, benefits, drawbacks, and user experiences. With Skinmates, users can make informed decisions about cosmetic purchases, ensuring they find the products best suited to their needs. By leveraging a trusted cosmetic review app like Skinmates, consumers can maximize the benefits of using the right cosmetic products.",
        image: "/images/projects/Skinmates_Android.png",
        tag:["All", "Mobile"],
        link: "https://github.com/ClaudyaSalim/MCS_LEC_Skinmates.git",
        role: "Android Developer"
    },
    {
        id: 7,
        title: "Skinmates Web Design",
        description: "The Skinmates cosmetic review website enables users to browse and rate cosmetic products based on their personal experiences. The website offers comprehensive information, including brand, category, colors, price, and detailed descriptions of each cosmetic product. Users have the opportunity to explore and learn more about the products they are interested in, ultimately allowing them to make informed decisions and select the most suitable options. By utilizing a trusted cosmetic review website like Skinmates, users can optimize the benefits of using the right cosmetic products for their needs.",
        image: "/images/projects/Skinmates_WebDesign.png",
        tag:["All", "Web"],
        link: "https://github.com/verodw/webdesign-skinmates.git",
        role: "Web Developer"
    },
    {
        id: 8,
        title: "Skinmates Design Mobile",
        description: "SkinMates Design is a comprehensive skincare application featuring three main sections: Home, Reviews, and Blog. The Home page features a search bar, category selection, recommendations, and the latest reviews. Users can easily access skincare product evaluations, rate products, and contribute their own reviews. Additionally, the app offers insightful skincare knowledge through its blog section, allowing users to share and learn from each other. SkinMates is designed to provide personalized product recommendations based on user preferences, ensuring a tailored skincare experience.",
        image: "/images/projects/Skinmates_Prototype.png",
        tag:["All", "Design"],
        link: "https://www.figma.com/proto/VBsnNL84Wi1tsC6z1H6ow5/Skinmates?node-id=4-19&t=sD7ren1SN9hcd6Oy-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3",
        role: "UI/UX Designer"
    },
    {
        id: 9,
        title: "Bluejack Pharmacy App",
        description: "The Bluejack Pharmacy mobile application was created to make it easy for users to access pharmaceutical services and make drug purchases from the Bluejack Pharmacy firm. Using the Java programming language and SQLite as the database to store the data (users, medications, and transactions), this application was created for the Android operating system. This program comprises of a number of pages with various features.",
        image: "/images/projects/BluejackPharmacy_Android.png",
        tag:["All", "Mobile"],
        link: "https://drive.google.com/drive/folders/1RL6wx1oJRr5FcQkxdfQMw6LsyNJLNPG6?usp=sharing",
        role: "Android Developer, Mobile Developer"
    },
    {
        id: 10,
        title: "GameHI iOS",
        description: "GameHI is a mobile game management application sold by GameHI exclusively designed for iOS. There are two roles in this application, admin and user. The admin in this application can insert, update, and delete mobile games. The user can buy mobile games and view mobile games in GameHI based on what is set by the admin.",
        image: "/images/projects/GameHI_iOS.png",
        tag:["All", "Mobile"],
        link: "https://github.com/ClaudyaSalim/projectlabmms.git",
        role: "UI/UX Designer, iOS Developer"
    },
    {
        id: 11,
        title: "English Adventure",
        description: "English Adventure English Adventures is an educational app designed for children aged 7 to 12 to enhance their English language skills through interactive games, activities, and lessons. The app features fun language games covering vocabulary, grammar, pronunciation, and comprehension, making learning enjoyable for kids. It also offers progress tracking tools to monitor children's development and interactive lessons covering reading, writing, listening, and speaking.",
        image: "/images/projects/EnglishAdventure_Prototype.png",
        tag:["All", "Design"],
        link: "https://www.figma.com/proto/ee18shCvgzg04zAZlD3P9w/Project-HCI_Game-Edukasi?t=yNcASyxtBJ0xLoE5-1&scaling=scale-down&page-id=0%3A1&node-id=209-2020&starting-point-node-id=15%3A31",
        role: "UI/UX Designer"
    },
    {
        id: 12,
        title: "BeezHub",
        description: "BeezHub is a mobile business ecosystem app designed to facilitate Binus alumni entrepreneurs, allowing businesses, startups, and public investors to interact, collaborate, and build business relationships. Binus graduates or those who have worked at Binus, can register their businesses on BeezHub by confirming their identity with Binus administration. The app features a home section for posts, events, and recommendations, a network section for connecting with other users, an invest section, a profile section for viewing results and adding businesses, and a premium section for exclusive access.",
        image: "/images/projects/BeezHub_Prototype.png",
        tag:["All", "Design"],
        link: "https://www.figma.com/proto/EMd0eg6v9k4PFeoD6j8vTh/Prototype-BeezHub?node-id=16-28&t=GNkk8SJotmWB0cXp-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1",
        role: "UI/UX Designer"
    },
    {
        id: 13,
        title: "Image Classification Rock Paper Scissors",
        description: "This image classification project focuses on classifying images of rock, paper, and scissors gestures using machine learning techniques. The dataset consists of a total of 1312 training samples and 876 validation samples, with each class (rock, paper, scissors) having a balanced distribution. The model achieved an impressive validation accuracy of 98.86%, indicating its effectiveness in accurately classifying hand gestures. With extensive training and validation data, the model demonstrates robust performance in distinguishing between different gestures, laying the foundation for applications in gesture recognition and interactive gaming.",
        image: "/images/projects/RPS_ImageClassification.png",
        tag:["All", "Data"],
        link: "https://github.com/verodw/FinalProject_ImageClassification.git",
        role: "Project Engineer"
    },
    {
        id: 14,
        title: "Sentiment Analysis of Makeup Alley Website Cosmetic Reviews",
        description: "This project focuses on the development of a sentiment analysis application for cosmetic product reviews sourced from the Makeup Alley website. Leveraging aspect-based sentiment analysis with TF-IDF and SVM algorithms, the application categorizes reviews into positive, neutral, and negative sentiments. By accurately classifying reviews, the project emphasizes the significance of sentiment analysis for businesses to comprehend and enhance customer satisfaction. The evaluation results demonstrate the effectiveness of the TF-IDF and SVM methods, with 182 positive, 23 negative, and 3 neutral reviews identified. The experiment achieves an accuracy rate of 74.04%, with 154 correct predictions out of 208 reviews, underscoring the practical utility of sentiment analysis in deciphering customer sentiments.",
        image: "/images/projects/SentimentAnalysis_MakeupAlley.png",
        tag:["All", "Data"],
        link: "https://www.canva.com/design/DAF4FmXL058/AHuPSgG5mLXddl9yOl4FJQ/view?utm_content=DAF4FmXL058&utm_campaign=designshare&utm_medium=link&utm_source=editor",
        role: "ML Engineer"
    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      tag === "All" ? true : project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
  
    const handleProjectClick = (index) => {
      setSelectedProjectIndex(index);
    };
  
    const handleCloseModal = () => {
      setSelectedProjectIndex(null);
    };
  
    const handleNextProject = () => {
      setSelectedProjectIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
    };
  
    const handlePrevProject = () => {
      setSelectedProjectIndex((prevIndex) => (prevIndex - 1 + filteredProjects.length) % filteredProjects.length);
    };
  
    return (
      <section id="projects" className="mt-12">
        <h2 className="text-4xl font-bold text-center text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6">
          {["All", "Mobile", "Design", "Data", "Web"].map((tagName) => (
            <ProjectTag
              key={tagName}
              onClick={handleTagChange}
              name={tagName}
              isSelected={tag === tagName}
            />
          ))}
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
              onClick={() => handleProjectClick(index)}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
        {selectedProjectIndex !== null && (
          <ProjectModal
            project={filteredProjects[selectedProjectIndex]}
            onClose={handleCloseModal}
            onNext={handleNextProject}
            onPrev={handlePrevProject}
          />
        )}
      </section>
    );
  };
  
  export default ProjectSection;