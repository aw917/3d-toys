import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Route, Link, Switch } from "react-router-dom";

const Favorites = () => {

    const [favorites, setFavorites] = useState([]);

    // get API
    const getBlogPosts = async () => {
        try {
            const res = await fetch('/favorites');
            const json = await res.json();
            let favoritesArr = json.favorites;
            setFavorites(favoritesArr);
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getBlogPosts();
      }, [])

    console.log(favorites)
    
    return (
        <div>
        <h1>Favorites</h1>
        <div className="favorite-grid-container">
        {
            favorites.length ? favorites.map((el, i) => {
                return (
                    <div className="favorites-container">
                        <h2>Cube</h2>
                        <ul>
                            <li key={`${el._id}l`}>Length: {el.length}</li>
                            <li key={`${el._id}h`}>Height: {el.height}</li>
                            <li key={`${el._id}w`}>Width: {el.width}</li>
                            <li key={`${el._id}c`}>Color: {el.color}</li>
                            <li key={`${el._id}wf`}>Wireframe: {el.wireFrame ? "yes" : "no"}</li>
                        </ul>
                    </div>
                )
                }
            )
            : "fake text"
        }
        </div>
        </div>
    )
}

export default Favorites;