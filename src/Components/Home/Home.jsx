import React, { useEffect } from 'react'
import Mainbody from '../Mainbody/Mainbody';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Letstalknum from '../Letstalk/Letstalknum';
// import Testimonial from '../Testimonial/Testimonial';
import { useLocation } from "react-router-dom"
import { Helmet } from "react-helmet"



const Home = () => {
  const { pathName } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName])
  return (
    <div>
      <Helmet>
        <title>Beta Communes - Home</title>
        <meta name="description" content=" Elevating businesses since 2022, we've crafted cutting-edge IT solutions for global success.| Transform your digital journey with us today!" />
      </Helmet>
      <Mainbody />
      <Services />
      <Projects />
      <Letstalknum />
      {/* <Testimonial />     */}
    </div>
  )
}

export default Home