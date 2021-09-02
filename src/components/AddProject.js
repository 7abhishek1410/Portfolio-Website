import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { Consumer } from "../Context";
import {v4 as uuid} from "uuid";

class AddProject extends Component {
  state = {
    imageUrl: "",
    title: "",
    excerpt: "",
    body: "",
    submitMessage: "",
    submitMessageTextColour: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

//   onSubmit = (addProjectHandler,event) => {
  onSubmit = (handler,event) => {
    event.preventDefault();
    let isSuccessful = true;

    if (isSuccessful == true) {
      this.setState({
        submitMessage: "Hurray! Project Added",
        submitMessageTextColour: "text-success",
      });
    } else {
      this.setState({
        submitMessage: "Sorry! something went wrong",
        submitMessageTextColour: "text-danger",
      });
    }
    
    // const {imageUrl,title,excerpt,body}=this.state;
    // <aking a new object new Project can be done using destructuring or simply using this keyword

//    const newProject={
//         id:uuid(),
//         imageUrl:this.state.imageUrl,
//         title:this.state.title,
//         excerpt:this.state.excerpt,
//         body:this.state.body,
//     }

   const newProject={
        id:uuid(),
        imageUrl:this.state.imageUrl,
        title:this.state.title,
        Excerpt:this.state.excerpt,
        body:this.state.body,
    }

    // addProjectHandler(newProject);
      // simply passing the newProject to the Handler funtn
    handler("Add_Project",newProject);

    // Adding action for implementing the switch case

  

  };

  onBodyChange = (
    value //for storing the value of the editor to the body we need to pass a parameter "value"
  ) => {
    this.setState({
      body: value,
    });
  };

  render() {
       return (
           <Consumer>
               {(value)=>{
                   const {
                    imageUrl,
                    body,
                    title,
                    submitMessage,
                    submitMessageTextColour,
                  } = this.state;

                //   const {addProjectHandler}=value;  
                  const {handler}=value;  

                //   accessing the handler funtn
              
                  return (
                    <div className="container-fluid my-5 py-5">
                      <h1 className="text-center font-weight-light my-5">
                        Add <span className="text-info">Project</span>
                      </h1>
                      <div className="row px-3 ">
                        <div className="col-12 col-lg-6 ">
                          {/* <form onSubmit={this.onSubmit.bind(this, addProjectHandler)}> */}
                          <form onSubmit={this.onSubmit.bind(this, handler)}>
                              {/* Passing the handler funtn to thhe submit funt using bind method */}
                            <div className="form-group">
                              <label htmlFor="imageUrl">Featured Image Url *</label>
                              <input
                                type="text"
                                name="imageUrl"
                                id="URL"
                                className="form-control"
                                required
                                onChange={this.onChange}
                              ></input>
                            </div>
                            <div className="form-group">
                              <label htmlFor="title">Title *</label>
                              <input
                                type="text"
                                name="title"
                                id="Title"
                                className="form-control"
                                required
                                onChange={this.onChange}
                              ></input>
                            </div>
                            <div className="form-group">
                              <label htmlFor="excerpt">Excerpt *</label>
                              <input
                                type="text"
                                name="excerpt"
                                id="Excerpt"
                                className="form-control"
                                required
                                onChange={this.onChange}
                              ></input>
                            </div>
                            <SimpleMDE
                              onChange={this.onBodyChange}
                              options={{
                                hideIcons: ["preview", "side-by-side", "fullscreen"],
                              }}
                            />
              
                            <button
                              type="submit"
                              className="btn btn-dark btn-block my-5"
                              // style={{ backgroundColor: "black" }}
                            >
                              Publish
                            </button>
                          </form>
                          <div className="text-center my-5">
                            <h4 className={submitMessageTextColour}>{submitMessage}</h4>
                          </div>
                        </div>
              
                        <div className="col-12 col-lg-6 markdown">
                          <div className="justify-content-center">
                            <img src={imageUrl} alt={title}  />
                            {/* Now we can remove class img fluid ase we are defining the styles undeer css. Also now it will be feasible to add an image onto the editor as we are applying css to al the images */}
                            {/* max-width will make sure that the image takes the full width as per the parent element and display block will make sure that only one image is addeed per row. */}
                          </div>
                          <h1 className="font-weight-light my-5 text-center">{title}</h1>
              
                          <ReactMarkdown source={body} />
              
                          {/* {body} */}
                        </div>
                      </div>
                    </div>
                  );
               }}
           </Consumer>
       );
  }
}
export default AddProject;
