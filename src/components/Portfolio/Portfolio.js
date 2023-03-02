import React from 'react';
import iconHtml from '../../assets/tech/html.svg';
import iconJs from '../../assets/tech/js.svg';
import iconReact from '../../assets/tech/react.svg';
import iconGithub from '../../assets/tech/github.svg';
import './Portfolio.css';

const Portfolio = () => {
    return (        
        <section id="portfolio" className="flex horizontal-center margin-section">
            <div className="flex flex-column">
                <div className="caption small-width">
                    <h2 className="title-small">Przykładowe projekty</h2>
                </div>
                <div className="grid wide-width">
                    <a href="/html" className="box box-html" target="_blank">
                        <span >
                            <img src={iconHtml} alt="html i css" width="86" height="50" />
                            <span className="name">
                                <small>Semantyka i stylowanie</small>
                                w HTML/CSS
                            </span>
                        </span>
                    </a>
                    <div className="box box-js">
                        <div>
                            <img src={iconJs} alt="javascript" width="50" height="50" />
                            <div className="name">
                                <small>Manipulacja DOM i nie tylko</small>
                                w JavaScript
                            </div>
                        </div>
                    </div>
                    <div className="box box-react">
                        <div>
                            <img src={iconReact} alt="react" width="50" height="50" />
                            <div className="name">
                                <small>Projekt</small>
                                w React
                            </div>
                        </div>
                    </div>
                    <div className="box box-github">
                        <div>
                            <img src={iconGithub} alt="github" width="50" height="50" />
                            <div className="name">
                                <small>Moje projekty</small>
                                na Github
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;