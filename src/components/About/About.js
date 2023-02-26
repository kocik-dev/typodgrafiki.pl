import './About.css';

const About = () => {
    return (
        <section id="about" className="flex horizontal-center margin-section">

                <div className="caption small-width">
                    <h2 className="title-small">O mnie</h2>
                    <p><strong>Frontend developer</strong> o zapleczu graficznym z doświadczeniem w tworzeniu warstwy graficznej ecommerce. Szukam możliwości rozwoju przy projektach wykorzystujących nowe technologie (React)</p>
                    <div className="flex vertical-top">
                        <div>
                            <h3>Czuję się dobrze w:</h3>
                            <ul>   
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap</li>
                                <li>SCSS/LESS</li>
                                <li>JavaScript DOM</li>
                                <li>jQuery</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Ciąglę się uczę:</h3>
                            <ul>   
                                <li>JavaScript (object-oriented)</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </div>
                </div>

        </section>
    );
}

export default About;