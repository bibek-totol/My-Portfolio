import React from 'react'
import Marquee from "react-fast-marquee";

const skills = [
    { name: "Figma", image: "/figma.png", percentage: "92%", color: "text-purple-400" },
    { name: "Sketch", image: "/sketch.png", percentage: "80%", color: "text-purple-400" },
    { name: "XD", image: "/xd.png", percentage: "85%", color: "text-purple-400" },
    { name: "WordPress", image: "/wordpress.png", percentage: "99%", color: "text-purple-400" },
    { name: "React", image: "/react.png", percentage: "89%", color: "text-purple-400" },
    { name: "JavaScript", image: "/javascript.png", percentage: "93%", color: "text-purple-400" },
  ];
export default function SKills() {
  return (
    <div className='p-10 mt-14'>
      <section className="text-center mt-20 px-5">
      <h2 className="text-4xl lg:text-6xl font-bold text-white">
        My <span className="text-purple-400">Skills</span>
      </h2>
      <p className="text-gray-400 mt-4 max-w-xl mx-auto">
        We put your ideas and thus your wishes in the form of a unique web project
        that inspires you and your customers.
      </p>
     

      <Marquee pauseOnHover={true}  speed={150} direction='right' delay={1}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-20 mt-10 px-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#1a0e2d] hover:bg-[#3e717d] transition duration-300 p-6 rounded-2xl flex flex-col items-center text-white"
          >
            <img src={skill.image} alt={skill.name} className="w-12 h-12 mb-3" />
            <p className="text-xl font-bold">{skill.percentage}</p>
            <p className={`${skill.color} mt-2 font-medium`}>{skill.name}</p>
          </div>
        ))}
      </div>
    </Marquee>
    </section>
    </div>
  )
}
