import React from "react";
import { Component } from "react";
import { FiThumbsUp } from 'react-icons/fi'
import { Consumer } from "../Context";
import {v4 as uuid} from "uuid";

class WriteRec extends Component {
  state = {
    name: "",
    email: "",
    company: "",
    designation: "",
    recommendation: "",
    submitMessage: "",
    submitMessageTextColour: "",
  };

  onChange=(event)=>
  {
      this.setState({
          [event.target.name]:event.target.value,
      });
  };

  onSubmit=(handler, event)=>
  {
      event.preventDefault();
      let isSuccessful= true;

      if (isSuccessful==true) {

        this.setState({
          submitMessage :`Thank You❤ For Your Kind Words!!`,
          submitMessageTextColour:"text-danger",

          
          
        });
          
      }
      else
      {
        this.setState({
          submitMessage:"Oops! Something Went Wrong, Please Comeback Later.",
          submitMessageTextColour:"text-black",
        });
      }

      const newRecommendation={
        id:uuid(),
        name: this.state.name,
        email: this.state.email,
        company: this.state.company,
        designation: this.state.designation,
        message: this.state.recommendation,
       
      };

      handler("Add_Reccomendation",newRecommendation);
  };

  render() {
         
    return(
      <Consumer>
        {(value)=>{
          const {handler}=value;
           const {submitMessage, submitMessageTextColour}=this.state;
           return (
             <div className="container my-5">
               <h1 className="font-weight-light py-5 text-center">
                 <span className="text-info">Thank You!</span> For Your Special Mention
               </h1>
       
               <div className="row justify-content-center">
                 <div className="col-11 col-lg-5">
                   <form onSubmit={this.onSubmit.bind(this, handler)}>
                       <div className="form-group">
                           <label htmlFor="name">Name *</label>
                           <input className="form-control" name="name" id="name" onChange={this.onChange}></input>
                       </div>
                       <div className="form-group">
                           <label htmlFor="email">Email *</label>
                           <input className="form-control" id="email" name="email" onChange={this.onChange}></input>
                       </div>
                       <div className="form-group">
                           <label htmlFor="company">Company/Institution *</label>
                           <input className="form-control" id="company" name="company" onChange={this.onChange}></input>
                       </div>
                       <div className="form-group">
                           <label htmlFor="designation">Designation *</label>
                           <input className="form-control" id="designation" name="designation" onChange={this.onChange}></input>
                       </div>
                       <div className="form-group">
                           <label htmlFor="recommendation">Recommendation *</label>
                           <textarea className="form-control" id="recommendation" name="recommendation" rows="5" onChange={this.onChange}></textarea>
                       </div>
                       <button type="submit" className="btn btn-outline-dark float-right "  style={{backgroundColor:"red"}}>Lots of Love!</button>
                   </form>
                 </div>
               </div>
       
               <div className="py-5 text-center">
                 <h4 className={submitMessageTextColour}>{submitMessage}</h4>
               </div>
             </div>
           );
        }}
      </Consumer>
    );
  }
}

export default WriteRec;
