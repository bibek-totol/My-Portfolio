import React from "react";
import im1 from './assets/Screenshot_75.png'
import './App.css'
import { Link } from "react-router";

const ProfileDetails3 = () => {
  return (
    <div className="bg-[linear-gradient(60deg,_rgba(33,3,55,1)_0%,_rgba(85,11,86,1)_52%,_rgba(42,10,96,1)_100%)] text-white min-h-screen p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">




    <div>
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link to="/"><button className="bg-gray-800 px-4 py-2 rounded-lg">🔙 Back</button></Link>
        <span className="text-gray-400">Projects &gt;  Tech-Tales: A Blog Application </span>
      </div>

      {/* Hero Section */}
      <div className="mt-8">
        <h1 className="text-4xl font-bold text-white">
        Tech-Tales: <span className="text-purple-400">A Blog Application </span>
        </h1>
        <p className="text-gray-400 mt-2">
        Welcome to the Blog Website Development project! We're seeking a talented Front-End Developer to help bring our next-generation blog website to life. This exciting project will allow you to design and implement beautiful, responsive web pages, collaborating with designers and back-end developers. The project involves creating a dynamic, user-friendly experience for visitors, using modern technologies like React and Firebase.
        </p>
      </div>

      {/* Stats Section */}
      <div className="flex space-x-4 mt-6">
        <div className="pookie3 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">7</p>
          <p className="text-gray-400">Total Technologies</p>
        </div>
        <div className="pookie3 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">5</p>
          <p className="text-gray-400">Features Included</p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-6">
        <a href="https://tech-tales2025.netlify.app/" className="bg-blue-600 px-6 py-2 rounded-lg mr-4">Live Demo</a>
        <a href="https://github.com/bibekbowmick2-2/Client-Tech-Tales" className="bg-purple-600 px-6 py-2 rounded-lg">GitHub(Client)</a>
      </div>

      {/* Technologies Used */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold">Technologies Used</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase", "Axios"].map((tech) => (
            <span key={tech} className="pookie3 px-3 py-1 rounded-lg">{tech}</span>
          ))}
        </div>
      </div>

      </div>




      <div>

      {/* Key Features */}
      <div className="mt-8">
      <img className=" rounded-lg" src={im1}/>
        <h3 className="text-lg font-semibold">Key Features</h3>
        <ul className="mt-2 space-y-2">

       














          <li className="pookie3 p-3 rounded-lg">🔹 Blog Management: Users can add, view, and manage blogs through dedicated sections such as 'All Blogs' and 'Add Blogs'. This makes it easy for users to navigate through the content and contribute their own posts. </li>
          <li className="pookie3 p-3 rounded-lg">🔹 Engagement through Comments: The website includes a comment system that allows readers to leave feedback on posts. This feature can enhance user engagement and foster discussions around the blog content.</li>
          <li className="pookie3 p-3 rounded-lg">🔹 Calendar Feature: The 'Calendar section allows users to keep track of events, blog posts, or deadlines, improving the organization of content and ensuring users don't miss important dates related to the blogging experience.</li>
          <li className="pookie3 p-3 rounded-lg">🔹 Wishlist Functionality: Users can save blogs or articles to a 'WishList' for easy access later. This feature allows readers to curate their personal list of interesting content they wish to explore further.</li>
          <li className="pookie3 p-3 rounded-lg">🔹 These features collectively create a comprehensive and user-friendly blogging platform for both content creators and readers.</li>
         
        </ul>
      </div>
      </div>


    </div>
    </div>
  );
};

export default ProfileDetails3;
