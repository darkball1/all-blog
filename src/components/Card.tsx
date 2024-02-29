// src/components/Card.tsx

import React from 'react';

interface CardProps {
    title: string;
    content: string;
    name: string;
}

const Card: React.FC<CardProps> = ({ title, content, name }) => {
    const truncatedContent = content.substring(0, 100);

    return (
        <div className="max-w-xs w-full h-48 mx-auto rounded-xl overflow-hidden shadow-md bg-white hover:bg-gray-100">
            {/* Image element removed */}
            <div className="px-6 py-4">
                <div className="font-bold text-xl text-center ">{title}</div>
                <p className="text-gray-400 text-center text-light text-sm">By {name}</p>

                <p className="text-gray-700 text-base mb-2 mt-4">{truncatedContent}
                    {/* Add an ellipsis if content is longer than 30 characters */}
                    {content.length > 30 && '...'}</p>
            </div>
        </div>
    );
};

export default Card;
