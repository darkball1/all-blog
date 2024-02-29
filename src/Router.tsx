// routes.tsx

import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,

} from "react-router-dom";
import BlogForm from './pages/Form';
import Home from './pages/Home';
import Blog from './pages/Blog';
const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<BlogForm />} />
                <Route path="/blog/:id" element={<Blog />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;
