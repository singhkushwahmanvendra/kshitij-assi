import React from 'react';
import '../index.css';
import openGenre from '../ass.js';
import 'jquery';
import uniqueId from 'react-html-id';


class Header extends React.Component  {
    constructor() {
        super()

        uniqueId.enableUniqueIds(this)
    }
    componentDidMount() {
        var script = document.createElement('script');
        script.src = '../ass.js';                        // path of external javascript file.
        script.class = "external-script";
        document.body.appendChild(script);    
    }
render() {
        return (
            
            <header>
                <div className="top"> <h1>MOVIES</h1></div>
                    <div className="tab">
                    <button className="tablinks defaultOpen" onclick={openGenre(Event, 'genre')} id="defaultOpen">
                        <h2 className="select">Genres</h2> 
                        </button>
                        <button className="tablinks" onclick={openGenre(Event, 'anime')}  >anime</button>
                        <button className="tablinks" onclick={openGenre(Event, 'Romance')}>Romance</button>
                        <button className="tablinks" onclick={openGenre(Event, 'Thriller')}>Thriller</button>
                        <button className="tablinks" onclick={openGenre(Event, 'Sci')}>Sci-fi</button>
                        <button className="tablinks" onclick={openGenre(Event, 'Teen')}>Drama</button>
                        <button className="tablinks" onclick={openGenre(Event, 'Horror')}>Horror</button>
                    </div>
            </header>
           
        )
}
}


export default Header;