import React from 'react';
import './index.module.css';

class Header extends React.Component  {
    componentDidMount() {
        var script = document.createElement('script');
        script.src = './index.module.css';                        // path of external javascript file.
        script.class = "external-script";
        document.body.appendChild(script);
    }
    render() {
        return (
            <div>
                <header>
                    <div className="topH"> <h1>MOVIES</h1></div>
                    <div>
                        <div className="tab">
                            <button className="tablinks" onclick="openGenre(event, 'genre')" id="defaultOpen">
                                <h2 class="select">Genres</h2>
                            </button>
                            <button class="tablinks" onclick="openGenre(event, 'anime')">anime</button>
                            <button class="tablinks" onclick="openGenre(event, 'Romance')">Romance</button>
                            <button class="tablinks" onclick="openGenre(event, 'Thriller')">Thriller</button>
                            <button class="tablinks" onclick="openGenre(event, 'Sci')">Sci-fi</button>
                            <button class="tablinks" onclick="openGenre(event, 'Teen')">Drama</button>
                            <button class="tablinks" onclick="openGenre(event, 'Horror')">Horror</button>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}


export default Header;