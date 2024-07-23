import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import profilePic from '../public/profile.png';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
        <div className="text-center">
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="rounded-full"
            width={150}
            height={150}
            priority
          />
          <h1 className="text-4xl font-bold mt-4">Welcome to My Portfolio</h1>
          <p className="mt-2 text-lg">I{"'"}m [Your Name], a [Your Profession].</p>
        </div>

        <section className="mt-12 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Replace with your project components */}
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">Project 1</h3>
              <p className="mt-2">Description of project 1.</p>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">
                View Project
              </a>
            </div>
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">Project 2</h3>
              <p className="mt-2">Description of project 2.</p>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">
                View Project
              </a>
            </div>
            {/* Add more projects as needed */}
          </div>
        </section>
      </main>
    </div>
  );
}
