import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import SimpleMDEEditor from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Consumer } from "../Context";
import { v4 as uuid } from "uuid";

export default class AddBlog extends Component {
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

  onSubmit = (handler, event) => {
    event.preventDefault();

    let isSuccessful = true;

    if (isSuccessful == true) {
      this.setState({
        submitMessage: "Hurray! Blog Added",
        submitMessageTextColour: "text-success",
      });
    } else {
      this.setState({
        submitMessage: "Sorry! Something went wrong",
        submitMessageTextColour: "text-danger",
      });
    }

    const newBlog = {
      id: uuid(),
      imageUrl: this.state.imageUrl,
      title: this.state.title,
      Excerpt: this.state.excerpt,
      body: this.state.body,
    };

    handler("Add_Blog", newBlog);
  };

  onBodyChange = (value) => {
    this.setState({
      body: value,
    });
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { handler } = value;
          const {
            imageUrl,
            body,
            title,
            submitMessage,
            submitMessageTextColour,
          } = this.state;
          return (
            <div className="container-fluid my-5 py-5">
              <h1 className="text-dark font-weight-light text-center my-5">
                Add <span className="text-info">Blog</span>
              </h1>

              <div className="row px-3">
                <div className="col-12 col-lg-6">
                  <form onSubmit={this.onSubmit.bind(this, handler)}>
                    <div className="form-group">
                      <label htmlFor="imageUrl">Featured ImageUrl *</label>
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

                    <SimpleMDEEditor
                      onChange={this.onBodyChange}
                      options={{
                        hideIcons: ["preview", "side-by-side", "fullscreen"],
                      }}
                    />

                    <button
                      type="submit"
                      className="btn btn-dark btn-block my-5"
                    >
                      Publish
                    </button>
                  </form>
                  <div className="my-5 text-center">
                    <h4 className={submitMessageTextColour}>{submitMessage}</h4>
                  </div>
                </div>
                <div className="col-12 col-lg-6 markdown">
                  <div className="justify-content-center">
                    <img src={imageUrl} alt={imageUrl} />
                  </div>

                  <h1 className="font-weight-light my-5 text-center">
                    {title}
                  </h1>
                  <ReactMarkdown source={body} />
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
