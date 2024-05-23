import React from "react";
import Image from 'next/image';
import { XMarkIcon } from "@heroicons/react/24/solid";

const ProjectModal = ({ project, onClose, onNext, onPrev }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 relative max-h-full overflow-y-auto">
                <button className="absolute top-2 right-2" onClick={onClose}>
                    <XMarkIcon className="h-6 w-6 text-black" />
                </button>
                <Image src={project.image} alt={project.title} className="rounded-lg mb-4 w-full h-auto" width={400} height={200}/>
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                    <a href={project.link} target="_blank" className="text-blue-500 hover:underline">
                        Link
                    </a>
                    <div className="flex items-center">
                        <span className="text-black mr-1">Role:</span>
                        <span className="text-pink-700 font-bold">{project.role}</span>
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <button onClick={onPrev} className="text-blue-500 hover:underline">Previous</button>
                    <button onClick={onNext} className="text-blue-500 hover:underline">Next</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
