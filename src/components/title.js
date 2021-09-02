import react  from "react";
import Abhishek from "..//img/Abhishek_s.jpeg"

function Title()
{
    const name = "Abhishek Dubey";
    const leadtext = "I'm a Web Developer from India";
    return(
        <div className="container">
      <div className="row text-center align-items-center py-5">
        <div className="col-12 col-md-6 my-3">
          <img
            src={Abhishek}
            alt="Abhishek_Dubey"
            className="img-fluid rounded-circle w-75 mt-5"
          />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div className="font-weight-light" style= {{fontSize:"40px"}}>
            Hie, This is <span className="text-info">{name}</span>
          </div>

          <div>
            <h4 className="font-weight-light">{leadtext}</h4>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Title;