// src/components/NewBlogForm.tsx

import React, { useState } from 'react';


interface NewBlogFormProps {
    onSubmit: (data: { title: string; content: string, author: string }) => void;
}

const BlogForm: React.FC<NewBlogFormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        onSubmit({ title, content, author: "Anonymous" });
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="title">Title</label>
                <input className='w-full p-2 border border-gray-300 rounded'
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    className='w-full p-2 border border-gray-300 rounded h-80'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
            </div>
            <div className="flex justify-center mt-2">
                <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800" type="submit">Submit</button>
            </div>
        </form>
    );
};

export default BlogForm;
