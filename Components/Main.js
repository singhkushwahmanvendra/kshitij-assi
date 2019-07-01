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
    document.getElementById(genreName).style.display = "block";
    evt.currentTarget.className += " active";
}

class Main extends React.Component {
    componentDidMount() {
        var script = document.createElement('script');
        script.src = '../ass.js';                        // path of external javascript file.
        script.class = "external-script";
        document.body.appendChild(script);
    }
    render() {
        return (
            <main>
                <div id="genre" className="tabcontent imgt" >
                    <button onclick="openGenre(event, 'anime')"><img src="./Images/anime.jpg" alt='no1' /> </button>

                    <button onclick="openGenre(event, 'Romance')">
                        <img src="./Images/Romance.jpg" alt='no1' />
                    </button>

                    <button onclick="openGenre(event, 'Thriller')">
                        <img src="./Images/Thriller.jpg" alt='no1' />
                    </button>

                    <button onclick="openGenre(event, 'Sci')">
                        <img src="./Images/Sci.jpg" alt='no1' />
                    </button>

                    <button onclick="openGenre(event, 'Teen')">
                        <img src="./Images/Drama.jpg" alt='no1' />
                    </button>

                    <button onclick="openGenre(event, 'Horror')">
                        <img src="./Images/Horror.jpg" alt='no1' />
                    </button>

                </div>

                <div id="anime" className="tabcontent">
                    <h3>ANIME</h3>
                    <p>London is the capital city of England.</p>
                </div>

                <div id="Romance" className="tabcontent">
                    <h3>ROMANCE</h3>
                    <p>Paris is the capital of France.</p>
                </div>

                <div id="Thriller" className="tabcontent">
                    <h3>THRILLER</h3>
                    <p>Tokyo is the capital of Japan.</p>
                </div>
                <div id="Sci" className="tabcontent">
                    <h3>SCI-Fi</h3>
                    <p>London is the capital city of England.</p>
                </div>

                <div id="Teen" className="tabcontent">
                    <h3>DRAMA</h3>
                    <p>Paris is the capital of France.</p>
                </div>

                <div id="Horror" className="tabcontent">
                    <h3>HORROR</h3>
                    <p>Tokyo is the capital of Japan.</p>
                </div>
            </main>
        )
    }
}

export default Main;