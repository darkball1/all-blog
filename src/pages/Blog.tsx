// src/pages/Blog.tsx

import React from 'react';
import NewBlogForm from '../components/BlogForm';
import axios from 'axios';
import BlogPost from '../components/BlogPost';

const Blog: React.FC = () => {


    return (
        <div>
            < BlogPost />
        </div>
    );
};

export default Blog;
