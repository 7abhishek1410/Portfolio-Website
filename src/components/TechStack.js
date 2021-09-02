import React from "react";
import TechStackBadges from "./TechStackBadges";
import { v4 as uuid } from "uuid";
import { Consumer } from "../Context";

// uuid is used for assigning an unique value to our key prop

function TechStack() {
  // const TechStack = [
  //   {
  //     id: 1,
  //     name:"HTML",
  //     imagepath: HTML,
  //     starsTotal: 3,
  //     starsActive: 3,
  //   },
  //   {
  //     id: 2,
  //     name:"CSS",
  //     imagepath: CSS,
  //     starsTotal: 3,
  //     starsActive: 3,
  //   },
  //   {
  //     id: 3,
  //     name:"JS",
  //     imagepath: JS,
  //     starsTotal: 3,
  //     starsActive: 3,
  //   },
  //   {
  //     id: 4,
  //     name:"BS",
  //     imagepath: BS,
  //     starsTotal: 3,
  //     starsActive: 3,
  //   },
  //   {
  //     id: 5,
  //     name:"React",
  //     imagepath: react,
  //     starsTotal: 3,
  //     starsActive: 3,
  //   },
  //   {
  //     id: 6,
  //     name:"SQL",
  //     imagepath: SQL,
  //     starsTotal: 3,
  //     starsActive: 3,
  //   },
  //   {
  //     id: 7,
  //     name:"Python",
  //     imagepath: Python,
  //     starsTotal: 3,
  //     starsActive: 3,
  //   },
  //   {
  //     id: 8,
  //     name:"Flask",
  //     imagepath: flask,
  //     starsTotal: 3,
  //     starsActive: 3,
  //   },
  //   {
  //     id: 8,
  //     name:"Flask",
  //     imagepath: flask,            //see the example, adjusted to the next row
  //     starsTotal: 3,
  //     starsActive: 3,
  //   },
  // ];

  return (
    <Consumer>
      {(value) => {
        const { TechStack } = value;
        const finalskill = [];
        // Once the elements will be there in a row using a for loop, push() will be used to add it to the list
        for (let i = 0; i < TechStack.length / 4; i++) {
          let skillrow = TechStack.slice(i * 4, (i + 1) * 4);
          finalskill.push(
            <div key={uuid()} className="d-flex justify-content-around py-3">
              {skillrow.map((techskill) => (
                <TechStackBadges key={uuid()} skill={techskill} />
              ))}
            </div>
          );
        }

        return (
          <div>
            <div className="bg-light w-100">
              <div className="container text-center py-3">
                <h1 className="font-weight-light">
                  <span className="text-info">Technology</span> Stack
                </h1>

                <div className="lead pb-3">
                  I design with dominance using these weapons
                </div>
                {finalskill}
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default TechStack;
