import { Route, Link, Switch } from "react-router-dom";

const Home = () => {
    const visualizations = [
        {name: "cube", img: ""},
        {name: "hypercube", img: ""},
    ]
    return (
        <>
        <div className="visualizations-container">
           <h1>Visualizations</h1>
           {
               visualizations.map((el, index) => {
                   return (
                    <div>
                        <a href={`/${el.name}`} >{el.name}</a>
                    </div>
                   )
               })
           }
        </div>
        </>
    )
}

export default Home;