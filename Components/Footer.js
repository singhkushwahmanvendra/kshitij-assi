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

class Footer extends React.Component  {
    componentDidMount() {
        var script = document.createElement('script');
        script.src = '../ass.js';                        // path of external javascript file.
        script.class = "external-script";
        document.body.appendChild(script);
    }
    render() {
        return (
            <footer>
                <div className="footer">
                    <h3>&copy; copyright MANVENDRA SINGH KUSHWAH 2019</h3>
                </div>
            </footer>
        )
    }
}

export default Footer;