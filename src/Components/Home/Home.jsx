import React, { useEffect } from 'react'
import Mainbody from '../Mainbody/Mainbody';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Letstalknum from '../Letstalk/Letstalknum';
// import Testimonial from '../Testimonial/Testimonial';
import { useLocation } from "react-router-dom"



const Home = () => {
  const { pathName } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName])
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