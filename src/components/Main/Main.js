import faceBig from '../../assets/face.png';
import './Main.css';

function Main() {
    return (
        <div id="main" className="window-height">
            <div className="caption flex">
                <img src={faceBig} className="face" alt="Grzegorz Kocik" aria-hidden width="81" height="81" />    
                <div>
                    <h1 className="title">Grzegorz Kocik</h1>
                    <h2 className="flex subtitle">Front-end Developer <span className="space"></span> UI Designer</h2>
                    <a href="#about" className="btn btn-default">Poznaj mnie</a>
                </div>
            </div>
        </div>
    );
}

export default Main;