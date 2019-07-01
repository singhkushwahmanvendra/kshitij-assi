import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import './index.module.css';
import './ass.js';

class App extends React.Component  {
    componentDidMount() {
        var script = document.createElement('script');
        script.src = './index.module.css';                        // path of external javascript file.
        script.class = "external-script";
        document.body.appendChild(script);
    }
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }ss
}

export default App;
