import React from "react";

 function BlogCard(props) {
     const {id,img, title, excerpt}=props;
    //  const {Blogs}=props; // for accessing it as a whole object and a dot method -> title.Blogs
    // OR const {img, title, excerpt}=props.Blogs; and else is same
    return (
        <div>
            <div className="card shadow h100">
            <img src={img} alt={title} className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title text-dark">{title}</h4>
              <p className="card-text">{excerpt}</p>
              <a href={`/Blog/${id}`} className="stretched-link"></a>
            </div>
            </div>
        </div>
    )
}

export default BlogCard;