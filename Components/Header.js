import React from 'react';
import '../index.css';

function openGenre(evt, genreName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
   // document.getElementById(genreName).style.display = "block";
    //evt.currentTarget.className += " active";
}

class Header extends React.Component  {
    componentDidMount() {
        var script = document.createElement('script');
        script.src = '../ass.js';                        // path of external javascript file.
        script.class = "external-script";
        document.body.appendChild(script);
    }
    render() {
        return (
            <div>
                <header>
                    <div className="top"> <h1>MOVIES</h1></div>
                    <div>
                        <div className="tab">
                            <button className="tablinks" onclick={openGenre(Event, 'genre')} id="defaultOpen">
                                <h2 class="select">Genres</h2>
                            </button>
                            <button class="tablinks" onclick={openGenre(Event, 'anime')}>anime</button>
                            <button class="tablinks" onclick={openGenre(Event, 'Romance')}>Romance</button>
                            <button class="tablinks" onclick={openGenre(Event, 'Thriller')}>Thriller</button>
                            <button class="tablinks" onclick={openGenre(Event, 'Sci')}>Sci-fi</button>
                            <button class="tablinks" onclick={openGenre(Event, 'Teen')}>Drama</button>
                            <button class="tablinks" onclick={openGenre(Event, 'Horror')}>Horror</button>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}


export default Header;