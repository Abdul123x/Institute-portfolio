import React from 'react'
import Mainbody from '../Mainbody/Mainbody';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Letstalknum from '../Letstalk/Letstalknum';
// import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
  return (
  <div>
     <Mainbody />
       <Services />
       <Projects />
       <Letstalknum />
      {/* <Testimonial />     */}
  </div>
  )
}

export default Home