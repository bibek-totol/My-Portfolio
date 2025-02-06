import React from "react";
import im1 from './assets/Screenshot_58.png'
import './App.css'
import { Link } from "react-router";

const ProfileDetails1 = () => {
  return (
    <div className="bg-[linear-gradient(60deg,_rgba(33,3,55,1)_0%,_rgba(85,11,86,1)_52%,_rgba(42,10,96,1)_100%)] text-white min-h-screen p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">




    <div>
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link to="/"><button className="bg-gray-800 px-4 py-2 rounded-lg">🔙 Back</button></Link>
        <span className="text-gray-400">Projects &gt; IEMS: Collaborative Study Platform</span>
      </div>

      {/* Hero Section */}
      <div className="mt-8">
        <h1 className="text-4xl font-bold text-white">
        IEMS: Collaborative <span className="text-purple-400">Study Platform </span>
        </h1>
        <p className="text-gray-400 mt-2">
        IEMS: Collaborative Study Platform connects students, tutors, and administrators to streamline study session scheduling, resource sharing, and user management. This platform enhances collaboration and improves access to study materials for a more effective educational experience.
        </p>
      </div>

      {/* Stats Section */}
      <div className="flex space-x-4 mt-6">
        <div className="pookie3 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">8</p>
          <p className="text-gray-400">Total Technologies</p>
        </div>
        <div className="pookie3 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">10</p>
          <p className="text-gray-400">Features Included</p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-6">
        <a href="https://bibek-iems-portal.netlify.app/" className="bg-blue-600 px-6 py-2 rounded-lg mr-4">Live Demo</a>
        <a href="https://github.com/bibekbowmick2-2/IEMS-Client-" className="bg-purple-600 px-6 py-2 rounded-lg">GitHub(Client)</a>
      </div>

      {/* Technologies Used */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold">Technologies Used</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase", "JWT", "Axios"].map((tech) => (
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

       














          <li className="pookie3 p-3 rounded-lg">🔹  User Authentication & Social Login</li>
          <li className="pookie3 p-3 rounded-lg">🔹 Role-Based Access Control (RBAC)</li>
          <li className="pookie3 p-3 rounded-lg">🔹 Student Dashboard</li>
          <li className="pookie3 p-3 rounded-lg">🔹 Tutor Dashboard</li>
          <li className="pookie3 p-3 rounded-lg">🔹 Admin Dashboard</li>
          <li className="pookie3 p-3 rounded-lg">🔹 Review and Rating System</li>
          <li className="pookie3 p-3 rounded-lg">🔹 Announcements Feature</li>
          <li className="pookie3 p-3 rounded-lg">🔹 Pagination and Search</li>
        </ul>
      </div>
      </div>


    </div>
    </div>
  );
};

export default ProfileDetails1;
