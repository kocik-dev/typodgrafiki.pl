import React from 'react';
import { Header } from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import './App.css';
import './darkMode.css';

const cookieLightMode = ('; '+document.cookie).split(`; tog_lm=`).pop().split(';')[0];

class App extends React.Component {
    
    state = {
        lightMode: !cookieLightMode ? 0 : 1
    }
    
    changeModeFn() {
        this.setState({ 
            lightMode: this.state.lightMode === 0 ? 1 : 0
        });
        
        if(this.state.lightMode === 0) {
            document.cookie = "tog_lm=1";    
        }else{
            document.cookie = 'tog_lm=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
        }
    }
    
    render() {
        return (
            <div className={this.state.lightMode ? 'light-mode bg-gradient' : 'bg-gradient'}>
                <Header 
                    lightMode={this.state.lightMode}  
                    changeModeFn={() => this.changeModeFn()}
                />
                <Main />
                <About />
                <Portfolio />
                <Contact />
                <Footer />
            </div>
        )    
    }   
}

export default App