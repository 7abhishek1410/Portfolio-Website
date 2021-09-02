import React from "react";
import ProjectCard from "./ProjectCard";
import { Consumer } from "../Context";
import {Link} from "react-router-dom";

// All the data has been commented, as we can access it through the Consumer component

function ProjectSec() {
  // const Projects = [
  //   {
  //     id: 1,
  //     title: "Project 1",
  //     imagepath: Project_1,
  //     Excerpt: "This is my Project about...",
  //   },
  //   {
  //     id: 2,
  //     title: "Project 2",
  //     imagepath: Project_2,
  //     Excerpt: "This is my Project about...",
  //   },
  //   {
  //     id: 3,
  //     title: "Project 3",
  //     imagepath: Project_3,
  //     Excerpt: "This is my Project about...",
  //   },
  // ];
    
   return(

    // Need to return our Consumer component also
     <Consumer>

       {(value)=>{
         const {Projects} = value;
          return (
            <div className="container text-center my-5">
              <h1 className="font-weight-light">
                My <span className="text-info">Projects</span>
              </h1>
              <div className="lead">Craft in my style. Some illustrations</div>
              <div className="row my-5 py-3">
                {/*  {Projects.map((Project) => (  Instead of this we need to pass value.Projects.map, since we are accesing the value prop, but we are passing the whole state in the consumer component, SO for projects to be remained defined we need to use the below statement.*/}
                {/* {value.Projects.map((Project) => ( Can also do destructring and use it simpy as it was*/}
                {Projects.slice(0,3).map((Project) => (
                  <div key={Project.id} className="col-12 col-md-4 my-2">
                    <ProjectCard
                      id={Project.id}
                      title={Project.title}
                      img={Project.imageUrl}
                      excerpt={Project.Excerpt}
                      // project={Project}
                    />
                  </div>
                ))}
              </div>
              <div className="my-5">
                <Link to="/All/My/Projects" className="text-dark text-right">
                  <h5>
                    See All Projects <i className="fas fa-arrow-right align-middle"></i>
                  </h5>
                </Link>
              </div>
            </div>
          );
       }}

     </Consumer>
   );

}

export default ProjectSec;
