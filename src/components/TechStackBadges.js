import React from "react";
import {v4 as uuid} from "uuid";

 function TechStackBadges(props) {
     const {name, imageUrl, starsTotal, starsActive}=props.skill;
     let finalstars=[];
     for (let i = 0; i < starsTotal; i++) {
          
        if (i<starsActive) {
            
            finalstars.push(
                <span key={uuid()} className="text-info h3">&#9733;</span>
            )
        }
        else
        {
            finalstars.push(
                <span key={uuid()} className="h3">&#9733;</span>
            )
        }
         
     }
    return (
        <div>
             <div>
            <img
              src={imageUrl}
              alt={name}
              className="rounded-circle pt-2"
              width="100px"
              height="100px"
            />

           
          </div>
          <div>{finalstars}</div>
        </div>
    )
}

export default TechStackBadges;