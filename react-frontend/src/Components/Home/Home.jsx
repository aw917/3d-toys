import { Route, Link, Switch } from "react-router-dom";

const Home = () => {
    return (
        <>
           <div className="home-container">
                <h1>Welcome to the 3d visualizer toy!</h1>
                <p>Visualizer is a collection of 3d visualizations using the ThreeJS and React-Fiber-Three packages.  The goal is to allow users a simple way to expirement and save visualizations that they like.  The front-end is built with React, the back is Mongoose, Express, and NodeJS.  Happy playing!</p>
           </div>
        </>
    )
}

export default Home;