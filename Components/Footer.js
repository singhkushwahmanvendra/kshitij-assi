import React from 'react';
import '../index.css';

class Footer extends React.Component  {
    componentDidMount() {
        var script = document.createElement('script');
        script.src = '../ass.js';                        // path of external javascript file.
        script.class = "external-script";
        document.body.appendChild(script);
    }
    render() {
        return (
            <div>
                  <footer>
                    <div className="footer">
                      <h3>&copy; copyright MANVENDRA SINGH KUSHWAH 2019</h3>
                     </div>
                </footer>
               
            </div>
        )
    }
}

export default Footer;