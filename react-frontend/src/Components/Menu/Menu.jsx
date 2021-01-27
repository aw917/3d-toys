import { Route, Link, Switch } from "react-router-dom";

const Home = () => {
    const visualizations = [
        {name: "cube", img: ""},
        {name: "diamond", img: ""},
        {name: "sphere", img: ""},
        {name: "image", img: ""},
        {name: "wild", img: ""}
    ]
    return (
        <>
           <h1>Visualizations</h1>
           {
               visualizations.map((el, index) => {
                   return (
                    <div className="visualizations-container">
                        <a href={`/${el.name}`} >{el.name}</a>
                    </div>
                   )
               })
           }
           
        </>
    )
}

export default Home;