import React from "react";
import {v4 as uuid} from "uuid";
import { Consumer } from "../Context";
import RecCard from "./RecCard";

function Rec() {

    // const Reccomendations=[
    //     {
    //         id:1,
    //         name:"xyz",
    //         company:"abc",
    //         designation:"CEO",
    //         message:"He is a talented man",
    //     },
    //     {
    //         id:2,
    //         name:"xyz",
    //         company:"abc",
    //         designation:"CEO",
    //         message:"He is a talented man",
    //     },
    //     {
    //         id:3,
    //         name:"xyz",
    //         company:"abc",
    //         designation:"CEO",
    //         message:"He is a talented man",
    //     },
    //     {
    //         id:4,
    //         name:"xyz",
    //         company:"abc",
    //         designation:"CEO",
    //         message:"He is a talented man",
    //     },
    //     {
    //         id:5,
    //         name:"xyz",
    //         company:"abc",
    //         designation:"CEO",
    //         message:"He is a talented man",
    //     },
    //     {
    //         id:6,
    //         name:"xyz",
    //         company:"abc",
    //         designation:"CEO",
    //         message:"He is a talented man",
    //     },   
       
    // ];
   

    return(
        <Consumer>
            {(value)=>{
                const{Reccomendations}=value;
                 return (
   
                    <div className="container-fluid my-5">
                      <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
                        {
                            Reccomendations.map((reccomendation)=>(
                                <RecCard key={(uuid)} reccomendations={reccomendation}/>
                            ))
                        }
                      </div>
                    </div>
                  
                );
            }}
        </Consumer>
    );
}

export default Rec;
