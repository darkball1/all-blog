// src/pages/Home.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { SignInButton, SignOutButton } from "@clerk/clerk-react";
import Clerk from '@clerk/clerk-js';
import rectangle from '../assets/rectangle.png';
const Home: React.FC = () => {
    const [blogs, setBlogs] = useState<{ id: number; name: string; title: string; content: string; }[]>([]);
    const [logIn, setLogIn] = useState(false);

    const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

    const clerk = new Clerk(PUBLISHABLE_KEY);



    useEffect(() => {
        // Fetch data from the API
        clerk.load().then(() => {
            console.log('Clerk loaded');
            // Check if the user is logged in
            console.log('Clerk User:', clerk.user);
            if (clerk.user) {
                setLogIn(true);
            }
        })
        axios.get('http://localhost:3000/get-data')
            .then(response => {
                // Set the fetched data to the state
                setBlogs(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);



    return (
        <div className='px-0 py-0' >
            <header className="flex bg-gray-100 justify-between  px-4 py-2  ">
                <h1 className="text-2xl font-semibold">All-Talks</h1>
                <div className="flex gap-4">

                    {logIn && <Link to="/form"><button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Post a Blog</button></Link>}

                    {!logIn && <SignInButton redirectUrl="/form">

                        <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-600">Post a Blog</button>
                    </SignInButton>}


                    {logIn && <SignOutButton >

                        <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Sign Out</button>
                    </SignOutButton>}

                </div>
            </header>
            <hr className='w-full'></hr>
            <div className="mt-10 px-8">
                <div className="mt-5 flex flex-row">
                    <div className="ml-20">
                        <h1 className="text-7xl text-center mt-5  font-semibold">KNOWLEDGE </h1>
                        <h1 className="text-7xl text-center font-semibold"> POWERED</h1>
                    </div>
                    <h1 className="text-lg text-center mt-10 w-2/5 mx-auto font-light">Explore Digital Depths: Dive into the digital realm to uncover precious insights and articles, carefully curated to expand your horizons.</h1>
                </div>
                <img src={rectangle} alt="Rectangle" className="w-full mt-10 h-40 mx-auto" />
                <h1 className="text-4xl text-center mt-10 font-semibold">Top Articles</h1>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-10   px-4">
                    {/* Map over the blogs array and render a Card component for each item */}
                    {blogs.map(blog => (
                        <Link className="mx-auto h-48 w-full " key={blog.id} to={`/blog/${blog.id}`}>
                            <Card key={blog.id} name={blog.name} title={blog.title} content={blog.content} />

                        </Link>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
