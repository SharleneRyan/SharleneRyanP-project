import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import mainTitle from "../../data/Titles";

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Title:['Maori Services','Government Services','Youth Services','Social Services']
            Title: mainTitle,
            selectedTitle: ""
        };
    }

    chooseTitle = title => {
        this.setState({
            selectedTitle: title
        });
    };

    getTitles() {
        if (this.state.selectedTitle.length > 0) {
            console.log(this.state.selectedTitle);
            const selectedGroup = mainTitle.find(
                item => item.title === this.state.selectedTitle
            );

            const titles = [
                selectedGroup.subtitle1,
                selectedGroup.subtitle2,
                selectedGroup.subtitle3,
                selectedGroup.subtitle4
            ];

            return titles;
        } else {
            return mainTitle.map(data => data.title);
        }
    }

    render() {
        // console.log("props", this.props);
        this.state.selectedTitle &&
            this.props.settitle(this.state.selectedTitle);
        return (
            <div>
                <div className="grid-container">
                    {this.getTitles().map(title => {
                        return (
                            <Zoom>
                                <div onClick={() => this.chooseTitle(title)}>
                                    {" "}
                                    <p
                                        style={{
                                            textAlign: "center"
                                        }}
                                    >
                                        {" "}
                                        {title}
                                    </p>
                                </div>
                            </Zoom>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Grid;
