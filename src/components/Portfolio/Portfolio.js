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
                    <a href="http://html.typodgrafiki.pl/" className="box box-html" target="_blank" rel="noopener noreferrer">
                        <span>
                            <img src={iconHtml} alt="html i css" width="86" height="50" />
                            <span className="name">
                                <small>Semantyka i stylowanie</small>
                                w HTML/CSS
                            </span>
                        </span>
                    </a>
                    <a href="http://js.typodgrafiki.pl/" className="box box-js" target="_blank" rel="noopener noreferrer">
                        <span>
                            <img src={iconJs} alt="javascript" width="50" height="50" />
                            <span className="name">
                                <small>Manipulacja DOM i nie tylko</small>
                                w JavaScript
                            </span>
                        </span>
                    </a>
                    <a href="http://react.typodgrafiki.pl/" className="box box-react" target="_blank" rel="noopener noreferrer">
                        <span>
                            <img src={iconReact} alt="react" width="50" height="50" />
                            <span className="name">
                                <small>Projekt</small>
                                w React
                            </span>
                        </span>
                    </a>
                    <a href="https://github.com/typodgrafiki" className="box box-github" target="_blank" rel="noopener noreferrer">
                        <span>
                            <img src={iconGithub} alt="github" width="50" height="50" />
                            <span className="name">
                                <small>Moje projekty</small>
                                na Github
                            </span>
                        </span> 
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;