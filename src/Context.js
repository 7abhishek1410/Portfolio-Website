import React, {Component} from "react";
// import Project_1 from "./img/P_1.jpg";
// import Project_2 from "./img/P_2.jpg";
// import Project_3 from "./img/P_3.jpg";
// import HTML from "./img/HTML5.png";
// import CSS from "./img/css-3-help1.jpg";
// import JS from "./img/JavaScript-Logo.jpg";
// import BS from "./img/bootstrap-png-MSA-Technosoft.png";
// import react from "./img/react.png";
// import SQL from "./img/mysql-geeklk.jpg";
// import Python from "./img/180px-Python-logo.jpg.png";
// import flask from "./img/flask.png";
// import Blog_1 from "./img/B_1.jpg";
// import Blog_2 from "./img/B_2.jpg";
// import Blog_3 from "./img/B_3.jpg";

// Setting up - context API

const Context=React.createContext();

// Here React.createContext() function's data will be stored in our variable.

export class Provider extends Component
// Here Provider class will be holding all the data that will be shared to the different components
{
    // addProjectHandler=(newProject)=>
    // {
    //     this.setState({
    //         Projects:[newProject,...this.state.Projects],
    //     });

    //     // newProject object will be passed by the AddProject Component
    // };

    // ---------- Making a single handler funtn for all using handler funtn ------------------

    handler=(action, newObject)=>
    // here action is the expression
    {
           switch(action)
           {
               case "Add_Project":
                this.setState({
                            Projects:[newObject,...this.state.Projects],
                        });
                break;

                case "Add_Blog":
                    this.setState({
                                Blogs:[newObject,...this.state.Blogs],
                            });
                break;

                case "Add_Reccomendation":
                    this.setState({
                                Reccomendations:[newObject,...this.state.Reccomendations],
                            });
                break;
           }
    }


  state={

    handler:this.handler,

    // addProjectHandler:this.addProjectHandler,
    // this is done so that every component can access addProjectHandler

    Reccomendations:[
        {
            id:1,
            name:"xyz",
            company:"abc",
            designation:"CEO",
            message:"He is a talented man",
        },
        {
            id:2,
            name:"xyz",
            company:"abc",
            designation:"CEO",
            message:"He is a talented man",
        },
        {
            id:3,
            name:"xyz",
            company:"abc",
            designation:"CEO",
            message:"He is a talented man",
        },
        {
            id:4,
            name:"xyz",
            company:"abc",
            designation:"CEO",
            message:"He is a talented man",
        },
        {
            id:5,
            name:"xyz",
            company:"abc",
            designation:"CEO",
            message:"He is a talented man",
        },
        {
            id:6,
            name:"xyz",
            company:"abc",
            designation:"CEO",
            message:"He is a talented man",
        },   
       
    ],

    TechStack : [
        {
          id: 1,
          name:"HTML",
          imageUrl: "https://www.logolynx.com/images/logolynx/4a/4a07365ec29fee333fcf3616de5c9018.jpeg",
          starsTotal: 3,
          starsActive: 3,
        },
        {
          id: 2,
          name:"CSS",
          imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA1VBMVEX///8fcrXr6+tRo9zOzs4AAAASbrNynMnx8fGlpaXd3d3v7etSpd0jdbc7jMnR0M9Hn9sFbLQjIyMvLy+is8i1z+U/gLqYwuIAZ7APDw8AZrDIyMjW09BiYmIKbLIoKCjD1+eoyeQ1erehvtsvgMBgqd3b4+ni7PXO3OhFltKdnZ24uLiBps5SjcOSstTq8viKu+GBocN/tuCTq8W6w8waGhqPj498fHysrKxwcHBERERWVlbM2upIiMCswte60uVmmMiwvMpcjb2csMd3m8Bwr95vo8+BhhxUAAAJM0lEQVR4nO2ca3PaOBSGFUKVCxBbbSAOYV0gN9LNPbTb3YaQkKT//yetbWEbHcm2TFkd09Uz0y+ehuEZWfLLOZIJsVgsFovFYrFYLBaLxWKxWCwWi8VisVgsGGx/2ZH5QkhNeb1GHMXlnS/b2Bo51D6oIORIef2I7Civ17A1crCG1nBtDD8KJIaH4Hp9bvgVXF8DQ+krcsNv0v/nhn8a+W6rwRpCfjfDD4eLfPgUGx6K1//A+Oa6FBiKfCbqtdQaovL/NSTbAl9iQ/E6+WuNDUV2EkMRa1gB5oZFP/C+Zxh+WxvDTwIfv5O/P4tXYsN/xP/5dW0MATvkj4y19OO6rqXahp+tYeXIMvyhunxIyKHq+g9si1y2VWRczrlusVgsFovFYobLLdNcGja8YtQs7Mqw4U+6YRb607DhtW/Y0L82bHjMDBuyY8OGbeOGbcOGj55hQ+/RsOG5ccNzw4Y3XcOG3RvDhmRZw1Y5UkPTgmTZ5+Fec7MEzZP476hxw6Fhw6Fxw6slB3FJQ2o6tBGyZcRwM56IdMu44eWSsa2kYfxnvumfFsvHtpKG8Z1iPLQtH9tKGTbdxNB0aCOkv2SoKTeGF7Gh1zduODJsODJueGPEcC/+M894aCM3JtbSZmLomzckywmWNEwizYZ5QTm2MS1OXC2gofnQRsgEhJrOvhZPbR2mp6IhnSAYPgPDYc/RYbehxdwwCW3PCIYwtvm9ug67NR0afLY2kw83H9rkeqKvJahrOJ+IyYebriWGDEBsY2NndYa1yHAhtA0QDGFs819WaHjGx9BFDG1ybGP7qzfEDG2EnINaFL1boeHIFUNb13QtMQIavq3cMA1t5ittIWCloTOtx4WWYaPvipGGoRiC2EY7KzScuvihTRHbVneXNtoufmiTYxut6yjqGQ5c/NAmxzY25g5R/Oxl4OgZHrhipMEIbco28LzZMBTpdDqTydXVLOS1lGF8l6CENkKetKttlIb/qLdxd6Q5hreiIXtCMWyXqtRQ1nkN7l6dedg4O2iC0DZFMSzTBqZs9tJzdFaaRmN0G//ET0Ob6QYwR78N7NO3cc/RWUsbjf577LdoiBLayI3ePKSs9VDvOTpPi0ZtcJroLYY2hlBpC9GpJ1I22e85Ws/DYPq5C36Lhubboxwdv+dxT8wBGYbB9LsX/bBriSGdAj/Wuqv3YM5RGjYa03fot2jYQTLMbQNTNnx1JD+lIZh+qWES2mZIhjlN0vTpUGTYkKZfahh/GlJoy9m9t/h0yDdUTb+U5PNwQltmG1h8OuQZqqdfgpt8ovkGMEfVBuZPh5yfUalhMP2a2Xqb+KFNFduCp0PG9IOGOdMvATu0qWLb3VGBX2L4eF/cecIObfLuPdop9IsNB7cHefClNK20IYU2QuAYDjXKGLvzmzSPM1BLxKm0hbSAIdU2zOcMVNpaaIYwtrFiQa1fwCNgiBXaCJmB2MaOdOdhvmEfVNrM79qLgbv3dBpsOoZtYGh+114MjG1Mo8GmYzivliZ1KKzQJsc2nQabjiGoJaKFNjm2+a+rMeS1xDSWmt+1FyO1gR9WY3jvViO0ybFNp4WoY/hekdAm796jb8UNNh3DUzHSIOzaS4CGzysxrDWBIZ6gog1chGpPlGQIIo2PaAiDaatTyMVpE3IPHSsTS+U28Ebxadc9+ac8NDyrTGhb6tCFvL/UvQWGo8qEtqUOXSgMD0TDefDGbgBzljgNrGHYFg0RQ1uZNnCe4QAYRsEb9ahFyhKHLjQMD0Bo6yMaLnHoQmHYBoa3wBBj114M3L23IT4vNA2nwJAH7wpU2kLgGIqVGmdfXokUhn1gGAXvaoQ2uUkq1jGcF3kl0jDkwRu9PcqBhy7EOoYz1jIcAcNN0RBn114MjG1iHcOp6xmKkabGDZNIg7NrLwbu3oO/8uW1VmF4JgrCWPqMaghjG/iV78jLqbZhsqcNM7TJsQ38ynfkM+0KQ3CTjsCuPczQJh+6AFuhex1pEAsNefBGPmqRMoUTTdwK3ZN+QGoYTkGkwWoAc6TYNhQNYWdDYehCw0GFQpuiDdwSltKe/BNZNHTd0wPwsJgHb+SjFgnSS1x8of3k3HUZiKepoeu674MzqRDFg3cVGsAcaAjaT0795e55SJlPgWGgd9+W9Wpx8MY+TJIC70LYfoo2tR+NH94mjEXDGRoGerfTmkqvlgTvisRSuQ2sbM7wvfvj/bfZ0DuJpp6qShobguCN1wDmFMU24OkcPYVTL1OvFh8frUpoU8S2ohNsu3l2kSGPNLEhcmhTxLatgtZFcd8C1BLxGsAc2AYuPMFWaMiDdxracI5apEixbfKrhqNKhTbF7r3WLxrOK95VaABzpNjm/ZphIw7eyefhhjbFS1zYuKe5v1Rh16j1DyrUAOZI0Zr5s4eXeqZllmFg93hwGu+8xD9qkQKbpOGXomzj6u7FCV+UoWUYDN5o8L65sKO2Gu1RTsahC0p9Nrl7OZIs5b36jbP27SbYL1yd0JZ/6IL6tPO2Xxcm5q6oF048V3GYpBINYE5BGzi4Y73AMl1+dsVbU2EXGSZ/b/oFyTIaTdLA0h9uvY7DickNo1vzHt6aiyCfj11E9917wbwczh7GvXC3SW16q7o1F0hDG24tMaTMu/cCS/pzoJx4mYaYDWBOyVcm071Cu5DqhLbyr0zWe5tZFXbtxZR9ZbKGYbNClbaQVRs2m+7FSZKUsCttISW31OQaNpubF3utxQorfiwt/crkbMNg8PZONkCAOMHWI6Vfmaw2DAfvpCV/Etr52EVK7t6TDIN1pXkhD97cEHPXXkzJ3XvAMFpX1HYh6LXEkOtyD8QFQ3ldkfDwQxshoxn1SgxjbBitK7l2lHVbW/gP/IjH647naU7H0DBrXVnA97zJcUX0ODftrVaXaVjuRbdm9szjgze8xC6TKjk/vmKFN+xJzrrCB4/NqjV4gP7lUGsoMwfvGv/HRCHng+dSa08yePT5qQI5W5PRdafMUPpet3ONu+diCcK1x9OwpMxrXU7XZ/BEgrWnm3vDMq97Vel1RYfMtSesM67DuqJDsPaAxwj1PX+rva63pprHdO2J8srarSs6BGvPhhetK9jf5L9k9LTu64rFYrFYLBaLxWKxWCwWi8VisVgsFovF8vvyL/UmS1kSyljzAAAAAElFTkSuQmCC",
          starsTotal: 3,
          starsActive: 3,
        },
        {
          id: 3,
          name:"JS",
          imageUrl: "https://thumbs.dreamstime.com/b/javascript-logo-javascript-logo-white-background-vector-format-available-136765881.jpg",
          starsTotal: 3,
          starsActive: 3,
        },
        {
          id: 4,
          name:"BS",
          imageUrl: "https://miro.medium.com/max/1206/1*KWBfLD6aEEHNWyuYmL2CVw.png",
          starsTotal: 3,
          starsActive: 3,
        },
        {
          id: 5,
          name:"React",
          imageUrl: "data:image/png;base64,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",
          starsTotal: 3,
          starsActive: 3,
        },
        {
          id: 6,
          name:"SQL",
          imageUrl: "https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.jpg",
          starsTotal: 3,
          starsActive: 3,
        },
        {
          id: 7,
          name:"Python",
          imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC9CAMAAACTb6i8AAAAqFBMVEX////+0UI1caMsbaH+zzL+0DuVsMR/oLsyb6L8///90UP+zzj+6rX+zzH//vr90DceZ53/2Gz+9dqwwtB5m7j+8cdNf6v1+fcZZZz945JqkrVkjbLU3+j85Zv+5Jf+3oT98c3e5uz++u9Xhq2Jp8Gkvc7L2OHm7O0+eaOcs8iRrsjF0t6CpbxXhqo2cJ66zdr94Iv76Kb99+D/23nP2+f81E/92GX86rD0iL3dAAAEWElEQVR4nO3bC3OiOhgGYG6pICJ4q9ZqLXhb9ay3XfX//7OTKN1KCCqzrJkJ7zNth2mnM8nb5CMJVNMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYg4juxGydQebZaX/Pmb67cl0NpfdIkm6rfd1EJimbdiMaZpBYI9fQtnter7uhKXAo5H0xgPZbXuymW2mgrikYZi9iezWPdWMjQlbNDKYoF+X3cAn+mEba/N1sTQywniR3cDnWfVof/+jF92fwjBsozw3lFZg2OvzimIgLhvBQnYTn4ZlMT5fzcUV1KxIbuHztEzD/nG+CsXjolxZGMGUXbWRRcBqQmW26WesMsqWhUHX3BlRlC+LG0qVhX3NSC25SpTF5pWztkubRXx84zjd2CYocRacmSCL+oXspv0b89Zi8ZKwvHxdLvl7K83C8fyz6luk3Pnf6ic7xMoiqJ1e9Ux3rZ1iYVR64u159j3V0794W6XC6N9bUQjmiP4dxk52+wv0EuQZFaksdKspuweFGeQbFeksyC9lZon49Op2Ftp1FrqvysAIezmjMMwJlwV5k92JgkyytqO3sqgnszgosuh6zTtFjKClRYksdG8vuxeFCDMeg9waF6G2T2bh1mR3oxD8ZuOBKPqaVrOSWXzI7kYhFrmzCOaa00hEQe+qsrtRiLyl0zR/a1rTrSazaMjuRiEyzrrF2IP2UKPDgnDjoqHEaqsvLp1mwOn16IfZXrHfGbq6klm8C8aFaY6nm9nZ70EspM7PUR1na+llycIO2jceHke1Az8q1MkiNUfoUoqKmrvhcPgRe6O21OjopwaFOlnw9cKmUdSd6ONgWS5FCHF9n32wK/opSEKZLPj7iE1XUk6HiP762RTJgl9fBKHm1Lz73U9mocZaa5rMgr15sfdzRqGTkexuFGKWPOBj79yMxEXhBvckuxuF4PapwUqr5x4WuvcpuxvFeE2Wi4HWzFst6BxR5CwnWTxpFp3cWbhqlAv+AIPeRmr57qe6OlPk/Grrtx7Lonq/+9fIUXYXCrMK/nJcuKo8EtCS2zOaxSm997rJG8ruQIHma/MvsvC2sttfqND4s8jImwVRZJn1rVsx49cvaO08cfWiSrwvFuX7FnsLxWVf9MNHJLvtxZtPK+2zeap2klFTYL/f009F1liZ+HFB4tpYxn9HPPncgf+oE/uMNUsTSo3LQifWFVY21DiteEQqi9S9Q5Xtx3131+DIQq+6LnEJsmCsYaQ1j64yp5uPyMjiMhqiKsbFn0OKLSlXFsIpEmfxRso0R/biM77LaKgfSjVHNP7tiq/auYvqe/YzS7Wt6Q17XRyGezgSOkN0Vd5gfMhnxiPkC1+NFxgfFR2tjDSIdVTwxOK2TsNPx0F8r9EpzR71SnQaHeKDLPYiBt2eHn7tyjU9rjha/bNTq51Op92p1mlGdfYtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmf4HbY9TbDBhueIAAAAASUVORK5CYII=",
          starsTotal: 3,
          starsActive: 3,
        },
        {
          id: 8,
          name:"Flask",
          imageUrl: "https://images.squarespace-cdn.com/content/v1/54bfa78be4b05dd5e231c4f3/1464622872034-VMZZU8FPH0V0CBUZ4VPL/flask_small.png",
          starsTotal: 3,
          starsActive: 3,
        },
       
      ],

    Projects : [
        {
          id: 1,
          title: "Project 1",
          imageUrl: "https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          Excerpt: "This is my Project about...",
          body:"Body 1",
        },
        {
          id: 2,
          title: "Project 2",
          imageUrl: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          Excerpt: "This is my Project about...",
          body:"Body 2",
        },
        {
          id: 3,
          title: "Project 3",
          imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHdvcmslMjBmcm9tJTIwaG9tZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          Excerpt: "This is my Project about...",
          body:"Body 3",
        },
        {
          id: 4,
          title: "Project 4",
          imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRlc2t0b3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          Excerpt: "This is my Project about...",
          body:"Body 4",
        },
      ],

      Blogs : [
        {
          id: 1,
          title: "Blog 1",
          imageUrl: "https://images.unsplash.com/19/desktop.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
          Excerpt: "This Blog is about...",
          body:"Body 1",
        },
        {
          id: 2,
          title: "Blog 2",
          imageUrl: "https://images.unsplash.com/1/work-stations-plus-espresso.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
          Excerpt: "This Blog is about...",
          body:"Body 2",
        },
        {
          id: 3,
          title: "Blog 3",
          imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
          Excerpt: "This Blog is about...",
          body:"Body 3",
        },
        {
            id: 4,
            title: "Blog 4",
            imageUrl: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            Excerpt: "This Blog is about...",
            body:"Body 4",
          },
      ],
    
  } ;

  render(){
      return(
          <Context.Provider value={this.state}>
              {/* We'll be returning this class to our components , through value prop and in this class there will be a children prop */}
              {/* Also, instead of accessing individual members of the state (this.state.Projects), we'll be passing the whole state */}
              {this.props.children}
          </Context.Provider>
      );
  }
}

export const Consumer=Context.Consumer;

// We are exporting Consumer property of React.Contextand storing it into the COnsumer variable so that it can be accessed by the Consumer class

