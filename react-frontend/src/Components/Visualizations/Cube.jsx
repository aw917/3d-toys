// Code taken from https://github.com/lwmaranto/react-three-interactive 

import React, { Component, useRef } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import ShapeForm from "./Cube_Form";

const style = {
  height: "50vh", // we can control scene size by setting container dimensions
  width: "85vw",
  margin: "0 auto",
  marginTop: "2.5%"
};

class Cube extends Component {
  constructor(props) {
    super(props);
    this.sceneSetup = this.sceneSetup.bind(this);
    this.addCustomSceneObjects = this.addCustomSceneObjects.bind(this);
    // this.generateMultipleCubes = this.generateMultipleCubes.bind(this);
    this.startAnimationLoop = this.startAnimationLoop.bind(this);
  }

  componentDidMount() {
    this.sceneSetup();
    this.addCustomSceneObjects();
    // this.generateMultipleCubes();
    this.startAnimationLoop();
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentDidUpdate() {
    this.scene.clear();
    this.addCustomSceneObjects();
  }

  sceneSetup() {
    // this.el is a useRef
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, // fov = field of view
      width / height, // aspect ratio
      0.1, // near plane
      1000 // far plane
    );
    this.controls = new OrbitControls(this.camera, this.el);
    // set some distance from a cube that is located at z = 0
    this.camera.position.z = 50;

    this.scene.background = new THREE.Color("gray");

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.el.appendChild(this.renderer.domElement); // mount using React ref};
  }

  addCustomSceneObjects() {
    const geometry = new THREE.BoxGeometry(
      this.props.shapeLength,
      this.props.shapeWidth,
      this.props.shapeHeight
    );

    const material = new THREE.MeshPhongMaterial({
      color: this.props.shapeColor,
      side: THREE.DoubleSide,
      flatShading: true,
      shininess: 100,
      wireframe: this.props.wireFrame
    });
    
    this.cube = new THREE.Mesh(geometry, material);

    this.cube.position.x = 0;
    this.cube.position.y = 0;
    this.cube.position.z = 0;

    this.scene.add(this.cube);

    const lights = [];
    lights[0] = new THREE.PointLight("lightblue", 1, 0);
    lights[1] = new THREE.PointLight("lightblue", 1, 0);
    lights[2] = new THREE.PointLight("lightblue", 1, 0);

    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);

    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);
    
    // console.log(this.cube);

    // this.generateMultipleCubes();
  }

  startAnimationLoop() {
    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  }

  // handleWindowResize() {
  //   const width = this.el.clientWidth;
  //   const height = this.el.clientHeight;

  //   this.renderer.setSize(width, height);
  //   this.camera.aspect = width / height;
  //   this.camera.updateProjectionMatrix();
  // }

  // generateMultipleCubes() {
  //   let numberOfCubes = this.props.numberOfCubes;
  //   for (let i = 1; i < numberOfCubes; i++) {
  //     console.log(this.cube)
  //     this.addCustomSceneObjects();
  //     // Positioning logic for a 3 x 5 grid of cubes
  //     if (i % 2 === 0 && i < 5) {
  //       this.cube.position.x = (this.cube.geometry.parameters.width * i) + (i);
  //     } else {
  //       this.cube.position.x = 0 - (this.cube.geometry.parameters.width * i) - (i);
  //     }
  //     if (i >= 5) {
  //       this.cube.position.y = this.cube.geometry.parameters.height + 1
  //       if (i % 2 ===0) {
  //         this.cube.position.x = (this.cube.geometry.parameters.width * (i - 5)) + (i - 5);
  //       } else {
  //         this.cube.position.x = 0 - (this.cube.geometry.parameters.width * (i - 5)) - (i - 5);
  //       }
  //     }
  //     if (i >= 10) {
  //       this.cube.position.y = 0 - this.cube.geometry.parameters.height - 1
  //       if (i % 2 ===0) {
  //         this.cube.position.x = (this.cube.geometry.parameters.width * (i - 10)) + (i - 10);
  //       } else {
  //         this.cube.position.x = 0 - (this.cube.geometry.parameters.width * (i - 10)) - (i - 10);
  //       }
  //     }
  //     if (i > 15) {
  //       alert(`That's too many cubes!`);
  //     }
  //   }
  // }

//   saveToFavorites (e) {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3000/favorites', {
//         method:'POST',
//         headers: {
//           'Content-type' : 'application/json'
//         },
//         body: this.state
//       })
//     }
//   }
  render() {
    return <div style={style} ref={(ref) => (this.el = ref)} />;
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shapeLength: 15, //the starting length for the shape
      shapeWidth: 15, //the starting width for the shape
      shapeHeight: 15, //the starting height for the shape
      shapeColor: "hotpink",
      wireFrame: false
    }
    // this.numberOfCubes = 1;
    this.onShapeChange = this.onShapeChange.bind(this);
  }

  onShapeChange(shapeState) {
    this.setState(shapeState);
    // this.numberOfCubes = this.numberOfCubes.current;
  }

  render() {
    return (
      <>
        <Cube
          onShapeChange={this.onShapeChange}
          shapeLength={this.state.shapeLength}
          shapeWidth={this.state.shapeWidth}
          shapeHeight={this.state.shapeHeight}
          shapeColor={this.state.shapeColor}
          // numberOfCubes={this.numberOfCubes}
          wireFrame={this.state.wireFrame}
        />
        <p>Scroll to zoom, drag to rotate</p>
        <div>
          <ShapeForm
            onShapeChange={this.onShapeChange}
            shapeLength={this.state.shapeLength}
            shapeWidth={this.state.shapeWidth}
            shapeHeight={this.state.shapeHeight}
            shapeColor={this.state.shapeColor}
            // numberOfCubes={this.numberOfCubes}
            wireFrame={this.state.wireFrame}
          />
        </div>
        <form>
          <input type="submit" value="save" onClick={e => this.saveToFavorites(e)}/>
        </form>
      </>
    );
  }
}

export default Container;