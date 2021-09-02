import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  
  const{id, title, img, excerpt}=props;
  return (
    <div>
      <div className="card shadow h100">
        <img src={img} alt={title} className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title text-dark">{title}</h4>
          <p className="card-text">{excerpt}</p>
          <Link to={`/Project/${id}`} className="stretched-link"></Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
