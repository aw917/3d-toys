// Code taken from https://github.com/lwmaranto/react-three-interactive 

import React, { useRef } from "react";

export default class ShapeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shapeLength: props.shapeLength,
      shapeWidth: props.shapeWidth,
      shapeHeight: props.shapeHeight,
      shapeColor: props.shapeColor,
      // num of cubes
      wireFrame: props.wireFrame
    }

    // this.numberOfCubes = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // checkbox log from http://react.tips/checkboxes-in-react/


  handleChange(evt) {
    this.setState({
      [evt.target.name]: (evt.target.value),
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onShapeChange(this.state);
  }

  render() {
    const shapeLength = this.state.shapeLength;
    const shapeWidth = this.state.shapeWidth;
    const shapeHeight = this.state.shapeHeight;
    const shapeColor = this.state.shapeColor;
    // const numberOfCubes = this.numberOfCubes;
    const wireFrame = this.state.wireFrame;
    return (
      <div className="cubeform-inputs">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label htmlFor="shapeLength">
              {" "}
              Length{" "}
              <span className={shapeLength ? "" : "warning"}>
                (required)
              </span>
            </label>
            <input
              onChange={this.handleChange}
              name="shapeLength"
              type="number"
              min="1"
              value={shapeLength}
            />

            <label htmlFor="shapeWidth">
              {" "}
              Width{" "}
              <span className={shapeWidth ? "" : "warning"}>
                (required)
              </span>
            </label>
            <input
              onChange={this.handleChange}
              name="shapeWidth"
              type="number"
              min="1"
              value={shapeWidth}
            />

            <label htmlFor="shapeHeight">
              {" "}
              Height{" "}
              <span className={shapeHeight ? "" : "warning"}>
                (required)
              </span>
            </label>
            <input
              onChange={this.handleChange}
              name="shapeHeight"
              type="number"
              min="1"
              value={shapeHeight}
            />

            {/* <label htmlFor="numberOfCubes">
              {" "}
              Number of Cubes{" "}
              <span className={numberOfCubes ? "" : "warning"}>
                (required)
              </span>
            </label>
            <input
              onChange={this.handleChange}
              name="numberOfCubes"
              type="number"
              min="1"
              value={numberOfCubes}
            /> */}

            <label htmlFor="shapeColor">
              {" "}
              Shape Color{" "}
              <span className={shapeColor ? "" : "warning"}>
                (optional)
              </span>
            </label>
            <input
              onChange={this.handleChange}
              name="shapeColor"
              type="text"
              value={shapeColor}
            />

             <label htmlFor="wireFrame">
              {" "}
              Toggle Wireframe{" "}
              <span className={wireFrame ? "" : "warning"}>
                (optional)
              </span>
            </label>
            <input
              // onChange={this.handleChange}
              name="wireFrame"
              type="checkbox"
              value={wireFrame}
              // checked={false}
              onChange={(e) => {
                if (this.state.wireFrame === true) {
                  this.state.wireFrame = false;
                } else {
                  this.state.wireFrame = true;
                }
              }}
            />
            <button className="button" type="submit">
              render
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}