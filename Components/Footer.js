import React from 'react';
import './index.module.css';

class Footer extends React.Component  {
    componentDidMount() {
        var script = document.createElement('script');
        script.src = './index.module.css';                        // path of external javascript file.
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