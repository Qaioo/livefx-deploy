import "./Intro.css"
import background from '/intro/IMG_9407.jpg'

function Intro() {
    return ( 
        <div className="introContainer" id="home" style={{ backgroundImage: `url(${background})` }}>
            <div className="caption-box">
                <h1 className="captionTitle">PONAD SETKI ZREALIZOWANYCH KONCERTÓW!</h1>
                <p className="captionText">Współpracujemy z największymi artystami w Polsce.</p>
            </div>
        </div>
     );
}

export default Intro;