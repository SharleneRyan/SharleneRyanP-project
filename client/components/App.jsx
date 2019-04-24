import React, { Component } from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid";
import Footer from "./Footer";
import Zoom from "react-reveal/Zoom";
import Contact from './Contact'
import mainTitle from "../../data/Titles";
import { catchClause } from "@babel/types";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Community Services App"
        };
    }

    settitle = newtitle => {
        console.log("newtitle", newtitle);
               if (newtitle !== this.state.title){
         this.setState({ title: newtitle });
        }
    };

    render() {
        return (
            <div>
                <div className="app">
                    <div className="header">
                        <header>
                            <img
                                src="https://www.police.govt.nz/sites/all/themes/twbs_police/logo.png"
                                alt=""
                            />
                            <h1>
                                <Zoom>
                                    <p />
                                    <div className="Title">
                                        <h1>{this.state.title}</h1>
                                    </div>
                                    <p />
                                </Zoom>
                                <br />
                            </h1>
                        </header>
                    </div>

                    <p />
                    <Grid settitle={this.settitle} />
                    <p />
                      <Contact />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
