import React from "react";
import { Component } from "react";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      description: "",
      submitMessage: "",
      submitMessageTextColour: "",
    };
  }

  // Method-2 -> W/o Constructor -> simply just declare state object w/o this also, depends on whether you need to perform other functions or just only the state

  //  state = {
  //   name: "",
  //   email: "",
  //   description: "",
  //   submitMessage: "",
  //   submitMessageTextColour: "",
  // };

  // Now we need a variable to store the updation in the input fields, and we will use on click attribute for the desired result
  // here we will use  "event" object, it is an object that is passed to the handler function and it has all the  details of the handling function. In this case onNamechange is the handler function and it is handling the onchange attribute
  // onNameChange=(event)=>{
  //     // console.log(event.target.id);
  //      // event.target will have the access to the html element triggering the event
  //     // console.log(event.target.value);
  //     // now, using the value attribute we can access the value inside the input field

  //     // ---------we are  using this.setState() to change the property of the state
  //     this.setState({

  //         name:event.target.value,

  //     });

  // }

  // onEmailChange=(event)=>
  // {
  //     this.setState({
  //         email:event.target.value,
  //     });
  // }

  // onDescriptionChange=(event)=>
  // {
  //     this.setState({
  //         description:event.target.value,
  //     })
  // }

  // ------------------Or we can use a simple function for storing the changes using only an onchange() funtn, remeber both the names of the property and the value of name attribute shoul be same. Or else an extra prop will be added-------->

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {

    event.preventDefault();
    
    let isSuccessful = true;

    const { name } = this.state;

    if (isSuccessful == true) {
      this.setState({
        submitMessage: `Thank You! ${name}. Will Contact You Soon!`,
        submitMessageTextColour: "text-info",
      });
    } else {
      this.setState({
        submitMessage: "Oops! Something went wrong. Try again later",
        submitMessageTextColour: "text-danger",
      });
    }
  };

  render() {
    const{submitMessage,submitMessageTextColour}=this.state;
    // destructuring and displaying it in h4 after submission.
    return (
      <div className="container my-5">
        <h1 className="font-weight-light text-center py-5 ">
          <span className="text-info">Thank You!</span> For Your Interest
        </h1>
        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="Name">Name *</label>
                <input
                  type="text"
                  name="name"
                  id="Name"
                  className="form-control"
                  onChange={this.onChange}
                ></input>
                {/* form-control is a bs class which have some pre-styling for the textual input fields and text-area, select etc. */}
              </div>
              <div className="form-group">
                <label htmlFor="e-mail">Email *</label>
                <input
                  type="e-mail"
                  name="email"
                  id="e-mail"
                  className="form-control"
                  onChange={this.onChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="description">Tell me about your Project *</label>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  rows="5"
                  onChange={this.onChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark float-right">
                Let's talk Bussiness 
              </button>
            </form>
          </div>
        </div>

        <div className="py-5  text-center">
          <h5 className={submitMessageTextColour}>{submitMessage}</h5>
        </div>
      </div>
    );
  }
}

export default Contact;
