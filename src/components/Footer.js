import  React  from "react";
import { Link } from "react-router-dom";

function Footer()
{
    return(
        <footer>
      <div className="container-fluid text-center bg-info">
        <div className="py-5">
          <h2 className="text-dark">Interested in working with me?</h2>
         <Link to="/Contact">
         <button className="btn btn-outline-dark btn-lg text-light">
            Let's talk
          </button>
         </Link>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 py-3">
            <div>
              <h5 className="text-dark pb-3">More links</h5>
              <Link to="/All/My/Blogs" className="text-light d-block">Blogs</Link>
              <Link to="/All/My/Projects" className="text-light d-block">Projects</Link>
              <Link to="/" className="text-light d-block">Achievements</Link>
              <Link to="/Contact" className="text-light d-block">Contact Me</Link>
              <Link to="/Write-A-Recommendation" className="text-light"
                >Write a recommendation <i className="fas fa-heart text-dark"></i
              ></Link>
            </div>
          </div>
          <div className="col-12 col-md-4 text-justify text-light py-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              expedita, ducimus illum aperiam, eum odio perferendis dolorem a
              cumque necessitatibus aliquam cupiditate sunt inventore atque sint
              nemo laborum, eos maiores! Dolorem facere iusto reprehenderit
              incidunt impedit magnam vitae ullam id.
            </p>
          </div>

          <div className="col-12 col-md-4 py-3">
            <h5 className="text-dark pb-3">Social</h5>
            <Link to="/" className="text-light d-block">
              <i className="fab fa-linkedin h2"></i>
            </Link>
            <Link to="/" className="text-light d-block">
              <i className="fab fa-github h2"></i>
            </Link>
            <Link to="/" className="text-light d-block">
              <i className="fas fa-envelope h2"></i>
            </Link>
          </div>
        </div>

        <div className="text-muted py-3">
          <p>Copyright &#169; Abhishek Dubey 2021</p>
        </div>
      </div>
    </footer>
    );
}

export default Footer;