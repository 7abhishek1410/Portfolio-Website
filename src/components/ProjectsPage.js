import React from "react";
import { Consumer } from "../Context";
import ReactMarkdown from "react-markdown";



 function ProjectsPage(props) {
    return (
        // <h3 className="my-5 py-5">
        //     Project {props.match.params.id}
        //     {/* Using this way we can access the parameter from a component */}
        // </h3>

         <Consumer>
             {(value)=>{
                 const {Projects}=value;
                 const id=props.match.params.id;
                 const Project=Projects.filter((project)=>id==project.id)[0];
                //  We are using index 0, because filter function will filter an array but our Projects object is a combination of different objects, SO to access the individual property id we have to give it a index [0]
                const {imageUrl, title, body}=Project;
                 return(
                    <div className="container my-5 py-5 markdown">
                    <div className="justify-content-center">
                      <img src={imageUrl} alt={title} className="w-100" />
                      {/* class w-100 will take the full width of the class container */}
                      {/* Now we can remove class img fluid ase we are defining the styles undeer css. Also now it will be feasible to add an image onto the editor as we are applying css to al the images */}
                      {/* max-width will make sure that the image takes the full width as per the parent element and display block will make sure that only one image is addeed per row. */}
                    </div>
                    <h1 className="font-weight-light my-5 text-center">{title}</h1>
        
                    <ReactMarkdown source={body} />
        
                   
                  </div>
                 );
             }}
         </Consumer>
    )
}

export default ProjectsPage;