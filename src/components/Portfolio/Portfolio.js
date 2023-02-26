import './Portfolio.css';

const Portfolio = () => {
    return (        
        <section id="portfolio" className="flex horizontal-center margin-section">
            <div className="flex flex-column">
                <div className="caption small-width">
                    <h2 className="title-small">Przykładowe projekty</h2>
                </div>
                <div className="flex wide-width">
                    <div>HTML/CSS</div>
                    <div>JavaScript</div>
                    <div>React</div>
                    <div>Github</div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;