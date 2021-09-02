import React from "react";
import { Consumer } from "../Context";
import BlogCard from "./BlogCard";
import {Link} from "react-router-dom";


function BlogSec() {
  // const Blogs = [
  //   {
  //     id: 1,
  //     title: "Blog 1",
  //     imagepath: Blog_1,
  //     Excerpt: "This Blog is about...",
  //   },
  //   {
  //     id: 2,
  //     title: "Blog 2",
  //     imagepath: Blog_2,
  //     Excerpt: "This Blog is about...",
  //   },
  //   {
  //     id: 3,
  //     title: "Blog 3",
  //     imagepath: Blog_3,
  //     Excerpt: "This Blog is about...",
  //   },
  // ];
   
  return(
    <Consumer>
      {(value)=>{
        const {Blogs}=value;
        return (
          <div className="container text-center my-5">
            <h1 className="font-weight-light">
              My <span className="text-info">Blogs</span>
            </h1>
            <div className="lead">Ruminations about the things going around</div>
            <div className="row my-5 py-3">
              {Blogs.slice(0,3).map((Blog) => (
                <div key={Blog.id} className="col-12 col-md-4 my-2">
                  {/* Using a key prop for uniquenes, so that the react can identify the components uniquely */}
                  {/* <BlogCard
                     Blog={Blog}
                  /> */}
                  <BlogCard
                    id={Blog.id}
                    title={Blog.title}
                    img={Blog.imageUrl}
                    excerpt={Blog.Excerpt}
                  />
      
                  {/* <Blogcard Blog={Blog}/>   */}
                  {/* directly sending it as an object rather than sending it individually */}
                </div>
              ))}
               
            </div>
            <div className="my-5">
                 <Link to="/All/My/Blogs" className="text-dark text-right">
                   <h5>
                     See My Blogs <i className="fas fa-arrow-right align-middle"></i>
                   </h5>
                 </Link>
               </div>
          </div>
        );
      }}
    </Consumer>
  );

}

export default BlogSec;
