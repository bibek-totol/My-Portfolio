import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import im1 from './assets/Screenshot_58.png'
import im2 from './assets/Screenshot_14.png'
import im3 from './assets/Screenshot_75.png'
export default function RecentWorks() {
  return (
    <div className='mt-32'>
       <div className='text-center'>
      <p className='text-4xl lg:text-6xl font-bold text-[#8953F7] mt-5'>
          My Recent <span className='text-[#B694FA]'>Works</span>
        </p>
        <p className='text-[#B694FA] font-bold max-w-xl mx-auto  mt-5'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
        </div>

        <Tabs>
      <TabList className={'flex justify-center gap-5 [font-size:12px] lg:[font-size:20px] w-8/9 lg:w-1/2 mx-auto mt-14 border text-amber-50 font-bold bg-black p-3 rounded-full'}>
        <Tab>Mern Stack Projects</Tab>
        
        {/* <Tab>Backend Projects</Tab>
        <Tab>All Projects</Tab> */}
        
      </TabList>

      <TabPanel>
       <div className='grid grid-cols-1 lg:grid-cols-3 justify-center p-10 lg:p-25 gap-20'>



       <div className="card card-compact  bg-[linear-gradient(30deg,_rgba(105,40,204,1)_0%,_rgba(157,78,166,1)_51%,_rgba(30,5,36,1)_100%)] w-96 shadow-xl">
  <figure>
    <img
      src={im1}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <a className='text-blue-800 font-extrabold underline' href="https://bibek-iems-portal.netlify.app/"><h2 className="card-title">Live Link</h2></a>
    <p className='text-fuchsia-300 font-bold '>
    IEMS: Collaborative Study Platform connects students, tutors, and administrators to streamline study session scheduling, resource sharing, and user management.  This platform enhances collaboration and improves access to study materials for a more effective educational experience.
    </p>
    <div className="card-actions justify-end">

     <a href="https://github.com/bibekbowmick2-2/IEMS-Client-" ><button className="btn btn-primary">Client Repository</button></a> 
     <a  href="https://github.com/bibekbowmick2-2/IEMS-Server"><button className="btn btn-primary">Server Repository</button></a>
    </div>
  </div>
</div>




<div className="card card-compact  bg-[linear-gradient(30deg,_rgba(105,40,204,1)_0%,_rgba(157,78,166,1)_51%,_rgba(30,5,36,1)_100%)] w-96 shadow-xl">
  <figure>
    <img
      src={im2}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <a className='text-blue-800 font-extrabold underline' href="https://unruly-destruction.surge.sh/"><h2 className="card-title">Live Link</h2></a>
    <p className='text-fuchsia-300 font-bold '>GameCritics-Hub2 is a game review application that provides a comprehensive database of games, user-generated reviews and ratings, and personalized recommendations.  It also offers advanced search and filter options along with up-to-date gaming news and updates.</p>
    <div className="card-actions justify-end">
     
    <a href="https://github.com/bibekbowmick2-2/GameCritic-Hub-Client-" ><button className="btn btn-primary">Client Repository</button></a> 
     <a  href="https://github.com/bibekbowmick2-2/GameCriticHub-server-"><button className="btn btn-primary">Server Repository</button></a>
    </div>
  </div>
</div>





<div className="card card-compact  bg-[linear-gradient(30deg,_rgba(105,40,204,1)_0%,_rgba(157,78,166,1)_51%,_rgba(30,5,36,1)_100%)] w-96 shadow-xl">
  <figure>
    <img
      src={im3}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <a className='text-blue-800 font-extrabold underline' href="https://tech-tales2025.netlify.app/"><h2 className="card-title">Live Link</h2></a>
    <p className='text-fuchsia-300 font-bold '>Tech-Tales is a blog application that allows users to create, view, and manage blog posts, along with engaging with other users through comments.  It also incorporates features like  a calendar, and a wishlist to enhance the blogging experience.</p>
    <div className="card-actions justify-end">
     
    <a href="https://github.com/bibekbowmick2-2/Client-Tech-Tales" ><button className="btn btn-primary">Client Repository</button></a> 
     <a  href="https://github.com/bibekbowmick2-2/Server-Tech-Tales-"><button className="btn btn-primary">Server Repository</button></a>
    </div>
  </div>
</div>
       </div>
      </TabPanel>

      

      {/* <TabPanel>
        <p>
          <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime</i>) is the
          princess of the Mushroom Kingdom and a recurring damsel-in-distress in the Mario series.
          She is often depicted as Mario's love interest and the lead female character.
        </p>
        <p>
          Source:{" "}
          <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank" rel="noopener noreferrer">
            Wikipedia
          </a>
        </p>
      </TabPanel>

      <TabPanel>
        <p>
          <b>Yoshi</b> (<i>ヨッシー Yosshī</i>) is a fictional dinosaur who debuted in Super Mario World (1990).
          He has appeared in various Mario spin-offs, including Yoshi's Island, Mario Kart, and Super Smash Bros.
        </p>
        <p>
          Source:{" "}
          <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank" rel="noopener noreferrer">
            Wikipedia
          </a>
        </p>
      </TabPanel> */}

      
    </Tabs>
    </div>
  )
}
