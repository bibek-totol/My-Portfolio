import React from "react";
import im1 from './assets/Screenshot_14.png'
import './App.css'
import { Link } from "react-router";

const ProfileDetails2 = () => {
  return (
    <div className="bg-[linear-gradient(60deg,_rgba(33,3,55,1)_0%,_rgba(85,11,86,1)_52%,_rgba(42,10,96,1)_100%)] text-white min-h-screen p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">




    <div>
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link to="/"><button className="bg-gray-800 px-4 py-2 rounded-lg">🔙 Back</button></Link>
        <span className="text-gray-400">Projects &gt;  A Game Review Application </span>
      </div>

      {/* Hero Section */}
      <div className="mt-8">
        <h1 className="text-4xl font-bold text-white">
        GameCritics-Hub2:<span className="text-purple-400"> A Game Review Application </span>
        </h1>
        <p className="text-gray-400 mt-2">
        Used to Review games to improve personalize experience to everyone. Adding wishlist of the game as per rating and reviews and customizing your own reviews.
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
        <a href="https://unruly-destruction.surge.sh/" className="bg-blue-600 px-6 py-2 rounded-lg mr-4">Live Demo</a>
        <a href="https://github.com/bibekbowmick2-2/GameCritic-Hub-Client-" className="bg-purple-600 px-6 py-2 rounded-lg">GitHub(Client)</a>
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

       














          <li className="pookie3 p-3 rounded-lg">🔹 Comprehensive Game Database </li>
          <li className="pookie3 p-3 rounded-lg">🔹 User-Generated Reviews and Ratings</li>
          <li className="pookie3 p-3 rounded-lg">🔹 Personalized Recommendations</li>
          <li className="pookie3 p-3 rounded-lg">🔹 Advanced Search and Filter Options</li>
          <li className="pookie3 p-3 rounded-lg">🔹 Up-to-Date News and Updates</li>
         
        </ul>
      </div>
      </div>


    </div>
    </div>
  );
};

export default ProfileDetails2;
