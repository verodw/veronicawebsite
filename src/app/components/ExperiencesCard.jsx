import React from 'react';

const ExperiencesCard = ({ role, description, workplace, date, isEven }) => {
    const cardBackgroundColor = isEven ? 'bg-purple-600' : 'bg-blue-600';
    const textColor = 'text-white'; 
    const descriptionColor = isEven ? 'text-white' : 'text-gray-200'; 
    const workplaceTextColor = 'text-yellow-300'; 
    const descriptionLines = description.split('\n').map((line, index) => line.trim()).filter(line => line.length > 0);

    return (
        <div className={`${cardBackgroundColor} ${textColor} border rounded-lg shadow-md p-6 mb-6 w-full max-w-3xl mx-auto`}>
            <h3 className="text-2xl font-semibold mb-2">{role}</h3>
            <div className={`${descriptionColor} mb-4`}>
                {descriptionLines.map((line, index) => (
                    <p key={index} className="mb-2">{line}</p>
                ))}
            </div>
            <p className={`${workplaceTextColor} p-2 rounded mb-2`}>{workplace}</p>
            <p className="text-gray-200 text-sm">{date}</p>
        </div>
    );
};

export default ExperiencesCard;

