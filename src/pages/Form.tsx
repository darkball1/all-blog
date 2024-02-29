// src/pages/Blog.tsx

import React from 'react';
import NewBlogForm from '../components/BlogForm';
import axios from 'axios';
import Clerk from '@clerk/clerk-js';
import backButtonImage from '../assets/back_button.png';
import { Link } from 'react-router-dom';

const BlogForm: React.FC = () => {
    const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

    const clerk = new Clerk(PUBLISHABLE_KEY);
    const handleNewBlogSubmit = async (data: { title: string; content: string, author: string }) => {
        // Handle the submission of new blog data here
        try {
            await clerk.load()
            console.log('Clerk User:', clerk.user);
            data.author = clerk.user?.emailAddresses[0].emailAddress as string;
            console.log('Data:', data);
            const response = await axios.post('http://localhost:3000/post-data', data);
            console.log('Response:', response.data);
        } catch (error: any) {
            console.error('Error:', error.response.data);
        }

    };

    return (
        <div>
            <Link to="/">
                <img src={backButtonImage} className="w-8 h-8 hover:opacity-80 ml-4 mt-4 cursor-pointer " />
            </Link>
            <div className="mt-10 w-1/2 mx-auto shadow-md rounded-lg px-10 py-5">
                <h1 className="text-2xl font-semibold text-center">Blog Creation</h1>
                <NewBlogForm onSubmit={handleNewBlogSubmit} />
            </div>
        </div>
    );
};

export default BlogForm;
