import "./App.css";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WriteRec from "./components/Write_Rec";
import Notfound from "./components/Notfound";
import ProjectsPage from "./components/ProjectsPage";
import Home from "./components/Home";
import AddProject from "./components/AddProject";
import { Provider } from "./Context";
import AllProjects from "./components/AllProjects";
import AllBlogs from "./components/AllBlogs";
import AddBlog from "./components/AddBlog";
import BlogPage from "./components/BlogPage";
import ScrollToTop from "./components/ScrollTop";

function App() {
  return (
    <Provider>
      {/* All the data has been moved to the Provider component as it stores all the data */}
      <BrowserRouter>
        {/*Removed div, as we got a new parent element BrowserRouter for implementing naviigation in our page  */}
        {/* So as we want that our navbar and footer should always be present in our every page thus it is not defined in switch as it doen't needs a exact path */}
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Write-A-Recommendation" component={WriteRec} />
          <Route exact path="/Add/Project" component={AddProject} />
          <Route exact path="/Add/Blog" component={AddBlog} />
          <Route exact path="/All/My/Projects" component={AllProjects} />
          <Route exact path="/All/My/Blogs" component={AllBlogs} />
          <Route exact path="/Project/:id" component={ProjectsPage} />
          <Route exact path="/Blog/:id" component={BlogPage} />
          {/* :id is a parameter and its accesing the value from the ProjectCard page as we are giving the same path to both of them in the link */}
          <Route component={Notfound} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
