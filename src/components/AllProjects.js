import React from 'react'
import { Consumer } from '../Context'
import ProjectCard from './ProjectCard';


export default function AllProjects() {
    return (
       <Consumer>
           {(value)=>{
               const {Projects}=value;
               return (
                <div className="container text-center my-5 py-5">
                <h1 className="text-dark  font-weight-light py-5">
                    All My <span className="text-info">Projects</span>
                </h1>
                <div className="row my-4 pt-4">
                    {Projects.map((Project)=>(
                        <div className="col-12 col-lg-6 py-3" key={Project.id}> 
                        <ProjectCard 
                        // project={Project}
                        id={Project.id}
                        title={Project.title}
                        img={Project.imageUrl}
                        excerpt={Project.Excerpt}
                        />
                        </div>
                    ))}
                  
                </div>
                
            </div>
               );

           }}
       </Consumer>
    )
}
