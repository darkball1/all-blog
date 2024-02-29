// BlogPost.tsx

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Blog } from '../types'; // Import the Blog type/interface
import backButtonImage from '../assets/back_button.png';

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Extract the blog post ID from URL parameters

    // Fetch the specific blog post data based on ID
    const [blogPost, setBlogPost] = useState<Blog | null>(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/get-data/${id}`)
            .then(response => {
                // Set the fetched data to the state
                setBlogPost(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]); // Re-run effect when the ID changes

    // Update views for the blog post
    useEffect(() => {
        axios.put(`http://localhost:3000/update-views/${id}`)
            .then(response => {
                console.log('Views updated successfully');
            })
            .catch(error => {
                console.error('Error updating views:', error);
            });
    }, [id]);
    if (!blogPost) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Link to="/">
                <img src={backButtonImage} className="w-8 h-8 hover:opacity-80 ml-4 mt-4 cursor-pointer " />
            </Link>
            <h2 className="text-4xl font-bold  text-center mt-4">{blogPost.title}</h2>
            <p className="text-gray-500 mb-4 mt-2 text-center font-light">By {blogPost.name}</p>

            <p className="text-lg mb-4 px-40 py-2">{blogPost.content}</p>
        </div>
    );
};

export default BlogPost;
