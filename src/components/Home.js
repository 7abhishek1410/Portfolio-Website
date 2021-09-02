import React from 'react'
import Aboutme from './AboutMe'
import BlogSec from './BlogSec'
import ProjectSec from './ProjectSec'
import Rec from './Rec'
import TechStack from './TechStack'
import Title from './title'

 function Home() {
    return (
        <div>
            <Title/>
            <Rec/>
            <Aboutme/>
            <TechStack/>
            <ProjectSec/>
            <BlogSec/>
        </div>
    )
}

export default Home;