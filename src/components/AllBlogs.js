import React from "react";
import { Consumer } from "../Context";
import BlogCard from "./BlogCard";

export default function AllBlogs() {
  return (
    <Consumer>
      {(value) => {
        const { Blogs } = value;

        return (
          <div className="container my-5 py-5 text-center">
            <h1 className="text-dark font-weight-light py-5">
              All My <span className="text-info">Blogs</span>
            </h1>

            <div className="row my-4 pt-4">
              {Blogs.map((Blog) => (
                <div key={Blog.id} className="col-12 col-md-6 py-3">
                  <BlogCard
                    id={Blog.id}
                    title={Blog.title}
                    img={Blog.imageUrl}
                    excerpt={Blog.Excerpt}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}
